"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlayCircle, ArrowRight } from "lucide-react";
import { AnimatedDiv } from "./AnimatedDiv";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export function HeroSection() {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const smoothRotateX = useSpring(rotateX, { damping: 20, stiffness: 100 });


  return (
    <section
      className="relative flex min-h-screen w-full max-w-[100vw] flex-col overflow-hidden pt-4 md:pt-4"
      id="hero-section"
    >
      <div className="flex h-full min-h-[calc(100vh-4rem)] w-full flex-col place-content-center gap-6 p-4 sm:p-[5%] xl:items-start items-center">
        <div className="flex flex-col place-content-center w-full items-center text-center">
          <AnimatedDiv className="gradient-text text-4xl font-semibold uppercase leading-tight sm:text-6xl sm:leading-[80px]">
            <span> Ship more </span>
            <br />
            <span> with SaaS templates </span>
          </AnimatedDiv>
          <AnimatedDiv
            delay={0.2}
            className="mt-10 max-w-[450px] p-2 text-muted-foreground lg:max-w-[400px]"
          >
            Build and launch your next SaaS project faster with our pre-built,
            customizable templates.
          </AnimatedDiv>

          <AnimatedDiv delay={0.4} className="mt-10 flex flex-col sm:flex-row place-items-center gap-4">
            <Button
              size="lg"
              className="bg-[#7e22ce] text-white shadow-lg shadow-[#7e22ce] h-12 transition-transform duration-300 hover:scale-[1.03] hover:bg-[#7e22ce]"
              asChild
            >
              <Link href="/signup">
                Get started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="flex gap-2 bg-background text-foreground hover:dark:bg-white  hover:bg-foreground hover:text-background"
              asChild
            >
              <Link href="#learn-more">
                <PlayCircle className="h-5 w-5" />
                <span>Learn more</span>
              </Link>
            </Button>
          </AnimatedDiv>
        </div>

        <div
          className="relative mt-8 flex w-full place-content-center place-items-center"
          id="dashboard-container"
        >
          <motion.div
            id="dashboard"
            className="relative w-full max-w-[90%] md:max-w-[80%] overflow-hidden rounded-xl bg-transparent shadow-[0_15px_25px_-5px_rgba(126,34,206,0.5)] dark:shadow-[0_15px_25px_-5px_rgba(126,34,206,0.3)]"
            ref={ref}
            style={{
              rotateX: smoothRotateX,
            }}
          >
            <Image
              src="/assets/images/home/dashboard.png"
              alt="SaaSy Dashboard Preview"
              width={1200}
              height={750}
              className="h-full w-full object-cover opacity-90 lg:object-contain"
              priority
            />
          </motion.div>

          {/* Optional decorative gradient */}
          <div className="hero-img-bg-grad absolute left-[10%] sm:left-[20%] top-5 h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] blur-3xl bg-primary/30 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}