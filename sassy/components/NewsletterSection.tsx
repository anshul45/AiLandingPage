"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AnimatedDiv } from "./AnimatedDiv";
import { Mail } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log("Subscribing email:", email);
    alert(`Thank you for subscribing with ${email}!`);
    setEmail("");
  };

  return (
    <section className="flex w-full flex-col place-content-center place-items-center gap-[10%] p-[5%] px-[5%] md:px-[10%] py-16 sm:py-24">
      <AnimatedDiv amount={0.5} className="w-full max-w-4xl">
        <div className="flex w-full flex-col items-center justify-between gap-6 rounded-lg border border-border bg-card p-6 sm:p-8 md:flex-row md:gap-3">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Join Our Newsletter
            </h2>
            <p className="text-muted-foreground">
              Stay updated with the latest features, templates, and offers.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md flex-col sm:flex-row items-center gap-2"
          >
            <div className="relative w-full flex-grow">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address for newsletter"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 w-full pl-10"
              />
            </div>
            <Button type="submit" size="lg" className="w-full sm:w-auto flex-shrink-0 h-12">
              Subscribe
            </Button>
          </form>
        </div>
      </AnimatedDiv>
    </section>
  );
}