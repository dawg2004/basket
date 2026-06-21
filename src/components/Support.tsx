import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Brand } from "../brand";
import { SectionHeading } from "./primitives";
import { stagger, rise, viewportOnce } from "../lib/motion";

export function Support({ brand }: { brand: Brand }) {
  const { support } = brand;
  return (
    <section id="athletes" className="border-t border-line bg-bg py-24 sm:py-32">
      <div className="shell">
        <SectionHeading eyebrow={support.eyebrow} headline={support.headline} />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {support.cards.map((card) => (
            <motion.article
              key={card.title}
              variants={rise}
              className="group relative flex min-h-[180px] flex-col justify-between overflow-hidden rounded-xl border border-line bg-surface p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent/50"
            >
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />
              <ArrowUpRight
                size={20}
                className="text-muted transition-colors duration-500 group-hover:text-accent"
              />
              <div>
                <h3 className="text-lg font-semibold leading-snug tracking-tight">{card.title}</h3>
                <p className="mt-1 text-sm text-muted">{card.note}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
