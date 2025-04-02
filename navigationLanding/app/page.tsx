"use client";

import React from 'react';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { TrustedBrands } from '@/components/trusted-brands';
import { BenefitsSection } from '@/components/benefits-section';
import { FeaturesSection } from '@/components/features-section';
import { ArticlesSection } from '@/components/articles-section';
import { FaqSection } from '@/components/faq-section';
import { SignupSection } from '@/components/signup-section';
import { Footer } from '@/components/footer';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <TrustedBrands />
        <BenefitsSection />
        <FeaturesSection />
        <ArticlesSection />
        <FaqSection />
        <SignupSection />
      </main>
      <Footer />
    </div>
  );
}