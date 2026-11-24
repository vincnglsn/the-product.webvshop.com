export function Comparison() {
  const points = [
    {
      feature: "Support smartphone intégré",
      standard: "❌ Aucun. Obligé de caler le téléphone contre un objet qui glisse.",
      theProduct: "✅ Béquille en alliage de zinc escamotable 90° portrait & paysage.",
    },
    {
      feature: "Puissance de charge",
      standard: "⚠️ 15W à 60W générique (charge lente qui chauffe).",
      theProduct: "✅ 240W certifié PD 3.1 avec puce E-Marker intelligente.",
    },
    {
      feature: "Confort en main (Gaming / Séries)",
      standard: "❌ Câble droit rigide qui rentre dans la paume et plie le connecteur.",
      theProduct: "✅ Embout biseauté à 90° qui n'encombre absolument pas les doigts.",
    },
    {
      feature: "Résistance & Durée de vie",
      standard: "❌ Gaine plastique qui se dénude et faux contacts au bout de 3 mois.",
      theProduct: "✅ Ruban plat en silicone liquide blindé résistant à +30 000 pliages.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/5">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-black uppercase tracking-widest text-pink-400">
          COMPARATIF SANS CONCESSION
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
          Pourquoi remplacer vos anciens câbles ?
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border-collapse rounded-2xl overflow-hidden bg-[#111422] border border-white/10">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.02]">
              <th className="p-4 sm:p-5 font-bold text-gray-400 w-1/3">Critère</th>
              <th className="p-4 sm:p-5 font-bold text-gray-500 w-1/3">Câble classique</th>
              <th className="p-4 sm:p-5 font-black text-[#00d2ff] bg-cyan-500/10 w-1/3">The Product #01</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {points.map((pt, idx) => (
              <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                <td className="p-4 sm:p-5 font-bold text-white">{pt.feature}</td>
                <td className="p-4 sm:p-5 text-gray-400">{pt.standard}</td>
                <td className="p-4 sm:p-5 font-medium text-emerald-300 bg-cyan-500/[0.03]">
                  {pt.theProduct}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
