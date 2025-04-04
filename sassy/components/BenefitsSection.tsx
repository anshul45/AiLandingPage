"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Zap } from "lucide-react";
import { AnimatedDiv } from "./AnimatedDiv";

const benefits = [
  {
    icon: Rocket,
    title: "Minimize hours spent",
    description: "Leverage pre-built components and layouts to significantly reduce development time.",
  },
  {
    icon: Rocket,
    title: "Simple to use",
    description: "Designed with developer experience in mind, making integration seamless.",
  },
  {
    icon: Zap,
    title: "Speed up your development",
    description: "Focus on your core features, not boilerplate code. Ship faster and iterate quickly.",
  },
];

export function BenefitsSection() {
  return (
    <section className="relative flex w-full max-w-[100vw] flex-col place-content-center place-items-center overflow-hidden p-6 py-16 sm:py-24">
      <div className="flex flex-col place-items-center gap-5">
        <AnimatedDiv className="flex flex-col gap-3 text-center">
          <h2 className="text-3xl font-medium text-foreground md:text-4xl">
            Key Benefits
          </h2>
        </AnimatedDiv>
        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:max-w-[80%]">
          {benefits.map((benefit, index) => (
            <AnimatedDiv key={index} delay={index * 0.15} amount={0.5}>
              <Card className="flex h-full w-full max-w-[450px] flex-col gap-3 text-center overflow-hidden border-border/50 bg-card/50 md:max-w-[350px] lg:max-w-[400px]">
                <CardHeader className="border-gradient relative h-[200px] w-full overflow-hidden flex items-center justify-center p-0 md:h-[150px]">
                  <div className="flex h-full w-full place-content-center place-items-center p-2 bg-gradient-to-t from-background to-transparent">
                    <benefit.icon className="h-16 w-16 text-primary md:h-12 md:w-12" />
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 p-6 pt-4">
                  <CardTitle className="mt-4 text-xl font-normal md:text-2xl">
                    {benefit.title}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  );
}