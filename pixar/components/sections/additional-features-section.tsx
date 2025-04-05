"use client";

import React from "react";
import Image from "next/image";
import { AnimatedDiv } from "@/components/ui/animated-div";

const features = [
  {
    title: "Prompt Library",
    description: "Forget about writing your own prompt, use the prompt templates and supercharge your workflow.",
    imageUrl: "/assets/images/home/prompts2.png",
    imageAlt: "Prompt Library illustration",
  },
  {
    title: "Real-time web search",
    description: "Our Real-time web search AI Bot provides instant, live search results directly within the AI chat playground.",
    imageUrl: "/assets/images/home/search.png",
    imageAlt: "Web Search illustration",
  },
  {
    title: "Image Generation",
    description: "Generate Image instantly from multiple models, create visuals from text descriptions or templates.",
    imageUrl: "/assets/images/home/image.png",
    imageAlt: "Image Generation illustration",
  },
  {
    title: "History",
    description: "All of the models can recall previous topic, so you can continue your conversation at any point of time.",
    imageUrl: "/assets/images/home/history.png",
    imageAlt: "History illustration",
  },
  {
    title: "Import content",
    description: "Effortlessly import PDFs, images, and documents. Use AI to ask questions, extract information, and summarize documents.",
    imageUrl: "/assets/images/home/import.png",
    imageAlt: "Import Content illustration",
  },
  {
    title: "Multilingual support",
    description: "ChatGPT, and Gemini can understand and respond in over 100 languages.",
    imageUrl: "/assets/images/home/multilingual.png",
    imageAlt: "Multilingual Support illustration",
  },
];

export function AdditionalFeaturesSection() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto flex flex-col items-center px-4 md:px-6">
        <AnimatedDiv yOffset={30} delay={0.1} className="text-center">
          <h2 className="text-4xl font-medium md:text-5xl">
            Additional Features
          </h2>
        </AnimatedDiv>

        <div className="mt-12 grid w-full max-w-6xl grid-cols-1 gap-2 md:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <AnimatedDiv
              key={feature.title}
              delay={0.2 + index * 0.1}
              yOffset={50}
              className="w-full max-w-[350px] mx-auto"
            >
             <div className="rounded-md text-center px-9 py-6 h-96 dark:bg-[#252422]" key={index}>
            <div className="h-[180px]">
            <Image src={feature.imageUrl} width={200} height={200} alt="Image"  className="mx-auto w-full h-full"/>
            </div>
            <h1 className="text-2xl mt-9">{feature.title}</h1>
            <p className="text-sm mt-5">{feature.description}</p>
          </div>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
