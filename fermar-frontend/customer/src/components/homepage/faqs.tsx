import { oswald } from "@/components/shared/fonts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FrequentlyAskQuestions() {
  return (
    <section className="px-5 py-10 ">
      <div className="lg:container mx-auto ">
        <h1
          className={`${oswald.className} text-4xl lg:text-5xl text-center font-semibold mb-6`}
        >
          FAQs
        </h1>

        <div className="">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-primary">
              <AccordionTrigger>
                What types of jeepney parts do you sell?
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-3">
                  We manufacture and sell various metal parts for Pinoy
                  jeepneys, including{" "}
                  <span className="font-bold">
                    pedal sets, flat bars, push rods, and hood lock vipers
                  </span>
                  .
                </p>
                <p>
                  Our products are made from high-quality stainless steel and
                  metal to ensure durability and reliability.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b border-primary">
              <AccordionTrigger>
                Do you accept custom orders for metal parts?
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-3">
                  Yes! We specialize in{" "}
                  <span className="font-bold">
                    custom metal molding and fabrication
                  </span>
                  .
                </p>
                <p>
                  If you need a specific part or a bulk order, feel free to
                  <span>contact us</span>, and we’ll work with you to meet your
                  requirements.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b border-primary">
              <AccordionTrigger>How can I place an order?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-3">
                  You can{" "}
                  <span className="font-bold">browse our product catalog</span>{" "}
                  and add items to your cart.
                </p>
                <p>
                  Once ready, proceed to checkout and follow the payment
                  instructions. If you need assistance, our support team is
                  happy to help!
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-b border-primary">
              <AccordionTrigger>
                What payment methods do you accept?
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-3">
                  We accept{" "}
                  <span className="font-bold">
                    bank transfers, GCash, and major credit/debit cards
                  </span>
                  .
                </p>
                <p>
                  Secure payment options are available to ensure a smooth
                  transaction.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-b border-primary">
              <AccordionTrigger>
                Do you offer shipping and delivery?
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-3">
                  Yes! We offer{" "}
                  <span className="font-bold">nationwide delivery</span> across
                  the Philippines.
                </p>
                <p>
                  Shipping fees and estimated delivery times will be calculated
                  at checkout based on your location.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
