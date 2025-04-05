"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedDiv } from "./animated-div";

interface ToolCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  linkUrl: string;
  className?: string;
  delay?: number;
}

export function ToolCard({
  title,
  description,
  icon: Icon,
  linkUrl,
  className,
  delay = 0,
}: ToolCardProps) {
  return (
    <AnimatedDiv
      className={cn("w-full max-w-[450px]", className)}
      delay={delay}
      yOffset={50}
    >
      <Link href={linkUrl} className="group/card block h-full w-full">
        <Card  className="flex border-none h-[240px] transform gap-6 rounded-xl p-6 transition-all duration-300 hover:shadow-lg dark:shadow-gray-600  md:p-8">
          <div className="text-3xl text-primary md:text-4xl">
            <Icon />
          </div>
          <div className="flex flex-col gap-3">
            <CardTitle className="text-xl font-medium md:text-2xl">{title}</CardTitle>
            <CardDescription className="flex-grow text-sm text-muted-foreground md:text-base">
              {description}
            </CardDescription>
            <div className="mt-auto flex items-center gap-1 text-sm font-medium text-primary underline underline-offset-4">
              <span>Learn more</span>
              <ArrowUpRight className="h-4 w-4 transform transition-transform duration-300 group-hover/card:-translate-y-1 group-hover/card:translate-x-1" />
            </div>
          </div>
        </Card>
      </Link>
    </AnimatedDiv>
  );
}
