// Hjälpfunktioner för JSON-LD strukturerad data (schema.org).
// Renderas via <JsonLd data={...} /> — data kan vara ett objekt eller en array.

export const SITE_URL = "https://www.textverket.se";

export function websiteJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Textverket",
      url: SITE_URL,
      description:
        "Gratis AI-verktyg som hjälper svenska småföretag skriva professionella affärstexter.",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Textverket",
      url: SITE_URL,
      inLanguage: "sv-SE",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ];
}

export function faqJsonLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function breadcrumbsJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ name, path }, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: `${SITE_URL}${path}`,
    })),
  };
}

// För verktygssidorna: FAQ + breadcrumbs i ett anrop.
export function toolPageJsonLd({ name, path, faqs }) {
  return [
    faqJsonLd(faqs),
    breadcrumbsJsonLd([
      { name: "Hem", path: "/" },
      { name: "Verktyg", path: "/verktyg" },
      { name, path },
    ]),
  ];
}

// För bloggposter: Article + breadcrumbs utifrån sidans befintliga metadata.
export function blogPostJsonLd(metadata, datePublished, dateModified) {
  const path = metadata.alternates.canonical;
  const title = metadata.openGraph?.title || metadata.title;
  const url = `${SITE_URL}${path}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description: metadata.description,
      url,
      mainEntityOfPage: url,
      inLanguage: "sv-SE",
      datePublished,
      dateModified: dateModified || datePublished,
      image: `${SITE_URL}/og?title=${encodeURIComponent(title)}`,
      author: { "@type": "Organization", name: "Textverket", url: SITE_URL },
      publisher: { "@type": "Organization", name: "Textverket", url: SITE_URL },
    },
    breadcrumbsJsonLd([
      { name: "Hem", path: "/" },
      { name: "Blogg", path: "/blogg" },
      { name: title, path },
    ]),
  ];
}
