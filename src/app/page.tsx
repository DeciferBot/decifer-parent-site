import type { Metadata } from "next";
import HeroSection from "./components/home/HeroSection";
import ProblemSection from "./components/home/ProblemSection";
import MethodSection from "./components/home/MethodSection";
import ProductsSection from "./components/home/ProductsSection";
import PrinciplesSection from "./components/home/PrinciplesSection";
import FounderSection from "./components/home/FounderSection";
import FaqSection from "./components/home/FaqSection";
import EarlyAccessSection from "./components/home/EarlyAccessSection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <MethodSection />
      <ProductsSection />
      <PrinciplesSection />
      <FounderSection />
      <FaqSection />
      <EarlyAccessSection />
    </>
  );
}
