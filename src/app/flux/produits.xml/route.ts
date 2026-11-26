import { THE_PRODUCT, THE_PRODUCT_02, THE_PRODUCT_03 } from "@/lib/products";
import { SITE } from "@/lib/site";

export const dynamic = "force-dynamic";

function xml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const products = [THE_PRODUCT, THE_PRODUCT_02, THE_PRODUCT_03];
  const toAbsolute = (url: string) =>
    url.startsWith("http") ? url : `https://webvshop.com${url.startsWith("/") ? "" : "/"}${url}`;

  const itemsXml = products
    .map((p) => {
      const price = `${(p.price_cents / 100).toFixed(2)} ${p.currency}`;
      const link = `${SITE.url}`;
      const description = `${p.name} - ${p.subtitle}.`;
      const mainImage = toAbsolute(p.image_url);
      const extraImages = p.images
        .slice(1)
        .map((img) => `      <g:additional_image_link>${xml(toAbsolute(img))}</g:additional_image_link>`)
        .join("\n");

      return `    <item>
      <g:id>${xml(p.slug)}</g:id>
      <title>${xml(p.name)}</title>
      <description>${xml(description)}</description>
      <link>${xml(link)}</link>
      <g:image_link>${xml(mainImage)}</g:image_link>
${extraImages ? extraImages + "\n" : ""}      <g:availability>in_stock</g:availability>
      <g:price>${price}</g:price>
      <g:brand>The Product</g:brand>
      <g:condition>new</g:condition>
      <g:google_product_category>Hardware &gt; Tools &gt; Measuring Tools &amp; Sensors &gt; Inclinometers</g:google_product_category>
    </item>`;
    })
    .join("\n");

  const xmlBody = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>${xml(SITE.name)}</title>
    <link>${xml(SITE.url)}</link>
    <description>${xml(SITE.tagline)}</description>
${itemsXml}
  </channel>
</rss>`;

  return new Response(xmlBody, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
