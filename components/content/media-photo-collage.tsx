"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import type { ContentImage } from "@/lib/types/content";
import { LazyReveal } from "@/components/motion/lazy-reveal";
import { cn } from "@/lib/utils";
import { EAGER_IMAGE_COUNT, springSnappy } from "@/lib/motion";

interface MediaPhotoCollageProps {
  images: ContentImage[];
  className?: string;
}

function CollageTile({
  image,
  index,
}: {
  image: ContentImage;
  index: number;
}) {
  const [failed, setFailed] = useState(false);
  const eager = index < EAGER_IMAGE_COUNT;

  return (
    <LazyReveal
      eager={eager}
      delay={eager ? Math.min(index * 0.04, 0.24) : 0}
      className="mb-1 break-inside-avoid sm:mb-1.5"
    >
      <motion.figure
        className="overflow-hidden bg-muted/40"
        whileHover={{ scale: 1.01, zIndex: 20 }}
        transition={springSnappy}
      >
        {!failed ? (
          <Image
            src={image.src}
            alt={image.alt}
            width={1200}
            height={800}
            priority={eager}
            loading={eager ? "eager" : "lazy"}
            className="h-auto w-full"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="flex min-h-32 flex-col items-center justify-center gap-1.5 bg-gradient-to-br from-secondary/80 to-muted p-4 text-center">
            <ImageIcon
              className="size-5 text-muted-foreground/80 sm:size-6"
              strokeWidth={1.5}
              aria-hidden
            />
            <span className="text-[10px] font-medium leading-tight text-muted-foreground sm:text-xs">
              Photo unavailable
            </span>
          </div>
        )}
      </motion.figure>
    </LazyReveal>
  );
}

export function MediaPhotoCollage({
  images,
  className,
}: MediaPhotoCollageProps) {
  return (
    <div
      className={cn(
        "columns-2 gap-1 sm:columns-3 sm:gap-1.5 md:columns-4 lg:columns-5 xl:columns-6",
        className,
      )}
      style={{ columnGap: "0.25rem" }}
    >
      {images.map((image, index) => (
        <CollageTile
          key={`${image.src}-${index}`}
          image={image}
          index={index}
        />
      ))}
    </div>
  );
}
