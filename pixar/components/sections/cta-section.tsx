"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedDiv } from "@/components/ui/animated-div";

export function CtaSection() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedDiv yOffset={50} delay={0.1}>
          <div className="mx-auto flex min-h-[400px] w-full max-w-5xl flex-col items-center justify-center gap-6 rounded-lg bg-muted p-8 text-center md:min-h-[450px] md:gap-8 md:p-12 dark:bg-muted/50">
            <h2 className="text-4xl font-medium leading-tight md:text-5xl">
              Access and compare multiple AI models instantly
            </h2>
            <Button asChild size="lg" className="mt-4 !rounded-full px-8 py-6 text-lg font-medium md:mt-6">
              <Link href="#">
                Launch Playground
              </Link>
            </Button>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
}
