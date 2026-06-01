import ToolClient from "./ToolClient";

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
  },
};

export default function VerktygsPage() {
  return <ToolClient />;
}
