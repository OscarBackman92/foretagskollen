import "./globals.css";
import Script from "next/script";
import CookieBanner from "./components/CookieBanner";
import { inter, jetbrainsMono, spaceGrotesk } from "./fonts";

export const metadata = {
  title: "Textverket — Proffsiga AI-texter för svenska företag",
  description:
    "Gratis AI-verktyg som hjälper svenska småföretag skriva professionella offertmejl, produkttexter, kundmejl och mer på sekunder.",
  keywords:
    "AI texter småföretag, offertmejl generator, gratis AI verktyg, textverket, svenska företag",
  metadataBase: new URL("https://www.textverket.se"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Textverket — Proffsiga AI-texter för svenska företag",
    description:
      "Skriv professionella offertmejl, produkttexter och kundmejl gratis med AI. Skräddarsytt för svenska småföretag.",
    url: "https://www.textverket.se",
    siteName: "Textverket",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: `/og?title=${encodeURIComponent("Proffsiga AI-texter för svenska företag")}`,
        width: 1200,
        height: 630,
        alt: "Textverket — Gratis AI-textverktyg för svenska företag",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="sv"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta name="google-adsense-account" content="ca-pub-9223370591083087" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                analytics_storage: 'denied',
                wait_for_update: 500
              });
              try {
                if (localStorage.getItem('cookie-consent') === 'all') {
                  gtag('consent', 'update', {
                    ad_storage: 'granted',
                    ad_user_data: 'granted',
                    ad_personalization: 'granted',
                    analytics_storage: 'granted'
                  });
                }
              } catch (e) {}
            `,
          }}
        />
        <meta name="theme-color" content="#05060F" />
      </head>
      <body>
        {children}
        <CookieBanner />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9223370591083087"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-14P78WLMDX"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              gtag('js', new Date());
              gtag('config', 'G-14P78WLMDX');
            `,
          }}
        />
      </body>
    </html>
  );
}
