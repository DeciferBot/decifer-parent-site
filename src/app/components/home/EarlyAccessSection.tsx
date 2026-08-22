import SectionLabel from "../SectionLabel";
import EarlyAccessForm from "../EarlyAccessForm";

export default function EarlyAccessSection() {
  return (
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
  );
}
