export type ProductOffer = {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  quantity: number;
  price_cents: number;
  compare_price_cents: number;
  savings_text: string;
};

export type ProductVariant = {
  id: string;
  name: string;
  color_code: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  badge: string;
  rating: number;
  reviews_count: number;
  sales_count: string;
  currency: string;
  price_cents: number;
  compare_price_cents: number;
  in_stock: boolean;
  images: string[];
  image_url: string;
  video_hook_title: string;
  highlights: string[];
  features: { icon: string; title: string; desc: string }[];
  specs: { label: string; value: string }[];
  offers: ProductOffer[];
  variants: ProductVariant[];
  faqs: { q: string; a: string }[];
};

export const THE_PRODUCT: Product = {
  id: "the-product-01",
  slug: "cable-plat-charge-rapide-240w-support-integre",
  name: "Câble Plat Ultra-Rapide 240W & Support Pliable Invisible 2-en-1",
  subtitle: "The Product by WebVShop • Le N°1 des tendances validé pour vous.",
  badge: "🏆 LE N°1 DES TENDANCES • PLUS DE 3 400 EXEMPLAIRES VENDUS",
  rating: 4.9,
  reviews_count: 3120,
  sales_count: "3 400+ commandes expédiées ce mois-ci",
  currency: "EUR",
  price_cents: 990,
  compare_price_cents: 1990,
  in_stock: true,
  image_url: "/the-product/images/the-product-01.jpg",
  images: [
    "/the-product/images/the-product-01.jpg",
    "/the-product/images/the-product-02.jpg",
    "/the-product/images/the-product-03.jpg",
    "/the-product/images/the-product-04.jpg",
    "/the-product/images/the-product-05.jpg",
    "/the-product/images/the-product-06.jpg"
  ],
  video_hook_title: "Ne calez plus jamais votre téléphone contre une tasse de café.",
  highlights: [
    "Béquille escamotable en alliage de zinc à angle 90° : tient votre smartphone en portrait ou paysage sans trembler.",
    "Puissance 240W certifiée PD 3.1 : charge ultra-rapide de 0 à 80% en 25 min (smartphone, tablette, MacBook).",
    "Conception ruban plat en silicone liquide : zéro nœud, zéro torsion, résiste à +30 000 pliages.",
    "Gaming & Séries sans gêne : l'embout coudé ne bloque plus vos mains pendant vos sessions."
  ],
  features: [
    {
      icon: "⚡",
      title: "Charge Ultra-Rapide 240W",
      desc: "Puce intelligente E-Marker intégrée qui adapte le courant pour charger vos appareils à pleine vitesse en toute sécurité sans surchauffe."
    },
    {
      icon: "📐",
      title: "Support Pliable Invisible 90°",
      desc: "Dépliez la béquille métallique en un geste. Regardez vos séries, vidéos ou suivez vos recettes les mains libres pendant la charge."
    },
    {
      icon: "🛡️",
      title: "Silicone Liquide Blindé",
      desc: "Fini les gaines fragiles qui se dénudent après 2 mois. Le silicone texturé haut de gamme offre un toucher velours et une longévité extrême."
    },
    {
      icon: "🎮",
      title: "Confort Gaming & Streaming",
      desc: "L'angle à 90 degrés épouse la paume sans bloquer les doigts. Jouez à PUBG, Brawl Stars ou streamez sans que le câble ne vous gêne."
    }
  ],
  specs: [
    { label: "Puissance Maximale", value: "240W Power Delivery 3.1 (Rétrocompatible 100W, 66W, 45W, 20W)" },
    { label: "Connectique", value: "USB Type-C vers Type-C (Compatible chargeurs rapides)" },
    { label: "Débit de Transfert", value: "480 Mbps (Transfert de films et photos en quelques secondes)" },
    { label: "Matériaux", value: "Alliage de zinc renforcé + Silicone liquide haute densité" },
    { label: "Longueur", value: "1,20 mètre (Taille idéale bureau, lit, canapé et voyage)" },
    { label: "Compatibilité", value: "iPhone 15/16/17, Samsung Galaxy S20 à S26, Xiaomi, Pixel, iPad, MacBooks, PC portables USB-C, Nintendo Switch" }
  ],
  offers: [
    {
      id: "solo",
      name: "1 Câble Solo",
      badge: "Offre Découverte",
      popular: false,
      quantity: 1,
      price_cents: 990,
      compare_price_cents: 1990,
      savings_text: "Économisez 10,00 €"
    },
    {
      id: "duo",
      name: "Pack Duo (2 Câbles)",
      badge: "LE PLUS POPULAIRE (1 Bureau + 1 Nuit / Voyage)",
      popular: true,
      quantity: 2,
      price_cents: 1690,
      compare_price_cents: 3980,
      savings_text: "Économisez 22,90 € • 8,45 € / unité"
    },
    {
      id: "trio",
      name: "Pack Famille (3 Câbles)",
      badge: "MEILLEURE OFFRE GLOBALE",
      popular: false,
      quantity: 3,
      price_cents: 2290,
      compare_price_cents: 5970,
      savings_text: "Économisez 36,80 € • 7,63 € / unité"
    }
  ],
  variants: [
    { id: "noir", name: "Noir Titane (Furtif)", color_code: "#1f242d" },
    { id: "orange", name: "Orange Cyber (Édition Spéciale)", color_code: "#ff6b00" },
    { id: "blanc", name: "Blanc Pur (Minimaliste)", color_code: "#f0f2f5" }
  ],
  faqs: [
    {
      q: "Est-il compatible avec mon iPhone ou mon Samsung ?",
      a: "Oui, à 100 %. Dès que votre appareil dispose d'un port USB-C (comme les iPhone 15, 16, 17, tous les Samsung récents, Xiaomi, Huawei, Google Pixel, mais aussi iPad et ordinateurs portables USB-C), le câble fonctionne instantanément en charge rapide."
    },
    {
      q: "Le support tient-il bien avec une coque de téléphone ?",
      a: "Absolument. La béquille en alliage de zinc a été conçue pour supporter n'importe quel smartphone, qu'il ait une coque fine ou une coque renforcée antichoc, aussi bien en mode horizontal (paysage) qu'en mode vertical (portrait)."
    },
    {
      q: "Quelle est la durée de livraison ?",
      a: "Toutes les commandes sont expédiées sous 24 à 48h ouvrées avec numéro de suivi postal transmis par email. La livraison s'effectue en 5 à 10 jours ouvrés en France, Belgique, Suisse et Luxembourg."
    },
    {
      q: "Que se passe-t-il si je ne suis pas satisfait ?",
      a: "Vous bénéficiez de notre garantie 'Satisfait ou Remboursé' pendant 14 jours. Si le produit ne vous convient pas, notre service client basé en France vous rembourse sans tracas."
    }
  ]
};

export async function getTheProduct(): Promise<Product> {
  return THE_PRODUCT;
}
