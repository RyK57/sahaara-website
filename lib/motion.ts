export const easeOut = [0.22, 1, 0.36, 1] as const;

export const viewportOnce = { once: true, margin: "-80px" as const };

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
