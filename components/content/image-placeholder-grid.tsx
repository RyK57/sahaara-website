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
  centered?: boolean;
  eager?: boolean;
  fit?: "cover" | "contain";
  aspect?: "4/3" | "3/4";
}

const aspectClasses = {
  "4/3": "aspect-[4/3]",
  "3/4": "aspect-[3/4]",
} as const;

const columnClasses: Record<
  NonNullable<ImagePlaceholderGridProps["columns"]>,
  string
> = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

function GridImage({
  image,
  index,
  centered = false,
  eager = false,
  fit = "cover",
  aspect = "4/3",
}: {
  image: ContentImage;
  index: number;
  centered?: boolean;
  eager?: boolean;
  fit?: "cover" | "contain";
  aspect?: "4/3" | "3/4";
}) {
  const [failed, setFailed] = useState(false);

  return (
    <LazyReveal
      key={image.src}
      eager={eager}
      delay={eager ? index * 0.05 : 0}
      className={cn(
        centered && "w-full max-w-[220px] shrink-0 sm:max-w-[260px]",
      )}
    >
      <motion.figure
        className="w-full overflow-hidden rounded-xl border border-border bg-muted/40 shadow-sm"
        whileHover={{
          y: -6,
          boxShadow: "0 20px 40px -12px rgb(13 31 60 / 0.18)",
        }}
        transition={springSnappy}
      >
        <div
          className={cn(
            "relative w-full bg-white",
            aspectClasses[aspect],
          )}
        >
          {!failed ? (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={eager}
              loading={eager ? "eager" : "lazy"}
              className={cn(
                fit === "contain"
                  ? "object-contain object-center p-1"
                  : "object-cover object-top",
              )}
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
  centered = false,
  eager: eagerAll = false,
  fit = "cover",
  aspect = "4/3",
}: ImagePlaceholderGridProps) {
  if (images.length === 0) return null;

  return (
    <div
      className={cn(
        "gap-4 md:gap-5",
        centered
          ? "flex flex-wrap justify-center"
          : cn("grid", columnClasses[columns]),
        className,
      )}
    >
      {images.map((image, index) => (
        <GridImage
          key={image.src}
          image={image}
          index={index}
          centered={centered}
          eager={eagerAll || index < EAGER_IMAGE_COUNT}
          fit={fit}
          aspect={aspect}
        />
      ))}
    </div>
  );
}
