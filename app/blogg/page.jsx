export const metadata = {
  title: "Blogg — Textverket",
  description:
    "Guider och tips för svenska småföretag. Lär dig skriva bättre offertmejl, produkttexter och kundkommunikation.",
  keywords: "blogg affärskommunikation, tips småföretag, guider svenska företagare, AI verktyg guide, textverktyg",
  alternates: {
    canonical: "/blogg",
  },
  openGraph: {
    title: "Blogg — Textverket",
    description:
      "Guider och tips för svenska småföretag om affärskommunikation och AI-verktyg.",
    url: "https://www.textverket.se/blogg",
    siteName: "Textverket",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: `/og?title=${encodeURIComponent("Blogg — guider och tips för småföretag")}`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

const ARTICLES = [
  {
    slug: "seo-smaforetag",
    category: "Guide",
    title: "SEO för dina texter — så rankar produkttexter och blogg (2026)",
    excerpt:
      "För småföretag avgörs SEO mest av själva texterna. Skriv unika produkttexter, lokala tjänstesidor och blogg som rankar — med konkreta före/efter-exempel.",
    date: "Juni 2026",
    readTime: "8 min",
  },
  {
    slug: "nyhetsbrev-guide",
    category: "Guide",
    title: "Nyhetsbrev som folk faktiskt vill läsa — guide med mallar",
    excerpt:
      "Den gyllene regeln, strukturen som fungerar, vad du ska skriva om och hur ofta. Sluta skicka nyhetsbrev ingen öppnar.",
    date: "April 2026",
    readTime: "7 min",
  },
  {
    slug: "pressmeddelande-mall",
    category: "Mallar",
    title: "Pressmeddelande — mall och guide med exempel (2026)",
    excerpt:
      "Färdig mall med komplett exempel. Pyramidstrukturen, vad som är en nyhet, och 10 tips som gör att journalister faktiskt läser.",
    date: "April 2026",
    readTime: "7 min",
  },
  {
    slug: "linkedin-profil",
    category: "Guide",
    title: "LinkedIn-profil som ger resultat — komplett guide (2026)",
    excerpt:
      "Rubrik, profilbild, sammanfattning, erfarenhet och aktivitet — gör om din LinkedIn från digitalt CV till magnet för affärer.",
    date: "April 2026",
    readTime: "7 min",
  },
  {
    slug: "personligt-brev-cv",
    category: "Mallar",
    title: "Personligt brev och CV — kompletta mallar och tips (2026)",
    excerpt:
      "Strukturen som fungerar, komplett brevexempel och CV-tipset som gör all skillnad: fokusera på resultat, inte uppgifter.",
    date: "April 2026",
    readTime: "8 min",
  },
  {
    slug: "offertmejl-guide",
    category: "Guide",
    title:
      "Så skriver du ett professionellt offertmejl — komplett guide med exempel (2026)",
    excerpt:
      "Lär dig de 6 delarna i ett bra offertmejl, se ett komplett exempel och undvik de 5 vanligaste misstagen som kostar dig affärer.",
    date: "April 2026",
    readTime: "8 min",
  },
  {
    slug: "kundmejl-mallar",
    category: "Mallar",
    title: "5 mallar för kundmejl som faktiskt fungerar (+ gratis generator)",
    excerpt:
      "Färdiga mallar för uppföljningsmejl, reklamationssvar, tackmejl, betalningspåminnelser och återaktivering av vilande kunder.",
    date: "April 2026",
    readTime: "7 min",
  },
  {
    slug: "produktbeskrivningar-guide",
    category: "Guide",
    title: "Hur skriver man bra produktbeskrivningar? Komplett guide med exempel",
    excerpt:
      "7-stegsguide till produkttexter som konverterar — med före/efter-exempel och SEO-tips för svenska e-handlare och småföretag.",
    date: "April 2026",
    readTime: "8 min",
  },
  {
    slug: "betalningspaminnelse-mall",
    category: "Mallar",
    title: "Betalningspåminnelse — mall och tips för småföretag (2026)",
    excerpt:
      "Färdiga mallar för betalningspåminnelser i tre steg: vänlig, bestämd och sista varning. Plus regler och tips för att förebygga sena betalningar.",
    date: "April 2026",
    readTime: "6 min",
  },
  {
    slug: "gratis-ai-verktyg",
    category: "Guide",
    title: "Gratis AI-verktyg för småföretag i Sverige — 10 bästa valen (2026)",
    excerpt:
      "De bästa gratis AI-verktygen för svenska småföretag. Spara tid på textskrivning, design, kundservice och mer — utan kostnad.",
    date: "April 2026",
    readTime: "9 min",
  },
  {
    slug: "professionella-mejl",
    category: "Guide",
    title: "Professionella mejl — 7 regler som gör ditt företag trovärdigt",
    excerpt:
      "7 konkreta regler för affärsmejl som öppnas, läses och besvaras. Från ämnesrad till tajming — gör varje mejl till ett visitkort.",
    date: "April 2026",
    readTime: "7 min",
  },
  {
    slug: "sociala-medier-foretag",
    category: "Guide",
    title: "Så skriver du inlägg för sociala medier som företagare — guide med exempel",
    excerpt:
      "De fyra innehållstyperna, hook-kropp-CTA-formeln och 10 idéer du kan använda idag. Sluta stirra på en tom skärm.",
    date: "April 2026",
    readTime: "8 min",
  },
  {
    slug: "starta-eget-vid-sidan-av-jobbet",
    category: "Guide",
    title: "Starta eget vid sidan av jobbet — komplett guide för dig i Sverige (2026)",
    excerpt:
      "Steg-för-steg: juridik, registrering, validering, första kunder och tidhantering. Behåll tryggheten medan du testar din idé.",
    date: "April 2026",
    readTime: "9 min",
  },
  {
    slug: "gratis-verktyg-egenforetagare",
    category: "Guide",
    title: "Gratis verktyg för dig som driver eget — 15 som sparar tid och pengar (2026)",
    excerpt:
      "De bästa gratisverktygen för svenska egenföretagare: bokföring, design, webbplats, projekthantering och mer.",
    date: "April 2026",
    readTime: "8 min",
  },
];

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function BloggPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "transparent",
        fontFamily: "'Inter', sans-serif",
        color: "#EAEEFF",
      }}
    >
      <NavBar />

      {/* Hero */}
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          padding: "56px 28px 40px",
        }}
      >
        <div
          style={{
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
          }}
        >
          Kunskap
        </div>
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 700,
            margin: "0 0 16px",
            color: "#EAEEFF",
            lineHeight: 1.2,
          }}
        >
          Guider för bättre affärskommunikation
        </h1>
        <p
          style={{
            fontSize: 17,
            color: "#949EC9",
            maxWidth: 520,
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          Praktiska råd för dig som driver eget. Hur du skriver texter som
          vinner affärer, bygger förtroende och sparar tid.
        </p>
      </div>

      {/* Articles */}
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          padding: "0 28px 80px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {ARTICLES.map((article) => (
            <a
              key={article.slug}
              href={`/blogg/${article.slug}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  background: "rgba(13, 17, 36, 0.66)",
                  border: "1px solid rgba(125, 140, 255, 0.16)",
                  borderRadius: 16,
                  padding: "28px 24px",
                  height: "100%",
                  boxSizing: "border-box",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    background: "rgba(129, 140, 248, 0.13)",
                    color: "#A5B4FC",
                    fontSize: 11,
                    fontWeight: 600,
                    padding: "3px 10px",
                    borderRadius: 100,
                    marginBottom: 16,
                    letterSpacing: 0.3,
                    textTransform: "uppercase",
                  }}
                >
                  {article.category}
                </div>
                <h2
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 22,
                    fontWeight: 700,
                    margin: "0 0 12px",
                    color: "#EAEEFF",
                    lineHeight: 1.35,
                  }}
                >
                  {article.title}
                </h2>
                <p
                  style={{
                    fontSize: 14,
                    color: "#949EC9",
                    lineHeight: 1.65,
                    margin: "0 0 20px",
                  }}
                >
                  {article.excerpt}
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                    fontSize: 13,
                    color: "#7E88B5",
                  }}
                >
                  <span>{article.date}</span>
                  <span style={{ color: "rgba(125, 140, 255, 0.25)" }}>·</span>
                  <span>{article.readTime} läsning</span>
                </div>
              </div>
            </a>
          ))}

        </div>
      </div>

      {/* CTA strip */}
      <div
        style={{
          background: "rgba(16, 21, 44, 0.8)",
          padding: "48px 28px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 28,
            fontWeight: 700,
            color: "#fff",
            margin: "0 0 12px",
          }}
        >
          Vill du skriva texten nu?
        </p>
        <p
          style={{
            fontSize: 15,
            color: "rgba(255,255,255,0.6)",
            margin: "0 0 24px",
          }}
        >
          Testa Textverkets gratis AI-verktyg direkt.
        </p>
        <a
          href="/verktyg"
          style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)",
            color: "#fff",
            padding: "13px 32px",
            borderRadius: 100,
            fontSize: 15,
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 0 24px rgba(34, 211, 238, 0.3)",
          }}
        >
          Öppna verktyget →
        </a>
      </div>

      <Footer />
    </div>
  );
}
