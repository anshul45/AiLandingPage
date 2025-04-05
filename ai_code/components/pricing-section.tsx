"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AnimatedWrapper } from "@/components/animated-wrapper";
import { cn } from "@/lib/utils";

const pricingTiers = [
  {
    price: 9,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, explicabo!",
    features: [
      "Lorem ipsum dolor sit amet.",
      "Lorem, ipsum.",
      "Lorem, ipsum dolor.",
      "Lorem ipsum dolor sit.",
    ],
    isFeatured: false,
  },
  {
    price: 19,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, explicabo!",
    features: [
      "Lorem ipsum dolor sit amet.",
      "Lorem, ipsum.",
      "Lorem, ipsum dolor.",
      "Lorem ipsum dolor sit.",
    ],
    isFeatured: true,
  },
  {
    price: 49,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, explicabo!",
    features: [
      "Lorem ipsum dolor sit amet.",
      "Lorem, ipsum.",
      "Lorem, ipsum dolor.",
      "Lorem ipsum dolor sit.",
    ],
    isFeatured: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="flex w-full flex-col items-center py-16 md:py-24 px-4 md:px-8">
      <AnimatedWrapper className="text-center mb-10">
        <h3 className="text-2xl font-medium text-[#C490FF] md:text-3xl">
          Simple pricing
        </h3>
      </AnimatedWrapper>

      <div className="container mx-auto flex flex-wrap justify-center gap-8 lg:flex-nowrap">
        {pricingTiers.map((tier, index) => (
          <AnimatedWrapper
            key={index}
            className="w-full max-w-[380px] lg:w-1/3"
            delay={index * 0.1}
          >
            <Card
              className={cn(
                "flex h-full flex-col bg-card  shadow-xl",
                tier.isFeatured && "border-2 border-[#C490FF]"
              )}
            >
              <CardHeader className="items-center pb-4">
                <CardTitle className="text-center">
                  <span className="text-5xl font-semibold">${tier.price}</span>
                  <span className="text-2xl text-muted-foreground">/mo</span>
                </CardTitle>
                <CardDescription className="mt-3 text-xl text-center">
                  {tier.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="flex flex-col gap-3 text-center text-xl text-muted-foreground">
                  {tier.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className="mt-4 w-full rounded-3xl mx-5 h-11 bg-[#4F55C1] text-white"
                  variant={tier.isFeatured ? "default" : "outline"}
                >
                  <Link href="/signup">Get now</Link>
                </Button>
              </CardFooter>
            </Card>
          </AnimatedWrapper>
        ))}
      </div>
    </section>
  );
}
