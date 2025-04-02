"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { AnimatedDiv } from "./animated-div";

export function SignupSection() {
  return (
    <section className="flex w-full flex-col place-content-center place-items-center p-[5%] px-[5%] md:px-[10%]">
      <AnimatedDiv className="w-full max-w-5xl">
        <div className="signup-img-section flex flex-col lg:flex-row min-h-[400px] lg:h-[500px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-secondary to-background border border-border">
          {/* Content */}
          <div className="flex flex-col w-full lg:w-1/2 h-full place-content-center gap-3 p-6 md:p-10 lg:p-12">
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Upgrade to Navigator today
              </h2>
              <p className="text-muted-foreground">
                Get started with advanced features and seamless navigation.
              </p>
            </div>

            <form className="mt-4 flex flex-col sm:flex-row items-center gap-2 w-full max-w-md">
              <Input
                type="email"
                className="h-12 flex-grow !border-muted-foreground/50 focus:!border-primary"
                placeholder="Enter your email"
                aria-label="Email address"
                required
              />
              <Button type="submit" size="icon" className="h-12 w-12 rounded-full flex-shrink-0" aria-label="Sign up">
                <ChevronRight className="h-6 w-6" />
              </Button>
            </form>
             <p className="text-xs text-muted-foreground mt-2">By signing up, you agree to our Terms of Service.</p>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 h-[250px] lg:h-full flex place-content-center lg:place-content-end items-end overflow-hidden relative">
            <Image
              src="/assets/images/home/phone.png"
              alt="Phone showing Navigator app"
              width={500} // Adjust as needed
              height={500} // Adjust as needed
              className="object-contain h-full w-auto max-h-[80%] lg:max-h-[90%] self-end mt-auto"
            />
          </div>
        </div>
      </AnimatedDiv>
    </section>
  );
}