import Link from "next/link";
import Arrow from "../Arrow";
import Icon from "../Icon";
import CaseBoard from "./CaseBoard";
import { getProof } from "../../data/proof";
import type { AccentHue } from "../../data/accents";

/**
 * The hero. The board on the right is the argument; the left column is the
 * offer. The three figures under the buttons exist because the board grew
 * to seven industries: without them the left column ran out of content
 * halfway down, and proof above the fold is worth more than white space.
 */

const HERO_PROOF: { key: "monthsLive" | "testFunctions" | "deletedAi"; hue: AccentHue }[] = [
  { key: "monthsLive", hue: "blue" },
  { key: "testFunctions", hue: "green" },
  { key: "deletedAi", hue: "orange" },
];

export default function HeroSection() {
  return (
    <section className="pt-28 pb-14 sm:pt-36 sm:pb-20">
      <div className="container-x grid items-start gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <p className="label rise mb-5">AI implementation, Dubai</p>
          <h1 className="t-display rise text-ink">
            Turn AI investment into operating results.
          </h1>
          <p className="t-lede rise-1 mt-6 max-w-[34rem]">
            Companies are investing in AI, but too few projects make it into
            daily use. Decifer takes responsibility for the whole path: the
            business case, the workflow redesign, the build, the integration,
            the rollout, and the measurement afterwards. Every system runs on
            your accounts, with a log your team can read.
          </p>
          <div className="rise-2 mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" data-event="cta_book_call" className="btn btn-ink">
              Discuss a business process
              <Arrow className="row-arrow" size={16} />
            </Link>
            <Link href="/work" data-event="cta_see_work" className="btn btn-secondary">
              See the work
            </Link>
          </div>
          <p className="rise-3 mt-5 text-sm text-muted">
            Engagements start with a two-week assessment at a fixed fee,
            credited in full against any build.
          </p>

          <dl className="rise-3 mt-10 grid gap-x-6 gap-y-7 border-t border-line pt-7 sm:grid-cols-3">
            {HERO_PROOF.map(({ key, hue }) => {
              const p = getProof([key])[0];
              if (!p) return null;
              return (
                <div key={key} style={{ "--accent": `var(--color-a-${hue})` } as React.CSSProperties}>
                  <dd className="figure-num figure-accent">{p.value}</dd>
                  <dt className="mt-2 text-[0.8125rem] leading-snug text-body">
                    {p.label}
                  </dt>
                </div>
              );
            })}
          </dl>
          <p className="mt-4 flex items-center gap-2 text-xs text-muted">
            <Icon name="boundary" size={14} />
            Every figure on this site names its source and the date it was
            last checked.
          </p>
        </div>

        <div className="unclip lg:col-span-5">
          <CaseBoard />
        </div>
      </div>
    </section>
  );
}
