export const metadata = {
  title: "Så skriver du inlägg för sociala medier som företagare (2026) — Textverket",
  description:
    "Guide med exempel för småföretagare: de fyra innehållstyperna, hook-kropp-CTA-formeln, plattformsguide och 10 idéer du kan använda idag.",
  openGraph: {
    title: "Så skriver du inlägg för sociala medier som företagare — guide med exempel",
    description:
      "Enkel metod för att aldrig mer fastna framför en tom skärm. Gratis AI-verktyg på textverket.se.",
    url: "https://textverket.se/blogg/sociala-medier-foretag",
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
  contentCard: {
    background: "#fff",
    border: "1px solid #E5E7EB",
    borderRadius: 12,
    padding: "20px 24px",
    margin: "16px 0",
  },
  contentCardTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: "#111",
    margin: "0 0 8px",
  },
  contentCardWhy: {
    fontSize: 14,
    color: "#6B7280",
    margin: "0 0 10px",
    lineHeight: 1.6,
  },
  contentCardExample: {
    background: "#F8FAFC",
    borderLeft: "3px solid #CBD5E0",
    borderRadius: "0 8px 8px 0",
    padding: "12px 16px",
    fontSize: 14,
    color: "#4A5568",
    lineHeight: 1.7,
    fontStyle: "italic",
    margin: 0,
  },
  platformCard: {
    background: "#fff",
    border: "1px solid #E5E7EB",
    borderRadius: 12,
    padding: "16px 20px",
    margin: "12px 0",
  },
  ideasList: {
    margin: "0 0 0 20px",
    padding: 0,
    fontSize: 16,
    lineHeight: 2,
    color: "#374151",
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

const CONTENT_TYPES = [
  {
    num: "1",
    title: "Bakom kulisserna",
    why: "Människor är nyfikna av naturen. Att visa bakom kulisserna skapar en känsla av närhet och förtroende som ingen produktbild kan matcha.",
    example:
      "Måndagsmorgon på verkstan. Tre jobb inne, kaffe nummer två på gång, och en kund som precis ringde och vill ha sitt klart till fredag istället för nästa vecka. Livet som egenföretagare i ett nötskal.",
  },
  {
    num: "2",
    title: "Tips och kunskap",
    why: "Det positionerar dig som expert utan att du behöver säga \"jag är expert\". Genom att ge värde gratis bygger du förtroende som leder till affärer.",
    example:
      "Tre saker du bör kolla hemma innan vintern: 1) Testa alla jordfelsbrytare 2) Kolla att inget eluttag känns varmt 3) Byt batterier i brandvarnarna. Tar 15 minuter och kan spara dig tusentals kronor.",
  },
  {
    num: "3",
    title: "Kundberättelser och resultat",
    why: "Social proof. Nya kunder litar mer på vad dina befintliga kunder säger om dig än vad du säger om dig själv.",
    example:
      "Förra veckan levererade vi en ny webbplats till en kund. Deras gamla sida hade 200 besökare i månaden. Första veckan med nya sidan: 1 400. Rätt design gör skillnad.",
  },
  {
    num: "4",
    title: "Personligt",
    why: "Människor köper av människor de gillar. Genom att visa vem du är utanför jobbet blir du mer relaterbar.",
    example:
      "Idag firar jag 3 år som egenföretagare. Tre saker jag önskar att någon sagt till mig dag 1: Det tar längre tid än du tror. De första kunderna kommer från ditt nätverk, inte din hemsida. Och det är okej att inte veta allt.",
  },
];

const IDEAS = [
  "En bild från din arbetsplats med texten om vad du jobbar med just nu.",
  "En lista med tre tips relaterade till din bransch.",
  "Ett före- och efterexempel på ett nyligen avslutat jobb.",
  "En kort berättelse om varför du startade ditt företag.",
  "En fråga till dina följare om deras biggest pain point.",
  "En rekommendation av ett verktyg eller en produkt du använder.",
  "Ett tack till en kund eller samarbetspartner.",
  "En vanlig missuppfattning i din bransch — och sanningen.",
  "Ditt bästa tips till någon som funderar på att starta eget.",
  "En sammanfattning av din vecka i tre meningar.",
];

export default function SocialaMedierForetagPage() {
  return (
    <div style={S.page}>
      <div style={S.navWrap}>
        <nav style={S.nav}>
          <a href="/" style={S.logo}>
            <span style={{ fontSize: 22 }}>✍️</span>
            <span style={{ fontWeight: 700, fontSize: 18 }}>Textverket</span>
          </a>
          <div style={S.navLinks}>
            <a href="/blogg" style={S.navLink}>Blogg</a>
            <a href="/verktyg" style={S.navCta}>Testa gratis →</a>
          </div>
        </nav>
      </div>

      <article style={S.article}>
        <div style={S.breadcrumb}>
          <a href="/" style={S.breadcrumbLink}>Hem</a>
          <span>›</span>
          <a href="/blogg" style={S.breadcrumbLink}>Blogg</a>
          <span>›</span>
          <span>Sociala medier för företagare</span>
        </div>

        <span style={S.categoryPill}>Guide</span>

        <h1 style={S.h1}>
          Så skriver du inlägg för sociala medier som företagare — guide med exempel
        </h1>

        <div style={S.meta}>
          <span>Publicerad av Textverket</span>
          <span style={S.metaDot}>·</span>
          <span>Uppdaterad april 2026</span>
          <span style={S.metaDot}>·</span>
          <span>Lästid: 8 minuter</span>
        </div>

        <hr style={S.divider} />

        <p style={S.p}>
          Du vet att du borde vara aktiv på sociala medier. Alla säger det. Men varje
          gång du öppnar Instagram eller LinkedIn stirrar du på en tom ruta och tänker
          "vad ska jag ens skriva?"
        </p>
        <p style={S.p}>
          Du är inte ensam. De flesta småföretagare kämpar med samma sak. Den här guiden
          ger dig en enkel metod för att aldrig mer fastna framför en tom skärm.
        </p>

        <h2 style={S.h2}>Varför det känns svårt</h2>
        <p style={S.p}>
          Problemet är sällan brist på saker att säga. Problemet är att du försöker vara
          perfekt. Du jämför dig med företag som har marknadsavdelningar och content-team.
          Sluta med det.
        </p>
        <p style={S.p}>
          Dina kunder vill inte se polerat corporate-innehåll från dig. De vill se en
          riktig människa som driver ett riktigt företag. Det är din superkraft som
          småföretagare — äkthet.
        </p>

        <h2 style={S.h2}>De fyra innehållstyperna</h2>
        <p style={S.p}>
          Allt innehåll på sociala medier faller in i fyra kategorier. Varva mellan dem
          så får du variation utan att behöva uppfinna hjulet varje gång.
        </p>

        {CONTENT_TYPES.map((ct) => (
          <div key={ct.num} style={S.contentCard}>
            <p style={S.contentCardTitle}>{ct.num}. {ct.title}</p>
            <p style={S.contentCardWhy}><strong>Varför det funkar:</strong> {ct.why}</p>
            <blockquote style={S.contentCardExample}>Exempel: "{ct.example}"</blockquote>
          </div>
        ))}

        <h2 style={S.h2}>Formeln: Hook — Kropp — CTA</h2>
        <p style={S.p}>Varje inlägg behöver tre delar.</p>

        <h3 style={S.h3}>Hook — första meningen</h3>
        <p style={S.p}>
          Den avgör om någon stannar och läser eller scrollar vidare. Ställ en fråga,
          gör ett påstående, eller skapa nyfikenhet.
        </p>
        <blockquote style={S.quote}>
          "Vi lanserade en ny tjänst idag" är ingen hook.
          <br />
          "Jag sa nej till vår största kund förra veckan" är det.
        </blockquote>

        <h3 style={S.h3}>Kropp — själva innehållet</h3>
        <p style={S.p}>
          Håll det kort — 3–5 meningar för Instagram, upp till 10 för LinkedIn. Använd
          radbrytningar generöst. Ingen vill läsa ett textblock.
        </p>

        <h3 style={S.h3}>CTA — avslutningen</h3>
        <p style={S.p}>
          Be om något: en kommentar, en delning, ett klick. "Vad tycker du?" eller
          "Tagga någon som behöver höra detta" eller "Länk i bio för att läsa mer."
        </p>

        <h2 style={S.h2}>Hur ofta ska du posta?</h2>
        <p style={S.p}>
          Konsistens slår frekvens. Tre inlägg i veckan under sex månader är bättre än
          dagliga inlägg i två veckor följt av tystnad.
        </p>
        <p style={S.p}>
          En realistisk plan för en ensam företagare: två till tre inlägg per vecka.
          Planera dem på söndag kväll eller måndag morgon så slipper du tänka på det
          resten av veckan.
        </p>
        <div style={S.tip}>
          <strong>Tips:</strong> Använd schemaläggning — verktyg som Buffer och Later
          låter dig förbereda och schemalägga inlägg gratis.
        </div>

        <h2 style={S.h2}>Plattformsguide</h2>
        <p style={S.p}>Välj en till två plattformar som passar din målgrupp. Du behöver inte vara överallt.</p>

        {[
          {
            name: "Instagram",
            desc: "Funkar bäst för visuella branscher: hantverk, mat, design, mode, inredning. Fokusera på bilder och korta videor (Reels). Stories för bakom kulisserna.",
          },
          {
            name: "LinkedIn",
            desc: "Funkar bäst för B2B och tjänsteföretag: konsulter, IT, ekonomi, juridik. Längre textinlägg funkar bra. Tonen kan vara mer professionell men fortfarande personlig.",
          },
          {
            name: "Facebook",
            desc: "Funkar bäst för lokala företag och äldre målgrupper. Grupper är guld — hitta grupper där din målgrupp hänger och var aktiv.",
          },
          {
            name: "TikTok",
            desc: "Funkar bäst om du kan göra korta, underhållande videos. Bra för att nå yngre målgrupper. Kräver mer kreativitet men kan ge explosiv räckvidd.",
          },
        ].map((p) => (
          <div key={p.name} style={S.platformCard}>
            <p style={{ fontSize: 16, fontWeight: 700, color: "#111", margin: "0 0 6px" }}>
              {p.name}
            </p>
            <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.7, margin: 0 }}>
              {p.desc}
            </p>
          </div>
        ))}

        <h2 style={S.h2}>10 idéer du kan använda idag</h2>
        <p style={S.p}>
          Här är tio inlägg du kan anpassa till ditt företag och posta den här veckan.
        </p>
        <ol style={S.ideasList}>
          {IDEAS.map((idea, i) => (
            <li key={i}>{idea}</li>
          ))}
        </ol>

        <h2 style={S.h2}>Spara tid med AI</h2>
        <p style={S.p}>
          Att komma på och formulera inlägg tar tid. Med Textverket kan du generera
          engagerande inlägg för sociala medier på svenska på sekunder. Beskriv vad du
          vill kommunicera så skapar AI:n ett färdigt inlägg anpassat för din plattform.
        </p>

        <div style={S.ctaBox}>
          <p style={S.ctaTitle}>Skapa inlägg för sociala medier på sekunder</p>
          <p style={S.ctaDesc}>
            Beskriv vad du vill kommunicera — AI:n levererar ett engagerande inlägg
            anpassat för din plattform. Gratis, inga konton.
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

      <footer style={S.footer}>
        © 2026 Textverket · Gratis AI-verktyg för svenska företag
      </footer>
    </div>
  );
}
