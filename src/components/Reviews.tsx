export function Reviews() {
  const reviews = [
    {
      author: "Alexandre M.",
      date: "Il y a 3 jours",
      rating: 5,
      variant: "Noir Titane",
      title: "Indispensable pour regarder des vidéos au lit ou en mangeant !",
      comment:
        "J'avais vu ce câble sur TikTok sans trop y croire, mais franchement c'est du génie. Le support en métal est ultra solide, mon iPhone 15 Pro Max tient parfaitement droit sans jamais basculer. La charge 240W fonctionne à fond avec mon chargeur Mac. J'ai commandé le pack Duo pour en laisser un au bureau.",
    },
    {
      author: "Camille D.",
      date: "Il y a 5 jours",
      rating: 5,
      variant: "Orange Cyber",
      title: "La couleur orange pète et le câble ne s'emmêle jamais.",
      comment:
        "Texture silicone très agréable, super doux et ne fait aucun nœud dans mon sac à main. La petite béquille est invisible quand elle est repliée. Livraison en 6 jours ouvrés avec suivi postal parfait.",
    },
    {
      author: "Julien R.",
      date: "Il y a 1 semaine",
      rating: 5,
      variant: "Noir Titane",
      title: "Parfait pour jouer en chargeant sans se casser les poignets.",
      comment:
        "L'angle à 90 degrés change tout pour le jeu mobile. Plus aucun câble qui vous rentre dans la paume. Et à 9,90 € c'est un cadeau vu la qualité de fabrication en alliage de zinc.",
    },
  ];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/5">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-xs font-black uppercase tracking-widest text-[#00d2ff]">
            AVIS CLIENTS VÉRIFIÉS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
            Ce que disent ceux qui l&apos;utilisent au quotidien
          </h2>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/10 w-fit">
          <div className="flex text-amber-400 text-lg">★★★★★</div>
          <div className="flex flex-col">
            <span className="text-sm font-black text-white">4.9 sur 5</span>
            <span className="text-[11px] text-gray-400">Basé sur 3 120 avis clients</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-[#111422] border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex text-amber-400 text-sm">★★★★★</div>
                <span className="text-[11px] text-gray-500">{rev.date}</span>
              </div>
              <h3 className="text-sm font-bold text-white mb-2">&quot;{rev.title}&quot;</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
                {rev.comment}
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00d2ff] to-[#e024c3] flex items-center justify-center text-black font-black text-xs">
                  {rev.author[0]}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">{rev.author}</span>
                  <span className="text-[10px] text-emerald-400">✓ Achat vérifié</span>
                </div>
              </div>
              <span className="text-[10px] text-gray-500">{rev.variant}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
