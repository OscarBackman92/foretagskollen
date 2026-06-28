import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";
import { blogPostJsonLd } from "../../lib/structured-data";
import AdUnit from "../../components/AdUnit";

export const metadata = {
  title: "SEO för dina texter — så rankar produkttexter och blogg (2026) — Textverket",
  description:
    "För småföretag avgörs SEO mest av själva texterna, inte av teknik och byråer. Så skriver du produkttexter, hemsidetexter och blogginlägg som rankar på Google — med konkreta före/efter-exempel.",
  keywords:
    "SEO produkttexter, SEO för småföretag texter, unika produkttexter, lokal SEO text, skriva texter som rankar, duplicerat innehåll",
  alternates: {
    canonical: "/blogg/seo-smaforetag",
  },
  openGraph: {
    title: "SEO för dina texter — så rankar produkttexter och blogg (2026)",
    description:
      "SEO för småföretag handlar mest om orden på sidan. Så skriver du texter som rankar — med exempel. Gratis AI-verktyg på textverket.se.",
    url: "https://www.textverket.se/blogg/seo-smaforetag",
    siteName: "Textverket",
    locale: "sv_SE",
    type: "article",
    images: [
      {
        url: `/og?title=${encodeURIComponent("SEO för dina texter")}`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

const S = {
  page: { minHeight: "100vh", background: "transparent", fontFamily: "'Inter', sans-serif", color: "#EAEEFF" },
  navWrap: { borderBottom: "1px solid rgba(125, 140, 255, 0.16)" },
  nav: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 28px", maxWidth: 960, margin: "0 auto" },
  logo: { display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: "#EAEEFF" },
  navLinks: { display: "flex", alignItems: "center", gap: 24 },
  navLink: { fontSize: 14, fontWeight: 500, color: "#A7B1D6", textDecoration: "none" },
  navCta: { background: "linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)", color: "#fff", padding: "9px 20px", borderRadius: 100, fontSize: 14, fontWeight: 600, textDecoration: "none" },
  article: { maxWidth: 720, margin: "0 auto", padding: "52px 28px 80px" },
  breadcrumb: { fontSize: 13, color: "#7E88B5", marginBottom: 28, display: "flex", gap: 6, alignItems: "center" },
  breadcrumbLink: { color: "#7E88B5", textDecoration: "none" },
  categoryPill: { display: "inline-block", background: "rgba(129, 140, 248, 0.13)", color: "#A5B4FC", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100, marginBottom: 20, letterSpacing: 0.3, textTransform: "uppercase" },
  h1: { fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(30px, 5vw, 44px)", fontWeight: 700, lineHeight: 1.2, margin: "0 0 20px", color: "#EAEEFF" },
  meta: { fontSize: 14, color: "#7E88B5", marginBottom: 36, display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" },
  metaDot: { color: "rgba(125, 140, 255, 0.25)" },
  divider: { border: "none", borderTop: "1px solid rgba(125, 140, 255, 0.18)", margin: "0 0 40px" },
  p: { fontSize: 17, lineHeight: 1.85, color: "#C3CCE8", margin: "0 0 22px" },
  h2: { fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, color: "#EAEEFF", margin: "56px 0 20px", lineHeight: 1.3 },
  h3: { fontSize: 18, fontWeight: 700, color: "#EAEEFF", margin: "36px 0 14px", lineHeight: 1.4 },
  tip: { background: "rgba(251, 191, 36, 0.09)", border: "1px solid rgba(251, 191, 36, 0.32)", borderRadius: 10, padding: "14px 18px", fontSize: 14, color: "#FCD34D", lineHeight: 1.7, margin: "20px 0" },
  infoBox: { background: "rgba(34, 211, 238, 0.08)", border: "1px solid rgba(34, 211, 238, 0.35)", borderRadius: 10, padding: "14px 18px", fontSize: 14, color: "#7DD3FC", lineHeight: 1.7, margin: "20px 0" },
  compRow: { display: "flex", flexDirection: "column", gap: 8, margin: "16px 0" },
  compBefore: { background: "rgba(248, 113, 113, 0.09)", border: "1px solid rgba(248, 113, 113, 0.28)", borderRadius: 8, padding: "10px 14px", fontSize: 14, color: "#FCA5A5" },
  compAfter: { background: "rgba(52, 211, 153, 0.1)", border: "1px solid rgba(52, 211, 153, 0.32)", borderRadius: 8, padding: "10px 14px", fontSize: 14, color: "#6EE7B7" },
  stepItem: { display: "flex", gap: 20, margin: "0 0 48px", alignItems: "flex-start" },
  stepNum: { background: "linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)", color: "#fff", width: 36, height: 36, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 700, flexShrink: 0, marginTop: 2 },
  listItem: { display: "flex", gap: 12, margin: "10px 0", alignItems: "flex-start" },
  bullet: { width: 6, height: 6, borderRadius: "50%", background: "#7E88B5", flexShrink: 0, marginTop: 10 },
  snippet: { background: "rgba(13, 17, 36, 0.66)", border: "1px solid rgba(125, 140, 255, 0.18)", borderRadius: 10, padding: "14px 18px", margin: "16px 0", lineHeight: 1.5 },
  snippetTitle: { color: "#8AB4F8", fontSize: 18, margin: "0 0 2px", lineHeight: 1.3 },
  snippetUrl: { color: "#6EE7B7", fontSize: 13, margin: "0 0 6px" },
  snippetDesc: { color: "#A7B1D6", fontSize: 13, margin: 0, lineHeight: 1.55 },
  ctaBox: { background: "linear-gradient(135deg, rgba(49, 46, 129, 0.55) 0%, rgba(8, 11, 28, 0.9) 100%)", borderRadius: 16, padding: "32px 28px", margin: "48px 0 0", color: "#fff" },
  ctaTitle: { fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 700, margin: "0 0 10px", color: "#fff" },
  ctaDesc: { fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 20px", lineHeight: 1.7 },
  ctaBtn: { display: "inline-block", background: "rgba(13, 17, 36, 0.66)", color: "#EAEEFF", padding: "12px 28px", borderRadius: 100, fontSize: 15, fontWeight: 700, textDecoration: "none" },
  footerNote: { borderTop: "1px solid rgba(125, 140, 255, 0.18)", marginTop: 56, paddingTop: 24, fontSize: 14, color: "#7E88B5", lineHeight: 1.7, fontStyle: "italic" },
  footer: { textAlign: "center", padding: "32px 28px", color: "#7E88B5", fontSize: 13, borderTop: "1px solid rgba(125, 140, 255, 0.16)" },
};

export default function SeoSmaforetagPage() {
  return (
    <div style={S.page}>
      <JsonLd data={blogPostJsonLd(metadata, "2026-06-28")} />
      <NavBar />

      <article style={S.article}>
        <div style={S.breadcrumb}>
          <a href="/" style={S.breadcrumbLink}>Hem</a>
          <span>›</span>
          <a href="/blogg" style={S.breadcrumbLink}>Blogg</a>
          <span>›</span>
          <span>SEO för dina texter</span>
        </div>

        <span style={S.categoryPill}>Guide</span>

        <h1 style={S.h1}>
          SEO för dina texter — så rankar produkttexter, hemsidetexter och blogg
        </h1>

        <div style={S.meta}>
          <span>Publicerad av Textverket</span>
          <span style={S.metaDot}>·</span>
          <span>Uppdaterad juni 2026</span>
          <span style={S.metaDot}>·</span>
          <span>Lästid: 8 minuter</span>
        </div>

        <hr style={S.divider} />

        <p style={S.p}>
          Fråga tio småföretagare vad SEO är och nio svarar något om teknik, byråer och
          mystiska inställningar. Men för dig som driver eget avgörs det mesta av en enda
          sak: orden på dina sidor. En snabb, mobilanpassad sajt med tunna texter rankar
          inte. En enkel sajt med texter som faktiskt svarar på vad kunden söker gör det.
        </p>
        <p style={S.p}>
          Den här guiden hoppar över det tekniska och handlar om det du själv kan styra —
          hur du skriver produkttexter, tjänstesidor och blogginlägg som Google vill visa.
          Inga verktyg du måste köpa, ingen kod.
        </p>

        <h2 style={S.h2}>1. Skriv det kunden faktiskt söker — och svara högt upp</h2>
        <p style={S.p}>
          Det vanligaste textmisstaget är att skriva om det du vill berätta, inte om det
          folk söker efter. En takläggare vill skriva om "vår noggranna arbetsprocess".
          Men ingen googlar det. Folk googlar "byta tak villa kostnad", "läcker tak vad
          göra" och "takläggare Borås".
        </p>
        <p style={S.p}>
          Lyssna på dina egna kunder: vilka frågor får du om och om igen? Varje
          återkommande fråga är en sida eller ett stycke värt att skriva. Skriv in frågan
          ungefär som kunden ställer den, och ge svaret direkt — inte efter tre stycken om
          företagets historia. Både besökaren och Google belönar texter som svarar snabbt.
        </p>
        <div style={S.tip}>
          <strong>Gratis research:</strong> skriv din tjänst i Googles sökfält och läs
          förslagen som dyker upp, samt rutan "Fler frågor" (People Also Ask). Det är
          riktiga sökningar från riktiga människor — en färdig innehållslista.
        </div>

        <h2 style={S.h2}>2. Unika texter slår kopierade — varje gång</h2>
        <p style={S.p}>
          Det här är den enskilt största SEO-vinsten för e-handel och tjänsteföretag, och
          den de flesta missar. Om du klistrar in leverantörens standardbeskrivning har du
          exakt samma text som hundra andra butiker. Google väljer då sällan dig — varför
          skulle det ranka den hundraförsta kopian?
        </p>
        <p style={S.p}>
          Skriv om varje produkt- och tjänstetext med dina egna ord, riktad till din kund.
          Det behöver inte vara långt; det behöver vara ditt.
        </p>
        <div style={S.compRow}>
          <div style={S.compBefore}>
            <strong>Leverantörens text (finns överallt):</strong> "Ergonomisk kontorsstol
            med justerbart ländryggsstöd och andningsbar mesh-rygg. Gaslyft klass 4."
          </div>
          <div style={S.compAfter}>
            <strong>Din text (unik, sökbar):</strong> "Slipp ryggvärken efter långa
            arbetsdagar vid skrivbordet. Den här kontorsstolen anpassar sig efter din
            kropp — ländryggsstödet ställs in på sekunder och mesh-ryggen håller dig sval
            även under en hel hemmakontorsdag. Hållbar gaslyft som klarar daglig
            användning i åratal."
          </div>
        </div>
        <div style={S.infoBox}>
          Har du många produkter och tycker det är oöverstigligt? Det är precis det jobbet{" "}
          <a href="/verktyg/produkttext" style={{ color: "#7DD3FC", textDecoration: "underline" }}>
            produkttext-generatorn
          </a>{" "}
          är byggd för — beskriv produkten kort så får du ett unikt utkast att putsa, i
          stället för en kopia.
        </div>

        <h2 style={S.h2}>3. Lokal SEO sitter i orden</h2>
        <p style={S.p}>
          Är du beroende av kunder i ett visst område är ortnamnet en av dina starkaste
          tillgångar — och det hör hemma i texten, inte bara i sidfoten. Skriv naturligt
          om var du verkar: "Vi tar uppdrag i hela Uppsala med omnejd" säger mer till
          Google än ett ensamt "Uppsala" i kontaktrutan.
        </p>
        <p style={S.p}>
          Tänk i specifika sökningar. "Elektriker" är hopplöst att ranka på och drar
          dessutom besökare från hela landet som du ändå inte kan hjälpa. "Elektriker
          Vasastan" eller "jourelektriker Malmö helg" är både lättare att ranka på och ger
          besökare som faktiskt kan bli kunder.
        </p>
        <div style={S.tip}>
          <strong>Komplement:</strong> en gratis och korrekt ifylld Google
          Företagsprofil är ofta den största enskilda lokala SEO-faktorn för småföretag.
          Lägg en kvart på den.
        </div>

        <h2 style={S.h2}>4. Titel och beskrivning är också säljtext</h2>
        <p style={S.p}>
          Sidans titel (det blå klickbara) och metabeskrivningen (texten under) är det
          första kunden ser i sökresultatet. De påverkar både om du rankar och om någon
          faktiskt klickar. Ändå lämnar många dem tomma eller likadana på alla sidor.
        </p>
        <p style={S.p}>Skriv dem som en liten annons — specifik, med sökordet och en anledning att klicka:</p>
        <div style={S.snippet}>
          <p style={S.snippetTitle}>Takläggare i Borås — fast pris på takbyte | Tak &amp; Plåt AB</p>
          <p style={S.snippetUrl}>www.dittforetag.se › takbyte</p>
          <p style={S.snippetDesc}>
            Byta tak i Borås? Vi ger fast pris efter kostnadsfri besiktning och är klara på
            1–2 veckor. ROT-avdrag dras direkt. Begär offert idag.
          </p>
        </div>
        <p style={S.p}>
          Håll titeln under cirka 60 tecken och beskrivningen under cirka 155, annars
          klipps de av. Och gör varje sida unik — samma titel på tjugo sidor förvirrar
          både Google och kunden.
        </p>

        <h2 style={S.h2}>5. Bind ihop dina sidor med länkar</h2>
        <p style={S.p}>
          Interna länkar — länkar mellan dina egna sidor — hjälper Google förstå vad som
          hör ihop och leder besökaren vidare i stället för bort. En guide som förklarar
          hantverket bör länka till sidan som löser problemet, och tvärtom.
        </p>
        <p style={S.p}>
          Det är precis så den här sajten är byggd: guiden om{" "}
          <a href="/blogg/produktbeskrivningar-guide" style={{ color: "#7DD3FC", textDecoration: "underline" }}>
            produktbeskrivningar
          </a>{" "}
          länkar till{" "}
          <a href="/verktyg/produkttext" style={{ color: "#7DD3FC", textDecoration: "underline" }}>
            produkttext-verktyget
          </a>, och guiden om{" "}
          <a href="/blogg/betalningspaminnelse-mall" style={{ color: "#7DD3FC", textDecoration: "underline" }}>
            betalningspåminnelser
          </a>{" "}
          till{" "}
          <a href="/verktyg/fakturatext" style={{ color: "#7DD3FC", textDecoration: "underline" }}>
            fakturatext-verktyget
          </a>. Använd länktext som beskriver vad som väntar ("läs guiden om
          offertmejl"), inte "klicka här".
        </p>

        <h2 style={S.h2}>6. AI-texter rankar — om du använder dem rätt</h2>
        <p style={S.p}>
          Google bestraffar inte AI-text i sig. Det bestraffar tunt, generiskt innehåll
          som inte tillför något — oavsett vem som skrivit det. Efter de senaste
          kärnuppdateringarna är det viktigare än någonsin att texten visar verklig
          erfarenhet och hjälper läsaren på riktigt.
        </p>
        <p style={S.p}>
          Använd därför AI som utkast, inte som slutprodukt. Ett bra arbetssätt:
        </p>
        {[
          ["Låt verktyget ge dig strukturen och första utkastet", "Det sparar den tomma-sidan-ångesten och ger dig något att jobba med."],
          ["Lägg till det bara du vet", "Ett verkligt kundexempel, en siffra från din vardag, ett misstag du sett andra göra. Det är det AI inte kan hitta på — och det Google premierar."],
          ["Stryk allt som kunde stått på vilken sajt som helst", "Tomma övergångsmeningar och självklarheter sänker både läsupplevelsen och rankingen."],
        ].map(([title, desc]) => (
          <div key={title} style={S.listItem}>
            <div style={S.bullet} />
            <p style={{ ...S.p, margin: 0 }}><strong>{title}:</strong> {desc}</p>
          </div>
        ))}
        <div style={S.infoBox}>
          <strong>Färre men djupare slår fler men tunnare.</strong> Tio riktigt bra sidor
          som var och en svarar fullständigt på en sökning rankar bättre än femtio tunna.
          Lägg tiden på att göra varje sida värd att läsa, inte på att fylla bloggen.
        </div>

        <h2 style={S.h2}>Förväntningar — och tålamod</h2>
        <p style={S.p}>
          En sak till, för att slippa besvikelse: SEO tar tid. Räkna med 3–6 månader innan
          en ny text börjar synas, eftersom Google behöver hitta, indexera och bygga
          förtroende för den. Men en text som väl rankar fortsätter ge besökare månad efter
          månad utan att du gör något mer. Det är det som gör jobbet värt väntan.
        </p>

        <div style={S.ctaBox}>
          <p style={S.ctaTitle}>Skriv unika texter som rankar — på sekunder</p>
          <p style={S.ctaDesc}>
            Slipp leverantörens kopierade beskrivningar. Textverket genererar unika
            produkttexter, hemsidetexter och blogginlägg på svenska som du kan göra till
            dina. Gratis, inga konton.
          </p>
          <a href="/verktyg/produkttext" style={S.ctaBtn}>Öppna Produkttext-generatorn →</a>
        </div>

        <p style={S.footerNote}>
          Textverket hjälper svenska småföretag att skriva professionella texter med AI.{" "}
          <a href="/verktyg" style={{ color: "#949EC9" }}>Testa gratis på textverket.se.</a>
        </p>
      </article>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 28px 40px" }}>
        <AdUnit slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG} />
      </div>

      <Footer />
    </div>
  );
}
