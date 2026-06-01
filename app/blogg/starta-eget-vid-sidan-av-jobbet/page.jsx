import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Starta eget vid sidan av jobbet — komplett guide för Sverige (2026) — Textverket",
  description:
    "Steg-för-steg-guide: hobbyverksamhet eller enskild firma, hitta din idé, validera, hitta första kunder och hantera tid. För dig som vill testa utan att säga upp dig.",
  keywords: "starta eget vid sidan av jobbet, sidoprojekt Sverige, enskild firma, hobbyverksamhet Sverige",
  alternates: {
    canonical: "/blogg/starta-eget-vid-sidan-av-jobbet",
  },
  openGraph: {
    title: "Starta eget vid sidan av jobbet — komplett guide för dig i Sverige (2026)",
    description:
      "Komplett guide: juridik, registrering, validering och tidhantering. Gratis AI-verktyg på textverket.se.",
    url: "https://www.textverket.se/blogg/starta-eget-vid-sidan-av-jobbet",
    siteName: "Textverket",
    locale: "sv_SE",
    type: "article",
  },
};

const S = {
  page: {
    minHeight: "100vh",
    background: "#FAFAF9",
    fontFamily: "'DM Sans', sans-serif",
    color: "#1A1A1A",
  },
  navWrap: { borderBottom: "1px solid #EDEDED" },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 28px",
    maxWidth: 960,
    margin: "0 auto",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    textDecoration: "none",
    color: "#1A1A1A",
  },
  navLinks: { display: "flex", alignItems: "center", gap: 24 },
  navLink: { fontSize: 14, fontWeight: 500, color: "#555", textDecoration: "none" },
  navCta: {
    background: "#1A1A1A",
    color: "#fff",
    padding: "9px 20px",
    borderRadius: 100,
    fontSize: 14,
    fontWeight: 600,
    textDecoration: "none",
  },
  article: { maxWidth: 720, margin: "0 auto", padding: "52px 28px 80px" },
  breadcrumb: {
    fontSize: 13,
    color: "#9CA3AF",
    marginBottom: 28,
    display: "flex",
    gap: 6,
    alignItems: "center",
  },
  breadcrumbLink: { color: "#9CA3AF", textDecoration: "none" },
  categoryPill: {
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
  },
  h1: {
    fontFamily: "'Instrument Serif', serif",
    fontSize: "clamp(30px, 5vw, 44px)",
    fontWeight: 400,
    lineHeight: 1.2,
    margin: "0 0 20px",
    color: "#111",
  },
  meta: {
    fontSize: 14,
    color: "#9CA3AF",
    marginBottom: 36,
    display: "flex",
    flexWrap: "wrap",
    gap: 6,
    alignItems: "center",
  },
  metaDot: { color: "#D1D5DB" },
  divider: { border: "none", borderTop: "1px solid #E5E7EB", margin: "0 0 40px" },
  p: { fontSize: 17, lineHeight: 1.85, color: "#374151", margin: "0 0 22px" },
  h2: {
    fontFamily: "'Instrument Serif', serif",
    fontSize: 28,
    fontWeight: 400,
    color: "#111",
    margin: "56px 0 20px",
    lineHeight: 1.3,
  },
  h3: {
    fontSize: 18,
    fontWeight: 700,
    color: "#1A1A1A",
    margin: "36px 0 14px",
    lineHeight: 1.4,
  },
  tip: {
    background: "#FFFBEB",
    border: "1px solid #FDE68A",
    borderRadius: 10,
    padding: "14px 18px",
    fontSize: 14,
    color: "#92400E",
    lineHeight: 1.7,
    margin: "20px 0",
  },
  infoBox: {
    background: "#F0FDF4",
    border: "1px solid #BBF7D0",
    borderRadius: 10,
    padding: "14px 18px",
    fontSize: 14,
    color: "#14532D",
    lineHeight: 1.7,
    margin: "20px 0",
  },
  warningBox: {
    background: "#FFF5F5",
    border: "1px solid #FED7D7",
    borderRadius: 10,
    padding: "14px 18px",
    fontSize: 14,
    color: "#7F1D1D",
    lineHeight: 1.7,
    margin: "20px 0",
  },
  stepItem: {
    display: "flex",
    gap: 20,
    margin: "0 0 40px",
    alignItems: "flex-start",
  },
  stepNum: {
    background: "#1A1A1A",
    color: "#fff",
    width: 36,
    height: 36,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 15,
    fontWeight: 700,
    flexShrink: 0,
    marginTop: 2,
  },
  mistakeItem: {
    display: "flex",
    gap: 16,
    margin: "20px 0",
    alignItems: "flex-start",
  },
  mistakeBullet: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "#9CA3AF",
    flexShrink: 0,
    marginTop: 10,
  },
  ctaBox: {
    background: "linear-gradient(135deg, #111 0%, #1a2332 100%)",
    borderRadius: 16,
    padding: "32px 28px",
    margin: "48px 0 0",
    color: "#fff",
  },
  ctaTitle: {
    fontFamily: "'Instrument Serif', serif",
    fontSize: 24,
    fontWeight: 400,
    margin: "0 0 10px",
    color: "#fff",
  },
  ctaDesc: {
    fontSize: 15,
    color: "rgba(255,255,255,0.7)",
    margin: "0 0 20px",
    lineHeight: 1.7,
  },
  ctaBtn: {
    display: "inline-block",
    background: "#fff",
    color: "#111",
    padding: "12px 28px",
    borderRadius: 100,
    fontSize: 15,
    fontWeight: 700,
    textDecoration: "none",
  },
  footerNote: {
    borderTop: "1px solid #E5E7EB",
    marginTop: 56,
    paddingTop: 24,
    fontSize: 14,
    color: "#9CA3AF",
    lineHeight: 1.7,
    fontStyle: "italic",
  },
  footer: {
    textAlign: "center",
    padding: "32px 28px",
    color: "#9CA3AF",
    fontSize: 13,
    borderTop: "1px solid #EDEDED",
  },
};

const STEPS = [
  {
    num: "1",
    title: "Hobbyverksamhet eller enskild firma?",
    content: (
      <>
        <p style={S.p}>Det beror på hur mycket du förväntar dig att tjäna.</p>
        <p style={S.p}>
          <strong>Hobbyverksamhet</strong> passar om du tjänar under 30 000 kronor per år.
          Du behöver inte registrera företag, inte ha F-skatt och inte vara momsregistrerad.
          Du deklarerar inkomsten som "övrig inkomst" på din vanliga deklaration. Du kan
          inte dra av kostnader mot intäkterna.
        </p>
        <p style={S.p}>
          <strong>Enskild firma</strong> passar om du tror att du kommer tjäna mer, vill
          framstå som professionell, eller vill kunna dra av kostnader. Registrering görs
          på verksamt.se och kostar cirka 900 kronor. Du kan ansöka om F-skatt och
          momsregistrering samtidigt.
        </p>
        <div style={S.tip}>
          <strong>Råd:</strong> Börja som hobbyverksamhet. Registrera enskild firma när
          intäkterna motiverar det. Det tar en kvart att registrera sig — du kan göra det
          när som helst.
        </div>
      </>
    ),
  },
  {
    num: "2",
    title: "Hitta din idé",
    content: (
      <>
        <p style={S.p}>Om du redan har en idé, hoppa till nästa steg. Om inte, börja med dessa frågor.</p>
        <p style={S.p}>
          <strong>Vad frågar folk dig om hjälp med?</strong> Det du gör naturligt och som
          andra tycker är svårt — det är din tjänst.
        </p>
        <p style={S.p}>
          <strong>Vad irriterar dig i din vardag?</strong> Problem du upplever själv
          upplever sannolikt tusentals andra. Lös det åt dem.
        </p>
        <p style={S.p}>
          <strong>Vad kan du paketera av det du redan kan?</strong> Kunskap, processer,
          mallar, checklistor — saker som finns i ditt huvud men som andra skulle betala
          för att slippa lista ut själva.
        </p>
        <p style={S.p}>
          De bästa sidoprojekten kräver lite kapital och kan skalas utan att du behöver
          jobba proportionellt mer. Digitala produkter, konsulttjänster och onlineverktyg
          är perfekta exempel.
        </p>
      </>
    ),
  },
  {
    num: "3",
    title: "Validera innan du bygger",
    content: (
      <>
        <p style={S.p}>
          Det största misstaget nya företagare gör: de bygger något i månader innan de
          frågar om någon faktiskt vill ha det.
        </p>
        <p style={S.p}>
          Validera din idé på det enklaste möjliga sättet. Berätta för tio personer i din
          målgrupp vad du tänker erbjuda och fråga om de skulle betala för det. Inte
          "tycker du det låter bra?" utan "skulle du betala 500 kronor för detta?"
        </p>
        <div style={S.infoBox}>
          <strong>Om svaret är ja:</strong> Bygg en minimal version och sälj den.
          <br />
          <strong>Om svaret är nej:</strong> Fråga varför och anpassa. Bättre att veta nu
          än efter tre månaders arbete.
        </div>
      </>
    ),
  },
  {
    num: "4",
    title: "Börja smått och snabbt",
    content: (
      <>
        <p style={S.p}>
          Perfektionism är fienden. Din första version behöver inte vara perfekt — den
          behöver bara finnas.
        </p>
        <p style={S.p}>
          <strong>Säljer du en tjänst?</strong> Gör en enkel sida på Carrd eller
          Squarespace, skriv vad du erbjuder, lägg upp ett kontaktformulär. Klart.
        </p>
        <p style={S.p}>
          <strong>Säljer du en digital produkt?</strong> Skapa den, lägg upp den på
          Gumroad, och dela länken. Du behöver ingen egen webbshop dag ett.
        </p>
        <p style={S.p}>
          <strong>Säljer du en fysisk produkt?</strong> Testa på Tradera eller Facebook
          Marketplace innan du investerar i lager och logistik.
        </p>
        <p style={S.p}>
          Ju snabbare du har något live, desto snabbare lär du dig vad som funkar.
        </p>
      </>
    ),
  },
  {
    num: "5",
    title: "Hitta dina första kunder",
    content: (
      <>
        <p style={S.p}>
          De första kunderna kommer nästan aldrig från Google eller sociala medier. De
          kommer från ditt befintliga nätverk.
        </p>
        <p style={S.p}>
          Berätta för vänner, familj och kollegor vad du gör. Inte som en sälj-pitch,
          utan som information. "Jag har börjat erbjuda X vid sidan av jobbet — om du
          vet någon som behöver det, skicka gärna vidare."
        </p>
        <p style={S.p}>
          Gå med i relevanta Facebook-grupper och forum. Var hjälpsam först, säljande sen.
          Svara på frågor, dela tips, bygg förtroende. Folk köper av de som de litar på.
        </p>
        <div style={S.tip}>
          <strong>LinkedIn är underskattat.</strong> Ett enda inlägg om att du startat ett
          sidoprojekt kan ge fler kontakter än månader av annan marknadsföring.
        </div>
      </>
    ),
  },
  {
    num: "6",
    title: "Hantera tiden",
    content: (
      <>
        <p style={S.p}>
          Den stora utmaningen med sidoprojekt är tid. Du har redan ett jobb, kanske
          familj, och dagarna har fortfarande bara 24 timmar.
        </p>
        <p style={S.p}>
          Boka in fasta tider i kalendern. Två kvällar i veckan och en förmiddag på
          helgen är tillräckligt för att komma långt. Behandla det som ett möte du inte
          kan ställa in.
        </p>
        <p style={S.p}>
          Automatisera allt som går att automatisera. Fakturering, bokföring, mejlsvar,
          sociala medier-schemaläggning. Varje minut du sparar på administration är en
          minut du kan lägga på att faktiskt bygga ditt företag.
        </p>
        <p style={S.p}>
          Säg nej till saker som inte tar dig framåt. I början vill man göra allt — ny
          logga, visitkort, perfekt hemsida. Fokusera på det som genererar intäkter.
        </p>
      </>
    ),
  },
  {
    num: "7",
    title: "Håll koll på pengarna",
    content: (
      <>
        <p style={S.p}>
          Även om du kör hobbyverksamhet behöver du hålla koll på vad som kommer in och
          går ut.
        </p>
        <p style={S.p}>
          Skapa ett separat bankkonto för ditt sidoprojekt. Det gör bokföringen enklare
          och du ser tydligt hur det går.
        </p>
        <p style={S.p}>
          Spara alla kvitton. Även i hobbyverksamhet kan du behöva dokumentera kostnader
          vid en eventuell deklarationsgranskning.
        </p>
        <div style={S.infoBox}>
          <strong>Om du registrerar enskild firma:</strong> Använd ett bokföringsprogram
          som Bokio eller Fortnox. Båda har gratisplaner som räcker för de flesta
          sidoprojekt.
        </div>
      </>
    ),
  },
];

const MISTAKES = [
  "Att vänta tills allt är perfekt. Lansera tidigt, förbättra löpande.",
  "Att spendera pengar på saker du inte behöver. Du behöver inte en logga för 5 000 kronor dag ett. Du behöver kunder.",
  "Att jämföra dig med fullständiga företag. De har mer tid, mer pengar och fler personer. Du har flexibilitet, låga kostnader och noll byråkrati.",
  "Att ge upp för tidigt. De flesta sidoprojekt tar 6 till 12 månader innan de genererar meningsfull inkomst. Ha tålamod.",
];

export default function StartaEgetPage() {
  return (
    <div style={S.page}>
      <NavBar />

      <article style={S.article}>
        <div style={S.breadcrumb}>
          <a href="/" style={S.breadcrumbLink}>Hem</a>
          <span>›</span>
          <a href="/blogg" style={S.breadcrumbLink}>Blogg</a>
          <span>›</span>
          <span>Starta eget vid sidan av jobbet</span>
        </div>

        <span style={S.categoryPill}>Guide</span>

        <h1 style={S.h1}>
          Starta eget vid sidan av jobbet — komplett guide för dig i Sverige (2026)
        </h1>

        <div style={S.meta}>
          <span>Publicerad av Textverket</span>
          <span style={S.metaDot}>·</span>
          <span>Uppdaterad april 2026</span>
          <span style={S.metaDot}>·</span>
          <span>Lästid: 9 minuter</span>
        </div>

        <hr style={S.divider} />

        <p style={S.p}>
          Du har en idé. Kanske en tjänst du kan erbjuda, en produkt du vill sälja, eller
          en kunskap du kan paketera. Men du har också ett jobb, och tanken på att säga
          upp dig för att "satsa" känns inte realistisk. Det behöver det inte heller vara.
        </p>
        <p style={S.p}>
          Att starta eget vid sidan av jobbet är det smartaste sättet att bli företagare.
          Du behåller din trygghet medan du testar om din idé faktiskt funkar. I den här
          guiden går vi igenom exakt hur du gör det — steg för steg.
        </p>

        <h2 style={S.h2}>Får jag starta eget vid sidan av jobbet?</h2>
        <p style={S.p}>
          Ja, i de allesta fall. I Sverige har du som huvudregel rätt att driva ett
          sidoföretag så länge det inte konkurrerar med din arbetsgivare och inte påverkar
          ditt ordinarie arbete negativt.
        </p>
        <p style={S.p}>
          Kolla dock ditt anställningsavtal. Vissa avtal, särskilt inom IT och
          konsultbranschen, har konkurrensklausuler eller kräver att du informerar din
          arbetsgivare. Om du är osäker — prata med din chef. De flesta arbetsgivare har
          inga problem med sidoprojekt som inte konkurrerar.
        </p>
        <div style={S.warningBox}>
          <strong>Statligt anställd?</strong> Då gäller särskilda regler om bisyssla.
          Du kan behöva anmäla din sidoverksamhet.
        </div>

        <h2 style={S.h2}>Steg för steg</h2>

        {STEPS.map((step) => (
          <div key={step.num} style={S.stepItem}>
            <div style={S.stepNum}>{step.num}</div>
            <div style={{ flex: 1 }}>
              <h3 style={{ ...S.h3, margin: "0 0 16px" }}>Steg {step.num}: {step.title}</h3>
              {step.content}
            </div>
          </div>
        ))}

        <h2 style={S.h2}>Vanliga fällor att undvika</h2>
        {MISTAKES.map((m, i) => (
          <div key={i} style={S.mistakeItem}>
            <div style={S.mistakeBullet} />
            <p style={{ ...S.p, margin: 0 }}>{m}</p>
          </div>
        ))}

        <h2 style={S.h2}>Spara tid med AI</h2>
        <p style={S.p}>
          Som sidoprojektare är tid din knappaste resurs. Med Textverket kan du snabbt
          generera professionella texter för ditt nya företag — offertmejl,
          produktbeskrivningar, kundkommunikation och mycket mer. Helt gratis.
        </p>

        <div style={S.ctaBox}>
          <p style={S.ctaTitle}>Skriv professionella texter till ditt sidoprojekt</p>
          <p style={S.ctaDesc}>
            Offertmejl, produkttexter, kundkommunikation — AI:n genererar dem på
            sekunder. Gratis, inga konton.
          </p>
          <a href="/verktyg" style={S.ctaBtn}>
            Testa gratis på Textverket →
          </a>
        </div>

        <p style={S.footerNote}>
          Textverket hjälper svenska småföretag att skriva professionella texter med AI.{" "}
          <a href="/verktyg" style={{ color: "#6B7280" }}>
            Testa gratis på textverket.se.
          </a>
        </p>
      </article>

      <Footer />
    </div>
  );
}
