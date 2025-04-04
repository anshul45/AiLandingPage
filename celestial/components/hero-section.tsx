"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.4 } },
};

export default function HeroSection() {
  return (
    <section
      className="w-full min-h-screen max-w-[100vw] pt-[110px] pb-16 lg:pt-[150px] lg:pb-24 flex flex-col overflow-hidden relative bg-background"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-4 flex flex-col items-center justify-center flex-grow gap-10 lg:gap-16">
        <motion.div
          className="flex flex-col items-center text-center"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.h1
            id="hero-heading"
            className="text-4xl lg:text-6xl font-semibold leading-tight lg:leading-[80px] uppercase text-foreground"
            variants={fadeIn}
          >
            Re-imagining the Future
            <br />
            <span className="text-primary">of Software</span>
          </motion.h1>
          <motion.p
            className="mt-6 lg:mt-10 max-w-[450px] text-muted-foreground lg:text-lg"
            variants={fadeIn}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error adipisci corrupti accusamus reiciendis similique assumenda nostrum fuga dicta vitae ipsum.
          </motion.p>
          <motion.div
            className="mt-6 lg:mt-8 flex flex-col sm:flex-row gap-4"
            variants={fadeIn}
          >
            <Button asChild size="lg" className="transition-transform duration-300 hover:scale-[1.03]">
              <Link href="/signup">Get started</Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="transition-transform duration-300 hover:scale-[1.03] bg-primary/10 hover:bg-primary/20 text-primary">
              <Link href="#features">Learn more</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full flex justify-center items-center overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={scaleUp}
        >
          <div className="relative w-full max-w-[650px] rounded-2xl shadow-xl overflow-hidden aspect-[650/450]">
            <Image
              src="/assets/images/home/dashboard.png"
              alt="Dashboard preview"
              fill
              priority
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 70vw, 650px"
              className="object-cover lg:object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
