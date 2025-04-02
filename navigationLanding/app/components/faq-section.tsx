"use client";

import React from "react";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { AnimatedDiv } from "./animated-div";

const faqs = [
  {
    value: "item-1",
    question: "What license are the source code?",
    answer: "All the templates are under MIT license.",
  },
  {
    value: "item-2",
    question: "Can I request new features?",
    answer: (
      <>
        You can request new features or report issues on our{" "}
        <Link href="https://github.com/PaulleDemon/landing-pages/issues/new/choose" className="underline text-primary hover:text-primary/80" target="_blank" rel="noopener noreferrer">
          GitHub issues page
        </Link>
        . For custom development inquiries, please{" "}
        <Link href="https://tally.so/r/woO0Kx" className="underline text-primary hover:text-primary/80" target="_blank" rel="noopener noreferrer">
          contact us here
        </Link>
        .
      </>
    ),
  },
  {
    value: "item-3",
    question: "I need a custom integration?",
    answer: (
      <>
        If you are looking for custom integrations or bespoke solutions, you can{" "}
        <Link href="https://tally.so/r/woO0Kx" className="underline text-primary hover:text-primary/80" target="_blank" rel="noopener noreferrer">
          contact us here
        </Link>
        .
      </>
    ),
  },
  {
    value: "item-4",
    question: "How often is the app updated?",
    answer: (
      <>
        We release updates regularly, typically every few weeks, including new features and improvements. Follow our progress on{" "}
        <Link href="https://github.com/PaulleDemon/awesome-landing-pages" className="underline text-primary hover:text-primary/80" target="_blank" rel="noopener noreferrer">
          GitHub
        </Link>
        .
      </>
    ),
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="flex w-full flex-col place-content-center place-items-center gap-10 p-[5%] px-[10%]">
      <AnimatedDiv>
        <h3 className="text-3xl md:text-4xl font-medium text-foreground">
          Frequently Asked Questions
        </h3>
      </AnimatedDiv>

      <AnimatedDiv delay={0.2} className="w-full max-w-[850px]">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq) => (
            <AccordionItem key={faq.value} value={faq.value} className="rounded-md border border-border bg-card px-4">
              <AccordionTrigger className="text-left text-lg md:text-xl hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimatedDiv>

      <AnimatedDiv delay={0.4} className="mt-10 flex flex-col place-items-center gap-4 text-center">
        <div className="text-2xl md:text-3xl">
          Still have questions?
        </div>
        <p className="text-muted-foreground max-w-md">
          Can't find the answer you're looking for? Reach out to our support team.
        </p>
        <Button size="lg" variant="outline" asChild className="mt-2 rounded-full">
          <Link href="#contact">Contact Support</Link>
        </Button>
      </AnimatedDiv>
    </section>
  );
}