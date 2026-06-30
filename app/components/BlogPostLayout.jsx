import Link from "next/link";
import NavBar from "./NavBar";
import Footer from "./Footer";
import JsonLd from "./JsonLd";
import { blogPostJsonLd } from "../lib/structured-data";
import AdUnit from "./AdUnit";
import { blogStyles as S } from "../lib/blog-styles";

export default function BlogPostLayout({
  metadata,
  datePublished,
  category,
  title,
  breadcrumbLabel,
  showHome = true,
  published,
  updated,
  readTime,
  footerNote,
  children,
}) {
  return (
    <div style={S.page}>
      <JsonLd data={blogPostJsonLd(metadata, datePublished)} />
      <NavBar />

      <article style={S.article}>
        <div style={S.breadcrumb}>
          {showHome && (
            <>
              <Link href="/" style={S.breadcrumbLink}>
                Hem
              </Link>
              <span>›</span>
            </>
          )}
          <Link href="/blogg" style={S.breadcrumbLink}>
            Blogg
          </Link>
          <span>›</span>
          <span>{breadcrumbLabel}</span>
        </div>

        <span style={S.categoryPill}>{category}</span>

        <h1 style={S.h1}>{title}</h1>

        <div style={S.meta}>
          {published ? (
            <>
              <span>{published}</span>
              <span style={S.metaDot}>·</span>
              <span>{readTime}</span>
              <span style={S.metaDot}>·</span>
              <span>Textverket</span>
            </>
          ) : (
            <>
              <span>Publicerad av Textverket</span>
              <span style={S.metaDot}>·</span>
              <span>Uppdaterad {updated}</span>
              <span style={S.metaDot}>·</span>
              <span>Lästid: {readTime}</span>
            </>
          )}
        </div>

        <hr style={S.divider} />

        {children}

        {footerNote ? <p style={S.footerNote}>{footerNote}</p> : null}
      </article>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 28px 40px" }}>
        <AdUnit slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG} />
      </div>

      <Footer />
    </div>
  );
}
