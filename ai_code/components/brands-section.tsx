"use client";

import React from "react";
import Image from "next/image";
import { AnimatedWrapper } from "@/components/animated-wrapper";

const brands = [
  { src: "/assets/images/brand-logos/google.svg", alt: "Google" },
  { src: "/assets/images/brand-logos/microsoft.svg", alt: "Microsoft" },
  { src: "/assets/images/brand-logos/adobe.svg", alt: "Adobe" },
  { src: "/assets/images/brand-logos/airbnb.svg", alt: "Airbnb" },
  { src: "/assets/images/brand-logos/stripe.svg", alt: "Stripe" },
  { src: "/assets/images/brand-logos/reddit.svg", alt: "Reddit" },
];

export function BrandsSection() {
  return (
    <section className="relative flex w-[55%] mx-auto flex-col items-center justify-center overflow-hidden py-10 px-4 md:px-8"> 
        <h2 className="text-xl font-medium text-muted-foreground md:text-2xl">
          Trusted by brands you know
        </h2>

      <AnimatedWrapper className="mt-8 overflow-hidden" delay={0.2}>
        <div className="relative w-full">
          {/* Inline <style> for keyframes */}
          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0%);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>

          <div className="flex mx-auto whitespace-nowrap [animation:scroll_20s_linear_infinite]">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.alt}-${index}`}
                className="mx-6 h-[30px] w-[120px] md:w-[150px]"
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={150}
                  height={30}
                  className="h-full w-full object-contain grayscale transition-all hover:grayscale-0 dark:invert dark:hover:invert-0"
                />
              </div>
            ))}
          </div>
        </div>
      </AnimatedWrapper>
    </section>
  );
}
