import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/app/components/PageHero";
import CtaBand from "@/app/components/CtaBand";
import ProofStrip from "@/app/components/ProofStrip";
import SectionHead from "@/app/components/SectionHead";
import ModelRoutingDiagram from "@/app/components/stack/ModelRoutingDiagram";
import StackMark from "@/app/components/StackMark";
import { stack, stackCategories } from "@/app/data/stack";
import { jsonLd, SITE } from "@/lib/jsonld";

/**
 * The stack page, restored 2026-08-25.
 *
 * The 2026-08-24 repositioning folded the old /stack into /how-we-work to cut
 * page count. That was right for the ownership argument, which is a sentence,
 * and wrong for the engineering one: stack.ts carries a `role` and a `why` for
 * every tool and neither had ever rendered anywhere. A technical buyer had no
 * page to forward. /how-we-work keeps the summary strip and links here for the
 * depth, so this is additive rather than a reversal.
 *
 * Everything on this page comes from stack.ts and proof.ts. No figure is typed
 * in by hand.
 */

export const metadata: Metadata = {
  title: "The stack: what Decifer builds on, and which model runs which job",
  description:
    "The tools behind every Decifer build, and the reasoning behind each one: Claude and open-weight Llama routed by job, Next.js and Vercel, Supabase Postgres, Docker on DigitalOcean, Telegram bots, Resend, Cloudflare and GitHub. Every account opened in the client name.",
  alternates: { canonical: "/stack" },
};

const notClaimed = [
  {
    title: "Tools we have tried but would not yet run your business on",
    body: "Using something once is not the same as having operated it through an incident at 3am. If it is not on this page, it has not earned a place yet.",
  },
  {
    title: "Partnerships, certifications and badges",
    body: "We hold none of these, and listing a tool here means we have shipped production systems on it, not that its maker endorses us.",
  },
  {
    title: "A promise that this list is permanent",
    body: "Entries on this list have replaced things that failed us in production, once when a provider retired a model underneath us and once when a messaging platform withdrew an account without notice. The list records what we run now, and it changes when the evidence does.",
  },
];

export default function StackPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE}/stack#page`,
    name: "The Decifer stack",
    url: `${SITE}/stack`,
    isPartOf: { "@id": `${SITE}/#website` },
    about: { "@id": `${SITE}/#organization` },
  };

  return (
    <>
      <PageHero
        kicker="The stack"
        title="What we build on, why each one, and which model runs which job."
        lede="A short list, held to one test: we have shipped production systems on it for a real business. Every account is opened in your name, so none of this is something you rent from us."
      />

      <section className="pb-7 sm:pb-10">
        <div className="container-x">
          <div className="panel">
            <div className="panel-head">
              <h2 className="label">Choosing a model is a routing decision, not a preference</h2>
              <Link href="/how-we-work" className="link text-sm">
                The method behind it
              </Link>
            </div>
            <div className="panel-pad">
              <p className="t-body measure">
                There is no single best model, only a job and what it costs to
                get that job wrong. Most steps in a process should never reach a
                model at all. Of the steps that should, a bulk classification
                task and a sentence a customer will read are different problems,
                and we route them differently.
              </p>
              <div className="mt-8">
                <ModelRoutingDiagram />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-7 sm:pb-10">
        <div className="container-x">
          <div className="panel">
            <div className="panel-head">
              <h2 className="label">What is wired, counted rather than claimed</h2>
            </div>
            <div className="panel-pad">
              <ProofStrip keys={["integrations", "scheduledJobs", "tables", "routes"]} />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-7 sm:pb-10">
        <div className="container-x">
          <SectionHead
            title="Every tool, and the honest reason for it"
            lede="The reason matters more than the logo. Where a cheaper or more obvious alternative exists, the entry says what this one earns you instead."
            className="mb-10"
          />
          <div className="grid gap-px bg-line">
            {stackCategories.map((category) => {
              const items = stack
                .filter((s) => s.category === category)
                .sort((a, b) => a.order - b.order);
              if (items.length === 0) return null;
              return (
                <div key={category} className="bg-canvas">
                  <div className="panel">
                    <div className="panel-head">
                      <h3 className="label">{category}</h3>
                      <span className="text-sm text-muted">
                        {items.length} {items.length === 1 ? "tool" : "tools"}
                      </span>
                    </div>
                    <ul className="ruled">
                      {items.map((t) => (
                        <li key={t.key} className="px-6 py-6 sm:px-8 sm:py-7">
                          <div className="grid gap-4 md:grid-cols-12 md:gap-8">
                            <div className="md:col-span-3">
                              <h4 className="flex items-center gap-2.5 text-[1.0625rem] font-semibold text-ink">
                                <StackMark stackKey={t.key} name={t.name} size={24} />
                                <span>{t.name}</span>
                              </h4>
                              {/* Every row uses the same visible label, so the
                                  accessible name carries the tool and the fact
                                  that it opens in a new tab. */}
                              <a
                                href={t.url}
                                rel="noopener noreferrer"
                                target="_blank"
                                aria-label={`${t.name} vendor site, opens in a new tab`}
                                className="link-quiet mt-1 inline-block text-sm"
                              >
                                Vendor site
                              </a>
                            </div>
                            <div className="md:col-span-9">
                              <p className="text-body">{t.role}</p>
                              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                                {t.why}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-7 sm:pb-10">
        <div className="container-x">
          <div className="panel">
            <div className="panel-head">
              <h2 className="label">What this page deliberately does not claim</h2>
            </div>
            <ul className="ruled">
              {notClaimed.map((n) => (
                <li key={n.title} className="px-6 py-5 sm:px-8">
                  <p className="font-semibold text-ink">{n.title}</p>
                  <p className="t-body mt-1.5 measure">{n.body}</p>
                </li>
              ))}
            </ul>
            <p className="border-t border-line px-6 py-4 text-sm text-muted sm:px-8">
              At handover the repository, the accounts and a runbook transfer to
              you. See{" "}
              <Link href="/how-we-work" className="link">
                how we work
              </Link>{" "}
              for what that handover contains.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        eventPrefix="stack"
        title="Bring us the process. We will show you which parts a model should run, and which belong in code."
        body="A two-week assessment at a fixed fee costs the process, ranks the opportunities, and names plainly what we would not automate yet. Credited in full against any build that follows."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    </>
  );
}
