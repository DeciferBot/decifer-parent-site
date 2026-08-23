import { ImageResponse } from "next/og";

export const alt = "Decifer: AI that does a job inside your business. Built in Dubai.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const FONT_CSS =
  "https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;700&display=swap";

/** Fetch the two weights at build time. Falls back to the default font if Google is unreachable. */
async function loadFonts() {
  try {
    const css = await fetch(FONT_CSS, {
      headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)" },
    }).then((r) => r.text());
    const out: { name: string; data: ArrayBuffer; weight: 400 | 700; style: "normal" }[] = [];
    for (const weight of [400, 700] as const) {
      const block = css.split("@font-face").find((b) => b.includes(`font-weight: ${weight}`));
      const url = block?.match(/src: url\(([^)]+)\)/)?.[1];
      if (!url) continue;
      const data = await fetch(url).then((r) => r.arrayBuffer());
      out.push({ name: "Schibsted Grotesk", data, weight, style: "normal" });
    }
    return out;
  } catch {
    return [];
  }
}

export default async function Image() {
  const fonts = await loadFonts();
  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          fontFamily: '"Schibsted Grotesk", Helvetica, Arial, sans-serif',
          color: "#1b1e24",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <svg width="50" height="40" viewBox="0 0 40 32" fill="none">
            <polyline
              points="13,5 5,15 13,25"
              stroke="#F05A28"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polyline
              points="27,7 35,17 27,27"
              stroke="#F05A28"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: "-0.02em", display: "flex" }}>
            Decifer
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: "-0.025em",
              maxWidth: 980,
              display: "flex",
            }}
          >
            AI that does a job inside your business.
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "#3d424b",
              maxWidth: 900,
              display: "flex",
            }}
          >
            Agents, reporting systems and complete products for companies of 10
            to 200 people. Built in weeks, run on your accounts, with a log you
            can read.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid #F05A28",
            paddingTop: 22,
            fontSize: 22,
            fontWeight: 500,
          }}
        >
          <div style={{ display: "flex" }}>Dubai, United Arab Emirates</div>
          <div style={{ display: "flex", color: "#3d424b" }}>decifer.io</div>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
