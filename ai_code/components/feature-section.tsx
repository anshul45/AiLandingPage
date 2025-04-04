"use client";

import React from "react";
import Image from "next/image";
import { CheckCheck } from "lucide-react";
import { AnimatedWrapper } from "@/components/animated-wrapper";
import { cn } from "@/lib/utils";

interface FeatureItem {
  title: string;
  description: string;
}

interface FeatureSectionProps {
  id?: string;
  title: string;
  features: FeatureItem[];
  imageUrl: string;
  imageAlt: string;
  reverseOrder?: boolean;
}

export function FeatureSection({
  id,
  title,
  features,
  imageUrl,
  imageAlt,
  reverseOrder = false,
}: FeatureSectionProps) {
  return (
    <section
      id={id}
      className="relative flex w-full max-w-[100vw] flex-col items-center justify-center overflow-hidden py-16 md:py-24 px-6"
    >
      <AnimatedWrapper className="container mx-auto">
        <div
          className={cn(
            "flex flex-col items-center gap-10 lg:flex-row lg:gap-[10%]",
            reverseOrder && "lg:flex-row-reverse"
          )}
        >
          <div className="flex-1">
            <div
              className="overflow-hidden rounded-lg shadow-lg dark:shadow-[#aa31e9]/30"
              style={{ boxShadow: "rgba(170, 49, 233, 0.30) 0px 10px 20px -5px" }} // Adjusted shadow
            >
              <Image
                src={imageUrl}
                alt={imageAlt}
                width={850}
                height={650} // Adjust based on actual image aspect ratio
                className="h-auto w-full max-w-[850px] object-cover"
              />
            </div>
          </div>
          <div className="mt-6 flex flex-1 flex-col gap-4 lg:mt-0 lg:max-w-[450px]">
            <h3 className="text-3xl font-medium md:text-4xl">{title}</h3>
            {features.map((feature, index) => (
              <div key={index} className="mt-4 flex flex-col gap-3">
                <h4 className="flex items-center gap-2 text-xl font-medium">
                  <CheckCheck className="h-6 w-6 text-primary flex-shrink-0" />
                  {feature.title}
                </h4>
                <p className="text-base text-muted-foreground lg:text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedWrapper>
    </section>
  );
}
