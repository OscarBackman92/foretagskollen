import ToolClient from "../ToolClient";

export const metadata = {
  title: "Fakturatext-generator — betalningspåminnelser med AI | Textverket",
  description:
    "Skriv tydliga fakturatexter och betalningspåminnelser med AI. Gratis verktyg för svenska småföretag.",
  keywords:
    "fakturatext generator, betalningspåminnelse AI, fakturatext mall, påminnelse faktura",
  openGraph: {
    title: "Fakturatext-generator — betalningspåminnelser med AI | Textverket",
    description:
      "Skriv tydliga fakturatexter och betalningspåminnelser med AI. Gratis för svenska företag.",
    url: "https://textverket.se/verktyg/fakturatext",
    siteName: "Textverket",
    locale: "sv_SE",
    type: "website",
  },
};

export default function FakturatextPage() {
  return <ToolClient initialCategory="faktura" />;
}
