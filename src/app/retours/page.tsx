import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/site";

export default function RetoursPage() {
  return (
    <main className="min-h-screen flex flex-col relative z-10">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 flex-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
          Politique de Retours & Remboursements
        </h1>
        <div className="text-xs sm:text-sm text-gray-300 space-y-6 leading-relaxed bg-[#111422] p-6 sm:p-8 rounded-3xl border border-white/10">
          <section>
            <h2 className="text-base font-bold text-white mb-2">Garantie 14 Jours Satisfait ou Remboursé</h2>
            <p>
              Votre satisfaction est notre priorité absolue. Si {THE_PRODUCT_NAME} ne répondait pas pleinement à vos attentes, vous disposez d&apos;un délai légal de {SITE.returnDays} jours à compter de la réception de votre colis pour nous le retourner et obtenir un remboursement intégral.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-white mb-2">Comment effectuer un retour ?</h2>
            <ol className="list-decimal list-inside space-y-2 mt-2">
              <li>Contactez notre support par email à <strong>{SITE.email}</strong> en indiquant votre numéro de commande.</li>
              <li>Nous vous transmettrons les instructions de renvoi vers notre adresse postale : {SITE.publisher.address}.</li>
              <li>Dès réception et vérification de l&apos;article, le remboursement est déclenché sous 48h sur votre moyen de paiement initial.</li>
            </ol>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}

const THE_PRODUCT_NAME = "votre commande";
