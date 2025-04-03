"use client";

import React from "react";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { AnimatedDiv } from "@/components/ui/animated-div";

const testimonials = [
  {
    name: "Mante",
    title: "Glu, CTO",
    imageUrl: "/assets/images/people/man2.jpg",
    quote: "Pixa has streamlined our AI workflow significantly. The unified interface is a game-changer! Highly recommended for any team working with multiple models.",
  },
  {
    name: "Trich B",
    title: "AMI, CEO",
    imageUrl: "/assets/images/people/women.jpg",
    quote: "Switching to Pixa saved us hours of juggling different platforms. The pre-built tools are incredibly useful for rapid prototyping.",
  },
  {
    name: "John B",
    title: "Benz, CEO",
    imageUrl: "/assets/images/people/man.jpg",
    quote: "The API access is robust and well-documented. We were able to integrate Pixa's capabilities into our existing applications seamlessly. The performance is excellent.",
  },
  {
    name: "Ben Alfert B",
    title: "XZ tech, CTO",
    imageUrl: "/assets/images/people/man2.jpg", // Reusing image, replace if needed
    quote: "Impressive platform! The ability to compare model outputs side-by-side directly in the playground is invaluable for development.",
  },
  {
    name: "Rachel",
    title: "Gem, CTO",
    imageUrl: "/assets/images/people/women.jpg", // Reusing image
    quote: "Pixa's focus on a clean UI and powerful features makes it stand out. The prompt library is a great starting point for new users.",
  },
  {
    name: "Jamie",
    title: "SnapFist.ai, CEO",
    imageUrl: "/assets/images/people/man.jpg", // Reusing image
    quote: "Finally, a tool that brings everything together. From text generation to image creation, Pixa covers our core AI needs efficiently and cost-effectively.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto flex flex-col items-center px-4 md:px-6">
        <AnimatedDiv yOffset={30} delay={0.1} className="text-center">
          <h2 className="text-3xl font-medium md:text-4xl">
            Join the professionals using Pixa
          </h2>
        </AnimatedDiv>

        {/* Masonry Layout Container */}
        <div className="mt-12 w-full max-w-6xl columns-1 gap-8 space-y-8 md:mt-16 md:columns-2 lg:columns-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              delay={0.1 + index * 0.05} // Subtle stagger
            />
          ))}
        </div>
      </div>
    </section>
  );
}
