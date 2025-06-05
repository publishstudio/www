"use client";

import CtaSection from "@/components/social-studio/CtaSection";
import FeaturesSection from "@/components/social-studio/FeaturesSection";
import HeroSection from "@/components/social-studio/HeroSection";
import Navbar from "@/components/social-studio/Navbar";
import PricingSection from "@/components/social-studio/PricingSection";

export default function SocialStudioPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <CtaSection />
      </main>
    </>
  );
}
