"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedDiv } from "@/components/ui/animated-div";

export function ApiCtaSection() {
  return (
    <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden py-10 md:min-h-[70vh]">
      <div className="absolute right-[15%] top-[20%] -z-10 h-[200px] w-[200px] rounded-full bg-purple-500/20 blur-3xl dark:bg-purple-700/30"></div>
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 text-center md:px-6">
        <AnimatedDiv yOffset={30} delay={0.1}>
          <h2 className="text-4xl font-semibold uppercase leading-[80px]  tracking-tight sm:text-5xl lg:text-6xl">
            Build your own AI Apps
            <br />
            <span className="font-serif font-thin ">on top of Pixa APIs</span>
          </h2>
        </AnimatedDiv>
        <AnimatedDiv yOffset={30} delay={0.2} className="mt-4 max-w-xl text-sm text-muted-foreground md:mt-6 md:text-sm">
          Pixa's Playground is powered by Pixa's cutting-edge LLM API endpoints. Our powerful models simplify task automation, offering advanced capabilities in summarization, text generation, and Q&A handling.
        </AnimatedDiv>
        <AnimatedDiv yOffset={30} delay={0.3} className="mt-6 md:mt-8">
          <Button asChild variant="outline" size="lg" className="border-primary h-12 text-primary shadow-md transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-xl dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black dark:shadow-gray-600">
            <Link href="#" target="_blank" rel="noopener">
              Check Pixa APIs
            </Link>
          </Button>
        </AnimatedDiv>
      </div>
    </section>
  );
}
