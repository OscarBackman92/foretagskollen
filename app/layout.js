import "./globals.css";

export const metadata = {
  title: "Textverket — Proffsiga AI-texter för svenska företag",
  description:
    "Skriv professionella offertmejl, produkttexter och kundmejl gratis med AI. Skräddarsytt för svenska småföretag.",
  keywords:
    "AI texter småföretag, offertmejl generator, gratis AI verktyg, textverket, svenska företag",
  metadataBase: new URL("https://textverket.se"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Textverket — Proffsiga AI-texter för svenska företag",
    description:
      "Skriv professionella offertmejl, produkttexter och kundmejl gratis med AI. Skräddarsytt för svenska småföretag.",
    url: "https://textverket.se",
    siteName: "Textverket",
    locale: "sv_SE",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
