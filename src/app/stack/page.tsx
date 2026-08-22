import type { Metadata } from "next";
import PageHero from "@/app/components/PageHero";
import CtaBand from "@/app/components/CtaBand";
import SectionLabel from "@/app/components/SectionLabel";
import { stack, stackCategories } from "@/app/data/stack";

export const metadata: Metadata = {
  title: "The tools we build with, and why",
  description:
    "DECIFER builds on Claude, Codex, Next.js, Vercel, Supabase, Cloudflare, DigitalOcean, GitHub, Resend, Stripe and Google Analytics. Every account is held in the client's name.",
  alternates: { canonical: "/stack" },
};

export default function StackPage() {
  return (
    <>
      <PageHero
        label="Tools we build with"
        title={
          <>
            Your accounts. Your data.
            <br />
            <span className="font-display font-normal italic text-cta">
              In your name.
            </span>
          </>
        }
        lede="These are the tools we build with, not partnerships. Every one is set up in the client's own account, so what we build is an asset you own and can take elsewhere, not a rental."
      />

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-6xl space-y-14 px-5 sm:px-8">
          {stackCategories.map((cat) => {
            const items = stack
              .filter((s) => s.category === cat)
              .sort((a, b) => a.order - b.order);
            if (!items.length) return null;
            return (
              <div key={cat}>
                <SectionLabel>{cat}</SectionLabel>
                <div className="grid gap-5 md:grid-cols-2">
                  {items.map((t) => (
                    <article
                      key={t.key}
                      className="card-lift rounded-2xl border border-line-strong bg-surface p-7"
                    >
                      <div className="mb-3 flex items-center justify-between gap-4">
                        <h2 className="text-xl font-bold text-ink">
                          <a
                            href={t.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-cta"
                          >
                            {t.name}
                          </a>
                        </h2>
                        {t.clientOwned ? (
                          <span className="rounded-full border border-live/35 bg-live/10 px-3 py-1 text-[11px] font-semibold text-live">
                            Client owned
                          </span>
                        ) : null}
                      </div>
                      <p className="mb-3 text-[15px] leading-relaxed text-ink">{t.role}</p>
                      <p className="text-sm leading-relaxed text-body">
                        <span className="font-semibold text-muted">Why this one. </span>
                        {t.why}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-canvas py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <p className="text-sm leading-relaxed text-muted">
            Product names and marks belong to their owners. Listing a tool here
            means we use it, not that its maker endorses us. We pick tools on
            one test: can the client hold the account, read the data, and leave
            if they want to.
          </p>
        </div>
      </section>

      <CtaBand eventPrefix="stack" />
    </>
  );
}
