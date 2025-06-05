"use client";

import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import OverviewSection from "@/components/OverviewSection";
import ProductShowcase from "@/components/ProductShowcase";
import UseCasesSection from "@/components/UseCasesSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <OverviewSection />
        <ProductShowcase />
        <UseCasesSection />
      </main>
    </>
  );
}
