import BlogPostLayout from "../../components/BlogPostLayout";
import { blogStyles as S } from "../../lib/blog-styles";

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
    url: "https://www.textverket.se/blogg/betalningspaminnelse-mall",
    siteName: "Textverket",
    locale: "sv_SE",
    type: "article",
    images: [
      {
        url: `/og?title=${encodeURIComponent("Betalningspåminnelse — mall och tips för småföretag")}`,
        width: 1200,
        height: 630,
      },
    ],
  },
};


export default function BetalningspaminnelseMallPage() {
  return (
    <BlogPostLayout
      metadata={metadata}
      datePublished="2026-04-16"
      category="Mallar"
      title={"Betalningspåminnelse — mall och tips för småföretag (2026)"}
      breadcrumbLabel={"Betalningspåminnelse"}
      showHome={false}
      published={"April 2026"}
      readTime={"6 min läsning"}
    >
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
                  <li>Du har rätt att ta ut en <strong>påminnelseavgift på 60 kr</strong> (lag 1981:739) — men bara om avgiften är avtalad i förväg, till exempel i dina fakturavillkor eller ert avtal</li>
                  <li>Bara en påminnelseavgift per faktura, och inte förrän fakturan förfallit</li>
                  <li><strong>Dröjsmålsränta</strong> gäller från förfallodagen — referensräntan + 8 procentenheter (kontrollera aktuell nivå på Riksbankens webb)</li>
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
                <strong>Tips för steg 2:</strong> Erbjud alltid en dialog — en delbetalningsplan kan rädda både pengarna och kundrelationen. Var tydlig med nytt sista datum. Lägg till påminnelseavgiften om den finns med i dina villkor — det signalerar att du menar allvar. Skriv in avgiften i fakturavillkoren redan idag om den saknas.
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
                      <div style={{ fontSize: 15, color: "#949EC9" }}>{desc}</div>
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
                <a href="/verktyg/fakturatext" style={S.ctaBtn}>Öppna Fakturatext-generatorn →</a>
              </div>

              <p style={S.footerNote}>
                Textverket hjälper svenska småföretag att skriva professionella texter med AI.{" "}
                <a href="/verktyg/fakturatext" style={{ color: "#949EC9" }}>Testa Fakturatext-generatorn gratis.</a>
              </p>
    </BlogPostLayout>
  );
}
