"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 180, damping: 22, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 180, damping: 22, mass: 0.5 });

  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [coarse, setCoarse] = useState(false);

  useEffect(() => {
    setCoarse(window.matchMedia("(pointer: coarse)").matches);
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);

      const el = e.target as HTMLElement | null;
      const isInteractive = !!el?.closest(
        "a, button, input, textarea, select, [role='button'], [data-cursor='hover']"
      );
      setHovering(isInteractive);
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [x, y, visible]);

  if (coarse) return null;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x, y, opacity: visible ? 1 : 0 }}
        animate={{ scale: hovering ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className="pointer-events-none fixed top-0 left-0 z-[100] -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-[#2563eb]"
      />
      <motion.div
        aria-hidden
        style={{ x: ringX, y: ringY, opacity: visible ? 1 : 0 }}
        animate={{
          scale: hovering ? 1.8 : 1,
          backgroundColor: hovering ? "rgba(37,99,235,0.15)" : "rgba(37,99,235,0)",
          borderColor: hovering ? "#2563eb" : "rgba(37,99,235,0.6)",
        }}
        transition={{ type: "spring", stiffness: 220, damping: 26 }}
        className="pointer-events-none fixed top-0 left-0 z-[100] -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full border-2"
      />
    </>
  );
}
