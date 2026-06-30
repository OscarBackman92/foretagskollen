/** Konfiguration och svarsmallar för Reddit-marknadsföring (Textverket). */

export const SITE = "https://www.textverket.se";

export const SUBREDDITS = [
  { name: "sweden", label: "r/sweden", priority: 1 },
  { name: "Foretagande", label: "r/Foretagande", priority: 2 },
  { name: "stockholm", label: "r/stockholm", priority: 3 },
  { name: "Gothenburg", label: "r/Gothenburg", priority: 3 },
];

export const SEARCH_TASKS = [
  { q: "offertmejl", template: "offert", label: "Offertmejl" },
  { q: "offert mejl", template: "offert", label: "Offert mejl" },
  { q: "betalningspåminnelse", template: "faktura", label: "Betalningspåminnelse" },
  { q: "obetald faktura", template: "faktura", label: "Obetald faktura" },
  { q: "kundmejl", template: "kundmejl", label: "Kundmejl" },
  { q: "egenföretagare mejl", template: "generell", label: "Egenföretagare + mejl" },
  { q: "enskild firma skriva", template: "generell", label: "Enskild firma" },
  { q: "produkttext webshop", template: "produkt", label: "Produkttext" },
  { q: "ChatGPT svenska företag", template: "chatgpt", label: "ChatGPT svenska" },
  { q: "driva eget admin", template: "generell", label: "Driva eget admin" },
];

export const TEMPLATES = {
  offert: {
    label: "Offertmejl",
    draft: `Bra fråga. Det som brukar funka för mig:

1. Ämnesrad med kundens namn eller företag — inte bara "Offert"
2. Bekräfta att du förstått uppdraget i första meningen
3. Pris, tidsram och tydligt nästa steg ("säg till om det ser bra ut så bokar vi in")

Jag skrev en kort guide med exempel här om du vill ha struktur: ${SITE}/blogg/offertmejl-guide

Om du vill spara tid finns även ett gratis verktyg som formulerar ett första utkast på svenska (inget konto): ${SITE}/verktyg/offertmejl — men läs alltid igenom och lägg till detaljer som bara du vet.

(Disclosure: jag är involverad i Textverket, men svaret är genuint — hade gett samma råd oavsett.)`,
  },

  faktura: {
    label: "Betalningspåminnelse",
    draft: `Jag vet att det känns jobbigt, men tre steg brukar räcka:

1. **Vänlig påminnelse** — "kan ha missats i flödet"
2. **Bestämd** — tydligt nytt datum + ev. påminnelseavgift 60 kr enligt lag
3. **Sista varning** innan inkasso

Håll tonen saklig, inte passivt aggressiv. Mallar + svenska regler (dröjsmålsränta m.m.): ${SITE}/blogg/betalningspaminnelse-mall

Vill du generera ett första utkast: ${SITE}/verktyg/fakturatext (gratis, inget konto). Justera alltid belopp och datum själv.

(Disclosure: jag är kopplad till Textverket — tipsen ovan gäller oavsett verktyg.)`,
  },

  kundmejl: {
    label: "Kundmejl",
    draft: `Beror på situationen, men generellt:

- **Uppföljning:** kort, referera till senaste kontakt, ett tydligt nästa steg
- **Reklamation:** erkänn problemet direkt, erbjud lösning — inte bortförklaring
- **Tack efter affär:** genuint, inte säljigt — perfekt tillfälle att fråga om rekommendation

Färdiga mallar: ${SITE}/blogg/kundmejl-mallar
Gratis generator om du vill ha ett utkast: ${SITE}/verktyg/kundmejl

(Disclosure: jag driver/marknadsför Textverket.)`,
  },

  produkt: {
    label: "Produkttext",
    draft: `Produktbeskrivningar som säljer fokuserar på **nytta**, inte bara specifikationer. Fråga "vad betyder det här för kunden?" efter varje rad.

Exempel: istället för "500 ml vakuumisolering" → "kaffet är fortfarande varmt när du kommer till jobbet".

Guide med före/efter-exempel: ${SITE}/blogg/produktbeskrivningar-guide
Snabb generator: ${SITE}/verktyg/produkttext

(Disclosure: jag är involverad i Textverket.)`,
  },

  chatgpt: {
    label: "ChatGPT vs nischat verktyg",
    draft: `ChatGPT är bra generellt men ofta engelskoptimerat — svenska affärstexter kan bli lite "översatta" om man inte promptar nog.

Om du specifikt skriver offertmejl, kundmejl, produkttexter etc. på svenska kan ett nischat gratisverktyg spara tid: varje läge har en prompt för just den texttypen. ${SITE} — inget konto, ad-supported.

ChatGPT vinner om du vill ha fri brainstorming. Textverket vinner om du vill ha "klart att klistra in"-format för vanliga företagssituationer.

(Disclosure: ja, jag är kopplad till Textverket — jämför gärna själv och välj vad som passar.)`,
  },

  generell: {
    label: "Generellt småföretag / skrivande",
    draft: `Som egenföretagare skriver man otroligt mycket som inte känns som "riktigt jobb" — offerter, påminnelser, kundmejl — men det är ofta första intrycket.

Ett trick: skriv bara stödpunkter (vad, till vem, pris, deadline) och låt ett verktyg formulera. Jag använder ibland ${SITE} — gratis, svenska affärstexter, inget konto. Sex lägen (offert, produkt, kundmejl, sociala medier, faktura, fritext).

Läser alltid igenom och personliggör innan jag skickar.

(Disclosure: jag är involverad i projektet, men hade rekommenderat samma approach även om jag inte vore det.)`,
  },
};

export function searchUrl(subreddit, query) {
  const q = encodeURIComponent(query);
  return `https://www.reddit.com/r/${subreddit}/search/?q=${q}&restrict_sr=1&sort=new&t=month`;
}

export function redditUrl(permalink) {
  if (permalink.startsWith("http")) return permalink;
  return `https://www.reddit.com${permalink}`;
}

/** Försök hämta trådar via Pullpush (arkiv). Returnerar [] vid fel. */
export async function tryFetchThreads(subreddit, query, limit = 5) {
  const url = `https://api.pullpush.io/reddit/search/submission/?subreddit=${encodeURIComponent(subreddit)}&q=${encodeURIComponent(query)}&size=${limit}&sort=desc`;
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(15000) });
    if (!res.ok) return [];
    const json = await res.json();
    return (json?.data || []).filter((p) => p.title && !p.removed_by_category);
  } catch {
    return [];
  }
}
