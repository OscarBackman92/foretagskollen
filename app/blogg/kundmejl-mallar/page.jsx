import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";
import { blogPostJsonLd } from "../../lib/structured-data";
import AdUnit from "../../components/AdUnit";

export const metadata = {
  title: "5 mallar för kundmejl som faktiskt fungerar (2026) — Textverket",
  description:
    "Färdiga mallar för uppföljningsmejl, reklamationssvar, tackmejl, betalningspåminnelser och återaktivering av vilande kunder.",
  keywords: "kundmejl mallar, uppföljningsmejl mall, reklamationssvar mall, tackmejl mall, kundkommunikation",
  alternates: {
    canonical: "/blogg/kundmejl-mallar",
  },
  openGraph: {
    title: "5 mallar för kundmejl som faktiskt fungerar (2026)",
    description:
      "Färdiga kundmejl-mallar för svenska småföretag. Testa gratis på textverket.se.",
    url: "https://www.textverket.se/blogg/kundmejl-mallar",
    siteName: "Textverket",
    locale: "sv_SE",
    type: "article",
    images: [
      {
        url: `/og?title=${encodeURIComponent("5 mallar för kundmejl som faktiskt fungerar")}`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

const S = {
  page: { minHeight: "100vh", background: "transparent", fontFamily: "'Inter', sans-serif", color: "#EAEEFF" },
  navWrap: { borderBottom: "1px solid rgba(125, 140, 255, 0.16)" },
  nav: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 28px", maxWidth: 960, margin: "0 auto" },
  logo: { display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: "#EAEEFF" },
  navLinks: { display: "flex", alignItems: "center", gap: 24 },
  navLink: { fontSize: 14, fontWeight: 500, color: "#A7B1D6", textDecoration: "none" },
  navCta: { background: "linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)", color: "#fff", padding: "9px 20px", borderRadius: 100, fontSize: 14, fontWeight: 600, textDecoration: "none" },
  article: { maxWidth: 720, margin: "0 auto", padding: "52px 28px 80px" },
  breadcrumb: { fontSize: 13, color: "#7E88B5", marginBottom: 28, display: "flex", gap: 6, alignItems: "center" },
  breadcrumbLink: { color: "#7E88B5", textDecoration: "none" },
  categoryPill: { display: "inline-block", background: "rgba(129, 140, 248, 0.13)", color: "#A5B4FC", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100, marginBottom: 20, letterSpacing: 0.3, textTransform: "uppercase" },
  h1: { fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(30px, 5vw, 44px)", fontWeight: 700, lineHeight: 1.2, margin: "0 0 20px", color: "#EAEEFF" },
  meta: { fontSize: 14, color: "#7E88B5", marginBottom: 36, display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" },
  metaDot: { color: "rgba(125, 140, 255, 0.25)" },
  divider: { border: "none", borderTop: "1px solid rgba(125, 140, 255, 0.18)", margin: "0 0 40px" },
  p: { fontSize: 17, lineHeight: 1.85, color: "#C3CCE8", margin: "0 0 22px" },
  h2: { fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, color: "#EAEEFF", margin: "56px 0 20px", lineHeight: 1.3 },
  h3: { fontSize: 18, fontWeight: 700, color: "#EAEEFF", margin: "36px 0 14px", lineHeight: 1.4 },
  emailBlock: { background: "rgba(13, 17, 36, 0.66)", border: "1px solid rgba(125, 140, 255, 0.18)", borderRadius: 12, overflow: "hidden", margin: "28px 0", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" },
  emailHeader: { background: "rgba(255, 255, 255, 0.04)", padding: "12px 20px", borderBottom: "1px solid rgba(125, 140, 255, 0.18)", fontSize: 13, color: "#B6C0DE", lineHeight: 1.6 },
  emailBody: { padding: "24px 20px", fontSize: 15, lineHeight: 1.85, color: "#C3CCE8" },
  emailSignature: { borderTop: "1px solid rgba(125, 140, 255, 0.18)", marginTop: 16, paddingTop: 12, color: "#949EC9", fontSize: 14, lineHeight: 1.7 },
  tip: { background: "rgba(251, 191, 36, 0.09)", border: "1px solid rgba(251, 191, 36, 0.32)", borderRadius: 10, padding: "14px 18px", fontSize: 14, color: "#FCD34D", lineHeight: 1.7, margin: "20px 0" },
  keysList: { margin: "0 0 22px 0", paddingLeft: 22, fontSize: 16, lineHeight: 2, color: "#C3CCE8" },
  ctaBox: { background: "linear-gradient(135deg, rgba(49, 46, 129, 0.55) 0%, rgba(8, 11, 28, 0.9) 100%)", borderRadius: 16, padding: "32px 28px", margin: "48px 0 0", color: "#fff" },
  ctaTitle: { fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 700, margin: "0 0 10px", color: "#fff" },
  ctaDesc: { fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 20px", lineHeight: 1.7 },
  ctaBtn: { display: "inline-block", background: "rgba(13, 17, 36, 0.66)", color: "#EAEEFF", padding: "12px 28px", borderRadius: 100, fontSize: 15, fontWeight: 700, textDecoration: "none" },
  footerNote: { borderTop: "1px solid rgba(125, 140, 255, 0.18)", marginTop: 56, paddingTop: 24, fontSize: 14, color: "#7E88B5", lineHeight: 1.7, fontStyle: "italic" },
  footer: { textAlign: "center", padding: "32px 28px", color: "#7E88B5", fontSize: 13, borderTop: "1px solid rgba(125, 140, 255, 0.16)" },
};

export default function KundmejlMallarPage() {
  return (
    <div style={S.page}>
      <JsonLd data={blogPostJsonLd(metadata, "2026-04-16")} />
      <NavBar />

      <article style={S.article}>
        <div style={S.breadcrumb}>
          <a href="/blogg" style={S.breadcrumbLink}>Blogg</a>
          <span>›</span>
          <span>Kundmejl</span>
        </div>

        <div style={S.categoryPill}>Mallar</div>
        <h1 style={S.h1}>5 mallar för kundmejl som faktiskt fungerar (+ gratis generator)</h1>

        <div style={S.meta}>
          <span>April 2026</span>
          <span style={S.metaDot}>·</span>
          <span>7 min läsning</span>
          <span style={S.metaDot}>·</span>
          <span>Textverket</span>
        </div>

        <hr style={S.divider} />

        <p style={S.p}>
          Kundmejl är livsnerven i varje litet företag. Ändå är det något vi sällan tänker på — vi slänger ihop ett snabbt svar och hoppas på det bästa. Problemet? Dåliga kundmejl kostar dig pengar. Bra kundmejl bygger relationer, löser problem snabbare och gör att kunder kommer tillbaka.
        </p>
        <p style={S.p}>
          Här får du fem färdiga mallar för de vanligaste situationerna, med konkreta exempel du kan anpassa direkt.
        </p>

        <div style={S.tip}>
          <strong>Varför mallar?</strong> Mallar betyder inte att dina mejl blir opersonliga. Tvärtom — en bra mall ger dig en struktur som säkerställer att du inte glömmer något viktigt, samtidigt som du frigör tid att anpassa det personliga. Tänk på mallen som ett skelett. Du fyller på med kött och blod.
        </div>

        <h2 style={S.h2}>Mall 1: Uppföljningsmejl efter möte eller samtal</h2>
        <p style={S.p}>
          Det här mejlet skickar du inom 24 timmar efter ett möte eller telefonsamtal med en potentiell eller befintlig kund. Syftet är att bekräfta vad ni diskuterade och driva processen framåt.
        </p>

        <div style={S.emailBlock}>
          <div style={S.emailHeader}>
            <strong>Ämne:</strong> Bra samtal idag — sammanfattning och nästa steg
          </div>
          <div style={S.emailBody}>
            <p>Hej Karin!</p>
            <p>Tack för ett givande samtal idag. Det var intressant att höra om era planer för det kommande kvartalet.</p>
            <p>Här är en snabb sammanfattning av det vi diskuterade:</p>
            <ul style={{ margin: "12px 0", paddingLeft: 20, lineHeight: 1.85 }}>
              <li>Ni behöver en uppdaterad webbplats innan mässan i september</li>
              <li>Fokus på mobilanpassning och snabbare laddtider</li>
              <li>Budget kring 40 000–50 000 kr</li>
            </ul>
            <p>Som överenskommet skickar jag över ett förslag senast på fredag. Har du några kompletterande tankar innan dess är det bara att höra av dig.</p>
            <p>Tack igen och vi hörs snart!</p>
            <div style={S.emailSignature}>
              Vänliga hälsningar,<br />[Ditt namn]
            </div>
          </div>
        </div>

        <h3 style={S.h3}>Nycklar</h3>
        <ul style={S.keysList}>
          <li>Var specifik om vad ni diskuterade</li>
          <li>Upprepa kundens egna ord om möjligt — det visar att du lyssnade</li>
          <li>Avsluta alltid med ett konkret nästa steg och en tidsram</li>
        </ul>

        <h2 style={S.h2}>Mall 2: Svar på reklamation eller klagomål</h2>
        <p style={S.p}>
          Det här är mejlet ingen vill behöva skriva, men alla behöver. En kund som klagar och får ett bra svar kan bli din mest lojala kund. En kund som ignoreras berättar för tio andra.
        </p>

        <div style={S.emailBlock}>
          <div style={S.emailHeader}>
            <strong>Ämne:</strong> Angående din upplevelse — vi vill rätta till det
          </div>
          <div style={S.emailBody}>
            <p>Hej Thomas!</p>
            <p>Tack för att du hör av dig och berättar om din upplevelse. Jag förstår att det är frustrerande och jag vill be om ursäkt för besväret.</p>
            <p>Det du beskriver ska inte hända och jag tar det på stort allvar. Så här gör vi för att lösa det:</p>
            <p>Vi skickar ut en ersättningsprodukt redan imorgon med expressleverans, utan extra kostnad. Du behöver inte returnera den felaktiga produkten.</p>
            <p>Jag vill också säkerställa att det inte händer igen. Skulle det vara okej om jag ringer dig i veckan för att höra att allt blivit bra?</p>
            <p>Tack för ditt tålamod.</p>
            <div style={S.emailSignature}>
              Med vänliga hälsningar,<br />[Ditt namn]
            </div>
          </div>
        </div>

        <h3 style={S.h3}>Nycklar</h3>
        <ul style={S.keysList}>
          <li>Erkänn problemet direkt — försök aldrig bortförklara</li>
          <li>Presentera en konkret lösning, inte bara löften</li>
          <li>Följ upp personligen — det tar en missnöjd kund och gör dem till en ambassadör</li>
        </ul>

        <h2 style={S.h2}>Mall 3: Tackmejl efter avslutad affär</h2>
        <p style={S.p}>
          Det här mejlet glömmer de flesta. Du har fått betalt, projektet är klart — men ett tackmejl stärker relationen och öppnar dörren för framtida affärer och rekommendationer.
        </p>

        <div style={S.emailBlock}>
          <div style={S.emailHeader}>
            <strong>Ämne:</strong> Tack för samarbetet!
          </div>
          <div style={S.emailBody}>
            <p>Hej Anna!</p>
            <p>Nu när projektet är avslutat ville jag ta tillfället att tacka för ett riktigt bra samarbete. Det har varit kul att jobba med er och jag är nöjd med slutresultatet — hoppas ni är det också!</p>
            <p>Några saker att ha i åtanke framöver:</p>
            <ul style={{ margin: "12px 0", paddingLeft: 20, lineHeight: 1.85 }}>
              <li>Support ingår i 30 dagar om ni stöter på något</li>
              <li>Jag finns tillgänglig för mindre justeringar vid behov</li>
              <li>Om ni i framtiden behöver utöka funktionaliteten är det bara att höra av sig</li>
            </ul>
            <p>Om ni är nöjda med vårt samarbete och känner att ni kan rekommendera oss till en kollega eller affärsbekant uppskattar jag det enormt.</p>
            <p>Tack igen och lycka till!</p>
            <div style={S.emailSignature}>
              Varma hälsningar,<br />[Ditt namn]
            </div>
          </div>
        </div>

        <h3 style={S.h3}>Nycklar</h3>
        <ul style={S.keysList}>
          <li>Var genuin — inte säljig</li>
          <li>Påminn om att du finns tillgänglig</li>
          <li>Be om rekommendation, men gör det mjukt — tajmingen är perfekt direkt efter ett lyckat projekt</li>
        </ul>

        <h2 style={S.h2}>Mall 4: Påminnelse om obetald faktura</h2>
        <p style={S.p}>
          Att jaga betalningar är obehagligt men nödvändigt. Nyckeln är att trappa upp i tre steg — vänlig påminnelse först, bestämd därefter, sista varning innan inkasso — och att alltid vara saklig utan att vara otrevlig. Du vill ha dina pengar OCH behålla kundrelationen.
        </p>
        <p style={S.p}>
          Betalningspåminnelser är ett ämne för sig: det finns regler kring påminnelseavgift, dröjsmålsränta och inkasso som är värda att ha koll på. Vi har därför samlat färdiga mallar för alla tre stegen — plus det du behöver veta om de svenska reglerna — i en egen guide.
        </p>
        <div style={S.tip}>
          <strong>Läs vidare:</strong>{" "}
          <a href="/blogg/betalningspaminnelse-mall" style={{ color: "#FCD34D", textDecoration: "underline" }}>
            Betalningspåminnelse — mall och tips för småföretag
          </a>{" "}
          med tre färdiga mallar (vänlig, bestämd, sista varning) och de svenska reglerna förklarade.
        </div>

        <h2 style={S.h2}>Mall 5: Uppföljningsmejl till vilande kund</h2>
        <p style={S.p}>
          En kund som inte hört av sig på ett tag är inte nödvändigtvis en förlorad kund. Ett genomtänkt mejl kan återaktivera relationen.
        </p>

        <div style={S.emailBlock}>
          <div style={S.emailHeader}>
            <strong>Ämne:</strong> Länge sedan — hur går det för er?
          </div>
          <div style={S.emailBody}>
            <p>Hej Sara!</p>
            <p>Det var ett tag sedan vi hördes och jag tänkte kolla läget. Hur har det gått med webbplatsen vi levererade i höstas? Fungerar allt som det ska?</p>
            <p>Sedan vi jobbade tillsammans har vi utvecklat några nya tjänster som jag tror kan vara intressanta för er, bland annat sökmotoroptimering och löpande innehållsproduktion.</p>
            <p>Ingen press alls — jag ville bara höra av mig och påminna om att vi finns här om ni behöver något.</p>
            <p>Ha en fin vår!</p>
            <div style={S.emailSignature}>
              Vänliga hälsningar,<br />[Ditt namn]
            </div>
          </div>
        </div>

        <h3 style={S.h3}>Nycklar</h3>
        <ul style={S.keysList}>
          <li>Var personlig — referera till ert tidigare samarbete</li>
          <li>Tillför värde genom att nämna något nytt</li>
          <li>Var lågmäld, inte påträngande — det värsta som kan hända är att de inte svarar</li>
        </ul>

        <h2 style={S.h2}>Spara tid med AI</h2>
        <p style={S.p}>
          Att skriva bra kundmejl kräver eftertanke, men det behöver inte ta lång tid. Med Textverket kan du generera professionella kundmejl på svenska på några sekunder. Beskriv situationen och tonen du vill ha, så sköter AI:n resten.
        </p>

        <div style={S.ctaBox}>
          <p style={S.ctaTitle}>Skriv bättre kundmejl på sekunder</p>
          <p style={S.ctaDesc}>
            Textverket genererar professionella mejl på svenska — anpassade för din situation och ton. Helt gratis, inga konton.
          </p>
          <a href="/verktyg/kundmejl" style={S.ctaBtn}>Öppna Kundmejl-generatorn →</a>
        </div>

        <p style={S.footerNote}>
          Textverket hjälper svenska småföretag att skriva professionella texter med AI.{" "}
          <a href="/verktyg/kundmejl" style={{ color: "#949EC9" }}>Testa Kundmejl-generatorn gratis.</a>
        </p>
      </article>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 28px 40px" }}>
        <AdUnit slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG} />
      </div>

      <Footer />
    </div>
  );
}
