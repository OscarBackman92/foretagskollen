import ToolClient from "../ToolClient";
import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import { toolPageJsonLd } from "../../lib/structured-data";

export const metadata = {
  title: "Sociala medier-generator — engagerande AI-inlägg för företag | Textverket",
  description:
    "Skapa engagerande inlägg för Instagram, LinkedIn och Facebook med AI. Gratis verktyg för svenska småföretag.",
  keywords:
    "sociala medier generator, AI inlägg företag, LinkedIn text AI, Instagram text, Facebook inlägg",
  alternates: {
    canonical: "/verktyg/sociala-medier",
  },
  openGraph: {
    title: "Sociala medier-generator — engagerande AI-inlägg för företag | Textverket",
    description:
      "Skapa engagerande inlägg för Instagram, LinkedIn och Facebook med AI. Gratis för svenska företag.",
    url: "https://www.textverket.se/verktyg/sociala-medier",
    siteName: "Textverket",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: `/og?title=${encodeURIComponent("Sociala medier-generator")}`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

const FAQ = [
  {
    q: "Vilka plattformar passar verktyget?",
    a: "Det fungerar för LinkedIn, Instagram, Facebook och liknande — du anger var inlägget ska publiceras.",
  },
  {
    q: "Får jag med hashtags?",
    a: "Du kan be om det i din beskrivning, så föreslår verktyget relevanta taggar.",
  },
  {
    q: "Hur ofta bör jag publicera?",
    a: "Hellre regelbundet och genomtänkt än ofta och innehållslöst. Ett bra inlägg i veckan slår fem halvdana.",
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
        Att synas på sociala medier som företagare är enkelt i teorin och svårt i praktiken —
        framför allt för att den tomma skärmen är obarmhärtig. Vad ska man ens skriva om?
        Textverkets generator för sociala medier hjälper dig förvandla en lös idé till ett
        färdigt inlägg med en hook som fångar, en kärna som ger värde och en avslutning som
        får folk att agera. Inga fler kvällar då du stirrar på "Skriv något…".
      </p>
      <p style={{ ...S.p, marginBottom: 0 }}>
        Vill du fördjupa dig?{" "}
        <Link href="/blogg/sociala-medier-foretag" style={{ color: "#2563EB" }}>
          Läs vår guide om sociala medier för företag
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
            <strong>Beskriv vad du vill säga.</strong> En produktnyhet, ett tips, en
            bakom-kulisserna-historia eller ett erbjudande — skriv kärnan i en mening eller
            två.
          </div>
        </div>
        <div style={S.stepRow}>
          <span style={S.stepNum}>2</span>
          <div style={S.stepText}>
            <strong>Välj plattform och ton.</strong> LinkedIn, Instagram eller Facebook har
            olika tempo och längd. Verktyget anpassar sig.
          </div>
        </div>
        <div style={S.stepRow}>
          <span style={S.stepNum}>3</span>
          <div style={S.stepText}>
            <strong>Generera och publicera.</strong> Du får ett inlägg med en stark inledning,
            ett tydligt budskap och en uppmaning. Justera och lägg upp.
          </div>
        </div>
      </div>

      <div style={S.section}>
        <h2 style={S.h2}>Exempel</h2>
        <p style={S.p}>
          Skriver du{" "}
          <em>"vi har börjat erbjuda kostnadsfri första konsultation"</em>{" "}
          får du inte ett platt "Vi erbjuder nu gratis konsultation!". I stället får du ett
          inlägg som öppnar med en fråga eller ett igenkännbart problem din kund har, knyter
          det till varför du startade erbjudandet, och avslutar med en tydlig uppmaning att
          höra av sig. Hooken gör skillnaden mellan ett inlägg folk scrollar förbi och ett
          de stannar vid.
        </p>
      </div>

      <div style={S.section}>
        <h2 style={S.h2}>Tips för inlägg som syns</h2>
        <ul style={S.tipList}>
          {[
            ["Lägg din viktigaste poäng i första raden.", "Folk bestämmer på en sekund om de läser vidare."],
            ["Skriv om en sak per inlägg.", "Försöker du säga allt säger du inget."],
            ["Avsluta med en uppmaning.", "En fråga, en länk eller en uppmaning att kommentera — ge läsaren något att göra."],
            ["Var personlig.", "Företagskonton som låter som människor presterar nästan alltid bättre än de som låter som broschyrer."],
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
          <div style={S.faqQ}>Vilka plattformar passar verktyget?</div>
          <p style={S.faqA}>
            Det fungerar för LinkedIn, Instagram, Facebook och liknande — du anger var
            inlägget ska publiceras.
          </p>
        </div>
        <div style={S.faqItem}>
          <div style={S.faqQ}>Får jag med hashtags?</div>
          <p style={S.faqA}>
            Du kan be om det i din beskrivning, så föreslår verktyget relevanta taggar.
          </p>
        </div>
        <div style={S.faqItem}>
          <div style={S.faqQ}>Hur ofta bör jag publicera?</div>
          <p style={S.faqA}>
            Hellre regelbundet och genomtänkt än ofta och innehållslöst. Ett bra inlägg
            i veckan slår fem halvdana.
          </p>
        </div>
      </div>

      <div style={{ ...S.section, borderTop: "none", paddingTop: 8 }}>
        <p style={{ ...S.p, fontSize: 13, color: "#9CA3AF" }}>
          <Link href="/blogg/sociala-medier-foretag" style={{ color: "#2563EB" }}>
            Läs vår guide: Sociala medier för företag →
          </Link>
        </p>
      </div>
    </>
  );
}

export default function SocialaMedierPage() {
  return (
    <>
      <JsonLd
        data={toolPageJsonLd({
          name: "Sociala medier-generator",
          path: "/verktyg/sociala-medier",
          faqs: FAQ,
        })}
      />
      <ToolClient
        initialCategory="social"
        pageTitle="Sociala medier-generator"
        pageSubtitle="Beskriv ämne och plattform — AI:n skriver ett engagerande inlägg på sekunder."
        beforeContent={<BeforeContent />}
        afterContent={<AfterContent />}
      />
    </>
  );
}
