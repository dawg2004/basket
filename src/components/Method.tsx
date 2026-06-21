import { motion } from "framer-motion";
import type { Brand } from "../brand";
import { Reveal, SectionHeading } from "./primitives";
import { stagger, rise, viewportOnce } from "../lib/motion";

export function Method({ brand }: { brand: Brand }) {
  const { method } = brand;
  return (
    <section id="method" className="border-t border-line bg-bg py-24 sm:py-32">
      <div className="shell">
        <SectionHeading eyebrow={method.eyebrow} headline={method.headline} />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3"
        >
          {method.steps.map((step) => (
            <motion.article
              key={step.index}
              variants={rise}
              className="group relative flex flex-col bg-bg p-8 transition-colors hover:bg-surface sm:p-10"
            >
              <div className="display text-5xl italic leading-none text-line transition-colors duration-500 group-hover:text-accent">
                {step.index}
              </div>
              <h3 className="mt-8 text-xl font-semibold tracking-tight">{step.title}</h3>
              <ul className="mt-4 space-y-1.5">
                {step.lines.map((line) => (
                  <li key={line} className="text-sm leading-relaxed text-muted">
                    {line}
                  </li>
                ))}
              </ul>
              <span className="mt-8 h-px w-12 bg-accent/0 transition-all duration-500 group-hover:w-20 group-hover:bg-accent" />
            </motion.article>
          ))}
        </motion.div>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
            Each stage is delivered with partner medical and performance specialists. Progression
            between stages is decided by those providers — never assumed.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
