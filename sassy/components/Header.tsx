"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle"; // Assuming you have a ThemeToggle component

const navLinks = [
  { href: "#about", label: "About us" },
  { href: "#pricing", label: "Pricing" },
  { href: "#solutions", label: "Solutions" },
  { href: "#features", label: "Features" },
  { href: "#company", label: "Company" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 z-50 flex h-16 w-full items-center justify-between px-4 sm:px-[5%] lg:justify-around bg-background/80 backdrop-blur-sm"
    >
      <Link href="/" className="flex-shrink-0 p-1" aria-label="Homepage">
        <Image src="/assets/logo/logo.png" alt="SaaSy Logo" width={42} height={42} className="object-contain" />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-5 text-base">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-foreground hover:text-primary transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="hidden lg:flex items-center gap-4 text-base">
        <ThemeToggle />
        <Button asChild className="group transition-transform duration-300 ease-out hover:translate-x-1">
          <Link href="/signup" aria-label="Get started">
            <span>Get started</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center gap-2">
        <ThemeToggle />
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs sm:max-w-sm bg-background p-6">
            <div className="flex flex-col h-full">
              <nav className="flex flex-col items-end gap-5 text-base mt-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col items-center gap-4 pt-10">
                <Button asChild size="lg" className="w-full group transition-transform duration-300 ease-out hover:translate-x-1">
                  <Link href="/signup" aria-label="Get started">
                    <span>Get started</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}