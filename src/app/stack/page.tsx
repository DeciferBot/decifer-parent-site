import type { Metadata } from "next";
import PageHero from "@/app/components/PageHero";
import CtaBand from "@/app/components/CtaBand";
import LogoRow from "@/app/components/LogoRow";
import { stack, stackCategories } from "@/app/data/stack";

export const metadata: Metadata = {
  title: "The tools we build with, and why",
  description:
    "Decifer builds on Claude, Codex, Next.js, Vercel, Supabase, Cloudflare, DigitalOcean, GitHub, Resend, Stripe, BigQuery and Google Analytics. Every account is held in the client's name.",
  alternates: { canonical: "/stack" },
};

export default function StackPage() {
  return (
    <>
      <PageHero
        kicker="Tools we build with"
        title="Your accounts. Your data. In your name."
        lede="These are the tools we build with, not partnerships. Every one is set up in the client's own account, so what we build is an asset you own and can take elsewhere."
      />

      <section className="pb-16 sm:pb-20">
        <div className="container-x">
          <LogoRow linkTo={null} />
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-x section">
          <div className="space-y-16">
            {stackCategories.map((cat) => {
              const items = stack
                .filter((s) => s.category === cat)
                .sort((a, b) => a.order - b.order);
              if (!items.length) return null;
              return (
                <div key={cat} className="grid gap-6 md:grid-cols-12">
                  <h2 className="t-h3 text-ink md:col-span-3">{cat}</h2>
                  <ul className="ruled md:col-span-9">
                    {items.map((t) => (
                      <li key={t.key} className="grid gap-2 py-6 md:grid-cols-12 md:gap-8">
                        <div className="md:col-span-3">
                          <h3 className="text-lg font-semibold text-ink">
                            <a href={t.url} target="_blank" rel="noopener noreferrer" className="link-quiet">
                              {t.name}
                            </a>
                          </h3>
                          {t.clientOwned ? (
                            <p className="status mt-1 text-live">
                              <span className="text-body">Client owned</span>
                            </p>
                          ) : null}
                        </div>
                        <div className="md:col-span-9">
                          <p className="text-[1.0625rem] leading-relaxed text-ink">{t.role}</p>
                          <p className="t-body mt-2">{t.why}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <p className="mt-16 max-w-2xl text-sm leading-relaxed text-muted">
            Product names and marks belong to their owners. Listing a tool here
            means we use it, not that its maker endorses us. We pick tools on one
            test: can the client hold the account, read the data, and leave if
            they want to.
          </p>
        </div>
      </section>

      <CtaBand eventPrefix="stack" />
    </>
  );
}
