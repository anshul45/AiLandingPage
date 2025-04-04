import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BrandsSection } from "@/components/BrandsSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { PluginSection } from "@/components/PluginSection";
import { InsightsSection } from "@/components/InsightsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { ArticlesSection } from "@/components/ArticlesSection";
import { FaqSection } from "@/components/FaqSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/providers/theme-provider"; // Assuming ThemeProvider setup

export default function Home() {
  return (
    <ThemeProvider
    >
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <BrandsSection />
          <BenefitsSection />
          <FeaturesSection />
          <PluginSection />
          <InsightsSection />
          <TestimonialsSection />
          <PricingSection />
          <ArticlesSection />
          <FaqSection />
          <NewsletterSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}