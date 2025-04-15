import Image from "next/image";

// shadCN
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { whyChooseFermar } from "@/components/homepage/index";
import { oswald } from "@/components/shared/fonts";
import { Card, CardContent } from "../ui/card";

export function WhyChooseFermarSection() {
  return (
    <section className="px-5 py-10 bg-primary rounded-t-4xl">
      <div className="lg:container mx-auto border border-red-500">
        <h1
          className={`${oswald.className} text-4xl font-semibold text-primary-foreground text-center mb-5`}
        >
          Why Choose Fermar?
        </h1>

        <Carousel>
          <CarouselContent>
            {whyChooseFermar.map((data) => (
              <CarouselItem key={data.title}>
                <div>
                  <Card className="bg-primary border text-primary-foreground">
                    <CardContent className="p-0 border border-red-500">
                      <Image
                        src={data.src}
                        alt={data.title}
                        className="object-cover object-center"
                      />

                      {/* Content */}
                      <div className=" z-10 flex flex-col  h-full ">
                        <p>{data.title}</p>
                        <p>{data.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
