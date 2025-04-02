"use client";

import React from "react";
import Image from "next/image";
import { AnimatedDiv } from "./animated-div";

const brands = [
  { src: "/assets/images/brand-logos/google.svg", alt: "Google" },
  { src: "/assets/images/brand-logos/microsoft.svg", alt: "Microsoft" },
  { src: "/assets/images/brand-logos/adobe.svg", alt: "Adobe" },
  { src: "/assets/images/brand-logos/airbnb.svg", alt: "Airbnb" },
  { src: "/assets/images/brand-logos/stripe.svg", alt: "Stripe" },
  { src: "/assets/images/brand-logos/reddit.svg", alt: "Reddit" },
];

export function TrustedBrands() {
  return (
    <section className="relative flex w-full max-w-[100vw] flex-col place-content-center place-items-center overflow-hidden p-8">
      <AnimatedDiv>
        <h2 className="text-xl md:text-3xl text-center text-muted-foreground">
          Trusted by brands you know
        </h2>
      </AnimatedDiv>

      <AnimatedDiv delay={0.2} className="mt-6 w-full">
        <div className="flex flex-wrap justify-center gap-5 md:gap-10 lg:gap-16">
          {brands.map((brand, index) => (
            <div key={index} className="h-[30px] w-[100px] md:w-[150px] flex items-center justify-center">
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
      </AnimatedDiv>
    </section>
  );
}