import { motion } from "framer-motion";
import type { Brand } from "../brand";
import { SectionHeading } from "./primitives";
import { stagger, rise, viewportOnce } from "../lib/motion";

export function Partners({ brand }: { brand: Brand }) {
  const { partners } = brand;
  return (
    <section id="partners" className="border-t border-line bg-bg py-24 sm:py-32">
      <div className="shell">
        <SectionHeading eyebrow={partners.eyebrow} headline={partners.headline} />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 space-y-12"
        >
          {partners.categories.map((cat) => (
            <motion.div key={cat.name} variants={rise}>
              <div className="flex items-center gap-4">
                <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-fg">
                  {cat.name}
                </h3>
                <span className="h-px flex-1 bg-line" />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {Array.from({ length: cat.slots }).map((_, i) => (
                  <div
                    key={i}
                    className="flex h-20 items-center justify-center rounded-lg border border-dashed border-line bg-surface text-xs uppercase tracking-[0.2em] text-muted/60 transition-colors hover:border-muted/40"
                  >
                    Logo
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
