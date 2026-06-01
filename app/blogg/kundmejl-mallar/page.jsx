import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

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
  emailBlock: { background: "#fff", border: "1px solid #E2E8F0", borderRadius: 12, overflow: "hidden", margin: "28px 0", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" },
  emailHeader: { background: "#F7FAFC", padding: "12px 20px", borderBottom: "1px solid #E2E8F0", fontSize: 13, color: "#4A5568", lineHeight: 1.6 },
  emailBody: { padding: "24px 20px", fontSize: 15, lineHeight: 1.85, color: "#374151" },
  emailSignature: { borderTop: "1px solid #E2E8F0", marginTop: 16, paddingTop: 12, color: "#6B7280", fontSize: 14, lineHeight: 1.7 },
  tip: { background: "#FFFBEB", border: "1px solid #FDE68A", borderRadius: 10, padding: "14px 18px", fontSize: 14, color: "#92400E", lineHeight: 1.7, margin: "20px 0" },
  keysList: { margin: "0 0 22px 0", paddingLeft: 22, fontSize: 16, lineHeight: 2, color: "#374151" },
  ctaBox: { background: "linear-gradient(135deg, #111 0%, #1a2332 100%)", borderRadius: 16, padding: "32px 28px", margin: "48px 0 0", color: "#fff" },
  ctaTitle: { fontFamily: "'Instrument Serif', serif", fontSize: 24, fontWeight: 400, margin: "0 0 10px", color: "#fff" },
  ctaDesc: { fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 20px", lineHeight: 1.7 },
  ctaBtn: { display: "inline-block", background: "#fff", color: "#111", padding: "12px 28px", borderRadius: 100, fontSize: 15, fontWeight: 700, textDecoration: "none" },
  footerNote: { borderTop: "1px solid #E5E7EB", marginTop: 56, paddingTop: 24, fontSize: 14, color: "#9CA3AF", lineHeight: 1.7, fontStyle: "italic" },
  footer: { textAlign: "center", padding: "32px 28px", color: "#9CA3AF", fontSize: 13, borderTop: "1px solid #EDEDED" },
};

export default function KundmejlMallarPage() {
  return (
    <div style={S.page}>
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
          Att jaga betalningar är obehagligt men nödvändigt. Nyckeln är att vara tydlig utan att vara otrevlig. Du vill ha dina pengar OCH behålla kundrelationen.
        </p>

        <h3 style={S.h3}>Steg 1: Vänlig påminnelse (1 vecka efter förfallodatum)</h3>
        <div style={S.emailBlock}>
          <div style={S.emailHeader}>
            <strong>Ämne:</strong> Påminnelse — faktura #1234
          </div>
          <div style={S.emailBody}>
            <p>Hej Magnus!</p>
            <p>Jag hoppas att allt är bra hos er. Jag ville bara påminna om att faktura #1234 på 15 000 kr förföll till betalning den 1 april.</p>
            <p>Det kan förstås ha passerat i mängden — det händer oss alla. Du hittar fakturan bifogad för enkelhets skull.</p>
            <p>Om betalningen redan är skickad kan du bortse från detta mejl.</p>
            <div style={S.emailSignature}>
              Vänliga hälsningar,<br />[Ditt namn]
            </div>
          </div>
        </div>

        <h3 style={S.h3}>Steg 2: Bestämd påminnelse (2 veckor efter förfallodatum)</h3>
        <div style={S.emailBlock}>
          <div style={S.emailHeader}>
            <strong>Ämne:</strong> Andra påminnelse — faktura #1234, förfallen 1 april
          </div>
          <div style={S.emailBody}>
            <p>Hej Magnus!</p>
            <p>Jag återkommer angående faktura #1234 på 15 000 kr som förföll den 1 april. Jag har inte registrerat någon betalning ännu.</p>
            <p>Jag vill gärna lösa detta smidigt. Om det finns omständigheter som påverkar betalningen, hör gärna av dig så hittar vi en lösning.</p>
            <p>Vänligen se till att betalningen genomförs inom fem arbetsdagar.</p>
            <div style={S.emailSignature}>
              Med vänliga hälsningar,<br />[Ditt namn]
            </div>
          </div>
        </div>

        <h3 style={S.h3}>Steg 3: Sista påminnelse (4 veckor efter förfallodatum)</h3>
        <div style={S.emailBlock}>
          <div style={S.emailHeader}>
            <strong>Ämne:</strong> Sista påminnelse — faktura #1234, förfallen sedan 1 april
          </div>
          <div style={S.emailBody}>
            <p>Hej Magnus!</p>
            <p>Trots tidigare påminnelser har faktura #1234 på 15 000 kr fortfarande inte betalats. Fakturan förföll den 1 april.</p>
            <p>Jag ber dig vänligen att genomföra betalningen inom fem arbetsdagar. Om betalning inte inkommer kommer ärendet att överlämnas till inkasso, vilket innebär ytterligare kostnader.</p>
            <p>Kontakta mig gärna om du vill diskutera en betalningsplan.</p>
            <div style={S.emailSignature}>
              Med vänliga hälsningar,<br />[Ditt namn]
            </div>
          </div>
        </div>

        <h3 style={S.h3}>Nycklar</h3>
        <ul style={S.keysList}>
          <li>Trappa upp gradvis — aldrig hotfullt i första mejlet</li>
          <li>Var alltid saklig och erbjud alltid en utväg (betalningsplan)</li>
          <li>Dokumentera allt skriftligt</li>
        </ul>

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
          <a href="/verktyg/kundmejl" style={{ color: "#6B7280" }}>Testa Kundmejl-generatorn gratis.</a>
        </p>
      </article>

      <Footer />
    </div>
  );
}
