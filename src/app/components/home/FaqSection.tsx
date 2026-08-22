import SectionLabel from "../SectionLabel";
import { FAQ_ITEMS, faqJsonLd } from "../../data/faq";

export default function FaqSection() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="mb-14 text-center">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Questions, answered.
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <details
              key={item.q}
              className="card-lift group rounded-2xl border border-line-strong bg-surface px-6 py-5 [&[open]]:border-cta/40"
              {...(i === 0 ? { open: true } : {})}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {item.q}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  className="flex-shrink-0 text-muted transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                >
                  <path d="M9 4v10M4 9h10" />
                </svg>
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-body">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />
    </section>
  );
}
