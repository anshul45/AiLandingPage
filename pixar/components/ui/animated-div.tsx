"use client";

import { motion, useInView, Variants } from "framer-motion";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedDivProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  once?: boolean;
  amount?: number;
  delay?: number;
  duration?: number;
  yOffset?: number;
  tag?: keyof JSX.IntrinsicElements;
}

const defaultVariants: Variants = {
  hidden: (custom: { yOffset?: number }) => ({ opacity: 0, y: custom?.yOffset ?? 20 }),
  visible: (custom: { delay?: number; duration?: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom?.delay ?? 0,
      duration: custom?.duration ?? 0.5,
      ease: "easeOut",
    },
  }),
};

export function AnimatedDiv({
  children,
  className,
  variants = defaultVariants,
  once = true,
  amount = 0.3, 
  delay = 0,
  duration = 0.7,
  yOffset = 10,
  tag = 'div',
}: AnimatedDivProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });
  const MotionComponent = motion[tag];

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      custom={{ yOffset, delay, duration }}
      className={cn(className)}
    >
      {children}
    </MotionComponent>
  );
}
