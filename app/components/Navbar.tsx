"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-[0_6px_30px_rgba(15,23,42,0.06)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center group">
          <Image
            src="/logo.svg"
            alt="RUKN BIM API"
            width={500}
            height={150}
            priority
            className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-[#475569] transition-colors duration-300 hover:text-[#2563eb] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#2563eb] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden md:inline-flex btn-primary text-sm">
          Get Started
        </a>

        <button
          aria-label="Menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#e2e8f0]"
        >
          <span className="block w-4 h-[2px] bg-[#0f172a] relative before:absolute before:-top-[6px] before:left-0 before:w-4 before:h-[2px] before:bg-[#0f172a] after:absolute after:top-[6px] after:left-0 after:w-4 after:h-[2px] after:bg-[#0f172a]" />
        </button>
      </div>
    </motion.header>
  );
}
