import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "10 gratis AI-verktyg för småföretag i Sverige (2026) — Textverket",
  description:
    "De bästa gratis AI-verktygen för svenska småföretag 2026. Spara tid på textskrivning, design, kundservice och mer — utan kostnad.",
  keywords: "gratis AI verktyg, AI verktyg Sverige, AI småföretag, ChatGPT alternativ, Canva AI gratis",
  alternates: {
    canonical: "/blogg/gratis-ai-verktyg",
  },
  openGraph: {
    title: "10 gratis AI-verktyg för småföretag i Sverige (2026)",
    description:
      "De bästa gratis AI-verktygen för svenska småföretag. Testa på textverket.se.",
    url: "https://textverket.se/blogg/gratis-ai-verktyg",
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
  toolCard: { background: "#fff", border: "1px solid #E5E7EB", borderRadius: 12, padding: "24px", margin: "20px 0" },
  toolNum: { display: "inline-flex", alignItems: "center", justifyContent: "center", width: 28, height: 28, background: "#111", color: "#fff", borderRadius: "50%", fontSize: 13, fontWeight: 700, marginRight: 10, flexShrink: 0 },
  toolTitle: { fontWeight: 700, fontSize: 18, color: "#111", display: "flex", alignItems: "center", marginBottom: 8 },
  toolBadge: { display: "inline-block", background: "#F0FDF4", color: "#166534", fontSize: 11, fontWeight: 700, padding: "2px 9px", borderRadius: 4, marginLeft: 10, letterSpacing: 0.5, textTransform: "uppercase" },
  toolBest: { fontSize: 13, color: "#6B7280", fontStyle: "italic", marginBottom: 10 },
  tip: { background: "#FFFBEB", border: "1px solid #FDE68A", borderRadius: 10, padding: "14px 18px", fontSize: 14, color: "#92400E", lineHeight: 1.7, margin: "20px 0" },
  ctaBox: { background: "linear-gradient(135deg, #111 0%, #1a2332 100%)", borderRadius: 16, padding: "32px 28px", margin: "48px 0 0", color: "#fff" },
  ctaTitle: { fontFamily: "'Instrument Serif', serif", fontSize: 24, fontWeight: 400, margin: "0 0 10px", color: "#fff" },
  ctaDesc: { fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 20px", lineHeight: 1.7 },
  ctaBtn: { display: "inline-block", background: "#fff", color: "#111", padding: "12px 28px", borderRadius: 100, fontSize: 15, fontWeight: 700, textDecoration: "none" },
  footerNote: { borderTop: "1px solid #E5E7EB", marginTop: 56, paddingTop: 24, fontSize: 14, color: "#9CA3AF", lineHeight: 1.7, fontStyle: "italic" },
  footer: { textAlign: "center", padding: "32px 28px", color: "#9CA3AF", fontSize: 13, borderTop: "1px solid #EDEDED" },
};

const TOOLS = [
  {
    num: 1,
    name: "Textverket — AI-texter på svenska",
    best: "Offertmejl, produkttexter, kundmejl, sociala medier-inlägg och fakturatexter.",
    body: "Textverket är byggt specifikt för svenska småföretag. Du väljer vilken typ av text du behöver, beskriver kort vad den ska handla om, och får ett professionellt resultat på sekunder. Till skillnad från internationella verktyg förstår Textverket svensk affärssvenska och levererar texter som låter naturliga. Helt gratis, inga konton krävs.",
    link: "textverket.se",
  },
  {
    num: 2,
    name: "ChatGPT (gratisversion) — den mångsidiga assistenten",
    best: "Brainstorming, research, sammanfattningar och allmän textproduktion.",
    body: "OpenAI:s chatbot är det mest kända AI-verktyget. Gratisversionen ger dig tillgång till en kapabel AI som kan hjälpa med det mesta. Nackdelen? Den är inte optimerad för svenska och kan ibland leverera texter som känns \"översatta\". Tips: skriv dina promptar på svenska och be den specifikt att skriva i en naturlig, professionell ton.",
  },
  {
    num: 3,
    name: "Canva AI — gratis design för alla",
    best: "Logotyper, sociala medier-grafik, presentationer och marknadsföringsmaterial.",
    body: "Canva har integrerat AI-funktioner som Magic Write (textgenerering) och Magic Design (automatisk layout). Gratisplanen inkluderar de flesta AI-funktionerna och tusentals mallar. Perfekt för dig som behöver snyggt material men saknar designkunskap.",
  },
  {
    num: 4,
    name: "Google Gemini — kraftfull och gratis",
    best: "Analys, research, kodhjälp och långa texter.",
    body: "Googles AI-assistent Gemini är helt gratis att använda. Den har tillgång till aktuell information via Google och är särskilt bra på att analysera data och skapa strukturerat innehåll. Bra komplement om du behöver djupare research eller vill jämföra information.",
  },
  {
    num: 5,
    name: "Notion AI — organisera och skriv smartare",
    best: "Projektplanering, mötesanteckningar, dokumentation och intern kommunikation.",
    body: "Notion är redan populärt som projektverktyg, och deras AI-tillägg gör det ännu bättre. Den kan sammanfatta långa dokument, skapa att-göra-listor från mötesanteckningar och hjälpa dig formulera intern dokumentation. Gratis för enskild användning.",
  },
  {
    num: 6,
    name: "Grammarly — textkorrektur på engelska",
    best: "Korrekturläsning och förbättring av engelska texter.",
    body: "Om du har internationella kunder eller skriver mejl på engelska är Grammarly ovärderligt. Gratisversionen korrigerar grammatik och stavning, medan premiumversionen ger stilförslag och tonanpassning. Tyvärr fungerar det inte på svenska — men för engelska texter finns inget bättre.",
  },
  {
    num: 7,
    name: "Remove.bg — ta bort bakgrunder",
    best: "Produktbilder, profilbilder och marknadsföringsmaterial.",
    body: "Ett enkelt men otroligt användbart verktyg. Ladda upp en bild och AI:n tar bort bakgrunden automatiskt. Perfekt om du säljer produkter online och behöver rena produktbilder utan att anlita en fotograf.",
  },
  {
    num: 8,
    name: "Otter.ai — transkribering av möten",
    best: "Mötesanteckningar, kundsamtal och intervjuer.",
    body: "Otter.ai transkriberar ljudinspelningar till text automatiskt. Gratisplanen ger dig 300 minuter per månad. Fungerar bäst på engelska, men svenska stöds i viss utsträckning. Bra om du vill dokumentera kundsamtal eller möten utan att sitta och anteckna.",
  },
  {
    num: 9,
    name: "Pixlr — AI-bildredigering",
    best: "Enkel bildredigering, retuschering och bildförbättring.",
    body: "Pixlr har lagt till AI-funktioner som gör det enkelt att förbättra produktbilder, ta bort objekt och justera bilder utan Photoshop-kunskaper. Gratisversionen räcker för de flesta grundläggande behov.",
  },
  {
    num: 10,
    name: "Tidio — AI-chattbot för kundservice",
    best: "Automatiserad kundservice på din webbplats.",
    body: "Tidio erbjuder en AI-driven chattbot som kan svara på vanliga kundfrågor automatiskt. Gratisplanen inkluderar 50 konversationer per månad — tillräckligt för många småföretag. Konfigureras utan kodkunskap.",
  },
];

export default function GratisAiVerktygPage() {
  return (
    <div style={S.page}>
      <NavBar />

      <article style={S.article}>
        <div style={S.breadcrumb}>
          <a href="/blogg" style={S.breadcrumbLink}>Blogg</a>
          <span>›</span>
          <span>AI-verktyg</span>
        </div>

        <div style={S.categoryPill}>Guide</div>
        <h1 style={S.h1}>Gratis AI-verktyg för småföretag i Sverige — 10 bästa valen (2026)</h1>

        <div style={S.meta}>
          <span>April 2026</span>
          <span style={S.metaDot}>·</span>
          <span>9 min läsning</span>
          <span style={S.metaDot}>·</span>
          <span>Textverket</span>
        </div>

        <hr style={S.divider} />

        <p style={S.p}>
          AI har gått från buzzword till vardagsverktyg. Men för dig som driver ett litet företag kan det vara svårt att veta var du ska börja — och vilka verktyg som faktiskt är gratis att använda. I den här guiden listar vi de bästa gratis AI-verktygen som är relevanta för svenska småföretag under 2026.
        </p>

        <h2 style={S.h2}>Varför AI för småföretag?</h2>
        <p style={S.p}>
          Stora företag har marknadsavdelningar, copywriters och IT-team. Som småföretagare gör du allt själv. AI jämnar ut spelplanen genom att ge dig tillgång till verktyg som sparar tid på uppgifter som textskrivning, bildhantering, kundservice och administration.
        </p>
        <p style={S.p}>
          Det fina? Många av dessa verktyg har generösa gratisplaner som räcker långt för ett litet företag.
        </p>

        <h2 style={S.h2}>De 10 bästa gratis AI-verktygen</h2>

        {TOOLS.map((tool) => (
          <div key={tool.num} style={S.toolCard}>
            <div style={S.toolTitle}>
              <span style={S.toolNum}>{tool.num}</span>
              {tool.name}
              {tool.num === 1 && <span style={S.toolBadge}>Rekommenderas</span>}
            </div>
            <p style={S.toolBest}><strong>Bäst för:</strong> {tool.best}</p>
            <p style={{ ...S.p, margin: 0 }}>{tool.body}</p>
          </div>
        ))}

        <h2 style={S.h2}>Hur väljer du rätt verktyg?</h2>
        <p style={S.p}>
          Börja inte med tio verktyg samtidigt. Identifiera din största tidstjuv och välj ett verktyg som löser det.
        </p>
        <div style={S.tip}>
          <strong>Tips:</strong> Spenderar du mycket tid på att skriva offerter och kundmejl? Börja med Textverket. Behöver du snyggt marknadsföringsmaterial? Börja med Canva. Har du många kundsamtal? Testa Otter.ai.
        </div>
        <p style={S.p}>
          Det viktigaste är att du faktiskt använder verktyget regelbundet. Ett AI-verktyg sparar ingen tid om det bara ligger och samlar digitalt damm.
        </p>

        <h2 style={S.h2}>En varning om AI-genererat innehåll</h2>
        <p style={S.p}>
          AI är ett fantastiskt hjälpmedel, men det ersätter inte ditt eget omdöme. Läs alltid igenom texterna innan du skickar dem. Kontrollera fakta. Anpassa tonen efter din relation med kunden. AI ger dig ett starkt utkast — du gör det personligt.
        </p>

        <div style={S.ctaBox}>
          <p style={S.ctaTitle}>Redo att spara tid på textskrivning?</p>
          <p style={S.ctaDesc}>
            Textverket är byggt för svenska småföretag. Generera professionella offertmejl, kundmejl och produkttexter på sekunder — helt gratis.
          </p>
          <a href="/verktyg" style={S.ctaBtn}>Testa gratis →</a>
        </div>

        <p style={S.footerNote}>
          Textverket hjälper svenska småföretag att skriva professionella texter med AI. Testa gratis på textverket.se.
        </p>
      </article>

      <Footer />
    </div>
  );
}
