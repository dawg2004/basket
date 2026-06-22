import { useRef } from "react";
import { useMotionValue, useSpring, useMotionValueEvent } from "framer-motion";

/**
 * A soft pointer-following "spotlight" for content sections (no image reveal).
 * Sets --sx / --sy (px, relative to the element) and --si (0|1 intensity) on a
 * container, to be consumed by a radial-gradient glow and a masked accent
 * border. Hover-follows on desktop; tap-to-light and hold on touch.
 */
const isFine = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

export function usePointerSpot() {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 32, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 260, damping: 32, mass: 0.5 });

  useMotionValueEvent(sx, "change", (v) => ref.current?.style.setProperty("--sx", `${v}px`));
  useMotionValueEvent(sy, "change", (v) => ref.current?.style.setProperty("--sy", `${v}px`));

  const setPos = (e: React.PointerEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };
  const show = () => ref.current?.style.setProperty("--si", "1");
  const hide = () => ref.current?.style.setProperty("--si", "0");

  const onPointerMove = (e: React.PointerEvent) => {
    setPos(e);
    if (!isFine()) show(); // follow finger during a drag
  };
  const onPointerEnter = (e: React.PointerEvent) => {
    if (!isFine()) return;
    setPos(e);
    show();
  };
  const onPointerLeave = () => {
    if (isFine()) hide();
  };
  const onPointerDown = (e: React.PointerEvent) => {
    setPos(e);
    show(); // tap lights the spot and holds on touch
  };

  return { ref, bind: { onPointerMove, onPointerEnter, onPointerLeave, onPointerDown } };
}
