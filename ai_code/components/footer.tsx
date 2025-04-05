"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { Separator } from "@/components/ui/separator";

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

export function Footer() {
  return (
    <footer className=" text-muted-foreground">
      <div className="container mx-auto flex flex-col gap-8 px-6 py-12 md:flex-row md:justify-evenly md:gap-12 lg:px-8">
        {/* Logo and Address */}
        <div className="flex flex-col items-center gap-4 md:items-start md:w-1/3 lg:w-1/4">
          <Link href="/" className="mb-2">
            <Image
              src="/assets/logo/logo.png"
              alt="SaaS AI Logo"
              width={100} // Adjusted size
              height={100}
            />
          </Link>
          <address className="text-center not-italic md:text-left text-sm">
            2 Lord Edward St,<br />
            D02 P634,<br />
            United States
          </address>
          <h2 className="text-lg font-semibold text-foreground">Follow us</h2>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <social.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>

        {/* Resources Links */}
        <div className="flex flex-col items-center gap-4 md:items-start md:w-1/3 lg:w-1/4">
          <h2 className="text-4xl font-semibold text-foreground">Resources</h2>
          <nav className="flex flex-col gap-2 text-center md:text-left">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg text-white hover:text-[#4F55C1]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
