"use client";

import { useState } from "react";
import Image from "next/image";
import { THE_PRODUCT } from "@/lib/products";

export function ProductHero() {
  const [selectedImage, setSelectedImage] = useState(THE_PRODUCT.images[0]);
  const [selectedOfferId, setSelectedOfferId] = useState("solo");
  const [selectedVariantId, setSelectedVariantId] = useState("noir");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const currentOffer =
    THE_PRODUCT.offers.find((o) => o.id === selectedOfferId) || THE_PRODUCT.offers[0];
  const currentVariant =
    THE_PRODUCT.variants.find((v) => v.id === selectedVariantId) || THE_PRODUCT.variants[0];

  const handleCheckout = async () => {
    setLoading(true);
    setErrorMsg("");
    try {
      const res = await fetch("/the-product/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          offerId: selectedOfferId,
          variantId: selectedVariantId,
        }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setErrorMsg(data.error || "Une erreur est survenue lors de l'accès au paiement.");
        setLoading(false);
      }
    } catch {
      setErrorMsg("Impossible de joindre le serveur de paiement. Veuillez réessayer.");
      setLoading(false);
    }
  };

  return (
    <section id="commander" className="py-6 sm:py-12 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Galerie d'images interactive (Col 1-7 sur Desktop) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-[#111422] border border-white/10 shadow-2xl group">
            {/* Badges d'autorité */}
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-black/80 backdrop-blur-md text-[#00d2ff] border border-cyan-500/40 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#00d2ff] animate-pulse" />
                N°1 DES TENDANCES
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold bg-pink-500/20 text-pink-300 border border-pink-500/30 backdrop-blur-md">
                -50% AUJOURD&apos;HUI
              </span>
            </div>

            <Image
              src={selectedImage}
              alt={THE_PRODUCT.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              priority
            />
          </div>

          {/* Miniatures */}
          {THE_PRODUCT.images.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {THE_PRODUCT.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImage(img)}
                  className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all ${
                    selectedImage === img
                      ? "border-[#00d2ff] shadow-lg shadow-cyan-500/30 scale-102"
                      : "border-white/10 opacity-70 hover:opacity-100 hover:border-white/30"
                  }`}
                >
                  <Image src={img} alt={`Aperçu ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Réassurance sous l'image */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-center mt-2">
            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-2xl">⚡</span>
              <span className="text-[11px] sm:text-xs font-bold text-gray-200 mt-1">240W Réel</span>
              <span className="text-[10px] text-gray-400">Puce E-Marker PD 3.1</span>
            </div>
            <div className="flex flex-col items-center border-x border-white/5 px-2">
              <span className="text-xl sm:text-2xl">📐</span>
              <span className="text-[11px] sm:text-xs font-bold text-gray-200 mt-1">Support 90°</span>
              <span className="text-[10px] text-gray-400">Alliage Zinc renforcé</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-2xl">🛡️</span>
              <span className="text-[11px] sm:text-xs font-bold text-gray-200 mt-1">Silicone Plat</span>
              <span className="text-[10px] text-gray-400">+30 000 pliages</span>
            </div>
          </div>
        </div>

        {/* Détails & Sélecteur d'Achat (Col 8-12 sur Desktop) */}
        <div className="lg:col-span-5 flex flex-col">
          {/* Badge officiel de viralité */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-gradient-to-r from-cyan-500/20 to-pink-500/20 text-cyan-300 border border-cyan-500/30">
              {THE_PRODUCT.badge}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-2">
            {THE_PRODUCT.name}
          </h1>

          <p className="text-sm text-gray-400 mb-4">{THE_PRODUCT.subtitle}</p>

          {/* Étoiles & Preuve sociale */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
            <div className="flex text-amber-400 text-sm">★★★★★</div>
            <span className="text-xs font-bold text-white">4.9/5</span>
            <span className="text-xs text-gray-400">({THE_PRODUCT.reviews_count} avis vérifiés)</span>
            <span className="text-xs text-emerald-400 font-semibold ml-auto flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              En stock
            </span>
          </div>

          {/* Choix de la couleur */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-xs font-bold text-gray-300 mb-2.5">
              <span>1. Choisissez la couleur :</span>
              <span className="text-[#00d2ff]">{currentVariant.name}</span>
            </div>
            <div className="grid grid-cols-3 gap-2.5">
              {THE_PRODUCT.variants.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setSelectedVariantId(v.id)}
                  className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-bold transition-all ${
                    selectedVariantId === v.id
                      ? "border-[#00d2ff] bg-cyan-500/10 text-white shadow-md shadow-cyan-500/20"
                      : "border-white/10 bg-[#111422] text-gray-400 hover:text-white hover:border-white/20"
                  }`}
                >
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-white/20"
                    style={{ backgroundColor: v.color_code }}
                  />
                  <span>{v.name.split(" ")[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Choix de l'offre / packs */}
          <div className="mb-6">
            <div className="text-xs font-bold text-gray-300 mb-2.5">
              2. Sélectionnez votre formule :
            </div>
            <div className="flex flex-col gap-3">
              {THE_PRODUCT.offers.map((offer) => {
                const isSelected = selectedOfferId === offer.id;
                return (
                  <label
                    key={offer.id}
                    onClick={() => setSelectedOfferId(offer.id)}
                    className={`relative flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${
                      isSelected
                        ? "border-[#00d2ff] bg-gradient-to-r from-cyan-950/40 to-pink-950/20 shadow-lg shadow-cyan-500/15"
                        : "border-white/10 bg-[#111422] hover:border-white/20"
                    }`}
                  >
                    {offer.popular && (
                      <span className="absolute -top-2.5 right-4 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-gradient-to-r from-[#00d2ff] to-[#e024c3] text-black shadow-md">
                        {offer.badge}
                      </span>
                    )}

                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                          isSelected ? "border-[#00d2ff] bg-[#00d2ff]" : "border-gray-500"
                        }`}
                      >
                        {isSelected && <div className="w-2 h-2 rounded-full bg-black" />}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-extrabold text-white">{offer.name}</span>
                        <span className="text-[11px] text-emerald-400 font-semibold">
                          {offer.savings_text}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="text-lg font-black text-white">
                        {(offer.price_cents / 100).toFixed(2).replace(".", ",")} €
                      </span>
                      <span className="text-xs text-gray-500 line-through">
                        {(offer.compare_price_cents / 100).toFixed(2).replace(".", ",")} €
                      </span>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Erreur éventuelle */}
          {errorMsg && (
            <div className="mb-4 p-3 rounded-xl bg-red-500/20 border border-red-500/30 text-red-300 text-xs text-center">
              {errorMsg}
            </div>
          )}

          {/* Bouton de Commande Directe Stripe */}
          <button
            type="button"
            onClick={handleCheckout}
            disabled={loading}
            className="btn-cyber-primary w-full py-4 px-6 rounded-2xl text-base sm:text-lg font-black tracking-wide uppercase flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span>Accès sécurisé Stripe...</span>
              </>
            ) : (
              <>
                <span>Commander maintenant</span>
                <span className="text-sm font-bold opacity-90">
                  — {(currentOffer.price_cents / 100).toFixed(2).replace(".", ",")} €
                </span>
                <span>→</span>
              </>
            )}
          </button>

          {/* Badges de confiance & Livraison */}
          <div className="mt-4 pt-4 border-t border-white/5 flex flex-col gap-2 text-xs text-gray-400">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <span className="flex items-center gap-1">🔒 Paiement Sécurisé SSL</span>
              <span className="flex items-center gap-1">⚡ Expédition 24/48h</span>
              <span className="flex items-center gap-1">🔄 Garantie 14 jours</span>
            </div>
            <p className="text-[11px] text-center text-gray-500">
              Compatible Apple Pay, Google Pay, CB, Visa & Mastercard via Stripe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
