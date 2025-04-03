"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Typed from 'typed.js';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { ArrowUp, CodeSquare, FileText, Image as ImageIconLucide, ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const aiModels = [
  { value: "gpt4o", label: "GPT 4o", icon: "/assets/images/brand-logos/openai.svg" },
  { value: "gemini", label: "Gemini", icon: "/assets/images/brand-logos/googlegemini.svg" },
  { value: "llama3", label: "Llama 3", icon: "/assets/images/brand-logos/meta.svg" },
  { value: "claude", label: "Claude", icon: "/assets/images/brand-logos/claude.svg" },
];

const prompts = [
    "How to solve a quadratic equation?",
    "Explain the theory of relativity.",
    "Generate a python script for web scraping.",
    "Write a short story about a space explorer.",
    "What are the benefits of React?",
    "Translate 'hello world' to French."
];

export function PlaygroundDemo() {
  const [selectedModel, setSelectedModel] = useState(aiModels[0].value);
  const [promptInput, setPromptInput] = useState("");
  const [showSignupPrompt, setShowSignupPrompt] = useState(false);
  const typedRef = useRef<HTMLSpanElement>(null);
  const typedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: prompts,
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    };

    if (typedRef.current) {
        typedInstance.current = new Typed(typedRef.current, options);
    }

    // Simulate interaction to show signup prompt
    const timer = setTimeout(() => {
      setShowSignupPrompt(true);
    }, 15000); // Show after 15 seconds

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
      clearTimeout(timer);
    };
  }, []);

  const handlePromptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Prompt submitted:", promptInput, "with model:", selectedModel);
    // Add logic to handle prompt submission (e.g., API call)
    setShowSignupPrompt(true); // Show signup prompt on submit for demo
    setPromptInput("");
  };

  const selectedModelData = aiModels.find(model => model.value === selectedModel);

  return (
    <div className="relative w-full max-w-[80%] rounded-xl border border-border bg-background shadow-xl dark:border-[#36393c] lg:h-[650px] lg:w-[1024px] max-lg:h-[450px] max-lg:w-full max-md:max-w-full min-h-[450px] min-w-[320px] overflow-hidden">
      {/* Animated Border Effect (Optional) */}
      {/* <div className="animated-border absolute inset-0 z-0 rounded-xl"></div> */}

      <div className="relative z-10 flex h-full w-full rounded-xl overflow-hidden">
        {/* Signup Prompt Overlay */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={showSignupPrompt ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 rounded-xl bg-background/80 p-10 text-center backdrop-blur-md firefox:bg-background/95"
          aria-hidden={!showSignupPrompt}
        >
          <h4 className="mt-6 text-2xl font-semibold md:text-3xl">
            Signup to continue your conversation
          </h4>
          <div className="flex items-center">
            <div className="flex -space-x-4">
              <Avatar className="h-10 w-10 border-2 border-background">
                <AvatarImage src="/assets/images/people/man.jpg" alt="User 1" />
                <AvatarFallback>U1</AvatarFallback>
              </Avatar>
              <Avatar className="z-[4] h-10 w-10 border-2 border-background">
                <AvatarImage src="/assets/images/people/women.jpg" alt="User 2" />
                <AvatarFallback>U2</AvatarFallback>
              </Avatar>
              <Avatar className="z-[3] h-10 w-10 border-2 border-background">
                <AvatarImage src="/assets/images/people/man2.jpg" alt="User 3" />
                <AvatarFallback>U3</AvatarFallback>
              </Avatar>
               <Avatar className="z-[2] h-10 w-10 border-2 border-background">
                <AvatarImage src="/assets/images/people/man.jpg" alt="User 4" />
                <AvatarFallback>U4</AvatarFallback>
              </Avatar>
               <Avatar className="z-[1] h-10 w-10 border-2 border-background">
                <AvatarImage src="/assets/images/people/women.jpg" alt="User 5" />
                <AvatarFallback>U5</AvatarFallback>
              </Avatar>
            </div>
            <p className="ml-2 text-sm text-muted-foreground">+20,000</p>
          </div>
          <p className="mt-3 text-lg text-muted-foreground">
            Join Ben and 20,000+ users using Pixa
          </p>
          <Button asChild size="lg" className="mt-4">
            <Link href="#">Sign up</Link>
          </Button>
        </motion.div>

        {/* Sidebar (Desktop Only) */}
        <div className="hidden h-full min-w-[250px] flex-col gap-2 border-r border-border bg-muted/40 p-4 dark:bg-muted/20 lg:flex">
          <div className="h-[30px] w-fit max-w-[100px]">
            <Image
              src="/assets/logo/logo.png"
              alt="Pixa Logo"
              width={30}
              height={30}
              className="object-contain opacity-80 dark:invert"
            />
          </div>
          <div className="mt-4 flex flex-col gap-1">
            <SidebarLink href="#link-to-img-gen" icon={ImageIconLucide}>Image generator</SidebarLink>
            <SidebarLink href="#link-to-pdf-gen" icon={FileText}>Pdf generator</SidebarLink>
            <SidebarLink href="#link-to-code-gen" icon={CodeSquare}>Code generator</SidebarLink>
            <SidebarLink href="#" icon={ArrowRight} showArrow>Show all</SidebarLink>
          </div>
          <div className="mt-auto px-4 pb-4">
            <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link href="#sign-up">Signup</Link>
            </Button>
          </div>
        </div>

        {/* Main Playground Area */}
        <div className="flex h-full w-full flex-col bg-background p-4">
          <div className="relative flex flex-grow items-center justify-center overflow-hidden">
            {/* Background Logo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              <Image
                src="/assets/logo/logo.png"
                alt="Pixa Logo Background"
                width={150}
                height={150}
                className="object-contain opacity-10 dark:invert"
              />
            </div>

            {/* Prompt Area */}
            <div className="z-10 flex h-full w-full flex-col items-center justify-center text-center">
              <h2 className="text-3xl opacity-80 md:text-4xl">
                Try Prompts
              </h2>
              <div className="mt-6 min-h-[2em] text-lg text-muted-foreground md:text-xl">
                <span ref={typedRef}></span>
              </div>
            </div>
          </div>

          {/* Prompt Input Form */}
          <form onSubmit={handlePromptSubmit} className="mt-auto flex h-[50px] w-full items-center gap-2 rounded-md bg-muted p-1 dark:bg-muted/50">
            <Select value={selectedModel} onValueChange={setSelectedModel}>
              <SelectTrigger className="w-auto min-w-[140px] border-0 bg-transparent shadow-none focus:ring-0 lg:w-[180px]">
                <SelectValue placeholder="Select AI Model">
                  <div className="flex items-center gap-2">
                    {selectedModelData?.icon && (
                      <Image src={selectedModelData.icon} alt={selectedModelData.label} width={20} height={20} className="dark:invert" />
                    )}
                    <span className="hidden lg:inline">{selectedModelData?.label}</span>
                    <span className="lg:hidden">{selectedModelData?.label.split(' ')[0]}</span> {/* Show short name on mobile */}                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {aiModels.map((model) => (
                  <SelectItem key={model.value} value={model.value}>
                    <div className="flex items-center gap-2">
                      <Image src={model.icon} alt={model.label} width={20} height={20} className="dark:invert" />
                      <span>{model.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Input
              type="text"
              name="prompt"
              placeholder="How can I help you today?" // Changed placeholder
              value={promptInput}
              onChange={(e) => setPromptInput(e.target.value)}
              className="h-full flex-grow border-none bg-transparent px-2 py-2 shadow-none focus-visible:ring-0 dark:placeholder:text-muted-foreground/60"
              aria-label="Enter your prompt"
            />
            <Button type="submit" size="icon" className="bg-primary text-primary-foreground hover:bg-primary/90" aria-label="Submit prompt">
              <ArrowUp className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

interface SidebarLinkProps {
    href: string;
    icon: React.ElementType;
    children: React.ReactNode;
    showArrow?: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ href, icon: Icon, children, showArrow = false }) => (
    <Link
        href={href}
        className="group flex items-center gap-2 rounded-md p-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
    >
        <Icon className="h-4 w-4" />
        <span>{children}</span>
        {showArrow && <ArrowRight className="ml-auto h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />}
    </Link>
);
