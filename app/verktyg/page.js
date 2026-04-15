"use client";

import { useState, useRef, useEffect } from "react";

const CATEGORIES = [
  {
    id: "offert",
    icon: "📨",
    label: "Offertmejl",
    prompt:
      "Skriv ett professionellt offertmejl på svenska för ett svenskt småföretag. Baserat på denna info:",
    placeholder: "Beskriv vad offerten gäller, pris, mottagare...",
  },
  {
    id: "produkt",
    icon: "🏷️",
    label: "Produkttext",
    prompt:
      "Skriv en säljande produktbeskrivning på svenska för e-handel eller hemsida. Baserat på:",
    placeholder: "Beskriv produkten, målgrupp, ton...",
  },
  {
    id: "kundmejl",
    icon: "💬",
    label: "Kundmejl",
    prompt:
      "Skriv ett professionellt kundmejl på svenska för ett småföretag. Baserat på:",
    placeholder: "Beskriv situationen (uppföljning, reklamation, tack...)",
  },
  {
    id: "social",
    icon: "📱",
    label: "Sociala medier",
    prompt:
      "Skriv ett engagerande inlägg för sociala medier på svenska för ett småföretag. Baserat på:",
    placeholder: "Beskriv vad inlägget ska handla om, plattform...",
  },
  {
    id: "faktura",
    icon: "🧾",
    label: "Fakturatext",
    prompt:
      "Skriv en tydlig och professionell fakturatext/betalningspåminnelse på svenska. Baserat på:",
    placeholder: "Beskriv vad fakturan gäller, belopp, villkor...",
  },
  {
    id: "fri",
    icon: "✨",
    label: "Fritext",
    prompt:
      "Du är en hjälpsam assistent för svenska småföretag. Hjälp användaren med följande:",
    placeholder: "Skriv vad du behöver hjälp med...",
  },
];

const AD_TEXTS = [
  {
    title: "Din annons här",
    desc: "Nå tusentals svenska småföretagare",
    color: "#E8F5E9",
  },
  { title: "Annonsplats", desc: "Kontakta oss för priser", color: "#FFF3E0" },
  {
    title: "Sponsrad plats",
    desc: "Visa din tjänst för företagare",
    color: "#E3F2FD",
  },
];

function AdBanner({ index = 0 }) {
  const ad = AD_TEXTS[index % AD_TEXTS.length];
  return (
    <div
      style={{
        background: ad.color,
        border: "1px dashed #bbb",
        borderRadius: 10,
        padding: "14px 18px",
        textAlign: "center",
        margin: "16px 0",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 11,
          color: "#999",
          letterSpacing: 1,
          textTransform: "uppercase",
          marginBottom: 4,
        }}
      >
        Annons
      </div>
      <div style={{ fontWeight: 700, fontSize: 15, color: "#333" }}>
        {ad.title}
      </div>
      <div style={{ fontSize: 13, color: "#666" }}>{ad.desc}</div>
    </div>
  );
}

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

export default function Textverket() {
  const [selected, setSelected] = useState(null);
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);
  const [copied, setCopied] = useState(false);
  const textareaRef = useRef(null);

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
        background:
          "linear-gradient(168deg, #0D1117 0%, #161B22 40%, #1C2333 100%)",
        fontFamily: "'DM Sans', sans-serif",
        color: "#E6EDF3",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@700;800&display=swap"
        rel="stylesheet"
      />

      {/* Header */}
      <div
        style={{
          padding: "40px 24px 32px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -80,
            left: "50%",
            transform: "translateX(-50%)",
            width: 400,
            height: 400,
            background:
              "radial-gradient(circle, rgba(99,179,237,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ fontSize: 36, marginBottom: 8 }}>✍️</div>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 32,
            fontWeight: 800,
            margin: 0,
            background: "linear-gradient(135deg, #E6EDF3 0%, #63B3ED 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: -0.5,
          }}
        >
          Textverket
        </h1>
        <p
          style={{
            color: "#8B949E",
            fontSize: 15,
            marginTop: 8,
            fontWeight: 400,
          }}
        >
          Proffsiga AI-texter för svenska företag
        </p>
      </div>

      {/* Ad banner top */}
      <div style={{ padding: "0 20px" }}>
        <AdBanner index={0} />
      </div>

      {/* Category selector */}
      <div style={{ padding: "8px 20px 0" }}>
        <div
          style={{
            fontSize: 12,
            color: "#8B949E",
            textTransform: "uppercase",
            letterSpacing: 1.5,
            marginBottom: 12,
            fontWeight: 500,
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
              onClick={() => {
                setSelected(cat.id);
                setResult("");
                setError("");
                setCopied(false);
                setTimeout(() => textareaRef.current?.focus(), 100);
              }}
              style={{
                background:
                  selected === cat.id
                    ? "linear-gradient(135deg, #1A3A5C 0%, #1E4976 100%)"
                    : "rgba(255,255,255,0.04)",
                border:
                  selected === cat.id
                    ? "1.5px solid #63B3ED"
                    : "1.5px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
                padding: "14px 8px",
                cursor: "pointer",
                textAlign: "center",
                transition: "all 0.2s ease",
                transform: selected === cat.id ? "scale(1.03)" : "scale(1)",
              }}
            >
              <div style={{ fontSize: 22, marginBottom: 4 }}>{cat.icon}</div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: selected === cat.id ? 700 : 500,
                  color: selected === cat.id ? "#63B3ED" : "#8B949E",
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
        <div
          style={{ padding: "20px 20px 0", animation: "fadeIn 0.3s ease" }}
        >
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={CATEGORIES.find((c) => c.id === selected)?.placeholder}
            rows={4}
            style={{
              width: "100%",
              boxSizing: "border-box",
              background: "rgba(255,255,255,0.04)",
              border: "1.5px solid rgba(255,255,255,0.1)",
              borderRadius: 12,
              padding: 16,
              color: "#E6EDF3",
              fontSize: 15,
              fontFamily: "'DM Sans', sans-serif",
              resize: "vertical",
              outline: "none",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#63B3ED")}
            onBlur={(e) =>
              (e.target.style.borderColor = "rgba(255,255,255,0.1)")
            }
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
                  ? "rgba(99,179,237,0.2)"
                  : "linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)",
              color: loading || !input.trim() ? "#63B3ED" : "#fff",
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
            margin: "16px 20px",
            padding: 14,
            background: "rgba(239,68,68,0.1)",
            border: "1px solid rgba(239,68,68,0.3)",
            borderRadius: 10,
            color: "#FCA5A5",
            fontSize: 14,
          }}
        >
          {error}
        </div>
      )}

      {/* Result */}
      {result && (
        <div style={{ padding: "20px 20px 0", animation: "fadeIn 0.4s ease" }}>
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1.5px solid rgba(99,179,237,0.2)",
              borderRadius: 14,
              padding: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  color: "#63B3ED",
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
                  background: copied
                    ? "rgba(34,197,94,0.2)"
                    : "rgba(255,255,255,0.08)",
                  border:
                    "1px solid " +
                    (copied
                      ? "rgba(34,197,94,0.4)"
                      : "rgba(255,255,255,0.15)"),
                  borderRadius: 8,
                  padding: "6px 14px",
                  color: copied ? "#4ADE80" : "#8B949E",
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
                lineHeight: 1.7,
                color: "#C9D1D9",
                whiteSpace: "pre-wrap",
              }}
            >
              <TypewriterText text={result} />
            </div>
          </div>
        </div>
      )}

      {/* Ad banner mid */}
      <div style={{ padding: "0 20px" }}>
        <AdBanner index={1} />
      </div>

      {/* History */}
      {history.length > 0 && (
        <div style={{ padding: "8px 20px 0" }}>
          <div
            style={{
              fontSize: 12,
              color: "#8B949E",
              textTransform: "uppercase",
              letterSpacing: 1.5,
              marginBottom: 10,
              fontWeight: 500,
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
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 10,
                padding: "12px 14px",
                marginBottom: 8,
                cursor: "pointer",
                transition: "background 0.2s",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#C9D1D9",
                  }}
                >
                  {item.category}
                </span>
                <span style={{ fontSize: 11, color: "#484F58" }}>
                  {item.time.toLocaleTimeString("sv-SE", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "#6E7681",
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

      {/* Bottom ad */}
      <div style={{ padding: "0 20px" }}>
        <AdBanner index={2} />
      </div>

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          padding: "24px 20px 40px",
          color: "#484F58",
          fontSize: 12,
        }}
      >
        © 2026 Textverket · Proffsiga AI-texter för svenska företag
        <br />
        <span style={{ fontSize: 11 }}>Drivs av Claude AI • Annonsfinansierat</span>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
