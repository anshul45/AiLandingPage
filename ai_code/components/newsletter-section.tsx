"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AnimatedWrapper } from "@/components/animated-wrapper";

export function NewsletterSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log("Newsletter signup submitted");
  };

  return (
    <section className="flex w-full flex-col items-center justify-center py-16 md:py-24 px-4 md:px-8">
      <AnimatedWrapper className="container mx-auto max-w-xl">
        <div className="flex w-full flex-col items-center gap-3 text-center">
          <h2 className="text-xl font-medium text-[#C490FF] md:text-2xl">
            Special Newsletter Signup
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            Keep yourself updated
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-6 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              aria-label="Email for newsletter"
              required
              className=" border-2 rounded-3xl w-60"
            />
            <Button type="submit" className="w-full sm:w-auto rounded-3xl text-white bg-[#4F55C1]">
              Signup
            </Button>
          </form>
        </div>
      </AnimatedWrapper>
    </section>
  );
}
