"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";

const TESTIMONIALS = [
  {
    quote:
      "RUKN BIM rebuilt our coordination workflow in under a month. What used to be a two-day clash review is now a 90-minute session.",
    author: "Senior BIM Coordinator",
    company: "Major MEP Consultancy, Doha",
  },
  {
    quote:
      "The Element Navigator add-in has completely changed how our team handles large Navisworks models. Setup was painless.",
    author: "Project BIM Lead",
    company: "Infrastructure Contractor, KSA",
  },
  {
    quote:
      "Their 5D BOQ pipeline cut our quantity-takeoff time by more than 70%. The detail is precisely what cost teams need.",
    author: "Cost Estimator",
    company: "Tier-1 Construction Firm, UAE",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(id);
  }, []);

  const t = TESTIMONIALS[i];

  return (
    <section className="relative py-24 lg:py-32 bg-[#efece5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>What clients <span className="text-[#2563eb]">are saying</span></>}
        />

        <div className="mt-16 mx-auto max-w-3xl">
          <div className="relative rounded-3xl border border-[#e2e8f0] bg-gradient-to-br from-white to-[#f8fafc] p-10 lg:p-14 shadow-[0_30px_60px_-20px_rgba(15,23,42,0.12)] transition-transform duration-500 hover:-translate-y-2">
            <svg
              className="absolute top-8 left-8 h-12 w-12 text-[#2563eb]/15"
              viewBox="0 0 32 32"
              fill="currentColor"
            >
              <path d="M10 8a6 6 0 0 0-6 6v10h10V14H8a2 2 0 0 1 2-2zm14 0a6 6 0 0 0-6 6v10h10V14h-6a2 2 0 0 1 2-2z" />
            </svg>

            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5 }}
                className="relative pt-6"
              >
                <p className="text-xl lg:text-2xl font-medium text-[#0f172a] leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#2563eb] to-[#0f172a]" />
                  <div>
                    <div className="font-bold text-[#0f172a]">{t.author}</div>
                    <div className="text-sm text-[#475569]">{t.company}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Testimonial ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === idx ? "w-8 bg-[#2563eb]" : "w-2 bg-[#cbd5e1] hover:bg-[#94a3b8]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
