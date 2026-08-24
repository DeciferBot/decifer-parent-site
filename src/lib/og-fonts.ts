const FONT_CSS =
  "https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;700&display=swap";

type OgFont = { name: string; data: ArrayBuffer; weight: 400 | 700; style: "normal" };

async function fetchFonts(): Promise<OgFont[]> {
  try {
    const css = await fetch(FONT_CSS, {
      headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)" },
    }).then((r) => r.text());
    const fonts = await Promise.all(
      ([400, 700] as const).map(async (weight): Promise<OgFont | undefined> => {
        const block = css.split("@font-face").find((b) => b.includes(`font-weight: ${weight}`));
        const url = block?.match(/src: url\(([^)]+)\)/)?.[1];
        if (!url) return undefined;
        const data = await fetch(url).then((r) => r.arrayBuffer());
        return { name: "Schibsted Grotesk", data, weight, style: "normal" };
      })
    );
    return fonts.filter((f): f is OgFont => Boolean(f));
  } catch {
    return [];
  }
}

let cached: Promise<OgFont[]> | undefined;

/**
 * Fetch the two Schibsted Grotesk weights for ImageResponse at build time,
 * once per process: every prerendered card shares one download, so a build
 * with many posts still makes three requests, and every card in a deploy
 * uses the same fonts. Falls back to the default font if Google is
 * unreachable. Shared by the site opengraph-image and the per-post cards.
 */
export function loadOgFonts(): Promise<OgFont[]> {
  cached ??= fetchFonts();
  return cached;
}
