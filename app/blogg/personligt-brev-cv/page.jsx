import BlogPostLayout from "../../components/BlogPostLayout";
import { blogStyles as S } from "../../lib/blog-styles";

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
    images: [
      {
        url: `/og?title=${encodeURIComponent("Personligt brev och CV — mallar och tips")}`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function PersonligtBrevCVPage() {
  return (
    <BlogPostLayout
      metadata={metadata}
      datePublished="2026-04-21"
      category="Mallar"
      title={"Personligt brev och CV — kompletta mallar och tips (2026)"}
      breadcrumbLabel={"Personligt brev och CV"}
      updated={"april 2026"}
      readTime={"8 minuter"}
    >
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
                <a href="/verktyg" style={{ color: "#949EC9" }}>Testa gratis på textverket.se.</a>
              </p>
    </BlogPostLayout>
  );
}
