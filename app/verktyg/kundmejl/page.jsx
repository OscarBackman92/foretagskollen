import ToolClient from "../ToolClient";
import Link from "next/link";

export const metadata = {
  title: "Kundmejl-generator — professionell kundkommunikation med AI | Textverket",
  description:
    "Skriv professionella kundmejl med AI. Uppföljningar, reklamationer, tackbrev och mer. Gratis för svenska småföretag.",
  keywords:
    "kundmejl generator, kundservice mejl, uppföljningsmejl, reklamationsmejl, tackbrev",
  alternates: {
    canonical: "/verktyg/kundmejl",
  },
  openGraph: {
    title: "Kundmejl-generator — professionell kundkommunikation med AI | Textverket",
    description:
      "Skriv professionella kundmejl med AI. Uppföljningar, reklamationer och tackbrev. Gratis.",
    url: "https://www.textverket.se/verktyg/kundmejl",
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
        De flesta kundmejl skrivs i stunden, ofta när man redan är stressad — en uppföljning man
        skjutit upp, ett reklamationssvar man inte vet hur man formulerar, en påminnelse man
        ogärna skickar. Resultatet blir lätt antingen för kort och snorkigt eller för långt och
        ursäktande. Textverkets kundmejl-generator hjälper dig hitta rätt ton för varje situation,
        så att mejlet bygger förtroende i stället för att riskera relationen.
      </p>
      <p style={{ ...S.p, marginBottom: 0 }}>
        Vill du fördjupa dig?{" "}
        <Link href="/blogg/kundmejl-mallar" style={{ color: "#2563EB" }}>
          Läs vår guide med kundmejl-mallar för alla situationer
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
            <strong>Beskriv situationen.</strong> Är det en uppföljning, ett tack, ett
            reklamationssvar eller en betalningspåminnelse? Skriv kort vad det handlar om
            och hur relationen ser ut.
          </div>
        </div>
        <div style={S.stepRow}>
          <span style={S.stepNum}>2</span>
          <div style={S.stepText}>
            <strong>Välj tonläge.</strong> Verktyget hjälper dig balansera vänlighet och
            tydlighet — viktigt särskilt vid känsliga ärenden som klagomål.
          </div>
        </div>
        <div style={S.stepRow}>
          <span style={S.stepNum}>3</span>
          <div style={S.stepText}>
            <strong>Generera och anpassa.</strong> Du får ett mejl som är vänligt men rakt,
            med en tydlig poäng och ett konkret nästa steg.
          </div>
        </div>
      </div>

      <div style={S.section}>
        <h2 style={S.h2}>Exempel</h2>
        <p style={S.p}>
          Vid en reklamation där en kund är missnöjd med en sen leverans får du ett svar som
          varken går i försvarsställning eller överöser kunden med ursäkter. I stället bekräftar
          det problemet, tar ansvar, erbjuder en konkret lösning och håller dörren öppen för
          fortsatt samarbete. Beskriver du i stället{" "}
          <em>"uppföljning till kund som fått offert för två veckor sedan men inte svarat"</em>{" "}
          får du en vänlig knuff som påminner utan att vara påträngande.
        </p>
      </div>

      <div style={S.section}>
        <h2 style={S.h2}>Tips för bättre kundmejl</h2>
        <ul style={S.tipList}>
          {[
            ["Vid klagomål: bekräfta innan du förklarar.", "Kunden vill känna sig hörd innan hen är intresserad av orsaken."],
            ["Håll ett tydligt syfte per mejl.", "Vill du ha ett svar, ett möte eller en betalning? Säg det rakt ut."],
            ["Var snabb med uppföljningar.", "De flesta affärer vinns i uppföljningen, inte i första kontakten."],
            ["Avsluta vänligt även i jobbiga ärenden.", "Ton spiller över på hela relationen."],
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
          <div style={S.faqQ}>Vilka typer av kundmejl täcks?</div>
          <p style={S.faqA}>
            Uppföljningar, tackmejl, reklamationssvar, betalningspåminnelser och
            återaktivering av vilande kunder, bland annat.
          </p>
        </div>
        <div style={S.faqItem}>
          <div style={S.faqQ}>Hur undviker jag att låta som en mall?</div>
          <p style={S.faqA}>
            Beskriv något specifikt om kunden eller ärendet — ett tidigare samtal, ett
            namn, en detalj. Det gör mejlet personligt.
          </p>
        </div>
        <div style={S.faqItem}>
          <div style={S.faqQ}>Kan tonen vara strikt formell?</div>
          <p style={S.faqA}>
            Ja, du styr tonen. Allt från avslappnat till mer formellt fungerar beroende
            på vad du anger.
          </p>
        </div>
      </div>

      <div style={{ ...S.section, borderTop: "none", paddingTop: 8 }}>
        <p style={{ ...S.p, fontSize: 13, color: "#9CA3AF" }}>
          <Link href="/blogg/kundmejl-mallar" style={{ color: "#2563EB" }}>
            Läs vår guide: Kundmejl-mallar för alla situationer →
          </Link>
        </p>
      </div>
    </>
  );
}

export default function KundmejlPage() {
  return (
    <ToolClient
      initialCategory="kundmejl"
      pageTitle="Kundmejl-generator"
      pageSubtitle="Beskriv situationen — AI:n skriver rätt kundmejl för varje tillfälle."
      beforeContent={<BeforeContent />}
      afterContent={<AfterContent />}
    />
  );
}
