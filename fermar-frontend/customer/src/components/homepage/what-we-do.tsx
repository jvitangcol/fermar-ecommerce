import Image from "next/image";

import { oswald } from "@/components/shared/fonts";
import {
  firstWhatWeDo,
  secondWhatWedo,
  thirdWhatWeDo,
} from "@/components/homepage/index";

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
          {firstWhatWeDo.map((first) => {
            return (
              <div key={first.title} className="md:grid grid-cols-2 mb-3">
                <Image
                  src={first.src}
                  alt={first.title}
                  className="h-[200px] md:h-[250px] lg:h-[400px] w-auto mx-auto"
                />
                <div className="md:flex flex-col justify-center md:px-7">
                  <h3
                    className={`${oswald.className} text-2xl lg:text-3xl text-center  font-semibold mb-2`}
                  >
                    {first.title}
                  </h3>
                  <p className="text-center lg:w-[500px] mx-auto">
                    {first.description}
                  </p>
                </div>
              </div>
            );
          })}

          {secondWhatWedo.map((second) => {
            return (
              <div key={second.title} className="md:grid grid-cols-2 mb-3">
                <Image
                  src={second.src}
                  alt={second.title}
                  className="h-[200px] md:h-[250px] lg:h-[400px] w-auto mx-auto md:order-2"
                />
                <div className="md:flex flex-col justify-center  md:px-7 md:order-1">
                  <h3
                    className={`${oswald.className} text-2xl lg:text-3xl text-center font-semibold mb-2`}
                  >
                    {second.title}
                  </h3>
                  <p className="text-center lg:w-[500px] mx-auto">
                    {second.description}
                  </p>
                </div>
              </div>
            );
          })}

          {thirdWhatWeDo.map((third) => {
            return (
              <div key={third.title} className="md:grid grid-cols-2 mb-3">
                <Image
                  src={third.src}
                  alt={third.title}
                  className="h-[200px] md:h-[250px] lg:h-[400px] w-auto mx-auto "
                />
                <div className="md:flex flex-col justify-center md:px-7 ">
                  <h3
                    className={`${oswald.className} text-2xl lg:text-3xl text-center  font-semibold mb-2`}
                  >
                    {third.title}
                  </h3>
                  <p className="text-center lg:w-[500px] mx-auto">
                    {third.description}
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
