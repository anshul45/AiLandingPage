"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram } from "lucide-react";

const companyLinks = [
  { href: "#use-cases", label: "Use cases" },
  { href: "#integrations", label: "Integrations" },
  { href: "#changelog", label: "Change logs" },
  { href: "/blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

const resourceLinks = [
  { href: "#about", label: "About us" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact-us", label: "Contact Us" },
  { href: "/blog", label: "Blog" }, // Duplicate, maybe remove or rename?
  { href: "/privacy", label: "Privacy policy" },
];

export function Footer() {
  return (
    <footer className="mt-auto flex w-full flex-wrap justify-between gap-10 border-t border-border bg-background p-[5%] px-[5%] md:px-[10%] text-foreground">
      {/* Logo and Address */}
      <div className="flex w-full flex-col items-start md:items-center md:w-auto lg:w-[250px] gap-4">
        <Link href="/" aria-label="Homepage">
          <Image
            src="/assets/logo/logo.png"
            alt="Navigator Logo"
            width={100} // Reduced size slightly
            height={100}
            className="object-contain"
          />
        </Link>
        <div className="text-sm text-muted-foreground text-left md:text-center">
          123 Navigation Way,
          <br />
          Suite 404, Tech City,
          <br />
          CA 94043, USA
        </div>
        <div className="mt-3 text-base font-semibold">Follow us</div>
        <div className="flex gap-4 text-2xl">
          <Button variant="ghost" size="icon" asChild aria-label="Facebook">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild aria-label="Twitter">
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild aria-label="Instagram">
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Company Links */}
      <div className="flex w-1/2 md:w-auto lg:w-[200px] flex-col gap-4">
        <h2 className="text-xl md:text-2xl font-semibold">Company</h2>
        <div className="flex flex-col gap-2 md:gap-3 text-sm md:text-base">
          {companyLinks.map((link) => (
            <Button key={link.href} variant="link" asChild className="p-0 h-auto justify-start text-muted-foreground hover:text-primary">
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </div>
      </div>

      {/* Resources Links */}
      <div className="flex w-1/2 md:w-auto lg:w-[200px] flex-col gap-4">
        <h2 className="text-xl md:text-2xl font-semibold">Resources</h2>
        <div className="flex flex-col gap-2 md:gap-3 text-sm md:text-base">
          {resourceLinks.map((link) => (
            <Button key={link.href} variant="link" asChild className="p-0 h-auto justify-start text-muted-foreground hover:text-primary">
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </div>
      </div>

        {/* Copyright - Added for completeness */}
        <div className="w-full mt-10 pt-6 border-t border-border text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Navigator Inc. All rights reserved.
        </div>
    </footer>
  );
}