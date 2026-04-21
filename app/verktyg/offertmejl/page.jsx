import ToolClient from "../ToolClient";

export const metadata = {
  title: "Offertmejl-generator — skriv professionella offerter med AI | Textverket",
  description:
    "Generera professionella offertmejl på sekunder. Gratis AI-verktyg för svenska småföretag som vinner fler affärer.",
  keywords:
    "offertmejl generator, skriva offert, AI offert, offertmall svenska, offertmejl exempel",
  openGraph: {
    title: "Offertmejl-generator — skriv professionella offerter med AI | Textverket",
    description:
      "Generera professionella offertmejl på sekunder. Gratis AI-verktyg för svenska småföretag.",
    url: "https://textverket.se/verktyg/offertmejl",
    siteName: "Textverket",
    locale: "sv_SE",
    type: "website",
  },
};

export default function OffertmejlPage() {
  return <ToolClient initialCategory="offert" />;
}
