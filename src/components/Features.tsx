import { THE_PRODUCT } from "@/lib/products";

export function Features() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/5">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-black uppercase tracking-widest text-[#00d2ff]">
          POURQUOI TOUT LE MONDE S&apos;ARRACHE CE CÂBLE
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
          Le câble pensé pour la vraie vie, pas juste pour recharger.
        </h2>
        <p className="text-sm sm:text-base text-gray-400 mt-3">
          {THE_PRODUCT.video_hook_title} Une ingénierie de pointe combinant silicone blindé et béquille escamotable invisible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {THE_PRODUCT.features.map((feat, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 rounded-3xl bg-[#111422]/70 border border-white/10 hover:border-[#00d2ff]/40 transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-all pointer-events-none" />
            <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
              {feat.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{feat.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
