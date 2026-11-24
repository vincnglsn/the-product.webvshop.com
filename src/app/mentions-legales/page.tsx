import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/site";

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen flex flex-col relative z-10">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 flex-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
          Mentions Légales
        </h1>
        <div className="text-xs sm:text-sm text-gray-300 space-y-6 leading-relaxed bg-[#111422] p-6 sm:p-8 rounded-3xl border border-white/10">
          <section>
            <h2 className="text-base font-bold text-white mb-2">1. Éditeur du Site</h2>
            <p>
              Le site {SITE.name} ({SITE.url}) est édité par :<br />
              <strong>{SITE.publisher.name}</strong><br />
              Entreprise individuelle régie par le droit français<br />
              SIRET : {SITE.publisher.siret}<br />
              Adresse : {SITE.publisher.address}<br />
              Email : {SITE.email}<br />
              Téléphone : {SITE.phone}
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-white mb-2">2. Directeur de la Publication</h2>
            <p>
              Vincent Nageleisen, en qualité d&apos;entrepreneur individuel.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-white mb-2">3. Hébergement</h2>
            <p>
              Le site est hébergé par {SITE.host}.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
