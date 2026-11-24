import { THE_PRODUCT } from "@/lib/products";

export function SpecsSection() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto border-t border-white/5">
      <div className="text-center mb-8">
        <span className="text-xs font-black uppercase tracking-widest text-[#00d2ff]">
          FICHE TECHNIQUE OFFICIELLE
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
          Caractéristiques & Spécifications
        </h2>
      </div>

      <div className="rounded-2xl border border-white/10 bg-[#111422] divide-y divide-white/5">
        {THE_PRODUCT.specs.map((item, idx) => (
          <div key={idx} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
            <span className="text-xs sm:text-sm font-semibold text-gray-400">{item.label}</span>
            <span className="text-xs sm:text-sm font-bold text-white sm:text-right">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
