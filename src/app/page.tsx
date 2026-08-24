import type { Metadata } from "next";
import HeroSection from "./components/home/HeroSection";
import ProductsSection from "./components/home/ProductsSection";
import ServicesSection from "./components/home/ServicesSection";
import WorkSection from "./components/home/WorkSection";
import RuleSection from "./components/home/RuleSection";
import CompareSection from "./components/home/CompareSection";
import StackSection from "./components/home/StackSection";
import FounderSection from "./components/home/FounderSection";
import FaqSection from "./components/home/FaqSection";
import CtaBand from "./components/CtaBand";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <ServicesSection />
      <WorkSection />
      <RuleSection />
      <CompareSection />
      <StackSection />
      <FounderSection />
      <FaqSection />
      <CtaBand eventPrefix="home" />
    </>
  );
}
