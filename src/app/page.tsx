"use client";

import CaseStudies from "@/components/CaseStudies";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import SolutionOverview from "@/components/SolutionOverview";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-dark">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowItWorks />
        <SolutionOverview />
        <CaseStudies />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
