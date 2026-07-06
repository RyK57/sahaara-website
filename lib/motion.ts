export const easeOut = [0.22, 1, 0.36, 1] as const;

/** Fire when element is near the viewport (preload before scroll reaches it) */
export const viewportOnce = { once: true, margin: "0px 0px 200px 0px" as const };

/** Per-item lazy reveal — very low threshold, generous preload margin */
export const viewportLazy = {
  once: true,
  margin: "0px 0px 300px 0px" as const,
  amount: 0.01 as const,
};

/** Images above the fold load immediately (media collage, grids) */
export const EAGER_IMAGE_COUNT = 10;

export const springSnappy = {
  type: "spring" as const,
  stiffness: 420,
  damping: 32,
};

export const springSoft = {
  type: "spring" as const,
  stiffness: 280,
  damping: 28,
};

export const defaultTransition = {
  duration: 0.55,
  ease: easeOut,
};

export const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.06,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 22 },
  animate: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
};
