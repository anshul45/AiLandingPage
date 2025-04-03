"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ToolCard } from "@/components/ui/tool-card";
import { AnimatedDiv } from "@/components/ui/animated-div";
import {
  CodeSquare,
  FileText,
  Image as ImageIcon,
  BarChart,
  Music,
  Video,
} from "lucide-react";

const tools = [
  {
    title: "AI code generator",
    description: "AI code generation tools to create code from natural language or patterns, streamlining development and improving efficiency.",
    icon: CodeSquare,
    linkUrl: "#",
  },
  {
    title: "PDF generator",
    description: "Use AI tools to automate PDF creation and content extraction, improving document management and data processing.",
    icon: FileText,
    linkUrl: "#",
  },
  {
    title: "Image generation",
    description: "Prebuilt AI tools for image generation create visuals from text or patterns, enhancing design and creative projects.",
    icon: ImageIcon,
    linkUrl: "#",
  },
  {
    title: "AI Analytics",
    description: "Our AI analytics tools analyze data patterns and trends, providing actionable insights and enhancing decision-making.",
    icon: BarChart,
    linkUrl: "#",
  },
  {
    title: "Music generator",
    description: "Access our AI music generation tools create original compositions from input parameters, enabling effortless music creation.",
    icon: Music,
    linkUrl: "#",
  },
  {
    title: "Video generator",
    description: "Use our AI video generation tools create videos from text or templates, streamlining content creation and production.",
    icon: Video,
    linkUrl: "#",
  },
];

export function ToolsSection() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-8">
          {/* Sticky Title Section (Left) */}
          <div className="w-full text-center lg:sticky lg:top-24 lg:h-fit lg:w-1/3 lg:text-left">
            <AnimatedDiv yOffset={30} delay={0.1}>
              <h2 className="font-serif text-4xl font-medium md:text-5xl">
                Pre-built AI Tools
              </h2>
            </AnimatedDiv>
            <AnimatedDiv yOffset={30} delay={0.2} className="mt-6 lg:mt-8">
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="#">
                  Start Chat
                </Link>
              </Button>
            </AnimatedDiv>
          </div>

          {/* Tools Cards (Right) */}
          <div className="grid w-full grid-cols-1 gap-6 md:gap-8 lg:w-2/3 lg:grid-cols-1">
            {tools.map((tool, index) => (
              <ToolCard
                key={tool.title}
                {...tool}
                delay={0.1 + index * 0.1} // Stagger animation
                className="mx-auto lg:mx-0 lg:ml-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
