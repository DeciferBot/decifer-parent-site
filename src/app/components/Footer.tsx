import Link from "next/link";
import DeciferLogo from "./DeciferLogo";
import { products } from "../data/products";
import { servicesOrdered } from "../data/services";

const legalLinks = [
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Terms", href: "/legal/terms" },
  { label: "Client confidentiality", href: "/legal/client-confidentiality" },
  { label: "AI accuracy policy", href: "/legal/ai-policy" },
  { label: "Financial disclaimer", href: "/legal/financial-disclaimer" },
  { label: "Education disclaimer", href: "/legal/education-disclaimer" },
  { label: "Child safety", href: "/legal/child-safety" },
  { label: "Refunds", href: "/legal/refunds" },
];

const companyLinks = [
  { label: "How we work", href: "/how-we-work" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const colClass = "text-[0.9375rem] text-on-dark-2 transition-colors hover:text-on-dark";
const headClass = "mb-4 text-sm font-semibold text-on-dark";

export default function Footer() {
  return (
    <footer className="bg-dark text-on-dark">
      <div className="container-x py-16 sm:py-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-12">
          <div className="col-span-2 md:col-span-4">
            <DeciferLogo size="sm" tone="light" />
            <p className="mt-5 max-w-xs text-[0.9375rem] leading-relaxed text-on-dark-2">
              An AI implementation company in Dubai. We take business
              processes from AI pilot to dependable daily operation, and we
              run three public products on the same method.
            </p>
            <p className="mt-5 text-[0.9375rem]">
              <a href="mailto:hello@decifer.io" className="link-quiet text-on-dark">
                hello@decifer.io
              </a>
            </p>
          </div>

          <div className="md:col-span-2">
            <p className={headClass}>Services</p>
            <ul className="space-y-2.5">
              {servicesOrdered.map((s) => (
                <li key={s.key}>
                  <Link href={`/services/${s.key}`} className={colClass}>
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className={headClass}>Built by Decifer</p>
            <ul className="space-y-2.5">
              {products.map((p) => (
                <li key={p.key}>
                  {p.href ? (
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className={colClass}>
                      {p.name}
                    </a>
                  ) : (
                    <span className="text-[0.9375rem] text-on-dark-2">{p.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className={headClass}>Company</p>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={colClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className={headClass}>Legal</p>
            <ul className="space-y-2.5">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={colClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-line-dark pt-8">
          <div className="flex flex-col gap-4 text-sm text-on-dark-2 md:flex-row md:items-start md:justify-between">
            <p className="max-w-2xl leading-relaxed">
              Decifer Markets is research context, not financial advice, and runs
              on a broker paper account. Decifer Learning supports learning and
              does not replace teachers. Decifer Marketing is insight, not a
              substitute for professional advice.
            </p>
            <p className="shrink-0">Decifer, Dubai, UAE. &copy; 2026</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
