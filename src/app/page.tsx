
"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
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


const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};


const PerspectiveOverviewSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  
  const rotateX = useTransform(
    scrollYProgress,
    [0, 1],
    [10, 0] 
  );
  
  const z = useTransform(
    scrollYProgress,
    [0, 1],
    [-200, 0] 
  );
  
  return (
    <div ref={ref} className="w-full overflow-visible my-14 perspective-[1000px]">
      <motion.div
        style={{ 
          rotateX,
          z,
          transformOrigin: "center bottom"
        }}
        className="w-full"
      >
        <Overview />
      </motion.div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="relative">
      <div className="sticky top-3 z-50">
        <Navbar />
      </div>
     
      <AnimatedSection>
      <Hero />
      </AnimatedSection>
      
      <PerspectiveOverviewSection />
      

      <AnimatedSection>
        <TrustedBrands />
      </AnimatedSection>
      
      <AnimatedSection>
        <Hero2 />
      </AnimatedSection>
      
      <AnimatedSection>
        <AiBenefits />
      </AnimatedSection>
      
      <AnimatedSection>
        <PreBuiltTools />
      </AnimatedSection>
      
      <AnimatedSection>
        <AdditionalFeatures />
      </AnimatedSection>
      
      <AnimatedSection>
        <SubscriptionComparison />
      </AnimatedSection>
      
      <AnimatedSection>
        <Testimonial />
      </AnimatedSection>
      
      <AnimatedSection>
        <Pricing />
      </AnimatedSection>
      
      <AnimatedSection>
        <Blog />
      </AnimatedSection>
      
      <AnimatedSection>
        <Faq />
      </AnimatedSection>
      
      <AnimatedSection>
        <Cta />
      </AnimatedSection>
      
      <AnimatedSection>
        <Newsletter />
      </AnimatedSection>
    </div>
  );
}
