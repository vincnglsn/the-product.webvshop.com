"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { THE_PRODUCT } from "@/lib/products";

export function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 sm:p-4 bg-[#07090e]/95 backdrop-blur-xl border-t border-white/10 shadow-2xl transition-all animate-in slide-in-from-bottom">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-[#111422] border border-white/10 shrink-0">
            <Image
              src={THE_PRODUCT.image_url}
              alt="Miniature"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs sm:text-sm font-bold text-white truncate">
              {THE_PRODUCT.name}
            </span>
            <span className="text-[11px] text-[#00d2ff] font-extrabold">
              Dès 9,90 € • Stock limité
            </span>
          </div>
        </div>

        <a
          href="#commander"
          className="btn-cyber-primary py-2.5 px-5 sm:px-6 rounded-xl text-xs sm:text-sm font-black whitespace-nowrap shadow-lg flex items-center gap-1.5"
        >
          <span>Commander</span>
          <span>→</span>
        </a>
      </div>
    </div>
  );
}
