"use client";

import { useState } from "react";
import Image from "next/image";
import { RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { springSnappy } from "@/lib/motion";

interface FlipCardProps {
  title: string;
  frontSrc: string;
  backSrc: string;
  frontAlt: string;
  backAlt: string;
  className?: string;
}

export function FlipCard({
  title,
  frontSrc,
  backSrc,
  frontAlt,
  backAlt,
  className,
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <button
        type="button"
        onClick={() => setIsFlipped((prev) => !prev)}
        aria-pressed={isFlipped}
        aria-label={`${isFlipped ? "Show front of" : "Flip"} ${title} education card`}
        className="group relative w-full cursor-pointer rounded-xl border-0 bg-transparent p-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        style={{ perspective: "1200px" }}
      >
        <motion.div
          className="relative aspect-[3/4] w-full"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={springSnappy}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="absolute inset-0 overflow-hidden rounded-xl border border-border bg-card shadow-sm"
            style={{ backfaceVisibility: "hidden" }}
          >
            <Image
              src={frontSrc}
              alt={frontAlt}
              fill
              className="object-contain object-center bg-white p-1"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div
            className="absolute inset-0 overflow-hidden rounded-xl border border-border bg-card shadow-sm"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <Image
              src={backSrc}
              alt={backAlt}
              fill
              className="object-contain object-center bg-white p-1"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </motion.div>
        <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-primary/85 px-3 py-1.5 text-xs font-medium text-primary-foreground opacity-0 shadow-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          <RotateCcw className="size-3.5" aria-hidden />
          {isFlipped ? "Show front" : "Flip card"}
        </span>
      </button>
      <p className="text-center text-sm font-medium text-foreground">{title}</p>
    </div>
  );
}
