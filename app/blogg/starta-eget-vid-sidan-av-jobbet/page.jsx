import BlogPostLayout from "../../components/BlogPostLayout";
import { blogStyles as S } from "../../lib/blog-styles";

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
    images: [
      {
        url: `/og?title=${encodeURIComponent("Starta eget vid sidan av jobbet")}`,
        width: 1200,
        height: 630,
      },
    ],
  },
};



const STEPS = [
  {
    num: "1",
    title: "Hobbyverksamhet eller enskild firma?",
    content: (
      <>
        <p style={S.p}>
          Gränsen handlar inte om en viss summa pengar — Skatteverket bedömer i stället om
          verksamheten drivs självständigt, varaktigt och med vinstsyfte. Uppfyller du alla
          tre är det näringsverksamhet, annars hobbyverksamhet.
        </p>
        <p style={S.p}>
          <strong>Hobbyverksamhet</strong> passar när du gör något i liten skala utan
          tydligt vinstsyfte. Du behöver inte registrera företag eller ha F-skatt, utan
          deklarerar överskottet som inkomst av tjänst. Kostnader får dras av mot
          hobbyinkomsterna (men inte mot din lön), och blir det underskott får det sparas
          och kvittas mot samma hobby kommande år.
        </p>
        <p style={S.p}>
          <strong>Enskild firma</strong> passar när du säljer regelbundet, vill framstå som
          professionell eller vill kunna dra av kostnader fullt ut. Att registrera sig för
          F-skatt och moms hos Skatteverket via verksamt.se är gratis. Vill du dessutom
          skydda företagsnamnet registrerar du det hos Bolagsverket, vilket kostar drygt
          tusenlappen — men det är frivilligt för enskild firma. Omsätter du under
          120 000 kronor per år kan du dessutom välja att vara momsbefriad.
        </p>
        <div style={S.tip}>
          <strong>Råd:</strong> Sälj något till en handfull kunder först. När det börjar
          rulla in regelbundna intäkter ansöker du om F-skatt — det tar en kvart på
          verksamt.se och du kan göra det när som helst. Är du osäker på var gränsen går i
          just ditt fall, kolla Skatteverkets vägledning om hobby kontra näringsverksamhet.
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
    <BlogPostLayout
      metadata={metadata}
      datePublished="2026-04-20"
      category="Guide"
      title={"Starta eget vid sidan av jobbet — komplett guide för dig i Sverige (2026)"}
      breadcrumbLabel={"Starta eget vid sidan av jobbet"}
      updated={"april 2026"}
      readTime={"9 minuter"}
    >
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
                Ja, i de allra flesta fall. I Sverige har du som huvudregel rätt att driva ett
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
                <a href="/verktyg" style={{ color: "#949EC9" }}>
                  Testa gratis på textverket.se.
                </a>
              </p>
    </BlogPostLayout>
  );
}
