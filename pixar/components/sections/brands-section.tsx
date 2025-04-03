"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const brands = [
  { name: "Google", logo: "/assets/images/brand-logos/google.svg" },
  { name: "Microsoft", logo: "/assets/images/brand-logos/microsoft.svg" },
  { name: "Adobe", logo: "/assets/images/brand-logos/adobe.svg" },
  { name: "Airbnb", logo: "/assets/images/brand-logos/airbnb.svg" },
  { name: "Stripe", logo: "/assets/images/brand-logos/stripe.svg" },
  { name: "Reddit", logo: "/assets/images/brand-logos/reddit.svg" },
];

const loopBrands = [...brands, ...brands];

export const BrandsSection = () => {
  return (
    <section className="container mx-auto py-16 px-4 md:px-6 lg:py-24 overflow-hidden">
      <h2 className="mb-10 text-center text-2xl font-medium text-muted-foreground md:text-3xl">
        Trusted by brands you love
      </h2>
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8 md:gap-12 lg:gap-16"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 20, 
            repeat: Infinity,
          }}
        >
          {loopBrands.map((brand, index) => (
            <div key={index} className="h-7 w-28 flex-shrink-0">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={20}
                height={20}
                className="h-full w-full object-contain grayscale transition-all hover:grayscale-0 dark:invert dark:hover:invert-0"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};


