import ToolClient from "../ToolClient";

export const metadata = {
  title: "Produkttext-generator — säljande beskrivningar med AI | Textverket",
  description:
    "Skriv säljande produktbeskrivningar med AI. Gratis verktyg för svenska e-handlare och företag som vill konvertera mer.",
  keywords:
    "produkttext generator, produktbeskrivning AI, säljande produkttexter, e-handel texter",
  openGraph: {
    title: "Produkttext-generator — säljande beskrivningar med AI | Textverket",
    description:
      "Skriv säljande produktbeskrivningar med AI. Gratis för svenska e-handlare och företag.",
    url: "https://textverket.se/verktyg/produkttext",
    siteName: "Textverket",
    locale: "sv_SE",
    type: "website",
  },
};

export default function ProdukttextPage() {
  return <ToolClient initialCategory="produkt" />;
}
