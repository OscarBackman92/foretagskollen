const theme = {
  Svagt: {
    bg: "rgba(248, 113, 113, 0.09)",
    border: "rgba(248, 113, 113, 0.28)",
    pill: { background: "#F87171", color: "#fff" },
  },
  Bättre: {
    bg: "rgba(251, 191, 36, 0.09)",
    border: "rgba(251, 191, 36, 0.32)",
    pill: { background: "#FBBF24", color: "#fff" },
  },
  Bäst: {
    bg: "rgba(52, 211, 153, 0.1)",
    border: "rgba(52, 211, 153, 0.32)",
    pill: { background: "#34D399", color: "#fff" },
  },
};

export default function Comparison({ items }) {
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
                fontFamily: "var(--font-inter), sans-serif",
              }}
            >
              {label}
            </span>
            <span style={{ fontSize: 15, color: "#C3CCE8", lineHeight: 1.7 }}>
              {text}
            </span>
          </div>
        );
      })}
    </div>
  );
}
