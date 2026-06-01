import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Personligt brev och CV — kompletta mallar och tips (2026) — Textverket",
  description:
    "Konkreta mallar och tips för personligt brev och CV som sticker ut. Strukturen som fungerar, vanliga misstag och exempel du kan använda direkt.",
  keywords: "personligt brev mall, CV tips Sverige, personligt brev exempel, jobbansökan Sverige, CV mall",
  alternates: {
    canonical: "/blogg/personligt-brev-cv",
  },
  openGraph: {
    title: "Personligt brev och CV — kompletta mallar och tips (2026)",
    description:
      "Mallar och tips för personligt brev och CV. Gratis AI-verktyg på textverket.se.",
    url: "https://www.textverket.se/blogg/personligt-brev-cv",
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
  exampleBlock: { background: "#fff", border: "1px solid #E2E8F0", borderRadius: 12, padding: "20px 24px", margin: "20px 0", fontSize: 15, lineHeight: 1.85, color: "#374151", fontStyle: "italic" },
  compRow: { display: "flex", flexDirection: "column", gap: 8, margin: "16px 0" },
  compBefore: { background: "#FFF5F5", border: "1px solid #FED7D7", borderRadius: 8, padding: "10px 14px", fontSize: 14, color: "#7F1D1D" },
  compAfter: { background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 8, padding: "10px 14px", fontSize: 14, color: "#14532D" },
  listItem: { display: "flex", gap: 12, margin: "10px 0", alignItems: "flex-start" },
  bullet: { width: 6, height: 6, borderRadius: "50%", background: "#9CA3AF", flexShrink: 0, marginTop: 10 },
  ctaBox: { background: "linear-gradient(135deg, #111 0%, #1a2332 100%)", borderRadius: 16, padding: "32px 28px", margin: "48px 0 0", color: "#fff" },
  ctaTitle: { fontFamily: "'Instrument Serif', serif", fontSize: 24, fontWeight: 400, margin: "0 0 10px", color: "#fff" },
  ctaDesc: { fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 20px", lineHeight: 1.7 },
  ctaBtn: { display: "inline-block", background: "#fff", color: "#111", padding: "12px 28px", borderRadius: 100, fontSize: 15, fontWeight: 700, textDecoration: "none" },
  footerNote: { borderTop: "1px solid #E5E7EB", marginTop: 56, paddingTop: 24, fontSize: 14, color: "#9CA3AF", lineHeight: 1.7, fontStyle: "italic" },
  footer: { textAlign: "center", padding: "32px 28px", color: "#9CA3AF", fontSize: 13, borderTop: "1px solid #EDEDED" },
};

export default function PersonligtBrevCVPage() {
  return (
    <div style={S.page}>
      <NavBar />

      <article style={S.article}>
        <div style={S.breadcrumb}>
          <a href="/" style={S.breadcrumbLink}>Hem</a>
          <span>›</span>
          <a href="/blogg" style={S.breadcrumbLink}>Blogg</a>
          <span>›</span>
          <span>Personligt brev och CV</span>
        </div>

        <span style={S.categoryPill}>Mallar</span>

        <h1 style={S.h1}>
          Personligt brev och CV — kompletta mallar och tips (2026)
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
          Att söka jobb är en av de mest stressande uppgifter som finns. Du stirrar på ett tomt
          dokument och ska på något sätt sammanfatta din yrkesidentitet på två A4. Samtidigt vet
          du att rekryteraren lägger mindre än en minut på att läsa det.
        </p>
        <p style={S.p}>
          I den här guiden får du konkreta mallar och tips på hur du skriver ett personligt brev
          och CV som faktiskt sticker ut — utan att låta som alla andra.
        </p>

        <h2 style={S.h2}>Det personliga brevet — den viktigaste sidan</h2>
        <p style={S.p}>
          De flesta tror att CV:t är viktigast. Det är fel. Rekryteraren läser ditt personliga brev
          först och använder det för att avgöra om CV:t ens är värt att titta på. Är det stelt och
          generiskt fortsätter de sällan.
        </p>

        <h3 style={S.h3}>Strukturen som fungerar</h3>
        <p style={S.p}>
          <strong>Öppningen (1–2 meningar):</strong> Hoppa över "Jag heter X och söker tjänsten Y".
          Det vet de redan. Börja istället med något som visar att du förstått företaget eller rollen.
        </p>
        <blockquote style={S.quote}>
          Exempel: "När jag såg att ni söker en projektledare för er nya satsning i Göteborg tänkte
          jag direkt på mitt förra projekt där vi byggde upp ett team från noll på sex månader."
        </blockquote>
        <p style={S.p}>
          <strong>Varför jag (2–3 meningar):</strong> Kort om din relevanta erfarenhet. Inte en
          uppräkning av allt du gjort — bara det som är relevant för just den här rollen.
        </p>
        <p style={S.p}>
          <strong>Varför er (2–3 meningar):</strong> Visa att du har gjort research. Nämn något
          specifikt om företaget som lockar dig. Undvik floskler som "spännande arbetsplats med bra kultur".
        </p>
        <p style={S.p}>
          <strong>Vad jag tillför (2–3 meningar):</strong> Var konkret. Inte "jag är driven och
          strukturerad" utan "i min förra roll minskade jag onboarding-tiden med 40% genom att bygga
          om introduktionsprogrammet".
        </p>
        <p style={S.p}>
          <strong>Avslutning (1 mening):</strong> "Hoppas få möjlighet att berätta mer vid en
          intervju." Klar. Ingen krånglig fras behövs.
        </p>

        <h3 style={S.h3}>Exempel: Personligt brev</h3>
        <div style={S.exampleBlock}>
          <p style={{ margin: "0 0 12px" }}>Hej!</p>
          <p style={{ margin: "0 0 12px" }}>
            När jag läste er annons om tjänsten som ekonomiassistent hos Norrlands Bygg fastnade
            jag särskilt för att ni söker någon som vill vara med och bygga upp en mer strukturerad
            ekonomifunktion. Det är exakt den typen av utmaning jag trivs med.
          </p>
          <p style={{ margin: "0 0 12px" }}>
            Jag har arbetat som ekonomiassistent i tre år på ett mindre byggföretag där jag bland
            annat digitaliserade hela fakturahanteringen och kortade betalningstiderna med en vecka.
            Innan dess studerade jag ekonomi på Umeå Universitet.
          </p>
          <p style={{ margin: "0 0 12px" }}>
            Det som lockar med Norrlands Bygg är kombinationen av traditionellt hantverk och modern
            teknik. Att ni har egen produktion och samtidigt satsar på digitala verktyg känns som en
            bra miljö för någon som jag, som gärna sitter i excel men också vill förstå hur
            verksamheten faktiskt fungerar.
          </p>
          <p style={{ margin: 0 }}>
            Jag hoppas få chansen att berätta mer i en intervju.<br />
            Vänliga hälsningar, Emma
          </p>
        </div>
        <div style={S.tip}>
          <strong>Notera:</strong> Brevet är kort — under en A4. Det är en funktion, inte en brist.
          Rekryteraren är tacksam.
        </div>

        <h2 style={S.h2}>CV:t — så bygger du det rätt</h2>

        <h3 style={S.h3}>Struktur uppifrån och ner</h3>
        {[
          ["Kontaktinfo", "Namn, telefon, mejl, LinkedIn. Inte personnummer, inte adress."],
          ["Sammanfattning (valfri)", "Två till tre meningar som sammanfattar vem du är yrkesmässigt. Funkar bäst om du har 5+ års erfarenhet."],
          ["Arbetslivserfarenhet", "I omvänd kronologisk ordning. Senaste jobbet först. 3–5 punkter per roll med fokus på resultat, inte uppgifter."],
          ["Utbildning", "Omvänd kronologisk ordning. Bara de senaste eller mest relevanta."],
          ["Kompetenser", "Programvaror, språk, specifika metoder. Kort lista, inte en ordsoppa."],
        ].map(([title, desc]) => (
          <div key={title} style={S.listItem}>
            <div style={S.bullet} />
            <p style={{ ...S.p, margin: 0 }}>
              <strong>{title}:</strong> {desc}
            </p>
          </div>
        ))}

        <h3 style={S.h3}>Skillnaden som gör allt</h3>
        <p style={S.p}>
          Det här är den enskilt viktigaste förändringen du kan göra i ditt CV — fokusera på
          resultat, inte arbetsuppgifter.
        </p>
        <div style={S.compRow}>
          <div style={S.compBefore}>
            <strong>Innan:</strong> "Ansvarig för sociala medier-kanaler på företaget."
          </div>
          <div style={S.compAfter}>
            <strong>Efter:</strong> "Byggde upp företagets Instagram-närvaro från 500 till 12 000
            följare på 18 månader, vilket ledde till 30% fler inkommande leads."
          </div>
        </div>
        <p style={S.p}>
          Varje punkt i ditt CV ska helst ha ett mätbart resultat. Siffror, procent, tid. Om du
          inte kan säga exakt — uppskatta. "Minskade svarstider med cirka hälften" är bättre än
          "arbetade med kundservice".
        </p>

        <h3 style={S.h3}>Vanliga misstag att undvika</h3>
        {[
          ["För långt CV", "Under 10 års erfarenhet = en sida. Över 10 års erfarenhet = max två sidor."],
          ["För mycket design", "Snygga grafer fungerar sällan — och många ATS-system kan inte läsa dem. Håll det rent."],
          ["Oanvända referenser", 'Skriv inte "referenser ges på begäran". Det är standard. Ta bort raden helt.'],
          ["Samma CV till alla jobb", "Anpassa åtminstone sammanfattningen för varje ansökan."],
        ].map(([title, desc]) => (
          <div key={title} style={S.listItem}>
            <div style={S.bullet} />
            <p style={{ ...S.p, margin: 0 }}>
              <strong>{title}:</strong> {desc}
            </p>
          </div>
        ))}

        <h2 style={S.h2}>LinkedIn — det tredje benet</h2>
        <p style={S.p}>
          Ett personligt brev och ett CV räcker inte längre. Rekryterare söker upp din LinkedIn
          innan de bestämmer sig. Se till att:
        </p>
        {[
          "Profilbilden är professionell (men mänsklig — ingen rädd passbild)",
          "Rubriken beskriver vad du gör och vart du är på väg",
          "Sammanfattningen är skriven i du-form, inte jag-form",
          "Tidigare roller har samma resultatsorienterade text som CV:t",
          "Du har rekommendationer från tidigare chefer eller kollegor",
        ].map((item) => (
          <div key={item} style={S.listItem}>
            <div style={S.bullet} />
            <p style={{ ...S.p, margin: 0 }}>{item}</p>
          </div>
        ))}

        <h2 style={S.h2}>Följ upp — ingen gör det, alla borde</h2>
        <p style={S.p}>
          En vecka efter du skickat in ansökan: skicka ett kort följ-upp-mejl. "Hej, ville bara
          höra om ni fått min ansökan och om det är något jag kan komplettera med?"
        </p>
        <p style={S.p}>
          Det är inte påträngande. Det visar intresse. Och i ett fält med 80 sökande hamnar du
          plötsligt i topp-tio av de som märks.
        </p>

        <h2 style={S.h2}>Spara tid med AI</h2>
        <p style={S.p}>
          Att skriva personligt brev som känns personligt — men inte pompöst — är svårt. Med
          Textverket kan du generera ett utkast på sekunder som du sedan anpassar. Beskriv rollen
          och din bakgrund så får du en grund att jobba vidare med.
        </p>
        <div style={S.ctaBox}>
          <p style={S.ctaTitle}>Skriv ditt personliga brev på 30 sekunder</p>
          <p style={S.ctaDesc}>
            Beskriv rollen och din bakgrund — AI:n levererar ett utkast du kan finslipa.
            Gratis, inga konton.
          </p>
          <a href="/verktyg" style={S.ctaBtn}>Testa gratis på Textverket →</a>
        </div>

        <p style={S.footerNote}>
          Textverket hjälper svenska småföretag och privatpersoner att skriva professionella texter med AI.{" "}
          <a href="/verktyg" style={{ color: "#6B7280" }}>Testa gratis på textverket.se.</a>
        </p>
      </article>

      <Footer />
    </div>
  );
}
