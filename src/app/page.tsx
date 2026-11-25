"use client";

import { useState } from "react";
import { MotionConfig } from "framer-motion";
import type { FeatureItem } from "@/data/suvilan-data";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ServicesSection } from "@/components/ServicesSection";
import { FeatureSection } from "@/components/FeatureSection";
import { BusinessBoosterSection } from "@/components/BusinessBoosterSection";
import { ComingSoonSection } from "@/components/ComingSoonSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { WhySuvilanSection } from "@/components/WhySuvilanSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [selectedFeature, setSelectedFeature] = useState<FeatureItem | null>(
    null
  );

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <ProblemSection />
          <ServicesSection />
          <FeatureSection
            selectedFeature={selectedFeature}
            onSelectFeature={setSelectedFeature}
          />
          <BenefitsSection />
          <BusinessBoosterSection />
          <ComingSoonSection
            onSelectFeature={(feature) => setSelectedFeature(feature)}
          />
          <WhySuvilanSection />
          <FAQSection />
          <FinalCTASection />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
