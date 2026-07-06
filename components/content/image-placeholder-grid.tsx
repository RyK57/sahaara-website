"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import type { ContentImage } from "@/lib/types/content";
import { LazyReveal } from "@/components/motion/lazy-reveal";
import { cn } from "@/lib/utils";
import { EAGER_IMAGE_COUNT, springSnappy } from "@/lib/motion";

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

function GridImage({ image, index }: { image: ContentImage; index: number }) {
  const [failed, setFailed] = useState(false);
  const eager = index < EAGER_IMAGE_COUNT;

  return (
    <LazyReveal key={image.src} eager={eager} delay={eager ? index * 0.05 : 0}>
      <motion.figure
        className="overflow-hidden rounded-xl border border-border bg-muted/40 shadow-sm"
        whileHover={{
          y: -6,
          boxShadow: "0 20px 40px -12px rgb(13 31 60 / 0.18)",
        }}
        transition={springSnappy}
      >
        <div className="relative aspect-[4/3] w-full bg-secondary/60">
          {!failed ? (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={eager}
              loading={eager ? "eager" : "lazy"}
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              onError={() => setFailed(true)}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
              <ImageIcon className="size-6 text-muted-foreground" strokeWidth={1.5} aria-hidden />
              <span className="text-xs font-medium text-muted-foreground">
                Photo unavailable
              </span>
            </div>
          )}
        </div>
      </motion.figure>
    </LazyReveal>
  );
}

export function ImagePlaceholderGrid({
  images,
  columns = 3,
  className,
}: ImagePlaceholderGridProps) {
  if (images.length === 0) return null;

  return (
    <div
      className={cn("grid gap-4 md:gap-5", columnClasses[columns], className)}
    >
      {images.map((image, index) => (
        <GridImage key={image.src} image={image} index={index} />
      ))}
    </div>
  );
}
