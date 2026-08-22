import SectionLabel from "../SectionLabel";
import ProductCard from "../ProductCard";
import { products } from "../../data/products";

export default function ProductsSection() {
  return (
    <section id="products" className="bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-14 text-center">
          <SectionLabel>The Family</SectionLabel>
          <h2 className="mx-auto max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Three products, one method.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-body">
            DECIFER builds a family of intelligence products. Each one turns
            the noise of its own domain into plain-language understanding,
            using the same underlying method.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {products.map((p, i) => (
            <ProductCard
              key={p.key}
              product={p}
              scrollClass={`scroll-reveal-${(i % 3) + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
