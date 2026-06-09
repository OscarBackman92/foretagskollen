import ToolClient from "../ToolClient";
import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import { toolPageJsonLd } from "../../lib/structured-data";

export const metadata = {
  title: "Fakturatext-generator — betalningspåminnelser med AI | Textverket",
  description:
    "Skriv tydliga fakturatexter och betalningspåminnelser med AI. Professionella formuleringar för alla tre påminnelsenivåer. Gratis för svenska småföretag.",
  keywords:
    "fakturatext generator, betalningspåminnelse AI, fakturatext mall, påminnelse faktura, dröjsmålsränta",
  alternates: {
    canonical: "/verktyg/fakturatext",
  },
  openGraph: {
    title: "Fakturatext-generator — betalningspåminnelser med AI | Textverket",
    description:
      "Skriv tydliga fakturatexter och betalningspåminnelser med AI. Gratis för svenska företag.",
    url: "https://www.textverket.se/verktyg/fakturatext",
    siteName: "Textverket",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: `/og?title=${encodeURIComponent("Fakturatext-generator")}`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

const FAQ = [
  {
    q: "Täcker verktyget alla tre påminnelsenivåerna?",
    a: "Ja — från vänlig första påminnelse till bestämd sista varning innan inkasso.",
  },
  {
    q: "Får jag med juridiskt korrekta formuleringar?",
    a: "Verktyget ger en professionell grundtext. Vid inkasso och dröjsmålsränta, kontrollera alltid gällande regler eller stäm av med din bokförare.",
  },
  {
    q: "Kan jag återanvända texterna?",
    a: "Ja. Många sparar de tre nivåerna som egna mallar och byter bara ut belopp och datum.",
  },
];

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
        Att be om betalning är obekvämt för de flesta småföretagare — särskilt när kunden är
        någon man vill fortsätta jobba med. Risken är att man antingen väntar för länge eller
        skriver något så vagt att det inte tas på allvar. Textverkets fakturatext-generator
        hjälper dig formulera betalningspåminnelser och fakturarelaterad text som är tydlig
        och bestämd, men aldrig otrevlig. Du får betalt utan att riskera relationen.
      </p>
      <p style={{ ...S.p, marginBottom: 0 }}>
        Vill du fördjupa dig?{" "}
        <Link href="/blogg/betalningspaminnelse-mall" style={{ color: "#2563EB" }}>
          Läs vår guide om betalningspåminnelser — mallar och regler
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
            <strong>Beskriv läget.</strong> Är det en första vänlig påminnelse, en bestämd
            andra påminnelse eller en sista varning före inkasso? Ange belopp och hur länge
            fakturan varit förfallen.
          </div>
        </div>
        <div style={S.stepRow}>
          <span style={S.stepNum}>2</span>
          <div style={S.stepText}>
            <strong>Välj tonläge.</strong> Verktyget trappar upp tonen lagom — vänlig först,
            tydligare sedan.
          </div>
        </div>
        <div style={S.stepRow}>
          <span style={S.stepNum}>3</span>
          <div style={S.stepText}>
            <strong>Generera och skicka.</strong> Du får en text som anger fakturanummer,
            belopp, förfallodatum och nästa steg på ett professionellt sätt.
          </div>
        </div>
      </div>

      <div style={S.section}>
        <h2 style={S.h2}>Exempel</h2>
        <p style={S.p}>
          Vid en första påminnelse där fakturan precis passerat förfallodatum får du en vänlig
          text som utgår från att det är ett förbiseende — för det är det oftast. Den nämner
          beloppet och datumet utan anklagelser och gör det enkelt att betala. Beskriver du i
          stället{" "}
          <em>"sista påminnelse, 12 000 kr, 30 dagar försenad, nästa steg inkasso"</em>{" "}
          får du en bestämd men korrekt text som tydligt anger konsekvensen utan att bli
          hotfull.
        </p>
      </div>

      <div style={S.section}>
        <h2 style={S.h2}>Tips för betalningspåminnelser</h2>
        <ul style={S.tipList}>
          {[
            ["Trappa upp i tre steg.", "Vänlig, bestämd, sista varning — de flesta betalar redan vid den första."],
            ["Anta gott uppsåt först.", "En försenad betalning är oftast ett misstag, inte ovilja. Tonen ska spegla det."],
            ["Var alltid konkret.", "Fakturanummer, belopp och förfallodatum ska finnas med varje gång."],
            ["Förebygg sena betalningar.", "Tydliga villkor och korta betaltider på fakturan minskar problemet från början."],
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
          <div style={S.faqQ}>Täcker verktyget alla tre påminnelsenivåerna?</div>
          <p style={S.faqA}>
            Ja — från vänlig första påminnelse till bestämd sista varning innan inkasso.
          </p>
        </div>
        <div style={S.faqItem}>
          <div style={S.faqQ}>Får jag med juridiskt korrekta formuleringar?</div>
          <p style={S.faqA}>
            Verktyget ger en professionell grundtext. Vid inkasso och dröjsmålsränta,
            kontrollera alltid gällande regler eller stäm av med din bokförare.
          </p>
        </div>
        <div style={S.faqItem}>
          <div style={S.faqQ}>Kan jag återanvända texterna?</div>
          <p style={S.faqA}>
            Ja. Många sparar de tre nivåerna som egna mallar och byter bara ut belopp
            och datum.
          </p>
        </div>
      </div>

      <div style={{ ...S.section, borderTop: "none", paddingTop: 8 }}>
        <p style={{ ...S.p, fontSize: 13, color: "#9CA3AF" }}>
          <Link href="/blogg/betalningspaminnelse-mall" style={{ color: "#2563EB" }}>
            Läs vår guide: Betalningspåminnelse — mallar och regler →
          </Link>
        </p>
      </div>
    </>
  );
}

export default function FakturatextPage() {
  return (
    <>
      <JsonLd
        data={toolPageJsonLd({
          name: "Fakturatext-generator",
          path: "/verktyg/fakturatext",
          faqs: FAQ,
        })}
      />
      <ToolClient
        initialCategory="faktura"
        pageTitle="Fakturatext-generator"
        pageSubtitle="Beskriv läget — AI:n skriver rätt betalningspåminnelse för varje steg."
        beforeContent={<BeforeContent />}
        afterContent={<AfterContent />}
      />
    </>
  );
}
