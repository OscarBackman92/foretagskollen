import { ImageResponse } from "next/og";

// Dynamisk OG-bild: /og?title=Sidans+titel
export async function GET(request) {
  const raw = request.nextUrl.searchParams.get("title") || "Textverket";
  const title = raw.slice(0, 90);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#FAFAF9",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", fontSize: 40 }}>✍️</div>
          <div style={{ display: "flex", fontSize: 38, fontWeight: 700, color: "#111111" }}>
            Textverket
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 50 ? 54 : 66,
            fontWeight: 700,
            color: "#111111",
            lineHeight: 1.15,
            maxWidth: 1020,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", fontSize: 26, color: "#6B7280" }}>
            Gratis AI-texter för svenska företag
          </div>
          <div
            style={{
              display: "flex",
              width: 220,
              height: 10,
              borderRadius: 5,
              background: "linear-gradient(90deg, #2563EB, #059669)",
            }}
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, max-age=86400, s-maxage=604800",
      },
    }
  );
}
