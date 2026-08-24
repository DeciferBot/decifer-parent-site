import { FAQ_ITEMS, faqJsonLd } from "../../data/faq";
import { jsonLd } from "@/lib/jsonld";

/**
 * Native details/summary so it works without JavaScript and reads well to
 * assistive tech. The FAQPage structured data is built from the same list.
 */
export default function FaqSection() {
  return (
    <section id="faq" className="pb-7 sm:pb-10">
      <div className="container-x">
        <div className="panel">
          <div className="panel-head">
            <h2 className="label">Questions buyers ask us</h2>
            <a href="mailto:hello@decifer.io" className="link text-sm">
              Ask a different one
            </a>
          </div>
          <div className="px-6">
            {FAQ_ITEMS.map((item, i) => (
              <details key={item.q} className={`faq ${i > 0 ? "border-t border-line" : ""}`}>
                <summary>
                  <span>{item.q}</span>
                  <span className="faq-icon" aria-hidden="true" />
                </summary>
                <p className="faq-body">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqJsonLd()) }}
      />
    </section>
  );
}
