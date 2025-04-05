"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { AnimatedDiv } from "./AnimatedDiv";

const pricingTiers = [
  {
    name: "Starter",
    price: 9,
    description: "Perfect for individuals and small teams getting started.",
    features: [
      "Basic Feature Set",
      "Up to 5 Users",
      "Community Support",
      "1 Project Included",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: 19,
    description: "Ideal for growing businesses needing more power and support.",
    features: [
      "Advanced Feature Set",
      "Up to 25 Users",
      "Priority Support",
      "10 Projects Included",
      "API Access",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: 49,
    description: "For large organizations requiring custom solutions and dedicated support.",
    features: [
      "All Pro Features",
      "Unlimited Users",
      "Dedicated Account Manager",
      "Unlimited Projects",
      "Custom Integrations",
    ],
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="mt-5 flex w-full flex-col place-items-center  py-16 sm:py-24 bg-muted/30 dark:bg-muted/10">
      <AnimatedDiv>
        <h3 className="text-3xl font-medium text-foreground md:text-4xl text-center mb-4">
          Simple, Transparent Pricing
        </h3>
        <p className="text-muted-foreground text-center mb-12 w-full mx-auto">
          Choose the plan that fits your needs. No hidden fees, cancel anytime.
        </p>
      </AnimatedDiv>
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center lg:place-items-stretch">
        {pricingTiers.map((tier, index) => (
          <AnimatedDiv key={tier.name} delay={index * 0.1} amount={0.5} className="flex">
            <Card
              className={`flex w-full max-w-[380px] flex-col border ${tier.popular ? 'border-[#7e22ce] border-2 shadow-lg shadow-primary/30' : 'border-border'} bg-card p-8 lg:max-w-[350px] xl:max-w-[380px]`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-4 -mt-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}
              <CardHeader className="p-0 text-center">
                <CardTitle className="text-2xl mb-4">{tier.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-5xl font-semibold">${tier.price}</span>
                  <span className="text-xl text-muted-foreground">/mo</span>
                </div>
                <CardDescription className="mt-3 text-center h-12">
                  {tier.description}
                </CardDescription>
              </CardHeader>
              <hr className="my-6 border-border/50" />
              <CardContent className="flex-grow p-0">
                <ul className="flex flex-col gap-3 text-left text-base text-foreground">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-0 mt-8">
                <Button
                  asChild
                  className={`w-full transition-transform  duration-300 hover:scale-[1.02] ${tier.popular ? 'bg-[#7e22ce] text-white' : 'bg-[#7e22ce]  hover:bg-secondary/80 text-secondary-foreground'}`}
                  variant={tier.popular ? "default" : "secondary"}
                  size="lg"
                >
                  <Link href={`/signup?plan=${tier.name.toLowerCase()}`}>
                    Get Started
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </AnimatedDiv>
        ))}
      </div>
    </section>
  );
}