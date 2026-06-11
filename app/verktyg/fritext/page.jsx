import ToolClient from "../ToolClient";
import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import { toolPageJsonLd } from "../../lib/structured-data";

export const metadata = {
  title: "Fritext-generator — skriv valfri affärstext med AI | Textverket",
  description:
    "Generera valfria affärstexter med AI: webbtexter, svåra svar, presentationer och mer. Gratis och anpassat för svenska småföretag.",
  keywords:
    "fritext AI, text generator, AI skrivhjälp, affärstexter AI, gratis textgenerator, om-sida text, webbtext",
  alternates: {
    canonical: "/verktyg/fritext",
  },
  openGraph: {
    title: "Fritext-generator — skriv valfri affärstext med AI | Textverket",
    description:
      "Generera valfria affärstexter med AI. Gratis och anpassat för svenska småföretag.",
    url: "https://www.textverket.se/verktyg/fritext",
    siteName: "Textverket",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: `/og?title=${encodeURIComponent("Fritext-generator")}`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

const FAQ = [
  {
    q: "Vad kan jag använda fritext till?",
    a: "I princip vad som helst skriftligt i din verksamhet — webbtexter, svåra svar, presentationer, interna meddelanden och mer.",
  },
  {
    q: "Hur får jag den bästa texten?",
    a: "Var specifik. Syfte, mottagare, ton och längd gör störst skillnad för resultatet.",
  },
  {
    q: "Vad gör jag om resultatet inte passar?",
    a: "Beskriv vad du vill ändra och generera på nytt. Det är ofta snabbare att förfina än att börja om.",
  },
];

const S = {
  section: {
    margin: "32px 0 0",
    padding: "28px 0 0",
    borderTop: "1px solid rgba(125, 140, 255, 0.12)",
  },
  h2: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 22,
    fontWeight: 700,
    color: "#EAEEFF",
    margin: "0 0 12px",
  },
  p: {
    fontSize: 15,
    color: "#A7B1D6",
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
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 28,
    color: "rgba(34, 211, 238, 0.35)",
    lineHeight: 1,
    flexShrink: 0,
    width: 36,
  },
  stepText: { fontSize: 15, color: "#C3CCE8", lineHeight: 1.7 },
  tipList: {
    margin: "12px 0",
    paddingLeft: 0,
    listStyle: "none",
  },
  tipItem: {
    fontSize: 15,
    color: "#C3CCE8",
    lineHeight: 1.7,
    paddingLeft: 22,
    marginBottom: 10,
    position: "relative",
  },
  faqItem: {
    background: "rgba(13, 17, 36, 0.66)",
    border: "1px solid rgba(125, 140, 255, 0.16)",
    borderRadius: 10,
    padding: "16px 18px",
    marginBottom: 10,
  },
  faqQ: { fontSize: 15, fontWeight: 600, color: "#EAEEFF", marginBottom: 6 },
  faqA: { fontSize: 14, color: "#A7B1D6", lineHeight: 1.7, margin: 0 },
};

function BeforeContent() {
  return (
    <div style={S.section}>
      <p style={S.p}>
        Allt företagande ryms inte i färdiga kategorier. Ibland behöver du en text som inte
        är en offert, en produkttext eller ett kundmejl — ett svar på en svår förfrågan, en
        kort presentation av företaget, en text till webbplatsen, ett internt meddelande.
        Textverkets fritextverktyg är den flexibla varianten: du beskriver vad du behöver i
        vanliga ord, och verktyget formulerar det åt dig på korrekt, professionell svenska.
      </p>
      <p style={{ ...S.p, marginBottom: 0 }}>
        Vill du fördjupa dig?{" "}
        <Link href="/blogg/professionella-mejl" style={{ color: "#22D3EE" }}>
          Läs vår guide om professionella mejl och affärskommunikation
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
            <strong>Beskriv vad du behöver.</strong> Skriv i klartext vad texten ska handla
            om, vem den är till och i vilket syfte. Ju tydligare, desto bättre.
          </div>
        </div>
        <div style={S.stepRow}>
          <span style={S.stepNum}>2</span>
          <div style={S.stepText}>
            <strong>Ange ton och längd.</strong> Formellt eller avslappnat, kort eller
            utförligt — du styr.
          </div>
        </div>
        <div style={S.stepRow}>
          <span style={S.stepNum}>3</span>
          <div style={S.stepText}>
            <strong>Generera och använd.</strong> Du får en färdig text som du kan kopiera
            och anpassa, oavsett sammanhang.
          </div>
        </div>
      </div>

      <div style={S.section}>
        <h2 style={S.h2}>Exempel</h2>
        <p style={S.p}>
          Behöver du{" "}
          <em>"en kort 'om oss'-text till webbplatsen för ett tvåmanna-snickeri i Uppsala som jobbar med kök och inredning"</em>{" "}
          får du en text som fångar hantverket, det lokala och det personliga utan att låta
          som en mall. Eller skriver du{" "}
          <em>"vänligt men bestämt svar till kund som vill ha rabatt jag inte kan ge"</em>{" "}
          får du en formulering som håller relationen varm samtidigt som den står fast.
          Fritext är verktyget för allt som inte passar i en låda.
        </p>
      </div>

      <div style={S.section}>
        <h2 style={S.h2}>Tips för bästa resultat</h2>
        <ul style={S.tipList}>
          {[
            ["Beskriv syftet, inte bara ämnet.", '"Text om våra tjänster" ger sämre resultat än "text som ska få besökaren att boka ett möte".'],
            ["Säg vem texten är till.", "En text till en kund, en kollega och en myndighet låter helt olika."],
            ["Ange tonen.", "Om du inte säger något får du en neutral ton — peka ut om du vill ha den varmare eller mer formell."],
            ["Be om en omskrivning om något inte sitter.", "Beskriv vad du vill ändra, så justerar verktyget."],
          ].map(([bold, rest], i) => (
            <li key={i} style={S.tipItem}>
              <span style={{ position: "absolute", left: 0, color: "#22D3EE", fontWeight: 700 }}>›</span>
              <strong>{bold}</strong> {rest}
            </li>
          ))}
        </ul>
      </div>

      <div style={S.section}>
        <h2 style={S.h2}>Vanliga frågor</h2>
        <div style={S.faqItem}>
          <div style={S.faqQ}>Vad kan jag använda fritext till?</div>
          <p style={S.faqA}>
            I princip vad som helst skriftligt i din verksamhet — webbtexter, svåra svar,
            presentationer, interna meddelanden och mer.
          </p>
        </div>
        <div style={S.faqItem}>
          <div style={S.faqQ}>Hur får jag den bästa texten?</div>
          <p style={S.faqA}>
            Var specifik. Syfte, mottagare, ton och längd gör störst skillnad för resultatet.
          </p>
        </div>
        <div style={S.faqItem}>
          <div style={S.faqQ}>Vad gör jag om resultatet inte passar?</div>
          <p style={S.faqA}>
            Beskriv vad du vill ändra och generera på nytt. Det är ofta snabbare att
            förfina än att börja om.
          </p>
        </div>
      </div>

      <div style={{ ...S.section, borderTop: "none", paddingTop: 8 }}>
        <p style={{ ...S.p, fontSize: 13, color: "#7E88B5" }}>
          <Link href="/blogg/professionella-mejl" style={{ color: "#22D3EE" }}>
            Läs vår guide: Professionella mejl och affärskommunikation →
          </Link>
        </p>
      </div>
    </>
  );
}

export default function FritextPage() {
  return (
    <>
      <JsonLd
        data={toolPageJsonLd({
          name: "Fritext-generator",
          path: "/verktyg/fritext",
          faqs: FAQ,
        })}
      />
      <ToolClient
        initialCategory="fri"
        pageTitle="Fritext-generator"
        pageSubtitle="Beskriv vad du behöver — AI:n skriver valfri affärstext på sekunder."
        beforeContent={<BeforeContent />}
        afterContent={<AfterContent />}
      />
    </>
  );
}
