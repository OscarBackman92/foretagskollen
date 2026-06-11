"use client";

import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import { websiteJsonLd, faqJsonLd } from "./lib/structured-data";

const FEATURES = [
  { icon: "📨", title: "Offertmejl", desc: "Proffsiga offerter som vinner affärer", href: "/verktyg/offertmejl", hue: "#22D3EE" },
  { icon: "🏷️", title: "Produkttexter", desc: "Säljande beskrivningar för webben", href: "/verktyg/produkttext", hue: "#A78BFA" },
  { icon: "💬", title: "Kundmejl", desc: "Uppföljningar, tack och reklamationer", href: "/verktyg/kundmejl", hue: "#34D399" },
  { icon: "📱", title: "Sociala medier", desc: "Engagerande inlägg som syns", href: "/verktyg/sociala-medier", hue: "#F472B6" },
  { icon: "🧾", title: "Fakturatexter", desc: "Tydliga betalningspåminnelser", href: "/verktyg/fakturatext", hue: "#FBBF24" },
  { icon: "✨", title: "Fritext", desc: "Vad som helst ditt företag behöver", href: "/verktyg/fritext", hue: "#818CF8" },
];

const USECASES = [
  {
    icon: "📨",
    title: "Offertmejl på 30 sekunder",
    desc: "Beskriv uppdraget kort — verktyget formulerar ett professionellt offertmejl med ämnesrad, erbjudande och tydlig avslutning.",
    href: "/verktyg/offertmejl",
  },
  {
    icon: "🏷️",
    title: "Produkttexter som säljer",
    desc: "Ange produkt, målgrupp och ton — du får en säljande beskrivning redo att klistra in i din webbutik.",
    href: "/verktyg/produkttext",
  },
  {
    icon: "🧾",
    title: "Betalningspåminnelser utan obehag",
    desc: "Ange fakturanummer och antal försenade dagar — verktyget skriver en tydlig påminnelse med rätt ton för situationen.",
    href: "/verktyg/fakturatext",
  },
];

const STATS = [
  { value: "6", label: "textverktyg" },
  { value: "100%", label: "gratis" },
  { value: "<5s", label: "per text" },
  { value: "🇸🇪", label: "svenskt" },
];

const GUIDES = [
  { href: "/blogg/offertmejl-guide", title: "Så skriver du ett offertmejl som vinner affären", tag: "Guide" },
  { href: "/blogg/kundmejl-mallar", title: "Färdiga mallar för kundmejl — uppföljning, tack och reklamation", tag: "Mallar" },
  { href: "/blogg/produktbeskrivningar-guide", title: "Produktbeskrivningar som faktiskt säljer", tag: "Guide" },
  { href: "/blogg/betalningspaminnelse-mall", title: "Betalningspåminnelser med rätt ton — mall och exempel", tag: "Mallar" },
  { href: "/blogg/seo-smaforetag", title: "SEO för småföretag — synas på Google utan budget", tag: "Guide" },
  { href: "/blogg/starta-eget-vid-sidan-av-jobbet", title: "Starta eget vid sidan av jobbet — så kommer du igång", tag: "Inspiration" },
];

const faqs = [
  {
    q: "Är det verkligen gratis?",
    a: "Ja, helt gratis. Textverket finansieras via annonsintäkter, precis som en gratistidning. Du betalar ingenting, nu eller i framtiden, och behöver inget konto.",
  },
  {
    q: "Hur fungerar AI-tekniken bakom?",
    a: "Textverket använder Claude, en avancerad AI-modell från Anthropic. Claude är känd för sin förmåga att producera naturlig, sammanhängande text på svenska och förstå nyanserade instruktioner.",
  },
  {
    q: "Kan jag använda texterna kommersiellt?",
    a: "Absolut. Alla texter som genereras tillhör dig och kan användas fritt — i mejl, på hemsidan, i sociala medier eller i tryck. Det finns inga begränsningar.",
  },
  {
    q: "Sparas mina texter någonstans?",
    a: "Nej. Vi lagrar varken de texter du skriver in eller de texter som genereras. Allt sker i realtid och försvinner när du stänger webbläsaren. Din data stannar hos dig.",
  },
  {
    q: "Vilken AI används?",
    a: "Vi använder Claude från Anthropic — samma AI-teknik som används av stora företag världen över, nu tillgänglig gratis för svenska småföretag via Textverket.",
  },
  {
    q: "Hur skiljer sig Textverket från ChatGPT?",
    a: "ChatGPT är ett generellt verktyg på engelska. Textverket är specialbyggt för svenska affärstexter — varje verktyg har en optimerad prompt för sin texttyp, och allt är anpassat för hur svenska företag kommunicerar.",
  },
  {
    q: "Fungerar verktyget bara på svenska?",
    a: "Verktyget är optimerat för svenska och ger bäst resultat på svenska. Du kan dock skriva din beskrivning på engelska om du vill ha texten på engelska — AI:n förstår och anpassar sig.",
  },
  {
    q: "Hur kan ni erbjuda detta gratis?",
    a: "Vi finansieras via annonsintäkter från Google AdSense. Du ser annonser på sidan, vilket ger oss intäkter som täcker kostnaden för AI-tjänsten och drift. Ingen prenumeration, inga dolda avgifter.",
  },
];

const MONO = "'JetBrains Mono', monospace";
const DISPLAY = "'Space Grotesk', sans-serif";

function FadeIn({ children, delay = 0, style = {} }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div
      style={{
        fontFamily: MONO,
        fontSize: 12,
        letterSpacing: 3,
        textTransform: "uppercase",
        color: "#22D3EE",
        marginBottom: 14,
        textAlign: "center",
      }}
    >
      {"// "}{children}
    </div>
  );
}

export default function LandingPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "transparent",
        fontFamily: "'Inter', sans-serif",
        color: "#EAEEFF",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <JsonLd data={[...websiteJsonLd(), faqJsonLd(faqs)]} />

      <NavBar />

      {/* Hero */}
      <div
        style={{
          maxWidth: 1020,
          margin: "0 auto",
          padding: "72px 28px 40px",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Svävande glödklot */}
        <div aria-hidden style={{
          position: "absolute", top: 30, left: "6%", width: 130, height: 130,
          borderRadius: "50%", filter: "blur(60px)", pointerEvents: "none",
          background: "rgba(34, 211, 238, 0.25)", animation: "floatY 9s ease-in-out infinite",
        }} />
        <div aria-hidden style={{
          position: "absolute", top: 140, right: "4%", width: 170, height: 170,
          borderRadius: "50%", filter: "blur(70px)", pointerEvents: "none",
          background: "rgba(139, 92, 246, 0.22)", animation: "floatY 11s ease-in-out infinite 1.5s",
        }} />

        <FadeIn delay={100}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              background: "rgba(34, 211, 238, 0.07)",
              border: "1px solid rgba(34, 211, 238, 0.3)",
              color: "#67E8F9",
              fontFamily: MONO,
              fontSize: 12,
              letterSpacing: 1.5,
              padding: "8px 18px",
              borderRadius: 100,
              marginBottom: 28,
              boxShadow: "0 0 24px rgba(34, 211, 238, 0.15)",
            }}
          >
            <span style={{
              width: 7, height: 7, borderRadius: "50%", background: "#34D399",
              boxShadow: "0 0 8px #34D399", animation: "pulseGlow 2s ease-in-out infinite",
            }} />
            100% GRATIS · INGEN INLOGGNING
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <h1
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(40px, 7.5vw, 76px)",
              fontWeight: 700,
              lineHeight: 1.06,
              margin: "0 0 24px",
              color: "#F4F7FF",
              letterSpacing: "-0.03em",
            }}
          >
            Proffsiga texter för
            <br />
            <span
              style={{
                background: "linear-gradient(120deg, #22D3EE 0%, #818CF8 45%, #C084FC 100%)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "gradientShift 6s ease infinite",
              }}
            >
              ditt företag
            </span>
            <br />
            på sekunder
          </h1>
        </FadeIn>

        <FadeIn delay={300}>
          <p
            style={{
              fontSize: 18,
              color: "#9AA5CC",
              maxWidth: 620,
              margin: "0 auto 36px",
              lineHeight: 1.7,
            }}
          >
            Textverket är en gratis AI-skrivverkstad byggd för svenska småföretag.
            Beskriv vad du behöver — ett offertmejl, en produkttext eller en
            betalningspåminnelse — och få en färdig, professionell text på svenska
            inom några sekunder. Inget konto, inga kostnader, ingen inlärningskurva.
          </p>
        </FadeIn>

        <FadeIn delay={400}>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/verktyg" className="tv-cta-primary">
              Börja skriva gratis →
            </a>
            <a href="/guide" className="tv-cta-ghost">
              Läs guiden
            </a>
          </div>
        </FadeIn>

        {/* Terminal-förhandsvisning */}
        <FadeIn delay={550}>
          <div
            style={{
              maxWidth: 660,
              margin: "56px auto 0",
              textAlign: "left",
              background: "rgba(8, 11, 26, 0.82)",
              border: "1px solid rgba(125, 140, 255, 0.22)",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 24px 80px rgba(5, 6, 15, 0.8), 0 0 50px rgba(99, 102, 241, 0.14)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 18px",
                borderBottom: "1px solid rgba(125, 140, 255, 0.14)",
                background: "rgba(13, 17, 36, 0.7)",
              }}
            >
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#F87171" }} />
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#FBBF24" }} />
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#34D399" }} />
              <span style={{ fontFamily: MONO, fontSize: 12, color: "#7E88B5", marginLeft: 10, letterSpacing: 1 }}>
                textverket.se — offertmejl
              </span>
            </div>
            <div style={{ padding: "20px 22px", fontFamily: MONO, fontSize: 13.5, lineHeight: 1.8 }}>
              <div style={{ color: "#67E8F9" }}>
                <span style={{ color: "#7E88B5" }}>&gt;</span> Offert på fasadmålning, villa i Bromma,
                45 000 kr inkl. material, klart innan midsommar
              </div>
              <div style={{ color: "#34D399", margin: "10px 0 4px", fontSize: 12, letterSpacing: 1 }}>
                ✓ TEXT GENERERAD PÅ 3.2s
              </div>
              <div style={{ color: "#C3CCE8", fontFamily: "'Inter', sans-serif", fontSize: 14 }}>
                Hej Anna! Tack för din förfrågan om fasadmålning. Vi kan erbjuda komplett
                målning av er villa för 45 000 kr inklusive material och ställning.
                Arbetet tar cirka två veckor och vi garanterar att allt är klart innan
                midsommar…<span style={{ color: "#22D3EE", animation: "blink 1s step-end infinite" }}>▌</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Statistikrad */}
      <FadeIn delay={500}>
        <div
          style={{
            maxWidth: 660,
            margin: "36px auto 72px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0,
            background: "rgba(13, 17, 36, 0.6)",
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid rgba(125, 140, 255, 0.18)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 0 40px rgba(99, 102, 241, 0.1)",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                padding: "22px 12px",
                textAlign: "center",
                borderRight: i < 3 ? "1px solid rgba(125, 140, 255, 0.12)" : "none",
              }}
            >
              <div style={{ fontFamily: DISPLAY, fontSize: 27, fontWeight: 700, color: "#F4F7FF" }}>
                {s.value}
              </div>
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 11,
                  color: "#7E88B5",
                  marginTop: 5,
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Verktyg */}
      <div style={{ maxWidth: 1020, margin: "0 auto", padding: "0 28px 80px" }}>
        <FadeIn delay={100}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <SectionLabel>verktyg</SectionLabel>
            <h2
              style={{
                fontFamily: DISPLAY,
                fontSize: "clamp(28px, 4.5vw, 40px)",
                fontWeight: 700,
                margin: "0 0 12px",
                color: "#F4F7FF",
                letterSpacing: "-0.02em",
              }}
            >
              Sex verktyg, ett mål
            </h2>
            <p style={{ color: "#8E99C2", fontSize: 16 }}>
              Allt ditt företag behöver för att kommunicera professionellt
            </p>
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: 16,
          }}
        >
          {FEATURES.map((f, i) => (
            <FadeIn key={i} delay={150 + i * 80}>
              <a href={f.href} style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}>
                <div className="tv-card" style={{ "--hue": f.hue }}>
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 14,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 26,
                      marginBottom: 16,
                      background: `color-mix(in srgb, ${f.hue} 12%, transparent)`,
                      border: `1px solid color-mix(in srgb, ${f.hue} 35%, transparent)`,
                      boxShadow: `0 0 18px color-mix(in srgb, ${f.hue} 18%, transparent)`,
                    }}
                  >
                    {f.icon}
                  </div>
                  <div style={{ fontFamily: DISPLAY, fontSize: 17, fontWeight: 700, marginBottom: 6, color: "#F4F7FF" }}>
                    {f.title}
                  </div>
                  <div style={{ fontSize: 14, color: "#8E99C2", lineHeight: 1.6 }}>
                    {f.desc}
                  </div>
                  <div style={{ fontFamily: MONO, fontSize: 12, color: f.hue, marginTop: 14, letterSpacing: 1 }}>
                    ÖPPNA →
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Så fungerar det */}
      <div
        style={{
          background: "linear-gradient(180deg, rgba(13, 17, 36, 0.7) 0%, rgba(8, 11, 26, 0.85) 100%)",
          borderTop: "1px solid rgba(125, 140, 255, 0.14)",
          borderBottom: "1px solid rgba(125, 140, 255, 0.14)",
          padding: "72px 28px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div aria-hidden style={{
          position: "absolute", top: "-40%", left: "50%", transform: "translateX(-50%)",
          width: 600, height: 400, borderRadius: "50%", filter: "blur(110px)",
          background: "rgba(99, 102, 241, 0.16)", pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 720, margin: "0 auto", position: "relative" }}>
          <FadeIn>
            <SectionLabel>process</SectionLabel>
            <h2
              style={{
                fontFamily: DISPLAY,
                fontSize: "clamp(28px, 4.5vw, 40px)",
                fontWeight: 700,
                textAlign: "center",
                marginBottom: 52,
                color: "#F4F7FF",
                letterSpacing: "-0.02em",
              }}
            >
              Tre steg. Noll krångel.
            </h2>
          </FadeIn>

          {[
            {
              num: "01",
              title: "Välj texttyp",
              desc: "Offert, produkttext, kundmejl – du väljer vad du behöver.",
            },
            {
              num: "02",
              title: "Beskriv kort",
              desc: "Skriv några rader om vad texten ska handla om. Ju mer detaljer, desto bättre resultat.",
            },
            {
              num: "03",
              title: "Kopiera & använd",
              desc: "Din text genereras på sekunder. Kopiera, redigera vid behov, och använd direkt.",
            },
          ].map((step, i) => (
            <FadeIn key={i} delay={i * 120}>
              <div
                style={{
                  display: "flex",
                  gap: 24,
                  alignItems: "flex-start",
                  marginBottom: 36,
                  paddingBottom: 36,
                  borderBottom: i < 2 ? "1px solid rgba(125, 140, 255, 0.1)" : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 32,
                    fontWeight: 600,
                    background: "linear-gradient(135deg, #22D3EE, #818CF8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    lineHeight: 1.1,
                    flexShrink: 0,
                    width: 64,
                  }}
                >
                  {step.num}
                </div>
                <div>
                  <div style={{ fontFamily: DISPLAY, fontSize: 19, fontWeight: 700, marginBottom: 6, color: "#F4F7FF" }}>
                    {step.title}
                  </div>
                  <div style={{ fontSize: 15, color: "#9AA5CC", lineHeight: 1.7 }}>
                    {step.desc}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Varför bra texter spelar roll */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "80px 28px 40px" }}>
        <FadeIn>
          <SectionLabel>därför</SectionLabel>
          <h2
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(28px, 4.5vw, 40px)",
              fontWeight: 700,
              textAlign: "center",
              marginBottom: 28,
              color: "#F4F7FF",
              letterSpacing: "-0.02em",
            }}
          >
            Därför gör bra texter skillnad
          </h2>
        </FadeIn>
        <FadeIn delay={100}>
          <p style={{ fontSize: 16.5, color: "#B6C0DE", lineHeight: 1.85, marginBottom: 20 }}>
            För ett litet företag är texten ofta hela första intrycket. En kund som får
            ett rörigt offertmejl antar att leveransen blir lika rörig. En webbutik med
            slarviga produktbeskrivningar tappar köpare i sista steget. Och en
            betalningspåminnelse med fel ton kan kosta en kundrelation som tagit år att
            bygga. Skillnaden mellan en text som fungerar och en som inte gör det är
            sällan talang — det är struktur, ton och tid. Tid som de flesta
            företagare inte har.
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <p style={{ fontSize: 16.5, color: "#B6C0DE", lineHeight: 1.85, marginBottom: 20 }}>
            Det är därför Textverket finns. Varje verktyg är byggt kring en specifik
            svensk affärssituation och tränat på hur svenska företag faktiskt
            kommunicerar — inte direktöversatta engelska mallar. Du beskriver ditt
            ärende med några rader, och AI:n gör grovjobbet: struktur, formuleringar,
            rätt ton för mottagaren. Sedan finjusterar du med detaljerna som bara du
            kan — namn, priser, det där personliga.
          </p>
        </FadeIn>
        <FadeIn delay={300}>
          <p style={{ fontSize: 16.5, color: "#B6C0DE", lineHeight: 1.85 }}>
            Vill du hellre lära dig skriva själv? Vi publicerar djupgående guider och
            färdiga mallar i <a href="/blogg" style={{ color: "#22D3EE", textDecoration: "none", borderBottom: "1px solid rgba(34, 211, 238, 0.4)" }}>bloggen</a> —
            om allt från offertteknik och kundmejl till SEO och nyhetsbrev. Verktygen
            och guiderna kompletterar varandra: använd verktyget när det är bråttom,
            guiden när du vill förstå hantverket.
          </p>
        </FadeIn>
      </div>

      {/* Guider från bloggen */}
      <div style={{ maxWidth: 1020, margin: "0 auto", padding: "40px 28px 80px" }}>
        <FadeIn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
              gap: 14,
            }}
          >
            {GUIDES.map((g, i) => (
              <a key={i} href={g.href} style={{ textDecoration: "none" }}>
                <div className="tv-guide-card">
                  <span
                    style={{
                      fontFamily: MONO,
                      fontSize: 11,
                      letterSpacing: 1.5,
                      textTransform: "uppercase",
                      color: "#A5B4FC",
                      background: "rgba(129, 140, 248, 0.13)",
                      border: "1px solid rgba(129, 140, 248, 0.3)",
                      padding: "3px 10px",
                      borderRadius: 100,
                    }}
                  >
                    {g.tag}
                  </span>
                  <div style={{ fontSize: 15, fontWeight: 600, color: "#DDE4FB", lineHeight: 1.5, marginTop: 12 }}>
                    {g.title}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Användningsfall */}
      <div style={{ maxWidth: 1020, margin: "0 auto", padding: "0 28px 80px" }}>
        <FadeIn>
          <SectionLabel>exempel</SectionLabel>
          <h2
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(28px, 4.5vw, 40px)",
              fontWeight: 700,
              textAlign: "center",
              marginBottom: 12,
              color: "#F4F7FF",
              letterSpacing: "-0.02em",
            }}
          >
            Vad kan du skapa?
          </h2>
          <p style={{ textAlign: "center", color: "#8E99C2", fontSize: 16, marginBottom: 44 }}>
            Tre exempel på hur svenska företagare använder Textverket varje dag.
          </p>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: 16,
          }}
        >
          {USECASES.map((u, i) => (
            <FadeIn key={i} delay={i * 100}>
              <a href={u.href} style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}>
                <div className="tv-card" style={{ "--hue": "#22D3EE", height: "100%" }}>
                  <div style={{ fontSize: 28, marginBottom: 14 }}>{u.icon}</div>
                  <div style={{ fontFamily: DISPLAY, fontSize: 16, fontWeight: 700, color: "#F4F7FF", marginBottom: 8 }}>
                    {u.title}
                  </div>
                  <div style={{ fontSize: 14, color: "#9AA5CC", lineHeight: 1.7 }}>
                    {u.desc}
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 28px 80px" }}>
        <FadeIn>
          <SectionLabel>faq</SectionLabel>
          <h2
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(28px, 4.5vw, 40px)",
              fontWeight: 700,
              textAlign: "center",
              marginBottom: 36,
              color: "#F4F7FF",
              letterSpacing: "-0.02em",
            }}
          >
            Vanliga frågor
          </h2>
        </FadeIn>

        {faqs.map((faq, i) => (
          <FadeIn key={i} delay={i * 60}>
            <div
              onClick={() => setActiveFaq(activeFaq === i ? null : i)}
              style={{
                background: activeFaq === i ? "rgba(34, 211, 238, 0.05)" : "rgba(13, 17, 36, 0.6)",
                border: activeFaq === i
                  ? "1px solid rgba(34, 211, 238, 0.35)"
                  : "1px solid rgba(125, 140, 255, 0.16)",
                borderRadius: 14,
                padding: "18px 22px",
                marginBottom: 10,
                cursor: "pointer",
                transition: "all 0.25s ease",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span style={{ fontSize: 15, fontWeight: 600, color: "#E5EAFD" }}>{faq.q}</span>
                <span
                  style={{
                    fontSize: 20,
                    color: activeFaq === i ? "#22D3EE" : "#7E88B5",
                    transition: "transform 0.3s, color 0.3s",
                    transform: activeFaq === i ? "rotate(45deg)" : "none",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                >
                  +
                </span>
              </div>
              {activeFaq === i && (
                <div
                  style={{
                    marginTop: 12,
                    fontSize: 14.5,
                    color: "#9AA5CC",
                    lineHeight: 1.75,
                  }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>

      {/* CTA */}
      <div
        id="cta"
        style={{
          maxWidth: 960,
          margin: "0 auto 90px",
          padding: "0 28px",
        }}
      >
        <FadeIn>
          <div
            style={{
              position: "relative",
              borderRadius: 24,
              padding: "64px 32px",
              textAlign: "center",
              overflow: "hidden",
              background: "linear-gradient(135deg, rgba(49, 46, 129, 0.55) 0%, rgba(8, 11, 28, 0.9) 100%)",
              border: "1px solid rgba(125, 140, 255, 0.25)",
              boxShadow: "0 0 80px rgba(99, 102, 241, 0.18)",
            }}
          >
            <div aria-hidden style={{
              position: "absolute", top: "-60%", left: "50%", transform: "translateX(-50%)",
              width: 500, height: 320, borderRadius: "50%", filter: "blur(100px)",
              background: "rgba(34, 211, 238, 0.2)", pointerEvents: "none",
            }} />
            <h2
              style={{
                fontFamily: DISPLAY,
                fontSize: "clamp(28px, 4.5vw, 40px)",
                fontWeight: 700,
                color: "#F4F7FF",
                marginBottom: 16,
                position: "relative",
                letterSpacing: "-0.02em",
              }}
            >
              Redo att spara tid?
            </h2>
            <p
              style={{
                color: "#9AA5CC",
                fontSize: 16,
                marginBottom: 32,
                position: "relative",
              }}
            >
              Gå direkt till verktyget och skriv din första text på under 30 sekunder.
            </p>
            <a href="/verktyg" className="tv-cta-primary" style={{ position: "relative" }}>
              Öppna Textverket – det är gratis
            </a>
          </div>
        </FadeIn>
      </div>

      <Footer />

      <style>{`
        .tv-cta-primary {
          display: inline-block;
          background: linear-gradient(135deg, #6366F1 0%, #22D3EE 100%);
          color: #fff;
          padding: 16px 38px;
          border-radius: 100px;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 0 28px rgba(34, 211, 238, 0.35), 0 4px 24px rgba(0, 0, 0, 0.4);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .tv-cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 44px rgba(34, 211, 238, 0.55), 0 8px 30px rgba(0, 0, 0, 0.5);
        }
        .tv-cta-ghost {
          display: inline-block;
          background: rgba(13, 17, 36, 0.5);
          color: #C3CCE8;
          padding: 16px 32px;
          border-radius: 100px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          border: 1px solid rgba(125, 140, 255, 0.25);
          backdrop-filter: blur(8px);
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .tv-cta-ghost:hover {
          border-color: rgba(34, 211, 238, 0.5);
          color: #fff;
        }
        .tv-card {
          background: rgba(13, 17, 36, 0.6);
          border: 1px solid rgba(125, 140, 255, 0.16);
          border-radius: 16px;
          padding: 26px 24px;
          cursor: pointer;
          height: 100%;
          backdrop-filter: blur(8px);
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .tv-card:hover {
          transform: translateY(-4px);
          border-color: color-mix(in srgb, var(--hue, #22D3EE) 55%, transparent);
          box-shadow: 0 0 32px color-mix(in srgb, var(--hue, #22D3EE) 22%, transparent);
        }
        .tv-guide-card {
          background: rgba(13, 17, 36, 0.55);
          border: 1px solid rgba(125, 140, 255, 0.14);
          border-radius: 14px;
          padding: 20px 22px;
          height: 100%;
          backdrop-filter: blur(8px);
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .tv-guide-card:hover {
          transform: translateY(-3px);
          border-color: rgba(165, 180, 252, 0.45);
          box-shadow: 0 0 26px rgba(129, 140, 248, 0.2);
        }
      `}</style>
    </div>
  );
}
