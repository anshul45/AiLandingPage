"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { AnimatedDiv } from "./AnimatedDiv";

const articles = [
  {
    slug: "article-1",
    title: "Boost Productivity with SaaS",
    description: "Discover how the right SaaS tools can streamline your workflow.",
    image: "/assets/images/home/forest.jpg",
  },
  {
    slug: "article-2",
    title: "Scaling Your Business with Cloud Tech",
    description: "Leverage cloud infrastructure for growth and flexibility.",
    image: "/assets/images/home/mountain.jpg",
  },
  {
    slug: "article-3",
    title: "The Future of Remote Collaboration",
    description: "Exploring tools and strategies for effective remote teams.",
    image: "/assets/images/home/photography.jpg",
  },
];

export function ArticlesSection() {
  return (
    <section className="mt-5 flex w-full flex-col place-content-center place-items-center p-[2%] py-16 sm:py-24 max-lg:p-3">
      <AnimatedDiv>
        <h3 className="text-center text-3xl font-medium md:text-4xl mb-12">
          Read Our Latest Articles ✨
        </h3>
      </AnimatedDiv>
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 place-content-center">
        {articles.map((article, index) => (
          <AnimatedDiv key={article.slug} delay={index * 0.1} amount={0.5}>
            <Link href={`/blog/${article.slug}`} className="group block">
              <Card className="py-0 flex h-full w-full max-w-[400px] flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow duration-300 hover:shadow-lg lg:max-w-[350px] xl:max-w-[400px]">
                <CardHeader className="p-0">
                  <div className="relative h-[250px] w-full overflow-hidden">
                    <Image
                      src={article.image}
                      alt={`Article: ${article.title}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4 flex flex-col gap-2 flex-grow">
                  <CardTitle className="mt-2 text-xl font-semibold md:text-2xl group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                  <p className="text-muted-foreground flex-grow">
                    {article.description}
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <span className="flex items-center text-sm font-medium text-primary group-hover:underline">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </CardFooter>
              </Card>
            </Link>
          </AnimatedDiv>
        ))}
      </div>
    </section>
  );
}