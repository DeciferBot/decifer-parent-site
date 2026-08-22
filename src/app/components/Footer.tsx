import Link from "next/link";
import DeciferLogo from "./DeciferLogo";
import { products } from "../data/products";
import { servicesOrdered } from "../data/services";

const legalLinks = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Use", href: "/legal/terms" },
  { label: "Financial Disclaimer", href: "/legal/financial-disclaimer" },
  { label: "Education Disclaimer", href: "/legal/education-disclaimer" },
  { label: "AI Policy", href: "/legal/ai-policy" },
  { label: "Child Safety", href: "/legal/child-safety" },
  { label: "Refund Policy", href: "/legal/refunds" },
  { label: "Client Confidentiality", href: "/legal/client-confidentiality" },
];

const siteLinks = [
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Tools we build with", href: "/stack" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/#faq" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line-strong bg-canvas">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <DeciferLogo size="sm" className="mb-4" />
            <p className="max-w-xs text-sm leading-relaxed text-body">
              DECIFER is an AI company in Dubai. We build agents, automation
              and complete products for businesses, and we run Decifer
              Markets, Decifer Learning and Decifer Marketing with the same
              method.
            </p>
          </div>

          {/* Services */}
          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Services
            </div>
            <ul className="space-y-2.5">
              {servicesOrdered.map((s) => (
                <li key={s.key}>
                  <Link
                    href={`/services/${s.key}`}
                    className="text-sm text-body transition-colors hover:text-ink"
                  >
                    {s.navLabel}
                  </Link>
                </li>
              ))}
              {siteLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-body transition-colors hover:text-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Products
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/products"
                  className="text-sm text-body transition-colors hover:text-ink"
                >
                  All products
                </Link>
              </li>
              {products.map((p) =>
                p.href ? (
                  <li key={p.key}>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-body transition-colors hover:text-ink"
                    >
                      {p.name}
                    </a>
                  </li>
                ) : (
                  <li key={p.key} className="text-sm text-muted">
                    {p.name}{" "}
                    <span className="text-faint">(soon)</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Legal
            </div>
            <ul className="space-y-2.5">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-body transition-colors hover:text-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 space-y-3 border-t border-line-strong pt-8">
          <div className="grid gap-2 text-xs leading-relaxed text-muted sm:grid-cols-3">
            {products.map((p) => (
              <p key={p.key}>
                {p.name} {p.boundaryShort}
              </p>
            ))}
          </div>
          <p className="text-xs text-muted">
            &copy; 2026 DECIFER. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
