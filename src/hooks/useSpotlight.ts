import { useEffect, useRef } from "react";
import {
  useMotionValue,
  useSpring,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion";

type SpotlightHandlers = {
  bind: {
    onPointerMove: (e: React.PointerEvent) => void;
    onPointerDown: (e: React.PointerEvent) => void;
    onPointerEnter: (e: React.PointerEvent) => void;
    onPointerLeave: () => void;
  };
  maskRef: React.RefObject<HTMLDivElement>;
};

const DESKTOP_RADIUS = 240; // px — cursor spotlight on hover devices
const MOBILE_RADIUS = 150; // px — smaller spotlight for touch screens

const isFinePointer = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

export function useSpotlight(): SpotlightHandlers {
  const maskRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.42);
  const r = useMotionValue(0);

  const spring = { stiffness: 220, damping: 30, mass: 0.6 };
  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);
  const sr = useSpring(r, { stiffness: 180, damping: 26 });

  const write = (mv: MotionValue<number>, name: string, unit: "%" | "px") => {
    useMotionValueEvent(mv, "change", (v) => {
      maskRef.current?.style.setProperty(name, unit === "%" ? `${v * 100}%` : `${v}px`);
    });
  };
  write(sx, "--mx", "%");
  write(sy, "--my", "%");
  write(sr, "--mr", "px");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      // Static, generous reveal so the comeback is legible without motion.
      x.set(0.5);
      y.set(0.42);
      r.set(DESKTOP_RADIUS * 1.6);
      return;
    }
    if (!isFinePointer()) {
      // Touch: show a small idle spotlight so the effect is discoverable;
      // tapping / dragging then moves it to the finger.
      x.set(0.5);
      y.set(0.42);
      r.set(MOBILE_RADIUS);
    }
  }, [x, y, r]);

  const setFromEvent = (e: React.PointerEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  // Touch (and drag): light the tapped point; follow the finger while moving.
  const onPointerDown = (e: React.PointerEvent) => {
    setFromEvent(e);
    r.set(isFinePointer() ? DESKTOP_RADIUS : MOBILE_RADIUS);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    // Fine pointer: hover-follow. Coarse: pointermove only fires while
    // touching, so this naturally follows the finger during a drag.
    setFromEvent(e);
  };

  // Hover devices only: grow on enter, retract on leave. On touch the
  // spotlight stays where it was last tapped.
  const onPointerEnter = (e: React.PointerEvent) => {
    if (!isFinePointer()) return;
    setFromEvent(e);
    r.set(DESKTOP_RADIUS);
  };

  const onPointerLeave = () => {
    if (!isFinePointer()) return;
    r.set(0);
  };

  return { bind: { onPointerMove, onPointerDown, onPointerEnter, onPointerLeave }, maskRef };
}
