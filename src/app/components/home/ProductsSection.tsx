import Link from "next/link";
import SectionHead from "../SectionHead";
import ProductFrame from "../ProductFrame";
import Arrow from "../Arrow";
import { products } from "../../data/products";

export default function ProductsSection() {
  return (
    <section id="products" className="bg-dark text-on-dark">
      <div className="container-x section">
        <SectionHead
          tone="light"
          title="Three products we run ourselves."
          lede="Open them before you hire us. The products are where the method gets tested in production, and client work gets the version that has already been through it."
        />
        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {products.map((p) => (
            <ProductFrame key={p.key} product={p} tone="light" />
          ))}
        </div>
        <p className="mt-12">
          <Link href="/products" className="arrow-link text-on-dark">
            The product family, boundaries and early access
            <Arrow />
          </Link>
        </p>
      </div>
    </section>
  );
}
