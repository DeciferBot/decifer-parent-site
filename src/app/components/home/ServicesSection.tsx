import Link from "next/link";
import SectionHead from "../SectionHead";
import ServiceRow from "../ServiceCard";
import Arrow from "../Arrow";
import { servicesOrdered } from "../../data/services";

export default function ServicesSection() {
  return (
    <section id="services" className="border-t border-line">
      <div className="container-x section">
        <SectionHead
          title="Four things we build."
          lede="Each one ends with something running in production, on your accounts, with a written boundary and a log. Most engagements start with the two-week audit."
        />
        <ul className="ruled mt-12">
          {servicesOrdered.map((s) => (
            <ServiceRow key={s.key} service={s} />
          ))}
        </ul>
        <p className="mt-8">
          <Link href="/services" className="arrow-link">
            How engagements run, and what you receive
            <Arrow />
          </Link>
        </p>
      </div>
    </section>
  );
}
