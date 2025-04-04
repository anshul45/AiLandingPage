"use client";

import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import BrandsSection from '@/components/brands-section';
import IntroSection from '@/components/intro-section';
import FeaturesSection from '@/components/features-section';
import TestimonialsSection from '@/components/testimonials-section';
import PricingSection from '@/components/pricing-section';
import NewsletterSection from '@/components/newsletter-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <BrandsSection />
        <IntroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
