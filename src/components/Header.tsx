import Link from "next/link";
import { SITE } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07090e]/85 border-b border-white/10 transition-all">
      {/* Barre d'urgence & promo */}
      <div className="bg-gradient-to-r from-[#00d2ff] via-[#e024c3] to-[#ff5670] text-black text-xs sm:text-sm font-extrabold py-1.5 px-4 text-center tracking-wide uppercase flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-black animate-ping" />
        <span>🔥 Offre de Lancement Spéciale : -50% aujourd&apos;hui • Expédition 24/48h</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo The Product */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00d2ff] to-[#e024c3] flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <span className="text-black font-black text-xl tracking-tighter">P1</span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5">
              THE PRODUCT
              <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-cyan-500/20 text-[#00d2ff] border border-cyan-500/30">
                Official
              </span>
            </span>
            <span className="text-[11px] text-gray-400 -mt-1">par WebVShop</span>
          </div>
        </Link>

        {/* Accès rapide écosystème WebVShop */}
        <div className="flex items-center gap-3">
          <a
            href="https://webvshop.com"
            className="hidden sm:inline-flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors py-1.5 px-3 rounded-lg border border-white/10 hover:border-white/20"
          >
            <span>← Écosystème WebVShop</span>
          </a>
          <a
            href="#commander"
            className="btn-cyber-primary text-xs sm:text-sm py-2 px-4 rounded-xl font-bold flex items-center gap-1.5"
          >
            <span>Commander (9,90 €)</span>
          </a>
        </div>
      </div>
    </header>
  );
}
