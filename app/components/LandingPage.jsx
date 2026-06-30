import Link from "next/link";
import NavBar from "./NavBar";
import Footer from "./Footer";
import JsonLd from "./JsonLd";
import FaqAccordion from "./FaqAccordion";
import { websiteJsonLd, faqJsonLd } from "../lib/structured-data";
import {
  FEATURES,
  USECASES,
  STATS,
  GUIDES,
  FAQS,
  STEPS,
} from "../lib/landing-data";

export default function LandingPage() {
  return (
    <div className="tv-landing">
      <JsonLd data={[...websiteJsonLd(), faqJsonLd(FAQS)]} />
      <NavBar />

      <div className="tv-hero">
        <div aria-hidden className="tv-hero-glow-a" />
        <div aria-hidden className="tv-hero-glow-b" />

        <div className="tv-fade-in tv-fade-in-d1">
          <div className="tv-badge">
            <span className="tv-badge-dot" />
            100% GRATIS · INGEN INLOGGNING
          </div>
        </div>

        <div className="tv-fade-in tv-fade-in-d2">
          <h1 className="tv-hero-title">
            Proffsiga texter för
            <br />
            <span className="tv-hero-gradient">ditt företag</span>
            <br />
            på sekunder
          </h1>
        </div>

        <div className="tv-fade-in tv-fade-in-d3">
          <p className="tv-hero-lead">
            Textverket är en gratis AI-skrivverkstad byggd för svenska småföretag.
            Beskriv vad du behöver — ett offertmejl, en produkttext eller en
            betalningspåminnelse — och få en färdig, professionell text på svenska
            inom några sekunder. Inget konto, inga kostnader, ingen inlärningskurva.
          </p>
        </div>

        <div className="tv-fade-in tv-fade-in-d4">
          <div className="tv-hero-actions">
            <Link href="/verktyg" className="tv-cta-primary">
              Börja skriva gratis →
            </Link>
            <Link href="/guide" className="tv-cta-ghost">
              Läs guiden
            </Link>
          </div>
        </div>

        <div className="tv-fade-in tv-fade-in-d5">
          <div
            style={{
              maxWidth: 660,
              margin: "56px auto 0",
              textAlign: "left",
              background: "rgba(8, 11, 26, 0.82)",
              border: "1px solid rgba(125, 140, 255, 0.22)",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow:
                "0 24px 80px rgba(5, 6, 15, 0.8), 0 0 50px rgba(99, 102, 241, 0.14)",
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
              <span
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: 12,
                  color: "#7E88B5",
                  marginLeft: 10,
                  letterSpacing: 1,
                }}
              >
                textverket.se — offertmejl
              </span>
            </div>
            <div
              style={{
                padding: "20px 22px",
                fontFamily: "var(--font-mono), monospace",
                fontSize: 13.5,
                lineHeight: 1.8,
              }}
            >
              <div style={{ color: "#67E8F9" }}>
                <span style={{ color: "#7E88B5" }}>&gt;</span> Offert på fasadmålning, villa i Bromma,
                45 000 kr inkl. material, klart innan midsommar
              </div>
              <div
                style={{
                  color: "#34D399",
                  margin: "10px 0 4px",
                  fontSize: 12,
                  letterSpacing: 1,
                }}
              >
                ✓ TEXT GENERERAD PÅ 3.2s
              </div>
              <div style={{ color: "#C3CCE8", fontSize: 14, lineHeight: 1.75 }}>
                Hej Anna! Tack för din förfrågan om fasadmålning. Vi kan erbjuda komplett
                målning av er villa för 45 000 kr inklusive material och ställning.
                Arbetet tar cirka två veckor och vi garanterar att allt är klart innan
                midsommar…
                <span style={{ color: "#22D3EE", animation: "blink 1s step-end infinite" }}>▌</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tv-fade-in tv-fade-in-d5">
        <div className="tv-stats">
          {STATS.map((s, i) => (
            <div key={i} className="tv-stat">
              <div className="tv-stat-value">{s.value}</div>
              <div className="tv-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <Section title="Sex verktyg, ett mål" label="verktyg" subtitle="Allt ditt företag behöver för att kommunicera professionellt">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: 16 }}>
          {FEATURES.map((f) => (
            <Link key={f.href} href={f.href} style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}>
              <div className="tv-card" style={{ "--hue": f.hue }}>
                <FeatureIcon icon={f.icon} hue={f.hue} />
                <div style={{ fontFamily: "var(--font-space), sans-serif", fontSize: 17, fontWeight: 700, marginBottom: 6, color: "#F4F7FF" }}>
                  {f.title}
                </div>
                <div style={{ fontSize: 14, color: "#8E99C2", lineHeight: 1.6 }}>{f.desc}</div>
                <div style={{ fontFamily: "var(--font-mono), monospace", fontSize: 12, color: f.hue, marginTop: 14, letterSpacing: 1 }}>
                  ÖPPNA →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

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
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <SectionLabel>process</SectionLabel>
          <h2 style={sectionTitle}>Tre steg. Noll krångel.</h2>
          {STEPS.map((step, i) => (
            <div
              key={step.num}
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
                  fontFamily: "var(--font-mono), monospace",
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
                <div style={{ fontFamily: "var(--font-space), sans-serif", fontSize: 19, fontWeight: 700, marginBottom: 6, color: "#F4F7FF" }}>
                  {step.title}
                </div>
                <div style={{ fontSize: 15, color: "#9AA5CC", lineHeight: 1.7 }}>{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "80px 28px 40px" }}>
        <SectionLabel>därför</SectionLabel>
        <h2 style={sectionTitle}>Därför gör bra texter skillnad</h2>
        <p style={bodyText}>
          För ett litet företag är texten ofta hela första intrycket. En kund som får
          ett rörigt offertmejl antar att leveransen blir lika rörig. En webbutik med
          slarviga produktbeskrivningar tappar köpare i sista steget. Och en
          betalningspåminnelse med fel ton kan kosta en kundrelation som tagit år att
          bygga.
        </p>
        <p style={bodyText}>
          Det är därför Textverket finns. Varje verktyg är byggt kring en specifik
          svensk affärssituation — inte direktöversatta engelska mallar. Du beskriver
          ditt ärende med några rader, och AI:n gör grovjobbet.
        </p>
        <p style={bodyText}>
          Vill du hellre lära dig skriva själv? Vi publicerar guider i{" "}
          <Link href="/blogg" style={{ color: "#22D3EE", textDecoration: "none", borderBottom: "1px solid rgba(34, 211, 238, 0.4)" }}>
            bloggen
          </Link>
          .
        </p>
      </div>

      <div style={{ maxWidth: 1020, margin: "0 auto", padding: "40px 28px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 14 }}>
          {GUIDES.map((g) => (
            <Link key={g.href} href={g.href} style={{ textDecoration: "none" }}>
              <div className="tv-guide-card">
                <span
                  style={{
                    fontFamily: "var(--font-mono), monospace",
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
            </Link>
          ))}
        </div>
      </div>

      <Section title="Vad kan du skapa?" label="exempel" subtitle="Tre exempel på hur svenska företagare använder Textverket varje dag.">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: 16 }}>
          {USECASES.map((u) => (
            <Link key={u.href} href={u.href} style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}>
              <div className="tv-card" style={{ "--hue": "#22D3EE", height: "100%" }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{u.icon}</div>
                <div style={{ fontFamily: "var(--font-space), sans-serif", fontSize: 16, fontWeight: 700, color: "#F4F7FF", marginBottom: 8 }}>
                  {u.title}
                </div>
                <div style={{ fontSize: 14, color: "#9AA5CC", lineHeight: 1.7 }}>{u.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 28px 80px" }}>
        <SectionLabel>faq</SectionLabel>
        <h2 style={{ ...sectionTitle, marginBottom: 36 }}>Vanliga frågor</h2>
        <FaqAccordion faqs={FAQS} />
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto 90px", padding: "0 28px" }}>
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
          <h2 style={{ ...sectionTitle, marginBottom: 16 }}>Redo att spara tid?</h2>
          <p style={{ color: "#9AA5CC", fontSize: 16, marginBottom: 32 }}>
            Gå direkt till verktyget och skriv din första text på under 30 sekunder.
          </p>
          <Link href="/verktyg" className="tv-cta-primary">
            Öppna Textverket – det är gratis
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

const sectionTitle = {
  fontFamily: "var(--font-space), sans-serif",
  fontSize: "clamp(28px, 4.5vw, 40px)",
  fontWeight: 700,
  textAlign: "center",
  margin: "0 0 12px",
  color: "#F4F7FF",
  letterSpacing: "-0.02em",
};

const bodyText = {
  fontSize: 16.5,
  color: "#B6C0DE",
  lineHeight: 1.85,
  marginBottom: 20,
};

function SectionLabel({ children }) {
  return (
    <div className="tv-section-label">
      {"// "}
      {children}
    </div>
  );
}

function Section({ label, title, subtitle, children }) {
  return (
    <div style={{ maxWidth: 1020, margin: "0 auto", padding: "0 28px 80px" }}>
      <div style={{ textAlign: "center", marginBottom: 44 }}>
        <SectionLabel>{label}</SectionLabel>
        <h2 style={sectionTitle}>{title}</h2>
        {subtitle && <p style={{ color: "#8E99C2", fontSize: 16 }}>{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}

function FeatureIcon({ icon, hue }) {
  return (
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
        background: `color-mix(in srgb, ${hue} 12%, transparent)`,
        border: `1px solid color-mix(in srgb, ${hue} 35%, transparent)`,
        boxShadow: `0 0 18px color-mix(in srgb, ${hue} 18%, transparent)`,
      }}
    >
      {icon}
    </div>
  );
}
