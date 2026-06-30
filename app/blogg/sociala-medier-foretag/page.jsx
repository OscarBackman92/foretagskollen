import BlogPostLayout from "../../components/BlogPostLayout";
import { blogStyles as S } from "../../lib/blog-styles";

export const metadata = {
  title: "Så skriver du inlägg för sociala medier som företagare (2026) — Textverket",
  description:
    "Guide med exempel för småföretagare: de fyra innehållstyperna, hook-kropp-CTA-formeln, plattformsguide och 10 idéer du kan använda idag.",
  keywords: "sociala medier guide företag, LinkedIn inlägg, Instagram företag, inlägg sociala medier, content marketing",
  alternates: {
    canonical: "/blogg/sociala-medier-foretag",
  },
  openGraph: {
    title: "Så skriver du inlägg för sociala medier som företagare — guide med exempel",
    description:
      "Enkel metod för att aldrig mer fastna framför en tom skärm. Gratis AI-verktyg på textverket.se.",
    url: "https://www.textverket.se/blogg/sociala-medier-foretag",
    siteName: "Textverket",
    locale: "sv_SE",
    type: "article",
    images: [
      {
        url: `/og?title=${encodeURIComponent("Inlägg för sociala medier som företagare")}`,
        width: 1200,
        height: 630,
      },
    ],
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
  "En fråga till dina följare om deras största utmaning.",
  "En rekommendation av ett verktyg eller en produkt du använder.",
  "Ett tack till en kund eller samarbetspartner.",
  "En vanlig missuppfattning i din bransch — och sanningen.",
  "Ditt bästa tips till någon som funderar på att starta eget.",
  "En sammanfattning av din vecka i tre meningar.",
];

export default function SocialaMedierForetagPage() {
  return (
    <BlogPostLayout
      metadata={metadata}
      datePublished="2026-04-20"
      category="Guide"
      title={"Så skriver du inlägg för sociala medier som företagare — guide med exempel"}
      breadcrumbLabel={"Sociala medier för företagare"}
      updated={"april 2026"}
      readTime={"8 minuter"}
    >
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
      
        <h2 style={S.h2}>Var hittar svenska kunder dig?</h2>
        <p style={S.p}>
          Välj en till två plattformar där din målgrupp faktiskt finns — inte där
          alla &quot;ska&quot; vara. I Sverige ser det ofta ut så här:
        </p>

        {[
          {
            name: "Facebook-grupper",
            desc: "Guld för lokala hantverkare, städfirmor och serviceföretag. Sök grupper som \"rekommendationer i [din stad]\" eller branschspecifika nätverk — där frågar folk om elektriker, målare och liknande varje vecka.",
          },
          {
            name: "Instagram",
            desc: "Bäst för visuella branscher: inredning, mat, mode, hantverk. Svenska kunder förväntar sig äkta bilder — inte stockfoton. Reels med före/efter fungerar särskilt bra för renovering och design.",
          },
          {
            name: "LinkedIn",
            desc: "B2B och konsulter i Sverige. Längre textinlägg på svenska med konkreta lärdomar slår generiska citat. Många affärer mellan småföretag startar här, inte via kall mejl.",
          },
          {
            name: "Google Företagsprofil",
            desc: "Inte sociala medier i klassisk mening, men ofta viktigare än Instagram för lokala sökningar. Uppdatera med färdiga projekt och be nöjda kunder lämna omdömen.",
          },
        ].map((p) => (
                <div key={p.name} style={S.platformCard}>
                  <p style={{ fontSize: 16, fontWeight: 700, color: "#EAEEFF", margin: "0 0 6px" }}>
                    {p.name}
                  </p>
                  <p style={{ fontSize: 15, color: "#C3CCE8", lineHeight: 1.7, margin: 0 }}>
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
                <a href="/verktyg/sociala-medier" style={S.ctaBtn}>
                  Öppna Sociala medier-generatorn →
                </a>
              </div>
      
              <p style={S.footerNote}>
                Textverket hjälper svenska småföretag att skriva professionella texter med AI.{" "}
                <a href="/verktyg/sociala-medier" style={{ color: "#949EC9" }}>
                  Testa Sociala medier-generatorn gratis.
                </a>
              </p>
    </BlogPostLayout>
  );
}
