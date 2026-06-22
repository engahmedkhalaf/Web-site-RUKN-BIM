"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const SERVICES = [
  {
    title: "Revit Add-ins",
    desc: "Custom .NET tools that extend Revit with productivity-focused commands and workflows.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    ),
  },
  {
    title: "Navisworks Tools",
    desc: "Element navigators, smart search, and clash automation built for coordinators.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    ),
  },
  {
    title: "Digital Twin Solutions",
    desc: "Bridge BIM models to live data sources for facility ops, energy, and lifecycle insight.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    ),
  },
  {
    title: "Automation Scripts",
    desc: "Dynamo + pyRevit scripts that compress hours of manual modelling into one click.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    ),
  },
  {
    title: "BIM Consulting",
    desc: "Strategic guidance on standards, content libraries, and execution plans for AEC teams.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    ),
  },
  {
    title: "Training",
    desc: "Hands-on workshops on Revit API, Dynamo, and modern BIM coordination workflows.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[#efece5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="What we do"
          title={<>Services that <span className="text-[#2563eb]">accelerate</span> your BIM stack</>}
          description="From bespoke Revit add-ins to enterprise digital twins, we ship the tooling your teams need to move faster."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl bg-white border border-[#e2e8f0] p-8 transition-all duration-300 hover:shadow-[0_25px_50px_rgba(15,23,42,0.10)] hover:border-[#2563eb]/30"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2563eb]/10 text-[#2563eb] transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-110">
                <span className="h-6 w-6">{s.icon}</span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-[#0f172a]">{s.title}</h3>
              <p className="mt-3 text-[#475569] leading-relaxed">{s.desc}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2563eb] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
