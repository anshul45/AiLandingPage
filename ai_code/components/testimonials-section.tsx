"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimatedWrapper } from "@/components/animated-wrapper";

const testimonials = [
  {
    name: "Trich B",
    role: "AMI, ceo",
    avatar: "/assets/images/people/women.jpg",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, vero.",
  },
  {
    name: "John B",
    role: "ABC, cto",
    avatar: "/assets/images/people/man.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore deserunt delectus consectetur enim cupiditate ab nemo voluptas repellendus qui quas..",
  },
  {
    name: "Mante",
    role: "xyz, cto",
    avatar: "/assets/images/people/man2.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, numquam.",
  },
  {
    name: "Lara",
    role: "xz, cto",
    avatar: "/assets/images/people/women.jpg", // Reusing image, replace if needed
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, saepe illum. Dicta quisquam praesentium quod!",
  },
  {
    name: "James",
    role: "app, cto",
    avatar: "/assets/images/people/man.jpg", // Reusing image, replace if needed
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga accusamus non enim debitis rem neque beatae explicabo corrupti porro ullam?",
  },
  {
    name: "Ron",
    role: "marketplace, cto",
    avatar: "/assets/images/people/man2.jpg", // Reusing image, replace if needed
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga accusamus non enim debitis rem neque beatae explicabo corrupti porro ullam?",
  },
];

export function TestimonialsSection() {
  return (
    <section className="flex w-full flex-col items-center justify-center py-16 md:py-24 px-4 md:px-8 bg-muted/40">
      <AnimatedWrapper className="text-center mb-10">
        <h3 className="text-2xl font-medium text-primary md:text-3xl">
          Loved by our clients
        </h3>
      </AnimatedWrapper>

      <div className="container mx-auto columns-1 gap-8 space-y-8 md:columns-2 lg:columns-3">
        {testimonials.map((testimonial, index) => (
          <AnimatedWrapper key={index} className="break-inside-avoid" delay={index * 0.1}>
            <Card className="h-fit w-full bg-card">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border-2 border-primary">
                  <Image
                    src={testimonial.avatar}
                    alt={`${testimonial.name}'s avatar`}
                    width={50}
                    height={50}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{testimonial.text}</p>
              </CardContent>
            </Card>
          </AnimatedWrapper>
        ))}
      </div>
    </section>
  );
}
