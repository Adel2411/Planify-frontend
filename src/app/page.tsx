"use client";

import { HeroSection } from "@/features/landing-page/components/HeroSection";
import { FeaturesSection } from "@/features/landing-page/components/FeaturesSection";
import { FAQSection } from "@/features/landing-page/components/FAQSection";
import { IntegrationSection } from "@/features/landing-page/components/IntegrationSection";
import { CallToActionSection } from "@/features/landing-page/components/CallToActionSection";
import { WorkflowSection } from "@/features/landing-page/components/WorkflowSection";
import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="fixed top-4 right-4 z-20">
        <ModeToggle />
      </div>
      <HeroSection />
      <FeaturesSection />
      <WorkflowSection />
      <IntegrationSection />
      <FAQSection />
      <CallToActionSection />
    </main>
  );
}
