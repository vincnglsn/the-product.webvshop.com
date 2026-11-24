import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/site";

export default function CGVPage() {
  return (
    <main className="min-h-screen flex flex-col relative z-10">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 flex-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
          Conditions Générales de Vente (CGV)
        </h1>
        <div className="text-xs sm:text-sm text-gray-300 space-y-6 leading-relaxed bg-[#111422] p-6 sm:p-8 rounded-3xl border border-white/10">
          <section>
            <h2 className="text-base font-bold text-white mb-2">1. Objet et Champ d&apos;Application</h2>
            <p>
              Les présentes Conditions Générales de Vente régissent les ventes conclues sur la boutique {SITE.name} ({SITE.url}), éditée par {SITE.publisher.name}, SIRET {SITE.publisher.siret}, dont le siège est situé au {SITE.publisher.address}.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-white mb-2">2. Prix et Modalités de Paiement</h2>
            <p>
              Les prix sont indiqués en euros (€) Toutes Taxes Comprises (TVA non applicable, art. 293 B du CGI). Le règlement s&apos;effectue en ligne de manière sécurisée par carte bancaire ou portefeuille électronique via notre prestataire de paiement Stripe.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-white mb-2">3. Livraison et Délais</h2>
            <p>
              Les commandes sont expédiées sous 24 à 48 heures ouvrées. Le délai indicatif de livraison en France métropolitaine, Belgique, Suisse et Luxembourg est de {SITE.deliveryDays.min} à {SITE.deliveryDays.max} jours ouvrés. Un numéro de suivi postal est communiqué automatiquement dès l&apos;expédition.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-white mb-2">4. Droit de Rétractation (14 Jours)</h2>
            <p>
              Conformément à l&apos;article L. 221-18 du Code de la consommation, le client dispose d&apos;un délai de {SITE.returnDays} jours à compter de la réception du produit pour exercer son droit de rétractation et demander le remboursement intégral.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-white mb-2">5. Service Client</h2>
            <p>
              Pour toute question relative à une commande, notre service client est joignable par email à {SITE.email} ou par WhatsApp au {SITE.whatsapp}.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
