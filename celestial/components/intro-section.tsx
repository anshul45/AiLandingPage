"use client";

import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function IntroSection() {
  return (
    <section className="w-full max-w-[100vw] py-16 lg:py-24 bg-background">
      <motion.div
        className="container mx-auto px-4 flex flex-col items-center text-center gap-5 max-w-[750px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeIn}
      >
        <h2 className="text-3xl lg:text-4xl font-semibold text-foreground">
          Simple. <span className="text-primary">Fast.</span> Loved
        </h2>
        <p className="text-muted-foreground lg:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus consequatur odit exercitationem repellendus, recusandae ratione at tenetur, omnis dicta tempore dolor saepe quos doloremque tempora quibusdam. Aspernatur deserunt voluptatem aliquid.
        </p>
      </motion.div>
    </section>
  );
}
