"use client";

import React, { useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

const RevealUp: React.FC<RevealUpProps> = ({
  children,
  className,
  delay = 0.2,
  duration = 0.6,
  yOffset = 24,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const variants = {
    hidden: { opacity: 0, y: yOffset },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default RevealUp;
