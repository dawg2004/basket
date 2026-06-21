import { motion } from "framer-motion";
import type { Brand } from "../brand";
import { Reveal, SectionHeading } from "./primitives";
import { viewportOnce } from "../lib/motion";

export function Network({ brand }: { brand: Brand }) {
  const { network } = brand;
  return (
    <section id="network" className="border-t border-line bg-surface py-24 sm:py-32">
      <div className="shell">
        <SectionHeading eyebrow={network.eyebrow} headline={network.headline} />
        <Reveal delay={0.08}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">{network.note}</p>
        </Reveal>

        <div className="relative mt-16 max-w-2xl">
          {/* the spine */}
          <span className="absolute left-[15px] top-2 bottom-2 w-px bg-line sm:left-[19px]" aria-hidden="true" />

          <ol className="space-y-3">
            {network.nodes.map((node, i) => {
              const accent = node.label.includes("PRP");
              return (
                <motion.li
                  key={node.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex items-center gap-5 pl-12 sm:pl-16"
                >
                  <span
                    className={`absolute left-0 grid h-8 w-8 place-items-center rounded-full border text-[11px] font-semibold sm:h-10 sm:w-10 ${
                      accent
                        ? "border-accent bg-accent text-bg"
                        : "border-line bg-bg text-muted"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 rounded-xl border border-line bg-bg px-5 py-4">
                    <span
                      className={`text-base font-medium tracking-tight ${
                        accent ? "text-accent" : "text-fg"
                      }`}
                    >
                      {node.label}
                    </span>
                    <span className="text-sm text-muted">{node.role}</span>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
