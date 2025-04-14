import { oswald } from "@/components/shared/fonts";

export function AboutSection() {
  return (
    <section className="px-5 py-10">
      <div className="lg:container mx-auto">
        <h1
          className={`${oswald.className} mb-6 text-center font-semibold text-primary dynamic-title`}
        >
          About Us - Fermar
        </h1>

        {/* Story */}
        <div className="mb-8 border">
          <h3 className="text-2xl lg:text-3xl lg:text-center lg:w-[476px] lg:mx-auto font-medium mb-4">
            Crafting Quality, Powering the Future of Pinoy Jeepneys
          </h3>

          <p className="lg:w-[800px] lg:mx-auto ">
            At Fermar, we take pride in manufacturing high-quality metal parts
            for Filipino jeepneys, ensuring durability, strength, and
            performance on the road. Our expertise in metal molding and
            fabrication allows us to produce precision-made components that meet
            industry standards, helping jeepney owners and operators maintain
            their vehicles efficiently.
          </p>
        </div>

        {/* Our Mission */}
        <div className="">
          <h3 className="text-2xl font-medium text-muted-foreground mb-4">
            Our Mission
          </h3>

          <div className="xl:grid grid-cols-2 gap-3 ">
            <p
              className={`${oswald.className} text-3xl font-semibold mb-8 xl:w-[600px] lg:text-5xl`}
            >
              Providing durable metal parts to sustain and modernize Filipino
              jeepneys.
            </p>
            {/* Cards */}
            <div className="flex  gap-6 lg:gap-8">
              <div>
                <p
                  className={`${oswald.className} text-[28px] lg:text-4xl font-semibold mb-2`}
                >
                  40+
                </p>
                <span className="text-muted-foreground">Years Experience</span>
              </div>
              <div>
                <p
                  className={`${oswald.className} text-[28px] lg:text-4xl font-semibold mb-2`}
                >
                  115
                </p>
                <span className="text-muted-foreground">Happy Client</span>
              </div>
              <div>
                <p
                  className={`${oswald.className} text-[28px] lg:text-4xl font-semibold mb-2`}
                >
                  350+
                </p>
                <span className="text-muted-foreground">Project Finished</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
