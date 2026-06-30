import BlogPostLayout from "../../components/BlogPostLayout";
import { blogStyles as S } from "../../lib/blog-styles";

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
    <BlogPostLayout
      metadata={metadata}
      datePublished="2026-04-20"
      category="Guide"
      title={"Gratis verktyg för dig som driver eget — 15 som sparar tid och pengar (2026)"}
      breadcrumbLabel={"Gratis verktyg för egenföretagare"}
      updated={"april 2026"}
      readTime={"8 minuter"}
    >
      <p style={S.p}>
                Som egenföretagare gör du allt själv — bokföring, fakturering, kundkontakt.
                Den här guiden handlar om icke-AI-verktyg: bokföring, fakturering, design
                och projekthantering. Letar du efter AI för texter finns en{" "}
                <a href="/blogg/gratis-ai-verktyg" style={{ color: "#22D3EE" }}>
                  separat AI-guide
                </a>
                .
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
    </BlogPostLayout>
  );
}
