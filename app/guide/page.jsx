import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Användarguide — Så får du bäst resultat med Textverket",
  description: "Steg-för-steg-guide som visar hur du väljer rätt verktyg, beskriver ditt behov och anpassar AI-genererade texter för bästa resultat.",
  keywords: "guide textverket, använda AI textgenerator, tips bästa resultat AI, hur fungerar textverket",
  alternates: {
    canonical: "/guide",
  },
  openGraph: {
    title: "Användarguide — Textverket",
    description: "Steg-för-steg-guide för bästa resultat med Textverkets AI-verktyg.",
    url: "https://www.textverket.se/guide",
    siteName: "Textverket",
    locale: "sv_SE",
    type: "article",
    images: [
      {
        url: `/og?title=${encodeURIComponent("Användarguide — så får du bäst resultat")}`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

const TIPS = [
  {
    icon: "🎯",
    title: "Var specifik med mottagaren",
    desc: "Skriv gärna vem texten riktar sig till: 'en ny kund som frågat om städtjänster' ger mycket bättre resultat än bara 'en kund'.",
  },
  {
    icon: "💰",
    title: "Inkludera konkreta siffror",
    desc: "Pris, leveranstid, antal, storlek — konkreta detaljer gör AI-texten mer trovärdig och specifik. Generella texter utan siffror landar sällan rätt.",
  },
  {
    icon: "🎨",
    title: "Beskriv tonen du vill ha",
    desc: "Lägg till 'formell', 'vänlig men professionell', 'kortfattad', 'entusiastisk' eller liknande. AI:n anpassar sig direkt.",
  },
  {
    icon: "🔄",
    title: "Generera flera versioner",
    desc: "Klicka på 'Generera' igen för att få ett nytt alternativ. Varje generation är unik — ta det bästa från två versioner och kombinera manuellt.",
  },
  {
    icon: "✏️",
    title: "Redigera alltid lite",
    desc: "Lägg till ett eget namn, ett lokalt område eller en detalj om ditt företag. Personliga touches gör texten mer genuin och minnesvärdig.",
  },
  {
    icon: "📋",
    title: "Spara vad som funkar",
    desc: "Notera vilka beskrivningar som ger bäst resultat. Nästa gång du behöver liknande text kan du återanvända en välformulerad input.",
  },
  {
    icon: "📏",
    title: "Ange önskad längd",
    desc: "Skriv 'kort (3 meningar)', 'medium (ett stycke)' eller 'detaljerat'. Annars väljer AI:n en standardlängd som kanske inte passar ditt syfte.",
  },
];

export default function GuidePage() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "transparent",
      fontFamily: "'Inter', sans-serif",
      color: "#EAEEFF",
    }}>
      <NavBar />

      <article style={{ maxWidth: 720, margin: "0 auto", padding: "56px 28px 80px" }}>
        <div style={{
          display: "inline-block",
          background: "rgba(52, 211, 153, 0.12)",
          color: "#34D399",
          fontSize: 12,
          fontWeight: 600,
          padding: "4px 12px",
          borderRadius: 100,
          marginBottom: 20,
          letterSpacing: 0.3,
          textTransform: "uppercase",
        }}>
          Guide
        </div>

        <h1 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(32px, 5vw, 48px)",
          fontWeight: 700,
          lineHeight: 1.2,
          margin: "0 0 20px",
          color: "#EAEEFF",
        }}>
          Så får du bäst resultat med Textverket
        </h1>

        <p style={{ fontSize: 17, lineHeight: 1.85, color: "#C3CCE8", margin: "0 0 48px" }}>
          Textverket är byggt för att vara enkelt — men med rätt approach får du dramatiskt bättre texter. Den här guiden visar hur du tar dig från blank sida till färdig text på under en minut.
        </p>

        {/* Step 1 */}
        <section style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
            <div style={{
              width: 40, height: 40, borderRadius: "50%",
              background: "linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)", color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 16, fontWeight: 700, flexShrink: 0,
            }}>1</div>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 26, fontWeight: 700, margin: 0, color: "#EAEEFF",
            }}>
              Välj rätt textkategori
            </h2>
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#C3CCE8", margin: "0 0 16px" }}>
            Börja med att välja vilken typ av text du behöver. Textverket har sex specialanpassade kategorier, och valet påverkar hur AI:n tänker och formulerar sig:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10 }}>
            {[
              { icon: "📨", label: "Offertmejl", desc: "B2B-offerter och prisförfrågningar" },
              { icon: "🏷️", label: "Produkttext", desc: "Webb- och e-handelsbeskrivningar" },
              { icon: "💬", label: "Kundmejl", desc: "Uppföljning, tack, reklamationer" },
              { icon: "📱", label: "Sociala medier", desc: "LinkedIn, Instagram, Facebook" },
              { icon: "🧾", label: "Fakturatext", desc: "Betalningspåminnelser, villkor" },
              { icon: "✨", label: "Fritext", desc: "Allt annat ditt företag behöver" },
            ].map(cat => (
              <div key={cat.label} style={{
                background: "rgba(13, 17, 36, 0.66)", border: "1px solid rgba(125, 140, 255, 0.16)",
                borderRadius: 10, padding: "14px 16px",
              }}>
                <div style={{ fontSize: 22, marginBottom: 6 }}>{cat.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 3 }}>{cat.label}</div>
                <div style={{ fontSize: 13, color: "#7E88B5" }}>{cat.desc}</div>
              </div>
            ))}
          </div>
          <div style={{
            background: "rgba(251, 191, 36, 0.09)", border: "1px solid rgba(251, 191, 36, 0.32)",
            borderRadius: 10, padding: "14px 18px", marginTop: 16,
            fontSize: 14, color: "#FCD34D", lineHeight: 1.6,
          }}>
            💡 <strong>Tips:</strong> Osäker på vilken kategori? Prova <em>Fritext</em> — det är det mest flexibla alternativet.
          </div>
        </section>

        {/* Step 2 */}
        <section style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
            <div style={{
              width: 40, height: 40, borderRadius: "50%",
              background: "linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)", color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 16, fontWeight: 700, flexShrink: 0,
            }}>2</div>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 26, fontWeight: 700, margin: 0, color: "#EAEEFF",
            }}>
              Beskriv ditt behov tydligt
            </h2>
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#C3CCE8", margin: "0 0 16px" }}>
            Textrutan är platsen där du berättar vad du vill ha. Ju mer detaljer, desto bättre resultat. Tänk på det som att briefa en copywriter — du vill inte ge dem ett tomt uppdrag.
          </p>

          <div style={{
            background: "rgba(13, 17, 36, 0.66)", border: "1px solid rgba(125, 140, 255, 0.16)", borderRadius: 12, overflow: "hidden", marginBottom: 16,
          }}>
            <div style={{
              padding: "10px 16px", background: "rgba(248, 113, 113, 0.09)", borderBottom: "1px solid rgba(248, 113, 113, 0.32)",
              fontSize: 13, fontWeight: 600, color: "#FCA5A5",
            }}>
              ❌ För vagt — ger generiska resultat
            </div>
            <div style={{ padding: "16px", fontSize: 15, color: "#C3CCE8", lineHeight: 1.6, fontStyle: "italic" }}>
              "Skriv ett offertmejl om städning"
            </div>
          </div>

          <div style={{
            background: "rgba(13, 17, 36, 0.66)", border: "1px solid rgba(125, 140, 255, 0.16)", borderRadius: 12, overflow: "hidden",
          }}>
            <div style={{
              padding: "10px 16px", background: "rgba(52, 211, 153, 0.1)", borderBottom: "1px solid rgba(52, 211, 153, 0.32)",
              fontSize: 13, fontWeight: 600, color: "#34D399",
            }}>
              ✅ Tydligt — ger skräddarsydda resultat
            </div>
            <div style={{ padding: "16px", fontSize: 15, color: "#C3CCE8", lineHeight: 1.6, fontStyle: "italic" }}>
              "Skriv ett offertmejl för städtjänst till ett kontor i Göteborg (ca 300 kvm). Pris: 4 500 kr/månad inkl. moms. Vi städar två gånger i veckan, tis och fre. Kunden heter Maria Lindqvist på Lindqvist & Partners AB. Tonen ska vara professionell men varm."
            </div>
          </div>
        </section>

        {/* Step 3 */}
        <section style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
            <div style={{
              width: 40, height: 40, borderRadius: "50%",
              background: "linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)", color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 16, fontWeight: 700, flexShrink: 0,
            }}>3</div>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 26, fontWeight: 700, margin: 0, color: "#EAEEFF",
            }}>
              Generera och granska texten
            </h2>
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#C3CCE8", margin: "0 0 16px" }}>
            Klicka på knappen och se texten skrivas fram på några sekunder. Läs igenom resultatet och bedöm:
          </p>
          <ul style={{ margin: "0 0 16px", paddingLeft: 24, fontSize: 16, color: "#C3CCE8", lineHeight: 2 }}>
            <li>Stämmer tonen med ditt företags röst?</li>
            <li>Är alla fakta korrekta (priser, datum, namn)?</li>
            <li>Är längden lagom för sammanhanget?</li>
            <li>Saknas något viktigt som du vill ha med?</li>
          </ul>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#C3CCE8", margin: 0 }}>
            Om du inte är nöjd — klicka bara igen. Varje generation är unik och du kan generera hur många versioner du vill.
          </p>
        </section>

        {/* Step 4 */}
        <section style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
            <div style={{
              width: 40, height: 40, borderRadius: "50%",
              background: "linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)", color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 16, fontWeight: 700, flexShrink: 0,
            }}>4</div>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 26, fontWeight: 700, margin: 0, color: "#EAEEFF",
            }}>
              Anpassa och använd
            </h2>
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#C3CCE8", margin: "0 0 16px" }}>
            Kopiera texten och anpassa den i din mejlklient, ditt CMS eller ditt sociala medie-verktyg. Några snabba justeringar gör stor skillnad:
          </p>
          <ul style={{ margin: 0, paddingLeft: 24, fontSize: 16, color: "#C3CCE8", lineHeight: 2 }}>
            <li>Lägg till ditt eget namn i avslutningen</li>
            <li>Justera ett ord eller en mening om något låter konstigt</li>
            <li>Lägg till en specifik detalj som gör texten mer personlig</li>
            <li>Ta bort eventuell text som inte är relevant för din situation</li>
          </ul>
        </section>

        {/* Tips */}
        <div style={{
          background: "rgba(16, 21, 44, 0.8)", borderRadius: 16, padding: "36px 32px", marginBottom: 48,
        }}>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 28, fontWeight: 700, margin: "0 0 28px", color: "#fff",
          }}>
            7 tips för bästa resultat
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {TIPS.map((tip, i) => (
              <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <span style={{ fontSize: 24, flexShrink: 0, marginTop: 2 }}>{tip.icon}</span>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{tip.title}</div>
                  <div style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.65 }}>{tip.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{
          textAlign: "center",
          background: "rgba(13, 17, 36, 0.66)",
          border: "1px solid rgba(125, 140, 255, 0.16)",
          borderRadius: 16,
          padding: "40px 32px",
        }}>
          <div style={{ fontSize: 32, marginBottom: 16 }}>✍️</div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 28, fontWeight: 700, margin: "0 0 12px", color: "#EAEEFF",
          }}>
            Redo att prova?
          </h2>
          <p style={{ fontSize: 16, color: "#949EC9", margin: "0 0 24px", lineHeight: 1.6 }}>
            Det är gratis och du behöver inget konto. Öppna ett verktyg och skriv din första text nu.
          </p>
          <a href="/verktyg" style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)",
            color: "#fff",
            padding: "14px 36px",
            borderRadius: 100,
            fontSize: 16,
            fontWeight: 700,
            textDecoration: "none",
          }}>
            Öppna Textverket – det är gratis
          </a>
        </div>
      </article>

      <Footer />
    </div>
  );
}
