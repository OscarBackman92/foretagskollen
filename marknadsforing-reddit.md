# Reddit-marknadsföring — Textverket

Claude i Chrome och automatiska Reddit-API:er fungerar **inte pålitligt** (inloggning, 403-blockering). Använd det här verktyget istället.

## Snabbstart (30 sek)

```bash
npm run reddit:scan
```

Öppna **`reddit-session.md`** i projektroten. Där finns:

1. **Söklänkar** — klicka, öppna Reddit i webbläsaren, hitta en relevant tråd
2. **Färdiga kommentarsmallar** — anpassa och klistra in som svar
3. **Loggtabell** — bocka av vad du postat

### Valfritt: försök auto-hämta trådar

```bash
npm run reddit:scan -- --online
```

Försöker hämta trådar via Pullpush-arkiv. Fungerar ibland — om inte, använd söklänkarna (de fungerar alltid).

---

## Veckorutin (15 min)

1. `npm run reddit:scan`
2. Öppna `reddit-session.md`
3. Klicka 3–4 söklänkar i **r/sweden** (prioritet 1)
4. Välj **1–2 trådar** där någon faktiskt frågar om mejl/texter/egenföretagande
5. Kopiera rätt mall, **anpassa** till tråden, posta
6. Fyll i loggen längst ner

---

## Regler

- **Svara på frågor** — länka bara när det hjälper
- **Aldrig egen reklampost** om Textverket
- **Max ~1 länk-kommentar per dag**
- **Disclosure:** "jag är involverad i Textverket" om du postar som byggare
- **Läs tråden först** — posta inte samma text två gånger

---

## Varför inte Claude i Chrome?

| Problem | Lösning här |
|---------|-------------|
| Reddit kräver inloggning | Du postar manuellt i webbläsaren |
| API blockerat (403) | Offline söklänkar + mallar |
| Lång prompt, många steg | Ett kommando → en fil |
| Risk för spam | Du väljer själv 1–2 trådar/vecka |

---

## Filer

| Fil | Syfte |
|-----|--------|
| `scripts/reddit-marketing.mjs` | Genererar session-filen |
| `scripts/reddit-config.mjs` | Mallar och sökord |
| `reddit-session.md` | Din arbetslista (genereras, ej i git) |
| `marknadsforing.md` | LinkedIn, kataloger, Facebook m.m. |

---

## Produktlänkar

| Situation | URL |
|-----------|-----|
| Offertmejl | https://www.textverket.se/verktyg/offertmejl |
| Faktura/påminnelse | https://www.textverket.se/verktyg/fakturatext |
| Kundmejl | https://www.textverket.se/verktyg/kundmejl |
| Produkttext | https://www.textverket.se/verktyg/produkttext |
| Blogg/guider | https://www.textverket.se/blogg |
