import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Om oss — Textverket",
  description: "Lär känna Textverket — varför vi byggde det, vad som gör det unikt och hur vi finansierar gratis AI-verktyg för svenska småföretag.",
  keywords: "om textverket, gratis AI verktyg, svenska småföretag, AI textgenerator, vem driver textverket",
  alternates: {
    canonical: "/om-oss",
  },
  openGraph: {
    title: "Om oss — Textverket",
    description: "Lär känna Textverket — varför vi byggde det och hur vi hjälper svenska småföretag skriva professionella texter.",
    url: "https://www.textverket.se/om-oss",
    siteName: "Textverket",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: `/og?title=${encodeURIComponent("Om Textverket")}`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function OmOssPage() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "transparent",
      fontFamily: "'Inter', sans-serif",
      color: "#EAEEFF",
    }}>
      <NavBar />

      <article style={{ maxWidth: 720, margin: "0 auto", padding: "56px 28px 80px" }}>
        <div style={{
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
        }}>
          Om oss
        </div>

        <h1 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(32px, 5vw, 48px)",
          fontWeight: 700,
          lineHeight: 1.2,
          margin: "0 0 32px",
          color: "#EAEEFF",
        }}>
          Om Textverket
        </h1>

        <p style={{ fontSize: 17, lineHeight: 1.85, color: "#C3CCE8", margin: "0 0 22px" }}>
          Textverket startade med en enkel frustration. Jag driver eget och vet precis hur det känns att sitta framför ett tomt mejl och inte veta hur man ska formulera sig professionellt — utan att låta stiff, utan att låta desperat, utan att skriva tre stycken när ett hade räckt.
        </p>

        <p style={{ fontSize: 17, lineHeight: 1.85, color: "#C3CCE8", margin: "0 0 22px" }}>
          Stora internationella AI-verktyg finns det gott om. Men de är byggda för engelska, för storföretag, för marknadsförare med budget. Svenska småföretagare — frisörer, konsulter, hantverkare, e-handlare, frilansare — hamnar i ett mellanläge. Verktygen förstår inte hur man pratar affärska på svenska, förstår inte vilken ton som passar en liten firma, och kostar dessutom pengar de flesta helst slipper lägga ut.
        </p>

        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 28,
          fontWeight: 700,
          margin: "36px 0 16px",
          color: "#EAEEFF",
        }}>
          Visionen: professionell text för alla
        </h2>

        <p style={{ fontSize: 17, lineHeight: 1.85, color: "#C3CCE8", margin: "0 0 22px" }}>
          Textverket är byggt för att ge en enmansförmare samma möjlighet som ett medelstort bolag med copywriter på kontoret. Du ska kunna öppna en webbläsare, beskriva vad du behöver, och få en färdig text på tio sekunder — utan inlärningskurva, utan månadskostnad och utan att behöva skriva en enda rad kod.
        </p>

        <p style={{ fontSize: 17, lineHeight: 1.85, color: "#C3CCE8", margin: "0 0 22px" }}>
          Vi tror att bra kommunikation inte ska vara ett privilegium för de som råd med en byrå. En välformulerad offert ger fler uppdrag. Ett tydligt kundmejl bygger förtroende. En säljande produkttext ökar konverteringen. Det är skillnad i kronor — och den skillnaden ska vara tillgänglig för alla.
        </p>

        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 28,
          fontWeight: 700,
          margin: "36px 0 16px",
          color: "#EAEEFF",
        }}>
          Vad som gör Textverket annorlunda
        </h2>

        <p style={{ fontSize: 17, lineHeight: 1.85, color: "#C3CCE8", margin: "0 0 22px" }}>
          Vi har byggt Textverket specifikt för svenska affärsspråk och svenska företagsformer. Verktygen är tränade med exempel från hur man faktiskt pratar i svenska offertmejl, kundmejl och produkttexter — inte direktöversatt från engelska mallar.
        </p>

        <p style={{ fontSize: 17, lineHeight: 1.85, color: "#C3CCE8", margin: "0 0 22px" }}>
          Du behöver inget konto. Du sparar inga uppgifter hos oss. Du öppnar sidan, skriver vad du behöver och får ett resultat. Det är verktyget så enkelt det kan vara — och det kostar ingenting.
        </p>

        <p style={{ fontSize: 17, lineHeight: 1.85, color: "#C3CCE8", margin: "0 0 22px" }}>
          Vi erbjuder sex specialanpassade verktyg: offertmejl, produkttexter, kundmejl, inlägg för sociala medier, fakturatexter och ett fritext-läge för allt som inte passar in i de andra kategorierna. Varje verktyg har en specifik prompt under huven som är optimerad för just den typen av text.
        </p>

        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 28,
          fontWeight: 700,
          margin: "36px 0 16px",
          color: "#EAEEFF",
        }}>
          Hur vi finansierar det
        </h2>

        <p style={{ fontSize: 17, lineHeight: 1.85, color: "#C3CCE8", margin: "0 0 22px" }}>
          Textverket är och förblir gratis att använda. Vi finansieras genom annonsintäkter, precis som en tidning. Det innebär att du ser annonser på sidan — men du betalar aldrig ett öre, registrerar inget konto och lämnar inga personuppgifter.
        </p>

        <p style={{ fontSize: 17, lineHeight: 1.85, color: "#C3CCE8", margin: "0 0 22px" }}>
          Vi tycker det är en ärlig affärsmodell. Du får ett verktyg som sparar dig tid och förhoppningsvis hjälper ditt företag att växa. Vi får en modest reklamintäkt som täcker driftkostnader och AI-tjänster. Ingen vinner på att ha dolda avgifter eller förvandla ett gratisprogram till en prenumerationstjänst efter en gratisperiod — det gör vi inte.
        </p>

        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 28,
          fontWeight: 700,
          margin: "36px 0 16px",
          color: "#EAEEFF",
        }}>
          En sista tanke
        </h2>

        <p style={{ fontSize: 17, lineHeight: 1.85, color: "#C3CCE8", margin: "0 0 22px" }}>
          Det finns ingenting magiskt med att skriva bra texter — det handlar om struktur, ton och att förstå mottagaren. AI kan hantera den uppgiften förvånansvärt bra, och vi hoppas att Textverket gör din vardag lite lättare. Prova ett verktyg, anpassa texten efter ditt eget sätt att skriva, och hör gärna av dig om du har frågor eller idéer.
        </p>

        <div style={{
          background: "rgba(255, 255, 255, 0.04)",
          border: "1px solid rgba(125, 140, 255, 0.16)",
          borderRadius: 12,
          padding: "24px 28px",
          marginTop: 40,
        }}>
          <p style={{ fontSize: 16, fontWeight: 600, margin: "0 0 8px", color: "#EAEEFF" }}>
            Har du frågor eller vill komma i kontakt?
          </p>
          <p style={{ fontSize: 15, color: "#949EC9", margin: "0 0 16px", lineHeight: 1.6 }}>
            Vi svarar gärna på frågor, feedback och samarbetsförfrågningar.
          </p>
          <a href="/kontakt" style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)",
            color: "#fff",
            padding: "10px 24px",
            borderRadius: 100,
            fontSize: 14,
            fontWeight: 600,
            textDecoration: "none",
          }}>
            Gå till kontaktsidan →
          </a>
        </div>
      </article>

      <Footer />
    </div>
  );
}
