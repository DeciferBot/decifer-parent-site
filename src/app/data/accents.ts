/**
 * The accent ladder.
 *
 * Colour on this site is navigation, not decoration. One hue belongs to one
 * thing — an industry, a service, a capability — and follows it to every
 * page it appears on, so a returning reader recognises a row before reading
 * it. Orange stays the only colour allowed to carry a whole section.
 *
 * The values live in globals.css as --color-a-{hue} and
 * --color-a-{hue}-on-dark. Seven hues at one lightness and near-one chroma,
 * so no hue shouts louder than another, and every one clears 4:1 on white.
 *
 * Rule: an accent never carries meaning alone. It always sits beside the
 * word it colours, so the page still works in greyscale and for a reader
 * who cannot separate the hues.
 */

export type AccentHue =
  | "orange"
  | "blue"
  | "teal"
  | "violet"
  | "green"
  | "amber"
  | "plum";

/** Inline style for anything that reads --accent on the light ground. */
export function accent(hue: AccentHue): React.CSSProperties {
  return { "--accent": `var(--color-a-${hue})` } as React.CSSProperties;
}

/** The same, lifted for the dark board and the product band. */
export function accentOnDark(hue: AccentHue): React.CSSProperties {
  return { "--accent": `var(--color-a-${hue}-on-dark)` } as React.CSSProperties;
}

/** Accent plus the stagger index the reveal animations read. */
export function accentAt(hue: AccentHue, i: number): React.CSSProperties {
  return { "--accent": `var(--color-a-${hue})`, "--i": i } as React.CSSProperties;
}
