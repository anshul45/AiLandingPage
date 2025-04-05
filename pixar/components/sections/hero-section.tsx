"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlayCircle, ArrowRight } from "lucide-react";
import { AnimatedDiv } from "@/components/ui/animated-div";
import { VideoDialog } from "@/components/ui/video-dialog";
import { PlaygroundDemo } from "@/components/ui/playground-demo";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"], 
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [60, 0]);

  const smoothRotateX = useSpring(rotateX, { damping: 20, stiffness: 100 });

  return (
    <section id="hero-section" className="relative flex min-h-screen w-full flex-col overflow-hidden pt-24 md:pt-32">
      {/* Background Gradients */}
      <div className="absolute left-1/2 top-[10%] -z-10 h-[120px] w-[120px] -translate-x-1/2 transform rounded-full bg-purple-500/30 blur-3xl dark:bg-purple-700/40"></div>
      <div className="absolute left-1/2 top-[55%] -z-10 h-[200px] w-[200px] -translate-x-1/2 transform rounded-full bg-indigo-500/20 blur-3xl dark:bg-indigo-700/30 md:top-[60%]"></div>

      <div className="container mx-auto flex flex-grow flex-col items-center justify-center gap-12 px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <AnimatedDiv yOffset={30} delay={0.1}>
            <h1 className="text-4xl font-semibold uppercase leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.2]">
              All your AI models
              <br />
              <span className="font-serif font-thin">IN ONE PLACE</span>
            </h1>
          </AnimatedDiv>
          <AnimatedDiv yOffset={30} delay={0.2} className="mt-6 max-w-sm text-small text-muted-foreground md:mt-8 md:max-w-sm md:text-small">
            Your all-in-one AI companion. Generate Images, videos, codes, docs, debug your web apps all with Pixa's interface.
          </AnimatedDiv>

          <AnimatedDiv yOffset={30} delay={0.3} className="mt-8 flex flex-col gap-4 sm:flex-row md:mt-10">
            <Button
              variant="outline"
              size="lg"
              className="group w-[170px] h-14 gap-2 rounded-xl border-primary text-primary"
              onClick={() => setIsVideoOpen(true)}
            >
              <div className="relative flex h-6 w-6 items-center justify-center">
                <div className="absolute inset-0 scale-0 rounded-full border-2 border-current opacity-50 transition-transform duration-300 group-hover:scale-100"></div>
                <PlayCircle className="h-5 w-5" />
              </div>
              <span>Watch video</span>
            </Button>
            <Button
              asChild
              size="lg"
              className="group w-[170px] h-14 gap-2 rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.03]"
            >
              <Link href="#">
                <span>Get started</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </AnimatedDiv>
        </div>

        {/* Playground Demo */}
        <AnimatedDiv yOffset={50} delay={0.4} className="relative mt-8 flex w-full justify-center">
        <motion.div
            id="dashboard-container"
            className="flex justify-center"
            ref={ref}
            style={{
              rotateX: smoothRotateX,
            }}
          >
          <PlaygroundDemo />
          </motion.div>
        </AnimatedDiv>
      </div>

      <VideoDialog
        open={isVideoOpen}
        onOpenChange={setIsVideoOpen}
        videoUrl="https://www.youtube.com/embed/WrfN3iJzrWs?si=BEQ4iPK9NXSM_fkk&controls=1&rel=0&showinfo=0&loop=1&mute=0" // Added controls, removed mute
        title="Pixa Playground Demo Video"
      />
    </section>
  );
}
