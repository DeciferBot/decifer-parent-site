import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/app/components/PageHero";
import ProductFrame from "@/app/components/ProductFrame";
import EarlyAccessForm from "@/app/components/EarlyAccessForm";
import { products } from "@/app/data/products";

export const metadata: Metadata = {
  title: "Products: Decifer Markets, Decifer Learning and Decifer Marketing",
  description:
    "The three public products Decifer builds and runs with the same method it uses for client work. Market intelligence, a UK curriculum learning companion, and marketing intelligence.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        kicker="Products"
        title="Three products, one method."
        lede="Decifer builds its own products first. They exist so that anyone thinking of hiring us can open something we run in production before a single conversation."
      />

      <section id="family" className="pb-16 sm:pb-24">
        <div className="container-x">
          <div className="space-y-20">
            {products.map((p, i) => (
              <div key={p.key} className="grid gap-8 md:grid-cols-12 md:items-start">
                <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2 md:col-start-6" : ""}`}>
                  <ProductFrame product={p} tone="ink" priority={i === 0} />
                </div>
                <div className={`md:col-span-4 ${i % 2 === 1 ? "md:order-1 md:col-start-1" : "md:col-start-9"}`}>
                  <h2 className="text-sm font-semibold text-ink">What it helps with</h2>
                  <ul className="mt-3 space-y-2">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-[0.9375rem] leading-relaxed text-body">
                        <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-ink" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 border-t border-line pt-4 text-sm leading-relaxed text-muted">
                    {p.boundary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-x section grid gap-8 md:grid-cols-12">
          <h2 className="t-h2 text-ink md:col-span-5">
            The products are the lab. Client work gets the tested version.
          </h2>
          <div className="space-y-5 text-[1.0625rem] leading-relaxed text-body md:col-span-6 md:col-start-7">
            <p>
              Each product turns the noise of its own domain into plain-language
              understanding: collect inputs that can be checked, connect them with
              the rules of the domain, explain the result so a person can act on
              it. The same three steps run every client engagement.
            </p>
            <p>
              Running them in production is where the method gets tested. The
              guardrails, the cost controls, the habit of removing AI where a
              plain check is better, all of it was learned here first.{" "}
              <Link href="/services" className="link">
                See the services
              </Link>{" "}
              or{" "}
              <Link href="/about" className="link">
                read how we work
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section id="early-access" className="border-t border-line bg-surface">
        <div className="container-x section grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="t-h2 text-ink">Join early access.</h2>
            <p className="t-lede mt-4">
              Tell us which product you are interested in. Access opens gradually
              as each one becomes ready. No payment required.
            </p>
            <p className="mt-6 text-sm text-muted">
              No spam. Read our{" "}
              <Link href="/legal/privacy" className="link">
                privacy policy
              </Link>
              .
            </p>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <EarlyAccessForm />
          </div>
        </div>
      </section>
    </>
  );
}
