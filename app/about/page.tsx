import type { Metadata } from "next";
import Image from "next/image";
import { MotionSection } from "@/components/motion-section";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Crispy Crumbs and our homemade bakery story."
};

export default function AboutPage() {
  return (
    <MotionSection className="container-padded py-14">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <Image src="/images/hero-bakery.png" alt="Crispy Crumbs treats on granite" width={1400} height={900} className="rounded-lg object-cover shadow-soft" />
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-caramel">About Us</p>
          <h1 className="mt-3 font-display text-5xl font-bold">Homemade warmth, finished with a premium touch.</h1>
          <div className="mt-6 space-y-5 text-lg leading-8 text-chocolate/75">
            <p>Crispy Crumbs is the creation of Esther, whose love for baking and passion for fashion and design came together in the sweetest way.</p>
            <p>What started with a love for creating beautiful things in the kitchen grew into something a little bigger: a bakery where good food, creativity and beautiful design could all live under one roof.</p>
            <p>Esther&apos;s background in baking brings the heart and soul to Crispy Crumbs, while her eye for fashion and design brings a little extra thought to everything around it — from the treats themselves to the aprons made for the people who love being in the kitchen.</p>
            <p>Crispy Crumbs is, in many ways, the lovechild of those two passions: baking and design. It is about the joy of making something with your hands, sharing it with people you love, and adding a little beauty to the everyday.</p>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
