import type { Metadata } from "next";
import Image from "next/image";
import { MotionSection } from "@/components/motion-section";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about SweetlyBaked and our homemade bakery story."
};

export default function AboutPage() {
  return (
    <MotionSection className="container-padded py-14">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <Image src="/images/hero-bakery.png" alt="SweetlyBaked treats on granite" width={1400} height={900} className="rounded-lg object-cover shadow-soft" />
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-caramel">About Us</p>
          <h1 className="mt-3 font-display text-5xl font-bold">Homemade warmth, finished with a premium touch.</h1>
          <p className="mt-6 leading-8 text-chocolate/75">Our passion is creating baked goods that bring people together. SweetlyBaked is built around slow baking, rich flavours, and beautiful presentation for every order.</p>
          <p className="mt-4 leading-8 text-chocolate/75">From cinnamon rolls to custom cakes, each bake is made to feel personal, generous, and worthy of the table it lands on.</p>
        </div>
      </div>
    </MotionSection>
  );
}
