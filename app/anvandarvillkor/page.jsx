import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Användarvillkor — Textverket",
  description:
    "Användarvillkor för Textverket — vad som gäller när du använder våra gratis AI-textverktyg: äganderätt till texter, ansvar, tillåten användning och tjänstens tillgänglighet.",
  alternates: {
    canonical: "/anvandarvillkor",
  },
  openGraph: {
    title: "Användarvillkor — Textverket",
    description: "Vad som gäller när du använder Textverkets gratis AI-textverktyg.",
    url: "https://www.textverket.se/anvandarvillkor",
    siteName: "Textverket",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: `/og?title=${encodeURIComponent("Användarvillkor")}`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

const S = {
  h2: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 24,
    fontWeight: 700,
    letterSpacing: "-0.02em",
    margin: "36px 0 14px",
    color: "#F4F7FF",
  },
  p: {
    fontSize: 16,
    lineHeight: 1.85,
    color: "#C3CCE8",
    margin: "0 0 16px",
  },
  list: {
    margin: "0 0 16px",
    paddingLeft: 22,
    fontSize: 16,
    lineHeight: 1.85,
    color: "#C3CCE8",
  },
};

export default function AnvandarvillkorPage() {
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

      <article style={{ maxWidth: 720, margin: "0 auto", padding: "56px 28px 80px" }}>
        <div
          style={{
            display: "inline-block",
            background: "rgba(129, 140, 248, 0.13)",
            border: "1px solid rgba(129, 140, 248, 0.3)",
            color: "#A5B4FC",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            fontWeight: 600,
            padding: "5px 14px",
            borderRadius: 100,
            marginBottom: 20,
            letterSpacing: 1.5,
            textTransform: "uppercase",
          }}
        >
          Villkor
        </div>

        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            margin: "0 0 12px",
            color: "#F4F7FF",
          }}
        >
          Användarvillkor
        </h1>

        <p style={{ fontSize: 14, color: "#7E88B5", margin: "0 0 36px" }}>
          Senast uppdaterad: 11 juni 2026
        </p>

        <p style={S.p}>
          Välkommen till Textverket. Genom att använda webbplatsen textverket.se och våra
          AI-textverktyg godkänner du villkoren nedan. Villkoren är skrivna för att vara
          enkla att förstå — har du frågor är du alltid välkommen att{" "}
          <a href="/kontakt" style={{ color: "#22D3EE" }}>kontakta oss</a>.
        </p>

        <h2 style={S.h2}>1. Tjänsten</h2>
        <p style={S.p}>
          Textverket tillhandahåller kostnadsfria AI-verktyg som genererar affärstexter på
          svenska — till exempel offertmejl, produkttexter, kundmejl och fakturatexter.
          Tjänsten kräver inget konto och kostar ingenting att använda. Verksamheten
          finansieras genom annonser som visas på webbplatsen.
        </p>

        <h2 style={S.h2}>2. Äganderätt till genererade texter</h2>
        <p style={S.p}>
          Texter som genereras åt dig tillhör dig. Du får använda dem fritt i kommersiella
          och privata sammanhang — i mejl, på webbplatser, i sociala medier och i tryck —
          utan att ange källa och utan begränsningar från vår sida.
        </p>

        <h2 style={S.h2}>3. Ansvar och rimliga förväntningar</h2>
        <p style={S.p}>
          AI-genererade texter kan innehålla fel, missförstånd eller formuleringar som inte
          passar din situation. Du ansvarar själv för att granska och vid behov justera
          texterna innan du använder dem. Textverket lämnar inga garantier för att en
          genererad text är korrekt, fullständig eller lämplig för ett visst syfte, och
          ansvarar inte för konsekvenser av att du använder genererat innehåll. Texterna
          utgör inte juridisk, ekonomisk eller annan professionell rådgivning.
        </p>

        <h2 style={S.h2}>4. Tillåten användning</h2>
        <p style={S.p}>Du får inte använda Textverket för att:</p>
        <ul style={S.list}>
          <li>skapa innehåll som är olagligt, vilseledande, hotfullt eller kränkande,</li>
          <li>skicka skräppost eller bedriva bedrägerier,</li>
          <li>försöka störa, överbelasta eller kringgå tjänstens tekniska skydd, eller</li>
          <li>automatiserat massanvända tjänsten på ett sätt som hindrar andra användare.</li>
        </ul>
        <p style={S.p}>
          Vi förbehåller oss rätten att blockera användning som bryter mot dessa regler.
        </p>

        <h2 style={S.h2}>5. Integritet och data</h2>
        <p style={S.p}>
          Vi lagrar inte de texter du skriver in eller de texter som genereras. Hur vi
          hanterar cookies och analysdata beskrivs i vår{" "}
          <a href="/integritetspolicy" style={{ color: "#22D3EE" }}>integritetspolicy</a>.
        </p>

        <h2 style={S.h2}>6. Tillgänglighet</h2>
        <p style={S.p}>
          Vi strävar efter att tjänsten alltid ska fungera, men kan inte garantera oavbruten
          drift. Tjänsten kan tillfälligt vara otillgänglig vid underhåll, tekniska problem
          eller störningar hos underleverantörer. Vi kan när som helst ändra, pausa eller
          avsluta delar av tjänsten.
        </p>

        <h2 style={S.h2}>7. Ändringar av villkoren</h2>
        <p style={S.p}>
          Vi kan uppdatera dessa villkor vid behov. Datumet överst på sidan visar när
          villkoren senast ändrades. Fortsatt användning av tjänsten efter en ändring
          innebär att du godkänner de uppdaterade villkoren.
        </p>

        <h2 style={S.h2}>8. Kontakt</h2>
        <p style={S.p}>
          Frågor om villkoren? Mejla oss på{" "}
          <a href="mailto:textverketswe@gmail.com" style={{ color: "#22D3EE" }}>
            textverketswe@gmail.com
          </a>{" "}
          eller använd <a href="/kontakt" style={{ color: "#22D3EE" }}>kontaktsidan</a>.
        </p>
      </article>

      <Footer />
    </div>
  );
}
