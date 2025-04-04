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
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden py-16 px-4 md:px-8">
      <AnimatedWrapper className="text-center">
        <h2 className="text-xl font-medium text-muted-foreground md:text-2xl">
          Trusted by brands you know
        </h2>
      </AnimatedWrapper>

      <AnimatedWrapper className="mt-8 w-full max-w-4xl" delay={0.2}>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {brands.map((brand) => (
            <div key={brand.alt} className="h-[30px] w-[120px] md:w-[150px]">
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
      </AnimatedWrapper>
    </section>
  );
}
