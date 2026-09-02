"use client";

import { useId, useState } from "react";

/**
 * The signature image of the site, and the one interactive argument on it.
 *
 * Work enters scattered on the left, passes through the system, and leaves
 * in order on the right. Drawn rather than photographed on purpose: stock
 * photography of people at laptops says nothing about what we sell.
 *
 * The line in the middle is the whole pitch, and you can drag it.
 *
 *   Dragged LEFT  — more of the work is left to the model. Answers come out
 *                   fast and some of them are invented, so the output stops
 *                   being ordered and a few parcels turn the wrong colour.
 *   Dragged RIGHT — everything is fixed rules and people. Nothing is ever
 *                   invented, and the work that needed judgement simply
 *                   never gets through: those lines stop at the gate.
 *   The balance   — left of centre. Judgement only where it is needed.
 *
 * That is the argument this business is built on, made by hand instead of
 * in a paragraph. It is also the only honest way to show it: both extremes
 * are visibly worse than the middle, and the reader proves it themselves.
 *
 * The lines come from a fixed scatter, not a random one, so the drawing is
 * identical on the server and in the browser and between builds. The
 * control is a real range input, so it works with a keyboard, a screen
 * reader and a thumb without any of that being rebuilt by hand.
 */

const SCATTER = [42, 118, 61, 205, 96, 268, 150, 332, 24, 396, 182, 458, 128, 520, 300, 574];

/** Fixed per-line wobble used when the model is given too much to decide. */
const NOISE = [-1, 0.7, -0.45, 1, -0.8, 0.35, -1, 0.55, 0.9, -0.6, 0.25, -0.95, 0.8, -0.3, 0.6, -0.75];

const OUT_X = 860;
const VIEW_W = 880;
const VIEW_H = 600;

/** Where the gate sits at each end of the travel. */
const GATE_MIN = 300;
const GATE_MAX = 560;

/** Left of centre, because that is where the argument lands. */
const DEFAULT_T = 0.38;

/** Below this the model is deciding too much; above this, too little. */
const LOOSE_EDGE = 0.3;
const RIGID_EDGE = 0.5;

const STATES = [
  {
    key: "loose",
    title: "Too much left to the model",
    body: "Everything is answered, quickly, and some of the answers are invented. Nobody can tell which.",
  },
  {
    key: "balance",
    title: "The balance",
    body: "The model handles what needs judgement. Plain rules handle everything else, because rules cannot invent.",
  },
  {
    key: "rigid",
    title: "All rules, no judgement",
    body: "Nothing is ever invented. The work that needed a decision waits for a person, and most of it never gets answered.",
  },
] as const;

export default function SystemField() {
  const [t, setT] = useState(DEFAULT_T);
  const sliderId = useId();

  // 0 at the balance point, 1 at the far end. Nothing happens in the middle
  // band, which is what makes the middle feel like the answer.
  const loose = t < LOOSE_EDGE ? (LOOSE_EDGE - t) / LOOSE_EDGE : 0;
  const rigid = t > RIGID_EDGE ? (t - RIGID_EDGE) / (1 - RIGID_EDGE) : 0;

  const gateX = GATE_MIN + (GATE_MAX - GATE_MIN) * t;
  const state = loose > 0.35 ? STATES[0] : rigid > 0.35 ? STATES[2] : STATES[1];

  const lines = SCATTER.map((ys, i) => {
    const ym = 216 + i * 11;

    // Ordered exit, pulled off its slot as the model is given more rope.
    const ordered = 48 + i * 33;
    const yOut = ordered + NOISE[i] * 150 * loose;

    // When it is all rules, the lines that needed judgement stop at the
    // gate. Two in every three, at the far end.
    const blocked = rigid > 0 && i % 3 !== 0 && rigid > (i % 3 === 1 ? 0.35 : 0.7);

    const dIn = `M0,${ys} C ${gateX * 0.44},${ys} ${gateX * 0.58},${ym} ${gateX},${ym}`;
    const dOut = `M${gateX},${ym} C ${gateX + 180},${ym} ${OUT_X - 200},${yOut} ${OUT_X},${yOut}`;

    return {
      dIn,
      dOut: blocked ? "" : dOut,
      dFull: blocked ? dIn : `${dIn} C ${gateX + 180},${ym} ${OUT_X - 200},${yOut} ${OUT_X},${yOut}`,
      yOut,
      blocked,
      // A parcel the model got wrong. Only ever appears on the loose side.
      wrong: loose > 0.45 && i % 4 === 1,
      accent: i % 3 === 0,
      dur: `${5.6 + (i % 5) * 0.9}s`,
      delay: `${(i * 0.43).toFixed(2)}s`,
    };
  });

  const throughCount = lines.filter((l) => !l.blocked).length;

  return (
    <section className="field-band" aria-labelledby="field-heading">
      <div className="container-x">
        <h2 id="field-heading" className="sr-only">
          How much of the work the model should decide
        </h2>

        <div className="field-wrap">
          <p className="label field-label field-label-in">
            Enquiries, quotes, documents
          </p>
          <p className="label field-label field-label-out">
            Answered, priced, filed
          </p>

          <svg
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            className="field-svg"
            fill="none"
            role="img"
            aria-label={`Work entering from the left passes through the system and leaves on the right. ${throughCount} of 16 get through. ${state.title}.`}
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

            {lines.map((l, i) => (
              <path key={`in-${i}`} d={l.dIn} stroke="url(#field-in)" strokeWidth="1" />
            ))}
            {lines.map((l, i) =>
              l.dOut ? (
                <path key={`out-${i}`} d={l.dOut} stroke="var(--color-line)" strokeWidth="1" />
              ) : null
            )}
            {lines.map((l, i) => (
              <path
                key={`pulse-${i}`}
                className="field-stream"
                d={l.dFull}
                pathLength={100}
                stroke={
                  l.wrong
                    ? "var(--color-a-amber)"
                    : l.accent
                      ? "var(--color-orange)"
                      : "var(--color-a-blue)"
                }
                strokeWidth="1.9"
                strokeLinecap="round"
                opacity={l.blocked ? 0.3 : 1}
                style={{ animationDuration: l.dur, animationDelay: l.delay }}
              />
            ))}

            {/* The gate. This is the thing you drag. */}
            <rect
              className="field-gate"
              x={gateX - 6}
              y="150"
              width="12"
              height="300"
              rx="6"
              fill="var(--color-orange)"
            />
            <line x1={gateX} y1="150" x2={gateX} y2="450" stroke="var(--color-orange)" strokeWidth="2" />
            <circle cx={gateX} cy="300" r="15" fill="var(--color-panel)" stroke="var(--color-orange)" strokeWidth="2" />
            <path
              d={`M${gateX - 6} 300.5l4.4 4.2 9-9.4`}
              stroke="var(--color-orange)"
              strokeWidth="2.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {lines.map((l, i) =>
              l.blocked ? null : (
                <circle
                  key={`dot-${i}`}
                  className="field-settled"
                  cx={OUT_X - 14}
                  cy={l.yOut}
                  r="2.6"
                  fill={l.wrong ? "var(--color-a-amber)" : "var(--color-orange)"}
                  style={{ animationDelay: l.delay }}
                />
              )
            )}
          </svg>
        </div>

        {/* The control, and the sentence it changes. */}
        <div className="field-control">
          <label htmlFor={sliderId} className="label field-control-label">
            How much should the model decide?
          </label>

          <div className="field-slider-row">
            <span className="field-end">More model</span>
            <input
              id={sliderId}
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={t}
              onChange={(e) => setT(Number(e.target.value))}
              className="field-slider"
              aria-describedby={`${sliderId}-state`}
            />
            <span className="field-end">More rules</span>
          </div>

          <p id={`${sliderId}-state`} className="field-state" aria-live="polite">
            <strong className="field-state-title">{state.title}.</strong>{" "}
            {state.body}
          </p>
        </div>
      </div>
    </section>
  );
}
