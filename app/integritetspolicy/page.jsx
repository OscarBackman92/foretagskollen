import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Integritetspolicy — Textverket",
  description:
    "Läs om hur Textverket hanterar dina uppgifter, vilka cookies vi använder och dina rättigheter enligt GDPR.",
  keywords: "integritetspolicy textverket, cookies GDPR, dataskydd, Google AdSense cookies, personuppgifter",
  alternates: {
    canonical: "/integritetspolicy",
  },
  openGraph: {
    title: "Integritetspolicy — Textverket",
    description: "Information om cookies, GDPR och dataskydd på Textverket.",
    url: "https://www.textverket.se/integritetspolicy",
    siteName: "Textverket",
    locale: "sv_SE",
    type: "website",
  },
};

export default function IntegritetspolicyPage() {
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

      {/* Content */}
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "56px 28px 80px",
        }}
      >
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 700,
            margin: "0 0 12px",
            color: "#EAEEFF",
            lineHeight: 1.2,
          }}
        >
          Integritetspolicy
        </h1>
        <p style={{ fontSize: 14, color: "#7E88B5", margin: "0 0 48px" }}>
          Senast uppdaterad: 21 april 2026
        </p>

        <Section title="Om Textverket">
          <p>
            Textverket (textverket.se) är ett gratis AI-verktyg för svenska
            småföretag. Vi värnar om din integritet och strävar efter att vara
            transparenta med hur vi hanterar information om dig som besökare.
          </p>
        </Section>

        <Section title="Vilken data vi samlar in">
          <p>
            Vi samlar <strong>inte</strong> in eller lagrar de texter du skriver
            eller genererar i verktyget. All textgenerering sker i realtid och
            ingen användarinmatning sparas på våra servrar efter att svaret
            returnerats.
          </p>
          <p style={{ marginTop: 12 }}>
            Vi samlar däremot in anonymiserad besöksstatistik via Google
            Analytics, samt visar annonser via Google AdSense. Dessa tjänster
            kan samla in viss data enligt sina egna policyer (se nedan).
          </p>
        </Section>

        <Section title="Cookies">
          <p>Vi använder följande typer av cookies:</p>
          <CookieTable
            rows={[
              {
                name: "Google Analytics",
                purpose: "Anonym besöksstatistik — sidvisningar, trafikkällor, sessionslängd",
                duration: "Upp till 2 år",
                type: "Statistik",
              },
              {
                name: "Google AdSense",
                purpose: "Anpassade annonser baserat på ditt intresse och beteende",
                duration: "Upp till 13 månader",
                type: "Marknadsföring",
              },
            ]}
          />
          <p style={{ marginTop: 16 }}>
            Du kan blockera eller radera cookies via inställningarna i din
            webbläsare. Observera att vissa funktioner kan påverkas om du
            inaktiverar cookies.
          </p>
        </Section>

        <Section title="Google Analytics">
          <p>
            Vi använder Google Analytics 4 för att förstå hur besökare
            interagerar med sajten. Datan är anonymiserad och används enbart
            för att förbättra Textverket. IP-adresser anonymiseras och vi delar
            inte denna data med tredje part utöver Google.
          </p>
          <p style={{ marginTop: 12 }}>
            Läs Googles sekretesspolicy:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#22D3EE" }}
            >
              policies.google.com/privacy
            </a>
          </p>
        </Section>

        <Section title="Google AdSense">
          <p>
            Vi visar annonser via Google AdSense. Google kan använda cookies
            för att visa relevanta annonser baserat på dina tidigare
            webbplatsbesök. Du kan välja bort personanpassade annonser via
            Googles annonsinställningar.
          </p>
          <p style={{ marginTop: 12 }}>
            Hantera dina annonspreferenser:{" "}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#22D3EE" }}
            >
              adssettings.google.com
            </a>
          </p>
        </Section>

        <Section title="Dina rättigheter enligt GDPR">
          <p>
            Enligt EU:s dataskyddsförordning (GDPR) har du följande rättigheter:
          </p>
          <ul
            style={{
              margin: "16px 0 0",
              padding: "0 0 0 20px",
              lineHeight: 2,
              color: "#C3CCE8",
            }}
          >
            <li>
              <strong>Rätt till tillgång</strong> — du kan begära information om
              vilka personuppgifter vi behandlar om dig.
            </li>
            <li>
              <strong>Rätt till radering</strong> — du kan begära att vi raderar
              dina personuppgifter.
            </li>
            <li>
              <strong>Rätt att invända</strong> — du kan invända mot behandling
              av dina personuppgifter, t.ex. för marknadsföringsändamål.
            </li>
            <li>
              <strong>Rätt till dataportabilitet</strong> — du kan begära att
              få ut dina uppgifter i ett maskinläsbart format.
            </li>
            <li>
              <strong>Rätt att begränsa behandling</strong> — du kan begära att
              vi begränsar hur vi behandlar dina uppgifter.
            </li>
          </ul>
          <p style={{ marginTop: 16 }}>
            Eftersom vi inte lagrar personuppgifter kopplade till din
            textanvändning är det i praktiken Google Analytics- och
            AdSense-data som kan beröras. Dessa hanteras direkt via Googles
            tjänster och verktyg (se länkarna ovan).
          </p>
        </Section>

        <Section title="Kontakt">
          <p>
            Har du frågor om denna policy eller vill utöva dina rättigheter?
            Kontakta oss på{" "}
            <a
              href="mailto:textverketswe@gmail.com"
              style={{ color: "#22D3EE" }}
            >
              textverketswe@gmail.com
            </a>
          </p>
        </Section>
      </div>

      <Footer />
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 24,
          fontWeight: 700,
          margin: "0 0 16px",
          color: "#EAEEFF",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          fontSize: 15,
          lineHeight: 1.75,
          color: "#C3CCE8",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function CookieTable({ rows }) {
  const thStyle = {
    padding: "10px 14px",
    textAlign: "left",
    fontSize: 12,
    fontWeight: 700,
    color: "#949EC9",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    background: "rgba(255, 255, 255, 0.04)",
    borderBottom: "1px solid rgba(125, 140, 255, 0.18)",
  };
  const tdStyle = {
    padding: "12px 14px",
    fontSize: 14,
    color: "#C3CCE8",
    borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
    verticalAlign: "top",
  };

  return (
    <div
      style={{
        border: "1px solid rgba(125, 140, 255, 0.18)",
        borderRadius: 10,
        overflow: "hidden",
        marginTop: 16,
      }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={thStyle}>Tjänst</th>
            <th style={thStyle}>Syfte</th>
            <th style={thStyle}>Varaktighet</th>
            <th style={thStyle}>Typ</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td style={{ ...tdStyle, fontWeight: 600 }}>{row.name}</td>
              <td style={tdStyle}>{row.purpose}</td>
              <td style={tdStyle}>{row.duration}</td>
              <td style={tdStyle}>{row.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
