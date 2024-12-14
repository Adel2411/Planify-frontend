"use client";

import { HeroSection } from "@/features/landing-page/components/HeroSection";
import { FeaturesSection } from "@/features/landing-page/components/FeaturesSection";
import { FAQSection } from "@/features/landing-page/components/FAQSection";
import { IntegrationSection } from "@/features/landing-page/components/IntegrationSection";
import { CallToActionSection } from "@/features/landing-page/components/CallToActionSection";
import { WorkflowSection } from "@/features/landing-page/components/WorkflowSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <WorkflowSection />
      <IntegrationSection />
      <FAQSection />
      <CallToActionSection />
    </main>
  );
}
