"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const CATEGORIES = [
  {
    id: "offert",
    icon: "📨",
    label: "Offertmejl",
    slug: "/verktyg/offertmejl",
    prompt:
      "Skriv ett professionellt offertmejl på svenska för ett svenskt småföretag. Baserat på denna info:",
    placeholder: "Beskriv vad offerten gäller, pris, mottagare...",
  },
  {
    id: "produkt",
    icon: "🏷️",
    label: "Produkttext",
    slug: "/verktyg/produkttext",
    prompt:
      "Skriv en säljande produktbeskrivning på svenska för e-handel eller hemsida. Baserat på:",
    placeholder: "Beskriv produkten, målgrupp, ton...",
  },
  {
    id: "kundmejl",
    icon: "💬",
    label: "Kundmejl",
    slug: "/verktyg/kundmejl",
    prompt:
      "Skriv ett professionellt kundmejl på svenska för ett småföretag. Baserat på:",
    placeholder: "Beskriv situationen (uppföljning, reklamation, tack...)",
  },
  {
    id: "social",
    icon: "📱",
    label: "Sociala medier",
    slug: "/verktyg/sociala-medier",
    prompt:
      "Skriv ett engagerande inlägg för sociala medier på svenska för ett småföretag. Baserat på:",
    placeholder: "Beskriv vad inlägget ska handla om, plattform...",
  },
  {
    id: "faktura",
    icon: "🧾",
    label: "Fakturatext",
    slug: "/verktyg/fakturatext",
    prompt:
      "Skriv en tydlig och professionell fakturatext/betalningspåminnelse på svenska. Baserat på:",
    placeholder: "Beskriv vad fakturan gäller, belopp, villkor...",
  },
  {
    id: "fri",
    icon: "✨",
    label: "Fritext",
    slug: "/verktyg/fritext",
    prompt:
      "Du är en hjälpsam assistent för svenska småföretag. Hjälp användaren med följande:",
    placeholder: "Skriv vad du behöver hjälp med...",
  },
];

function TypewriterText({ text }) {
  const [displayed, setDisplayed] = useState("");
  const idx = useRef(0);

  useEffect(() => {
    setDisplayed("");
    idx.current = 0;
    if (!text) return;
    const interval = setInterval(() => {
      idx.current += 2;
      setDisplayed(text.slice(0, idx.current));
      if (idx.current >= text.length) clearInterval(interval);
    }, 12);
    return () => clearInterval(interval);
  }, [text]);

  return <>{displayed}</>;
}

export default function ToolClient({ initialCategory = null }) {
  const router = useRouter();
  const [selected] = useState(initialCategory);
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
        body: JSON.stringify({
          prompt: `${cat.prompt}\n\n${input}\n\nSvara kortfattat och professionellt. Max 200 ord.`,
        }),
      });

      const data = await response.json();

      if (data.text) {
        setResult(data.text);
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
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FAFAF9",
        fontFamily: "'DM Sans', sans-serif",
        color: "#1A1A1A",
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
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(28px, 5vw, 38px)",
            fontWeight: 400,
            margin: "0 0 10px",
            color: "#111",
            lineHeight: 1.2,
          }}
        >
          Professionella AI-texter
          <br />
          för svenska företag
        </h1>
        <p
          style={{
            fontSize: 15,
            color: "#6B7280",
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          Välj kategori, beskriv vad du behöver — klart på sekunder.
        </p>
      </div>

      <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 24px 48px" }}>
        {/* Category selector */}
        <div style={{ marginBottom: 20 }}>
          <div
            style={{
              fontSize: 12,
              color: "#9CA3AF",
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
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => router.push(cat.slug)}
                style={{
                  background: selected === cat.id ? "#EFF6FF" : "#fff",
                  border:
                    selected === cat.id
                      ? "1.5px solid #2563EB"
                      : "1.5px solid #EDEDED",
                  borderRadius: 12,
                  padding: "14px 8px",
                  cursor: "pointer",
                  textAlign: "center",
                  transition: "all 0.15s ease",
                  transform: selected === cat.id ? "scale(1.03)" : "scale(1)",
                  boxShadow:
                    selected === cat.id
                      ? "0 0 0 3px rgba(37,99,235,0.08)"
                      : "none",
                }}
              >
                <div style={{ fontSize: 22, marginBottom: 4 }}>{cat.icon}</div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: selected === cat.id ? 700 : 500,
                    color: selected === cat.id ? "#2563EB" : "#6B7280",
                  }}
                >
                  {cat.label}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Input area */}
        {selected && (
          <div style={{ animation: "fadeIn 0.3s ease" }}>
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={CATEGORIES.find((c) => c.id === selected)?.placeholder}
              rows={4}
              style={{
                width: "100%",
                boxSizing: "border-box",
                background: "#fff",
                border: "1.5px solid #EDEDED",
                borderRadius: 12,
                padding: 16,
                color: "#1A1A1A",
                fontSize: 15,
                fontFamily: "'DM Sans', sans-serif",
                resize: "vertical",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#2563EB")}
              onBlur={(e) => (e.target.style.borderColor = "#EDEDED")}
            />

            <button
              onClick={handleGenerate}
              disabled={loading || !input.trim()}
              style={{
                width: "100%",
                marginTop: 12,
                padding: "14px 24px",
                background:
                  loading || !input.trim()
                    ? "#F3F4F6"
                    : "linear-gradient(135deg, #2563EB 0%, #059669 100%)",
                color: loading || !input.trim() ? "#9CA3AF" : "#fff",
                border: "none",
                borderRadius: 12,
                fontSize: 15,
                fontWeight: 700,
                cursor: loading || !input.trim() ? "not-allowed" : "pointer",
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: 0.3,
                transition: "all 0.2s",
              }}
            >
              {loading ? "⏳ Genererar..." : "Skapa text →"}
            </button>
          </div>
        )}

        {/* Error */}
        {error && (
          <div
            style={{
              marginTop: 16,
              padding: 14,
              background: "#FFF5F5",
              border: "1px solid #FED7D7",
              borderRadius: 10,
              color: "#C53030",
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
                background: "#fff",
                border: "1.5px solid #BFDBFE",
                borderRadius: 14,
                padding: 20,
                boxShadow: "0 2px 12px rgba(37,99,235,0.06)",
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
                    fontSize: 11,
                    color: "#2563EB",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  Resultat
                </span>
                <button
                  onClick={handleCopy}
                  style={{
                    background: copied ? "#F0FDF4" : "#F9FAFB",
                    border: `1px solid ${copied ? "#BBF7D0" : "#E5E7EB"}`,
                    borderRadius: 8,
                    padding: "5px 14px",
                    color: copied ? "#15803D" : "#6B7280",
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: "pointer",
                    fontFamily: "'DM Sans', sans-serif",
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
                  color: "#374151",
                  whiteSpace: "pre-wrap",
                }}
              >
                <TypewriterText text={result} />
              </div>
            </div>
          </div>
        )}

        {/* History */}
        {history.length > 0 && (
          <div style={{ marginBottom: 8 }}>
            <div
              style={{
                fontSize: 12,
                color: "#9CA3AF",
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
                  background: "#fff",
                  border: "1px solid #EDEDED",
                  borderRadius: 10,
                  padding: "12px 14px",
                  marginBottom: 8,
                  cursor: "pointer",
                  transition: "border-color 0.15s, box-shadow 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#BFDBFE";
                  e.currentTarget.style.boxShadow =
                    "0 1px 6px rgba(37,99,235,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#EDEDED";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span
                    style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A" }}
                  >
                    {item.category}
                  </span>
                  <span style={{ fontSize: 11, color: "#9CA3AF" }}>
                    {item.time.toLocaleTimeString("sv-SE", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "#6B7280",
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

      </div>

      <Footer />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
