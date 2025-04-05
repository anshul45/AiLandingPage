"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const brands = [
  { src: "/assets/images/brand-logos/google.svg", alt: "Google" },
  { src: "/assets/images/brand-logos/microsoft.svg", alt: "Microsoft" },
  { src: "/assets/images/brand-logos/adobe.svg", alt: "Adobe" },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function BrandsSection() {
  return (
    <section className="w-full max-w-[100vw] py-6 lg:py-6 bg-muted/30 dark:bg-muted/10">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-wrap justify-center items-center gap-10 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              className="relative w-[120px] h-[30px] lg:w-[150px] lg:h-[35px]"
              variants={fadeIn}
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                fill
                sizes="150px"
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 dark:invert dark:hover:invert-0"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
