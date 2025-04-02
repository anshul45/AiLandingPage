"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import RevealUp from './reveal-up';

export function CtaSection() {
  return (
    <section className="flex w-full flex-col place-content-center place-items-center gap-[10%] p-[5%] px-[5%] md:px-[10%]">
      <RevealUp className="w-full max-w-5xl">
        <div className="signup-img-section flex w-full flex-col lg:flex-row overflow-hidden rounded-xl bg-gradient-to-br from-secondary via-background to-secondary border border-border shadow-lg">
          <div className="flex flex-col justify-center gap-3 p-6 lg:p-10 lg:w-[50%] text-center lg:text-left">
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-semibold text-foreground md:text-3xl">
                Upgrade to Navigator today
              </h2>
              <p className="text-muted-foreground">Lorem ipsum dolor sit.</p>
            </div>

            <form className="mt-4 flex flex-col sm:flex-row items-center gap-2 py-2">
              <Input
                type="email"
                className="h-11 flex-grow !border-muted-foreground/50 focus:!border-primary focus:ring-primary"
                placeholder="Enter your email"
                aria-label="Email address"
              />
              <Button
                type="submit"
                size="lg"
                variant="outline"
                className="w-full sm:w-auto rounded-full border-muted-foreground/50 transition-colors duration-300 hover:bg-foreground hover:text-background"
                aria-label="Submit email"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </form>
          </div>

          <div className="relative flex h-[300px] w-full place-content-center place-items-end lg:h-auto lg:w-[50%] lg:place-content-end">
            <Image
              src="/assets/images/home/phone.png"
              alt="Phone showing Navigator app"
              width={400} // Adjust based on desired size
              height={500} // Adjust based on desired size
              className="h-full max-h-[90%] w-auto object-contain pt-4 lg:pt-0"
            />
          </div>
        </div>
      </RevealUp>
    </section>
  );
}
