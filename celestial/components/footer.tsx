"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const footerLinks = [
  { href: "/about", label: "About us" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
  { href: "/blog", label: "Blogs" },
  { href: "/privacy", label: "Privacy policy" },
];

const socialLinks = [
  { href: "https://facebook.com", label: "Facebook", icon: Facebook },
  { href: "https://twitter.com/@pauls_freeman", label: "Twitter", icon: Twitter },
  { href: "https://instagram.com", label: "Instagram", icon: Instagram },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Footer() {
  return (
    <motion.footer
      className="w-full py-12 lg:py-16 px-4 md:px-[5%] lg:px-[10%] bg-muted/50 dark:bg-muted/20 text-foreground"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ staggerChildren: 0.1 }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
        {/* Column 1: Logo and Info */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left gap-4"
          variants={fadeIn}
        >
          <Link href="/" className="mb-4">
            <Image
              src="/assets/logo/logo1.png"
              alt="Celestial SaaS Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>
          <p className="text-sm text-muted-foreground">
            2 Lord Edward St,<br />
            D02 P634,<br />
            United Kingdom
          </p>
          <div className="mt-4">
            <p className="font-semibold text-lg mb-2">Follow us</p>
            <div className="flex gap-4 justify-center md:justify-start">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    <Icon className="w-6 h-6" />
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Column 2: Resources */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left gap-4"
          variants={fadeIn}
        >
          <h2 className="text-2xl lg:text-3xl font-semibold mb-2">Resources</h2>
          <nav className="flex flex-col gap-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary hover:underline transition-colors duration-200 text-sm md:text-base"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </motion.div>

        {/* Column 3: Placeholder/Empty or additional content */}
        <motion.div variants={fadeIn}>
          {/* You can add more content here if needed, like another set of links or a small form */}
        </motion.div>
      </div>

      <motion.div
        className="text-center mt-12 pt-8 border-t border-border text-sm text-muted-foreground"
        variants={fadeIn}
      >
        © {new Date().getFullYear()} Celestial SaaS. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}
