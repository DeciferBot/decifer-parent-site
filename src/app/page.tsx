import type { Metadata } from "next";
import HeroSection from "./components/home/HeroSection";
import ProofBar from "./components/home/ProofBar";
import ProblemSection from "./components/home/ProblemSection";
import ServicesSection from "./components/home/ServicesSection";
import DoctrineSection from "./components/home/DoctrineSection";
import MethodSection from "./components/home/MethodSection";
import CaseShapesSection from "./components/home/CaseShapesSection";
import StackSection from "./components/home/StackSection";
import ProductsSection from "./components/home/ProductsSection";
import PrinciplesSection from "./components/home/PrinciplesSection";
import FounderSection from "./components/home/FounderSection";
import FaqSection from "./components/home/FaqSection";
import CtaSection from "./components/home/CtaSection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProofBar />
      <ProblemSection />
      <ServicesSection />
      <DoctrineSection />
      <MethodSection />
      <CaseShapesSection />
      <StackSection />
      <ProductsSection />
      <PrinciplesSection />
      <FounderSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
