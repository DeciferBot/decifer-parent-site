/**
 * The signature image of the site: work entering scattered on the left,
 * passing through the system, and leaving evenly spaced on the right.
 *
 * It is drawn rather than photographed on purpose. Stock photography of
 * people at laptops says nothing about what we sell; this says the whole
 * promise in one picture, and it is the same picture the workflow pages
 * reuse at a smaller size.
 *
 * The lines are generated from a fixed scatter, not a random one, so the
 * drawing is identical on the server and in the browser and identical
 * between builds. The travelling pulses are pure CSS on a dash offset,
 * which costs nothing and stops entirely for anyone who has asked their
 * device to reduce motion (see globals.css).
 */

const SCATTER = [42, 118, 61, 205, 96, 268, 150, 332, 24, 396, 182, 458, 128, 520, 300, 574];

const GATE_X = 430;
const OUT_X = 860;

type Line = {
  dIn: string;
  dOut: string;
  dFull: string;
  yOut: number;
  accent: boolean;
  dur: string;
  delay: string;
};

const LINES: Line[] = SCATTER.map((ys, i) => {
  const ym = 216 + i * 11;
  const yOut = 48 + i * 33;
  const dIn = `M0,${ys} C 190,${ys} 250,${ym} ${GATE_X},${ym}`;
  const dOut = `M${GATE_X},${ym} C 610,${ym} 660,${yOut} ${OUT_X},${yOut}`;
  return {
    dIn,
    dOut,
    dFull: `${dIn} C 610,${ym} 660,${yOut} ${OUT_X},${yOut}`,
    yOut,
    accent: i % 3 === 0,
    dur: `${5.6 + (i % 5) * 0.9}s`,
    delay: `${(i * 0.43).toFixed(2)}s`,
  };
});

export default function SystemField() {
  return (
    <section className="field-band" aria-labelledby="field-heading">
      <div className="container-x">
        <h2 id="field-heading" className="sr-only">
          How work moves through a system we build
        </h2>
        <div className="field-wrap">
          <p className="label field-label field-label-in">
            Enquiries, quotes, documents
          </p>
          <p className="label field-label field-label-gate">
            The system
            <span className="field-label-sub">scope agreed first</span>
          </p>
          <p className="label field-label field-label-out">
            Answered, priced, filed
          </p>

          <svg
            viewBox="0 0 880 600"
            className="field-svg"
            fill="none"
            role="img"
            aria-label="Sixteen lines of work enter scattered from the left, pass through the system, and leave evenly spaced on the right."
          >
            <defs>
              <linearGradient id="field-in" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="var(--color-faint)" stopOpacity="0" />
                <stop offset="0.35" stopColor="var(--color-faint)" stopOpacity="0.85" />
                <stop offset="1" stopColor="var(--color-faint)" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            <circle cx="470" cy="300" r="286" fill="var(--color-panel)" opacity="0.86" />
            <circle cx="470" cy="300" r="286" stroke="var(--color-line)" strokeWidth="1" />
            <circle cx="470" cy="300" r="204" stroke="var(--color-line)" strokeWidth="1" opacity="0.55" />

            {LINES.map((l, i) => (
              <path key={`in-${i}`} d={l.dIn} stroke="url(#field-in)" strokeWidth="1" />
            ))}
            {LINES.map((l, i) => (
              <path key={`out-${i}`} d={l.dOut} stroke="var(--color-line)" strokeWidth="1" />
            ))}
            {LINES.map((l, i) => (
              <path
                key={`pulse-${i}`}
                className="field-stream"
                d={l.dFull}
                /* pathLength normalises every line to 100 units so the dash in
                   globals.css puts exactly one travelling parcel on each of
                   them, however long the curve actually is. */
                pathLength={100}
                stroke={l.accent ? "var(--color-orange)" : "var(--color-a-blue)"}
                strokeWidth="1.9"
                strokeLinecap="round"
                style={{ animationDuration: l.dur, animationDelay: l.delay }}
              />
            ))}

            <rect
              className="field-gate"
              x={GATE_X - 6}
              y="150"
              width="12"
              height="300"
              rx="6"
              fill="var(--color-orange)"
            />
            <line x1={GATE_X} y1="150" x2={GATE_X} y2="450" stroke="var(--color-orange)" strokeWidth="2" />
            <circle cx={GATE_X} cy="300" r="15" fill="var(--color-panel)" stroke="var(--color-orange)" strokeWidth="2" />
            <path
              d={`M${GATE_X - 6} 300.5l4.4 4.2 9-9.4`}
              stroke="var(--color-orange)"
              strokeWidth="2.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {LINES.map((l, i) => (
              <circle
                key={`dot-${i}`}
                className="field-settled"
                cx={OUT_X - 14}
                cy={l.yOut}
                r="2.6"
                fill="var(--color-orange)"
                style={{ animationDelay: l.delay }}
              />
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
