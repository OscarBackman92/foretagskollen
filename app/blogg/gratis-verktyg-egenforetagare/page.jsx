import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";
import { blogPostJsonLd } from "../../lib/structured-data";
import AdUnit from "../../components/AdUnit";

export const metadata = {
  title: "Gratis verktyg för dig som driver eget — 15 som sparar tid och pengar (2026) — Textverket",
  description:
    "15 gratis verktyg för svenska egenföretagare: bokföring, fakturering, design, webbplats, projekthantering, sociala medier och analys.",
  keywords: "gratis verktyg egenföretagare, bokföring gratis, fakturering gratis, verktyg frilansare Sverige, egenföretagare verktyg",
  alternates: {
    canonical: "/blogg/gratis-verktyg-egenforetagare",
  },
  openGraph: {
    title: "Gratis verktyg för dig som driver eget — 15 som sparar tid och pengar (2026)",
    description:
      "De bästa gratis verktygen för svenska egenföretagare. Gratis AI-verktyg på textverket.se.",
    url: "https://www.textverket.se/blogg/gratis-verktyg-egenforetagare",
    siteName: "Textverket",
    locale: "sv_SE",
    type: "article",
    images: [
      {
        url: `/og?title=${encodeURIComponent("15 gratis verktyg för dig som driver eget")}`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

const S = {
  page: {
    minHeight: "100vh",
    background: "transparent",
    fontFamily: "'Inter', sans-serif",
    color: "#EAEEFF",
  },
  navWrap: { borderBottom: "1px solid rgba(125, 140, 255, 0.16)" },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 28px",
    maxWidth: 960,
    margin: "0 auto",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    textDecoration: "none",
    color: "#EAEEFF",
  },
  navLinks: { display: "flex", alignItems: "center", gap: 24 },
  navLink: { fontSize: 14, fontWeight: 500, color: "#A7B1D6", textDecoration: "none" },
  navCta: {
    background: "linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)",
    color: "#fff",
    padding: "9px 20px",
    borderRadius: 100,
    fontSize: 14,
    fontWeight: 600,
    textDecoration: "none",
  },
  article: { maxWidth: 720, margin: "0 auto", padding: "52px 28px 80px" },
  breadcrumb: {
    fontSize: 13,
    color: "#7E88B5",
    marginBottom: 28,
    display: "flex",
    gap: 6,
    alignItems: "center",
  },
  breadcrumbLink: { color: "#7E88B5", textDecoration: "none" },
  categoryPill: {
    display: "inline-block",
    background: "rgba(129, 140, 248, 0.13)",
    color: "#A5B4FC",
    fontSize: 12,
    fontWeight: 600,
    padding: "4px 12px",
    borderRadius: 100,
    marginBottom: 20,
    letterSpacing: 0.3,
    textTransform: "uppercase",
  },
  h1: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: "clamp(30px, 5vw, 44px)",
    fontWeight: 700,
    lineHeight: 1.2,
    margin: "0 0 20px",
    color: "#EAEEFF",
  },
  meta: {
    fontSize: 14,
    color: "#7E88B5",
    marginBottom: 36,
    display: "flex",
    flexWrap: "wrap",
    gap: 6,
    alignItems: "center",
  },
  metaDot: { color: "rgba(125, 140, 255, 0.25)" },
  divider: { border: "none", borderTop: "1px solid rgba(125, 140, 255, 0.18)", margin: "0 0 40px" },
  p: { fontSize: 17, lineHeight: 1.85, color: "#C3CCE8", margin: "0 0 22px" },
  h2: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 28,
    fontWeight: 700,
    color: "#EAEEFF",
    margin: "56px 0 20px",
    lineHeight: 1.3,
  },
  h3: {
    fontSize: 18,
    fontWeight: 700,
    color: "#EAEEFF",
    margin: "32px 0 10px",
    lineHeight: 1.4,
  },
  tip: {
    background: "rgba(251, 191, 36, 0.09)",
    border: "1px solid rgba(251, 191, 36, 0.32)",
    borderRadius: 10,
    padding: "14px 18px",
    fontSize: 14,
    color: "#FCD34D",
    lineHeight: 1.7,
    margin: "20px 0",
  },
  toolCard: {
    background: "rgba(13, 17, 36, 0.66)",
    border: "1px solid rgba(125, 140, 255, 0.18)",
    borderRadius: 12,
    padding: "20px 24px",
    margin: "16px 0",
  },
  toolName: {
    fontSize: 17,
    fontWeight: 700,
    color: "#EAEEFF",
    margin: "0 0 8px",
  },
  toolDesc: {
    fontSize: 15,
    color: "#C3CCE8",
    lineHeight: 1.7,
    margin: 0,
  },
  toolHighlight: {
    display: "inline-block",
    background: "rgba(52, 211, 153, 0.1)",
    border: "1px solid rgba(52, 211, 153, 0.32)",
    color: "#34D399",
    fontSize: 12,
    fontWeight: 600,
    padding: "2px 10px",
    borderRadius: 4,
    marginBottom: 8,
    letterSpacing: 0.3,
    textTransform: "uppercase",
  },
  ctaBox: {
    background: "linear-gradient(135deg, rgba(49, 46, 129, 0.55) 0%, rgba(8, 11, 28, 0.9) 100%)",
    borderRadius: 16,
    padding: "32px 28px",
    margin: "48px 0 0",
    color: "#fff",
  },
  ctaTitle: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 24,
    fontWeight: 700,
    margin: "0 0 10px",
    color: "#fff",
  },
  ctaDesc: {
    fontSize: 15,
    color: "rgba(255,255,255,0.7)",
    margin: "0 0 20px",
    lineHeight: 1.7,
  },
  ctaBtn: {
    display: "inline-block",
    background: "linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)",
    color: "#fff",
    padding: "12px 28px",
    boxShadow: "0 0 24px rgba(34, 211, 238, 0.3)",
    borderRadius: 100,
    fontSize: 15,
    fontWeight: 700,
    textDecoration: "none",
  },
  footerNote: {
    borderTop: "1px solid rgba(125, 140, 255, 0.18)",
    marginTop: 56,
    paddingTop: 24,
    fontSize: 14,
    color: "#7E88B5",
    lineHeight: 1.7,
    fontStyle: "italic",
  },
  footer: {
    textAlign: "center",
    padding: "32px 28px",
    color: "#7E88B5",
    fontSize: 13,
    borderTop: "1px solid rgba(125, 140, 255, 0.16)",
  },
};

const CATEGORIES = [
  {
    title: "Bokföring och fakturering",
    tools: [
      {
        name: "Zervant",
        highlight: "Gratis fakturering",
        desc: "Zervant har länge erbjudit gratis fakturering för småföretag — du skapar och skickar professionella fakturor utan kostnad. Bokföringsfunktioner och fler finesser finns i betalplanerna. Kontrollera alltid aktuella villkor, gratisnivåer ändras med jämna mellanrum.",
      },
      {
        name: "Bokio",
        desc: "Bokio gör bokföring begriplig för den som inte är ekonom: fakturering, kvittohantering och automatisk bankimport i ett. Gratisplanen togs bort 2023, så numera kostar det en månadsavgift — men för många enskilda firmor är det fortfarande det enklaste sättet att sköta bokföringen själv.",
      },
    ],
  },
  {
    title: "Kommunikation och texter",
    tools: [
      {
        name: "Textverket",
        highlight: "Gratis & Ingen inloggning",
        desc: "Textverket är ett gratis AI-verktyg byggt specifikt för svenska företag. Det genererar professionella offertmejl, produkttexter, kundmejl, sociala medier-inlägg och fakturatexter på sekunder. Inga konton krävs. Perfekt för dig som behöver skriva bra texter men inte har tid att sitta och finslipa varje mening.",
      },
      {
        name: "Google Workspace (gratisversionen)",
        desc: "Gmail, Google Drive, Docs, Sheets och Calendar — allt gratis med 15 GB lagring. Tillräckligt för de flesta småföretag. Samarbetsfunktionerna i Docs och Sheets är ovärderliga om du jobbar med andra.",
      },
    ],
  },
  {
    title: "Design och visuellt",
    tools: [
      {
        name: "Canva",
        highlight: "Bäst i klassen",
        desc: "Canva är det bästa gratisverktyget för design. Skapa logotyper, visitkort, sociala medier-grafik, presentationer och marknadsföringsmaterial utan designkunskap. Gratisplanen inkluderar tusentals mallar och AI-funktioner.",
      },
      {
        name: "Remove.bg",
        desc: "Ladda upp en bild och bakgrunden tas bort automatiskt. Perfekt för produktbilder, profilbilder och marknadsföringsmaterial. Gratis för standardupplösning.",
      },
      {
        name: "Pixlr",
        desc: "En gratis bildredigerare i webbläsaren med AI-funktioner. Retuschera, beskär och förbättra bilder utan att behöva Photoshop.",
      },
    ],
  },
  {
    title: "Webbplats och närvaro",
    tools: [
      {
        name: "Carrd",
        desc: "Skapa en enkel, snygg one-page-sajt på minuter. Gratisplanen räcker om du bara behöver en landningssida med kontaktinfo. Perfekt som första webbplats.",
      },
      {
        name: "Google Företagsprofil",
        highlight: "Nödvändigt för lokala företag",
        desc: "Helt gratis och helt nödvändigt för lokala företag. Din Google Företagsprofil gör att du syns på Google Maps och i lokala sökresultat. Lägg till öppettider, bilder, kontaktinfo och samla recensioner. Det finns ingen ursäkt att inte ha detta.",
      },
      {
        name: "WordPress.com",
        desc: "Om du behöver en mer komplett webbplats erbjuder WordPress.com en gratisplan. Begränsad men tillräcklig för att komma igång med en blogg eller enkel företagssida.",
      },
    ],
  },
  {
    title: "Projekthantering",
    tools: [
      {
        name: "Trello",
        desc: "Visuell projekthantering med kort och kolumner. Gratisplanen ger dig obegränsat antal kort och upp till 10 tavlor. Bra för att hålla koll på att-göra-listor, kundprojekt och deadlines.",
      },
      {
        name: "Notion",
        desc: "Notion är en allt-i-ett-arbetsyta: anteckningar, projekthantering, databaser och wiki. Gratisplanen för enskild användning är generös. Lite brantare inlärningskurva men otroligt flexibelt när du väl lärt dig.",
      },
    ],
  },
  {
    title: "Sociala medier",
    tools: [
      {
        name: "Buffer",
        desc: "Schemalägg inlägg på Instagram, Facebook, LinkedIn och Twitter. Gratisplanen ger dig tre kanaler och tio schemalagda inlägg per kanal. Räcker för de flesta småföretagare som postar två till tre gånger i veckan.",
      },
      {
        name: "Later",
        desc: "Liknande Buffer men med fokus på Instagram. Visuell kalender där du kan planera ditt flöde. Gratisplanen inkluderar en profil och 30 inlägg per månad.",
      },
    ],
  },
  {
    title: "Analys",
    tools: [
      {
        name: "Google Analytics",
        desc: "Gratis och kraftfullt verktyg för att förstå din webbtrafik. Se var besökare kommer ifrån, vilka sidor de tittar på och hur länge de stannar. Kräver lite teknisk setup men värt besväret.",
      },
    ],
  },
];

export default function GratisVerktygPage() {
  return (
    <div style={S.page}>
      <JsonLd data={blogPostJsonLd(metadata, "2026-04-20")} />
      <NavBar />

      <article style={S.article}>
        <div style={S.breadcrumb}>
          <a href="/" style={S.breadcrumbLink}>Hem</a>
          <span>›</span>
          <a href="/blogg" style={S.breadcrumbLink}>Blogg</a>
          <span>›</span>
          <span>Gratis verktyg för egenföretagare</span>
        </div>

        <span style={S.categoryPill}>Guide</span>

        <h1 style={S.h1}>
          Gratis verktyg för dig som driver eget — 15 som sparar tid och pengar (2026)
        </h1>

        <div style={S.meta}>
          <span>Publicerad av Textverket</span>
          <span style={S.metaDot}>·</span>
          <span>Uppdaterad april 2026</span>
          <span style={S.metaDot}>·</span>
          <span>Lästid: 8 minuter</span>
        </div>

        <hr style={S.divider} />

        <p style={S.p}>
          Som egenföretagare gör du allt själv. Bokföring, marknadsföring, kundkommunikation,
          administration. Det betyder att varje verktyg som sparar dig tid är värt sin vikt i
          guld — särskilt om det är gratis.
        </p>
        <p style={S.p}>
          Här är 15 gratisverktyg som faktiskt gör skillnad i vardagen för svenska småföretagare.
        </p>

        {CATEGORIES.map((cat) => (
          <div key={cat.title}>
            <h2 style={S.h2}>{cat.title}</h2>
            {cat.tools.map((tool) => (
              <div key={tool.name} style={S.toolCard}>
                {tool.highlight && (
                  <div style={S.toolHighlight}>{tool.highlight}</div>
                )}
                <h3 style={S.h3}>{tool.name}</h3>
                <p style={S.toolDesc}>{tool.desc}</p>
              </div>
            ))}
          </div>
        ))}

        <h2 style={S.h2}>Hur du väljer rätt verktyg</h2>
        <p style={S.p}>
          Börja inte med alla 15. Identifiera ditt största tidsproblem och välj ett verktyg
          som löser det.
        </p>
        <p style={S.p}>
          Spenderar du tid på fakturor? Börja med Bokio. Kämpar med texter? Börja med
          Textverket. Behöver en webbplats? Börja med Carrd eller Google Företagsprofil.
        </p>
        <div style={S.tip}>
          <strong>Regel:</strong> Lär dig ett verktyg ordentligt innan du lägger till nästa.
          Halvhjärtad användning av tio verktyg sparar ingen tid alls.
        </div>

        <h2 style={S.h2}>Sammanfattning</h2>
        <p style={S.p}>
          Det har aldrig funnits fler gratis resurser för den som driver eget. Nyckeln är
          att faktiskt använda dem — inte bara samla på dem. Börja med ett, gör det till en
          vana, och bygg därifrån.
        </p>

        <div style={S.ctaBox}>
          <p style={S.ctaTitle}>Textverket — gratis AI för dina texter</p>
          <p style={S.ctaDesc}>
            Generera professionella offertmejl, produkttexter och kundkommunikation på
            sekunder. Inget konto krävs.
          </p>
          <a href="/verktyg" style={S.ctaBtn}>
            Testa gratis på Textverket →
          </a>
        </div>

        <p style={S.footerNote}>
          Textverket hjälper svenska småföretag att skriva professionella texter med AI.{" "}
          <a href="/verktyg" style={{ color: "#949EC9" }}>
            Testa gratis på textverket.se.
          </a>
        </p>
      </article>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 28px 40px" }}>
        <AdUnit slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG} />
      </div>

      <Footer />
    </div>
  );
}
