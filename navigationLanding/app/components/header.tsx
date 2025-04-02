"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, Download, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "#about", label: "About us" },
  { href: "#pricing", label: "Pricing" },
  { href: "#solutions", label: "Solutions" },
  { href: "#features", label: "Features" },
  { href: "#company", label: "Company" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 z-20 flex h-[60px] w-full items-center justify-between px-[5%] lg:justify-around backdrop-blur-sm bg-background/30">
      <Link href="/" className="h-[50px] w-[50px] p-[4px] flex-shrink-0" aria-label="Homepage">
        <Image src="/assets/logo/logo.png" alt="Navigator Logo" width={42} height={42} className="object-contain w-full h-full" />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-5 text-base mx-auto">
        {navItems.map((item) => (
          <Button key={item.href} variant="link" asChild className="text-foreground hover:text-primary transition-colors">
            <Link href={item.href}>{item.label}</Link>
          </Button>
        ))}
      </nav>

      <div className="hidden lg:flex items-center gap-[20px] text-base ml-4">
        <Button asChild className="rounded-full transition-transform duration-300 hover:translate-x-1">
          <Link href="#download" aria-label="Download the app">
            <span>Download</span>
            <Download className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Mobile Navigation Trigger */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="ghost" size="icon" aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background p-0">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b">
                <Link href="/" className="h-[40px] w-[40px] p-[4px] flex-shrink-0" aria-label="Homepage" onClick={() => setIsMobileMenuOpen(false)}>
                    <Image src="/assets/logo/logo.png" alt="Navigator Logo" width={32} height={32} className="object-contain w-full h-full" />
                </Link>
                <SheetClose asChild>
                     <Button variant="ghost" size="icon" aria-label="Close menu">
                        <X className="h-6 w-6" />
                    </Button>
                </SheetClose>
            </div>
            <nav className="flex flex-col items-end gap-5 p-6 text-base flex-grow">
              {navItems.map((item) => (
                <SheetClose key={item.href} asChild>
                    <Button variant="link" asChild className="text-foreground hover:text-primary transition-colors text-lg">
                        <Link href={item.href}>{item.label}</Link>
                    </Button>
                </SheetClose>
              ))}
            </nav>
            <div className="p-6 border-t">
                <SheetClose asChild>
                    <Button asChild className="w-full rounded-full transition-transform duration-300 hover:translate-x-1">
                        <Link href="#download" aria-label="Download the app">
                            <span>Download</span>
                            <Download className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </SheetClose>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}