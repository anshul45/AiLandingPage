"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { href: "#about", label: "About us" },
  { href: "#pricing", label: "Pricing" },
  { href: "#features", label: "Features" },
  { href: "#company", label: "Company" }, // Assuming #company is a valid target
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 flex h-[60px] w-full items-center justify-between bg-background/80  backdrop-blur-sm px-16">
      <Link href="/" className="flex-shrink-0">
        <Image src="/assets/logo/logo.png" alt="SaaS AI Logo" width={42} height={42} />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-12 text-base">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-foreground hover:text-primary transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="hidden lg:flex items-center gap-4">
        <ThemeToggle />
        <Button asChild className="bg-[#6C72E8] text-white rounded-full transition-transform duration-300 hover:scale-105">
          <Link href="/signup" aria-label="Get started">
            Get started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center gap-2">
        <ThemeToggle />
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px]">
            <nav className="flex flex-col gap-5 mt-10 text-right pr-4">
              {navLinks.map((link) => (
                <SheetClose key={link.href} asChild>
                   <Link
                      href={link.href}
                      className="text-lg text-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button asChild className="rounded-full mt-5 justify-end">
                  <Link href="/signup" aria-label="Get started">
                    Get started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
