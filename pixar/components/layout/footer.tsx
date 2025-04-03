"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="mt-auto flex w-full flex-col gap-8 bg-background px-[10%] pb-10 pt-[5%] text-sm text-foreground max-md:px-4">
      {/* Newsletter Section */}
      <section className="flex w-full flex-col items-center justify-center py-8">
        <div className="flex w-full max-w-4xl flex-col items-center justify-between gap-4 rounded-lg bg-muted p-6 md:flex-row">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <h2 className="text-xl font-semibold text-foreground md:text-2xl">
              Join our newsletter
            </h2>
            <p className="text-muted-foreground">Get product insights and updates.</p>
          </div>
          <form className="flex w-full max-w-sm items-center gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-10 flex-grow"
              aria-label="Email for newsletter"
            />
            <Button type="submit" variant="outline" className="shrink-0 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Signup
            </Button>
          </form>
        </div>
      </section>

      {/* Footer Links */}
      <div className="flex flex-col gap-8 md:flex-row md:justify-around">
        <div className="flex w-full flex-col items-center gap-6 md:w-[250px]">
          <Link href="#" className="flex flex-col items-center gap-4" aria-label="Pixa Home">
            <Image
              src="/assets/logo/logo.png"
              alt="Pixa Logo"
              width={80}
              height={80}
              className="dark:invert"
            />
            <span className="text-3xl font-bold">PIXA</span>
          </Link>
          <div className="flex gap-4 text-lg">
            <Link href="https://github.com/PaulleDemon/" aria-label="Github" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://twitter.com/pauls_freeman" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/" aria-label="Linkedin" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="grid flex-grow grid-cols-2 gap-8 text-center md:grid-cols-3 md:text-left">
          <div className="flex flex-col gap-3">
            <h2 className="mb-2 text-lg font-semibold">Resources</h2>
            <FooterLink href="#">Getting started</FooterLink>
            <FooterLink href="#">API Docs</FooterLink>
            <FooterLink href="#">API Endpoints</FooterLink>
            <FooterLink href="#">Health status</FooterLink>
            <FooterLink href="#pricing">Pricing</FooterLink>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="mb-2 text-lg font-semibold">Company</h2>
            <FooterLink href="#">Support channels</FooterLink>
            <FooterLink href="#">Systems</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="https://twitter.com/pauls_freeman">Twitter</FooterLink>
            <FooterLink href="https://github.com/PaulleDemon">Github</FooterLink>
          </div>

          <div className="col-span-2 flex flex-col gap-3 md:col-span-1">
            <h2 className="mb-2 text-lg font-semibold">Legal</h2>
            <FooterLink href="#">Terms of service</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">DCMA - Content Takedown</FooterLink>
          </div>
        </div>
      </div>

      <hr className="mt-8 border-border" />

      <div className="mt-4 flex flex-col items-center gap-2 text-center text-xs text-muted-foreground md:flex-row md:justify-between">
        <span>Copyright © 2023-2025 Pixa Inc. All rights reserved.</span>
        <span>All trademarks and copyrights belong to their respective owners.</span>
      </div>
    </footer>
  );
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <Link href={href} className="text-muted-foreground transition-colors hover:text-foreground hover:underline">
    {children}
  </Link>
);
