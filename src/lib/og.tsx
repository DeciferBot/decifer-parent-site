/**
 * Shared building blocks for the social cards (site-wide and per-post), so
 * the brand frame exists in one place. ImageResponse (satori) cannot read
 * CSS custom properties, so the hex values here mirror globals.css:
 * #F05A28 = --color-orange (locked), #1b1e24 = ink, #3d424b = body,
 * #bd2900 = --color-orange-text (oklch(52% 0.19 36), the AA orange for
 * text on white).
 */

export const OG_SIZE = { width: 1200, height: 630 };

export const OG_COLORS = {
  orange: "#F05A28",
  orangeText: "#bd2900",
  ink: "#1b1e24",
  body: "#3d424b",
};

export const ogFrameStyle = {
  background: "#ffffff",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "space-between",
  padding: "64px 72px",
  fontFamily: '"Schibsted Grotesk", Helvetica, Arial, sans-serif',
  color: OG_COLORS.ink,
};

/** Brand mark and wordmark. Geometry mirrors DeciferMark.tsx (locked). */
export function OgHeader() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <svg width="50" height="40" viewBox="0 0 40 32" fill="none">
        <polyline
          points="13,5 5,15 13,25"
          stroke={OG_COLORS.orange}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="27,7 35,17 27,27"
          stroke={OG_COLORS.orange}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: "-0.02em", display: "flex" }}>
        Decifer
      </div>
    </div>
  );
}

/** Bottom bar: orange rule, context left, address right. */
export function OgFooter({ left, right }: { left: string; right: string }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderTop: `2px solid ${OG_COLORS.orange}`,
        paddingTop: 22,
        fontSize: 22,
        fontWeight: 500,
      }}
    >
      <div style={{ display: "flex" }}>{left}</div>
      <div style={{ display: "flex", color: OG_COLORS.body }}>{right}</div>
    </div>
  );
}
