import type { Metadata } from "next";
import HeroSection from "./components/home/HeroSection";
import SolvedSection from "./components/home/SolvedSection";
import ServicesSection from "./components/home/ServicesSection";
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
      <SolvedSection />
      <ServicesSection />
      <RuleSection />
      <CompareSection />
      <StackSection />
      <FounderSection />
      <FaqSection />
      <CtaBand eventPrefix="home" />
    </>
  );
}
