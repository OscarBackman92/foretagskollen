export const metadata = {
  title: "Så skriver du ett professionellt offertmejl (2026) — Textverket",
  description:
    "Komplett guide till professionella offertmejl med konkreta exempel, 6-stegs struktur och de 5 vanligaste misstagen att undvika.",
  openGraph: {
    title: "Så skriver du ett professionellt offertmejl — komplett guide (2026)",
    description:
      "Komplett guide med exempel, struktur och tips. Gratis AI-verktyg på textverket.se.",
    url: "https://textverket.se/blogg/offertmejl-guide",
    siteName: "Textverket",
    locale: "sv_SE",
    type: "article",
  },
};

const S = {
  page: {
    minHeight: "100vh",
    background: "#FAFAF9",
    fontFamily: "'DM Sans', sans-serif",
    color: "#1A1A1A",
  },
  navWrap: { borderBottom: "1px solid #EDEDED" },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 28px",
    maxWidth: 960,
    margin: "0 auto",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    textDecoration: "none",
    color: "#1A1A1A",
  },
  navLinks: { display: "flex", alignItems: "center", gap: 24 },
  navLink: {
    fontSize: 14,
    fontWeight: 500,
    color: "#555",
    textDecoration: "none",
  },
  navCta: {
    background: "#1A1A1A",
    color: "#fff",
    padding: "9px 20px",
    borderRadius: 100,
    fontSize: 14,
    fontWeight: 600,
    textDecoration: "none",
  },
  article: {
    maxWidth: 720,
    margin: "0 auto",
    padding: "52px 28px 80px",
  },
  breadcrumb: {
    fontSize: 13,
    color: "#9CA3AF",
    marginBottom: 28,
    display: "flex",
    gap: 6,
    alignItems: "center",
  },
  breadcrumbLink: { color: "#9CA3AF", textDecoration: "none" },
  categoryPill: {
    display: "inline-block",
    background: "#EEF2FF",
    color: "#4338CA",
    fontSize: 12,
    fontWeight: 600,
    padding: "4px 12px",
    borderRadius: 100,
    marginBottom: 20,
    letterSpacing: 0.3,
    textTransform: "uppercase",
  },
  h1: {
    fontFamily: "'Instrument Serif', serif",
    fontSize: "clamp(30px, 5vw, 44px)",
    fontWeight: 400,
    lineHeight: 1.2,
    margin: "0 0 20px",
    color: "#111",
  },
  meta: {
    fontSize: 14,
    color: "#9CA3AF",
    marginBottom: 36,
    display: "flex",
    flexWrap: "wrap",
    gap: 6,
    alignItems: "center",
  },
  metaDot: { color: "#D1D5DB" },
  divider: {
    border: "none",
    borderTop: "1px solid #E5E7EB",
    margin: "0 0 40px",
  },
  p: {
    fontSize: 17,
    lineHeight: 1.85,
    color: "#374151",
    margin: "0 0 22px",
  },
  h2: {
    fontFamily: "'Instrument Serif', serif",
    fontSize: 28,
    fontWeight: 400,
    color: "#111",
    margin: "56px 0 20px",
    lineHeight: 1.3,
  },
  h3: {
    fontSize: 18,
    fontWeight: 700,
    color: "#1A1A1A",
    margin: "36px 0 14px",
    lineHeight: 1.4,
  },
  tip: {
    background: "#FFFBEB",
    border: "1px solid #FDE68A",
    borderRadius: 10,
    padding: "14px 18px",
    fontSize: 14,
    color: "#92400E",
    lineHeight: 1.7,
    margin: "20px 0",
  },
  quote: {
    margin: "20px 0",
    padding: "16px 20px",
    background: "#F8FAFC",
    borderLeft: "3px solid #CBD5E0",
    borderRadius: "0 8px 8px 0",
    fontSize: 15,
    color: "#4A5568",
    lineHeight: 1.8,
    fontStyle: "italic",
  },
  emailBlock: {
    background: "#fff",
    border: "1px solid #E2E8F0",
    borderRadius: 12,
    overflow: "hidden",
    margin: "28px 0",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
  },
  emailHeader: {
    background: "#F7FAFC",
    padding: "12px 20px",
    borderBottom: "1px solid #E2E8F0",
    fontSize: 13,
    color: "#4A5568",
    lineHeight: 1.6,
  },
  emailBody: {
    padding: "24px 20px",
    fontSize: 15,
    lineHeight: 1.85,
    color: "#374151",
  },
  emailList: {
    margin: "12px 0 12px 20px",
    padding: 0,
    fontSize: 15,
    lineHeight: 1.85,
    color: "#374151",
  },
  emailSignature: {
    borderTop: "1px solid #E2E8F0",
    marginTop: 16,
    paddingTop: 12,
    color: "#6B7280",
    fontSize: 14,
    lineHeight: 1.7,
  },
  mistakeItem: {
    display: "flex",
    gap: 16,
    margin: "24px 0",
    alignItems: "flex-start",
  },
  mistakeNum: {
    background: "#1A1A1A",
    color: "#fff",
    width: 28,
    height: 28,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
    fontWeight: 700,
    flexShrink: 0,
    marginTop: 2,
  },
  ctaBox: {
    background: "linear-gradient(135deg, #111 0%, #1a2332 100%)",
    borderRadius: 16,
    padding: "32px 28px",
    margin: "48px 0 0",
    color: "#fff",
  },
  ctaTitle: {
    fontFamily: "'Instrument Serif', serif",
    fontSize: 24,
    fontWeight: 400,
    margin: "0 0 10px",
    color: "#fff",
  },
  ctaDesc: {
    fontSize: 15,
    color: "rgba(255,255,255,0.7)",
    margin: "0 0 20px",
    lineHeight: 1.7,
  },
  ctaBtn: {
    display: "inline-block",
    background: "#fff",
    color: "#111",
    padding: "12px 28px",
    borderRadius: 100,
    fontSize: 15,
    fontWeight: 700,
    textDecoration: "none",
  },
  footerNote: {
    borderTop: "1px solid #E5E7EB",
    marginTop: 56,
    paddingTop: 24,
    fontSize: 14,
    color: "#9CA3AF",
    lineHeight: 1.7,
    fontStyle: "italic",
  },
  footer: {
    textAlign: "center",
    padding: "32px 28px",
    color: "#9CA3AF",
    fontSize: 13,
    borderTop: "1px solid #EDEDED",
  },
};

function Comparison({ items }) {
  const theme = {
    Svagt: {
      bg: "#FFF5F5",
      border: "#FED7D7",
      pill: { background: "#C53030", color: "#fff" },
    },
    Bättre: {
      bg: "#FFFBEB",
      border: "#FDE68A",
      pill: { background: "#D97706", color: "#fff" },
    },
    Bäst: {
      bg: "#F0FDF4",
      border: "#BBF7D0",
      pill: { background: "#15803D", color: "#fff" },
    },
  };

  return (
    <div style={{ margin: "20px 0", display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map(({ label, text }) => {
        const t = theme[label] || theme["Bättre"];
        return (
          <div
            key={label}
            style={{
              background: t.bg,
              border: `1px solid ${t.border}`,
              borderRadius: 10,
              padding: "12px 16px",
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
            }}
          >
            <span
              style={{
                ...t.pill,
                fontSize: 11,
                fontWeight: 700,
                padding: "2px 9px",
                borderRadius: 4,
                flexShrink: 0,
                marginTop: 3,
                letterSpacing: 0.5,
                textTransform: "uppercase",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {label}
            </span>
            <span style={{ fontSize: 15, color: "#374151", lineHeight: 1.7 }}>
              {text}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default function OffertmejlGuide() {
  return (
    <div style={S.page}>
      {/* Nav */}
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

      {/* Article */}
      <article style={S.article}>
        {/* Breadcrumb */}
        <div style={S.breadcrumb}>
          <a href="/" style={S.breadcrumbLink}>Hem</a>
          <span>›</span>
          <a href="/blogg" style={S.breadcrumbLink}>Blogg</a>
          <span>›</span>
          <span>Offertmejl-guide</span>
        </div>

        {/* Category */}
        <span style={S.categoryPill}>Guide</span>

        {/* Title */}
        <h1 style={S.h1}>
          Så skriver du ett professionellt offertmejl — komplett guide med
          exempel (2026)
        </h1>

        {/* Meta */}
        <div style={S.meta}>
          <span>Publicerad av Textverket</span>
          <span style={S.metaDot}>·</span>
          <span>Uppdaterad april 2026</span>
          <span style={S.metaDot}>·</span>
          <span>Lästid: 8 minuter</span>
        </div>

        <hr style={S.divider} />

        {/* Intro */}
        <p style={S.p}>
          Att skriva offertmejl är en av de vanligaste — och viktigaste —
          uppgifterna för dig som driver småföretag. Ett bra offertmejl kan vara
          skillnaden mellan att vinna eller förlora en affär. Ändå är det något
          de flesta företagare aldrig fått lära sig.
        </p>
        <p style={S.p}>
          I den här guiden går vi igenom exakt hur du skriver ett offertmejl som
          får kunden att säga ja. Du får konkreta exempel, vanliga misstag att
          undvika, och en enkel struktur du kan använda varje gång.
        </p>

        {/* Sektion 1 */}
        <h2 style={S.h2}>Vad är ett offertmejl?</h2>
        <p style={S.p}>
          Ett offertmejl är helt enkelt ett mejl där du presenterar ditt
          erbjudande till en potentiell kund. Det kan vara allt från en IT-tjänst
          till ett hantverksuppdrag. Mejlet ska ge kunden tillräcklig information
          för att kunna ta ett beslut — utan att vara överväldigande.
        </p>
        <p style={S.p}>
          Skillnaden mellan ett offertmejl och en formell offert (som
          PDF-bilaga) är att mejlet fungerar som en personlig introduktion. Det
          sätter tonen för affärsrelationen och ger kunden en anledning att öppna
          din bifogade offert.
        </p>

        {/* Sektion 2 */}
        <h2 style={S.h2}>Struktur: 6 delar i ett bra offertmejl</h2>

        <h3 style={S.h3}>1. Ämnesrad som sticker ut</h3>
        <p style={S.p}>
          Ämnesraden avgör om kunden ens öppnar ditt mejl. Undvik generiska
          rader som "Offert" eller "Prisförslag".
        </p>
        <Comparison
          items={[
            { label: "Svagt", text: '"Offert"' },
            {
              label: "Bättre",
              text: '"Offert: Webbplats för Anderssons Bygg — leverans v.22"',
            },
            {
              label: "Bäst",
              text: '"Erik — här är förslaget på er nya webbplats"',
            },
          ]}
        />
        <div style={S.tip}>
          <strong>Tips:</strong> Använd kundens namn eller företagsnamn i
          ämnesraden. Det känns personligt och ökar öppningsfrekvensen markant.
        </div>

        <h3 style={S.h3}>2. Personlig inledning</h3>
        <p style={S.p}>Börja inte med dig själv. Börja med kunden och deras behov.</p>
        <Comparison
          items={[
            {
              label: "Svagt",
              text: '"Hej, vi på Webbyrån AB vill härmed lämna en offert..."',
            },
            {
              label: "Bättre",
              text: '"Hej Erik! Tack för ett bra samtal igår. Jag har nu satt ihop ett förslag utifrån det vi diskuterade kring er nya webbplats."',
            },
          ]}
        />
        <p style={S.p}>
          Hänvisa till ett tidigare samtal, möte eller specifik förfrågan. Det
          visar att du lyssnat och att offerten är skräddarsydd — inte en
          standardmall.
        </p>

        <h3 style={S.h3}>3. Sammanfatta kundens behov</h3>
        <p style={S.p}>
          Innan du presenterar din lösning, visa att du förstått problemet. Det
          bygger förtroende.
        </p>
        <blockquote style={S.quote}>
          "Som jag förstår det behöver ni en ny webbplats som gör det enklare
          för era kunder att boka tjänster online. Ni vill också kunna uppdatera
          innehållet själva utan att behöva kontakta en byrå varje gång."
        </blockquote>
        <p style={S.p}>
          Det här steget är kraftfullt. De flesta konkurrenter hoppar direkt
          till pris. Du visar istället att du faktiskt bryr dig om att lösa
          kundens problem.
        </p>

        <h3 style={S.h3}>4. Presentera din lösning</h3>
        <p style={S.p}>
          Beskriv vad du erbjuder — konkret och tydligt. Undvik jargong och
          fokusera på nyttan för kunden.
        </p>
        <blockquote style={S.quote}>
          "Jag föreslår en WordPress-baserad webbplats med bokningssystem,
          mobilanpassad design och ett enkelt admin-gränssnitt där ni själva kan
          redigera texter och bilder. Ni slipper alltså kontakta oss för
          småändringar."
        </blockquote>
        <p style={S.p}>
          Lyft fram det som skiljer dig från konkurrenterna. Vad får kunden som
          de inte får någon annanstans?
        </p>

        <h3 style={S.h3}>5. Pris och villkor — tydligt och transparent</h3>
        <p style={S.p}>
          Var alltid tydlig med pris. Oklara priser skapar osäkerhet, och
          osäkerhet dödar affärer.
        </p>
        <blockquote style={S.quote}>
          "Totalpris: 35 000 kr exkl. moms. Det inkluderar design, utveckling,
          innehållsmigrering och en timmes utbildning. Betalning: 50% vid start,
          50% vid leverans. Leveranstid: 4 veckor från godkänd offert."
        </blockquote>
        <p style={S.p}>
          Om det finns tillval, lista dem separat. Kunden vill se exakt vad
          som ingår i grundpriset.
        </p>

        <h3 style={S.h3}>6. Tydlig avslutning med nästa steg</h3>
        <p style={S.p}>
          Avsluta alltid med en specifik uppmaning. "Hör av dig om du har
          frågor" är för svagt.
        </p>
        <Comparison
          items={[
            {
              label: "Svagt",
              text: '"Hör av dig om du har några frågor."',
            },
            {
              label: "Bättre",
              text: '"Offerten gäller till och med 30 april. Vill du gå vidare är det bara att svara på detta mejl så bokar vi in ett uppstartsmöte."',
            },
            {
              label: "Bäst",
              text: '"Passar det att jag ringer dig på torsdag förmiddag för att gå igenom förslaget?"',
            },
          ]}
        />
        <p style={S.p}>
          En tydlig deadline skapar urgency. Ett föreslaget uppföljningssamtal
          visar engagemang.
        </p>

        {/* Komplett exempel */}
        <h2 style={S.h2}>Komplett exempel: Offertmejl för en IT-tjänst</h2>

        <div style={S.emailBlock}>
          <div style={S.emailHeader}>
            <strong>Ämne:</strong> Lisa — förslag på nytt ärendehanteringssystem
            för Solna Fastigheter
          </div>
          <div style={S.emailBody}>
            <p style={{ margin: "0 0 14px" }}>Hej Lisa!</p>
            <p style={{ margin: "0 0 14px" }}>
              Tack för mötet förra tisdagen — det var väldigt givande att höra
              om era utmaningar med det nuvarande systemet.
            </p>
            <p style={{ margin: "0 0 14px" }}>
              Som vi diskuterade behöver ni ett ärendehanteringssystem som
              klarar av att hantera felanmälningar från hyresgäster, fördela
              ärenden till rätt tekniker och ge er som förvaltare en tydlig
              överblick i realtid.
            </p>
            <p style={{ margin: "0 0 10px" }}>
              Mitt förslag är att vi implementerar Freshdesk med en anpassad
              konfiguration för fastighetsförvaltning. Det innebär:
            </p>
            <ul style={S.emailList}>
              <li>
                En kundportal där hyresgäster anmäler ärenden direkt
              </li>
              <li>
                Automatisk fördelning baserat på ärendetyp och fastighet
              </li>
              <li>
                Dashboard med statusöverblick för alla pågående ärenden
              </li>
              <li>Integration med ert befintliga mejlsystem</li>
            </ul>
            <p style={{ margin: "14px 0" }}>
              <strong>Totalpris: 28 000 kr exkl. moms</strong> (engångskostnad
              för uppsättning och konfiguration). Löpande licenskostnad: 890
              kr/mån för er nuvarande teamstorlek. Leveranstid: 3 veckor
              inklusive utbildning för ert team.
            </p>
            <p style={{ margin: "0 0 14px" }}>
              Offerten gäller till och med 15 maj 2026.
            </p>
            <p style={{ margin: "0 0 14px" }}>
              Jag föreslår att vi tar ett kort samtal på torsdag eller fredag
              denna vecka för att gå igenom eventuella frågor. Vilken tid passar
              dig?
            </p>
            <div style={S.emailSignature}>
              Med vänliga hälsningar,
              <br />
              [Ditt namn]
              <br />
              [Ditt företag] · [Telefon]
            </div>
          </div>
        </div>

        {/* Misstag */}
        <h2 style={S.h2}>5 vanliga misstag att undvika</h2>

        {[
          {
            title: "Du pratar om dig själv istället för kunden.",
            body: '"Vi har 15 års erfarenhet och har levererat över 200 projekt..." — kunden bryr sig om sin egen situation, inte din historik. Väv in din erfarenhet som bevis, inte som inledning.',
          },
          {
            title: "Du är otydlig med priset.",
            body: '"Priset beror på..." utan att ge en uppskattning gör kunden osäker. Ge alltid åtminstone en prisram, även om det slutgiltiga priset kan justeras.',
          },
          {
            title: "Du skickar bara en PDF utan personligt mejl.",
            body: "En offert som bifogad fil utan ett genomtänkt mejl hamnar lätt i papperskorgen. Mejlet är din sälj-pitch.",
          },
          {
            title: "Du glömmer deadline.",
            body: "Utan en giltighetstid kan kunden vänta hur länge som helst. Sätt alltid en deadline — det skapar urgency utan att vara påträngande.",
          },
          {
            title: "Du följer inte upp.",
            body: "Skicka en påminnelse 3–5 dagar efter att du skickat offerten. De flesta affärer vinns i uppföljningen, inte i det första mejlet.",
          },
        ].map((item, i) => (
          <div key={i} style={S.mistakeItem}>
            <div style={S.mistakeNum}>{i + 1}</div>
            <div>
              <p style={{ ...S.p, margin: "0 0 6px" }}>
                <strong>{item.title}</strong>
              </p>
              <p style={{ ...S.p, margin: 0 }}>{item.body}</p>
            </div>
          </div>
        ))}

        {/* Ton efter bransch */}
        <h2 style={S.h2}>Tips: Så anpassar du tonen efter bransch</h2>
        <p style={S.p}>
          Rätt ton beror på vem du skriver till. Generellt gäller: matcha
          kundens nivå av formalitet.
        </p>
        <p style={S.p}>
          <strong>Till en startup eller litet företag:</strong> skriv personligt
          och avslappnat. Förnamn, rakt på sak, inga onödiga formaliteter.
        </p>
        <p style={S.p}>
          <strong>Till en kommun eller större organisation:</strong> skriv mer
          strukturerat. Använd rubriker, punktlistor och referensnummer. Hänvisa
          till upphandlingsunderlag om det finns.
        </p>
        <p style={S.p}>
          <strong>Till en privatperson (t.ex. hantverkare som offererar):</strong>{" "}
          var extra tydlig med vad som ingår, eventuella tillval och
          betalningsvillkor. Många privatpersoner jämför offerter — gör det
          enkelt att förstå vad de får för pengarna.
        </p>

        {/* AI CTA */}
        <h2 style={S.h2}>Spara tid med AI</h2>
        <p style={S.p}>
          Att skriva offertmejl tar tid, särskilt om du skickar många varje
          vecka. Med Textverkets gratis AI-verktyg kan du generera ett
          professionellt offertmejl på några sekunder. Du beskriver kort vad
          offerten gäller, och AI:n skapar ett komplett mejl som du kan anpassa
          efter behov.
        </p>
        <div style={S.ctaBox}>
          <p style={S.ctaTitle}>Skriv ditt offertmejl på 30 sekunder</p>
          <p style={S.ctaDesc}>
            Beskriv kort vad offerten gäller — AI:n levererar ett komplett,
            professionellt mejl direkt. Gratis, inga konton.
          </p>
          <a href="/verktyg" style={S.ctaBtn}>
            Testa gratis på Textverket →
          </a>
        </div>

        {/* Sammanfattning */}
        <h2 style={S.h2}>Sammanfattning</h2>
        <p style={S.p}>
          Ett bra offertmejl handlar inte om att vara formell eller ha fina ord.
          Det handlar om att visa kunden att du förstått deras problem, att du
          har en lösning, och att det är enkelt att gå vidare. Följ de sex
          stegen ovan och du kommer att märka skillnad i hur många offerter som
          leder till affär.
        </p>

        {/* Footer note */}
        <p style={S.footerNote}>
          Textverket hjälper svenska småföretag att skriva professionella texter
          med AI.{" "}
          <a href="/verktyg" style={{ color: "#6B7280" }}>
            Testa gratis på textverket.se.
          </a>
        </p>
      </article>

      {/* Footer */}
      <footer style={S.footer}>
        © 2026 Textverket · Gratis AI-verktyg för svenska företag
      </footer>
    </div>
  );
}
