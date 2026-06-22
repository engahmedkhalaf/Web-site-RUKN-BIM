"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const STATS = [
  { value: 20, suffix: "+", label: "Add-ins shipped" },
  { value: 100, suffix: "+", label: "Projects delivered" },
  { value: 10, suffix: "+", label: "Countries served" },
  { value: 500, suffix: "+", label: "Active users" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [inView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Stats() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#efece5] overflow-hidden border-y border-[#d6d2c4]">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-[#2563eb]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center lg:text-left"
            >
              <div className="text-5xl lg:text-6xl font-extrabold text-[#0f172a] tracking-tight">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-sm uppercase tracking-widest text-[#475569] font-semibold">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
