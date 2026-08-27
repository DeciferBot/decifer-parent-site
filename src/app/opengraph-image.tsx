import { ImageResponse } from "next/og";
import { ogFontOptions } from "@/lib/og-fonts";
import { OG_SIZE, OG_COLORS, ogFrameStyle, OgHeader, OgFooter } from "@/lib/og";

export const alt = "Decifer: turn AI investment into operating results. AI implementation, Dubai.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  const fontOptions = await ogFontOptions();
  return new ImageResponse(
    (
      <div style={ogFrameStyle}>
        <OgHeader />

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
            Turn AI investment into operating results.
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: OG_COLORS.body,
              maxWidth: 900,
              display: "flex",
            }}
          >
            AI implementation in Dubai: assessment, workflow redesign, build,
            integration and measurement. Run on your accounts, with a log you
            can read.
          </div>
        </div>

        <OgFooter left="Dubai, United Arab Emirates" right="decifer.io" />
      </div>
    ),
    { ...size, ...fontOptions }
  );
}
