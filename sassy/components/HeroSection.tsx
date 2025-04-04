"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlayCircle, ArrowRight } from "lucide-react";
import { AnimatedDiv } from "./AnimatedDiv";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen w-full max-w-[100vw] flex-col overflow-hidden pt-16 md:pt-20"
      id="hero-section"
    >
      <div className="flex h-full min-h-[calc(100vh-4rem)] w-full flex-col place-content-center gap-6 p-4 sm:p-[5%] xl:items-start items-center">
        <div className="flex flex-col place-content-center items-center text-center">
          <AnimatedDiv className="gradient-text text-4xl font-semibold uppercase leading-tight sm:text-6xl sm:leading-[80px]">
            <span> Ship more </span>
            <br />
            <span> with SaaS templates </span>
          </AnimatedDiv>
          <AnimatedDiv
            delay={0.2}
            className="mt-10 max-w-[450px] p-2 text-muted-foreground lg:max-w-full"
          >
            Build and launch your next SaaS project faster with our pre-built,
            customizable templates.
          </AnimatedDiv>

          <AnimatedDiv delay={0.4} className="mt-10 flex flex-col sm:flex-row place-items-center gap-4">
            <Button
              size="lg"
              className="bg-primary/80 shadow-lg shadow-primary/50 transition-transform duration-300 hover:scale-[1.03] hover:bg-primary"
              asChild
            >
              <Link href="/signup">
                Get started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="flex gap-2 bg-background text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background"
              asChild
            >
              <Link href="#learn-more">
                <PlayCircle className="h-5 w-5" />
                <span>Learn more</span>
              </Link>
            </Button>
          </AnimatedDiv>
        </div>

        <AnimatedDiv
          delay={0.6}
          amount={0.3}
          className="relative mt-8 flex w-full place-content-center place-items-center"
          id="dashboard-container"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative w-full max-w-[90%] md:max-w-[80%] overflow-hidden rounded-xl bg-transparent shadow-[0_15px_25px_-5px_rgba(126,34,206,0.5)] dark:shadow-[0_15px_25px_-5px_rgba(126,34,206,0.3)]"
            id="dashboard"
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
        </AnimatedDiv>
      </div>
    </section>
  );
}