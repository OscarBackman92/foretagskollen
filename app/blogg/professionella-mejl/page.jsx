import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Professionella mejl — 7 regler som gör ditt företag trovärdigt (2026)",
  description:
    "7 konkreta regler för professionella affärsmejl. Lär dig skriva ämnesrader som öppnas, hålla mejl korta och avsluta med rätt call to action.",
  openGraph: {
    title: "Professionella mejl — 7 regler som gör ditt företag trovärdigt",
    description:
      "7 regler för bättre affärsmejl. Gratis AI-verktyg på textverket.se.",
    url: "https://textverket.se/blogg/professionella-mejl",
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
  quote: {
    margin: "20px 0",
    padding: "16px 20px",
    background: "#F8FAFC",
    borderLeft: "3px solid #CBD5E0",
    borderRadius: "0 8px 8px 0",
    fontSize: 15,
    color: "#4A5568",
    lineHeight: 1.8,
    fontStyle: "italic",
  },
  ruleItem: {
    display: "flex",
    gap: 16,
    margin: "32px 0",
    alignItems: "flex-start",
  },
  ruleNum: {
    background: "#1A1A1A",
    color: "#fff",
    width: 32,
    height: 32,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    fontWeight: 700,
    flexShrink: 0,
    marginTop: 2,
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

const RULES = [
  {
    title: "Ämnesraden är halva jobbet",
    body: 'De flesta skriver ämnesraden sist, som en eftertanke. Det är bakvänt — ämnesraden avgör om mejlet överhuvudtaget öppnas. En bra ämnesrad är specifik och ger mottagaren en anledning att öppna. "Hej" eller "Fråga" säger ingenting. "Förslag på samarbete kring er julkampanj" säger allt. Tumregel: om mottagaren inte kan gissa vad mejlet handlar om utifrån ämnesraden har du misslyckats. Håll den under 60 tecken så den inte klipps av på mobilen.',
  },
  {
    title: "Första meningen avgör tonen",
    body: 'Hoppa inte rakt in i din fråga eller ditt ärende. En kort, personlig öppning gör enorm skillnad. Jämför: "Jag vill boka ett möte med dig angående projektet" med "Hej Karin! Hoppas veckan börjat bra. Jag ville höra om vi kan hitta en tid för att prata igenom nästa steg i projektet." Den andra varianten tar fem sekunder extra att skriva men sätter en helt annan ton. Människor gör affärer med människor, inte med robotar.',
  },
  {
    title: "En fråga per mejl",
    body: "Mejl med fem frågor får sällan fem svar. Ofta får de inget svar alls — mottagaren tänker \"det här tar tid, jag svarar senare\" och sedan glömmer de. Har du flera frågor? Välj den viktigaste och ställ den. Resten kan vänta till svaret kommer, eller tas i ett telefonsamtal. Om du absolut måste ställa flera frågor, numrera dem. Det gör det enklare för mottagaren att svara punkt för punkt.",
  },
  {
    title: "Skriv hälften så långt som du tror behövs",
    body: 'De flesta affärsmejl är dubbelt så långa som de behöver vara. Varje onödig mening minskar chansen att de viktiga delarna läses. Innan du skickar: läs igenom och ta bort allt som inte tillför information. "Jag ville bara höra mig för om det eventuellt skulle kunna vara möjligt att..." kan bli "Kan vi...". Respektera mottagarens tid. Korta mejl signalerar respekt och professionalitet. Långa mejl signalerar att du inte kan prioritera.',
  },
  {
    title: "Avsluta med ett konkret nästa steg",
    body: '"Hör av dig om du har frågor" är den svagaste avslutningen som finns. Det lägger hela ansvaret på mottagaren och ger ingen riktning. Bättre alternativ: "Kan du svara senast fredag så jag hinner förbereda inför mötet?" eller "Jag ringer dig på onsdag förmiddag om det passar?" eller "Bekräfta gärna med ett kort svar så bokar jag in det." Ge mottagaren en enkel handling att utföra. Ju enklare du gör det, desto snabbare får du svar.',
  },
  {
    title: "Korrekturläs en gång — på riktigt",
    body: 'Stavfel i ett affärsmejl signalerar slarv. Det kanske inte är rättvist, men det är verkligheten. Ett mejl fullt med stavfel skapar tvivel: "om de inte kan skriva ett mejl ordentligt, hur hanterar de mitt projekt?" Läs igenom mejlet en gång innan du skickar. Det tar 30 sekunder. Kontrollera speciellt mottagarens namn — att stava någons namn fel är en av de snabbaste vägarna till att hamna i papperskorgen.',
  },
  {
    title: "Tänk på tajmingen",
    body: "Mejl skickade klockan 22 på en söndagskväll signalerar antingen desperation eller dålig work-life balance. Inget av det bygger förtroende. Skicka affärsmejl under kontorstid: tisdag till torsdag mellan 9 och 16 har generellt högst öppningsfrekvens. Undvik måndagsmorgnar (folk drunknar i mejl) och fredagseftermiddagar (folk har redan stängt av mentalt). De flesta mejlklienter har funktionen \"schemalägg skicka\" — använd den om du skriver mejl på kvällen.",
  },
];

export default function ProfessionellaMejlPage() {
  return (
    <div style={S.page}>
      <NavBar />

      <article style={S.article}>
        <div style={S.breadcrumb}>
          <a href="/" style={S.breadcrumbLink}>Hem</a>
          <span>›</span>
          <a href="/blogg" style={S.breadcrumbLink}>Blogg</a>
          <span>›</span>
          <span>Professionella mejl</span>
        </div>

        <span style={S.categoryPill}>Guide</span>

        <h1 style={S.h1}>
          Professionella mejl — 7 regler som gör ditt företag trovärdigt
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
          Dina mejl är ditt företags ansikte utåt. Varje mejl du skickar — till kunder,
          leverantörer eller samarbetspartners — bygger eller bryter förtroende. Ändå
          skickar de flesta småföretagare mejl utan att tänka på hur de uppfattas.
        </p>
        <p style={S.p}>
          Här är sju regler som direkt förbättrar hur dina affärsmejl landar.
        </p>

        {RULES.map((rule, i) => (
          <div key={i} style={S.ruleItem}>
            <div style={S.ruleNum}>{i + 1}</div>
            <div>
              <h3 style={{ ...S.h3, margin: "0 0 12px" }}>Regel {i + 1}: {rule.title}</h3>
              <p style={{ ...S.p, margin: 0 }}>{rule.body}</p>
            </div>
          </div>
        ))}

        <h2 style={S.h2}>Bonus: Signatur som säljer</h2>
        <p style={S.p}>
          Din mejlsignatur är gratis marknadsföring som de flesta slösar bort. En bra
          signatur innehåller ditt namn och titel, företagsnamn, telefonnummer och kanske
          en länk till hemsidan.
        </p>
        <p style={S.p}>
          Skippa citat, banners och fem olika sociala medier-ikoner. Håll det rent och
          professionellt. Om du vill lägga till något extra, lägg till en rad som
          "Boka ett samtal: [länk till Calendly]" — det konverterar faktiskt.
        </p>

        <div style={S.tip}>
          <strong>Snabbtips:</strong> Gå igenom dina senaste tio skickade mejl. Hur många
          bryter mot någon av de sju reglerna? Det är ett bra sätt att se var du har mest
          att vinna.
        </div>

        <h2 style={S.h2}>Spara tid med AI</h2>
        <p style={S.p}>
          Att skriva genomtänkta affärsmejl behöver inte ta lång tid. Med Textverket kan
          du generera professionella mejl på sekunder — anpassade efter situation och ton.
          Du beskriver kort vad mejlet ska handla om, och AI:n sköter resten.
        </p>

        <div style={S.ctaBox}>
          <p style={S.ctaTitle}>Skriv professionella mejl på sekunder</p>
          <p style={S.ctaDesc}>
            Beskriv situationen så genererar AI:n ett färdigt mejl anpassat efter din
            ton och mottagare. Gratis, inga konton.
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
