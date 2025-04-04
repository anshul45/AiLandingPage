"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function NewsletterSection() {
  return (
    <section className="w-full max-w-[100vw] py-16 lg:py-24 bg-background">
      <motion.div
        className="container mx-auto px-4 flex flex-col items-center gap-4 lg:gap-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeIn}
      >
        <h2 className="text-2xl md:text-3xl text-primary font-medium">
          Special Newsletter Signup
        </h2>
        <h3 className="text-xl md:text-2xl text-foreground font-semibold">
          Keep yourself updated
        </h3>

        <form
          className="mt-4 flex flex-col sm:flex-row w-full max-w-md gap-2"
          onSubmit={(e) => e.preventDefault()} // Prevent default form submission
        >
          <Input
            type="email"
            placeholder="Enter your email address"
            className="flex-grow h-12 text-base"
            aria-label="Email for newsletter"
            required
          />
          <Button type="submit" size="lg" className="h-12">
            Signup
          </Button>
        </form>
      </motion.div>
    </section>
  );
}
