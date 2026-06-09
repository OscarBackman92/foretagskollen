import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";
import { blogPostJsonLd } from "../../lib/structured-data";

export const metadata = {
  title: "Hur skriver man bra produktbeskrivningar? Komplett guide (2026) — Textverket",
  description:
    "Lär dig skriva produktbeskrivningar som säljer. 7-stegsguide med före/efter-exempel och SEO-tips för svenska e-handlare och småföretag.",
  keywords: "produktbeskrivningar guide, säljande produkttexter, produkttext e-handel, SEO produkttexter, e-handel Sverige",
  alternates: {
    canonical: "/blogg/produktbeskrivningar-guide",
  },
  openGraph: {
    title: "Hur skriver man bra produktbeskrivningar? Komplett guide (2026)",
    description:
      "7-stegsguide med exempel som konverterar. Testa gratis på textverket.se.",
    url: "https://www.textverket.se/blogg/produktbeskrivningar-guide",
    siteName: "Textverket",
    locale: "sv_SE",
    type: "article",
    images: [
      {
        url: `/og?title=${encodeURIComponent("Hur skriver man bra produktbeskrivningar?")}`,
        width: 1200,
        height: 630,
      },
    ],
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
  stepNum: { display: "inline-flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, background: "#EEF2FF", color: "#4338CA", borderRadius: "50%", fontSize: 14, fontWeight: 700, marginRight: 10, flexShrink: 0 },
  compRow: { display: "flex", flexDirection: "column", gap: 8, margin: "20px 0" },
  compBad: { background: "#FFF5F5", border: "1px solid #FED7D7", borderRadius: 10, padding: "14px 16px", fontSize: 15, color: "#374151", lineHeight: 1.7 },
  compGood: { background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 10, padding: "14px 16px", fontSize: 15, color: "#374151", lineHeight: 1.7 },
  compLabel: { fontSize: 11, fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase", marginBottom: 6 },
  featureRow: { display: "flex", flexDirection: "column", gap: 12, margin: "20px 0" },
  featureItem: { display: "flex", gap: 12, alignItems: "flex-start", padding: "14px 16px", background: "#fff", border: "1px solid #E5E7EB", borderRadius: 10 },
  featureArrow: { color: "#4338CA", fontWeight: 700, fontSize: 16, flexShrink: 0, marginTop: 2 },
  tip: { background: "#FFFBEB", border: "1px solid #FDE68A", borderRadius: 10, padding: "14px 18px", fontSize: 14, color: "#92400E", lineHeight: 1.7, margin: "20px 0" },
  ctaBox: { background: "linear-gradient(135deg, #111 0%, #1a2332 100%)", borderRadius: 16, padding: "32px 28px", margin: "48px 0 0", color: "#fff" },
  ctaTitle: { fontFamily: "'Instrument Serif', serif", fontSize: 24, fontWeight: 400, margin: "0 0 10px", color: "#fff" },
  ctaDesc: { fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 20px", lineHeight: 1.7 },
  ctaBtn: { display: "inline-block", background: "#fff", color: "#111", padding: "12px 28px", borderRadius: 100, fontSize: 15, fontWeight: 700, textDecoration: "none" },
  footerNote: { borderTop: "1px solid #E5E7EB", marginTop: 56, paddingTop: 24, fontSize: 14, color: "#9CA3AF", lineHeight: 1.7, fontStyle: "italic" },
  footer: { textAlign: "center", padding: "32px 28px", color: "#9CA3AF", fontSize: 13, borderTop: "1px solid #EDEDED" },
};

export default function ProduktbeskrivningarGuidePage() {
  return (
    <div style={S.page}>
      <JsonLd data={blogPostJsonLd(metadata, "2026-04-16")} />
      <NavBar />

      <article style={S.article}>
        <div style={S.breadcrumb}>
          <a href="/blogg" style={S.breadcrumbLink}>Blogg</a>
          <span>›</span>
          <span>Produkttexter</span>
        </div>

        <div style={S.categoryPill}>Guide</div>
        <h1 style={S.h1}>Hur skriver man bra produktbeskrivningar? Komplett guide med exempel</h1>

        <div style={S.meta}>
          <span>April 2026</span>
          <span style={S.metaDot}>·</span>
          <span>8 min läsning</span>
          <span style={S.metaDot}>·</span>
          <span>Textverket</span>
        </div>

        <hr style={S.divider} />

        <p style={S.p}>
          En bra produktbeskrivning säljer. En dålig produktbeskrivning kostar dig kunder varje dag utan att du vet om det. Ändå behandlar de flesta småföretag produkttexter som en eftertanke — något man slänger ihop snabbt för att fylla en webbsida.
        </p>
        <p style={S.p}>
          I den här guiden lär du dig skriva produktbeskrivningar som faktiskt konverterar besökare till köpare.
        </p>

        <h2 style={S.h2}>Varför produktbeskrivningar spelar roll</h2>
        <p style={S.p}>
          De flesta köpbeslut online börjar med att kunden läser produktbeskrivningen. En studie visade att bristfälliga produktbeskrivningar är en av de vanligaste anledningarna till att kunder lämnar en webbutik utan att handla. Kunden har frågor — din produkttext ska ge svaren.
        </p>
        <p style={S.p}>
          Bra produktbeskrivningar gör tre saker: de informerar kunden om vad produkten är, de förklarar varför produkten är relevant för just den kunden, och de gör det enkelt att ta steget till köp.
        </p>

        <h2 style={S.h2}>7 steg till bättre produktbeskrivningar</h2>

        <h3 style={{ ...S.h3, display: "flex", alignItems: "center" }}>
          <span style={S.stepNum}>1</span> Känn din kund
        </h3>
        <p style={S.p}>
          Innan du skriver ett enda ord, ställ dig frågan: vem köper det här? En produktbeskrivning för en 25-årig modeintresserad kvinna ser helt annorlunda ut än en för en 55-årig hantverkare.
        </p>
        <p style={S.p}>
          Tänk på kundens problem, önskemål och invändningar. Vilken fråga ställer de sig innan de klickar "köp"?
        </p>
        <div style={S.compRow}>
          <div>
            <div style={{ ...S.compLabel, color: "#C53030" }}>Svagt</div>
            <div style={S.compBad}>"Ergonomisk design med justerbart ländrygsstöd"</div>
          </div>
          <div>
            <div style={{ ...S.compLabel, color: "#15803D" }}>Starkt</div>
            <div style={S.compGood}>"Slipp ryggvärk efter långa arbetsdagar — stolen anpassar sig efter din kropp, inte tvärtom"</div>
          </div>
        </div>

        <h3 style={{ ...S.h3, display: "flex", alignItems: "center" }}>
          <span style={S.stepNum}>2</span> Skriv till en person, inte en målgrupp
        </h3>
        <p style={S.p}>
          Det vanligaste misstaget i produkttexter är att skriva som en broschyr. "Denna produkt erbjuder en rad fördelar för den moderna användaren..." — ingen pratar så. Och ingen vill läsa det.
        </p>
        <p style={S.p}>
          Skriv istället som om du pratar med en kompis som frågat om din produkt. Använd "du" och "din". Var specifik.
        </p>
        <div style={S.compRow}>
          <div>
            <div style={{ ...S.compLabel, color: "#C53030" }}>Broschyr-stil (svagt)</div>
            <div style={S.compBad}>"Vår ryggsäck är tillverkad i slitstark polyester och rymmer en bärbar dator upp till 15 tum. Produkten finns i flera färger."</div>
          </div>
          <div>
            <div style={{ ...S.compLabel, color: "#15803D" }}>Personlig stil (starkt)</div>
            <div style={S.compGood}>"Trött på ryggsäckar som går sönder efter en säsong? Den här är gjord i samma polyester som används i bergsklättningsväskor. Din 15-tums laptop får en egen vadderad ficka, och ja — den finns i fler färger än trist svart."</div>
          </div>
        </div>

        <h3 style={{ ...S.h3, display: "flex", alignItems: "center" }}>
          <span style={S.stepNum}>3</span> Fokusera på nytta, inte egenskaper
        </h3>
        <p style={S.p}>
          Egenskaper beskriver vad produkten är. Nytta beskriver vad produkten gör för kunden. Kunder köper nytta.
        </p>
        <div style={S.featureRow}>
          {[
            ["Bluetooth 5.3 med aptX HD-codec", "Trådlöst ljud utan fördröjning — perfekt för film och musik"],
            ["500 ml kapacitet, dubbelvägig vakuumisolering", "Ditt kaffe är fortfarande varmt när du kommer till jobbet — även om pendeln tar en timme"],
            ["10 000 mAh batteri", "Laddar din telefon tre gånger innan powerbanken själv behöver laddas"],
          ].map(([feat, benefit]) => (
            <div key={feat} style={S.featureItem}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, color: "#9CA3AF", marginBottom: 4 }}>{feat}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#111", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={S.featureArrow}>→</span> {benefit}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={S.tip}>
          <strong>Tricket:</strong> Skriv ner alla egenskaper, och ställ sedan frågan "och vad betyder det för kunden?" efter varje. Svaret är din nyttobeskrivning.
        </div>

        <h3 style={{ ...S.h3, display: "flex", alignItems: "center" }}>
          <span style={S.stepNum}>4</span> Använd sensoriska ord
        </h3>
        <p style={S.p}>
          Produkter man inte kan ta på behöver beskrivas med ord som skapar en upplevelse. Sensoriska ord aktiverar hjärnan på ett annat sätt än tekniska termer.
        </p>
        <p style={S.p}>
          Istället för "mjukt tyg" — prova "tyget som känns som att svepa in sig i en varm filt en regnig söndag". Istället för "god choklad" — prova "mörk choklad med en hint av havssalt som smälter långsamt på tungan".
        </p>

        <h3 style={{ ...S.h3, display: "flex", alignItems: "center" }}>
          <span style={S.stepNum}>5</span> Hantera invändningar
        </h3>
        <p style={S.p}>
          Varje kund har invändningar. De tänker "men tänk om...?" och om din produktbeskrivning inte svarar på det lämnar de sidan.
        </p>
        <div style={{ margin: "20px 0" }}>
          {[
            ["Är det värt pengarna?", "Jämför med alternativet. \"Kostar ungefär som tre take away-luncher, men håller i åratal.\""],
            ["Fungerar det verkligen?", "Använd socialt bevis. \"Över 2 000 kunder har gett den fem stjärnor.\""],
            ["Passar det mig?", "Var specifik med storlekar, mått, kompatibilitet."],
            ["Tänk om jag inte gillar den?", "Lyft garantin. \"30 dagars öppet köp, inga frågor.\""],
          ].map(([q, a]) => (
            <div key={q} style={{ padding: "14px 16px", background: "#fff", border: "1px solid #E5E7EB", borderRadius: 10, marginBottom: 10 }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: "#374151", marginBottom: 6 }}>"{q}"</div>
              <div style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.7 }}>{a}</div>
            </div>
          ))}
        </div>

        <h3 style={{ ...S.h3, display: "flex", alignItems: "center" }}>
          <span style={S.stepNum}>6</span> Strukturera för skanning
        </h3>
        <p style={S.p}>
          De flesta läser inte produktbeskrivningar ord för ord. De skannar. Anpassa din text efter det.
        </p>
        <p style={S.p}>
          Börja med det viktigaste — den enda mening som ska få kunden att vilja veta mer. Följ med 3–5 kärnfördelar. Avsluta med praktisk information som storlek, material och leverans. Undvik långa textblock. Variera korta och långa meningar.
        </p>

        <h3 style={{ ...S.h3, display: "flex", alignItems: "center" }}>
          <span style={S.stepNum}>7</span> Avsluta med en uppmaning
        </h3>
        <p style={S.p}>
          Din produktbeskrivning ska leda till handling. En tydlig uppmaning i texten ökar konverteringen.
        </p>
        <div style={S.compRow}>
          <div style={S.compGood}>"Beställ innan kl. 14 så skickar vi idag."</div>
          <div style={S.compGood}>"Finns i lager — leverans inom 1–2 arbetsdagar."</div>
          <div style={S.compGood}>"Bara 12 kvar i lager."</div>
        </div>
        <div style={S.tip}>
          Skapa urgency utan att ljuga. Om du säger att det bara finns 12 kvar ska det faktiskt bara finnas 12 kvar.
        </div>

        <h2 style={S.h2}>Exempel: Före och efter</h2>
        <div style={S.compRow}>
          <div>
            <div style={{ ...S.compLabel, color: "#C53030" }}>Före (typisk produkttext)</div>
            <div style={S.compBad}>"Svart t-shirt i ekologisk bomull. Finns i storlek S–XL. Rundad hals. Maskintvätt 40 grader."</div>
          </div>
          <div>
            <div style={{ ...S.compLabel, color: "#15803D" }}>Efter (konverterande produkttext)</div>
            <div style={S.compGood}>"Den svarta t-shirten du letar efter. Mjuk ekologisk bomull som håller formen tvätt efter tvätt — ingen mer baggy-effect efter tredje tvättpassen. Smal passform utan att vara tight, med en rundad hals som sitter precis där den ska. Finns i S–XL. Osäker? Vår storleksguide hjälper dig välja rätt på 30 sekunder. Tål maskintvätt i 40 grader. Beställ idag — fri frakt över 499 kr."</div>
          </div>
        </div>
        <p style={S.p}>Samma produkt. Helt annan känsla.</p>

        <h2 style={S.h2}>SEO-tips för produktbeskrivningar</h2>
        <p style={S.p}>
          Bra produktbeskrivningar hjälper inte bara konverteringen — de hjälper dig synas i Google också.
        </p>
        <ul style={{ margin: "0 0 22px 0", paddingLeft: 22, fontSize: 16, lineHeight: 2, color: "#374151" }}>
          <li>Använd de ord kunder faktiskt söker på</li>
          <li>Skriv unika texter — kopiera aldrig leverantörens standardbeskrivning</li>
          <li>Håll titeln beskrivande och inkludera relevanta sökord</li>
        </ul>

        <div style={S.ctaBox}>
          <p style={S.ctaTitle}>Skriv produkttexter som säljer — på sekunder</p>
          <p style={S.ctaDesc}>
            Textverket genererar säljande produktbeskrivningar på svenska. Beskriv produkten och målgruppen, så skapar AI:n en text du kan använda direkt.
          </p>
          <a href="/verktyg/produkttext" style={S.ctaBtn}>Öppna Produkttext-generatorn →</a>
        </div>

        <p style={S.footerNote}>
          Textverket hjälper svenska småföretag att skriva professionella texter med AI.{" "}
          <a href="/verktyg/produkttext" style={{ color: "#6B7280" }}>Testa Produkttext-generatorn gratis.</a>
        </p>
      </article>

      <Footer />
    </div>
  );
}
