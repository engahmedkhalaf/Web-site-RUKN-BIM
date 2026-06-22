"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const PROJECTS = [
  {
    name: "QIC 5D BOQ Pipeline",
    software: "Revit + Excel",
    desc: "Automated quantity takeoff and BOQ generation for a major insurance HQ project.",
    gradient: "from-[#2563eb] to-[#0ea5e9]",
  },
  {
    name: "Element Navigator Suite",
    software: "Navisworks",
    desc: "Custom navigation and search tooling for a 1.2M-element infrastructure model.",
    gradient: "from-[#0f172a] to-[#475569]",
  },
  {
    name: "Selection by Revit ID",
    software: "Revit",
    desc: "Zero-friction element lookup across linked models for an MEP coordination team.",
    gradient: "from-[#7c3aed] to-[#2563eb]",
  },
  {
    name: "BIM Utilities Pack",
    software: "Revit",
    desc: "A bundle of micro-tools (rename, dedupe, audit) shipped to a 40-seat firm.",
    gradient: "from-[#16a34a] to-[#2563eb]",
  },
  {
    name: "Clash Report Automator",
    software: "Navisworks",
    desc: "Branded clash reports exported to Excel + PDF with one click per session.",
    gradient: "from-[#f59e0b] to-[#ef4444]",
  },
  {
    name: "Digital Twin Bridge",
    software: "Revit + IoT",
    desc: "Bi-directional sync between Revit elements and a building-ops dashboard.",
    gradient: "from-[#2563eb] to-[#0f172a]",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 lg:py-32 bg-[#efece5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Selected work"
          title={<>Recent <span className="text-[#2563eb]">projects</span></>}
          description="A snapshot of the BIM tooling we have delivered for AEC teams across the region."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-3xl bg-white border border-[#e2e8f0] cursor-pointer"
            >
              <div className={`relative h-48 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                <div className="absolute inset-0 dot-grid opacity-30 transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-xs font-bold uppercase tracking-widest">View case</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              </div>
              <div className="p-6">
                <div className="text-[10px] uppercase tracking-widest font-semibold text-[#2563eb]">
                  {p.software}
                </div>
                <h3 className="mt-2 text-lg font-bold text-[#0f172a] group-hover:text-[#2563eb] transition-colors">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm text-[#475569] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
