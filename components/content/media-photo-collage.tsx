"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import type { ContentImage } from "@/lib/types/content";
import { cn } from "@/lib/utils";
import { springSnappy } from "@/lib/motion";

interface MediaPhotoCollageProps {
  images: ContentImage[];
  className?: string;
}

/** Repeating span pattern for a dense, varied collage layout */
const tilePatterns = [
  "col-span-2 row-span-3",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-2 row-span-2",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
  "col-span-1 row-span-3",
] as const;

function CollageTile({
  image,
  pattern,
}: {
  image: ContentImage;
  pattern: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.figure
      className={cn(
        "group relative min-h-0 overflow-hidden bg-muted/60",
        pattern,
      )}
      whileHover={{ scale: 1.015, zIndex: 20 }}
      transition={springSnappy}
    >
      {!failed ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-gradient-to-br from-secondary/80 to-muted p-2 text-center">
          <ImageIcon
            className="size-5 text-muted-foreground/80 sm:size-6"
            strokeWidth={1.5}
            aria-hidden
          />
          <span className="text-[10px] font-medium leading-tight text-muted-foreground sm:text-xs">
            {image.caption ?? "Photo coming soon"}
          </span>
        </div>
      )}
      {image.caption && !failed && (
        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-2 py-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="text-[10px] font-medium text-white sm:text-xs">
            {image.caption}
          </span>
        </figcaption>
      )}
    </motion.figure>
  );
}

export function MediaPhotoCollage({
  images,
  className,
}: MediaPhotoCollageProps) {
  return (
    <div
      className={cn(
        "grid auto-rows-[4.5rem] grid-cols-3 gap-0.5 sm:auto-rows-[5rem] sm:grid-cols-4 sm:gap-1 md:auto-rows-[5.5rem] lg:grid-cols-6 lg:auto-rows-[6rem]",
        className,
      )}
      style={{ gridAutoFlow: "dense" }}
    >
      {images.map((image, index) => (
        <CollageTile
          key={`${image.src}-${index}`}
          image={image}
          pattern={tilePatterns[index % tilePatterns.length]}
        />
      ))}
    </div>
  );
}
