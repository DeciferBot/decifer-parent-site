import Link from "next/link";
import ScopeSheet from "./ScopeSheet";

export default function HeroSection() {
  return (
    <section className="pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <h1 className="t-display rise text-ink">
            AI that does a job
            <br className="hidden lg:block" /> inside your business.
          </h1>
          <p className="t-lede rise-1 mt-6 max-w-[34rem]">
            Decifer builds agents, reporting systems and complete products for
            companies of 10 to 200 people. Built in weeks, run on your
            accounts, with a log you can read. Based in Dubai.
          </p>
          <div className="rise-2 mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" data-event="cta_book_call" className="btn btn-primary">
              Book a 30-minute call
            </Link>
            <Link href="/work" data-event="cta_see_work" className="btn btn-secondary">
              See the work
            </Link>
          </div>
          <p className="rise-3 mt-5 text-sm text-muted">
            Most engagements start with a two-week audit at a fixed fee,
            credited against any build.
          </p>
        </div>

        <div className="unclip lg:col-span-5">
          <ScopeSheet />
        </div>
      </div>
    </section>
  );
}
