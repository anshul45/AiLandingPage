"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { AnimatedDiv } from "./animated-div";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="hero-section" className="relative flex min-h-screen w-full max-w-[100vw] flex-col overflow-hidden pt-[60px]">
      <div className="flex h-full min-h-[calc(100vh-60px)] w-full flex-col place-content-center gap-6 p-[5%] xl:items-start items-center lg:p-4">
        <div className="w-full flex flex-col place-content-center items-center">
          <AnimatedDiv className="text-center text-4xl font-semibold uppercase leading-snug md:text-6xl md:leading-[80px]">
            <motion.span
              className="gradient-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Navigate
            </motion.span>
            <br />
            <motion.span
              className="gradient-text bg-gradient-to-r from-blue-400 via-teal-500 to-green-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Terrains with ease
            </motion.span>
          </AnimatedDiv>
        </div>

        <AnimatedDiv delay={0.3} className="relative mt-8 flex w-full place-content-center place-items-center">
          <motion.div
            id="dashboard-container"
            className="relative max-w-[800px] max-h-[800px] overflow-hidden rounded-xl bg-transparent max-md:max-w-full"
            initial={{ rotateX: 50, opacity: 0 }}
            whileInView={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 1.8, delay:1.3 }}
          >
            <Image
              src="/assets/images/home/phone.png"
              alt="App dashboard showing map"
              width={800}
              height={800}
              className="w-full object-contain opacity-90"
              priority
            />
          </motion.div>
          <div className="hero-img-bg-grad absolute left-1/2 top-5 h-[200px] w-[200px] -translate-x-1/2 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-3xl"></div>
        </AnimatedDiv>

        <div className="flex flex-col w-full place-items-center place-content-center">
          <AnimatedDiv delay={0.5} className="mt-10 max-w-[450px] p-2 text-center text-muted-foreground max-lg:max-w-full">
            Discover seamless navigation tailored for every journey. Explore features designed for clarity and ease.
          </AnimatedDiv>

          <AnimatedDiv delay={0.7} className="mt-10 flex place-items-center gap-4">
            <Button size="lg" className="bg-[#0a8dd3] shadow-lg shadow-[#0a8dd3] transition-transform duration-300 hover:scale-[1.03] hover:bg-primary" asChild>
              <Link href="#get-started">Get started</Link>
            </Button>
            <Button size="lg" variant="ghost" className="flex gap-2 bg-background text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background" asChild>
              <Link href="#learn-more">
                <PlayCircle className="h-5 w-5" />
                <span>Learn more</span>
              </Link>
            </Button>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
}