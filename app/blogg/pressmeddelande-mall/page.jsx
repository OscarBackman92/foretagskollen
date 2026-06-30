import BlogPostLayout from "../../components/BlogPostLayout";
import { blogStyles as S } from "../../lib/blog-styles";

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
    <BlogPostLayout
      metadata={metadata}
      datePublished="2026-04-21"
      category="Mallar"
      title={"Pressmeddelande — mall och guide med exempel (2026)"}
      breadcrumbLabel={"Pressmeddelande mall"}
      updated={"april 2026"}
      readTime={"7 minuter"}
    >
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
    </BlogPostLayout>
  );
}
