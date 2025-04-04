"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, BarChart, Cloud, Fingerprint, SlidersHorizontal, Settings } from "lucide-react";
import { AnimatedDiv } from "./AnimatedDiv";

const features = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Easily adapt your SaaS for international markets with built-in localization support.",
  },
  {
    icon: BarChart,
    title: "Actionable Insights",
    description: "Integrated analytics dashboard to track key metrics and understand user behavior.",
  },
  {
    icon: Cloud,
    title: "Reliable Cloud Backup",
    description: "Automatic and secure data backups ensure your information is always safe.",
  },
  {
    icon: Fingerprint,
    title: "Enhanced Security",
    description: "Implement robust security measures like 2-Factor Authentication effortlessly.",
  },
  {
    icon: SlidersHorizontal,
    title: "Seamless Integrations",
    description: "Connect with popular third-party services through our flexible integration system.",
  },
  {
    icon: Settings,
    title: "Advanced Configurations",
    description: "Tailor the platform to your specific needs with extensive configuration options.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative flex w-full max-w-[100vw] flex-col place-content-center place-items-center overflow-hidden p-6 py-16 sm:py-24">
      <div className="flex flex-col place-items-center gap-5">
        <AnimatedDiv className="flex flex-col gap-3 text-center">
          <h2 className="text-3xl font-medium text-foreground md:text-4xl">
            Features Loved by Everyone
          </h2>
        </AnimatedDiv>
        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:max-w-[80%]">
          {features.map((feature, index) => (
            <AnimatedDiv key={index} delay={index * 0.1} amount={0.5}>
              <Card className="flex h-full w-full max-w-[450px] flex-row gap-6 rounded-xl border border-border bg-card p-6 md:max-w-[350px] lg:max-w-[400px]">
                <div className="flex-shrink-0 text-primary text-3xl md:text-4xl">
                  <feature.icon className="h-8 w-8 md:h-10 md:w-10" />
                </div>
                <CardContent className="flex flex-col gap-2">
                  <CardTitle className="text-xl md:text-2xl">
                    {feature.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground md:text-base">
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