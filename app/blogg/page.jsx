export const metadata = {
  title: "Blogg — Textverket",
  description:
    "Guider och tips för svenska småföretag. Lär dig skriva bättre offertmejl, produkttexter och kundkommunikation.",
  openGraph: {
    title: "Blogg — Textverket",
    description:
      "Guider och tips för svenska småföretag om affärskommunikation och AI-verktyg.",
    url: "https://textverket.se/blogg",
    siteName: "Textverket",
    locale: "sv_SE",
    type: "website",
  },
};

const ARTICLES = [
  {
    slug: "seo-smaforetag",
    category: "Guide",
    title: "SEO för småföretag — enkel guide som faktiskt fungerar (2026)",
    excerpt:
      "5-stegsguide till SEO utan byrå och utan dyra verktyg. Hitta sökord, skriv innehåll som rankar, teknisk SEO och länkbygge.",
    date: "April 2026",
    readTime: "9 min",
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
        background: "#FAFAF9",
        fontFamily: "'DM Sans', sans-serif",
        color: "#1A1A1A",
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
            background: "#EEF2FF",
            color: "#4338CA",
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
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 400,
            margin: "0 0 16px",
            color: "#111",
            lineHeight: 1.2,
          }}
        >
          Guider för bättre affärskommunikation
        </h1>
        <p
          style={{
            fontSize: 17,
            color: "#6B7280",
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
                  background: "#fff",
                  border: "1px solid #EDEDED",
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
                    background: "#EEF2FF",
                    color: "#4338CA",
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
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: 22,
                    fontWeight: 400,
                    margin: "0 0 12px",
                    color: "#111",
                    lineHeight: 1.35,
                  }}
                >
                  {article.title}
                </h2>
                <p
                  style={{
                    fontSize: 14,
                    color: "#6B7280",
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
                    color: "#9CA3AF",
                  }}
                >
                  <span>{article.date}</span>
                  <span style={{ color: "#D1D5DB" }}>·</span>
                  <span>{article.readTime} läsning</span>
                </div>
              </div>
            </a>
          ))}

          {/* Placeholder card */}
          <div
            style={{
              background: "#F9FAFB",
              border: "1px dashed #D1D5DB",
              borderRadius: 16,
              padding: "28px 24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              minHeight: 200,
            }}
          >
            <div style={{ fontSize: 28, marginBottom: 12 }}>✍️</div>
            <p
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: "#9CA3AF",
                margin: "0 0 6px",
              }}
            >
              Fler artiklar kommer
            </p>
            <p style={{ fontSize: 13, color: "#D1D5DB", margin: 0 }}>
              Vi publicerar nya guider regelbundet
            </p>
          </div>
        </div>
      </div>

      {/* CTA strip */}
      <div
        style={{
          background: "#111",
          padding: "48px 28px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 28,
            fontWeight: 400,
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
            background: "#fff",
            color: "#111",
            padding: "13px 32px",
            borderRadius: 100,
            fontSize: 15,
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          Öppna verktyget →
        </a>
      </div>

      <Footer />
    </div>
  );
}
