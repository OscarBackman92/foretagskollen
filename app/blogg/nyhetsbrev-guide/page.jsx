import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Nyhetsbrev som folk faktiskt vill läsa — guide med mallar — Textverket",
  description:
    "Lär dig skriva nyhetsbrev som öppnas och läses. Den gyllene regeln, strukturen som fungerar, vad du ska skriva om och hur ofta du ska skicka.",
  keywords: "nyhetsbrev guide, skriva nyhetsbrev, email marketing Sverige, nyhetsbrev mall, öka öppningsfrekvens",
  alternates: {
    canonical: "/blogg/nyhetsbrev-guide",
  },
  openGraph: {
    title: "Nyhetsbrev som folk faktiskt vill läsa — guide med mallar",
    description:
      "Guide till nyhetsbrev för småföretag. Gratis AI-verktyg på textverket.se.",
    url: "https://textverket.se/blogg/nyhetsbrev-guide",
    siteName: "Textverket",
    locale: "sv_SE",
    type: "article",
  },
};

const S = {
  page: { minHeight: "100vh", background: "#FAFAF9", fontFamily: "'DM Sans', sans-serif", color: "#1A1A1A" },
  navWrap: { borderBottom: "1px solid #EDEDED" },
  nav: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 28px", maxWidth: 960, margin: "0 auto" },
  logo: { display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: "#1A1A1A" },
  navLinks: { display: "flex", alignItems: "center", gap: 24 },
  navLink: { fontSize: 14, fontWeight: 500, color: "#555", textDecoration: "none" },
  navCta: { background: "#1A1A1A", color: "#fff", padding: "9px 20px", borderRadius: 100, fontSize: 14, fontWeight: 600, textDecoration: "none" },
  article: { maxWidth: 720, margin: "0 auto", padding: "52px 28px 80px" },
  breadcrumb: { fontSize: 13, color: "#9CA3AF", marginBottom: 28, display: "flex", gap: 6, alignItems: "center" },
  breadcrumbLink: { color: "#9CA3AF", textDecoration: "none" },
  categoryPill: { display: "inline-block", background: "#EEF2FF", color: "#4338CA", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100, marginBottom: 20, letterSpacing: 0.3, textTransform: "uppercase" },
  h1: { fontFamily: "'Instrument Serif', serif", fontSize: "clamp(30px, 5vw, 44px)", fontWeight: 400, lineHeight: 1.2, margin: "0 0 20px", color: "#111" },
  meta: { fontSize: 14, color: "#9CA3AF", marginBottom: 36, display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" },
  metaDot: { color: "#D1D5DB" },
  divider: { border: "none", borderTop: "1px solid #E5E7EB", margin: "0 0 40px" },
  p: { fontSize: 17, lineHeight: 1.85, color: "#374151", margin: "0 0 22px" },
  h2: { fontFamily: "'Instrument Serif', serif", fontSize: 28, fontWeight: 400, color: "#111", margin: "56px 0 20px", lineHeight: 1.3 },
  h3: { fontSize: 18, fontWeight: 700, color: "#1A1A1A", margin: "36px 0 14px", lineHeight: 1.4 },
  tip: { background: "#FFFBEB", border: "1px solid #FDE68A", borderRadius: 10, padding: "14px 18px", fontSize: 14, color: "#92400E", lineHeight: 1.7, margin: "20px 0" },
  quote: { margin: "20px 0", padding: "16px 20px", background: "#F8FAFC", borderLeft: "3px solid #CBD5E0", borderRadius: "0 8px 8px 0", fontSize: 15, color: "#4A5568", lineHeight: 1.8, fontStyle: "italic" },
  infoBox: { background: "#EFF6FF", border: "1px solid #BFDBFE", borderRadius: 10, padding: "14px 18px", fontSize: 14, color: "#1E40AF", lineHeight: 1.7, margin: "20px 0" },
  compRow: { display: "flex", flexDirection: "column", gap: 8, margin: "16px 0" },
  compBefore: { background: "#FFF5F5", border: "1px solid #FED7D7", borderRadius: 8, padding: "10px 14px", fontSize: 14, color: "#7F1D1D" },
  compAfter: { background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 8, padding: "10px 14px", fontSize: 14, color: "#14532D" },
  formatCard: { background: "#fff", border: "1px solid #E5E7EB", borderRadius: 10, padding: "16px 20px", margin: "10px 0" },
  toolRow: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", background: "#fff", border: "1px solid #E5E7EB", borderRadius: 10, padding: "14px 18px", margin: "10px 0" },
  ctaBox: { background: "linear-gradient(135deg, #111 0%, #1a2332 100%)", borderRadius: 16, padding: "32px 28px", margin: "48px 0 0", color: "#fff" },
  ctaTitle: { fontFamily: "'Instrument Serif', serif", fontSize: 24, fontWeight: 400, margin: "0 0 10px", color: "#fff" },
  ctaDesc: { fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 20px", lineHeight: 1.7 },
  ctaBtn: { display: "inline-block", background: "#fff", color: "#111", padding: "12px 28px", borderRadius: 100, fontSize: 15, fontWeight: 700, textDecoration: "none" },
  footerNote: { borderTop: "1px solid #E5E7EB", marginTop: 56, paddingTop: 24, fontSize: 14, color: "#9CA3AF", lineHeight: 1.7, fontStyle: "italic" },
  footer: { textAlign: "center", padding: "32px 28px", color: "#9CA3AF", fontSize: 13, borderTop: "1px solid #EDEDED" },
};

const FORMATS = [
  { title: "Lärdom från veckan", desc: "Något du lärt dig eller märkt i ditt arbete. Kort och relaterbart." },
  { title: "Kundhistoria", desc: "En konkret situation där du hjälpte en kund. Fokus på problemet och lösningen." },
  { title: "Tips och tricks", desc: "Något praktiskt som din målgrupp kan använda direkt." },
  { title: "Bakom kulisserna", desc: "Vad du jobbar med just nu. Varför du fattar de beslut du fattar." },
  { title: "Din åsikt", desc: "En kort opinion om något i din bransch. Polarisering är okej — du vill inte vara allas kopp te." },
  { title: "Länksamling", desc: 'Ibland räcker det med "här är 3 saker jag läst den här veckan som var bra". Enkelt och uppskattat.' },
];

const TOOLS = [
  { name: "Mailchimp", desc: "Branschstandard, generös gratisplan upp till 500 prenumeranter." },
  { name: "Substack", desc: "Bra om du skriver längre texter och vill bygga en publikation." },
  { name: "ConvertKit", desc: "Lite dyrare men bättre för automatiseringar." },
  { name: "Buttondown", desc: "Enklast och billigast om du bara vill komma igång." },
];

export default function NyhetsbrevGuidePage() {
  return (
    <div style={S.page}>
      <NavBar />

      <article style={S.article}>
        <div style={S.breadcrumb}>
          <a href="/" style={S.breadcrumbLink}>Hem</a>
          <span>›</span>
          <a href="/blogg" style={S.breadcrumbLink}>Blogg</a>
          <span>›</span>
          <span>Nyhetsbrev guide</span>
        </div>

        <span style={S.categoryPill}>Guide</span>

        <h1 style={S.h1}>
          Nyhetsbrev som folk faktiskt vill läsa — guide med mallar
        </h1>

        <div style={S.meta}>
          <span>Publicerad av Textverket</span>
          <span style={S.metaDot}>·</span>
          <span>Uppdaterad april 2026</span>
          <span style={S.metaDot}>·</span>
          <span>Lästid: 7 minuter</span>
        </div>

        <hr style={S.divider} />

        <p style={S.p}>
          Alla säger att e-postmarknadsföring är dött. De har fel. För småföretag är ett nyhetsbrev
          fortfarande en av de mest kostnadseffektiva kanalerna som finns. En e-postlista du äger är
          guld — till skillnad från Instagram-följare kan ingen algoritm ta dem ifrån dig.
        </p>
        <p style={S.p}>
          Men bara om folk faktiskt öppnar och läser dina mejl. Här är hur du skriver nyhetsbrev
          som inte hamnar i papperskorgen direkt.
        </p>

        <h2 style={S.h2}>Varför nyhetsbrev funkar</h2>
        <div style={S.infoBox}>
          <strong>Instagram:</strong> Når i bästa fall 5–10% av dina följare.<br />
          <strong>Nyhetsbrev:</strong> Öppnas av 20–40% av dina prenumeranter.
        </div>
        <p style={S.p}>
          Dessutom är mottagaren medveten — de har själva valt att prenumerera. Det är helt annat
          än att scrolla förbi något på en tidslinje.
        </p>

        <h2 style={S.h2}>Den gyllene regeln</h2>
        <p style={S.p}>
          Skriv till en person, inte en lista.
        </p>
        <div style={S.compRow}>
          <div style={S.compBefore}>"Bästa kunder, vi vill härmed informera om..." — Dödfött.</div>
          <div style={S.compAfter}>Skriv som om du mejlar en vän. Ledigt, direkt, med personlighet.</div>
        </div>
        <p style={S.p}>
          Prenumeranten läser din mejl på sin mobil i soffan, mellan två andra mejl. Du har tre
          sekunder att få dem att fortsätta läsa. Formella företagstexter ger dig noll chans.
        </p>

        <h2 style={S.h2}>Strukturen som fungerar</h2>

        <h3 style={S.h3}>Ämnesraden</h3>
        <p style={S.p}>
          Avgör om nyhetsbrevet öppnas. Undvik generiska rader som "Nyhetsbrev mars" eller
          "Nya erbjudanden".
        </p>
        <div style={S.compRow}>
          <div style={S.compBefore}>"Tips för egenföretagare"</div>
          <div style={S.compAfter}>"3 misstag jag gjort som egenföretagare (och hur du undviker dem)"</div>
        </div>
        <div style={S.tip}>Håll ämnesraden under 50 tecken så den inte klipps av på mobilen.</div>

        <h3 style={S.h3}>Förhandsvisningstexten</h3>
        <p style={S.p}>
          De första orden som syns i inkorgen, bredvid ämnesraden. Sätt en krok som fortsätter ämnesraden.
        </p>
        <blockquote style={S.quote}>
          Ämne: "3 misstag jag gjort som egenföretagare"<br />
          Förhandsvisning: "Det dyraste kostade mig 40 000 kronor."
        </blockquote>

        <h3 style={S.h3}>Öppningen</h3>
        <p style={S.p}>
          Hoppa rakt in. Ingen "Hej alla, hoppas ni haft en bra vecka!" — det är utrymme slösad på
          artighetsfraser. Börja med en fråga, ett påstående, eller en kort personlig anekdot.
        </p>
        <blockquote style={S.quote}>
          "Förra veckan var jag så nära att tacka nej till min största affär hittills. Inte för att
          kunden var fel. För att jag var för rädd för att säga mitt pris."
        </blockquote>

        <h3 style={S.h3}>Innehållet</h3>
        <p style={S.p}>
          Ett nyhetsbrev = en idé. Inte tre. Inte fem. En. Fokusera och gör den idén bra.
        </p>
        <p style={S.p}>
          Skriv kort. 300–500 ord är ofta perfekt. Dela upp med radbrytningar. Korta stycken.
          Människor läser inte block-text på mobilen.
        </p>

        <h3 style={S.h3}>Avslutningen</h3>
        <p style={S.p}>
          En tydlig nästa steg. Vad vill du att läsaren gör nu? Bara en sak per mejl.
        </p>
        <div style={S.compRow}>
          <div style={S.compAfter}>"Svara på det här mejlet och berätta: vad är ditt största utmaning med X?"</div>
          <div style={S.compAfter}>"Klicka här för att läsa hela guiden."</div>
          <div style={S.compAfter}>"Dela med en vän som driver eget."</div>
        </div>

        <h2 style={S.h2}>Ton: personlig, inte privat</h2>
        <p style={S.p}>
          Skillnaden är viktig. Personlig betyder att du skriver som en människa, med åsikter och
          erfarenheter. Privat betyder att du berättar saker som egentligen inte hör hemma i ett
          företagsmejl.
        </p>
        <div style={S.compRow}>
          <div style={S.compAfter}><strong>Okej:</strong> "Jag har grubblat över prissättning den senaste månaden. Här är vad jag lärt mig."</div>
          <div style={S.compBefore}><strong>Inte okej:</strong> "Min fru och jag har bråkat om det här i veckor och nu vet jag inte vad jag ska ta mig till."</div>
        </div>

        <h2 style={S.h2}>Vad ska du skriva om?</h2>
        {FORMATS.map((f) => (
          <div key={f.title} style={S.formatCard}>
            <p style={{ fontSize: 15, fontWeight: 700, color: "#111", margin: "0 0 4px" }}>{f.title}</p>
            <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
          </div>
        ))}

        <h2 style={S.h2}>Hur ofta ska du skicka?</h2>
        <p style={S.p}>
          Konsistens slår frekvens. Ett mejl i månaden varje månad är bättre än tre i veckan i en
          månad följt av tystnad.
        </p>
        <p style={S.p}>
          Realistisk startplan: ett nyhetsbrev varannan vecka. När du hittat flow kan du öka till
          varje vecka. Oavsett frekvens: håll löftet. Tillit byggs genom konsistens.
        </p>

        <h2 style={S.h2}>Verktyg som funkar</h2>
        {TOOLS.map((t) => (
          <div key={t.name} style={S.toolRow}>
            <span style={{ fontWeight: 700, fontSize: 15, color: "#111" }}>{t.name}</span>
            <span style={{ fontSize: 14, color: "#6B7280", maxWidth: 380, textAlign: "right" }}>{t.desc}</span>
          </div>
        ))}
        <div style={S.tip}>Välj ett och börja. Du kan alltid byta senare.</div>

        <h2 style={S.h2}>Det viktigaste: bara börja</h2>
        <p style={S.p}>
          De flesta småföretagare fastnar i att "planera nyhetsbrev" i månader utan att skicka
          något. Det är värre än att skicka något mediokert.
        </p>
        <p style={S.p}>
          Skriv ditt första nyhetsbrev idag. Skicka det till 20 personer du känner. Be om feedback.
          Förbättra nästa. Perfektion är fiende till framsteg.
        </p>

        <h2 style={S.h2}>Spara tid med AI</h2>
        <p style={S.p}>
          Att komma igång med ett nyhetsbrev — särskilt öppningar, rubriker och call-to-actions —
          tar tid. Med Textverket kan du snabbt generera utkast på svenska. Beskriv vad nyhetsbrevet
          ska handla om så skapar AI:n en början du kan bygga vidare på.
        </p>
        <div style={S.ctaBox}>
          <p style={S.ctaTitle}>Skriv ditt nyhetsbrev på sekunder</p>
          <p style={S.ctaDesc}>
            Beskriv ämnet — AI:n levererar ämnesrad, öppning och body du kan anpassa. Gratis, inga konton.
          </p>
          <a href="/verktyg" style={S.ctaBtn}>Testa gratis på Textverket →</a>
        </div>

        <p style={S.footerNote}>
          Textverket hjälper svenska småföretag att skriva professionella texter med AI.{" "}
          <a href="/verktyg" style={{ color: "#6B7280" }}>Testa gratis på textverket.se.</a>
        </p>
      </article>

      <Footer />
    </div>
  );
}
