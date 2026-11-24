import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { THE_PRODUCT } from "@/lib/products";
import { SITE } from "@/lib/site";

export async function POST(request: NextRequest) {
  let body: { offerId?: string; variantId?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Corps de requête invalide" }, { status: 400 });
  }

  const offerId = body.offerId || "solo";
  const variantId = body.variantId || "noir";

  const selectedOffer = THE_PRODUCT.offers.find((o) => o.id === offerId) || THE_PRODUCT.offers[0];
  const selectedVariant = THE_PRODUCT.variants.find((v) => v.id === variantId) || THE_PRODUCT.variants[0];

  const lineItems = [
    {
      quantity: 1,
      price_data: {
        currency: THE_PRODUCT.currency.toLowerCase(),
        unit_amount: selectedOffer.price_cents,
        product_data: {
          name: `${THE_PRODUCT.name} — ${selectedOffer.name}`,
          description: `Couleur : ${selectedVariant.name} • Puissance 240W PD 3.1 & Béquille métal 90°`,
          metadata: {
            slug: THE_PRODUCT.slug,
            offer: selectedOffer.id,
            variant: selectedVariant.id,
            quantity: String(selectedOffer.quantity),
          },
          images: [THE_PRODUCT.image_url],
        },
      },
    },
  ];

  const origin =
    process.env.NEXT_PUBLIC_SITE_URL ||
    request.headers.get("origin") ||
    "https://webvshop.com/the-product";

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      locale: "fr",
      allow_promotion_codes: true,
      line_items: lineItems,
      success_url: `${origin}/commande/succes?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}`,
      shipping_address_collection: { allowed_countries: ["FR", "BE", "CH", "LU"] },
      phone_number_collection: { enabled: true },
      metadata: {
        site: SITE.id,
        product: THE_PRODUCT.slug,
        offer: selectedOffer.id,
        variant: selectedVariant.id,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Erreur Stripe Checkout:", error);
    return NextResponse.json(
      { error: "Impossible d'initialiser le paiement sécurisé pour le moment." },
      { status: 500 }
    );
  }
}
