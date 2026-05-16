import ToolClient from "../ToolClient";

export const metadata = {
  title: "Fritext-generator — skriv vad som helst med AI | Textverket",
  description:
    "Generera valfria affärstexter med AI. Gratis och anpassat för svenska småföretag som behöver hjälp med skrivandet.",
  keywords:
    "fritext AI, text generator, AI skrivhjälp, affärstexter AI, gratis textgenerator",
  alternates: {
    canonical: "/verktyg/fritext",
  },
  openGraph: {
    title: "Fritext-generator — skriv vad som helst med AI | Textverket",
    description:
      "Generera valfria affärstexter med AI. Gratis och anpassat för svenska småföretag.",
    url: "https://textverket.se/verktyg/fritext",
    siteName: "Textverket",
    locale: "sv_SE",
    type: "website",
  },
};

export default function FritextPage() {
  return <ToolClient initialCategory="fri" />;
}
