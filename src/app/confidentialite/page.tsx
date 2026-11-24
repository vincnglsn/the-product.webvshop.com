import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/site";

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen flex flex-col relative z-10">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 flex-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
          Politique de Confidentialité & Données
        </h1>
        <div className="text-xs sm:text-sm text-gray-300 space-y-6 leading-relaxed bg-[#111422] p-6 sm:p-8 rounded-3xl border border-white/10">
          <section>
            <h2 className="text-base font-bold text-white mb-2">1. Traitement des Données Personnelles</h2>
            <p>
              Les données personnelles collectées lors du passage de commande (nom, adresse postale, email, téléphone) sont strictement réservées au traitement, à l&apos;expédition de votre commande et à l&apos;envoi des notifications de suivi postal.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-white mb-2">2. Paiement Sécurisé</h2>
            <p>
              Aucune donnée bancaire n&apos;est stockée sur nos serveurs. L&apos;ensemble des transactions de paiement est géré directement par l&apos;infrastructure certifiée PCI-DSS de niveau 1 de Stripe.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-white mb-2">3. Vos Droits (RGPD)</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données personnelles sur simple demande par email à {SITE.email}.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
