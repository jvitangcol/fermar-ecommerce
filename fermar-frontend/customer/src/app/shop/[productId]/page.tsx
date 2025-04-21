import Image from "next/image";
import { images } from "@/components/homepage";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function ProductDetails() {
  return (
    <section className="mt-[84px] mb-10 px-5">
      <div className="lg:container mx-auto">
        <div className="lg:grid grid-cols-2 gap-5">
          <div className="border border-red-500">Image</div>
          <div className="flex flex-col gap-4">
            <div className="">
              <h1 className="text-2xl lg:text-3xl">
                Stainless Steel Pedal Set
              </h1>
              <p className="text-sm lg:text-base text-muted-foreground ">
                Product category: Jeepney parts
              </p>
            </div>

            <p className="text-lg lg:text-2xl">₱9, 999</p>

            {/* Buttons */}
            <div className="flex flex-col gap-2 md:grid grid-cols-2">
              <Button>Add to Cart</Button>
              <Button variant={"outline"} className="border border-primary">
                Wishlist
              </Button>
            </div>

            {/* Descriptions */}

            <div className="flex flex-col gap-4">
              <p className="">
                Enhance your jeepney’s durability with our high-quality
                stainless steel pedal set.Designed for maximum grip and
                long-lasting performance, this pedal set ensures a smooth and
                safe driving experience. Crafted from premium stainless steel,
                it resists rust and corrosion, making it ideal for daily use.
              </p>

              <ul className="list-disc">
                <li className="ml-6 ">Heavy-duty stainless steel</li>
                <li className="ml-6">Anti-slip surface for better control</li>
                <li className="ml-6">Easy installation with universal fit</li>
              </ul>

              <Collapsible>
                <CollapsibleTrigger className="underline text-sm mb-2">
                  View Product Details
                </CollapsibleTrigger>
                <CollapsibleContent>
                  Yes. Free to use for personal and commercial projects. No
                  attribution required.
                </CollapsibleContent>
              </Collapsible>

              <Accordion type="single" collapsible>
                <AccordionItem
                  value="item-1"
                  className="border-b-2 border-primary"
                >
                  <AccordionTrigger className="lg:text-xl">
                    Free Delivery and Returns
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="lg:text-xl">
                    Reviews
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
