"use client";

import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { BrandsSection } from "@/components/brands-section";
import { FeatureSection } from "@/components/feature-section";
import { CoreFeaturesSection } from "@/components/core-features-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { PricingSection } from "@/components/pricing-section";
import { ArticlesSection } from "@/components/articles-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { Footer } from "@/components/footer";

const codingFeatures = [
  {
    title: "AI powered",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis commodi temporibus at? Aspernatur, a necessitatibus?",
  },
  {
    title: "Locally run",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis commodi temporibus at? Aspernatur, a necessitatibus?",
  },
];

const gitFeatures = [
  {
    title: "Git",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis commodi temporibus at? Aspernatur, a necessitatibus?",
  },
  {
    title: "Github",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis commodi temporibus at? Aspernatur, a necessitatibus?",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans"> {/* Changed font to sans, adjust if mono is needed */}
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <BrandsSection />
        <FeatureSection
          id="about" // Added ID for navigation
          title="Streamlined Coding"
          features={codingFeatures}
          imageUrl="/assets/images/home/coding.png"
          imageAlt="Coding illustration"
        />
        <FeatureSection
          id="company" // Added ID for navigation
          title="Powerful Version Control"
          features={gitFeatures}
          imageUrl="/assets/images/home/git.png"
          imageAlt="Git illustration"
          reverseOrder={true}
        />
        <CoreFeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <ArticlesSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
