"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedDiv } from "./animated-div";

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  linkUrl: string;
  className?: string;
  imageClassName?: string;
  delay?: number;
}

export function FeatureCard({
  title,
  description,
  imageUrl,
  imageAlt,
  linkUrl,
  className,
  imageClassName,
  delay = 0,
}: FeatureCardProps) {
  return (
    <AnimatedDiv
      className={cn("w-full", className)}
      delay={delay}
      yOffset={50}
    >
      <Link href={linkUrl} className="group/card block h-full w-full">
        <Card className="flex h-full transform flex-col overflow-hidden bg-muted/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:bg-muted/20">
          <CardHeader className="p-6 pb-0 md:p-8 md:pb-0">
            <div className={cn("mb-4 h-[180px] w-full overflow-hidden rounded-lg md:h-[200px]", imageClassName)}>
              <Image
                src={imageUrl}
                alt={imageAlt}
                width={350} // Adjust as needed
                height={200} // Adjust as needed
                className="h-full w-full object-contain transition-transform duration-500 group-hover/card:scale-105"
              />
            </div>
            <CardTitle className="text-2xl font-medium md:text-3xl">{title}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-grow flex-col p-6 pt-4 md:p-8 md:pt-4">
            <CardDescription className="flex-grow text-base leading-relaxed text-muted-foreground">
              {description}
            </CardDescription>
            <div className="mt-auto flex items-center gap-2 pt-4 text-sm font-medium text-primary">
              <span>Learn more</span>
              <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover/card:translate-x-1" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </AnimatedDiv>
  );
}
