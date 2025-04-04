"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle"; // Re-using ThemeToggle if needed

const companyLinks = [
  { href: "#about", label: "About Us" },
  { href: "#features", label: "Features" },
  { href: "/blog", label: "Blog" },
  { href: "#pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

const resourceLinks = [
  { href: "/docs", label: "Documentation" },
  { href: "/support", label: "Support Center" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/faq", label: "FAQ" },
];

const socialLinks = [
  { href: "https://facebook.com", label: "Facebook", icon: Facebook },
  { href: "https://twitter.com/@pauls_freeman", label: "Twitter", icon: Twitter },
  { href: "https://instagram.com", label: "Instagram", icon: Instagram },
];

export function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-border bg-background p-[5%] px-[5%] md:px-[10%] py-12 text-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-12 md:grid-cols-4 lg:grid-cols-5">
        {/* Logo and Address */}
        <div className="col-span-1 flex flex-col items-start gap-4 md:col-span-1 lg:col-span-2">
          <Link href="/" className="mb-2">
            <Image src="/assets/logo/logo.png" alt="SaaSy Logo" width={100} height={100} className="h-auto w-[80px] md:w-[100px]" />
          </Link>
          <address className="text-sm not-italic text-muted-foreground">
            2 Lord Edward St,<br />
            D02 P634,<br />
            Dublin, Ireland (Example)
          </address>
          <div className="mt-4">
            <p className="text-sm font-semibold mb-2">Follow us</p>
            <div className="flex gap-4 text-muted-foreground">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-4 md:hidden lg:block">
             <ThemeToggle />
          </div>
        </div>

        {/* Company Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Company</h3>
          <nav className="flex flex-col gap-2">
            {companyLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Resources Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Resources</h3>
          <nav className="flex flex-col gap-2">
            {resourceLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
         <div className="hidden md:flex lg:hidden items-start mt-4">
             <ThemeToggle />
          </div>
      </div>
      <div className="container mx-auto mt-12 border-t border-border/50 pt-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} SaaSy Dark. All rights reserved.
      </div>
    </footer>
  );
}