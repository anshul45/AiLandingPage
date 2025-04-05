"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: "Trich B",
    title: "AMI, CEO",
    image: "/assets/images/people/women.jpg",
    quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, vero.",
  },
  {
    name: "John B",
    title: "ABC, CTO",
    image: "/assets/images/people/man.jpg",
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore deserunt delectus consectetur enim cupiditate ab nemo voluptas repellendus qui quas..",
  },
  {
    name: "Mante",
    title: "XYZ, CTO",
    image: "/assets/images/people/man2.jpg",
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, numquam.",
  },
  {
    name: "Lara",
    title: "XZ, CTO",
    image: "/assets/images/people/women.jpg", // Reusing image, replace if needed
    quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, saepe illum. Dicta quisquam praesentium quod!",
  },
  {
    name: "James",
    title: "APP, CTO",
    image: "/assets/images/people/man.jpg", // Reusing image, replace if needed
    quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga accusamus non enim debitis rem neque beatae explicabo corrupti porro ullam?",
  },
  {
    name: "Ron",
    title: "Marketplace, CTO",
    image: "/assets/images/people/man2.jpg", // Reusing image, replace if needed
    quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga accusamus non enim debitis rem neque beatae explicabo corrupti porro ullam?",
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function TestimonialsSection() {
  return (
    <section className="w-full max-w-[100vw] py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 flex flex-col items-center gap-10 lg:gap-12">
        <motion.h3
          className="text-2xl md:text-3xl text-[#4F55C1] font-semibold text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What our clients say
        </motion.h3>

        <motion.div
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 w-full max-w-6xl"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} className="break-inside-avoid" variants={itemVariants}>
              <Card className="h-full shadow-lg dark:bg-card">
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={`Photo of ${testimonial.name}`}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
