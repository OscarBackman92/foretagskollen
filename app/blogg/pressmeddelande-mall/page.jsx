import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";
import { blogPostJsonLd } from "../../lib/structured-data";
import AdUnit from "../../components/AdUnit";

export const metadata = {
  title: "Pressmeddelande — mall och guide med exempel (2026) — Textverket",
  description:
    "Färdig mall för pressmeddelande med komplett exempel. Lär dig pyramidstrukturen, vad som är en nyhet, och 10 tips som gör skillnad.",
  keywords: "pressmeddelande mall, pressmeddelande exempel, skriva pressrelease, PR guide Sverige, nyhetstext mall",
  alternates: {
    canonical: "/blogg/pressmeddelande-mall",
  },
  openGraph: {
    title: "Pressmeddelande — mall och guide med exempel (2026)",
    description:
      "Färdig mall och komplett exempel för pressmeddelande. Gratis AI-verktyg på textverket.se.",
    url: "https://www.textverket.se/blogg/pressmeddelande-mall",
    siteName: "Textverket",
    locale: "sv_SE",
    type: "article",
    images: [
      {
        url: `/og?title=${encodeURIComponent("Pressmeddelande — mall och guide med exempel")}`,
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
  quote: { margin: "20px 0", padding: "16px 20px", background: "rgba(255, 255, 255, 0.04)", borderLeft: "3px solid rgba(125, 140, 255, 0.28)", borderRadius: "0 8px 8px 0", fontSize: 15, color: "#B6C0DE", lineHeight: 1.8, fontStyle: "italic" },
  compRow: { display: "flex", flexDirection: "column", gap: 8, margin: "16px 0" },
  compBefore: { background: "rgba(248, 113, 113, 0.09)", border: "1px solid rgba(248, 113, 113, 0.28)", borderRadius: 8, padding: "10px 14px", fontSize: 14, color: "#FCA5A5" },
  compAfter: { background: "rgba(52, 211, 153, 0.1)", border: "1px solid rgba(52, 211, 153, 0.32)", borderRadius: 8, padding: "10px 14px", fontSize: 14, color: "#6EE7B7" },
  exampleBlock: { background: "rgba(13, 17, 36, 0.66)", border: "1px solid rgba(125, 140, 255, 0.18)", borderRadius: 12, overflow: "hidden", margin: "24px 0", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" },
  exampleHeader: { background: "rgba(255, 255, 255, 0.04)", padding: "12px 20px", borderBottom: "1px solid rgba(125, 140, 255, 0.18)", fontSize: 12, color: "#8893BE", fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase" },
  exampleBody: { padding: "20px 24px", fontSize: 15, lineHeight: 1.85, color: "#C3CCE8" },
  listItem: { display: "flex", gap: 16, margin: "16px 0", alignItems: "flex-start" },
  numBadge: { background: "linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)", color: "#fff", width: 26, height: 26, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0, marginTop: 2 },
  ctaBox: { background: "linear-gradient(135deg, rgba(49, 46, 129, 0.55) 0%, rgba(8, 11, 28, 0.9) 100%)", borderRadius: 16, padding: "32px 28px", margin: "48px 0 0", color: "#fff" },
  ctaTitle: { fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 700, margin: "0 0 10px", color: "#fff" },
  ctaDesc: { fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 20px", lineHeight: 1.7 },
  ctaBtn: { display: "inline-block", background: "rgba(13, 17, 36, 0.66)", color: "#EAEEFF", padding: "12px 28px", borderRadius: 100, fontSize: 15, fontWeight: 700, textDecoration: "none" },
  footerNote: { borderTop: "1px solid rgba(125, 140, 255, 0.18)", marginTop: 56, paddingTop: 24, fontSize: 14, color: "#7E88B5", lineHeight: 1.7, fontStyle: "italic" },
  footer: { textAlign: "center", padding: "32px 28px", color: "#7E88B5", fontSize: 13, borderTop: "1px solid rgba(125, 140, 255, 0.16)" },
};

const TIPS = [
  "En sida, max två. Journalister är stressade. Respektera deras tid.",
  'Skriv i tredje person. "Företaget meddelar..." inte "Vi meddelar...". Gör det enklare för journalisten att klippa och klistra in text.',
  "Lägg till bilder. Ett pressmeddelande utan högupplösta bilder används sällan. Bifoga eller länka minst 2–3 bilder i god kvalitet.",
  '"Revolutionerande", "banbrytande", "unikt" — journalister filtrerar bort dessa ord. Beskriv istället vad som faktiskt är nytt.',
  "Tänk lokalt. Lokaltidningar publicerar gärna pressmeddelanden om företag i sitt område. Din lokala morgontidning kan vara din bästa kanal.",
  "Skicka direkt till rätt journalist. Kolla vem som skriver om din bransch och maila dem personligen.",
  "Skicka på tisdag–torsdag, förmiddag. Måndagar drunknar folk i mejl. Fredagseftermiddagar läser ingen något.",
  "Följ upp — en gång. Ett uppföljningsmejl efter 3–5 dagar är okej. Mer än så blir irriterande.",
  "Lägg upp det på din egen hemsida. Många sökmotorer indexerar pressmeddelanden — bra för SEO.",
  "Var tillgänglig efter skickat. Om en journalist ringer direkt efter — svara. Chansen försvinner på en timme.",
];

export default function PressmeddelandeMallPage() {
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
          <span>Pressmeddelande mall</span>
        </div>

        <span style={S.categoryPill}>Mallar</span>

        <h1 style={S.h1}>
          Pressmeddelande — mall och guide med exempel (2026)
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
          Ett bra pressmeddelande kan ge gratis publicitet värd tiotusentals kronor. Ett dåligt
          pressmeddelande hamnar i papperskorgen efter tre sekunder.
        </p>
        <p style={S.p}>
          Skillnaden handlar sällan om nyheten i sig — utan om hur du presenterar den. I den här
          guiden får du en färdig mall, exempel och tips på hur du skriver ett pressmeddelande som
          faktiskt läses.
        </p>

        <h2 style={S.h2}>Vad är ett pressmeddelande?</h2>
        <p style={S.p}>
          Ett pressmeddelande är ett dokument som du skickar till journalister när du har något
          nyhetsvärt att berätta. Det kan vara en produktlansering, en rekrytering, ett samarbete,
          en milstolpe, en rapport eller ett event.
        </p>
        <p style={S.p}>
          Syftet är att göra journalistens jobb så enkelt som möjligt. Ju mer färdigpaketerad din
          nyhet är, desto större chans att någon publicerar den.
        </p>

        <h2 style={S.h2}>Det måste finnas en nyhet</h2>
        <p style={S.p}>Det vanligaste misstaget: företag skickar pressmeddelanden om saker som inte är nyheter.</p>
        <div style={S.compRow}>
          <div style={S.compBefore}>"Företag AB lanserar ny hemsida" — inte en nyhet.</div>
          <div style={S.compBefore}>"Företag AB fyller 15 år" — inte en nyhet.</div>
          <div style={S.compBefore}>"Företag AB är nu på Instagram" — inte en nyhet.</div>
        </div>
        <p style={S.p}>
          En riktig nyhet har minst ett av dessa element: det är första gången något händer, det är
          störst i sitt slag, det har oväntade konsekvenser, det berör många människor, eller det
          bryter mot förväntningar.
        </p>
        <div style={S.compRow}>
          <div style={S.compAfter}>"Nystartad göteborgsföretaget blir första svenska AI-leverantör till kommunal sektor" — nyhet.</div>
          <div style={S.compAfter}>"Lokal bagare tvingas stänga efter 50 år — ingen vill ta över" — nyhet.</div>
        </div>
        <div style={S.tip}>
          Om du inte kan förklara varför din nyhet är intressant för någon utanför ditt eget företag — har du ingen nyhet.
        </div>

        <h2 style={S.h2}>Strukturen — pyramiden</h2>
        <p style={S.p}>
          Ett pressmeddelande följer "den omvända pyramiden": viktigaste först, detaljer sen.
          Journalister läser inte nedifrån och upp. Om de tappar intresset i andra stycket läser
          de inte resten.
        </p>
        {[
          { title: "Rubrik", desc: "Kort, konkret, informativ. Ingen ordvits, inga adjektiv. Journalisten ska kunna gissa hela nyheten från rubriken." },
          { title: "Ingress", desc: "Första stycket. 2–3 meningar som sammanfattar det viktigaste: vem, vad, när, var, varför. Om journalisten bara läser ingressen ska de ändå ha hela storyn." },
          { title: "Bakgrund", desc: "Nästa 2–3 stycken. Ge kontext. Varför händer det här? Vad betyder det? Vilka är de involverade?" },
          { title: "Citat", desc: 'Inkludera minst ett citat från en nyckelperson. Gör det inte stelt. Citat som "Vi är otroligt glada över denna spännande möjlighet" använder ingen.' },
          { title: "Faktarutor", desc: "Om det finns tekniska detaljer, siffror eller bakgrundsinfo — lägg dem längst ner. Gör det enkelt för journalisten att hitta fakta." },
          { title: "Kontaktuppgifter", desc: "Sist: namn, telefon, mejl till en person som kan svara på frågor. Inte en generell info-adress." },
        ].map((item) => (
          <div key={item.title} style={{ marginBottom: 16 }}>
            <h3 style={{ ...S.h3, margin: "24px 0 8px" }}>{item.title}</h3>
            <p style={{ ...S.p, margin: 0 }}>{item.desc}</p>
          </div>
        ))}

        <div style={S.compRow}>
          <div style={S.compBefore}><strong>Dålig rubrik:</strong> "En spännande nyhet från Företaget"</div>
          <div style={S.compAfter}><strong>Bra rubrik:</strong> "Göteborgsföretag säkrar 15 miljoner i investering för global expansion"</div>
        </div>

        <h2 style={S.h2}>Komplett exempel</h2>

        <div style={S.exampleBlock}>
          <div style={S.exampleHeader}>Pressmeddelande — för omedelbar publicering</div>
          <div style={S.exampleBody}>
            <p style={{ fontWeight: 700, margin: "0 0 16px", fontSize: 16 }}>
              Göteborgsföretag säkrar 15 miljoner i investering — ska hjälpa mindre företag att använda AI
            </p>
            <p style={{ margin: "0 0 14px" }}>
              GÖTEBORG, 14 april 2026 — AI-startupen Textverket AB har säkrat en investering på 15 miljoner
              kronor för att bygga ut sin tjänst för svenska småföretag. Investeringen leds av Nordic Venture
              Partners med deltagande från flera branschprofiler.
            </p>
            <p style={{ margin: "0 0 14px" }}>
              Textverket lanserade i januari 2026 en gratis AI-tjänst som hjälper småföretag skriva
              professionella texter på svenska. Sedan lanseringen har tjänsten använts av över 10 000 företag
              runtom i landet.
            </p>
            <p style={{ margin: "0 0 14px", fontStyle: "italic", borderLeft: "3px solid rgba(125, 140, 255, 0.28)", paddingLeft: 16 }}>
              "Det vi sett är att AI-revolutionen har gått förbi majoriteten av svenska småföretag. De flesta
              verktyg är på engelska, komplicerade att komma igång med och ofta dyra. Vi vill ändra på det",
              säger Oscar Backman, grundare av Textverket.
            </p>
            <p style={{ margin: "0 0 14px" }}>
              Investeringen ska användas för att bygga ut produkten med fler textverktyg, anställa fler
              utvecklare och inleda marknadsföring mot målgruppen egenföretagare och mindre bolag.
            </p>
            <div style={{ borderTop: "1px solid rgba(125, 140, 255, 0.18)", marginTop: 16, paddingTop: 14 }}>
              <p style={{ margin: "0 0 6px", fontWeight: 700, fontSize: 14 }}>Om Textverket</p>
              <p style={{ margin: "0 0 14px", fontSize: 14, color: "#949EC9" }}>
                Textverket AB grundades 2026 i Göteborg och erbjuder AI-baserade skrivverktyg för svenska småföretag.
              </p>
              <p style={{ margin: 0, fontWeight: 700, fontSize: 14 }}>Kontakt</p>
              <p style={{ margin: "4px 0 0", fontSize: 14, color: "#949EC9" }}>
                Oscar Backman, VD · oscar@textverket.se · 070-123 45 67
              </p>
            </div>
          </div>
        </div>

        <h2 style={S.h2}>10 tips som gör skillnad</h2>
        {TIPS.map((tip, i) => (
          <div key={i} style={S.listItem}>
            <div style={S.numBadge}>{i + 1}</div>
            <p style={{ ...S.p, margin: 0 }}>{tip}</p>
          </div>
        ))}

        <h2 style={S.h2}>När ska du inte skicka pressmeddelande?</h2>
        <p style={S.p}>
          Om du är tveksam om din nyhet är intressant — skicka inte. Det är bättre att spara krutet
          till en riktig nyhet än att bränna broar genom att skicka trivialiteter.
        </p>
        <p style={S.p}>
          Tecken på att du bör vänta: du hittar inget unikt att säga om nyheten, du har ingen
          konkret siffra eller resultat att visa, nyheten berör bara ditt företag internt.
        </p>

        <h2 style={S.h2}>Spara tid med AI</h2>
        <p style={S.p}>
          Att skriva ett pressmeddelande som varken låter stelt eller säljigt är svårt. Med
          Textverket kan du generera ett utkast på svenska på sekunder. Beskriv din nyhet så skapar
          AI:n en första version du kan finslipa.
        </p>
        <div style={S.ctaBox}>
          <p style={S.ctaTitle}>Skriv ditt pressmeddelande på sekunder</p>
          <p style={S.ctaDesc}>
            Beskriv din nyhet — AI:n levererar ett utkast i rätt struktur. Gratis, inga konton.
          </p>
          <a href="/verktyg" style={S.ctaBtn}>Testa gratis på Textverket →</a>
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
