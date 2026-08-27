/**
 * Figtree is the brand sans (set 2026-08-25, replacing Schibsted Grotesk).
 * The social cards were left on the retired face for two weeks because the
 * font swap happened in layout.tsx and nothing links the two files: keep
 * this in step with `figtree` in src/app/layout.tsx.
 */
const FONT_FAMILY = "Figtree";
const FONT_CSS =
  "https://fonts.googleapis.com/css2?family=Figtree:wght@400;700&display=swap";

type OgFont = { name: string; data: ArrayBuffer; weight: 400 | 700; style: "normal" };

/** Retries with a short backoff. Google Fonts rate-limits build IPs, and a
 *  build with several workers asks three times at once. One retry each is
 *  enough: the failures we have seen are momentary, not blocked. */
async function get(url: string, init?: RequestInit): Promise<Response> {
  for (let attempt = 0; ; attempt++) {
    try {
      const res = await fetch(url, init);
      if (res.ok) return res;
      if (attempt === 2) throw new Error(`${res.status} for ${url}`);
    } catch (err) {
      if (attempt === 2) throw err;
    }
    await new Promise((r) => setTimeout(r, 400 * (attempt + 1)));
  }
}

async function fetchFonts(): Promise<OgFont[]> {
  try {
    const css = await get(FONT_CSS, {
      headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)" },
    }).then((r) => r.text());
    const fonts = await Promise.all(
      ([400, 700] as const).map(async (weight): Promise<OgFont | undefined> => {
        const block = css.split("@font-face").find((b) => b.includes(`font-weight: ${weight}`));
        const url = block?.match(/src: url\(([^)]+)\)/)?.[1];
        if (!url) return undefined;
        const data = await get(url).then((r) => r.arrayBuffer());
        return { name: FONT_FAMILY, data, weight, style: "normal" };
      })
    );
    return fonts.filter((f): f is OgFont => Boolean(f));
  } catch {
    return [];
  }
}

let cached: Promise<OgFont[]> | undefined;

/**
 * Fetch the two Figtree weights for ImageResponse at build time,
 * once per process: every prerendered card shares one download, so a build
 * with many posts still makes three requests, and every card in a deploy
 * uses the same fonts. Falls back to the default font if Google is
 * unreachable. Shared by the site opengraph-image and the per-post cards.
 */
export function loadOgFonts(): Promise<OgFont[]> {
  cached ??= fetchFonts();
  return cached;
}

/**
 * Spread into ImageResponse options instead of passing `fonts` directly.
 *
 * The fallback above returns an empty array when Google is unreachable, and
 * an empty `fonts` array is not a fallback: satori throws "No fonts are
 * loaded", the card fails to prerender, and the whole deploy fails with it.
 * That happened on 2026-08-27 and took the build down. Omitting the key
 * entirely is what actually falls back, because next/og then uses its own
 * bundled face. A card in the wrong font is a cosmetic loss; a failed deploy
 * is every page on the site not shipping.
 */
export async function ogFontOptions(): Promise<{ fonts?: OgFont[] }> {
  const fonts = await loadOgFonts();
  return fonts.length > 0 ? { fonts } : {};
}
