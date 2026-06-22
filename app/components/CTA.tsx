"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#efece5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] bg-white border border-[#e2e8f0] p-10 lg:p-16 text-[#0f172a] shadow-[0_30px_60px_-20px_rgba(15,23,42,0.12)]"
        >
          <div className="absolute inset-0 dot-grid opacity-30" />
          <div className="absolute -top-24 -right-12 h-80 w-80 rounded-full bg-[#2563eb]/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-12 h-80 w-80 rounded-full bg-[#2563eb]/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#2563eb]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#2563eb]">
                Let&apos;s build
              </span>
              <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight">
                Ready to <span className="text-[#2563eb]">upgrade</span> your BIM workflow?
              </h2>
              <p className="mt-5 text-lg text-[#475569] leading-relaxed">
                Tell us about your project. We typically respond within one business day.
              </p>
            </div>

            <form
              className="space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  placeholder="Your name"
                  className="rounded-xl bg-white border border-[#e2e8f0] px-4 py-3.5 text-sm text-[#0f172a] placeholder:text-[#94a3b8] outline-none transition-all duration-300 focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
                />
                <input
                  required
                  type="email"
                  placeholder="Email address"
                  className="rounded-xl bg-white border border-[#e2e8f0] px-4 py-3.5 text-sm text-[#0f172a] placeholder:text-[#94a3b8] outline-none transition-all duration-300 focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
                />
              </div>
              <input
                placeholder="Subject"
                className="w-full rounded-xl bg-white border border-[#e2e8f0] px-4 py-3.5 text-sm text-[#0f172a] placeholder:text-[#94a3b8] outline-none transition-all duration-300 focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
              />
              <textarea
                required
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full rounded-xl bg-white border border-[#e2e8f0] px-4 py-3.5 text-sm text-[#0f172a] placeholder:text-[#94a3b8] outline-none transition-all duration-300 focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)] resize-none"
              />
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563eb] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(37,99,235,0.25)]"
              >
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
