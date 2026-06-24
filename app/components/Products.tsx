"use client";

import { motion } from "framer-motion";
import { products } from "@/lib/data/products";
import SectionHeading from "./SectionHeading";

export default function Products() {
  return (
    <section id="products" className="relative py-24 lg:py-32 bg-[#efece5] overflow-hidden">
      <div className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-[#2563eb]/5 blur-3xl" />
      <div className="absolute bottom-1/4 -right-24 h-96 w-96 rounded-full bg-[#0f172a]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Products"
          title={<>Tools built for <span className="text-[#2563eb]">Revit</span> &amp; <span className="text-[#2563eb]">Navisworks</span></>}
          description="Premium add-ins shipping today, designed by engineers who live in your software."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="group relative rounded-3xl border border-[#e2e8f0] bg-gradient-to-br from-white to-[#f8fafc] p-8 transition-all duration-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.18)] hover:border-[#2563eb]/40"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#0f172a] flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-[#2563eb]/30 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    {p.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-md ${
                          p.tier === "premium"
                            ? "bg-[#2563eb] text-white"
                            : "bg-[#22c55e]/15 text-[#16a34a]"
                        }`}
                      >
                        {p.tier}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest font-semibold text-[#94a3b8]">
                        {p.category}
                      </span>
                    </div>
                    <h3 className="mt-1 text-xl font-bold text-[#0f172a] group-hover:text-[#2563eb] transition-colors">
                      {p.name}
                    </h3>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-extrabold text-[#0f172a]">{p.price}</div>
                  {p.priceNote && (
                    <div className="text-xs text-[#94a3b8]">{p.priceNote}</div>
                  )}
                </div>
              </div>

              <p className="mt-6 text-[#475569] leading-relaxed">
                {p.shortDescription}
              </p>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {p.features.slice(0, 4).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#475569]">
                    <svg className="mt-1 h-3.5 w-3.5 shrink-0 text-[#2563eb]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span className="line-clamp-1">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3 pt-6 border-t border-[#e2e8f0]">
                <a
                  href={`/products/${p.slug}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0f172a] text-white px-5 py-3 text-sm font-semibold transition-all duration-300 hover:bg-[#2563eb] hover:translate-y-[-2px]"
                >
                  Learn More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
                <a
                  href={p.downloadUrl || "#downloads"}
                  target={p.downloadUrl?.startsWith("http") ? "_blank" : undefined}
                  rel={p.downloadUrl?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#e2e8f0] bg-white px-5 py-3 text-sm font-semibold text-[#0f172a] transition-all duration-300 hover:border-[#2563eb] hover:text-[#2563eb] hover:translate-y-[-2px]"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Download
                </a>
                <span className="ml-auto self-center text-xs text-[#94a3b8]">
                  v{p.version}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
