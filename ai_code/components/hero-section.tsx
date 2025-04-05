"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedWrapper } from "@/components/animated-wrapper";

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen w-full max-w-[100vw] flex-col items-center justify-center overflow-hidden pt-[60px]"
      id="hero-section"
    >
      <div className="absolute inset-0 hero-bg-gradient -z-10"></div>
      <div className="container text-[#E95CFF] mx-auto flex h-full min-h-[calc(100vh-60px)] flex-col items-center justify-center gap-10 px-4 py-12 lg:px-8">
        <AnimatedWrapper className="flex flex-col items-center text-center">
          <h1 className="gradient-text text-4xl font-semibold uppercase leading-tight md:text-6xl md:leading-[80px]">
            AI Powered
            <br />
            Coding Simplified
          </h1>
          <p className="mt-6 max-w-[350px] text-muted-foreground md:mt-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
            adipisci corrupti accusamus reiciendis similique assumenda nostrum
            fuga dicta vitae ipsum.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild className="transition-transform duration-300 bg-[#6C72E8] text-white rounded-3xl hover:scale-[1.03]">
              <Link href="/signup">Get started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="transition-transform duration-300 bg-white text-[#6C72E8] rounded-3xl hover:scale-[1.03]">
              <Link href="#features">Learn more</Link>
            </Button>
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper className="w-full max-w-[950px] mt-10" delay={0.2}>
          <div
            className="aspect-video w-full overflow-hidden rounded-2xl shadow-lg dark:shadow-[#aa31e9]/40"
            style={{ boxShadow: "rgba(170, 49, 233, 0.44) 0px 15px 25px -5px" }} // Keep specific shadow if needed
          >
            <Image
              src="/assets/images/home/dashboard.png"
              alt="Dashboard preview"
              width={950}
              height={534} // Adjust height based on aspect ratio
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
