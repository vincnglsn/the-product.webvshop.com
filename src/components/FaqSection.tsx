"use client";

import { useState } from "react";
import { THE_PRODUCT } from "@/lib/products";

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-3xl mx-auto border-t border-white/5">
      <div className="text-center mb-10">
        <span className="text-xs font-black uppercase tracking-widest text-[#00d2ff]">
          QUESTIONS FRÉQUENTES
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
          Tout ce que vous devez savoir
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {THE_PRODUCT.faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-[#111422] overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-white flex items-center justify-between gap-4"
              >
                <span>{faq.q}</span>
                <span className="text-lg text-[#00d2ff] font-light">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
