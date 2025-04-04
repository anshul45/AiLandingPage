"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedDivProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
}

const revealUpVariants: Variants = {
  hidden: { opacity: 0, y: "50%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function AnimatedDiv({ children, className, delay = 0, amount = 0.5 }: AnimatedDivProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: amount }}
      variants={revealUpVariants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}