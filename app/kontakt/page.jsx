import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Kontakt — Textverket",
  description: "Kontakta Textverket med frågor, feedback eller samarbetsförslag. Vi svarar inom 1–2 vardagar.",
  openGraph: {
    title: "Kontakt — Textverket",
    description: "Kontakta oss med frågor, feedback eller samarbetsförslag.",
    url: "https://textverket.se/kontakt",
    siteName: "Textverket",
    locale: "sv_SE",
    type: "website",
  },
};

const FAQS = [
  {
    q: "Är Textverket verkligen gratis?",
    a: "Ja, helt gratis. Du behöver inget konto och det finns inga dolda avgifter. Vi finansieras via annonsintäkter, precis som en gratistidning.",
  },
  {
    q: "Sparas mina texter eller uppgifter?",
    a: "Nej. Vi lagrar varken de texter du matar in eller de texter som genereras. Allt sker i realtid och försvinner när du stänger sidan. Läs mer i vår integritetspolicy.",
  },
  {
    q: "Vilken AI används i bakgrunden?",
    a: "Textverket använder Claude, en AI-modell från Anthropic. Modellen är känd för sin förmåga att producera naturlig, sammanhängande text på svenska.",
  },
  {
    q: "Kan jag använda de genererade texterna kommersiellt?",
    a: "Absolut. Alla texter du genererar tillhör dig och kan användas fritt — i mejl, på hemsidan, i sociala medier eller var som helst i din verksamhet.",
  },
  {
    q: "Är ni intresserade av samarbeten eller annonsering?",
    a: "Ja, vi välkomnar relevanta samarbeten och annonsförfrågningar. Hör av dig via mejladressen nedan med lite info om vad du har i åtanke.",
  },
];

export default function KontaktPage() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#FAFAF9",
      fontFamily: "'DM Sans', sans-serif",
      color: "#1A1A1A",
    }}>
      <NavBar />

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "56px 28px 80px" }}>
        <div style={{
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
        }}>
          Kontakt
        </div>

        <h1 style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: "clamp(32px, 5vw, 48px)",
          fontWeight: 400,
          lineHeight: 1.2,
          margin: "0 0 20px",
          color: "#111",
        }}>
          Kontakt
        </h1>

        <p style={{ fontSize: 17, lineHeight: 1.85, color: "#374151", margin: "0 0 40px" }}>
          Vi hör gärna från dig — oavsett om du har feedback på ett verktyg, vill rapportera ett fel, föreslå ett samarbete eller bara har en fråga.
        </p>

        {/* Contact card */}
        <div style={{
          background: "#fff",
          border: "1px solid #EDEDED",
          borderRadius: 16,
          padding: "32px 28px",
          marginBottom: 48,
        }}>
          <h2 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 24,
            fontWeight: 400,
            margin: "0 0 8px",
            color: "#111",
          }}>
            Mejla oss
          </h2>
          <p style={{ fontSize: 15, color: "#6B7280", margin: "0 0 20px", lineHeight: 1.6 }}>
            Det snabbaste sättet att nå oss. Vi svarar normalt inom 1–2 vardagar.
          </p>
          <a
            href="mailto:textverketswe@gmail.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#1A1A1A",
              color: "#fff",
              padding: "12px 24px",
              borderRadius: 100,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            ✉ textverketswe@gmail.com
          </a>

          <div style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid #F0F0F0" }}>
            <p style={{ fontSize: 14, fontWeight: 600, margin: "0 0 8px", color: "#374151" }}>
              Vad kan jag kontakta om?
            </p>
            <ul style={{ margin: 0, paddingLeft: 20, fontSize: 14, color: "#6B7280", lineHeight: 2 }}>
              <li>Feedback och förbättringsförslag</li>
              <li>Buggrapporter och tekniska problem</li>
              <li>Samarbeten och annonsförfrågningar</li>
              <li>Frågor om hur tjänsten fungerar</li>
              <li>Allt annat du har på hjärtat</li>
            </ul>
          </div>

          <p style={{
            marginTop: 20,
            fontSize: 13,
            color: "#9CA3AF",
            background: "#F9FAFB",
            borderRadius: 8,
            padding: "10px 14px",
          }}>
            Förväntad svarstid: 1–2 vardagar
          </p>
        </div>

        {/* FAQ */}
        <h2 style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: 32,
          fontWeight: 400,
          margin: "0 0 24px",
          color: "#111",
        }}>
          Vanliga frågor
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {FAQS.map((faq, i) => (
            <div key={i} style={{
              background: "#fff",
              border: "1px solid #EDEDED",
              borderRadius: 12,
              padding: "20px 24px",
            }}>
              <p style={{ fontSize: 15, fontWeight: 600, margin: "0 0 8px", color: "#111" }}>
                {faq.q}
              </p>
              <p style={{ fontSize: 15, color: "#6B7280", margin: 0, lineHeight: 1.7 }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
