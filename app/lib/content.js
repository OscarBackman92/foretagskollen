/** Central källa för bloggartiklar och sitemap-rutter. */

export const SITE_URL = "https://www.textverket.se";

export const BLOG_ARTICLES = [
  {
    slug: "seo-smaforetag",
    category: "Guide",
    title: "SEO för dina texter — så rankar produkttexter och blogg (2026)",
    excerpt:
      "För småföretag avgörs SEO mest av själva texterna. Skriv unika produkttexter, lokala tjänstesidor och blogg som rankar — med konkreta före/efter-exempel.",
    date: "Juni 2026",
    readTime: "8 min",
    lastModified: "2026-06-28",
  },
  {
    slug: "nyhetsbrev-guide",
    category: "Guide",
    title: "Nyhetsbrev som folk faktiskt vill läsa — guide med mallar",
    excerpt:
      "Den gyllene regeln, strukturen som fungerar, vad du ska skriva om och hur ofta. Sluta skicka nyhetsbrev ingen öppnar.",
    date: "April 2026",
    readTime: "7 min",
    lastModified: "2026-04-21",
  },
  {
    slug: "pressmeddelande-mall",
    category: "Mallar",
    title: "Pressmeddelande — mall och guide med exempel (2026)",
    excerpt:
      "Färdig mall med komplett exempel. Pyramidstrukturen, vad som är en nyhet, och 10 tips som gör att journalister faktiskt läser.",
    date: "April 2026",
    readTime: "7 min",
    lastModified: "2026-04-21",
  },
  {
    slug: "linkedin-profil",
    category: "Guide",
    title: "LinkedIn-profil som ger resultat — komplett guide (2026)",
    excerpt:
      "Rubrik, profilbild, sammanfattning, erfarenhet och aktivitet — gör om din LinkedIn från digitalt CV till magnet för affärer.",
    date: "April 2026",
    readTime: "7 min",
    lastModified: "2026-04-21",
  },
  {
    slug: "personligt-brev-cv",
    category: "Mallar",
    title: "Personligt brev och CV — kompletta mallar och tips (2026)",
    excerpt:
      "Strukturen som fungerar, komplett brevexempel och CV-tipset som gör all skillnad: fokusera på resultat, inte uppgifter.",
    date: "April 2026",
    readTime: "8 min",
    lastModified: "2026-04-21",
  },
  {
    slug: "offertmejl-guide",
    category: "Guide",
    title:
      "Så skriver du ett professionellt offertmejl — komplett guide med exempel (2026)",
    excerpt:
      "Lär dig de 6 delarna i ett bra offertmejl, se ett komplett exempel och undvik de 5 vanligaste misstagen som kostar dig affärer.",
    date: "April 2026",
    readTime: "8 min",
    lastModified: "2026-04-01",
  },
  {
    slug: "kundmejl-mallar",
    category: "Mallar",
    title: "Färdiga mallar för kundmejl — uppföljning, tack och reklamation",
    excerpt:
      "Fem färdiga mejlmallar för vanliga kundsituationer. Kopiera, anpassa och skicka — eller låt AI:n skriva åt dig.",
    date: "April 2026",
    readTime: "6 min",
    lastModified: "2026-04-16",
  },
  {
    slug: "produktbeskrivningar-guide",
    category: "Guide",
    title: "Produktbeskrivningar som faktiskt säljer — guide med exempel",
    excerpt:
      "Sju steg från tråkig specifikation till säljande text. Före/efter-exempel och en enkel struktur du kan använda direkt.",
    date: "April 2026",
    readTime: "7 min",
    lastModified: "2026-04-16",
  },
  {
    slug: "betalningspaminnelse-mall",
    category: "Mallar",
    title: "Betalningspåminnelser med rätt ton — mall och exempel",
    excerpt:
      "Tre mallar med upptrappning, svenska regler för påminnelseavgift och dröjsmålsränta, och tips för att behålla kundrelationen.",
    date: "April 2026",
    readTime: "7 min",
    lastModified: "2026-04-16",
  },
  {
    slug: "sociala-medier-foretag",
    category: "Guide",
    title: "Så skriver du inlägg för sociala medier som företagare (2026)",
    excerpt:
      "De fyra innehållstyperna, hook-kropp-CTA-formeln och 10 idéer du kan posta den här veckan.",
    date: "April 2026",
    readTime: "7 min",
    lastModified: "2026-04-20",
  },
  {
    slug: "professionella-mejl",
    category: "Guide",
    title: "Professionella mejl — 7 regler som gör ditt företag trovärdigt (2026)",
    excerpt:
      "Svensk mejlton, du-tilltal och formalitetsnivåer — regler som skiljer sig från generiska mejletikett-guider.",
    date: "April 2026",
    readTime: "6 min",
    lastModified: "2026-04-20",
  },
  {
    slug: "starta-eget-vid-sidan-av-jobbet",
    category: "Inspiration",
    title: "Starta eget vid sidan av jobbet — så kommer du igång (2026)",
    excerpt:
      "Skatteverkets kriterier, F-skatt, hobby vs firma och praktiska steg för dig som vill testa idén vid sidan av anställningen.",
    date: "April 2026",
    readTime: "9 min",
    lastModified: "2026-04-20",
  },
  {
    slug: "gratis-ai-verktyg",
    category: "Guide",
    title: "10 gratis AI-verktyg för småföretag i Sverige (2026)",
    excerpt:
      "En kuraterad lista med AI-verktyg för text, design och kundservice — med tydlig skillnad mot breda verktygslistor.",
    date: "April 2026",
    readTime: "6 min",
    lastModified: "2026-04-16",
  },
  {
    slug: "gratis-verktyg-egenforetagare",
    category: "Guide",
    title: "15 gratis verktyg för egenföretagare — bokföring till webb (2026)",
    excerpt:
      "Bokföring, fakturering, design och projekthantering — verktyg utanför AI som svenska egenföretagare faktiskt använder.",
    date: "April 2026",
    readTime: "8 min",
    lastModified: "2026-04-20",
  },
];

export const STATIC_PAGES = [
  { path: "", priority: 1.0, changeFrequency: "weekly", lastModified: "2026-06-11" },
  { path: "/verktyg", priority: 0.9, changeFrequency: "weekly", lastModified: "2026-06-09" },
  { path: "/blogg", priority: 0.8, changeFrequency: "weekly", lastModified: "2026-06-09" },
  { path: "/verktyg/offertmejl", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-06-09" },
  { path: "/verktyg/produkttext", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-06-09" },
  { path: "/verktyg/kundmejl", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-06-09" },
  { path: "/verktyg/sociala-medier", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-06-09" },
  { path: "/verktyg/fakturatext", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-06-09" },
  { path: "/verktyg/fritext", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-06-09" },
  { path: "/om-oss", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-04-26" },
  { path: "/kontakt", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-04-26" },
  { path: "/guide", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-04-26" },
  { path: "/integritetspolicy", priority: 0.3, changeFrequency: "yearly", lastModified: "2026-04-21" },
  { path: "/anvandarvillkor", priority: 0.3, changeFrequency: "yearly", lastModified: "2026-06-11" },
];
