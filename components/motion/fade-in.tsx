"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { defaultTransition, viewportOnce } from "@/lib/motion";

interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Animate on scroll (default) or on mount */
  onView?: boolean;
  amount?: number;
}

const directionOffset = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: 28 },
  right: { x: -28 },
  none: {},
} as const;

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  onView = true,
  amount = 0.05,
  className,
  ...props
}: FadeInProps) {
  const offset = directionOffset[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={
        onView
          ? { opacity: 1, x: 0, y: 0 }
          : undefined
      }
      animate={onView ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={onView ? { ...viewportOnce, amount } : undefined}
      transition={{ ...defaultTransition, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
