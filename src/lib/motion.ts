import type { Variants } from "framer-motion";

/** Standard scroll-reveal: a quiet rise + fade, premium and unhurried. */
export const rise: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export const viewportOnce = { once: true, margin: "-12% 0px -12% 0px" } as const;
