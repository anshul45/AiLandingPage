"use client";

import React from "react";
import { ArticleCard } from "@/components/ui/article-card";
import { AnimatedDiv } from "@/components/ui/animated-div";

const articles = [
  {
    title: "Latest AI tools shaping the future", // Updated title
    category: "Machine learning",
    date: "Jul 17, 2024",
    imageUrl: "/assets/images/home/article1.png",
    linkUrl: "#",
  },
  {
    title: "Pixa Unveils Groundbreaking New AI Technology", // Updated title
    category: "Announcement",
    date: "June 22, 2024",
    imageUrl: "/assets/images/home/article2.jpg",
    linkUrl: "#",
  },
  {
    title: "Launching Pixa Playground: Your Unified AI Hub", // Updated title
    category: "Product Launch", // Updated category
    date: "Apr 27, 2024",
    imageUrl: "/assets/images/home/article3.png",
    linkUrl: "#",
  },
];

export function ResourcesSection() {
  return (
    <section className="w-full">
      <div className="container mx-auto flex flex-col items-center px-4 md:px-6">
        <AnimatedDiv yOffset={30} delay={0.1} className="text-center">
          <h2 className="text-3xl font-medium md:text-4xl">
            Read resources by experts ✨
          </h2>
        </AnimatedDiv>

        <div className="mt-12 grid w-full max-w-7xl grid-cols-1 gap-10 md:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              {...article}
              delay={0.2 + index * 0.1}
              className="mx-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
