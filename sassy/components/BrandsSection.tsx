"use client";

import React from "react";
import Image from "next/image";

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
    <section className="relative w-full overflow-hidden py-8">
      <h2 className="text-xl md:text-3xl text-center text-muted-foreground mb-6">
        Trusted by brands you know
      </h2>

      <div className="relative w-[60%] mt-14 mx-auto overflow-hidden">
        <div className="flex w-max animate-[scrolling_10s_linear_infinite]">
          {[...brands, ...brands].map((brand, index) => (
            <div key={index} className="mx-4 h-[30px] w-[120px] sm:w-[150px]">
              <Image
                src={brand.src}
                alt={brand.alt}
                width={150}
                height={30}
                className="h-full w-full object-contain grayscale transition-all duration-300 hover:grayscale-0 dark:invert dark:hover:invert-0"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for Infinite Scrolling */}
      <style jsx>{`
        @keyframes scrolling {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
