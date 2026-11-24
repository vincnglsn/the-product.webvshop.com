import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#05070a] text-gray-400 text-xs py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col gap-3 max-w-sm">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#00d2ff] to-[#e024c3] flex items-center justify-center text-black font-black text-sm">
              P1
            </div>
            <span className="font-extrabold text-white text-base">THE PRODUCT</span>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">
            {SITE.tagline} Notre mission : tester, valider et vous proposer les meilleures pépites virales directement au meilleur prix, sans intermédiaire inutile.
          </p>
          <div className="text-[11px] text-gray-500">
            {SITE.publisher.name} • SIRET {SITE.publisher.siret}
            <br />
            {SITE.publisher.address}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-bold text-white text-xs uppercase tracking-wider">
            Informations Légales
          </span>
          <Link href="/cgv" className="hover:text-white transition-colors">
            Conditions Générales de Vente (CGV)
          </Link>
          <Link href="/mentions-legales" className="hover:text-white transition-colors">
            Mentions Légales
          </Link>
          <Link href="/confidentialite" className="hover:text-white transition-colors">
            Politique de Confidentialité
          </Link>
          <Link href="/retours" className="hover:text-white transition-colors">
            Politique de Retours (14 jours)
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-bold text-white text-xs uppercase tracking-wider">
            Service Client
          </span>
          <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">
            Email : {SITE.email}
          </a>
          <a href={SITE.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
            WhatsApp : {SITE.whatsapp}
          </a>
          <span className="text-[11px] text-gray-500 mt-1">
            Réponse garantie en moins de {SITE.responseTime}
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
        <span>© {new Date().getFullYear()} The Product by WebVShop. Tous droits réservés.</span>
        <a href="https://webvshop.com" className="hover:text-white transition-colors">
          Propulsé par le portail officiel webvshop.com
        </a>
      </div>
    </footer>
  );
}
