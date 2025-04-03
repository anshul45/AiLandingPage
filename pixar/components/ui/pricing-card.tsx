"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedDiv } from "./animated-div";

interface PricingCardProps {
  planName?: string; // Optional: Basic, Pro, Enterprise etc.
  price: number;
  period?: string;
  description: string;
  features: { text: string; included: boolean }[];
  buttonText: string;
  buttonLink: string;
  isFeatured?: boolean;
  className?: string;
  delay?: number;
}

export function PricingCard({
  price,
  period = "/mo",
  description,
  features,
  buttonText,
  buttonLink,
  isFeatured = false,
  className,
  delay = 0,
}: PricingCardProps) {
  return (
    <AnimatedDiv
      className={cn("w-full max-w-[350px]", className)}
      delay={delay}
      yOffset={50}
    >
      <Card
        className={cn(
          "flex h-full flex-col overflow-hidden border bg-card text-card-foreground shadow-lg",
          isFeatured ? "border-2 border-primary dark:border-primary/80" : "border-border"
        )}
      >
        <CardHeader className="items-center p-8 pb-4 text-center">
          <CardTitle className="mb-2">
            <span className="text-4xl font-semibold md:text-5xl">${price}</span>
            <span className="text-xl text-muted-foreground md:text-2xl">{period}</span>
          </CardTitle>
          <CardDescription className="mt-2 min-h-[3em]">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-grow flex-col p-8 pt-0">
          <hr className="mb-6 border-border" />
          <ul className="flex flex-grow flex-col gap-4 text-base text-muted-foreground">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2
                  className={cn(
                    "mt-1 h-4 w-4 shrink-0",
                    feature.included ? "text-primary" : "text-muted-foreground/50"
                  )}
                />
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>
          <Button
            asChild
            size="lg"
            className={cn(
              "mt-8 w-full transform transition-transform duration-300 hover:scale-[1.02]",
              isFeatured ? "" : "bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            )}
          >
            <Link href={buttonLink}>{buttonText}</Link>
          </Button>
        </CardContent>
      </Card>
    </AnimatedDiv>
  );
}
