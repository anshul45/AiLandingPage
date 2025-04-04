"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { AnimatedWrapper } from "@/components/animated-wrapper";

const articles = [
  {
    title: "Article 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, explicabo!",
    imageUrl: "/assets/images/home/forest.jpg",
    link: "/blog/article-1",
  },
  {
    title: "Article 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, explicabo!",
    imageUrl: "/assets/images/home/mountain.jpg",
    link: "/blog/article-2",
  },
  {
    title: "Article 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, explicabo!",
    imageUrl: "/assets/images/home/photography.jpg",
    link: "/blog/article-3",
  },
];

export function ArticlesSection() {
  return (
    <section className="flex w-full flex-col items-center justify-center py-16 md:py-24 px-4 md:px-8 bg-muted/40">
      <AnimatedWrapper className="text-center mb-10">
        <h3 className="text-3xl font-medium md:text-4xl">
          Read our articles ✨
        </h3>
      </AnimatedWrapper>

      <AnimatedWrapper className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 lg:flex-nowrap">
          {articles.map((article, index) => (
            <AnimatedWrapper
              key={index}
              className="w-full max-w-[350px] lg:w-1/3"
              delay={index * 0.1}
            >
              <Link href={article.link} className="block h-full group">
                <Card className="flex h-full flex-col overflow-hidden bg-card shadow-xl transition-shadow duration-300 hover:shadow-lg">
                  <div className="relative h-[200px] w-full overflow-hidden">
                    <Image
                      src={article.imageUrl}
                      alt={`${article.title} image`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl md:text-2xl">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="mt-1 text-muted-foreground">
                      {article.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <span className="flex items-center text-sm text-primary group-hover:underline">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            </AnimatedWrapper>
          ))}
        </div>
      </AnimatedWrapper>
    </section>
  );
}
