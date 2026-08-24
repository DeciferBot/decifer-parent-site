import type { Metadata } from "next";
import HeroSection from "./components/home/HeroSection";
import EvidenceSection from "./components/home/EvidenceSection";
import StallSection from "./components/home/StallSection";
import ResponsibilitySection from "./components/home/ResponsibilitySection";
import ServicesSection from "./components/home/ServicesSection";
import HowWeBuildSection from "./components/home/HowWeBuildSection";
import PeopleProcessSection from "./components/home/PeopleProcessSection";
import SolvedSection from "./components/home/SolvedSection";
import BuiltSection from "./components/home/BuiltSection";
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
      <EvidenceSection />
      <StallSection />
      <ResponsibilitySection />
      <ServicesSection />
      <HowWeBuildSection />
      <PeopleProcessSection />
      <SolvedSection />
      <BuiltSection />
      <FounderSection />
      <FaqSection />
      <CtaBand eventPrefix="home" />
    </>
  );
}
