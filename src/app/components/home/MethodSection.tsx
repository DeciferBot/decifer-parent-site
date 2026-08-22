import SectionLabel from "../SectionLabel";
import MethodSteps from "../MethodSteps";

export default function MethodSection() {
  return (
    <section id="method" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-14 text-center">
          <SectionLabel>The Method</SectionLabel>
          <h2 className="mx-auto max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            How DECIFER turns information into intelligence.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-body">
            Every DECIFER product follows the same basic method: collect
            trusted inputs, connect them with domain logic, and explain the
            result in plain language.
          </p>
        </div>

        <MethodSteps />
      </div>
    </section>
  );
}
