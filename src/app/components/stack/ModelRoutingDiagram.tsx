/**
 * The routing gate, drawn. One question decides whether a step runs as code
 * or as a model, and a second decides which model. This is the same rule
 * RuleSection states in prose; the diagram exists so an evaluator can take
 * it in without reading the paragraph.
 *
 * Inline SVG rather than an image: it scales, it inherits the design tokens
 * in both the panel and print, and it stays in version control with the copy
 * it illustrates. Text is hand-wrapped because SVG does not wrap.
 */

const LINE = "var(--color-line-strong)";
const INK = "var(--color-ink)";
const BODY = "var(--color-body)";
const MUTED = "var(--color-muted)";
const ORANGE = "var(--color-orange)";

/** A hairline box with a heading and up to three hand-wrapped body lines. */
function Node({
  x,
  y,
  w,
  h,
  title,
  lines,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  lines?: string[];
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="4"
        fill="var(--color-panel)"
        stroke={LINE}
        strokeWidth="1"
      />
      <text x={x + 16} y={y + 26} fill={INK} fontSize="15" fontWeight="600">
        {title}
      </text>
      {lines?.map((l, i) => (
        <text key={l} x={x + 16} y={y + 48 + i * 17} fill={BODY} fontSize="12.5">
          {l}
        </text>
      ))}
    </g>
  );
}

/** Vertical connector with an optional label sitting beside it. */
function Down({
  x,
  y1,
  y2,
  label,
  labelX,
}: {
  x: number;
  y1: number;
  y2: number;
  label?: string;
  labelX?: number;
}) {
  return (
    <g>
      <path
        d={`M ${x} ${y1} L ${x} ${y2}`}
        stroke={LINE}
        strokeWidth="1"
        fill="none"
        markerEnd="url(#dc-arrow)"
      />
      {label ? (
        <text x={labelX ?? x + 10} y={(y1 + y2) / 2 + 4} fill={MUTED} fontSize="12">
          {label}
        </text>
      ) : null}
    </g>
  );
}

/** Elbow connector: down from (x1,y1), across, then down into (x2,y2). */
function Elbow({
  x1,
  y1,
  x2,
  y2,
  label,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label?: string;
}) {
  const mid = y1 + 26;
  return (
    <g>
      <path
        d={`M ${x1} ${y1} L ${x1} ${mid} L ${x2} ${mid} L ${x2} ${y2}`}
        stroke={LINE}
        strokeWidth="1"
        fill="none"
        markerEnd="url(#dc-arrow)"
      />
      {label ? (
        <text
          x={x2}
          y={mid - 8}
          fill={MUTED}
          fontSize="12"
          textAnchor={x2 < x1 ? "start" : "end"}
        >
          {label}
        </text>
      ) : null}
    </g>
  );
}

export default function ModelRoutingDiagram() {
  return (
    <figure className="m-0">
      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 880 534"
          className="block h-auto w-full min-w-[700px]"
          role="img"
          aria-labelledby="dc-routing-title dc-routing-desc"
        >
          <title id="dc-routing-title">
            How Decifer decides whether a step runs as code or as a model
          </title>
          <desc id="dc-routing-desc">
            Every step in a process is asked one question. If it has to be
            right, it runs as deterministic code with no model in the path. If
            it needs judgement, it runs as a model inside a written boundary:
            open-weight Llama on DigitalOcean inference for high-volume
            classification, and Claude for judgement a customer will read. If
            either model is unavailable the step falls back to the
            deterministic path and a person is alerted.
          </desc>

          <defs>
            <marker
              id="dc-arrow"
              viewBox="0 0 8 8"
              refX="6"
              refY="4"
              markerWidth="6"
              markerHeight="6"
              orient="auto"
            >
              <path d="M 0 1 L 6 4 L 0 7 z" fill={LINE} />
            </marker>
          </defs>

          <Node x={330} y={8} w={220} h={44} title="A step in the process" />
          <Down x={440} y1={52} y2={84} />

          <Node
            x={190}
            y={84}
            w={500}
            h={62}
            title="One question, asked of every step"
            lines={["Does this have to be right, or does it need judgement?"]}
          />

          <Elbow x1={440} y1={146} x2={205} y2={214} label="Has to be right" />
          <Elbow x1={440} y1={146} x2={675} y2={214} label="Needs judgement" />

          <Node
            x={40}
            y={214}
            w={330}
            h={104}
            title="Deterministic code"
            lines={[
              "Arithmetic, rules and thresholds, written as",
              "tested code. No model anywhere in the path,",
              "so there is nothing available to invent.",
            ]}
          />

          <Node
            x={510}
            y={214}
            w={330}
            h={104}
            title="A model, inside a written boundary"
            lines={[
              "It is told what it may do, what it must hand",
              "to a person, and every action it takes is",
              "logged under a name and a time.",
            ]}
          />

          <Elbow x1={675} y1={318} x2={589} y2={382} />
          <Elbow x1={675} y1={318} x2={761} y2={382} />

          <Node
            x={510}
            y={382}
            w={158}
            h={92}
            title="Llama"
            lines={["High-volume sorting", "and classification,", "run cheaply per call."]}
          />

          <Node
            x={682}
            y={382}
            w={158}
            h={92}
            title="Claude"
            lines={["Judgement a customer", "will read, where drift", "would be visible."]}
          />

          <Down x={589} y1={474} y2={496} />
          <Down x={761} y1={474} y2={496} />

          <g>
            <rect
              x={370}
              y={496}
              width={470}
              height={34}
              rx="4"
              fill="var(--color-orange-tint)"
              stroke={ORANGE}
              strokeWidth="1"
            />
            <text x={388} y={518} fill={INK} fontSize="12.5">
              If a model is unavailable: fall back to code, and alert a person.
            </text>
          </g>
        </svg>
      </div>
      <figcaption className="mt-4 text-sm text-muted">
        The same gate governs every engagement. Where a step lands decides what
        can go wrong with it, which is why we write the answer down before the
        build rather than after.
      </figcaption>
    </figure>
  );
}
