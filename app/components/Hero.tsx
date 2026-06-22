"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-50, 50], [6, -6]);
  const rotateY = useTransform(mx, [-50, 50], [-6, 6]);

  return (
    <section
      id="top"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 100);
        my.set(((e.clientY - rect.top) / rect.height - 0.5) * 100);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden"
    >
      <div className="absolute inset-0 dot-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full bg-[#2563eb]/15 blur-3xl animate-float-slow" />
      <div className="absolute -bottom-32 -left-20 h-[360px] w-[360px] rounded-full bg-[#0f172a]/10 blur-3xl animate-float-medium" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#e2e8f0] bg-white/70 px-4 py-2 text-xs font-medium text-[#475569] backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-[#2563eb] animate-pulse" />
            Trusted by AEC professionals worldwide
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]"
          >
            RUKN <span className="gradient-text">BIM</span>
            <br />
            <span className="text-[#0f172a]">Digital BIM Solutions</span>
            <br />
            <span className="text-[#475569] text-3xl sm:text-4xl lg:text-5xl font-bold">
              For Revit &amp; Navisworks
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 max-w-xl text-lg text-[#475569] leading-relaxed"
          >
            Premium add-ins, automation scripts, and digital twin tooling
            engineered to remove friction from your BIM workflows — from clash
            detection to 5D BOQ.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#products" className="btn-primary">
              Explore Products
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="#contact" className="btn-secondary">
              Talk to Sales
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-[#94a3b8] font-semibold"
          >
            <span>Autodesk Revit</span>
            <span className="h-1 w-1 rounded-full bg-[#cbd5e1]" />
            <span>Navisworks</span>
            <span className="h-1 w-1 rounded-full bg-[#cbd5e1]" />
            <span>Dynamo</span>
            <span className="h-1 w-1 rounded-full bg-[#cbd5e1]" />
            <span>.NET / C#</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          style={{ rotateX, rotateY, transformPerspective: 1200 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="relative">
            <div className="absolute inset-0 -m-12 rounded-full bg-[#2563eb]/20 blur-3xl" />
            <Image
              src="/icon.svg"
              alt="RUKN BIM API"
              width={512}
              height={512}
              priority
              className="relative w-full max-w-md mx-auto drop-shadow-[0_30px_60px_rgba(37,99,235,0.35)] animate-float"
            />
          </div>

          <div className="absolute top-4 -right-2 rounded-2xl bg-white border border-[#e2e8f0] px-5 py-3 shadow-2xl animate-float-medium">
            <div className="text-[10px] uppercase tracking-widest text-[#94a3b8]">
              Productivity
            </div>
            <div className="text-xl font-bold text-[#2563eb]">+38%</div>
          </div>
          <div className="absolute -bottom-2 -left-2 rounded-2xl bg-white border border-[#e2e8f0] px-5 py-3 shadow-xl animate-float-slow">
            <div className="text-[10px] uppercase tracking-widest text-[#94a3b8]">
              Avg. setup
            </div>
            <div className="text-xl font-bold text-[#0f172a]">&lt; 5 min</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
