import "./globals.css";
import Script from "next/script";
import CookieBanner from "./components/CookieBanner";

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
        <meta name="google-adsense-account" content="ca-pub-9223370591083087" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif&display=swap"
          rel="stylesheet"
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9223370591083087"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body>
        {children}
        <CookieBanner />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-14P78WLMDX"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-14P78WLMDX');
            `,
          }}
        />
      </body>
    </html>
  );
}
