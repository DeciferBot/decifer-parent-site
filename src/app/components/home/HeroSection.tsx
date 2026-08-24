import Link from "next/link";
import SystemsBoard from "./SystemsBoard";

export default function HeroSection() {
  return (
    <section className="pt-28 pb-14 sm:pt-36 sm:pb-20">
      <div className="container-x grid items-start gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <p className="label rise mb-5">AI systems for businesses in Dubai</p>
          <h1 className="t-display rise text-ink">
            We build AI that runs inside your business. Then we keep it
            running.
          </h1>
          <p className="t-lede rise-1 mt-6 max-w-[34rem]">
            Agents that handle defined work, reporting that assembles itself,
            and complete products, for companies of 10 to 200 people. Every
            system runs on your accounts, with a log your team can read.
          </p>
          <div className="rise-2 mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" data-event="cta_book_call" className="btn btn-ink">
              Book a 30-minute call
            </Link>
            <Link href="/work" data-event="cta_see_work" className="btn btn-secondary">
              See the work
            </Link>
          </div>
          <p className="rise-3 mt-5 text-sm text-muted">
            Engagements start with a two-week audit at a fixed fee, credited in
            full against any build.
          </p>
        </div>

        <div className="unclip lg:col-span-5">
          <SystemsBoard />
        </div>
      </div>
    </section>
  );
}
