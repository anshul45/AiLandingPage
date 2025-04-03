"use client";

import React from "react";
import { FeatureCard } from "@/components/ui/feature-card";
import { AnimatedDiv } from "@/components/ui/animated-div";

const benefits = [
  {
    title: "Unified interface",
    description: "Our unified AI Interface tool brings together all your favorite chat models into one seamless platform. No more juggling between different AI systems—easily manage and interact with multiple chatbots from a single interface.",
    imageUrl: "/assets/images/home/api.png", // Placeholder - replace with actual image
    imageAlt: "Unified Interface illustration",
    linkUrl: "#",
  },
  {
    title: "API Access",
    description: "Pixa's LLM API offers advanced summarization, text generation, and question-answering. Easily integrate with support for JSON, HTML, Markdown, and plain text, enhancing your applications with powerful language tools.",
    imageUrl: "/assets/images/home/api.png", // Placeholder
    imageAlt: "API Access illustration",
    linkUrl: "#",
  },
  {
    title: "Pre-built Tools",
    description: "Pixa offers pre-built AI integrations for diverse creative tasks including image, video, music, and PDF generation, simplifying advanced feature integration into your apps.",
    imageUrl: "/assets/images/home/integrations1.png", // Placeholder
    imageAlt: "Pre-built Tools illustration",
    linkUrl: "#",
  },
];

const wideBenefit = {
  title: "Multiple AI models",
  description: "Pixa supports various AI models, including ChatGPT, Gemini, Claude, Mistral and more, providing a range of advanced capabilities for various language and creative tasks.",
  imageUrl: "/assets/images/home/ai-models.png", // Placeholder
  imageAlt: "Multiple AI Models illustration",
  linkUrl: "#",
};

export function BenefitsSection() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto flex flex-col items-center px-4 md:px-6">
        <AnimatedDiv yOffset={30} delay={0.1} className="text-center">
          <h2 className="text-4xl font-medium md:text-5xl lg:text-6xl">
            Experience all the benefits of AI
          </h2>
        </AnimatedDiv>

        <div className="mt-12 grid w-full max-w-6xl grid-cols-1 gap-8 md:mt-16 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <FeatureCard
              key={benefit.title}
              {...benefit}
              className="h-[540px] max-w-[350px] mx-auto lg:max-w-full"
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>

        <div className="mt-8 w-full max-w-6xl">
           <AnimatedDiv
              delay={0.5}
              yOffset={50}
            >
              <Link href={wideBenefit.linkUrl} className="group/card block h-full w-full">
                <Card className="flex h-auto transform flex-col overflow-hidden bg-muted/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:bg-muted/20 md:h-[350px] md:flex-row">
                  <CardHeader className="p-6 md:w-1/2 md:p-10">
                    <div className="h-[180px] w-full overflow-hidden rounded-lg md:h-full">
                      <Image
                        src={wideBenefit.imageUrl}
                        alt={wideBenefit.imageAlt}
                        width={500} // Adjust as needed
                        height={300} // Adjust as needed
                        className="h-full w-full object-contain transition-transform duration-500 group-hover/card:scale-105"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-grow flex-col gap-4 p-6 pt-0 md:w-1/2 md:p-10 md:pt-10">
                    <CardTitle className="text-2xl font-medium md:text-3xl">{wideBenefit.title}</CardTitle>
                    <CardDescription className="flex-grow text-base leading-relaxed text-muted-foreground">
                      {wideBenefit.description}
                    </CardDescription>
                    <div className="mt-auto flex items-center gap-2 pt-4 text-sm font-medium text-primary">
                      <span>Learn more</span>
                      <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover/card:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedDiv>
        </div>
      </div>
    </section>
  );
}

// Need to import these components used within the wide benefit card
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
