"use client";

import React from "react";
import { PricingCard } from "@/components/ui/pricing-card";
import { AnimatedDiv } from "@/components/ui/animated-div";

const pricingPlans = [
  {
    price: 9,
    description: "Essential AI tools for everyday use",
    features: [
      { text: "1,000 AI powered chat messages", included: true },
      { text: "30 premium image generations", included: true },
      { text: "10 premium music generation", included: true },
      { text: "Access to all premium AI models", included: false },
      { text: "Early access to new features", included: false },
    ],
    buttonText: "Choose plan",
    buttonLink: "#",
    isFeatured: false,
  },
  {
    price: 17,
    description: "Advanced features for serious AI enthusiasts.",
    features: [
      { text: "5,000 AI powered chat messages", included: true },
      { text: "100 premium image generations", included: true },
      { text: "40 premium music generation", included: true },
      { text: "Access to all premium AI models", included: true },
      { text: "Early access to new features", included: false },
    ],
    buttonText: "Choose plan",
    buttonLink: "#",
    isFeatured: true,
  },
  {
    price: 29,
    description: "Unlimited potential for power users",
    features: [
      { text: "10,000 AI powered chat messages", included: true },
      { text: "300 premium image generations", included: true },
      { text: "100 premium music generations", included: true },
      { text: "Access to all premium AI models", included: true },
      { text: "Early access to new features", included: true },
    ],
    buttonText: "Choose plan",
    buttonLink: "#",
    isFeatured: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-16 md:py-24">
      <div className="container mx-auto flex flex-col items-center px-4 md:px-6">
        <AnimatedDiv yOffset={30} delay={0.1} className="text-center">
          <h2 className="text-4xl font-medium md:text-5xl">
            Choose the right plan for you
          </h2>
        </AnimatedDiv>

        <div className="mt-12 grid w-full max-w-6xl grid-cols-1 gap-8 md:mt-16 lg:grid-cols-3 lg:items-stretch">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              {...plan}
              delay={0.2 + index * 0.1}
              className="mx-auto lg:mx-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
