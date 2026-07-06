"use client";

import { ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import type { ContentImage } from "@/lib/types/content";
import { cn } from "@/lib/utils";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { springSnappy } from "@/lib/motion";

interface ImagePlaceholderGridProps {
  images: ContentImage[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const columnClasses: Record<
  NonNullable<ImagePlaceholderGridProps["columns"]>,
  string
> = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

export function ImagePlaceholderGrid({
  images,
  columns = 3,
  className,
}: ImagePlaceholderGridProps) {
  return (
    <Stagger
      className={cn("grid gap-4 md:gap-5", columnClasses[columns], className)}
      stagger={0.07}
    >
      {images.map((image) => (
        <StaggerItem key={image.src}>
          <motion.figure
            className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-muted/40 shadow-sm"
            whileHover={{
              y: -6,
              boxShadow: "0 20px 40px -12px rgb(13 31 60 / 0.18)",
            }}
            transition={springSnappy}
          >
            <div className="relative flex aspect-[4/3] flex-col items-center justify-center gap-2 bg-secondary/60 p-4 text-center">
              <motion.div
                className="flex size-12 items-center justify-center rounded-full bg-background/80 text-muted-foreground"
                whileHover={{ scale: 1.1, rotate: 6 }}
                transition={springSnappy}
              >
                <ImageIcon className="size-6" strokeWidth={1.5} aria-hidden />
              </motion.div>
              <span className="text-xs font-medium text-muted-foreground">
                Photo coming soon
              </span>
            </div>
            <figcaption className="flex flex-col gap-0.5 border-t border-border bg-card px-3 py-2.5">
              {image.caption && (
                <span className="text-sm font-medium text-primary">
                  {image.caption}
                </span>
              )}
              <span
                className="truncate text-xs text-muted-foreground"
                title={image.src}
              >
                {image.src}
              </span>
            </figcaption>
          </motion.figure>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
