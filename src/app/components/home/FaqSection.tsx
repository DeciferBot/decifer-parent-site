import { FAQ_ITEMS, faqJsonLd } from "../../data/faq";
import { jsonLd } from "@/lib/jsonld";

/**
 * Native details/summary so it works without JavaScript and reads well to
 * assistive tech. The FAQPage structured data is built from the same list.
 */
export default function FaqSection() {
  return (
    <section id="faq" className="border-t border-line">
      <div className="container-x section">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="t-h2 text-ink">Questions we get asked.</h2>
            <p className="t-lede mt-4">
              If yours is not here, email{" "}
              <a href="mailto:hello@decifer.io" className="link">
                hello@decifer.io
              </a>
              .
            </p>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <div className="ruled">
              {FAQ_ITEMS.map((item) => (
                <details key={item.q} className="faq">
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
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqJsonLd()) }}
      />
    </section>
  );
}
