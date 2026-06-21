import { useEffect, useRef } from "react";
import {
  useMotionValue,
  useSpring,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion";

type SpotlightHandlers = {
  /** Attach to the hero element. */
  bind: {
    onPointerMove: (e: React.PointerEvent) => void;
    onPointerEnter: (e: React.PointerEvent) => void;
    onPointerLeave: () => void;
  };
  /** Ref for the element whose --mx/--my/--mr the spotlight controls. */
  maskRef: React.RefObject<HTMLDivElement>;
};

const REVEAL_RADIUS = 240; // px, the resting spotlight size on desktop

export function useSpotlight(): SpotlightHandlers {
  const maskRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.45);
  const r = useMotionValue(0);

  const spring = { stiffness: 220, damping: 30, mass: 0.6 };
  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);
  const sr = useSpring(r, { stiffness: 180, damping: 26 });

  // Mirror spring values onto the masked element as CSS variables.
  const write = (mv: MotionValue<number>, name: string, unit: "%" | "px") => {
    useMotionValueEvent(mv, "change", (v) => {
      maskRef.current?.style.setProperty(
        name,
        unit === "%" ? `${v * 100}%` : `${v}px`
      );
    });
  };
  write(sx, "--mx", "%");
  write(sy, "--my", "%");
  write(sr, "--mr", "px");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (reduce) {
      // Static, generous reveal so the comeback image is legible without motion.
      x.set(0.5);
      y.set(0.42);
      r.set(REVEAL_RADIUS * 1.6);
      return;
    }

    if (!finePointer) {
      // Touch / no-hover: drift the spotlight along a slow Lissajous path.
      r.set(REVEAL_RADIUS * 0.95);
      let raf = 0;
      const start = performance.now();
      const loop = (t: number) => {
        const e = (t - start) / 1000;
        x.set(0.5 + 0.26 * Math.sin(e * 0.6));
        y.set(0.46 + 0.16 * Math.sin(e * 0.9 + 1.2));
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
      return () => cancelAnimationFrame(raf);
    }
    // Fine pointer: handlers drive it; nothing to set up here.
  }, [x, y, r]);

  const onPointerMove = (e: React.PointerEvent) => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const onPointerEnter = (e: React.PointerEvent) => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
    r.set(REVEAL_RADIUS);
  };

  const onPointerLeave = () => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    r.set(0);
  };

  return { bind: { onPointerMove, onPointerEnter, onPointerLeave }, maskRef };
}
