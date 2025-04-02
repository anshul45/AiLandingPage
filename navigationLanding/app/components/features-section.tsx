"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, BarChart, Cloud, Fingerprint, Sliders, Settings } from "lucide-react";
import { AnimatedDiv } from "./animated-div";

const features = [
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Navigate anywhere in the world with comprehensive map data.",
  },
  {
    icon: BarChart,
    title: "Driving Insights",
    description: "Analyze your driving patterns and efficiency over time.",
  },
  {
    icon: Cloud,
    title: "Cloud Backup",
    description: "Securely back up your routes, preferences, and history.",
  },
  {
    icon: Fingerprint,
    title: "Enhanced Security",
    description: "Protect your data with optional biometric authentication.",
  },
  {
    icon: Sliders,
    title: "3rd Party Integrations",
    description: "Connect with calendars, music apps, and more.",
  },
  {
    icon: Settings,
    title: "Advanced Configurations",
    description: "Customize navigation settings to match your preferences.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative flex min-h-[80vh] w-full max-w-[100vw] flex-col place-content-center place-items-center overflow-hidden p-6">
      <div className="mt-8 flex flex-col place-items-center gap-5 w-full">
        <AnimatedDiv className="mt-5 flex flex-col gap-3 text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground">
            Powerful solution,<br /> Seamless experience
          </h2>
        </AnimatedDiv>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
          {features.map((feature, index) => (
            <AnimatedDiv key={index} delay={index * 0.1}>
              <Card className="h-full flex flex-col bg-secondary border-border/50 hover:border-primary/50 transition-colors duration-300">
                <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-4">
                  <div className="text-primary text-3xl md:text-4xl">
                    <feature.icon aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm md:text-base text-muted-foreground">
                    {feature.description}
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