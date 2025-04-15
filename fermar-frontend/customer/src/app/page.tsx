// components
import { HeroSection } from "@/components/homepage/hero";
import { AboutSection } from "@/components/homepage/about";
import { WhyChooseFermarSection } from "@/components/homepage/why-choose-fermar";
import { WhatWeDo } from "@/components/homepage/what-we-do";
import { FrequentlyAskQuestions } from "@/components/homepage/faqs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <WhyChooseFermarSection />
      <WhatWeDo />
      <FrequentlyAskQuestions />
    </main>
  );
}
