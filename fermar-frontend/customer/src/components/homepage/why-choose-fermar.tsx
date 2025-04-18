import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { whyChooseFermar } from "@/components/homepage/index";
import { oswald } from "@/components/shared/fonts";

export function WhyChooseFermarSection() {
  return (
    <section className="px-5 py-10 rounded-t-4xl">
      <div className="lg:container mx-auto">
        <h1
          className={`${oswald.className} text-4xl font-semibold text-center mb-5`}
        >
          Why Choose Fermar?
        </h1>
        <div className="flex flex-col md:flex-row flex-wrap lg:grid grid-cols-3  gap-3 justify-center items-center ">
          {whyChooseFermar.map((data) => {
            return (
              <div className="lg:mx-auto ">
                <Card
                  key={data.title}
                  className="pt-0 w-[300px] h-[320px] xl:w-[400px] xl:h-[375px] gap-3 pb-3"
                >
                  <CardHeader className="px-0">
                    <Image
                      alt={data.title}
                      src={data.src}
                      className="rounded-t-xl"
                    />
                  </CardHeader>
                  <CardContent className="px-3">
                    <CardTitle className="mb-2">{data.title}</CardTitle>
                    <CardDescription>{data.description}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
