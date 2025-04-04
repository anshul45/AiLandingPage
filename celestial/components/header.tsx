"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useTheme } from 'next-themes';

const navLinks = [
  { href: "#about", label: "About us" },
  { href: "#pricing", label: "Pricing" },
  { href: "#features", label: "Features" },
  { href: "#company", label: "Company" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex h-[60px] items-center justify-between px-4 md:px-[5%] transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
      )}
    >
      <div className="absolute top-0 left-0 w-full h-[150px] -z-10 header-gradient opacity-50 dark:opacity-30" />

      <Link href="/" className="flex-shrink-0" aria-label="Homepage">
        <Image src="/assets/logo/logo1.png" alt="Celestial SaaS Logo" width={42} height={42} className="object-contain" />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6 text-base">
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

      {/* Desktop Action Button */}
      <div className="hidden md:flex items-center gap-4">
         <Button asChild className="rounded-full group">
          <Link href="/signup" aria-label="Get started">
            Get started
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
        {/* Optional Theme Toggle */}
        {/* <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button> */}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-6 w-6 text-foreground" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[320px]">
            <div className="flex flex-col h-full pt-10">
              <nav className="flex flex-col gap-5 mt-8 text-lg">
                {navLinks.map((link) => (
                  <SheetClose key={link.href} asChild>
                     <Link
                        href={link.href}
                        className="text-foreground hover:text-primary transition-colors duration-200 py-2"
                        onClick={closeMobileMenu}
                      >
                        {link.label}
                      </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto pb-8 flex flex-col gap-4 items-center">
                 <SheetClose asChild>
                    <Button asChild className="w-full rounded-full group">
                      <Link href="/signup" aria-label="Get started">
                        Get started
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                 </SheetClose>
                 {/* Optional Theme Toggle */}
                {/* <Button variant="outline" className="w-full" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                  Toggle Theme
                </Button> */}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

// Helper function for class names (assuming you have this in lib/utils)
function cn(...inputs: any[]) {
  // Simplified version for brevity
  return inputs.filter(Boolean).join(' ');
}
