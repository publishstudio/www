"use client";

import CtaSection from "@/components/blog-studio/CtaSection";
import FeaturesSection from "@/components/blog-studio/FeaturesSection";
import HeroSection from "@/components/blog-studio/HeroSection";
import Navbar from "@/components/blog-studio/Navbar";
import PricingSection from "@/components/blog-studio/PricingSection";
import SupportedPlatformsSection from "@/components/blog-studio/SupportedPlatformsSection";

export default function BlogStudioPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <SupportedPlatformsSection />
        <PricingSection />
        <CtaSection />
      </main>
    </>
  );
}
