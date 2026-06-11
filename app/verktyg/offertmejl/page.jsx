import ToolClient from "../ToolClient";
import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import { toolPageJsonLd } from "../../lib/structured-data";

export const metadata = {
  title: "Offertmejl-generator — skriv professionella offerter med AI | Textverket",
  description:
    "Generera professionella offertmejl på sekunder. Gratis AI-verktyg för svenska småföretag som vinner fler affärer.",
  keywords:
    "offertmejl generator, skriva offert, AI offert, offertmall svenska, offertmejl exempel",
  alternates: {
    canonical: "/verktyg/offertmejl",
  },
  openGraph: {
    title: "Offertmejl-generator — skriv professionella offerter med AI | Textverket",
    description:
      "Generera professionella offertmejl på sekunder. Gratis AI-verktyg för svenska småföretag.",
    url: "https://www.textverket.se/verktyg/offertmejl",
    siteName: "Textverket",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: `/og?title=${encodeURIComponent("Offertmejl-generator")}`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

const FAQ = [
  {
    q: "Kan jag skicka mejlet rakt av?",
    a: "Ja, men läs alltid igenom och lägg till detaljer som bara du vet — exakt pris, namn och eventuella tillval.",
  },
  {
    q: "Funkar det för både tjänster och produkter?",
    a: "Ja. Verktyget anpassar sig efter vad du beskriver, oavsett om du säljer ett hantverksuppdrag, en konsulttjänst eller en leverans.",
  },
  {
    q: "Vad ska jag skriva för bästa resultat?",
    a: "Ta med vad som ska levereras, till vem, pris, tidsram och gärna något du vet om kunden sedan tidigare. Det sista gör mejlet personligt.",
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
  exampleBox: {
    background: "rgba(34, 211, 238, 0.07)",
    border: "1px solid rgba(34, 211, 238, 0.35)",
    borderRadius: 12,
    padding: "18px 20px",
    margin: "12px 0",
  },
  exampleLabel: {
    fontSize: 11,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 1,
    color: "#22D3EE",
    marginBottom: 6,
  },
  exampleText: { fontSize: 14, color: "#C3CCE8", lineHeight: 1.7 },
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
        Ett offertmejl är ofta första gången en kund bildar sig en uppfattning om hur du jobbar.
        Är det rörigt, opersonligt eller otydligt med pris tappar du ofta affären redan där —
        oavsett hur bra ditt erbjudande egentligen är. Med Textverkets offertmejl-generator
        beskriver du kort vad offerten gäller, så får du tillbaka ett färdigt, professionellt
        mejl på svenska som du kan skicka direkt eller finjustera. Verktyget är gjort för svenska
        småföretag och förstår hur affärsspråk faktiskt låter här — inte en stel översättning
        från engelska.
      </p>
      <p style={{ ...S.p, marginBottom: 0 }}>
        Vill du fördjupa dig?{" "}
        <Link href="/blogg/offertmejl-guide" style={{ color: "#22D3EE" }}>
          Läs vår kompletta guide om offertmejl
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
            <strong>Beskriv uppdraget.</strong> Skriv några rader om vad som ska levereras, till
            vem, ungefärligt pris och tidsram. Ju fler detaljer, desto träffsäkrare blir mejlet.
          </div>
        </div>
        <div style={S.stepRow}>
          <span style={S.stepNum}>2</span>
          <div style={S.stepText}>
            <strong>Välj ton.</strong> Avslappnad och personlig för småföretag och privatpersoner,
            mer strukturerad och formell för kommun eller större organisationer.
          </div>
        </div>
        <div style={S.stepRow}>
          <span style={S.stepNum}>3</span>
          <div style={S.stepText}>
            <strong>Generera och kopiera.</strong> Du får ett komplett mejl med ämnesrad,
            personlig inledning, en sammanfattning av kundens behov, din lösning, pris och
            villkor samt en tydlig avslutning. Kopiera, justera vid behov och skicka.
          </div>
        </div>
      </div>

      <div style={S.section}>
        <h2 style={S.h2}>Exempel</h2>
        <p style={S.p}>
          Skriver du till exempel{" "}
          <em>"Offert på målning av fasad, villa i Bromma, 45 000 kr inkl. material, klart innan midsommar"</em>{" "}
          får du tillbaka ett mejl som inleds personligt, sammanfattar exakt vad som ingår, anger
          betalningsvillkor och leveranstid, och avslutar med ett konkret nästa steg — som ett
          förslag på att ringa upp — i stället för ett tamt "hör av dig vid frågor". Du slipper
          alltså börja från ett tomt ark varje gång en förfrågan kommer in.
        </p>
      </div>

      <div style={S.section}>
        <h2 style={S.h2}>Tips för bättre offertmejl</h2>
        <ul style={S.tipList}>
          {[
            ["Ta med kundens namn eller företagsnamn redan i ämnesraden.", "Det höjer öppningsfrekvensen och känns skräddarsytt."],
            ["Sätt alltid en giltighetstid.", "En deadline skapar en naturlig anledning att fatta beslut, utan att vara påträngande."],
            ["Var konkret med priset.", "Otydliga priser skapar osäkerhet, och osäkerhet dödar affärer. Ge åtminstone en prisram."],
            ["Visa att du förstått behovet innan du presenterar lösningen.", "Det skiljer dig från konkurrenter som hoppar rakt på pris."],
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
          <div style={S.faqQ}>Kan jag skicka mejlet rakt av?</div>
          <p style={S.faqA}>
            Ja, men läs alltid igenom och lägg till detaljer som bara du vet — exakt pris,
            namn och eventuella tillval.
          </p>
        </div>
        <div style={S.faqItem}>
          <div style={S.faqQ}>Funkar det för både tjänster och produkter?</div>
          <p style={S.faqA}>
            Ja. Verktyget anpassar sig efter vad du beskriver, oavsett om du säljer ett
            hantverksuppdrag, en konsulttjänst eller en leverans.
          </p>
        </div>
        <div style={S.faqItem}>
          <div style={S.faqQ}>Vad ska jag skriva för bästa resultat?</div>
          <p style={S.faqA}>
            Ta med vad som ska levereras, till vem, pris, tidsram och gärna något du vet om
            kunden sedan tidigare. Det sista gör mejlet personligt.
          </p>
        </div>
      </div>

      <div style={{ ...S.section, borderTop: "none", paddingTop: 8 }}>
        <p style={{ ...S.p, fontSize: 13, color: "#7E88B5" }}>
          <Link href="/blogg/offertmejl-guide" style={{ color: "#22D3EE" }}>
            Läs vår guide: Så skriver du ett professionellt offertmejl →
          </Link>
        </p>
      </div>
    </>
  );
}

export default function OffertmejlPage() {
  return (
    <>
      <JsonLd
        data={toolPageJsonLd({
          name: "Offertmejl-generator",
          path: "/verktyg/offertmejl",
          faqs: FAQ,
        })}
      />
      <ToolClient
        initialCategory="offert"
        pageTitle="Offertmejl-generator"
        pageSubtitle="Beskriv uppdraget — AI:n skriver ett professionellt offertmejl på sekunder."
        beforeContent={<BeforeContent />}
        afterContent={<AfterContent />}
      />
    </>
  );
}
