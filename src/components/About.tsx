import type { Brand } from "../brand";
import { Reveal } from "./primitives";

export function About({ brand }: { brand: Brand }) {
  const { about } = brand;
  return (
    <section id="about" className="border-t border-line bg-bg py-24 sm:py-32">
      <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <Reveal>
            <span className="eyebrow">{about.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="display mt-5 text-balance text-4xl font-medium leading-[1.04] tracking-tight sm:text-5xl">
              {about.headline}
            </h2>
          </Reveal>
        </div>

        <div className="space-y-6 lg:pt-3">
          {about.body.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.08}>
              <p className="text-lg leading-relaxed text-muted">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <p className="border-l-2 border-accent pl-5 text-sm leading-relaxed text-muted/80">
              {brand.parentOrg}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
