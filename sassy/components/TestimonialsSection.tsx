"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedDiv } from "./AnimatedDiv";

const testimonials = [
  {
    quote: "This template saved us countless hours. Highly recommended for any SaaS startup!",
    name: "Trich B",
    title: "CEO, AMI",
    image: "/assets/images/people/women.jpg",
  },
  {
    quote: "Incredibly easy to customize and integrate. The documentation is clear and concise.",
    name: "John B",
    title: "CTO, ABC",
    image: "/assets/images/people/man.jpg",
  },
  {
    quote: "The features provided cover almost everything we needed out of the box.",
    name: "Mante",
    title: "Lead Dev, XYZ",
    image: "/assets/images/people/man2.jpg",
  },
  {
    quote: "Fantastic support and regular updates. It feels like a true partnership.",
    name: "Lara",
    title: "Product Manager, XZ",
    image: "/assets/images/people/women.jpg",
  },
  {
    quote: "Allowed us to focus on our unique value proposition instead of reinventing the wheel.",
    name: "James",
    title: "Founder, App Co.",
    image: "/assets/images/people/man.jpg",
  },
  {
    quote: "The performance is excellent, and the code quality is top-notch.",
    name: "Ron",
    title: "Engineer, Marketplace",
    image: "/assets/images/people/man2.jpg",
  },
];

export function TestimonialsSection() {
  return (
    <section className="mt-5 flex w-full flex-col place-content-center place-items-center p-[2%] py-16 sm:py-24">
      <AnimatedDiv>
        <h3 className="text-3xl font-medium text-foreground md:text-4xl text-center mb-12">
          You're in Good Hands
        </h3>
      </AnimatedDiv>
      {/* Masonry layout using Tailwind columns */}
      <div className="w-full max-w-6xl columns-1 gap-8 space-y-8 md:columns-2 lg:columns-3">
        {testimonials.map((testimonial, index) => (
          <AnimatedDiv key={index} delay={index * 0.1} amount={0.3} className="break-inside-avoid">
            <Card className="h-fit w-full bg-card p-6 border border-border">
              <CardContent className="p-0 flex flex-col gap-4">
                <p className="mt-4 text-muted-foreground">
                  {testimonial.quote}
                </p>
                <div className="flex place-items-center gap-3 pt-4 border-t border-border/50">
                  <div className="relative h-[50px] w-[50px] flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="h-full w-full object-cover"
                      sizes="50px"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedDiv>
        ))}
      </div>
    </section>
  );
}