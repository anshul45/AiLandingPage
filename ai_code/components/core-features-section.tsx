"use client";

import React from "react";
import {
  BoomBox,
  Award,
  BookOpen,
  Briefcase,
  CreditCard,
  Flame,
} from "lucide-react";
import { AnimatedWrapper } from "@/components/animated-wrapper";

const features = [
  {
    icon: BoomBox,
    title: "Feature 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, voluptates numquam quam expedita mollitia possimus. Quos tempora placeat pariatur est!",
  },
  {
    icon: Award,
    title: "Feature 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, voluptates numquam quam expedita mollitia possimus. Quos tempora placeat pariatur est!",
  },
  {
    icon: BookOpen,
    title: "Feature 3",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, voluptates numquam quam expedita mollitia possimus. Quos tempora placeat pariatur est!",
  },
  {
    icon: Briefcase,
    title: "Feature 4",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, voluptates numquam quam expedita mollitia possimus. Quos tempora placeat pariatur est!",
  },
  {
    icon: CreditCard,
    title: "Feature 5",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, voluptates numquam quam expedita mollitia possimus. Quos tempora placeat pariatur est!",
  },
  {
    icon: Flame,
    title: "Feature 6",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, voluptates numquam quam expedita mollitia possimus. Quos tempora placeat pariatur est!",
  },
];

export function CoreFeaturesSection() {
  return (
    <section
      id="features" // Added ID for navigation
      className="relative flex w-full max-w-[100vw] flex-col items-center justify-center overflow-hidden py-16 md:py-24 px-6"
    >
      <div className="container mx-auto flex flex-col items-center gap-5">
        <AnimatedWrapper className="text-center">
          <h3 className="text-xl font-medium text-[#C490FF]  md:text-2xl">
            Features loved by our clients
          </h3>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Core features</h2>
        </AnimatedWrapper>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:max-w-[80%] xl:max-w-[70%]">
          {features.map((feature, index) => (
            <AnimatedWrapper
              key={feature.title}
              className="flex h-full flex-col items-center gap-3 p-6 text-center shadow-sm"
              delay={index * 0.1}
            >
              <feature.icon className="h-12 w-12 text-[#C490FF]  mb-3" />
              <h3 className="text-xl font-semibold md:text-2xl">{feature.title}</h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
