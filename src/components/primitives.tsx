import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { rise, viewportOnce } from "../lib/motion";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={rise}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  headline,
  className = "",
}: {
  eyebrow: string;
  headline: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="display mt-5 max-w-3xl text-balance text-3xl font-medium leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
          {headline}
        </h2>
      </Reveal>
    </div>
  );
}
