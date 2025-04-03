"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedDiv } from "@/components/ui/animated-div";
import { Card } from "@/components/ui/card";

export function SubscriptionSection() {
  return (
    <section className="w-full overflow-hidden py-16 md:py-24">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 text-center md:px-6">
        <AnimatedDiv yOffset={30} delay={0.1}>
          <h2 className="text-4xl font-medium leading-normal md:text-5xl">
            One Subscription for it all
          </h2>
        </AnimatedDiv>
        <AnimatedDiv yOffset={30} delay={0.2} className="mt-3 max-w-xl text-base text-muted-foreground md:text-lg">
          Why pay for multiple expensive subscriptions when one subscription can do it all?
          Access multiple AI models and save thousands of dollars per year.
        </AnimatedDiv>

        <div className="mt-8 grid w-full max-w-5xl grid-cols-1 gap-8 md:mt-12 lg:grid-cols-2">
          <AnimatedDiv yOffset={50} delay={0.3}>
          <Image
              src="/assets/images/home/multi-sub.png" // Update path
              alt="Multiple Subscriptions Comparison"
              width={650}
              height={400}
              className="h-auto w-full rounded-md object-cover border-[1px] border-gray-700 p-2"
            />
          </AnimatedDiv>
          <AnimatedDiv yOffset={50} delay={0.4}>
          <Image
              src="/assets/images/home/single-sub.jpg" 
              alt="Single Pixa Subscription Comparison"
              width={650}
              height={400}
              className="h-auto w-full rounded-md object-cover border-[1px] border-gray-700 p-2"
            />
          </AnimatedDiv>
        </div>

        <AnimatedDiv yOffset={30} delay={0.5} className="mt-10 md:mt-16">
          <Button asChild size="lg" className="group gap-2 shadow-xl">
            <Link href="#">
              <span>Start Chat</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </AnimatedDiv>
      </div>
    </section>
  );
}
