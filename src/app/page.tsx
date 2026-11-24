import { Header } from "@/components/Header";
import { ProductHero } from "@/components/ProductHero";
import { Features } from "@/components/Features";
import { Comparison } from "@/components/Comparison";
import { SpecsSection } from "@/components/SpecsSection";
import { Reviews } from "@/components/Reviews";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { StickyBar } from "@/components/StickyBar";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col relative z-10">
      <Header />
      <ProductHero />
      <Features />
      <Comparison />
      <SpecsSection />
      <Reviews />
      <FaqSection />
      <Footer />
      <StickyBar />
    </main>
  );
}
