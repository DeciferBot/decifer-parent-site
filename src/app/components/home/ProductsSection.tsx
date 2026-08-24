import Link from "next/link";
import ProductFrame from "../ProductFrame";
import { products } from "../../data/products";

export default function ProductsSection() {
  return (
    <section id="products" className="pb-7 sm:pb-10">
      <div className="container-x">
        <div className="panel">
          <div className="panel-head">
            <h2 className="label">Open before you hire us</h2>
            <Link href="/products" className="link text-sm">
              The product family
            </Link>
          </div>
          <div className="grid gap-px bg-line md:grid-cols-3">
            {products.map((p) => (
              <div key={p.key} className="bg-panel p-6">
                <ProductFrame product={p} tone="ink" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
