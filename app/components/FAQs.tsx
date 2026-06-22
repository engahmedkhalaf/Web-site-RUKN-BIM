"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { faqs } from "@/lib/data/faqs";
import SectionHeading from "./SectionHeading";

export default function FAQs() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24 lg:py-32 bg-[#efece5]">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Common <span className="text-[#2563eb]">questions</span></>}
        />

        <div className="mt-14 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={`rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen ? "border-[#2563eb] shadow-[0_15px_40px_-15px_rgba(37,99,235,0.25)]" : "border-[#e2e8f0]"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-[#0f172a]">{f.question}</span>
                  <span
                    className={`inline-flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen ? "bg-[#2563eb] text-white rotate-45" : "bg-[#f1f5f9] text-[#0f172a]"
                    }`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-[#475569] leading-relaxed">{f.answer}</div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
