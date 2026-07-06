"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { staggerContainer, staggerItem, viewportLazy } from "@/lib/motion";

interface StaggerProps extends HTMLMotionProps<"div"> {
  stagger?: number;
  delayChildren?: number;
  /** Animate immediately on mount (above-the-fold sections) */
  eager?: boolean;
}

export function Stagger({
  children,
  className,
  stagger = 0.09,
  delayChildren = 0.06,
  eager = false,
  ...props
}: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="initial"
      {...(eager
        ? { animate: "animate" }
        : { whileInView: "animate", viewport: viewportLazy })}
      variants={{
        initial: {},
        animate: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  ...props
}: HTMLMotionProps<"div">) {
  return (
    <motion.div className={className} variants={staggerItem} {...props}>
      {children}
    </motion.div>
  );
}

export { staggerContainer, staggerItem };
