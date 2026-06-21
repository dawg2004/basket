import type { Brand } from "../brand";

export function Footer({ brand }: { brand: Brand }) {
  return (
    <footer id="contact" className="border-t border-line bg-bg">
      {/* closing CTA band */}
      <div className="shell py-20 sm:py-28">
        <p className="eyebrow">{brand.tagline.line1}</p>
        <div className="mt-5 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <h2 className="display max-w-2xl text-balance text-4xl italic leading-[1.02] tracking-tight sm:text-6xl">
            {brand.hero.headline.line1} {brand.hero.headline.line2}
          </h2>
          <a
            href="#top"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-medium text-fg transition-colors hover:bg-accent-hover"
          >
            {brand.navCta}
          </a>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="display text-xl italic tracking-tight">{brand.mark}</span>
              <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-muted">
                {brand.submark}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{brand.footer.legal}</p>
          </div>

          {brand.footer.columns.map((col) => (
            <nav key={col.title}>
              <h3 className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted/70">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-sm text-fg/90 transition-colors hover:text-accent">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="shell flex flex-col items-start justify-between gap-2 border-t border-line py-6 text-xs text-muted/60 sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} {brand.mark} {brand.submark}. {brand.parentOrg}.
          </span>
          <span>{brand.tagline.line1}</span>
        </div>
      </div>
    </footer>
  );
}
