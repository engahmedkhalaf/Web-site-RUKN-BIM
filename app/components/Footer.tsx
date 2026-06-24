import Image from "next/image";

const COLUMNS = [
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Press"],
  },
  {
    title: "Products",
    links: [
      "RUKNBIM Smart Select",
      "QIC 5D BOQ Manager",
      "RUKNBIM.ElementNavigator",
      "RuknExporter",
    ],
  },
  {
    title: "Resources",
    links: ["Documentation", "Downloads", "Changelog", "License Activation"],
  },
  {
    title: "Contact",
    links: ["Sales", "Support", "Partnerships", "engkhalaf8@protonmail.com"],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#efece5] text-[#0f172a] pt-20 pb-10 border-t border-[#d6d2c4]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10">
          <div className="lg:col-span-2">
            <Image
              src="/logo.svg"
              alt="RUKN BIM API"
              width={500}
              height={150}
              className="h-16 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm text-[#475569] leading-relaxed">
              Digital BIM solutions for Revit and Navisworks — premium add-ins,
              automation, and digital twin tooling for AEC teams.
            </p>

            <div className="mt-6 flex gap-3">
              {["github", "linkedin", "twitter", "youtube"].map((s) => (
                <a
                  key={s}
                  href={`#${s}`}
                  aria-label={s}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[#e2e8f0] text-[#0f172a] transition-all duration-300 hover:bg-[#2563eb] hover:border-[#2563eb] hover:text-white hover:-translate-y-1"
                >
                  <span className="text-xs font-bold uppercase">{s[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#0f172a]">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="inline-block text-sm text-[#475569] transition-all duration-300 hover:text-[#2563eb] hover:translate-x-2"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#e2e8f0] flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#475569]">
          <div>© {new Date().getFullYear()} RUKN BIM. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#2563eb] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#2563eb] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#2563eb] transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
