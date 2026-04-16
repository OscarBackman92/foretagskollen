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
];

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
      {/* Nav */}
      <div style={{ borderBottom: "1px solid #EDEDED" }}>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "18px 28px",
            maxWidth: 960,
            margin: "0 auto",
          }}
        >
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
              color: "#1A1A1A",
            }}
          >
            <span style={{ fontSize: 22 }}>✍️</span>
            <span style={{ fontWeight: 700, fontSize: 18 }}>Textverket</span>
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <a
              href="/blogg"
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#1A1A1A",
                textDecoration: "none",
              }}
            >
              Blogg
            </a>
            <a
              href="/verktyg"
              style={{
                background: "#1A1A1A",
                color: "#fff",
                padding: "9px 20px",
                borderRadius: 100,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Testa gratis →
            </a>
          </div>
        </nav>
      </div>

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

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "28px",
          color: "#9CA3AF",
          fontSize: 13,
          borderTop: "1px solid #EDEDED",
        }}
      >
        © 2026 Textverket · Gratis AI-verktyg för svenska företag
      </footer>
    </div>
  );
}
