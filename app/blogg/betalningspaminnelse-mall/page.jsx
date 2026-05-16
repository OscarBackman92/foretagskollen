import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Betalningspåminnelse — mall och tips för småföretag (2026) — Textverket",
  description:
    "Färdiga mallar för betalningspåminnelser i tre steg: vänlig, bestämd och sista varning. Plus regler och tips för att förebygga sena betalningar.",
  keywords: "betalningspåminnelse mall, påminnelse faktura, betalningspåminnelse text, faktura påminnelse mall",
  alternates: {
    canonical: "/blogg/betalningspaminnelse-mall",
  },
  openGraph: {
    title: "Betalningspåminnelse — mall och tips för småföretag (2026)",
    description:
      "3 färdiga mallar för betalningspåminnelser. Testa gratis på textverket.se.",
    url: "https://textverket.se/blogg/betalningspaminnelse-mall",
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
  stepBadge: { display: "inline-flex", alignItems: "center", gap: 8, background: "#F3F4F6", border: "1px solid #E5E7EB", borderRadius: 100, padding: "4px 14px", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 16 },
  emailBlock: { background: "#fff", border: "1px solid #E2E8F0", borderRadius: 12, overflow: "hidden", margin: "20px 0", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" },
  emailHeader: { background: "#F7FAFC", padding: "12px 20px", borderBottom: "1px solid #E2E8F0", fontSize: 13, color: "#4A5568", lineHeight: 1.6 },
  emailBody: { padding: "24px 20px", fontSize: 15, lineHeight: 1.85, color: "#374151" },
  emailPayment: { background: "#F8FAFC", borderRadius: 8, padding: "12px 16px", margin: "16px 0", fontSize: 14, lineHeight: 1.8, color: "#374151" },
  emailSignature: { borderTop: "1px solid #E2E8F0", marginTop: 16, paddingTop: 12, color: "#6B7280", fontSize: 14, lineHeight: 1.7 },
  tip: { background: "#FFFBEB", border: "1px solid #FDE68A", borderRadius: 10, padding: "14px 18px", fontSize: 14, color: "#92400E", lineHeight: 1.7, margin: "20px 0" },
  infoBox: { background: "#EEF2FF", border: "1px solid #C7D2FE", borderRadius: 10, padding: "14px 18px", fontSize: 14, color: "#3730A3", lineHeight: 1.7, margin: "20px 0" },
  preventList: { margin: "0 0 22px 0", padding: 0, listStyle: "none" },
  preventItem: { display: "flex", gap: 12, alignItems: "flex-start", padding: "12px 0", borderBottom: "1px solid #F3F4F6", fontSize: 16, lineHeight: 1.7, color: "#374151" },
  preventIcon: { fontSize: 18, flexShrink: 0, marginTop: 2 },
  ctaBox: { background: "linear-gradient(135deg, #111 0%, #1a2332 100%)", borderRadius: 16, padding: "32px 28px", margin: "48px 0 0", color: "#fff" },
  ctaTitle: { fontFamily: "'Instrument Serif', serif", fontSize: 24, fontWeight: 400, margin: "0 0 10px", color: "#fff" },
  ctaDesc: { fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 20px", lineHeight: 1.7 },
  ctaBtn: { display: "inline-block", background: "#fff", color: "#111", padding: "12px 28px", borderRadius: 100, fontSize: 15, fontWeight: 700, textDecoration: "none" },
  footerNote: { borderTop: "1px solid #E5E7EB", marginTop: 56, paddingTop: 24, fontSize: 14, color: "#9CA3AF", lineHeight: 1.7, fontStyle: "italic" },
  footer: { textAlign: "center", padding: "32px 28px", color: "#9CA3AF", fontSize: 13, borderTop: "1px solid #EDEDED" },
};

export default function BetalningspaminnelseMallPage() {
  return (
    <div style={S.page}>
      <NavBar />

      <article style={S.article}>
        <div style={S.breadcrumb}>
          <a href="/blogg" style={S.breadcrumbLink}>Blogg</a>
          <span>›</span>
          <span>Betalningspåminnelse</span>
        </div>

        <div style={S.categoryPill}>Mallar</div>
        <h1 style={S.h1}>Betalningspåminnelse — mall och tips för småföretag (2026)</h1>

        <div style={S.meta}>
          <span>April 2026</span>
          <span style={S.metaDot}>·</span>
          <span>6 min läsning</span>
          <span style={S.metaDot}>·</span>
          <span>Textverket</span>
        </div>

        <hr style={S.divider} />

        <p style={S.p}>
          Sena betalningar är vardag för svenska småföretag. Enligt en undersökning från Visma betalar nästan var tredje faktura för sent. Som småföretagare har du varken tid eller resurser att jaga betalningar — men du har inte råd att låta bli heller.
        </p>
        <p style={S.p}>
          I den här guiden får du färdiga mallar för betalningspåminnelser i tre steg: vänlig, bestämd och sista varning. Plus tips på hur du minimerar sena betalningar från start.
        </p>

        <h2 style={S.h2}>Regler att känna till</h2>
        <div style={S.infoBox}>
          <p style={{ margin: "0 0 10px", fontWeight: 600 }}>Dina rättigheter som borgenär:</p>
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.85 }}>
            <li>Du har rätt att ta ut en <strong>påminnelseavgift på 60 kr</strong> (regleras i lag 1981:739)</li>
            <li>Bara en påminnelseavgift per faktura, och inte förrän fakturan förfallit</li>
            <li><strong>Dröjsmålsränta</strong> gäller från förfallodagen — referensräntan + 8 procentenheter (ca 10–11% per år under 2026)</li>
            <li>Du måste inte skicka påminnelse innan inkasso, men det är praxis</li>
          </ul>
        </div>

        <h2 style={S.h2}>Steg 1: Vänlig påminnelse</h2>
        <div style={S.stepBadge}>
          <span>⏱</span> 1 vecka efter förfallodatum
        </div>
        <p style={S.p}>
          Det allra vanligaste skälet till att en faktura inte betalas i tid? Den glömdes bort. Punkt. Därför ska din första påminnelse vara vänlig och informativ — inte hotfull.
        </p>

        <div style={S.emailBlock}>
          <div style={S.emailHeader}>
            <strong>Ämne:</strong> Vänlig påminnelse — faktura [NUMMER]
          </div>
          <div style={S.emailBody}>
            <p>Hej [NAMN]!</p>
            <p>Jag hoppas att allt är bra hos er. Jag ville vänligt påminna om att faktura [NUMMER] på [BELOPP] kr förföll till betalning den [DATUM].</p>
            <p>Det kan förstås ha passerat i mängden och kanske är betalningen redan på väg — i så fall kan du bortse från detta mejl.</p>
            <p>Fakturan finns bifogad för enkelhets skull.</p>
            <div style={S.emailPayment}>
              <strong>Betalningsuppgifter:</strong><br />
              Bankgiro: [NUMMER]<br />
              OCR/referens: [NUMMER]<br />
              Belopp: [BELOPP] kr<br />
              Förfallodatum: [DATUM]
            </div>
            <p>Hör gärna av dig om du har några frågor.</p>
            <div style={S.emailSignature}>
              Vänliga hälsningar,<br />[DITT NAMN]<br />[FÖRETAG] · [TELEFON]
            </div>
          </div>
        </div>

        <div style={S.tip}>
          <strong>Tips för steg 1:</strong> Bifoga alltid fakturan igen — kunden ska aldrig behöva leta. Inkludera alla betalningsuppgifter direkt i mejlet. Anta god vilja — de flesta betalar sent av misstag, inte illvilja.
        </div>

        <h2 style={S.h2}>Steg 2: Bestämd påminnelse</h2>
        <div style={S.stepBadge}>
          <span>⏱</span> 2–3 veckor efter förfallodatum
        </div>
        <p style={S.p}>
          Om första påminnelsen inte gett resultat höjer du tonen. Fortfarande professionell, men nu tydligare med att betalning förväntas.
        </p>

        <div style={S.emailBlock}>
          <div style={S.emailHeader}>
            <strong>Ämne:</strong> Andra påminnelse — faktura [NUMMER], förfallen [DATUM]
          </div>
          <div style={S.emailBody}>
            <p>Hej [NAMN]!</p>
            <p>Jag återkommer gällande faktura [NUMMER] på [BELOPP] kr som förföll den [DATUM]. Trots en tidigare påminnelse har betalningen inte registrerats.</p>
            <p>Om det finns omständigheter som försvårar betalningen vill jag gärna diskutera en lösning. Det viktigaste är att vi har en dialog.</p>
            <p>Jag ber dig vänligen att genomföra betalningen inom fem arbetsdagar, det vill säga senast [DATUM].</p>
            <p>En påminnelseavgift på 60 kr har lagts till enligt lag (1981:739).</p>
            <div style={S.emailPayment}>
              <strong>Uppdaterade betalningsuppgifter:</strong><br />
              Bankgiro: [NUMMER]<br />
              OCR/referens: [NUMMER]<br />
              Belopp inkl. påminnelseavgift: [BELOPP + 60] kr<br />
              Nytt sista betalningsdatum: [DATUM]
            </div>
            <div style={S.emailSignature}>
              Med vänliga hälsningar,<br />[DITT NAMN]<br />[FÖRETAG] · [TELEFON]
            </div>
          </div>
        </div>

        <div style={S.tip}>
          <strong>Tips för steg 2:</strong> Erbjud alltid en dialog — en delbetalningsplan kan rädda både pengarna och kundrelationen. Var tydlig med nytt sista datum. Lägg till påminnelseavgiften — du har rätt till den och det signalerar att du menar allvar.
        </div>

        <h2 style={S.h2}>Steg 3: Sista påminnelse</h2>
        <div style={S.stepBadge}>
          <span>⏱</span> 4 veckor efter förfallodatum
        </div>
        <p style={S.p}>
          Nu är det sista chansen innan inkasso. Tonen är saklig och rak. Inga utropstecken, inga hot — bara tydlig information om konsekvenserna.
        </p>

        <div style={S.emailBlock}>
          <div style={S.emailHeader}>
            <strong>Ämne:</strong> Sista påminnelse innan inkasso — faktura [NUMMER]
          </div>
          <div style={S.emailBody}>
            <p>Hej [NAMN]!</p>
            <p>Trots två tidigare påminnelser har faktura [NUMMER] på [BELOPP] kr, som förföll den [DATUM], fortfarande inte betalats.</p>
            <p>Jag ger er härmed en sista möjlighet att reglera skulden. Om betalning inte inkommer senast [DATUM, 7 dagar framåt] kommer ärendet att överlämnas till inkasso. Det innebär ytterligare kostnader för er i form av inkassoavgifter och eventuell dröjsmålsränta.</p>
            <p>Om ni vill diskutera en betalningsplan eller om det finns omständigheter jag bör känna till, kontakta mig senast [DATUM].</p>
            <div style={S.emailPayment}>
              <strong>Betalningsuppgifter:</strong><br />
              Bankgiro: [NUMMER]<br />
              OCR/referens: [NUMMER]<br />
              Totalt att betala: [BELOPP + avgifter] kr<br />
              Sista betalningsdatum: [DATUM]
            </div>
            <div style={S.emailSignature}>
              Med vänliga hälsningar,<br />[DITT NAMN]<br />[FÖRETAG] · [TELEFON]
            </div>
          </div>
        </div>

        <div style={S.tip}>
          <strong>Tips för steg 3:</strong> Ange ett exakt datum, inte "inom X dagar". Nämn inkasso som konsekvens — inte som hot. Erbjud fortfarande dialog. Dokumentera allt — spara alla mejl som bevis ifall det går till tvist.
        </div>

        <h2 style={S.h2}>Förebygg sena betalningar</h2>
        <p style={S.p}>Det bästa sättet att hantera sena betalningar är att minimera dem från start.</p>
        <ul style={S.preventList}>
          {[
            ["📤", "Skicka fakturan direkt", "Ju snabbare du fakturerar, desto snabbare får du betalt. Vänta aldrig till slutet av månaden om jobbet är klart den 5:e."],
            ["⏰", "Korta betalningsvillkor", "30 dagar är standard men 14 dagar fungerar minst lika bra för de flesta tjänster. Ju kortare betaltid, desto färre sena betalningar."],
            ["💳", "Gör det enkelt att betala", "Erbjud Swish, bankgiro och helst direktlänk till betalning. Ju fler klick som krävs, desto större risk att kunden skjuter upp det."],
            ["🤖", "Skicka automatiska påminnelser", "De flesta fakturasystem som Fortnox, Visma och Bokio har inbyggda påminnelsefunktioner. Sätt upp dem en gång, sen sköter de sig själva."],
            ["💰", "Kräv förskottsbetalning på nya kunder", "Speciellt för större projekt — en deposition på 30–50 procent vid orderbekräftelse minskar risken dramatiskt."],
          ].map(([icon, title, desc]) => (
            <li key={title} style={S.preventItem}>
              <span style={S.preventIcon}>{icon}</span>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 2 }}>{title}</div>
                <div style={{ fontSize: 15, color: "#6B7280" }}>{desc}</div>
              </div>
            </li>
          ))}
        </ul>

        <h2 style={S.h2}>Telefon eller mejl?</h2>
        <p style={S.p}>
          Mejl fungerar bäst som första och andra påminnelse. Det ger kunden tid att hantera det utan press, och du har skriftlig dokumentation.
        </p>
        <p style={S.p}>
          Ett telefonsamtal kan vara effektivt som komplement till tredje påminnelsen — det är svårare att ignorera ett samtal. Var saklig, vänlig men bestämd. Skriv ner vad ni kommer överens om och skicka en bekräftelse via mejl efteråt.
        </p>

        <div style={S.ctaBox}>
          <p style={S.ctaTitle}>Generera en skräddarsydd påminnelse på sekunder</p>
          <p style={S.ctaDesc}>
            Beskriv situationen i Textverket, så skapar AI:n rätt ton och innehåll — anpassat efter om det är steg ett, två eller tre. Helt gratis.
          </p>
          <a href="/verktyg" style={S.ctaBtn}>Testa gratis →</a>
        </div>

        <p style={S.footerNote}>
          Textverket hjälper svenska småföretag att skriva professionella texter med AI. Testa gratis på textverket.se.
        </p>
      </article>

      <Footer />
    </div>
  );
}
