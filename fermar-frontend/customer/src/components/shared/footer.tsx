import { oswald } from "@/components/shared/fonts";

export default function Footer() {
  return (
    <div className="px-5 py-10 bg-primary text-primary-foreground ">
      <div className="lg:container mx-auto ">
        {/* Company Info */}
        <div className="border border-red-500">
          <h3 className={`${oswald.className} text-2xl font-medium mb-4`}>
            Company Info
          </h3>

          <div>
            <p>Fermar - Filipino Jeepney Parts Manufacturer</p>
            <p>
              "Crafting durable stainless steel and metal parts for Pinoy
              jeepneys."
            </p>
            <p>14. Ma. Clara, Tugatog, Malabon City, Philippines</p>
            <p>+63 912-345-6789</p>
          </div>
        </div>
      </div>
    </div>
  );
}
