# Textverket

Gratis AI-skrivverktyg för svenska småföretag — offertmejl, produkttexter, kundmejl och mer.

**Produktion:** [textverket.se](https://www.textverket.se)

## Teknik

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Claude (Anthropic) via `/api/generate`
- Google AdSense + GA4

## Kom igång lokalt

```bash
npm install
cp .env.example .env.local   # fyll i API-nycklar
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000).

## Miljövariabler

| Variabel | Krävs | Beskrivning |
|----------|-------|-------------|
| `ANTHROPIC_API_KEY` | Ja (prod) | API-nyckel för Claude |
| `UPSTASH_REDIS_REST_URL` | Rek. (prod) | Upstash Redis för rate limiting |
| `UPSTASH_REDIS_REST_TOKEN` | Rek. (prod) | Upstash-token |
| `NEXT_PUBLIC_ADSENSE_SLOT_TOOLS` | Nej | AdSense-slot för verktygssidor |
| `NEXT_PUBLIC_ADSENSE_SLOT_BLOG` | Nej | AdSense-slot för blogg |

Utan Upstash används in-memory rate limiting (svagare på serverless).

## Skript

```bash
npm run dev      # utvecklingsserver
npm run build    # produktionsbuild
npm run start    # kör produktionsbuild
npm run lint     # ESLint
npm run reddit:scan   # Reddit-marknadsföring → reddit-session.md
```

## Deploy

Projektet är konfigurerat för Vercel. Sätt miljövariablerna i Vercel-projektet och deploya från `main`.

`next.config.mjs` redirectar `textverket.se` → `www.textverket.se`.

## Projektstruktur

```
app/
  api/generate/     # AI-textgenerering
  verktyg/          # Sex textverktyg + ToolClient
  blogg/            # SEO-guider och mallar
  components/       # Delade UI-komponenter
  lib/              # Rate limit, analytics, content, routes
```

## Repo-namn

Git-mappen heter `foretagskollen` men produkten är **Textverket** (`package.json`: `textverket`).
