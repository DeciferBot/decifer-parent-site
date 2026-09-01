import type { Metadata } from "next";
import HeroSection from "./components/home/HeroSection";
import SystemField from "./components/SystemField";
import EvidenceSection from "./components/home/EvidenceSection";
import StallSection from "./components/home/StallSection";
import DiagramSection from "./components/home/DiagramSection";
import ResponsibilitySection from "./components/home/ResponsibilitySection";
import ServicesSection from "./components/home/ServicesSection";
import HowWeBuildSection from "./components/home/HowWeBuildSection";
import PeopleProcessSection from "./components/home/PeopleProcessSection";
import SolvedSection from "./components/home/SolvedSection";
import BuiltSection from "./components/home/BuiltSection";
import FounderSection from "./components/home/FounderSection";
import FaqSection from "./components/home/FaqSection";
import ToolsSection from "./components/home/ToolsSection";
import CtaBand from "./components/CtaBand";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      {/*
        Band order is the page's rhythm, and it is deliberate: no two
        neighbouring sections share a ground, and the proof (BuiltSection,
        the only photography on the site) arrives early enough that a reader
        moving fast still meets it. See DESIGN.md, "Surface rhythm".
          canvas → tint → panel → tint → dark → panel → orange → tint →
          panel → warm → panel → orange

        DiagramSection sits straight after StallSection on purpose: the
        reader has just read six reasons pilots stall, and the drawing shows
        each of them as a part somebody left out.
      */}
      <HeroSection />
      <SystemField />
      <EvidenceSection />
      <StallSection />
      <DiagramSection />
      <BuiltSection />
      <ServicesSection />
      <HowWeBuildSection />
      <ResponsibilitySection />
      <SolvedSection />
      <PeopleProcessSection />
      <FounderSection />
      <ToolsSection />
      <FaqSection />
      <CtaBand eventPrefix="home" />
    </>
  );
}
