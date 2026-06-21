import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Brand } from "../brand";
import { Reveal, SectionHeading } from "./primitives";
import { stagger, rise, viewportOnce } from "../lib/motion";

export function Stories({ brand }: { brand: Brand }) {
  const { stories } = brand;
  return (
    <section id="stories" className="border-t border-line bg-surface py-24 sm:py-32">
      <div className="shell">
        <SectionHeading eyebrow={stories.eyebrow} headline={stories.headline} />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 space-y-4"
        >
          {stories.items.map((story) => (
            <motion.article
              key={story.condition}
              variants={rise}
              className="group grid items-center gap-6 overflow-hidden rounded-2xl border border-line bg-bg p-7 transition-colors hover:border-accent/40 sm:p-9 lg:grid-cols-[1fr_auto_1fr_auto]"
            >
              <div>
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-accent">
                  {story.tag}
                </span>
                <h3 className="display mt-2 text-2xl italic tracking-tight sm:text-3xl">
                  {story.condition}
                </h3>
              </div>

              <div className="hidden h-12 w-px bg-line lg:block" aria-hidden="true" />

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-muted/70">
                    Before
                  </span>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{story.before}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-accent/80">
                    After
                  </span>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg">{story.after}</p>
                </div>
              </div>

              <ArrowRight
                size={22}
                className="hidden text-muted transition-all duration-500 group-hover:translate-x-1 group-hover:text-accent lg:block"
              />
            </motion.article>
          ))}
        </motion.div>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-xs leading-relaxed text-muted/70">{stories.disclaimer}</p>
        </Reveal>
      </div>
    </section>
  );
}
