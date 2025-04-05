"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ThemeToggleButton } from "@/components/ui/theme-toggle-button";
import {
  Menu,
  ChevronDown,
  ListOrdered,
  LayoutGrid,
  Globe,
  Image as ImageIcon,
  CalendarRange,
  Languages,
  ArrowRight,
} from "lucide-react";

const features: { title: string; href: string; description: string; icon: React.ElementType }[] = [
  {
    title: "Prompt library",
    href: "#",
    description: "Comes packed with pre-made prompt templates",
    icon: ListOrdered,
  },
  {
    title: "Unified Interface",
    href: "#",
    description: "Test multiple AI models in one interface",
    icon: LayoutGrid,
  },
  {
    title: "Realtime web search",
    href: "#",
    description: "Search the internet in realtime",
    icon: Globe,
  },
  {
    title: "Image generation",
    href: "#",
    description: "Generate images from prompts",
    icon: ImageIcon,
  },
  {
    title: "History",
    href: "#",
    description: "Continue from where you left off",
    icon: CalendarRange,
  },
  {
    title: "Multilingual",
    href: "#",
    description: "Converse in multiple languages",
    icon: Languages,
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-4 left-1/2 z-50 flex h-[60px] w-[75%] max-w-5xl -translate-x-1/2 items-center justify-between rounded-md border bg-background/80 px-4 shadow-md backdrop-blur-lg transition-all duration-300 md:w-[75%] lg:px-6 dark:shadow-gray-600",
        isScrolled ? "bg-background/95 shadow-md" : ""
      )}
    >
      <Link href="#" className="flex items-center gap-2" aria-label="Pixa Home">
        <Image
          src="/assets/logo/logo.png"
          alt="Pixa Logo"
          width={30}
          height={30}
          className="object-contain dark:invert"
        />
        <span className="text-base font-medium uppercase">Pixa</span>
      </Link>

      {/* Desktop Navigation */}
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="#" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                API
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Blog
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Solutions
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Features</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {features.map((feature) => (
                  <ListItem
                    key={feature.title}
                    title={feature.title}
                    href={feature.href}
                    icon={feature.icon}
                  >
                    {feature.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#pricing" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Pricing
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden items-center gap-4 lg:flex">
        <ThemeToggleButton />
        <Button asChild className="group transition-transform duration-300 hover:translate-x-1">
          <Link href="#">
            Try playground
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Mobile Navigation */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="ghost" size="icon" aria-label="Toggle Menu">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <nav className="flex h-full flex-col gap-6 pt-8">
            <Link href="#" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>API</Link>
            <Link href="#" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
            <Link href="#" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Solutions</Link>
            {/* Simple list for mobile features dropdown */}
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between py-2 font-medium text-foreground hover:text-muted-foreground">
                Features
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <div className="mt-2 flex flex-col gap-2 pl-4">
                {features.map((feature) => (
                  <Link
                    key={feature.title}
                    href={feature.href}
                    className="flex items-center gap-2 rounded-md p-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <feature.icon className="h-4 w-4" />
                    {feature.title}
                  </Link>
                ))}
              </div>
            </details>
            <Link href="#pricing" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
            <div className="mt-auto flex items-center justify-between border-t pt-4">
              <ThemeToggleButton />
              <Button asChild className="group transition-transform duration-300 hover:translate-x-1">
                <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>
                  Try playground
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: React.ElementType }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none">
            <Icon className="h-5 w-5 text-primary" />
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
