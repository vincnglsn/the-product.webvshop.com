import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function OrderSuccessPage() {
  return (
    <main className="min-h-screen flex flex-col relative z-10">
      <Header />
      <div className="flex-1 max-w-xl mx-auto px-4 py-16 sm:py-24 text-center flex flex-col items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-4xl mb-6 text-emerald-400">
          ✓
        </div>
        <span className="text-xs font-black uppercase tracking-widest text-[#00d2ff] mb-2">
          PAIEMENT VALIDÉ AVEC SUCCÈS
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Merci pour votre commande !
        </h1>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
          Votre commande a bien été enregistrée et transmise à notre centre logistique. Vous allez recevoir un email de confirmation contenant votre récapitulatif ainsi que votre lien de suivi postal dès l&apos;expédition du colis.
        </p>

        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-left text-xs text-gray-400 w-full mb-8 flex flex-col gap-2">
          <div className="flex justify-between">
            <span className="text-gray-500">Délai d&apos;expédition :</span>
            <span className="text-white font-bold">24 à 48 heures ouvrées</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Suivi postal :</span>
            <span className="text-[#00d2ff] font-bold">Transmis par email</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Service client :</span>
            <span className="text-white font-bold">contact@webvshop.com</span>
          </div>
        </div>

        <Link
          href="/"
          className="btn-cyber-primary py-3.5 px-8 rounded-xl font-bold text-sm"
        >
          Retour à la boutique
        </Link>
      </div>
      <Footer />
    </main>
  );
}
