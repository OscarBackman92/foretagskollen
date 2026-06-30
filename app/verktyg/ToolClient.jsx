"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AdUnit from "../components/AdUnit";
import { trackEvent } from "../lib/analytics";

const ADSENSE_SLOT_TOOLS = process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOLS;
const MAX_INPUT_LENGTH = 2000;

const TONES = [
  { id: "avslappnad", label: "Avslappnad" },
  { id: "professionell", label: "Professionell" },
  { id: "formell", label: "Formell" },
];

const CATEGORIES = [
  {
    id: "offert",
    icon: "📨",
    label: "Offertmejl",
    slug: "/verktyg/offertmejl",
    hue: "#22D3EE",
    placeholder: "Beskriv vad offerten gäller, pris, mottagare...",
  },
  {
    id: "produkt",
    icon: "🏷️",
    label: "Produkttext",
    slug: "/verktyg/produkttext",
    hue: "#A78BFA",
    placeholder: "Beskriv produkten, målgrupp, ton...",
  },
  {
    id: "kundmejl",
    icon: "💬",
    label: "Kundmejl",
    slug: "/verktyg/kundmejl",
    hue: "#34D399",
    placeholder: "Beskriv situationen (uppföljning, reklamation, tack...)",
  },
  {
    id: "social",
    icon: "📱",
    label: "Sociala medier",
    slug: "/verktyg/sociala-medier",
    hue: "#F472B6",
    placeholder: "Beskriv vad inlägget ska handla om, plattform...",
  },
  {
    id: "faktura",
    icon: "🧾",
    label: "Fakturatext",
    slug: "/verktyg/fakturatext",
    hue: "#FBBF24",
    placeholder: "Beskriv vad fakturan gäller, belopp, villkor...",
  },
  {
    id: "fri",
    icon: "✨",
    label: "Fritext",
    slug: "/verktyg/fritext",
    hue: "#818CF8",
    placeholder: "Skriv vad du behöver hjälp med...",
  },
];

export default function ToolClient({ initialCategory = null, pageTitle, pageSubtitle, beforeContent, afterContent }) {
  const router = useRouter();
  const [selected] = useState(initialCategory);
  const [tone, setTone] = useState("professionell");
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);
  const [copied, setCopied] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (initialCategory) {
      setTimeout(() => textareaRef.current?.focus(), 100);
    }
  }, [initialCategory]);

  const handleGenerate = async () => {
    if (!input.trim() || !selected) return;
    setLoading(true);
    setError("");
    setResult("");
    setCopied(false);

    const cat = CATEGORIES.find((c) => c.id === selected);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tool: selected, input, tone }),
      });

      const data = await response.json();

      if (response.ok && data.text) {
        setResult(data.text);
        trackEvent("generate_success", { tool: selected, tone });
        setHistory((prev) =>
          [
            { category: cat.label, input, result: data.text, time: new Date() },
            ...prev,
          ].slice(0, 10)
        );
      } else {
        setError(data.error || "Något gick fel. Försök igen.");
      }
    } catch {
      setError("Kunde inte nå AI-tjänsten. Kontrollera din anslutning.");
    }

    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    trackEvent("copy_text", { tool: selected });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "transparent",
        fontFamily: "'Inter', sans-serif",
        color: "#EAEEFF",
      }}
    >
      <NavBar />

      {/* Hero */}
      <div
        style={{
          maxWidth: 640,
          margin: "0 auto",
          padding: "40px 24px 28px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(28px, 5vw, 38px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            margin: "0 0 10px",
            color: "#F4F7FF",
            lineHeight: 1.2,
          }}
        >
          {pageTitle || (
            <>Professionella AI-texter<br />för svenska företag</>
          )}
        </h1>
        <p
          style={{
            fontSize: 15,
            color: "#949EC9",
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          {pageSubtitle || "Välj kategori, beskriv vad du behöver — klart på sekunder."}
        </p>
      </div>

      <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 24px 48px" }}>
        {/* Category selector */}
        <div style={{ marginBottom: 20 }}>
          <div
            style={{
              fontSize: 12,
              color: "#7E88B5",
              textTransform: "uppercase",
              letterSpacing: 1.2,
              marginBottom: 12,
              fontWeight: 600,
            }}
          >
            Välj typ av text
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}
          >
            {CATEGORIES.map((cat) => {
              const active = selected === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    trackEvent("tool_selected", { tool: cat.id });
                    router.push(cat.slug);
                  }}
                  className="tv-cat-btn"
                  aria-pressed={active}
                  style={{
                    "--hue": cat.hue,
                    background: active
                      ? "rgba(34, 211, 238, 0.08)"
                      : "rgba(13, 17, 36, 0.6)",
                    border: active
                      ? "1.5px solid rgba(34, 211, 238, 0.6)"
                      : "1.5px solid rgba(125, 140, 255, 0.16)",
                    borderRadius: 12,
                    padding: "14px 8px",
                    cursor: "pointer",
                    textAlign: "center",
                    backdropFilter: "blur(8px)",
                    transform: active ? "scale(1.03)" : "scale(1)",
                    boxShadow: active
                      ? "0 0 20px rgba(34, 211, 238, 0.2)"
                      : "none",
                  }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      margin: "0 auto 7px",
                      borderRadius: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 19,
                      background: `color-mix(in srgb, ${cat.hue} 12%, transparent)`,
                      border: `1px solid color-mix(in srgb, ${cat.hue} 30%, transparent)`,
                    }}
                  >
                    {cat.icon}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: active ? 700 : 500,
                      color: active ? "#67E8F9" : "#A7B1D6",
                    }}
                  >
                    {cat.label}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Per-page static content above form */}
        {beforeContent}

        {/* Input area */}
        {selected && (
          <div style={{ animation: "fadeIn 0.3s ease" }}>
            {/* Tonväljare */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                flexWrap: "wrap",
                marginBottom: 10,
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: "#7E88B5",
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  marginRight: 4,
                }}
              >
                Ton
              </span>
              {TONES.map((t) => {
                const active = tone === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setTone(t.id)}
                    aria-pressed={active}
                    style={{
                      background: active
                        ? "rgba(34, 211, 238, 0.1)"
                        : "rgba(13, 17, 36, 0.66)",
                      border: active
                        ? "1px solid rgba(34, 211, 238, 0.55)"
                        : "1px solid rgba(125, 140, 255, 0.18)",
                      boxShadow: active
                        ? "0 0 14px rgba(34, 211, 238, 0.18)"
                        : "none",
                      color: active ? "#67E8F9" : "#949EC9",
                      borderRadius: 100,
                      padding: "6px 14px",
                      fontSize: 13,
                      fontWeight: active ? 600 : 500,
                      cursor: "pointer",
                      fontFamily: "'Inter', sans-serif",
                      transition: "all 0.15s ease",
                    }}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>

            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={CATEGORIES.find((c) => c.id === selected)?.placeholder}
              rows={4}
              maxLength={MAX_INPUT_LENGTH}
              style={{
                width: "100%",
                boxSizing: "border-box",
                background: "rgba(13, 17, 36, 0.66)",
                border: "1.5px solid rgba(125, 140, 255, 0.16)",
                borderRadius: 12,
                padding: 16,
                color: "#EAEEFF",
                fontSize: 15,
                fontFamily: "'Inter', sans-serif",
                resize: "vertical",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#22D3EE";
                e.target.style.boxShadow = "0 0 20px rgba(34, 211, 238, 0.18)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(125, 140, 255, 0.16)";
                e.target.style.boxShadow = "none";
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: 6,
                fontSize: 12,
                color: input.length > MAX_INPUT_LENGTH * 0.9 ? "#FBBF24" : "#7E88B5",
              }}
            >
              {input.length} / {MAX_INPUT_LENGTH}
            </div>

            <button
              onClick={handleGenerate}
              disabled={loading || !input.trim()}
              style={{
                width: "100%",
                marginTop: 12,
                padding: "14px 24px",
                background:
                  loading || !input.trim()
                    ? "rgba(255, 255, 255, 0.06)"
                    : "linear-gradient(135deg, #22D3EE 0%, #818CF8 100%)",
                color: loading || !input.trim() ? "#7E88B5" : "#fff",
                border: "none",
                borderRadius: 12,
                fontSize: 15,
                fontWeight: 700,
                cursor: loading || !input.trim() ? "not-allowed" : "pointer",
                fontFamily: "'Inter', sans-serif",
                letterSpacing: 0.3,
                transition: "all 0.2s",
                boxShadow:
                  loading || !input.trim()
                    ? "none"
                    : "0 0 26px rgba(34, 211, 238, 0.32)",
              }}
            >
              {loading ? "⚡ Genererar…" : "Skapa text →"}
            </button>
          </div>
        )}

        {/* Error */}
        {error && (
          <div
            style={{
              marginTop: 16,
              padding: 14,
              background: "rgba(248, 113, 113, 0.09)",
              border: "1px solid rgba(248, 113, 113, 0.28)",
              borderRadius: 10,
              color: "#F87171",
              fontSize: 14,
            }}
          >
            {error}
          </div>
        )}

        {/* Result */}
        {result && (
          <div style={{ marginTop: 20, animation: "fadeIn 0.4s ease" }}>
            <div
              style={{
                background: "rgba(13, 17, 36, 0.66)",
                border: "1.5px solid rgba(34, 211, 238, 0.35)",
                borderRadius: 14,
                padding: 20,
                boxShadow: "0 0 32px rgba(34, 211, 238, 0.12)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 14,
                }}
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: "#22D3EE",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: 2,
                  }}
                >
                  ✓ Resultat
                </span>
                <button
                  onClick={handleCopy}
                  style={{
                    background: copied ? "rgba(52, 211, 153, 0.1)" : "rgba(255, 255, 255, 0.04)",
                    border: `1px solid ${copied ? "rgba(52, 211, 153, 0.32)" : "rgba(125, 140, 255, 0.18)"}`,
                    borderRadius: 8,
                    padding: "5px 14px",
                    color: copied ? "#34D399" : "#949EC9",
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: "pointer",
                    fontFamily: "'Inter', sans-serif",
                    transition: "all 0.2s",
                  }}
                >
                  {copied ? "✓ Kopierat!" : "📋 Kopiera"}
                </button>
              </div>
              <div
                style={{
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: "#C3CCE8",
                  whiteSpace: "pre-wrap",
                }}
              >
                {result}
              </div>
            </div>
            <button
              onClick={handleGenerate}
              disabled={loading || !input.trim()}
              style={{
                width: "100%",
                marginTop: 12,
                padding: "12px 24px",
                background: "rgba(13, 17, 36, 0.66)",
                color: loading || !input.trim() ? "#7E88B5" : "#67E8F9",
                border: "1px solid rgba(34, 211, 238, 0.35)",
                borderRadius: 12,
                fontSize: 14,
                fontWeight: 600,
                cursor: loading || !input.trim() ? "not-allowed" : "pointer",
                fontFamily: "var(--font-inter), sans-serif",
              }}
            >
              {loading ? "⚡ Genererar…" : "↻ Generera igen"}
            </button>
            <AdUnit slot={ADSENSE_SLOT_TOOLS} />
          </div>
        )}

        {/* History */}
        {history.length > 0 && (
          <div style={{ marginBottom: 8 }}>
            <div
              style={{
                fontSize: 12,
                color: "#7E88B5",
                textTransform: "uppercase",
                letterSpacing: 1.2,
                marginBottom: 10,
                fontWeight: 600,
              }}
            >
              Senaste texter
            </div>
            {history.slice(0, 3).map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  setResult(item.result);
                  setCopied(false);
                }}
                style={{
                  background: "rgba(13, 17, 36, 0.66)",
                  border: "1px solid rgba(125, 140, 255, 0.16)",
                  borderRadius: 10,
                  padding: "12px 14px",
                  marginBottom: 8,
                  cursor: "pointer",
                  transition: "border-color 0.15s, box-shadow 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(34, 211, 238, 0.35)";
                  e.currentTarget.style.boxShadow =
                    "0 1px 6px rgba(34, 211, 238,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(125, 140, 255, 0.16)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span
                    style={{ fontSize: 13, fontWeight: 600, color: "#EAEEFF" }}
                  >
                    {item.category}
                  </span>
                  <span style={{ fontSize: 11, color: "#7E88B5" }}>
                    {item.time.toLocaleTimeString("sv-SE", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "#949EC9",
                    marginTop: 4,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.input}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Per-page static content below form */}
        {afterContent}

      </div>

      <Footer />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .tv-cat-btn {
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .tv-cat-btn:hover {
          transform: translateY(-2px) !important;
          border-color: color-mix(in srgb, var(--hue, #22D3EE) 55%, transparent) !important;
          box-shadow: 0 0 18px color-mix(in srgb, var(--hue, #22D3EE) 22%, transparent) !important;
        }
      `}</style>
    </div>
  );
}
