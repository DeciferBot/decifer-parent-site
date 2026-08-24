import Link from "next/link";
import ServiceRow from "../ServiceCard";
import { servicesOrdered } from "../../data/services";

export default function ServicesSection() {
  return (
    <section id="services" className="pb-7 sm:pb-10">
      <div className="container-x">
        <div className="panel">
          <div className="panel-head">
            <h2 className="label">What we build</h2>
            <Link href="/services" className="link text-sm">
              How engagements run
            </Link>
          </div>
          <ul className="divide-y divide-line">
            {servicesOrdered.map((s) => (
              <ServiceRow key={s.key} service={s} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
