import { BLOG_ARTICLES, SITE_URL, STATIC_PAGES } from "./content";

export { BLOG_ARTICLES, SITE_URL, STATIC_PAGES };

export function buildSitemap() {
  const staticEntries = STATIC_PAGES.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: new Date(page.lastModified),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const blogEntries = BLOG_ARTICLES.map((article) => ({
    url: `${SITE_URL}/blogg/${article.slug}`,
    lastModified: new Date(article.lastModified),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
