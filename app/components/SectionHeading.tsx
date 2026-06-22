"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <span className="inline-flex items-center gap-2 rounded-full bg-[#2563eb]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#2563eb]">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0f172a]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg text-[#475569] leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
