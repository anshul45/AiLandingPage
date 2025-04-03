"use client";

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";

interface VideoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  videoUrl: string;
  title?: string;
}

export function VideoDialog({ open, onOpenChange, videoUrl, title = "Video Player" }: VideoDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[90vw] p-2 sm:max-w-4xl md:p-4 lg:max-w-6xl xl:max-w-7xl h-[90vh] flex flex-col">
        <DialogHeader className="flex flex-row items-center justify-between pr-4">
          <DialogTitle className="sr-only">{title}</DialogTitle> {/* Screen reader only title */}
          <DialogClose asChild>
            <Button variant="ghost" size="icon" className="ml-auto" aria-label="Close video player">
              <XCircle className="h-6 w-6" />
            </Button>
          </DialogClose>
        </DialogHeader>
        <div className="flex-grow overflow-hidden rounded-lg">
          <iframe
            className="h-full w-full"
            src={`${videoUrl}&autoplay=1`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
}
