import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/app/components/PageHero";
import SectionLabel from "@/app/components/SectionLabel";
import ProductCard, { accentVars } from "@/app/components/ProductCard";
import EarlyAccessForm from "@/app/components/EarlyAccessForm";
import { products } from "@/app/data/products";

export const metadata: Metadata = {
  title: "Products: Decifer Markets, Decifer Learning and Decifer Marketing",
  description:
    "The three public products DECIFER builds and runs with the same method it uses for client work. Market intelligence, a UK curriculum learning companion, and marketing intelligence.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        label="Products"
        title={
          <>
            Three products,
            <br />
            <span className="font-display font-normal italic text-cta">
              one method.
            </span>
          </>
        }
        lede="DECIFER builds its own products first. They exist so that anyone thinking of hiring us can open something we run, on our own money, before a single conversation."
      />

      <section id="family" className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {products.map((p, i) => (
              <ProductCard
                key={p.key}
                product={p}
                scrollClass={`scroll-reveal-${(i % 3) + 1}`}
              />
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {products.map((p) => (
              <p
                key={p.key}
                className="rounded-xl border px-5 py-4 text-sm leading-relaxed text-body"
                style={{
                  borderColor: "rgba(var(--accent-rgb),0.25)",
                  backgroundColor: "rgba(var(--accent-rgb),0.05)",
                  ...accentVars(p),
                }}
              >
                <span className="font-semibold" style={{ color: "var(--accent)" }}>
                  {p.name}
                </span>{" "}
                {p.boundaryShort}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionLabel>Why we build our own</SectionLabel>
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            The products are the lab. Client work gets the tested version.
          </h2>
          <div className="space-y-5 text-[15px] leading-relaxed text-body">
            <p>
              Each product turns the noise of its own domain into plain-language
              understanding: collect inputs that can be checked, connect them with
              the rules of the domain, explain the result so a person can act on
              it. The same three steps run every client engagement.
            </p>
            <p>
              Running them in production is where the method gets tested. The
              guardrails, the cost controls, the habit of removing AI where a
              plain check is better, all of it was learned here first. If you
              want to know how we would build for you, open one of these.
            </p>
            <p>
              <Link href="/services" className="text-cta hover:underline">
                See the services
              </Link>{" "}
              or{" "}
              <Link href="/about" className="text-cta hover:underline">
                read how we work
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section
        id="early-access"
        className="relative overflow-hidden bg-surface py-20 sm:py-28"
      >
        <div className="absolute inset-0 hero-beam opacity-60" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-xl px-5 sm:px-8">
          <div className="mb-10 text-center">
            <SectionLabel>Early Access</SectionLabel>
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Join early access.
            </h2>
            <p className="text-base leading-relaxed text-body">
              Tell us which DECIFER product you are interested in. Access will
              open gradually as each product becomes ready.
            </p>
          </div>

          <EarlyAccessForm />

          <p className="mt-6 text-center text-xs text-muted">
            No payment required for early access. No spam. Read our{" "}
            <a
              href="/legal/privacy"
              className="text-body underline-offset-2 hover:text-ink hover:underline"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
