"use client";

import React from "react";
import Image from "next/image";
import { AnimatedDiv } from "./animated-div";

const benefits = [
  {
    icon: "/assets/images/icons/unlock.png",
    alt: "Integration icon",
    text: "Easily integrate navigator with your car",
  },
  {
    icon: "/assets/images/icons/lighting.png",
    alt: "Speed icon",
    text: "Lightning fast performance for instant routes",
  },
  {
    icon: "/assets/images/icons/credit-card.png",
    alt: "Payment icon",
    text: "Securely add payment methods for tolls & parking",
  },
  {
    icon: "/assets/images/icons/music.png",
    alt: "Music icon",
    text: "Integrate your favorite music streaming services",
  },
  {
    icon: "/assets/images/icons/unlock.png", // Placeholder, replace if needed
    alt: "Feature icon",
    text: "Voice commands for hands-free operation",
  },
  {
    icon: "/assets/images/icons/lighting.png", // Placeholder, replace if needed
    alt: "Update icon",
    text: "Real-time traffic updates and rerouting",
  },
];

export function BenefitsSection() {
  return (
    <section className="relative mt-10 flex min-h-screen w-full max-w-[100vw] flex-col items-center lg:p-6">
      <AnimatedDiv>
        <h2 className="text-3xl md:text-4xl text-center font-medium mb-10 md:mb-20">
          Experience the key benefits
        </h2>
      </AnimatedDiv>

      <div className="flex h-full w-full flex-col lg:flex-row place-content-center gap-8 p-4 lg:max-w-[90%] xl:max-w-[1200px]">
        {/* Left Column: Benefits Text */}
        <div className="flex w-full lg:w-1/2 flex-col gap-16 lg:gap-24 xl:gap-32 px-4 lg:px-[5%] xl:px-[10%]">
          {benefits.map((benefit, index) => (
            <AnimatedDiv key={index} delay={index * 0.1} className="flex items-start gap-4 md:gap-6">
              <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex-shrink-0">
                <Image
                  src={benefit.icon}
                  alt={benefit.alt}
                  width={80}
                  height={80}
                  className="object-contain w-full h-full dark:invert"
                />
              </div>
              <h3 className="text-2xl font-medium lg:text-3xl xl:text-4xl mt-1">
                {benefit.text}
              </h3>
            </AnimatedDiv>
          ))}
        </div>

        {/* Right Column: Sticky Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-start mt-10 lg:mt-0">
          <div className="lg:sticky lg:top-20 w-full max-w-[320px] lg:max-w-[400px] xl:max-w-[500px] h-auto lg:max-h-[80vh] overflow-hidden rounded-lg">
                <Image
                    src="/assets/images/home/phone3.png"
                    alt="Phone showing app interface"
                    width={500} 
                    height={1000} 
                    className="h-full w-full object-contain"
                />
          </div>
        </div>
      </div>
    </section>
  );
}