// Textverket wordmark. Mörkanpassad variant (vit "Text", grå "verket",
// blå markör + .se). Skala allt via size = font-storleken på "Text".
export default function Logo({ size = 22 }) {
  const s = size / 24;
  const blue = "#4D8DF0";
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "baseline",
        lineHeight: 1,
        whiteSpace: "nowrap",
      }}
    >
      <span
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: size,
          letterSpacing: "-0.025em",
        }}
      >
        <b style={{ fontWeight: 700, color: "#F4F7FF" }}>Text</b>
        <span style={{ fontWeight: 400, color: "#9AA5CC" }}>verket</span>
      </span>
      <span
        aria-hidden="true"
        style={{
          width: Math.max(2, 3 * s),
          height: 21 * s,
          background: blue,
          borderRadius: 1,
          marginLeft: 2 * s,
          transform: `translateY(${2 * s}px)`,
          display: "inline-block",
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 500,
          fontSize: 12 * s,
          color: blue,
          marginLeft: 4 * s,
        }}
      >
        .se
      </span>
    </span>
  );
}
