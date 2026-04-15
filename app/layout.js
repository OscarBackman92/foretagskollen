import "./globals.css";

export const metadata = {
  title: "Företagskollen – Gratis AI-texter för svenska småföretag",
  description:
    "Skriv professionella offertmejl, produkttexter och kundmeddelanden med AI. Gratis verktyg för svenska småföretag.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
