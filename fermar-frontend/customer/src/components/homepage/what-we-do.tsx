import Image from "next/image";

import { oswald } from "@/components/shared/fonts";
import { whatWeDo } from "@/components/homepage/index";

export function WhatWeDo() {
  return (
    <section className="px-5 py-10">
      <div className="lg:container mx-auto">
        <h1
          className={`${oswald.className} text-4xl lg:text-5xl font-semibold text-center mb-6`}
        >
          What We Do
        </h1>

        <div className="">
          {whatWeDo.map((data) => {
            return (
              <div key={data.title} className="md:grid grid-cols-2 mb-3">
                <Image
                  src={data.src}
                  alt={data.title}
                  className="h-[200px] md:h-[250px] lg:h-[400px] w-auto mx-auto"
                />
                <div className="md:flex flex-col justify-center md:px-7">
                  <h3
                    className={`${oswald.className} text-2xl lg:text-3xl text-center md:text-left font-semibold mb-2`}
                  >
                    {data.title}
                  </h3>
                  <p className="text-center md:text-left lg:w-[500px]">
                    {data.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
