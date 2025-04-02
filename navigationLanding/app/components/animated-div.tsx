"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

interface AnimatedDivProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function AnimatedDiv({ children, className, delay = 0, amount = 0.5 }: AnimatedDivProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: amount }}
      transition={{ duration: 0.5, delay: delay }}
      variants={defaultVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}