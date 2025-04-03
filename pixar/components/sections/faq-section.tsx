"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedDiv } from "@/components/ui/animated-div";

const faqItems = [
  {
    question: "What's Pixa playground?",
    answer: "Pixa's playground is an integrated webapp to seamlessly test, compare, and utilize different Large Language Models (LLMs) such as GPT-4, Claude, Gemini, Llama, and more, all within a single, unified interface.",
  },
  {
    question: "What are LLMs?",
    answer: "LLM stands for 'Large Language Model.' It's a type of artificial intelligence model trained on vast amounts of text data to understand and generate human-like text. These models can perform various tasks, such as answering questions, generating content, translating languages, writing code, and more.",
  },
  {
    question: "Where can I test different AI models?",
    answer: "You can use Pixa's AI Playground to test and compare various leading AI models side-by-side. We support models from OpenAI (like GPT-4o), Google (Gemini), Anthropic (Claude), Meta (Llama), and others.",
  },
  {
    question: "Is Pixa Free to use?",
    answer: "Pixa offers a free tier to get you started, allowing you to explore the basic features of the playground. To access more advanced models, higher usage limits, and premium features, you can upgrade to one of our paid plans.",
  },
];

export function FaqSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24">
       <div className="absolute bottom-14 right-[15%] -z-10 hidden h-[150px] w-[150px] rounded-full bg-purple-500/20 blur-3xl dark:bg-purple-700/30 md:block"></div>
      <div className="container mx-auto flex flex-col items-center px-4 md:px-6">
        <AnimatedDiv yOffset={30} delay={0.1} className="text-center">
          <h2 className="text-3xl font-medium md:text-4xl">
            Frequently Asked Questions
          </h2>
        </AnimatedDiv>

        <AnimatedDiv yOffset={50} delay={0.2} className="mt-10 w-full max-w-3xl md:mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium md:text-xl">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedDiv>
      </div>
    </section>
  );
}
