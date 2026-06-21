import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MousePointer2 } from "lucide-react";
import type { Brand } from "../brand";
import { useSpotlight } from "../hooks/useSpotlight";
import { BasePlaceholder, RevealPlaceholder } from "./HeroPlaceholders";

/** One stacked layer: SVG placeholder underneath, real photo on top if it loads. */
function Layer({
  src,
  alt,
  placeholder,
}: {
  src: string;
  alt: string;
  placeholder: React.ReactNode;
}) {
  const [ok, setOk] = useState(true);
  return (
    <div className="absolute inset-0">
      {placeholder}
      {ok && (
        <img
          src={src}
          alt={alt}
          onError={() => setOk(false)}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
      )}
    </div>
  );
}

export function Hero({ brand }: { brand: Brand }) {
  const { bind, maskRef } = useSpotlight();
  const { hero } = brand;

  return (
    <section
      id="top"
      {...bind}
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      {/* base: the setback */}
      <Layer src={hero.images.base} alt={hero.images.baseAlt} placeholder={<BasePlaceholder />} />

      {/* reveal: the comeback, masked to the spotlight */}
      <div ref={maskRef} className="spotlight-reveal absolute inset-0">
        <Layer src={hero.images.reveal} alt={hero.images.revealAlt} placeholder={<RevealPlaceholder />} />
      </div>

      {/* legibility wash */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-bg/35 to-bg/55" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg/70 via-transparent to-transparent" />

      {/* copy */}
      <div className="shell relative z-10 pb-16 pt-32 sm:pb-24">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="eyebrow"
        >
          {brand.tagline.line1} {brand.tagline.line2}
        </motion.span>

        <h1 className="mt-6 max-w-4xl text-balance">
          <motion.span
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="display block text-5xl font-medium italic leading-[0.98] tracking-tight sm:text-7xl lg:text-[5.6rem]"
          >
            {hero.headline.line1}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
            className="mt-1 block text-5xl font-semibold leading-[0.98] tracking-tight sm:text-7xl lg:text-[5.6rem]"
          >
            {hero.headline.line2}
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.62 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href="#method"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-medium text-fg transition-colors hover:bg-accent-hover"
          >
            {hero.primaryCta}
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#partners"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-bg/30 px-7 py-4 text-base font-medium text-fg backdrop-blur-sm transition-colors hover:border-fg/40"
          >
            {hero.secondaryCta}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted"
        >
          <MousePointer2 size={14} className="text-accent" />
          Move across the image to reveal the return
        </motion.div>
      </div>
    </section>
  );
}
