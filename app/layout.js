import "./globals.css";
import Script from "next/script";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9223370591083087"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
