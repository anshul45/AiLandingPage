"use client";

import React from "react";
import Image from "next/image";
import { CheckCheck } from "lucide-react";
import { AnimatedDiv } from "./AnimatedDiv";

export function InsightsSection() {
  return (
    <section className="relative flex w-full max-w-[100vw] flex-col place-content-center place-items-center overflow-hidden p-6 py-16 sm:py-24 bg-muted/30 dark:bg-muted/10">
      <AnimatedDiv amount={0.3} className="flex w-full max-w-6xl flex-col place-content-center place-items-center gap-10 lg:flex-row lg:gap-[10%]">
        <div className="mt-6 flex max-w-[450px] flex-col gap-4 lg:mt-0">
          <h3 className="text-3xl font-medium md:text-4xl">
            Powerful Insights
          </h3>

          <div className="mt-4 flex flex-col gap-3">
            <h4 className="flex items-center gap-2 text-xl font-medium">
              <CheckCheck className="h-6 w-6 text-primary" />
              Easy to Use
            </h4>
            <span className="text-base text-muted-foreground md:text-lg">
              Access comprehensive analytics through an intuitive interface, no expertise required.
            </span>
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <h4 className="flex items-center gap-2 text-xl font-medium">
              <CheckCheck className="h-6 w-6 text-primary" />
              All-in-One Panel
            </h4>
            <span className="text-base text-muted-foreground md:text-lg">
              Monitor performance, track user engagement, and make data-driven decisions from a single dashboard.
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="max-h-[500px] max-w-[700px] overflow-hidden rounded-lg shadow-lg shadow-primary/40 dark:shadow-primary/20">
            <Image
              src="/assets/images/home/insights.png"
              alt="Insights Dashboard Preview"
              width={850}
              height={650}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </AnimatedDiv>
    </section>
  );
}