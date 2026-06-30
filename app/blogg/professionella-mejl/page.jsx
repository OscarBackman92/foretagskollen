import BlogPostLayout from "../../components/BlogPostLayout";
import { blogStyles as S } from "../../lib/blog-styles";

export const metadata = {
  title: "Professionella mejl — 7 regler som gör ditt företag trovärdigt (2026)",
  description:
    "7 konkreta regler för professionella affärsmejl. Lär dig skriva ämnesrader som öppnas, hålla mejl korta och avsluta med rätt call to action.",
  keywords: "professionella mejl, affärsmejl tips, skriva mejl företag, mejletik Sverige, e-postkommunikation",
  alternates: {
    canonical: "/blogg/professionella-mejl",
  },
  openGraph: {
    title: "Professionella mejl — 7 regler som gör ditt företag trovärdigt",
    description:
      "7 regler för bättre affärsmejl. Gratis AI-verktyg på textverket.se.",
    url: "https://www.textverket.se/blogg/professionella-mejl",
    siteName: "Textverket",
    locale: "sv_SE",
    type: "article",
    images: [
      {
        url: `/og?title=${encodeURIComponent("Professionella mejl — 7 regler")}`,
        width: 1200,
        height: 630,
      },
    ],
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
    body: "Mejl skickade klockan 22 på en söndagskväll signalerar antingen desperation eller dålig balans mellan jobb och fritid. Inget av det bygger förtroende. Skicka affärsmejl under kontorstid: tisdag till torsdag mellan 9 och 16 har generellt högst öppningsfrekvens. Undvik måndagsmorgnar (folk drunknar i mejl) och fredagseftermiddagar (folk har redan stängt av mentalt). De flesta mejlklienter har funktionen \"schemalägg skicka\" — använd den om du skriver mejl på kvällen.",
  },
];

export default function ProfessionellaMejlPage() {
  return (
    <BlogPostLayout
      metadata={metadata}
      datePublished="2026-04-20"
      category="Guide"
      title={"Professionella mejl — 7 regler som gör ditt företag trovärdigt"}
      breadcrumbLabel={"Professionella mejl"}
      updated={"april 2026"}
      readTime={"7 minuter"}
    >
      <p style={S.p}>
                Dina mejl är ditt företags ansikte utåt. Varje mejl du skickar — till kunder,
                leverantörer eller samarbetspartners — bygger eller bryter förtroende.
              </p>
              <p style={S.p}>
                Den här guiden handlar om det som skiljer svensk affärskommunikation från
                generiska mejletikett-tips: du-tilltal mot företag, när ni passar bättre mot
                myndigheter, och hur kundtjänst-svenska ska låta — rak men inte stel.
              </p>

              <h2 style={S.h2}>Svensk mejlton: du, ni och myndigheter</h2>
              <p style={S.p}>
                Till privatpersoner och de flesta småföretag skriver du med du. Till större
                organisationer, kommuner och formella upphandlingar är ni ofta lämpligare.
                Mot Skatteverket eller Bolagsverket: saklig ton, inga utropstecken, tydligt
                ärende i ämnesraden. Samma regler om korthet gäller — men formaliteten
                höjs genom struktur, inte genom krångliga ord.
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
                <a href="/verktyg/fritext" style={S.ctaBtn}>
                  Öppna Fritext-generatorn →
                </a>
              </div>

              <p style={S.footerNote}>
                Textverket hjälper svenska småföretag att skriva professionella texter med AI.{" "}
                <a href="/verktyg/fritext" style={{ color: "#949EC9" }}>
                  Testa Fritext-generatorn gratis.
                </a>
              </p>
    </BlogPostLayout>
  );
}
