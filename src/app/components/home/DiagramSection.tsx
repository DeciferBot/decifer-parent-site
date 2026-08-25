import Link from "next/link";
import Arrow from "../Arrow";
import Icon from "../Icon";
import { accent } from "../../data/accents";
import { diagramsByKey, diagramsOrdered } from "../../data/diagrams";

/**
 * The architecture, on the home page.
 *
 * It sits directly after the six failure points, which is the moment it is
 * worth most: the reader has just been told why pilots stall, and every one
 * of those failures is visible in this drawing as a part somebody skipped.
 * A buyer who cannot yet name what they want can still point at a box.
 *
 * The wide diagram carries the band. The tall one is a link, because a
 * 1180x2504 figure inside a home page band is a scroll, not a picture.
 */

const takeaways = [
  "Four steps, every request: assemble, ask, check, act.",
  "Control runs across all four, not at the end.",
  "More than one model, with routing and fallback.",
  "It reads and writes the systems you already run.",
];

export default function DiagramSection() {
  const d = diagramsByKey["ai-systems-architecture"];
  const other = diagramsOrdered.find((x) => x.key !== d.key)!;

  return (
    <section id="architecture" className="band band-tint">
      <div className="container-x">
        <div className="grid gap-6 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6 lg:col-span-5">
            <div className="mb-5 flex items-center gap-3" style={accent(d.hue)}>
              <span className="icon-tile">
                <Icon name={d.icon} />
              </span>
              <p className="label">The architecture</p>
            </div>
            <h2 className="t-h2 text-ink">
              Every one of those failures is a box somebody skipped.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="t-lede measure">
              This is what we build, drawn once. One request enters, moves
              through four steps, and the answer goes back. Nothing here is
              specific to us: it is the shape any AI system in a business has
              to have to be trusted with real work.
            </p>
          </div>
        </div>

        <figure className="mt-11">
          <Link
            href="/how-ai-works#ai-systems-architecture"
            data-event="home_diagram_figure"
            className="block overflow-x-auto rounded-sm border border-line bg-panel p-4 transition-colors duration-150 hover:border-ink/25 sm:p-8"
          >
            {/* SVG: next/image does not optimise it, so a plain img with
                explicit dimensions is the right element, as in the article. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={d.src}
              width={d.width}
              height={d.height}
              alt={d.alt}
              loading="lazy"
              decoding="async"
              className="mx-auto h-auto w-full"
            />
          </Link>
          <figcaption className="t-body measure mt-4 text-[0.9375rem]">
            {d.caption}
          </figcaption>
        </figure>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {takeaways.map((t, i) => (
            <li
              key={t}
              className="accent-cap rounded-sm border border-line bg-panel px-5 py-4 text-[0.9375rem] leading-relaxed text-ink"
              style={accent((["orange", "blue", "teal", "violet"] as const)[i])}
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href="/how-ai-works"
            data-event="home_diagram_how_ai_works"
            className="btn btn-secondary px-4 py-2.5 text-sm"
          >
            See both diagrams in full
            <Arrow className="row-arrow" size={15} />
          </Link>
          <Link
            href={`/how-ai-works#${other.key}`}
            data-event="home_diagram_where_ai_sits"
            className="link text-sm"
          >
            Or start with where this layer sits in what you already run
          </Link>
        </div>
      </div>
    </section>
  );
}
