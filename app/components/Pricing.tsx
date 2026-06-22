"use client";

import { motion } from "framer-motion";
import { pricingTiers } from "@/lib/data/pricing";
import SectionHeading from "./SectionHeading";

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-[#efece5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Pricing"
          title={<>Plans that <span className="text-[#2563eb]">fit every team</span></>}
          description="From individual contributors to enterprise BIM departments — pick a plan and start shipping today."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl p-8 transition-all duration-500 bg-white ${
                tier.highlighted
                  ? "border-2 border-[#2563eb] shadow-[0_30px_60px_-15px_rgba(37,99,235,0.25)] lg:scale-105"
                  : "border border-[#e2e8f0] hover:shadow-[0_25px_50px_rgba(15,23,42,0.10)] hover:border-[#2563eb]/30"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#2563eb] px-4 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-[#2563eb]/40">
                  Most popular
                </div>
              )}

              <h3 className="text-xl font-bold text-[#0f172a]">
                {tier.name}
              </h3>
              <p className="mt-2 text-sm text-[#475569]">
                {tier.description}
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-extrabold text-[#0f172a]">
                  {tier.price}
                </span>
                <span className="text-[#94a3b8]">{tier.priceNote}</span>
              </div>

              <a
                href={tier.ctaLink}
                className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
                  tier.highlighted
                    ? "bg-[#2563eb] text-white hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(37,99,235,0.25)]"
                    : "bg-white text-[#0f172a] border border-[#e2e8f0] hover:border-[#2563eb] hover:text-[#2563eb] hover:-translate-y-0.5"
                }`}
              >
                {tier.cta}
              </a>

              <ul className="mt-8 space-y-3 border-t pt-6 border-[#e2e8f0]">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <svg
                      className="mt-1 h-4 w-4 shrink-0 text-[#2563eb]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-[#475569]">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
