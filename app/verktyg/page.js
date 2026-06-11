import ToolClient from "./ToolClient";
import Link from "next/link";

export const metadata = {
  title: "AI-textverktyg för svenska företag — Textverket",
  description:
    "Gratis AI-verktyg för svenska småföretag. Skriv offertmejl, produkttexter, kundmejl och mer på sekunder.",
  keywords:
    "AI textverktyg, gratis AI texter, svenska företag, offertmejl generator, produkttexter",
  alternates: {
    canonical: "/verktyg",
  },
  openGraph: {
    title: "AI-textverktyg för svenska företag — Textverket",
    description:
      "Gratis AI-verktyg för svenska småföretag. Skriv professionella texter på sekunder.",
    url: "https://www.textverket.se/verktyg",
    siteName: "Textverket",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: `/og?title=${encodeURIComponent("AI-textverktyg för svenska företag")}`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

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
    letterSpacing: "-0.02em",
    color: "#F4F7FF",
    margin: "0 0 12px",
  },
  p: {
    fontSize: 15,
    color: "#A7B1D6",
    lineHeight: 1.75,
    margin: "0 0 12px",
  },
  toolRow: {
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
    padding: "12px 0",
    borderBottom: "1px solid rgba(125, 140, 255, 0.1)",
  },
  toolName: {
    color: "#22D3EE",
    fontWeight: 600,
    textDecoration: "none",
    whiteSpace: "nowrap",
  },
  toolDesc: { fontSize: 14.5, color: "#9AA5CC", lineHeight: 1.65 },
  tipItem: {
    fontSize: 15,
    color: "#C3CCE8",
    lineHeight: 1.7,
    paddingLeft: 22,
    marginBottom: 10,
    position: "relative",
  },
  tipArrow: {
    position: "absolute",
    left: 0,
    color: "#22D3EE",
    fontWeight: 700,
  },
  faqItem: {
    background: "rgba(13, 17, 36, 0.6)",
    border: "1px solid rgba(125, 140, 255, 0.16)",
    borderRadius: 10,
    padding: "16px 18px",
    marginBottom: 10,
  },
  faqQ: { fontSize: 15, fontWeight: 600, color: "#E5EAFD", marginBottom: 6 },
  faqA: { fontSize: 14, color: "#9AA5CC", lineHeight: 1.7, margin: 0 },
};

const TOOLS = [
  {
    href: "/verktyg/offertmejl",
    name: "Offertmejl",
    desc: "när du svarar på en förfrågan och vill presentera pris, omfattning och nästa steg professionellt.",
  },
  {
    href: "/verktyg/produkttext",
    name: "Produkttext",
    desc: "när du behöver säljande beskrivningar till webbutik, annons eller katalog.",
  },
  {
    href: "/verktyg/kundmejl",
    name: "Kundmejl",
    desc: "för uppföljningar, tackmejl, svar på reklamationer och andra kundsituationer som kräver rätt ton.",
  },
  {
    href: "/verktyg/sociala-medier",
    name: "Sociala medier",
    desc: "när du vill ha inlägg som engagerar — anpassade för Facebook, Instagram eller LinkedIn.",
  },
  {
    href: "/verktyg/fakturatext",
    name: "Fakturatext",
    desc: "för betalningspåminnelser och fakturameddelanden som är tydliga utan att skada kundrelationen.",
  },
  {
    href: "/verktyg/fritext",
    name: "Fritext",
    desc: "för allt som inte passar i kategorierna ovan — beskriv fritt vad du behöver.",
  },
];

function BeforeContent() {
  return (
    <div style={S.section}>
      <p style={S.p}>
        Här hittar du Textverkets sex AI-verktyg för svenska affärstexter. Alla är gratis,
        kräver inget konto och är byggda för hur svenska företag faktiskt skriver — inte
        översatta engelska mallar. Välj en kategori ovan så öppnas rätt verktyg, eller läs
        guiden nedan om du är osäker på vilket som passar ditt ärende.
      </p>
    </div>
  );
}

function AfterContent() {
  return (
    <>
      <div style={S.section}>
        <h2 style={S.h2}>Vilket verktyg ska jag välja?</h2>
        {TOOLS.map((t) => (
          <div key={t.href} style={S.toolRow}>
            <Link href={t.href} style={S.toolName}>
              {t.name} →
            </Link>
            <span style={S.toolDesc}>Använd {t.desc}</span>
          </div>
        ))}
      </div>

      <div style={S.section}>
        <h2 style={S.h2}>Så får du bäst resultat</h2>
        <ul style={{ margin: "12px 0", paddingLeft: 0, listStyle: "none" }}>
          {[
            ["Var konkret.", "Ta med namn, belopp, datum och annat som ska in i texten — AI:n hittar inte på detaljer du inte gett den."],
            ["Ange mottagare och ton.", "Ett mejl till en kommun låter annorlunda än ett till en stamkund. Skriv vem texten är till."],
            ["Iterera.", "Blev resultatet inte rätt? Justera din beskrivning och generera igen — det tar fem sekunder."],
            ["Läs alltid igenom.", "Texten är ett utkast som tillhör dig. Lägg till det personliga som bara du vet innan du skickar."],
          ].map(([bold, rest], i) => (
            <li key={i} style={S.tipItem}>
              <span style={S.tipArrow}>›</span>
              <strong style={{ color: "#E5EAFD" }}>{bold}</strong> {rest}
            </li>
          ))}
        </ul>
      </div>

      <div style={S.section}>
        <h2 style={S.h2}>Vanliga frågor om verktygen</h2>
        <div style={S.faqItem}>
          <div style={S.faqQ}>Kostar det något att använda verktygen?</div>
          <p style={S.faqA}>
            Nej. Alla verktyg är helt gratis och kräver ingen registrering. Tjänsten
            finansieras genom annonser på sidan.
          </p>
        </div>
        <div style={S.faqItem}>
          <div style={S.faqQ}>Sparar ni det jag skriver in?</div>
          <p style={S.faqA}>
            Nej. Varken det du skriver in eller texterna som genereras lagras hos oss —
            allt sker i realtid och försvinner när du lämnar sidan.
          </p>
        </div>
        <div style={S.faqItem}>
          <div style={S.faqQ}>Får jag använda texterna i mitt företag?</div>
          <p style={S.faqA}>
            Ja, texterna tillhör dig och får användas fritt i kommersiella sammanhang.
            Detaljerna finns i våra <Link href="/anvandarvillkor" style={{ color: "#22D3EE" }}>användarvillkor</Link>.
          </p>
        </div>
      </div>

      <div style={{ ...S.section, borderTop: "none", paddingTop: 8 }}>
        <p style={{ ...S.p, fontSize: 13, color: "#7E88B5" }}>
          Vill du lära dig hantverket bakom texterna? Läs våra{" "}
          <Link href="/blogg" style={{ color: "#22D3EE" }}>guider och mallar i bloggen</Link>{" "}
          eller <Link href="/guide" style={{ color: "#22D3EE" }}>snabbguiden för verktyget</Link>.
        </p>
      </div>
    </>
  );
}

export default function VerktygsPage() {
  return (
    <ToolClient
      pageTitle="AI-textverktyg för svenska företag"
      pageSubtitle="Välj kategori, beskriv vad du behöver — klart på sekunder."
      beforeContent={<BeforeContent />}
      afterContent={<AfterContent />}
    />
  );
}
