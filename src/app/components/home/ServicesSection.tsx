import Link from "next/link";
import SectionLabel from "../SectionLabel";
import ServiceCard from "../ServiceCard";
import { servicesOrdered } from "../../data/services";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-14 text-center">
          <SectionLabel>Services</SectionLabel>
          <h2 className="mx-auto max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Four ways we work. Each ends with something running.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-body">
            Most engagements start with a two-week audit, fixed fee, credited
            against any build. It tells you what is worth automating, what is
            not, and what to do first.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {servicesOrdered.map((s, i) => (
            <ServiceCard key={s.key} service={s} scrollClass={`scroll-reveal-${(i % 2) + 1}`} />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          <Link href="/services" className="text-cta hover:underline">
            How engagements run, and what you receive
          </Link>
        </p>
      </div>
    </section>
  );
}
