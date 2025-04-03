"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AnimatedDiv } from "./animated-div";

interface ArticleCardProps {
  title: string;
  category: string;
  date: string;
  imageUrl: string;
  linkUrl: string;
  className?: string;
  delay?: number;
}

export function ArticleCard({
  title,
  category,
  date,
  imageUrl,
  linkUrl,
  className,
  delay = 0,
}: ArticleCardProps) {
  return (
    <AnimatedDiv
      className={cn("w-full max-w-[400px]", className)}
      delay={delay}
      yOffset={50}
    >
      <Link href={linkUrl} className="group block h-full w-full">
        <Card className="flex h-[500px] transform flex-col overflow-hidden bg-transparent p-0 shadow-none transition-all duration-300 hover:shadow-lg dark:bg-muted/10">
          <CardHeader className="h-[350px] min-h-[350px] w-full overflow-hidden rounded-t-lg p-0">
            <Image
              src={imageUrl}
              alt={title}
              width={400}
              height={350}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </CardHeader>
          <CardContent className="flex flex-grow flex-col gap-1 p-4">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{category}</span>
              <span>{date}</span>
            </div>
            <CardTitle className="mt-1 text-xl font-medium group-hover:text-primary">
              {title}
            </CardTitle>
          </CardContent>
        </Card>
      </Link>
    </AnimatedDiv>
  );
}
