import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { BLOG_ARTICLES as ARTICLES } from "../lib/content";

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
