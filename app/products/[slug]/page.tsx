import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProductBySlug } from "@/lib/data/products";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CustomCursor from "../../components/CustomCursor";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product not found" };
  return {
    title: `${product.name} — RUKN BIM API`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="flex-1 pt-32 pb-24 bg-[#efece5]">
        <article className="mx-auto max-w-4xl px-6 lg:px-10">
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#475569] hover:text-[#2563eb] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            Back to products
          </Link>

          <header className="mt-8 flex items-start justify-between gap-6 flex-wrap">
            <div>
              <div className="flex items-center gap-3">
                <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-md ${
                  product.tier === "premium" ? "bg-[#2563eb] text-white" : "bg-[#22c55e]/15 text-[#16a34a]"
                }`}>
                  {product.tier}
                </span>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-[#94a3b8]">
                  {product.category}
                </span>
                <span className="text-xs text-[#94a3b8]">v{product.version}</span>
              </div>
              <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a]">
                {product.name}
              </h1>
              {product.learnMore?.tagline && (
                <p className="mt-4 text-lg text-[#475569] leading-relaxed max-w-2xl">
                  {product.learnMore.tagline}
                </p>
              )}
            </div>
            <div className="text-right">
              <div className="text-3xl font-extrabold text-[#0f172a]">{product.price}</div>
              {product.priceNote && (
                <div className="text-sm text-[#94a3b8]">{product.priceNote}</div>
              )}
            </div>
          </header>

          <p className="mt-10 text-[#475569] leading-relaxed">{product.description}</p>

          {product.learnMore?.sections.map((section, idx) => (
            <section key={idx} className="mt-12">
              <h2 className="text-2xl font-bold text-[#0f172a]">{section.heading}</h2>
              {section.body && (
                <p className="mt-4 text-[#475569] leading-relaxed whitespace-pre-line">
                  {section.body}
                </p>
              )}
              {section.items && (
                <ul className="mt-6 grid sm:grid-cols-2 gap-4">
                  {section.items.map((item) => (
                    <li
                      key={item.label}
                      className="group rounded-2xl border border-[#e2e8f0] bg-white p-5 transition-all duration-300 hover:border-[#2563eb]/40 hover:shadow-[0_15px_30px_-15px_rgba(15,23,42,0.15)]"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-lg">
                          {item.icon ?? (
                            <svg className="h-5 w-5 text-[#2563eb]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                          )}
                        </span>
                        <div className="flex-1">
                          <div className="font-semibold text-[#0f172a]">{item.label}</div>
                          {item.description && (
                            <div className="mt-1 text-sm text-[#475569] leading-relaxed">
                              {item.description}
                            </div>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#0f172a]">System Requirements</h2>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3">
              {product.systemRequirements.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-3 rounded-xl bg-white border border-[#e2e8f0] px-4 py-3 text-sm text-[#475569]"
                >
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#2563eb]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {r}
                </li>
              ))}
            </ul>
          </section>

          {product.changelog.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-[#0f172a]">Changelog</h2>
              <ol className="mt-6 space-y-6 border-l-2 border-[#e2e8f0] pl-6">
                {product.changelog.map((c) => (
                  <li key={c.version} className="relative">
                    <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-[#2563eb] ring-4 ring-[#efece5]" />
                    <div className="flex items-baseline gap-3">
                      <span className="font-bold text-[#0f172a]">v{c.version}</span>
                      <span className="text-xs text-[#94a3b8]">{c.date}</span>
                    </div>
                    <ul className="mt-2 space-y-1 text-sm text-[#475569]">
                      {c.changes.map((ch) => (
                        <li key={ch} className="leading-relaxed">— {ch}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </section>
          )}

          <div className="mt-14 flex flex-wrap gap-3 border-t border-[#e2e8f0] pt-8">
            <a
              href={product.downloadUrl}
              className="inline-flex items-center gap-2 rounded-xl bg-[#2563eb] text-white px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(37,99,235,0.25)]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download
            </a>
            <a
              href={product.docsUrl}
              className="inline-flex items-center gap-2 rounded-xl border border-[#e2e8f0] bg-white text-[#0f172a] px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:border-[#2563eb] hover:text-[#2563eb] hover:-translate-y-0.5"
            >
              Documentation
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
