"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { BrandsSection } from "@/components/sections/brands-section";
import { ApiCtaSection } from "@/components/sections/api-cta-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { ToolsSection } from "@/components/sections/tools-section";
import { AdditionalFeaturesSection } from "@/components/sections/additional-features-section";
import { SubscriptionSection } from "@/components/sections/subscription-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ResourcesSection } from "@/components/sections/resources-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <BrandsSection />
        <ApiCtaSection />
        <BenefitsSection />
        <ToolsSection />
        <AdditionalFeaturesSection />
        <SubscriptionSection />
        <TestimonialsSection />
        <PricingSection />
        <ResourcesSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
