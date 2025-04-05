"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedDiv } from "./animated-div";

const articles = [
  {
    href: "/blog/article-1",
    imgSrc: "/assets/images/home/forest.jpg",
    title: "Navigating National Parks",
    description: "Tips and tricks for using Navigator off the beaten path.",
  },
  {
    href: "/blog/article-2",
    imgSrc: "/assets/images/home/mountain.jpg",
    title: "Optimizing Routes for Scenic Drives",
    description: "Discover hidden gems and beautiful roads with our guide.",
  },
  {
    href: "/blog/article-3",
    imgSrc: "/assets/images/home/photography.jpg",
    title: "Integrating Navigator with Your Smart Car",
    description: "Unlock the full potential of connected driving.",
  },
];

export function ArticlesSection() {
  return (
    <section className="mt-5 flex min-h-[80vh] w-full flex-col place-content-center place-items-center p-[2%] lg:p-6">
      <AnimatedDiv>
        <h3 className="text-center text-3xl md:text-4xl font-medium mb-10">
          Read our articles ✨
        </h3>
      </AnimatedDiv>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl">
        {articles.map((article, index) => (
          <AnimatedDiv key={index} delay={index * 0.1}>
            <Card className="bg-transparent overflow-hidden h-full flex flex-col group  hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={article.imgSrc}
                    alt={`Image for ${article.title}`}
                    width={400}
                    height={225} // 16:9 aspect ratio
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 flex-grow">
                <CardTitle className="mt-2 text-xl md:text-2xl font-semibold">
                  {article.title}
                </CardTitle>
                <p className="mt-2 text-muted-foreground">
                  {article.description}
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="link" asChild className="p-0 h-auto text-primary">
                  <Link href={article.href}>
                    <span>Learn more</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </AnimatedDiv>
        ))}
      </div>
    </section>
  );
}