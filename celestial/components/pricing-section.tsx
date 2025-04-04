"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming you have this utility

const pricingTiers = [
  {
    price: 9,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, explicabo!",
    features: [
      "Lorem ipsum dolor sit amet.",
      "Lorem, ipsum.",
      "Lorem, ipsum dolor.",
      "Lorem ipsum dolor sit.",
    ],
    isFeatured: false,
  },
  {
    price: 19,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, explicabo!",
    features: [
      "Lorem ipsum dolor sit amet.",
      "Lorem, ipsum.",
      "Lorem, ipsum dolor.",
      "Lorem ipsum dolor sit.",
    ],
    isFeatured: true,
  },
  {
    price: 49,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, explicabo!",
    features: [
      "Lorem ipsum dolor sit amet.",
      "Lorem, ipsum.",
      "Lorem, ipsum dolor.",
      "Lorem ipsum dolor sit.",
    ],
    isFeatured: false,
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function PricingSection() {
  return (
    <section id="pricing" className="w-full max-w-[100vw] py-16 lg:py-24 bg-muted/30 dark:bg-muted/10">
      <div className="container mx-auto px-4 flex flex-col items-center gap-10 lg:gap-12">
        <motion.h3
          className="text-3xl md:text-4xl text-primary font-medium text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Simple pricing
        </motion.h3>

        <motion.div
          className="flex flex-wrap justify-center gap-8 w-full max-w-6xl"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {pricingTiers.map((tier, index) => (
            <motion.div key={index} variants={itemVariants} className="w-full sm:w-[350px] lg:w-[380px]">
              <Card
                className={cn(
                  "flex flex-col h-full shadow-xl dark:bg-card",
                  tier.isFeatured ? "border-2 border-primary" : "bg-background"
                )}
              >
                <CardHeader className="items-center text-center pt-8">
                  <CardTitle className="text-5xl font-semibold text-foreground">
                    ${tier.price}
                    <span className="text-2xl text-muted-foreground">/mo</span>
                  </CardTitle>
                  <CardDescription className="pt-3 !mt-0">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow items-center gap-4 pt-4 pb-8">
                  <hr className="w-full border-border my-4" />
                  <ul className="flex flex-col gap-3 text-center text-muted-foreground w-full">
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center justify-center gap-2">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="lg" className="mt-auto w-full transition-transform duration-300 hover:scale-[1.02]">
                    <Link href="/signup">Get now</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
