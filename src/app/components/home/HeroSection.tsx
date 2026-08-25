import Link from "next/link";
import Arrow from "../Arrow";
import CaseBoard from "./CaseBoard";
import { proofByKey } from "../../data/proof";

/**
 * Proof in the first screen. The strongest evidence on the site used to sit
 * ten sections down; these three figures are the same ones proof.ts already
 * carries, so nothing here can drift from the source list.
 */
const HERO_PROOF = ["liveProducts", "monthsLive", "scheduledJobs"] as const;

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
            Decifer takes an AI project the whole way into daily use: the
            business case, the workflow redesign, the build, the integration,
            the rollout, and the measurement afterwards. One team for all of
            it. Every system runs on your accounts, with a log your team can
            read.
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

          <dl className="rise-3 mt-8 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-line pt-6 sm:grid-cols-3">
            {HERO_PROOF.map((key) => {
              const item = proofByKey[key];
              return (
                <div key={key}>
                  <dt className="text-[1.375rem] font-semibold leading-none tracking-tight text-ink tabular-nums">
                    {item.value}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-snug text-muted">
                    {item.label}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>

        <div className="unclip lg:col-span-5">
          <CaseBoard />
        </div>
      </div>
    </section>
  );
}
