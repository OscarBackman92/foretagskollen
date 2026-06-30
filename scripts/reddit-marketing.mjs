#!/usr/bin/env node
/**
 * Genererar reddit-session.md med söklänkar + kommentarsutkast.
 * Reddit blockerar ofta API från script — därför offline-first.
 *
 *   npm run reddit:scan
 *   npm run reddit:scan -- --online   (försök hämta trådar via Pullpush-arkiv)
 */

import { writeFileSync } from "fs";
import { resolve } from "path";
import {
  SUBREDDITS,
  SEARCH_TASKS,
  TEMPLATES,
  searchUrl,
  redditUrl,
  tryFetchThreads,
} from "./reddit-config.mjs";

const DELAY_MS = 800;

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { output: "reddit-session.md", online: false };
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--output" && args[i + 1]) opts.output = args[++i];
    else if (args[i] === "--online") opts.online = true;
  }
  return opts;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function formatDate(utc) {
  if (!utc) return "—";
  return new Date(utc * 1000).toISOString().slice(0, 10);
}

function buildOfflineSection() {
  const lines = [
    `## Steg 1 — Sök trådar (klicka, läs, välj 1–2)`,
    ``,
    `Prioritet: börja med **r/sweden**, sedan r/Foretagande.`,
    ``,
    `| Prioritet | Subreddit | Sökning | Mall | Öppna |`,
    `|-----------|-----------|---------|------|-------|`,
  ];

  const primarySubs = SUBREDDITS.filter((s) => s.priority <= 2);
  for (const task of SEARCH_TASKS) {
    for (const sub of primarySubs) {
      const link = searchUrl(sub.name, task.q);
      lines.push(
        `| ${sub.priority} | ${sub.label} | ${task.label} | ${TEMPLATES[task.template].label} | [Sök](${link}) |`
      );
    }
  }

  lines.push(``);
  lines.push(`**Denna vecka:** välj max **2 trådar** där du genuint kan hjälpa. Posta max **1 kommentar med länk per dag**.`);
  return lines.join("\n");
}

function buildTemplatesSection() {
  const lines = [`## Steg 2 — Kommentarsmallar (anpassa innan du postar)`, ``];

  for (const [key, t] of Object.entries(TEMPLATES)) {
    lines.push(`### ${t.label} (\`${key}\`)`);
    lines.push(``);
    lines.push("```");
    lines.push(t.draft);
    lines.push("```");
    lines.push(``);
  }
  return lines.join("\n");
}

function buildLogSection() {
  return [
    `## Steg 3 — Logg (bocka av efter post)`,
    ``,
    `| Datum | Subreddit | Tråd-URL | Mall | Publicerad |`,
    `|-------|-----------|----------|------|------------|`,
    `| | | | | [ ] |`,
    `| | | | | [ ] |`,
    `| | | | | [ ] |`,
    ``,
  ].join("\n");
}

function buildOnlineSection(threads) {
  if (!threads.length) {
    return [
      `## Bonus — Automatiskt hittade trådar`,
      ``,
      `_Inga trådar kunde hämtas automatiskt (Reddit blockerar ofta API). Använd söktabellen ovan._`,
      ``,
    ].join("\n");
  }

  const lines = [
    `## Bonus — Automatiskt hittade trådar (verifiera att de fortfarande är öppna)`,
    ``,
  ];

  threads.forEach((item, i) => {
    const { post, template, sub } = item;
    const t = TEMPLATES[template];
    lines.push(`### ${i + 1}. ${post.title}`);
    lines.push(``);
    lines.push(`- **Subreddit:** ${sub}`);
    lines.push(`- **Datum:** ${formatDate(post.created_utc)}`);
    lines.push(`- **Länk:** ${redditUrl(post.permalink)}`);
    lines.push(`- **Mall:** ${t.label}`);
    lines.push(``);
    if (post.selftext?.trim()) {
      lines.push(`> ${post.selftext.slice(0, 200).replace(/\n/g, " ")}…`);
      lines.push(``);
    }
    lines.push(`<details><summary>Utkast till kommentar</summary>`);
    lines.push(``);
    lines.push("```");
    lines.push(t.draft);
    lines.push("```");
    lines.push(``);
    lines.push(`</details>`);
    lines.push(``);
  });

  return lines.join("\n");
}

async function fetchOnlineThreads() {
  const seen = new Set();
  const found = [];
  const subs = SUBREDDITS.filter((s) => s.priority <= 2);
  const tasks = SEARCH_TASKS.slice(0, 6);

  console.log("Försöker hämta trådar via Pullpush-arkiv…");

  for (const sub of subs) {
    for (const task of tasks) {
      const posts = await tryFetchThreads(sub.name, task.q, 4);
      for (const post of posts) {
        if (seen.has(post.id)) continue;
        seen.add(post.id);
        found.push({ post, template: task.template, sub: sub.label });
      }
      await sleep(DELAY_MS);
    }
  }

  return found.slice(0, 10);
}

async function main() {
  const opts = parseArgs();
  const now = new Date().toLocaleString("sv-SE");

  let onlineThreads = [];
  if (opts.online) {
    onlineThreads = await fetchOnlineThreads();
    console.log(`Hittade ${onlineThreads.length} trådar via arkiv-API.`);
  }

  const report = [
    `# Reddit-session — Textverket`,
    ``,
    `_Genererad ${now}. Posta INTE automatiskt — läs tråden, anpassa texten._`,
    ``,
    `## Regler`,
    `- Svara bara när du genuint kan hjälpa`,
    `- **Aldrig** egen reklampost om Textverket`,
    `- Skriv disclosure om du är kopplad till produkten`,
    `- Max ~1 kommentar med länk per dag på Reddit`,
  `- Reddit blockerar ofta bot-API — därför fungerar detta verktyg offline-first`,
    ``,
    buildOfflineSection(),
    buildTemplatesSection(),
    buildLogSection(),
    buildOnlineSection(onlineThreads),
    `---`,
    ``,
    `Se även \`marknadsforing-reddit.md\` och \`marknadsforing.md\` i projektet.`,
  ].join("\n");

  const path = resolve(process.cwd(), opts.output);
  writeFileSync(path, report, "utf8");

  console.log(`\n✓ Reddit-session sparad → ${path}`);
  console.log(`  Öppna filen, klicka söklänkar i webbläsaren, välj 1–2 trådar, kopiera mall.`);
  if (!opts.online) {
    console.log(`  Tips: npm run reddit:scan -- --online för att försöka hämta trådar automatiskt.`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
