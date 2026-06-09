import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";
import { blogPostJsonLd } from "../../lib/structured-data";

export const metadata = {
  title: "LinkedIn-profil som ger resultat — komplett guide (2026) — Textverket",
  description:
    "Komplett guide till en LinkedIn-profil som öppnar dörrar. Rubrik, profilbild, sammanfattning, erfarenhet och aktivitet — steg för steg.",
  keywords: "LinkedIn profil guide, LinkedIn tips Sverige, LinkedIn sammanfattning, LinkedIn för företagare, LinkedIn optimera",
  alternates: {
    canonical: "/blogg/linkedin-profil",
  },
  openGraph: {
    title: "LinkedIn-profil som ger resultat — komplett guide (2026)",
    description:
      "Gör om din LinkedIn-profil från CV till magnet. Gratis AI-verktyg på textverket.se.",
    url: "https://www.textverket.se/blogg/linkedin-profil",
    siteName: "Textverket",
    locale: "sv_SE",
    type: "article",
    images: [
      {
        url: `/og?title=${encodeURIComponent("LinkedIn-profil som ger resultat")}`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

const S = {
  page: { minHeight: "100vh", background: "#FAFAF9", fontFamily: "'DM Sans', sans-serif", color: "#1A1A1A" },
  navWrap: { borderBottom: "1px solid #EDEDED" },
  nav: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 28px", maxWidth: 960, margin: "0 auto" },
  logo: { display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: "#1A1A1A" },
  navLinks: { display: "flex", alignItems: "center", gap: 24 },
  navLink: { fontSize: 14, fontWeight: 500, color: "#555", textDecoration: "none" },
  navCta: { background: "#1A1A1A", color: "#fff", padding: "9px 20px", borderRadius: 100, fontSize: 14, fontWeight: 600, textDecoration: "none" },
  article: { maxWidth: 720, margin: "0 auto", padding: "52px 28px 80px" },
  breadcrumb: { fontSize: 13, color: "#9CA3AF", marginBottom: 28, display: "flex", gap: 6, alignItems: "center" },
  breadcrumbLink: { color: "#9CA3AF", textDecoration: "none" },
  categoryPill: { display: "inline-block", background: "#EEF2FF", color: "#4338CA", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100, marginBottom: 20, letterSpacing: 0.3, textTransform: "uppercase" },
  h1: { fontFamily: "'Instrument Serif', serif", fontSize: "clamp(30px, 5vw, 44px)", fontWeight: 400, lineHeight: 1.2, margin: "0 0 20px", color: "#111" },
  meta: { fontSize: 14, color: "#9CA3AF", marginBottom: 36, display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" },
  metaDot: { color: "#D1D5DB" },
  divider: { border: "none", borderTop: "1px solid #E5E7EB", margin: "0 0 40px" },
  p: { fontSize: 17, lineHeight: 1.85, color: "#374151", margin: "0 0 22px" },
  h2: { fontFamily: "'Instrument Serif', serif", fontSize: 28, fontWeight: 400, color: "#111", margin: "56px 0 20px", lineHeight: 1.3 },
  h3: { fontSize: 18, fontWeight: 700, color: "#1A1A1A", margin: "36px 0 14px", lineHeight: 1.4 },
  tip: { background: "#FFFBEB", border: "1px solid #FDE68A", borderRadius: 10, padding: "14px 18px", fontSize: 14, color: "#92400E", lineHeight: 1.7, margin: "20px 0" },
  quote: { margin: "20px 0", padding: "16px 20px", background: "#F8FAFC", borderLeft: "3px solid #CBD5E0", borderRadius: "0 8px 8px 0", fontSize: 15, color: "#4A5568", lineHeight: 1.8, fontStyle: "italic" },
  compRow: { display: "flex", flexDirection: "column", gap: 8, margin: "16px 0" },
  compBefore: { background: "#FFF5F5", border: "1px solid #FED7D7", borderRadius: 8, padding: "10px 14px", fontSize: 14, color: "#7F1D1D" },
  compAfter: { background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 8, padding: "10px 14px", fontSize: 14, color: "#14532D" },
  listItem: { display: "flex", gap: 12, margin: "10px 0", alignItems: "flex-start" },
  bullet: { width: 6, height: 6, borderRadius: "50%", background: "#9CA3AF", flexShrink: 0, marginTop: 10 },
  sectionCard: { background: "#fff", border: "1px solid #E5E7EB", borderRadius: 12, padding: "20px 24px", margin: "16px 0" },
  ctaBox: { background: "linear-gradient(135deg, #111 0%, #1a2332 100%)", borderRadius: 16, padding: "32px 28px", margin: "48px 0 0", color: "#fff" },
  ctaTitle: { fontFamily: "'Instrument Serif', serif", fontSize: 24, fontWeight: 400, margin: "0 0 10px", color: "#fff" },
  ctaDesc: { fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 20px", lineHeight: 1.7 },
  ctaBtn: { display: "inline-block", background: "#fff", color: "#111", padding: "12px 28px", borderRadius: 100, fontSize: 15, fontWeight: 700, textDecoration: "none" },
  footerNote: { borderTop: "1px solid #E5E7EB", marginTop: 56, paddingTop: 24, fontSize: 14, color: "#9CA3AF", lineHeight: 1.7, fontStyle: "italic" },
  footer: { textAlign: "center", padding: "32px 28px", color: "#9CA3AF", fontSize: 13, borderTop: "1px solid #EDEDED" },
};

export default function LinkedInProfilPage() {
  return (
    <div style={S.page}>
      <JsonLd data={blogPostJsonLd(metadata, "2026-04-21")} />
      <NavBar />

      <article style={S.article}>
        <div style={S.breadcrumb}>
          <a href="/" style={S.breadcrumbLink}>Hem</a>
          <span>›</span>
          <a href="/blogg" style={S.breadcrumbLink}>Blogg</a>
          <span>›</span>
          <span>LinkedIn-profil</span>
        </div>

        <span style={S.categoryPill}>Guide</span>

        <h1 style={S.h1}>
          LinkedIn-profil som ger resultat — komplett guide (2026)
        </h1>

        <div style={S.meta}>
          <span>Publicerad av Textverket</span>
          <span style={S.metaDot}>·</span>
          <span>Uppdaterad april 2026</span>
          <span style={S.metaDot}>·</span>
          <span>Lästid: 7 minuter</span>
        </div>

        <hr style={S.divider} />

        <p style={S.p}>
          LinkedIn är inte bara ett digitalt CV längre. Det är ditt yrkesmässiga ansikte utåt, en
          inkommande kanal för jobb och affärer, och ofta det första folk hittar när de googlar ditt namn.
        </p>
        <p style={S.p}>
          Ändå har de flesta en LinkedIn-profil som ser ut som om den skrevs 2014. Jobbtitel, några
          bullet points, en torr sammanfattning. Här är hur du gör om det.
        </p>

        <h2 style={S.h2}>Rubriken — den enskilt viktigaste raden</h2>
        <p style={S.p}>
          Din rubrik är de 220 tecknen under ditt namn. Det syns i sökresultat, kommentarer, inlägg
          och meddelanden. Det är det första folk läser.
        </p>
        <p style={S.p}>
          De flesta skriver bara sin jobbtitel: "Ekonomiassistent på Företaget AB". Det är en
          bortkastad möjlighet.
        </p>
        <p style={S.p}>
          <strong>Bättre struktur:</strong> Vad du gör + vem du hjälper + unikt perspektiv.
        </p>
        <div style={S.compRow}>
          <div style={S.compBefore}>"Säljare på Företaget AB"</div>
          <div style={S.compAfter}>"Hjälper B2B-företag att fördubbla sin omsättning genom strukturerade säljprocesser"</div>
        </div>
        <div style={S.compRow}>
          <div style={S.compBefore}>"Marknadschef"</div>
          <div style={S.compAfter}>"Marknadschef med passion för datadriven storytelling. Jobbar just nu med hållbara varumärken"</div>
        </div>
        <p style={S.p}>
          Rubriken ska berätta en story på en rad. Vad du gör, varför det spelar roll, och vad som
          gör dig annorlunda.
        </p>

        <h2 style={S.h2}>Profilbilden — proffsig men mänsklig</h2>
        <p style={S.p}>Regeln är enkel: se ut som dig själv, fast på din bästa dag.</p>
        <div style={S.compRow}>
          <div style={S.compBefore}>
            <strong>Undvik:</strong> Selfies, bilder med sol/skugga halv i ansiktet, gruppbilder där du
            kapat bort andra, foto från bröllop eller fest, passbildsliknande foto taget med blixt.
          </div>
          <div style={S.compAfter}>
            <strong>Sikta på:</strong> Naturligt ljus, neutral bakgrund, ansiktet tydligt synligt, ett
            avslappnat leende, kläder som matchar din bransch.
          </div>
        </div>
        <div style={S.tip}>
          Du behöver ingen professionell fotograf. En vän med mobilkamera och 10 minuter utomhus är tillräckligt.
        </div>

        <h2 style={S.h2}>Omslagsbilden — det kostnadsfria reklamutrymmet</h2>
        <p style={S.p}>
          Omslaget (banderollen bakom din profilbild) är outnyttjad yta på 99% av profilerna. Använd det.
        </p>
        <p style={S.p}>
          Vad det kan vara: en bild från en föreläsning du hållit, ett citat som sammanfattar din
          professionella filosofi, en bild från ditt företag eller din arbetsplats, eller en snygg
          grafik med dina kontaktuppgifter och tagline.
        </p>
        <div style={S.tip}>
          Canva har gratismallar för LinkedIn-omslag i rätt dimensioner. Det tar 10 minuter att göra ett bra.
        </div>

        <h2 style={S.h2}>Sammanfattningen — berätta din story</h2>
        <p style={S.p}>
          Här har du 2 600 tecken att berätta vem du är. De flesta lämnar den tom eller skriver en
          kort pliktskyldig text. Du har en möjlighet att sticka ut.
        </p>

        <h3 style={S.h3}>Struktur som fungerar</h3>
        {[
          { label: "Hook (2–3 meningar)", desc: 'Börja med något som fångar uppmärksamhet. En fråga, ett påstående, en kort personlig historia. Inte "Jag är en driven och engagerad person..."' },
          { label: "Vad du gör (3–5 meningar)", desc: "Konkret beskrivning av vad du jobbar med. Inte jobbtitel — utan vilka problem du löser och för vem." },
          { label: "Din resa (valfritt)", desc: "Kort om hur du hamnat där du är idag. Gör dig mänsklig. Människor kopplar med berättelser, inte CV-punkter." },
          { label: "Vad du erbjuder (3–5 meningar)", desc: "Vilken typ av samarbeten, projekt eller möjligheter är du öppen för? Var tydlig — gissar människor fel hör de aldrig av sig." },
          { label: "Avslutning med CTA", desc: 'Hur kan folk kontakta dig? "Hör av dig på [mejl] om du vill diskutera X" fungerar bättre än "Kontakta mig gärna".' },
        ].map((item) => (
          <div key={item.label} style={S.sectionCard}>
            <p style={{ fontSize: 15, fontWeight: 700, color: "#111", margin: "0 0 6px" }}>{item.label}</p>
            <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
          </div>
        ))}

        <blockquote style={S.quote}>
          Hook-exempel: "För tio år sen trodde jag att marknadsföring handlade om att skrika högst.
          Idag vet jag att det handlar om att lyssna bäst."
        </blockquote>

        <h2 style={S.h2}>Erfarenhet — resultat, inte uppgifter</h2>
        <p style={S.p}>Samma regel som för CV:t: fokusera på vad du uppnått, inte vad du gjort.</p>
        <div style={S.compRow}>
          <div style={S.compBefore}>
            <strong>Innan:</strong> "Ansvarig för företagets närvaro på sociala medier. Hanterade
            inläggskalender och besvarade kundfrågor."
          </div>
          <div style={S.compAfter}>
            <strong>Efter:</strong> "Byggde upp företagets sociala medier från noll till 25 000 följare
            på två år. Ökade engagemanget med 340%. Minskade kundtjänstärenden via chatt med 40%."
          </div>
        </div>
        <p style={S.p}>
          Siffror slår beskrivningar varje gång. Om du inte har exakta siffror — uppskatta.
        </p>

        <h2 style={S.h2}>Kompetenser — välj noga</h2>
        <p style={S.p}>
          LinkedIn låter dig lista upp till 50 kompetenser. Gör inte det. Välj 10–15 som faktiskt
          speglar vad du är bäst på. Få dina kontakter att rekommendera dina kompetenser — en
          kompetens med 20+ rekommendationer har mycket mer tyngd än en utan.
        </p>

        <h2 style={S.h2}>Rekommendationer — be om dem</h2>
        <p style={S.p}>
          Få personer ber om rekommendationer på LinkedIn. Det är det enklaste sättet att sticka ut.
          Skriv till tre personer du jobbat med och be om en kort rekommendation. Gör det enkelt för
          dem: föreslå några punkter du skulle vilja att de nämner.
        </p>
        <p style={S.p}>
          Tre starka rekommendationer från rätt personer ger mer trovärdighet än allt du själv kan skriva.
        </p>

        <h2 style={S.h2}>Aktivitet — var synlig</h2>
        <p style={S.p}>
          En tyst profil syns inte. Du behöver inte posta dagligen. Ett inlägg i veckan, eller aktivt
          kommenterande på andras inlägg, gör dig synlig i flödet. Folk bygger förtroende genom att se
          dig om och om igen.
        </p>

        <h2 style={S.h2}>Spara tid med AI</h2>
        <p style={S.p}>
          Att formulera sig proffsigt på LinkedIn — särskilt i sammanfattning och inlägg — tar tid.
          Med Textverket kan du generera utkast för LinkedIn-inlägg, profiltexter och beskrivningar
          på sekunder.
        </p>
        <div style={S.ctaBox}>
          <p style={S.ctaTitle}>Skriv din LinkedIn-sammanfattning på sekunder</p>
          <p style={S.ctaDesc}>
            Beskriv din bakgrund och vad du gör — AI:n levererar en sammanfattning du kan anpassa.
            Gratis, inga konton.
          </p>
          <a href="/verktyg" style={S.ctaBtn}>Testa gratis på Textverket →</a>
        </div>

        <p style={S.footerNote}>
          Textverket hjälper svenska småföretag och privatpersoner att skriva professionella texter med AI.{" "}
          <a href="/verktyg" style={{ color: "#6B7280" }}>Testa gratis på textverket.se.</a>
        </p>
      </article>

      <Footer />
    </div>
  );
}
