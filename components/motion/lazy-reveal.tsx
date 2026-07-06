"use client";

import { useRef } from "react";
import { motion, useInView, type HTMLMotionProps } from "framer-motion";
import { defaultTransition, viewportLazy } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface LazyRevealProps extends HTMLMotionProps<"div"> {
  /** Show and load immediately (above-the-fold) */
  eager?: boolean;
  delay?: number;
}

export function LazyReveal({
  children,
  className,
  eager = false,
  delay = 0,
  ...props
}: LazyRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, viewportLazy);
  const visible = eager || isInView;

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y: 10 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ ...defaultTransition, delay: eager ? delay : 0 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
