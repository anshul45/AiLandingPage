"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Box, Award, BookOpen, Briefcase, CreditCard, Flame } from 'lucide-react';

const features = [
  {
    icon: Box,
    title: "Feature 1",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, voluptates numquam quam expedita mollitia possimus.",
  },
  {
    icon: Award,
    title: "Feature 2",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, voluptates numquam quam expedita mollitia possimus.",
  },
  {
    icon: BookOpen,
    title: "Feature 3",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, voluptates numquam quam expedita mollitia possimus.",
  },
  {
    icon: Briefcase,
    title: "Feature 4",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, voluptates numquam quam expedita mollitia possimus.",
  },
  {
    icon: CreditCard,
    title: "Feature 5",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, voluptates numquam quam expedita mollitia possimus.",
  },
  {
    icon: Flame,
    title: "Feature 6",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, voluptates numquam quam expedita mollitia possimus.",
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="w-full max-w-[100vw] py-16 lg:py-24 bg-muted/30 dark:bg-muted/10">
      <div className="container mx-auto px-4 flex flex-col items-center gap-10 lg:gap-16">
        <motion.div
          className="text-center flex flex-col gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
        >
          <h3 className="text-xl text-primary font-medium">Features loved by our clients</h3>
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground">Core features</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl w-full"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full text-center bg-background dark:bg-card shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardHeader className="items-center">
                    <div className="p-3 rounded-full bg-primary/10 mb-3">
                       <Icon className="w-8 h-8 text-primary" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
