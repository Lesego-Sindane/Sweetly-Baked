import { AboutPreview, FAQNewsletter, FeaturedProducts, Testimonials } from "@/components/home-sections";
import { Hero } from "@/components/hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <AboutPreview />
      <Testimonials />
      <FAQNewsletter />
    </>
  );
}
