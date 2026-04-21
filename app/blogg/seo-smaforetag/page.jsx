export const metadata = {
  title: "SEO för småföretag — enkel guide som faktiskt fungerar (2026) — Textverket",
  description:
    "5-stegsguide till SEO för småföretag. Hitta rätt sökord, skriv innehåll som rankar, teknisk SEO och länkbygge — utan byrå och utan dyra verktyg.",
  openGraph: {
    title: "SEO för småföretag — enkel guide som faktiskt fungerar (2026)",
    description:
      "Lär dig SEO utan byrå och utan dyra verktyg. Gratis AI-verktyg på textverket.se.",
    url: "https://textverket.se/blogg/seo-smaforetag",
    siteName: "Textverket",
    locale: "sv_SE",
    type: "article",
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
  infoBox: { background: "#EFF6FF", border: "1px solid #BFDBFE", borderRadius: 10, padding: "14px 18px", fontSize: 14, color: "#1E40AF", lineHeight: 1.7, margin: "20px 0" },
  compRow: { display: "flex", flexDirection: "column", gap: 8, margin: "16px 0" },
  compBefore: { background: "#FFF5F5", border: "1px solid #FED7D7", borderRadius: 8, padding: "10px 14px", fontSize: 14, color: "#7F1D1D" },
  compAfter: { background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 8, padding: "10px 14px", fontSize: 14, color: "#14532D" },
  stepItem: { display: "flex", gap: 20, margin: "0 0 48px", alignItems: "flex-start" },
  stepNum: { background: "#1A1A1A", color: "#fff", width: 36, height: 36, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 700, flexShrink: 0, marginTop: 2 },
  listItem: { display: "flex", gap: 12, margin: "10px 0", alignItems: "flex-start" },
  bullet: { width: 6, height: 6, borderRadius: "50%", background: "#9CA3AF", flexShrink: 0, marginTop: 10 },
  timelineRow: { display: "flex", gap: 16, margin: "12px 0", alignItems: "flex-start" },
  timeBadge: { background: "#EEF2FF", color: "#4338CA", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 4, flexShrink: 0, whiteSpace: "nowrap", marginTop: 3, letterSpacing: 0.3 },
  ctaBox: { background: "linear-gradient(135deg, #111 0%, #1a2332 100%)", borderRadius: 16, padding: "32px 28px", margin: "48px 0 0", color: "#fff" },
  ctaTitle: { fontFamily: "'Instrument Serif', serif", fontSize: 24, fontWeight: 400, margin: "0 0 10px", color: "#fff" },
  ctaDesc: { fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 20px", lineHeight: 1.7 },
  ctaBtn: { display: "inline-block", background: "#fff", color: "#111", padding: "12px 28px", borderRadius: 100, fontSize: 15, fontWeight: 700, textDecoration: "none" },
  footerNote: { borderTop: "1px solid #E5E7EB", marginTop: 56, paddingTop: 24, fontSize: 14, color: "#9CA3AF", lineHeight: 1.7, fontStyle: "italic" },
  footer: { textAlign: "center", padding: "32px 28px", color: "#9CA3AF", fontSize: 13, borderTop: "1px solid #EDEDED" },
};

export default function SeoSmaforetagPage() {
  return (
    <div style={S.page}>
      <div style={S.navWrap}>
        <nav style={S.nav}>
          <a href="/" style={S.logo}>
            <span style={{ fontSize: 22 }}>✍️</span>
            <span style={{ fontWeight: 700, fontSize: 18 }}>Textverket</span>
          </a>
          <div style={S.navLinks}>
            <a href="/blogg" style={S.navLink}>Blogg</a>
            <a href="/verktyg" style={S.navCta}>Testa gratis →</a>
          </div>
        </nav>
      </div>

      <article style={S.article}>
        <div style={S.breadcrumb}>
          <a href="/" style={S.breadcrumbLink}>Hem</a>
          <span>›</span>
          <a href="/blogg" style={S.breadcrumbLink}>Blogg</a>
          <span>›</span>
          <span>SEO för småföretag</span>
        </div>

        <span style={S.categoryPill}>Guide</span>

        <h1 style={S.h1}>
          SEO för småföretag — enkel guide som faktiskt fungerar (2026)
        </h1>

        <div style={S.meta}>
          <span>Publicerad av Textverket</span>
          <span style={S.metaDot}>·</span>
          <span>Uppdaterad april 2026</span>
          <span style={S.metaDot}>·</span>
          <span>Lästid: 9 minuter</span>
        </div>

        <hr style={S.divider} />

        <p style={S.p}>
          SEO verkar krångligare än det är. Byråer älskar att prata om "latent semantic indexing",
          "schema markup" och andra begrepp som får dig att känna att du behöver anlita experter för
          att ens förstå. Det behöver du inte.
        </p>
        <p style={S.p}>
          För småföretag handlar SEO egentligen om tre saker: att ha innehåll folk söker efter, att
          sajten fungerar bra, och att andra refererar till dig. Allt annat är detaljer.
        </p>
        <p style={S.p}>
          I den här guiden får du en enkel strategi som du kan implementera själv — utan byrå och
          utan fancy verktyg.
        </p>

        <h2 style={S.h2}>Varför SEO är värt det för småföretag</h2>
        <p style={S.p}>
          En kund som hittar dig via Google söker aktivt efter det du erbjuder. De är redan halvvägs
          till köp. Jämför med någon som scrollar förbi din annons på Instagram utan att fråga efter den.
        </p>
        <p style={S.p}>
          Dessutom är organisk trafik gratis. När en artikel rankar på Google ger den dig trafik
          månad efter månad, år efter år, utan att du behöver göra något. Det är passiv inkomst i
          ren form.
        </p>
        <div style={S.tip}>
          <strong>Haken:</strong> SEO tar tid. Räkna med 3–6 månader innan du ser resultat. Men det är värt väntan.
        </div>

        <h2 style={S.h2}>5 steg till bättre SEO</h2>

        {/* Steg 1 */}
        <div style={S.stepItem}>
          <div style={S.stepNum}>1</div>
          <div style={{ flex: 1 }}>
            <h3 style={{ ...S.h3, margin: "0 0 14px" }}>Förstå vad folk faktiskt söker på</h3>
            <p style={S.p}>
              Det vanligaste misstaget i SEO är att skriva om det du vill skriva om, inte om det
              folk söker efter. En frisör kanske vill skriva om "vår filosofi kring hårvård". Men
              ingen googlar det. Folk googlar "klippning Stockholm", "blondering skada hår" och
              "billig frisör Vasastan".
            </p>
            <p style={{ ...S.p, fontWeight: 600 }}>Hitta sökord gratis:</p>
            {[
              ["Google Autocomplete", "Skriv in ett ord i Googles sökfält och se vad som dyker upp."],
              ["People Also Ask", "Visar relaterade frågor i sökresultaten. Där hittar du guldkorn."],
              ["Google Trends", "Se hur sökvolymen på ett ord har förändrats över tid."],
              ["Konkurrenter", "Kolla deras sidor — de har redan gjort research."],
              ["Dina egna kunder", "Vilka frågor får du oftast? Varje fråga är en potentiell artikel."],
            ].map(([title, desc]) => (
              <div key={title} style={S.listItem}>
                <div style={S.bullet} />
                <p style={{ ...S.p, margin: 0 }}><strong>{title}:</strong> {desc}</p>
              </div>
            ))}
            <p style={{ ...S.p, marginTop: 16 }}>
              Som småföretag ska du undvika de stora, konkurrensutsatta sökorden. Satsa istället på
              "long tail keywords" — längre, mer specifika sökord med mindre konkurrens.
            </p>
            <div style={S.compRow}>
              <div style={S.compBefore}><strong>Dåligt mål:</strong> "bokföring"</div>
              <div style={S.compAfter}><strong>Bra mål:</strong> "bokföring för enskild firma frilansare"</div>
            </div>
            <div style={S.compRow}>
              <div style={S.compBefore}><strong>Dåligt mål:</strong> "marknadsföring"</div>
              <div style={S.compAfter}><strong>Bra mål:</strong> "marknadsföring för lokala hantverkare i Malmö"</div>
            </div>
          </div>
        </div>

        {/* Steg 2 */}
        <div style={S.stepItem}>
          <div style={S.stepNum}>2</div>
          <div style={{ flex: 1 }}>
            <h3 style={{ ...S.h3, margin: "0 0 14px" }}>Skriv innehåll som svarar på frågor</h3>
            <p style={S.p}>
              Google premierar innehåll som faktiskt är hjälpsamt. Tunna, generiska artiklar rankar
              inte längre.
            </p>
            {[
              ["Längd", "Sikta på 1000–2000 ord. Kortare artiklar rankar sällan."],
              ["Struktur", "Använd rubriker (H2, H3). Folk skannar — rubrikerna gör det enkelt att hitta rätt del."],
              ["Djup", "Svara på frågan bättre än någon annan. Om bästa existerande artikel har 5 tips, skriv en med 10."],
              ["Specifikt", "Konkreta exempel, siffror, steg-för-steg. Generiska råd rankar inte."],
              ["Uppdaterad", "Google premierar färskt innehåll. Uppdatera gamla artiklar med nya datum och info."],
            ].map(([title, desc]) => (
              <div key={title} style={S.listItem}>
                <div style={S.bullet} />
                <p style={{ ...S.p, margin: 0 }}><strong>{title}:</strong> {desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Steg 3 */}
        <div style={S.stepItem}>
          <div style={S.stepNum}>3</div>
          <div style={{ flex: 1 }}>
            <h3 style={{ ...S.h3, margin: "0 0 14px" }}>Teknisk SEO (enklare än du tror)</h3>
            <p style={S.p}>Du behöver inte vara utvecklare. Fokusera på grunderna:</p>
            {[
              ["Sajten laddar snabbt", "Testa på pagespeed.web.dev. Över 80 poäng på mobil är bra."],
              ["Mobilanpassad", "Över 60% av all sökning sker på mobil. Din sajt måste fungera bra där."],
              ["HTTPS", "Sajten ska ha https:// framför URL:en. Det är säkerhet, men också en rankingfaktor."],
              ["Enkla URL:er", "/blogg/offertmejl-guide är bättre än /page?id=42."],
              ["Alt-texter på bilder", "Varje bild ska ha en beskrivande alt-text."],
              ["Metabeskrivning", "Varje sida ska ha en unik titel och beskrivning — det som syns i sökresultaten."],
              ["Webbplatskarta", "En sitemap hjälper Google att hitta alla dina sidor. Skicka in den i Google Search Console."],
            ].map(([title, desc]) => (
              <div key={title} style={S.listItem}>
                <div style={S.bullet} />
                <p style={{ ...S.p, margin: 0 }}><strong>{title}:</strong> {desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Steg 4 */}
        <div style={S.stepItem}>
          <div style={S.stepNum}>4</div>
          <div style={{ flex: 1 }}>
            <h3 style={{ ...S.h3, margin: "0 0 14px" }}>Få andra att länka till dig</h3>
            <p style={S.p}>
              Länkar från andra sajter till din är som röster. Ju fler och bättre röster, desto mer
              litar Google på dig.
            </p>
            {[
              ["Bra innehåll", "Om du skriver verkligt bra artiklar länkar folk till dem naturligt."],
              ["Gästinlägg", "Skriv ett gästinlägg på någon annans blogg mot att de länkar till din."],
              ["Lokala kataloger", "Registrera ditt företag på hitta.se, Eniro, lokala branschkataloger. Gratis länkar."],
              ["Google Företagsprofil", "Gratis och extremt viktigt för lokala företag."],
              ["Samarbeten", "Har du samarbetspartners? Be om en länk från deras sida."],
            ].map(([title, desc]) => (
              <div key={title} style={S.listItem}>
                <div style={S.bullet} />
                <p style={{ ...S.p, margin: 0 }}><strong>{title}:</strong> {desc}</p>
              </div>
            ))}
            <div style={{ ...S.tip, marginTop: 16 }}>
              <strong>Undvik:</strong> att köpa länkar, länknätverk, eller andra "genvägar". Google ser igenom det och bestraffar dig.
            </div>
          </div>
        </div>

        {/* Steg 5 */}
        <div style={S.stepItem}>
          <div style={S.stepNum}>5</div>
          <div style={{ flex: 1 }}>
            <h3 style={{ ...S.h3, margin: "0 0 14px" }}>Följ upp och justera</h3>
            <p style={S.p}>SEO är inte "gör en gång, klart". Det är en pågående process.</p>
            <p style={S.p}>
              Använd <strong>Google Search Console</strong> (gratis) för att se vilka sökord folk
              hittar dig på, vilka sidor som rankar bäst, och var det finns förbättringspotential.
            </p>
            <p style={S.p}>
              Använd <strong>Google Analytics</strong> (gratis) för att se vad besökarna faktiskt
              gör när de kommer till din sajt. Stannar de? Klickar de vidare? Konverterar de?
            </p>
            <p style={{ ...S.p, margin: 0 }}>
              Kolla statistiken varje månad. Identifiera vad som fungerar och gör mer av det.
            </p>
          </div>
        </div>

        <h2 style={S.h2}>Förväntningar — och tålamod</h2>
        <p style={S.p}>Det här är viktigt att förstå: SEO tar tid.</p>
        {[
          ["Månad 1–2", "Ingenting händer. Du publicerar innehåll, Google indexerar det gradvis."],
          ["Månad 3–6", "Första träffarna börjar komma. 10–50 besökare per dag från Google."],
          ["Månad 6–12", "Trafiken börjar växa organiskt. 100–500 besökare per dag. Bästa artiklarna rankar på sidan 1."],
          ["År 1–2", "Stadig tillväxt. Tusentals besökare per månad. SEO blir din största trafikkälla."],
        ].map(([period, desc]) => (
          <div key={period} style={S.timelineRow}>
            <div style={S.timeBadge}>{period}</div>
            <p style={{ ...S.p, margin: 0 }}>{desc}</p>
          </div>
        ))}
        <p style={{ ...S.p, marginTop: 20 }}>
          Nyckeln är att inte ge upp under de första svåra månaderna när ingenting händer. Det är
          då de flesta småföretag slutar — och varför så få lyckas med SEO.
        </p>

        <h2 style={S.h2}>Spara tid med AI</h2>
        <p style={S.p}>
          Att skriva 1500-ords artiklar regelbundet tar tid. Med Textverket kan du generera utkast
          och textavsnitt på svenska på sekunder. Perfekt att komma igång när du har skrivtorka
          eller behöver struktur för ett längre inlägg.
        </p>
        <div style={S.ctaBox}>
          <p style={S.ctaTitle}>Skapa SEO-vänliga artiklar på sekunder</p>
          <p style={S.ctaDesc}>
            Beskriv ämnet och målgruppen — AI:n levererar ett utkast på svenska du kan bygga vidare på.
            Gratis, inga konton.
          </p>
          <a href="/verktyg" style={S.ctaBtn}>Testa gratis på Textverket →</a>
        </div>

        <p style={S.footerNote}>
          Textverket hjälper svenska småföretag att skriva professionella texter med AI.{" "}
          <a href="/verktyg" style={{ color: "#6B7280" }}>Testa gratis på textverket.se.</a>
        </p>
      </article>

      <footer style={S.footer}>© 2026 Textverket · Gratis AI-verktyg för svenska företag</footer>
    </div>
  );
}
