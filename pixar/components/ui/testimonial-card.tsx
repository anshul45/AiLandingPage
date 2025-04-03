"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { AnimatedDiv } from "./animated-div";

interface TestimonialCardProps {
  name: string;
  title: string;
  imageUrl: string;
  quote: string;
  className?: string;
  delay?: number;
}

export function TestimonialCard({
  name,
  title,
  imageUrl,
  quote,
  className,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <AnimatedDiv
      className={cn("w-full max-w-[350px] break-inside-avoid", className)}
      delay={delay}
      yOffset={50}
      tag="figure" // Use figure for semantic meaning
    >
      <Card className="h-fit bg-muted/40 dark:bg-muted/20">
        <CardHeader className="flex flex-row items-center gap-4 pb-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={imageUrl} alt={`${name}'s avatar`} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <figcaption className="font-semibold text-card-foreground">{name}</figcaption>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>
        </CardHeader>
        <CardContent>
          <blockquote className="mt-2 border-l-2 border-border pl-4 text-muted-foreground italic">
            {quote}
          </blockquote>
        </CardContent>
      </Card>
    </AnimatedDiv>
  );
}
