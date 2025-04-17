import { ContactUsForm } from "@/components/contact-us/contact-us-form";
import { ContactUsDetails } from "@/components/contact-us/contact-us-details";
import { oswald } from "@/components/shared/fonts";

export default function ContactUsPage() {
  return (
    <main className="mt-24">
      <h1
        className={`${oswald.className} text-4xl text-primary text-center font-bold  mb-2.5 `}
      >
        Get in touch
      </h1>
      <p className="text-center text-xs text-muted-foreground mb-6 ">
        We are here for you! How can we help?{" "}
      </p>

      <div className="lg:container mx-auto lg:grid grid-cols-2 mb-10">
        <div className="lg:order-2">
          <ContactUsForm />
        </div>
        <div>
          <ContactUsDetails />
        </div>
      </div>
    </main>
  );
}
