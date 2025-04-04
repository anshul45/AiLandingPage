"use client";

import React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { AnimatedDiv } from "./AnimatedDiv";

const faqItems = [
  {
    value: "item-1",
    question: "What license are the source code templates under?",
    answer: (
      <>
        All the templates are provided under the MIT license, offering you maximum freedom for usage and modification.
      </>
    ),
  },
  {
    value: "item-2",
    question: "Can I request new features or templates?",
    answer: (
      <>
        Yes! You can suggest generic templates or features via our{" "}
        <Link href="https://github.com/PaulleDemon/landing-pages/issues/new/choose" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
          GitHub issues page
        </Link>
        . For custom design and development requests, please{" "}
        <Link href="https://tally.so/r/woO0Kx" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
          contact us here
        </Link>
        .
      </>
    ),
  },
  {
    value: "item-3",
    question: "I need a completely custom template design. Is that possible?",
    answer: (
      <>
        Absolutely. We offer custom design and development services. Please reach out via our{" "}
        <Link href="https://tally.so/r/woO0Kx" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
          contact form
        </Link>
        {" "}to discuss your specific requirements.
      </>
    ),
  },
  {
    value: "item-4",
    question: "How often are new templates added?",
    answer: (
      <>
        We aim to add new templates regularly, often on Fridays. Star our{" "}
        <Link href="https://github.com/PaulleDemon/awesome-landing-pages" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
          GitHub repository
        </Link>
        {" "}to stay updated!
      </>
    ),
  },
];

export function FaqSection() {
  return (
    <section className="flex w-full flex-col place-content-center place-items-center gap-10 p-[5%] px-[5%] md:px-[10%] py-16 sm:py-24 bg-muted/30 dark:bg-muted/10">
      <AnimatedDiv>
        <h3 className="text-3xl font-medium text-foreground md:text-4xl text-center">
          Frequently Asked Questions
        </h3>
      </AnimatedDiv>

      <AnimatedDiv delay={0.2} amount={0.3} className="w-full max-w-3xl">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="rounded-md border border-border bg-card px-4 data-[state=open]:border-primary"
            >
              <AccordionTrigger className="text-left text-base md:text-lg hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground pt-2">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimatedDiv>

      <AnimatedDiv delay={0.4} className="mt-12 flex flex-col place-items-center gap-4 text-center">
        <div className="text-2xl md:text-3xl text-foreground">
          Still have questions?
        </div>
        <p className="text-muted-foreground max-w-md">
          Can't find the answer you're looking for? Feel free to reach out to our support team.
        </p>
        <Button asChild variant="outline" size="lg" className="mt-2">
          <Link href="/contact">
            Contact Us
          </Link>
        </Button>
      </AnimatedDiv>
    </section>
  );
}