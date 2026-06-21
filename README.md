# RETURN Basketball

> More Than Recovery. Return To Play.

Premium landing page for a basketball athlete recovery brand. Built as a
theme-driven design system so future RETURN sub-brands reuse every component.

React 18 · TypeScript · Vite · Tailwind CSS · Framer Motion · Lucide React.

## Run

```bash
npm install
npm run dev      # local dev
npm run build    # typecheck + production build -> dist/
npm run preview  # serve the build
```

## The spotlight hero

The hero stacks two images. The base shows the setback; the comeback is masked
to a soft circle that follows the pointer (Lithos-style reveal).

- Desktop: the spotlight tracks the cursor with a spring lag.
- Touch / no-hover: it drifts slowly on its own so the effect is still felt.
- Reduced motion: a static, generous reveal — no animation.

### Drop in real photos

Out of the box the hero renders cinematic SVG placeholders. To use real
photography, add these two files to `public/` and they take over automatically
(no code change):

```
public/hero-base.jpg     # athlete at rest — dark, emotional
public/hero-reveal.jpg   # same athlete, explosive return
```

Paths live in `src/brand/return-basketball.ts` under `hero.images` if you want
different filenames.

## Architecture: one system, many brands

All copy, color, and imagery live in a single brand config. Components read from
the active brand and never hard-code content.

```
src/brand/types.ts            # the Brand contract every sub-brand fulfils
src/brand/return-basketball.ts # flagship brand: theme tokens + all copy
src/brand/index.ts            # `activeBrand` switch + applyBrandTheme()
```

Colors are injected as CSS variables, so swapping the brand re-themes the whole
page. Tailwind classes (`bg-bg`, `text-accent`, `border-line`, ...) resolve
through those variables.

### Launch a new brand (RETURN 3x3 / Street / Equine)

1. Copy `return-basketball.ts` to e.g. `return-3x3.ts`.
2. Change `theme.colors`, copy, and image paths. Keep the same shape.
3. Point `activeBrand` in `src/brand/index.ts` at the new config.

Only imagery and messaging change — the components, motion, and layout are shared.

## Deploy (Vercel)

`vercel.json` is preset for Vite. Push to GitHub and import the repo in Vercel,
or run `vercel` from the CLI. Build command `npm run build`, output `dist`.

## Legal positioning

The copy is written to position RETURN Basketball as athlete support, recovery
education, and a partner network — not a medical provider. No treatment claims,
no guaranteed outcomes. Medical services are referenced only through partner
providers. Keep this framing when editing copy or adding brands.
