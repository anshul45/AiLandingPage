
import AdditionalFeatures from "@/components/AdditionalFeature";
import AiBenefits from "@/components/AiBenefits";
import Blog from "@/components/Blog";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/NewsLetter";
import Overview from "@/components/Overview";
import PreBuiltTools from "@/components/PreBuiltTools";
import Pricing from "@/components/Pricing";
import SubscriptionComparison from "@/components/SubscriptionComaprison";
import Testimonial from "@/components/Testimonial";
import TrustedBrands from "@/components/TrustedBrands";

export default function Home() {
  return (
    <div className="relative h-[700vh]">
      <div className="sticky top-3 z-50">
      <Navbar />
      </div>

      <Hero />
      <Overview />
      <TrustedBrands />
      <Hero2 />
      <AiBenefits />
      <PreBuiltTools />
      <AdditionalFeatures/>
      <SubscriptionComparison/>
      <Testimonial/>
      <Pricing/>
      <Blog/>
      <Faq/>
      <Cta/>
      <Newsletter/>
    </div>
  );
}
