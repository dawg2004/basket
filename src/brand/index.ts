import type { Brand } from "./types";
import { returnBasketball } from "./return-basketball";

/**
 * The single switch that selects which RETURN brand the app renders.
 * To launch RETURN 3x3 / Street / Equine, add its config file and point
 * `activeBrand` at it — no component changes required.
 */
export const activeBrand: Brand = returnBasketball;

/** Push the brand's theme tokens onto the document root as CSS variables. */
export function applyBrandTheme(brand: Brand) {
  const root = document.documentElement;
  const c = brand.theme.colors;
  root.style.setProperty("--c-bg", c.bg);
  root.style.setProperty("--c-fg", c.fg);
  root.style.setProperty("--c-muted", c.muted);
  root.style.setProperty("--c-accent", c.accent);
  root.style.setProperty("--c-accent-hover", c.accentHover);
  root.style.setProperty("--c-line", c.line);
  root.style.setProperty("--c-surface", c.surface);
  root.style.setProperty("--font-display", brand.theme.fonts.display);
  root.style.setProperty("--font-body", brand.theme.fonts.body);
}

export type { Brand } from "./types";
