import ToolClient from "../ToolClient";

export const metadata = {
  title: "Kundmejl-generator — professionella kundmejl med AI | Textverket",
  description:
    "Skriv uppföljningsmejl, reklamationssvar och tackmejl på sekunder. Gratis AI-verktyg för svenska småföretag.",
  keywords:
    "kundmejl generator, skriva kundmejl, AI kundservice mejl, uppföljningsmejl, reklamationssvar",
  alternates: {
    canonical: "/verktyg/kundmejl",
  },
  openGraph: {
    title: "Kundmejl-generator — professionella kundmejl med AI | Textverket",
    description:
      "Skriv uppföljningsmejl, reklamationssvar och tackmejl på sekunder. Gratis AI-verktyg.",
    url: "https://textverket.se/verktyg/kundmejl",
    siteName: "Textverket",
    locale: "sv_SE",
    type: "website",
  },
};

export default function KundmejlPage() {
  return <ToolClient initialCategory="kundmejl" />;
}
