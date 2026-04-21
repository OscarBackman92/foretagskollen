"use client";

import { useState, useEffect } from "react";

const FEATURES = [
  { icon: "📨", title: "Offertmejl", desc: "Proffsiga offerter som vinner affärer", href: "/verktyg/offertmejl" },
  { icon: "🏷️", title: "Produkttexter", desc: "Säljande beskrivningar för webben", href: "/verktyg/produkttext" },
  { icon: "💬", title: "Kundmejl", desc: "Uppföljningar, tack och reklamationer", href: "/verktyg/kundmejl" },
  { icon: "📱", title: "Sociala medier", desc: "Engagerande inlägg som syns", href: "/verktyg/sociala-medier" },
  { icon: "🧾", title: "Fakturatexter", desc: "Tydliga betalningspåminnelser", href: "/verktyg/fakturatext" },
  { icon: "✨", title: "Fritext", desc: "Vad som helst ditt företag behöver", href: "/verktyg/fritext" },
];

const TESTIMONIALS = [
  {
    name: "Anna L.",
    role: "Enskild firma, Stockholm",
    text: "Sparar mig minst 2 timmar i veckan. Offertmejlen ser ut som om jag anlitat en copywriter.",
  },
  {
    name: "Marcus K.",
    role: "IT-konsult, Göteborg",
    text: "Äntligen ett AI-verktyg som förstår svenska affärsspråk. Helt gratis dessutom!",
  },
  {
    name: "Sofia R.",
    role: "E-handlare, Malmö",
    text: "Produktbeskrivningarna konverterar mycket bättre nu. Kunde inte vara enklare att använda.",
  },
];

const STATS = [
  { value: "6", label: "textverktyg" },
  { value: "100%", label: "gratis" },
  { value: "<5s", label: "per text" },
  { value: "🇸🇪", label: "svenskt" },
];

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

export default function LandingPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: "Kostar det verkligen ingenting?",
      a: "Ja! Textverket är 100% gratis att använda. Vi finansieras genom annonser, så du betalar aldrig ett öre.",
    },
    {
      q: "Hur bra är texterna?",
      a: "Vi använder den senaste AI-teknologin (Claude av Anthropic) som skriver naturlig, professionell svenska. Du kan alltid redigera och anpassa resultatet.",
    },
    {
      q: "Sparas mina texter?",
      a: "Nej, vi sparar ingenting. Dina texter genereras i realtid och försvinner när du stänger sidan. Din data är din.",
    },
    {
      q: "Kan jag använda texterna kommersiellt?",
      a: "Absolut. Alla texter som genereras är dina att använda fritt – i mejl, på hemsidan, i sociala medier, var som helst.",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FAFAF9",
        fontFamily: "'DM Sans', sans-serif",
        color: "#1A1A1A",
        overflowX: "hidden",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif&display=swap"
        rel="stylesheet"
      />

      {/* Nav */}
      <FadeIn>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 28px",
            maxWidth: 960,
            margin: "0 auto",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 24 }}>✍️</span>
            <span style={{ fontWeight: 700, fontSize: 18 }}>Textverket</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <a
              href="/blogg"
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: "#555",
                textDecoration: "none",
              }}
            >
              Blogg
            </a>
            <a
              href="/verktyg"
              style={{
                background: "#1A1A1A",
                color: "#fff",
                padding: "10px 22px",
                borderRadius: 100,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Testa gratis →
            </a>
          </div>
        </nav>
      </FadeIn>

      {/* Hero */}
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          padding: "60px 28px 40px",
          textAlign: "center",
        }}
      >
        <FadeIn delay={100}>
          <div
            style={{
              display: "inline-block",
              background: "#E8F5E9",
              color: "#2E7D32",
              fontSize: 13,
              fontWeight: 600,
              padding: "6px 16px",
              borderRadius: 100,
              marginBottom: 24,
            }}
          >
            ✓ 100% gratis – inga dolda kostnader
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <h1
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(36px, 7vw, 64px)",
              fontWeight: 400,
              lineHeight: 1.1,
              margin: "0 0 20px",
              color: "#111",
            }}
          >
            Proffsiga texter för
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #2563EB 0%, #059669 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
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
              color: "#666",
              maxWidth: 520,
              margin: "0 auto 36px",
              lineHeight: 1.6,
            }}
          >
            Proffsiga AI-texter för svenska företag.
          </p>
        </FadeIn>

        <FadeIn delay={400}>
          <a
            href="/verktyg"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #1A1A1A 0%, #333 100%)",
              color: "#fff",
              padding: "16px 40px",
              borderRadius: 100,
              fontSize: 17,
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
            }}
          >
            Börja skriva gratis →
          </a>
        </FadeIn>
      </div>

      {/* Stats bar */}
      <FadeIn delay={500}>
        <div
          style={{
            maxWidth: 640,
            margin: "20px auto 60px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0,
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 2px 20px rgba(0,0,0,0.04)",
            overflow: "hidden",
            border: "1px solid #EDEDED",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                padding: "20px 12px",
                textAlign: "center",
                borderRight: i < 3 ? "1px solid #F0F0F0" : "none",
              }}
            >
              <div style={{ fontSize: 26, fontWeight: 700, color: "#111" }}>
                {s.value}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "#999",
                  marginTop: 4,
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Features */}
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 28px 60px" }}>
        <FadeIn delay={100}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: 36,
                fontWeight: 400,
                margin: "0 0 12px",
              }}
            >
              Sex verktyg, ett mål
            </h2>
            <p style={{ color: "#888", fontSize: 16 }}>
              Allt ditt företag behöver för att kommunicera professionellt
            </p>
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {FEATURES.map((f, i) => (
            <FadeIn key={i} delay={150 + i * 80}>
              <a href={f.href} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid #EDEDED",
                    borderRadius: 14,
                    padding: "24px 22px",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ fontSize: 30, marginBottom: 12 }}>{f.icon}</div>
                  <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>
                    {f.title}
                  </div>
                  <div style={{ fontSize: 14, color: "#777", lineHeight: 1.5 }}>
                    {f.desc}
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* How it works */}
      <div style={{ background: "#111", color: "#fff", padding: "60px 28px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <FadeIn>
            <h2
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: 36,
                fontWeight: 400,
                textAlign: "center",
                marginBottom: 48,
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
                  gap: 20,
                  alignItems: "flex-start",
                  marginBottom: 36,
                  paddingBottom: 36,
                  borderBottom:
                    i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: 40,
                    color: "rgba(255,255,255,0.15)",
                    lineHeight: 1,
                    flexShrink: 0,
                    width: 56,
                  }}
                >
                  {step.num}
                </div>
                <div>
                  <div
                    style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}
                  >
                    {step.title}
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      color: "rgba(255,255,255,0.6)",
                      lineHeight: 1.6,
                    }}
                  >
                    {step.desc}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "60px 28px" }}>
        <FadeIn>
          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 36,
              fontWeight: 400,
              textAlign: "center",
              marginBottom: 40,
            }}
          >
            Företagare älskar det
          </h2>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div
                style={{
                  background: "#fff",
                  border: "1px solid #EDEDED",
                  borderRadius: 14,
                  padding: "24px 22px",
                }}
              >
                <div
                  style={{
                    fontSize: 14,
                    color: "#555",
                    lineHeight: 1.7,
                    marginBottom: 16,
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{t.text}&rdquo;
                </div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>{t.name}</div>
                <div style={{ fontSize: 12, color: "#999" }}>{t.role}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div
        style={{ maxWidth: 640, margin: "0 auto", padding: "20px 28px 60px" }}
      >
        <FadeIn>
          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 36,
              fontWeight: 400,
              textAlign: "center",
              marginBottom: 32,
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
                background: "#fff",
                border: "1px solid #EDEDED",
                borderRadius: 12,
                padding: "18px 22px",
                marginBottom: 10,
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: 15, fontWeight: 600 }}>{faq.q}</span>
                <span
                  style={{
                    fontSize: 20,
                    color: "#999",
                    transition: "transform 0.3s",
                    transform: activeFaq === i ? "rotate(45deg)" : "none",
                    display: "inline-block",
                  }}
                >
                  +
                </span>
              </div>
              {activeFaq === i && (
                <div
                  style={{
                    marginTop: 12,
                    fontSize: 14,
                    color: "#666",
                    lineHeight: 1.7,
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
          background: "linear-gradient(135deg, #111 0%, #1a2332 100%)",
          padding: "60px 28px",
          textAlign: "center",
        }}
      >
        <FadeIn>
          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 36,
              fontWeight: 400,
              color: "#fff",
              marginBottom: 16,
            }}
          >
            Redo att spara tid?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 16,
              marginBottom: 32,
            }}
          >
            Gå direkt till verktyget och skriv din första text på under 30
            sekunder.
          </p>
          <a
            href="/verktyg"
            style={{
              display: "inline-block",
              background: "#fff",
              color: "#111",
              padding: "16px 44px",
              borderRadius: 100,
              fontSize: 17,
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
            }}
          >
            Öppna Textverket – det är gratis
          </a>
        </FadeIn>
      </div>

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          padding: "32px 28px",
          color: "#BBB",
          fontSize: 13,
          background: "#0A0A0A",
        }}
      >
        © 2026 Textverket · Gratis AI-verktyg för svenska småföretag ·{" "}
        <a
          href="/integritetspolicy"
          style={{ color: "#BBB", textDecoration: "underline" }}
        >
          Integritetspolicy
        </a>
      </div>
    </div>
  );
}
