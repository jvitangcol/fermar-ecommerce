import Image from "next/image";

import customerService from "@/assets/customer-service.png";
import { MapPin, Mail, Phone } from "lucide-react";

export function ContactUsDetails() {
  return (
    <section className="px-5 bg-primary text-primary-foreground rounded-r-3xl mb-10 lg:h-full">
      <div className="py-8">
        <div className="sm:grid grid-cols-2 lg:grid-cols-1 items-center gap-3 ">
          <Image
            src={customerService}
            alt="customer service image"
            className="h-[170px] sm:h-[250px] lg:h-[300px] w-auto mx-auto  mb-7 sm:mb-0"
          />

          <div className="flex flex-col gap-2  ">
            <div className="flex gap-2 items-center">
              <MapPin />
              <p>address here</p>
            </div>
            <div className="flex gap-2 items-center">
              <Mail />
              <p>email_here@email.com</p>
            </div>
            <div className="flex gap-2 items-center">
              <Phone />
              <p>+63-0912-345-6789</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
