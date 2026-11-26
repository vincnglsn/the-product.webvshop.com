import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { THE_PRODUCT, THE_PRODUCT_02 } from "@/lib/products";
import { SITE } from "@/lib/site";

export async function POST(request: NextRequest) {
  let body: { offerId?: string; variantId?: string; productId?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Corps de requête invalide" }, { status: 400 });
  }

  const currentProduct = body.productId === "the-product-02" ? THE_PRODUCT_02 : THE_PRODUCT;
  const offerId = body.offerId || "solo";
  const variantId = body.variantId || "noir";

  const selectedOffer = currentProduct.offers.find((o) => o.id === offerId) || currentProduct.offers[0];
  const selectedVariant = currentProduct.variants.find((v) => v.id === variantId) || currentProduct.variants[0];

  const lineItems = [
    {
      quantity: 1,
      price_data: {
        currency: currentProduct.currency.toLowerCase(),
        unit_amount: selectedOffer.price_cents,
        product_data: {
          name: `${currentProduct.name} — ${selectedOffer.name}`,
          description: `Variante : ${selectedVariant.name}`,
          metadata: {
            slug: currentProduct.slug,
            offer: selectedOffer.id,
            variant: selectedVariant.id,
            quantity: String(selectedOffer.quantity),
          },
          images: [currentProduct.image_url],
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
