import ToolClient from "../ToolClient";
import Link from "next/link";

export const metadata = {
  title: "Produkttext-generator — säljande beskrivningar med AI | Textverket",
  description:
    "Skriv säljande produktbeskrivningar med AI. Gratis verktyg för svenska e-handlare och företag som vill konvertera mer.",
  keywords:
    "produkttext generator, produktbeskrivning AI, säljande produkttexter, e-handel texter",
  alternates: {
    canonical: "/verktyg/produkttext",
  },
  openGraph: {
    title: "Produkttext-generator — säljande beskrivningar med AI | Textverket",
    description:
      "Skriv säljande produktbeskrivningar med AI. Gratis för svenska e-handlare och företag.",
    url: "https://www.textverket.se/verktyg/produkttext",
    siteName: "Textverket",
    locale: "sv_SE",
    type: "website",
  },
};

const S = {
  section: {
    margin: "32px 0 0",
    padding: "28px 0 0",
    borderTop: "1px solid #F0F0F0",
  },
  h2: {
    fontFamily: "'Instrument Serif', serif",
    fontSize: 22,
    fontWeight: 400,
    color: "#111",
    margin: "0 0 12px",
  },
  p: {
    fontSize: 15,
    color: "#555",
    lineHeight: 1.75,
    margin: "0 0 12px",
  },
  stepRow: {
    display: "flex",
    gap: 14,
    alignItems: "flex-start",
    marginBottom: 16,
  },
  stepNum: {
    fontFamily: "'Instrument Serif', serif",
    fontSize: 28,
    color: "#BFDBFE",
    lineHeight: 1,
    flexShrink: 0,
    width: 36,
  },
  stepText: { fontSize: 15, color: "#374151", lineHeight: 1.7 },
  tipList: {
    margin: "12px 0",
    paddingLeft: 0,
    listStyle: "none",
  },
  tipItem: {
    fontSize: 15,
    color: "#374151",
    lineHeight: 1.7,
    paddingLeft: 22,
    marginBottom: 10,
    position: "relative",
  },
  faqItem: {
    background: "#fff",
    border: "1px solid #EDEDED",
    borderRadius: 10,
    padding: "16px 18px",
    marginBottom: 10,
  },
  faqQ: { fontSize: 15, fontWeight: 600, color: "#111", marginBottom: 6 },
  faqA: { fontSize: 14, color: "#555", lineHeight: 1.7, margin: 0 },
};

function BeforeContent() {
  return (
    <div style={S.section}>
      <p style={S.p}>
        En produkttext har ett enda jobb: få besökaren att vilja köpa. Ändå fastnar många
        e-handlare och småföretagare i att rabbla specifikationer — material, mått, vikt — utan
        att någonsin nämna varför produkten är värd pengarna. Textverkets produkttext-generator
        hjälper dig skriva beskrivningar som både säljer och rankar i sökmotorerna. Du beskriver
        produkten i korthet, och verktyget formulerar en text som lyfter fram nyttan, inte bara
        fakta.
      </p>
      <p style={{ ...S.p, marginBottom: 0 }}>
        Vill du fördjupa dig?{" "}
        <Link href="/blogg/produktbeskrivningar-guide" style={{ color: "#2563EB" }}>
          Läs vår guide om produktbeskrivningar som säljer
        </Link>
        .
      </p>
    </div>
  );
}

function AfterContent() {
  return (
    <>
      <div style={S.section}>
        <h2 style={S.h2}>Så fungerar verktyget</h2>
        <div style={S.stepRow}>
          <span style={S.stepNum}>1</span>
          <div style={S.stepText}>
            <strong>Beskriv produkten.</strong> Ange vad det är, vem den är till för och vad som
            gör den bra. Specifikationer som mått och material hjälper, men det viktigaste är
            fördelen för kunden.
          </div>
        </div>
        <div style={S.stepRow}>
          <span style={S.stepNum}>2</span>
          <div style={S.stepText}>
            <strong>Ange längd och stil.</strong> Behöver du en kort kategoritext eller en längre
            beskrivning till en produktsida? Verktyget anpassar sig.
          </div>
        </div>
        <div style={S.stepRow}>
          <span style={S.stepNum}>3</span>
          <div style={S.stepText}>
            <strong>Generera och finputsa.</strong> Du får en text som öppnar med en säljande
            mening, väver in nyttan och avslutar med det praktiska. Klistra in den direkt i
            din webbshop.
          </div>
        </div>
      </div>

      <div style={S.section}>
        <h2 style={S.h2}>Exempel</h2>
        <p style={S.p}>
          Beskriver du{" "}
          <em>"handgjort doftljus av sojavax, lavendel, brinntid 40 timmar, för hemmet"</em>{" "}
          får du inte bara en uppräkning av egenskaper. Du får en text som börjar med känslan —
          lugnet en lavendeldoft skapar efter en lång dag — och sedan knyter ihop det med de
          praktiska detaljerna: sojavaxet som brinner rent och länge, det handgjorda hantverket.
          Skillnaden mot "Doftljus, sojavax, 40h" är att den första faktiskt säljer.
        </p>
      </div>

      <div style={S.section}>
        <h2 style={S.h2}>Tips för bättre produkttexter</h2>
        <ul style={S.tipList}>
          {[
            ["Skriv om nytta, inte bara egenskaper.", '"Vattentät till 50 meter" säger mindre än "följer med dig i poolen och regnet utan en tanke".'],
            ["Skriv för en specifik person.", "Tänk på din typiska kund och skriv som om du pratade med just hen."],
            ["Få med relevanta sökord naturligt.", "Ord kunden faktiskt söker på hör hemma i texten — men proppa inte in dem."],
            ["Variera längden efter var texten ska stå.", "Korta kategoritexter, längre på själva produktsidan."],
          ].map(([bold, rest], i) => (
            <li key={i} style={S.tipItem}>
              <span style={{ position: "absolute", left: 0, color: "#2563EB", fontWeight: 700 }}>›</span>
              <strong>{bold}</strong> {rest}
            </li>
          ))}
        </ul>
      </div>

      <div style={S.section}>
        <h2 style={S.h2}>Vanliga frågor</h2>
        <div style={S.faqItem}>
          <div style={S.faqQ}>Funkar det för alla typer av produkter?</div>
          <p style={S.faqA}>
            Ja — från fysiska varor till digitala produkter och tjänstepaket. Ju mer du
            beskriver, desto bättre.
          </p>
        </div>
        <div style={S.faqItem}>
          <div style={S.faqQ}>Blir texterna unika?</div>
          <p style={S.faqA}>
            Varje text genereras utifrån just din beskrivning, så två olika produkter ger
            två olika texter. Duplicerade beskrivningar straffas av sökmotorer, så unikt
            innehåll är en fördel.
          </p>
        </div>
        <div style={S.faqItem}>
          <div style={S.faqQ}>Kan jag använda texterna kommersiellt?</div>
          <p style={S.faqA}>
            Ja, du äger och får använda det du genererar fritt i din verksamhet.
          </p>
        </div>
      </div>

      <div style={{ ...S.section, borderTop: "none", paddingTop: 8 }}>
        <p style={{ ...S.p, fontSize: 13, color: "#9CA3AF" }}>
          <Link href="/blogg/produktbeskrivningar-guide" style={{ color: "#2563EB" }}>
            Läs vår guide: Produktbeskrivningar som säljer →
          </Link>
        </p>
      </div>
    </>
  );
}

export default function ProdukttextPage() {
  return (
    <ToolClient
      initialCategory="produkt"
      pageTitle="Produkttext-generator"
      pageSubtitle="Beskriv din produkt — AI:n skriver en säljande produktbeskrivning på sekunder."
      beforeContent={<BeforeContent />}
      afterContent={<AfterContent />}
    />
  );
}
