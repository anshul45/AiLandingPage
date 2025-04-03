"use client";

import React from "react";
import Image from "next/image";
import { AnimatedDiv } from "./animated-div";
import {motion} from "framer-motion"

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
    <section className="relative flex mx-auto w-[70%] max-w-[70%] flex-col place-content-center place-items-center overflow-hidden p-8">
      <AnimatedDiv>
        <h2 className="text-xl md:text-3xl text-center text-muted-foreground">
          Trusted by brands you know
        </h2>
      </AnimatedDiv>

      <div className="overflow-hidden  relative mt-10 ">
      <motion.div
        className="flex gap-10"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ ease: "linear", duration: 50, repeat: Infinity }}
      >
        {[...brands, ...brands].map((brand, index) => (
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
      </motion.div>
    </div>
    </section>
  );
}