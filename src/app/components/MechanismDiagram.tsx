import Icon from "./Icon";

/**
 * The rule, drawn.
 *
 * The site states its doctrine in words on four different pages: code
 * computes the numbers, the model only narrates or extracts, a person keeps
 * the decision, and a test fails the build if that boundary is crossed.
 * Described, it reads as a claim. Drawn, it reads as an architecture, and a
 * technical buyer can check it against their own system in five seconds.
 *
 * Composed in HTML rather than one flat SVG so it reflows to a column on a
 * phone, keeps its text selectable and searchable, and inherits the type
 * scale. The connectors are the only SVG.
 */

type Stage = {
  kicker: string;
  title: string;
  body: string;
  icon: "record" | "rule" | "agent" | "handover";
  hue: string;
};

const stages: Stage[] = [
  {
    kicker: "In",
    title: "Inputs that can be checked",
    body: "Documents, rows, live API reads. Everything the system will answer from, and nothing it will not.",
    icon: "record",
    hue: "amber",
  },
  {
    kicker: "Computed",
    title: "Code does the arithmetic",
    body: "Prices, scores, metrics, validation, business rules. Deterministic, tested, and the only place a number can be born.",
    icon: "rule",
    hue: "teal",
  },
  {
    kicker: "Narrated",
    title: "The model writes the sentence",
    body: "Language, classification, synthesis, reading a document. It may explain a figure it was handed. It may never produce one.",
    icon: "agent",
    hue: "blue",
  },
  {
    kicker: "Owned",
    title: "A person keeps the decision",
    body: "Higher-risk actions have a named owner, an approval path, and an exception route when the information is not sufficient.",
    icon: "handover",
    hue: "green",
  },
];

function Chevron() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="text-faint"
    >
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

export default function MechanismDiagram({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <figure className="m-0">
      <div className="grid items-stretch gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:gap-2">
        {stages.map((s, i) => (
          <div key={s.title} className="contents">
            {i > 0 ? (
              <div className="hidden items-center justify-center lg:flex">
                <Chevron />
              </div>
            ) : null}
            <div
              className={`accent-cap rounded-sm border px-5 py-5 ${
                dark
                  ? "border-line-dark bg-dark-2"
                  : "border-line bg-panel"
              }`}
              style={
                {
                  "--accent": dark
                    ? `var(--color-a-${s.hue}-on-dark)`
                    : `var(--color-a-${s.hue})`,
                } as React.CSSProperties
              }
            >
              <div className="flex items-center gap-3">
                <span className={`icon-tile icon-tile-sm ${dark ? "icon-tile-dark" : ""}`}>
                  <Icon name={s.icon} size={16} />
                </span>
                <span
                  className="label"
                  style={{ color: "var(--accent)" }}
                >
                  {s.kicker}
                </span>
              </div>
              <p
                className={`mt-4 text-[0.9375rem] font-semibold leading-snug ${
                  dark ? "text-on-dark" : "text-ink"
                }`}
              >
                {s.title}
              </p>
              <p
                className={`mt-2 text-[0.8125rem] leading-relaxed ${
                  dark ? "text-on-dark-2" : "text-body"
                }`}
              >
                {s.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`mt-3 flex items-start gap-3 rounded-sm border px-5 py-4 ${
          dark ? "border-line-dark bg-dark-2" : "border-line bg-surface"
        }`}
        style={
          {
            "--accent": dark
              ? "var(--color-a-orange-on-dark)"
              : "var(--color-a-orange)",
          } as React.CSSProperties
        }
      >
        <span className={`icon-tile icon-tile-sm ${dark ? "icon-tile-dark" : ""}`}>
          <Icon name="boundary" size={16} />
        </span>
        <p
          className={`text-[0.875rem] leading-relaxed ${
            dark ? "text-on-dark-2" : "text-body"
          }`}
        >
          <span className={dark ? "font-semibold text-on-dark" : "font-semibold text-ink"}>
            The boundary is enforced by a test, not by a promise.
          </span>{" "}
          A build fails if a model writes a figure the code did not compute.
          That check runs across all four stages, which is the only reason the
          rule above survives contact with a deadline.
        </p>
      </div>
    </figure>
  );
}
