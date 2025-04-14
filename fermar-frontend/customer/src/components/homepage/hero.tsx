// package
import Image from "next/image";

// picture
import hero from "@/components/homepage/hero.jpg";
import { Button } from "@/components/ui/button";

// shadCN

export function HeroSection() {
  return (
    <section className="relative h-screen w-full mt-16">
      {/* background image */}
      <Image
        src={hero}
        alt="Hero image"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-primary-foreground px-4 ">
        <h1 className="text-[28px] md:text-4xl lg:text-5xl font-bold mb-4 w-[400px] md:w-[475px] lg:w-[675px]">
          Precision-Made Metal Parts for the Iconic Pinoy Jeepney
        </h1>
        <Button className="bg-primary-foreground text-primary hover:text-primary-foreground">
          Shop Now
        </Button>
      </div>
    </section>
  );
}
