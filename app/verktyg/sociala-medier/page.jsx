import ToolClient from "../ToolClient";

export const metadata = {
  title: "Sociala medier-generator — AI-inlägg för företag | Textverket",
  description:
    "Skapa engagerande inlägg för Instagram, LinkedIn och Facebook med AI. Gratis verktyg för svenska företag.",
  keywords:
    "sociala medier generator, AI inlägg företag, LinkedIn text AI, Instagram text, Facebook inlägg",
  alternates: {
    canonical: "/verktyg/sociala-medier",
  },
  openGraph: {
    title: "Sociala medier-generator — AI-inlägg för företag | Textverket",
    description:
      "Skapa engagerande inlägg för Instagram, LinkedIn och Facebook med AI. Gratis för svenska företag.",
    url: "https://textverket.se/verktyg/sociala-medier",
    siteName: "Textverket",
    locale: "sv_SE",
    type: "website",
  },
};

export default function SocialaMedierPage() {
  return <ToolClient initialCategory="social" />;
}
