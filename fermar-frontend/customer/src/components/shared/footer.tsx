import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { oswald } from "@/components/shared/fonts";

export default function Footer() {
  return (
    <div className="w-full pt-10 lg:px-5 bg-primary  text-card">
      <div className="lg:container mx-auto">
        {/* Contents */}
        <div className="lg:grid grid-cols-4 ">
          {/* Company Info */}
          <div className="px-5 lg:px-0 mb-8 lg:mb-0 ">
            <h3 className={`${oswald.className} text-2xl font-medium mb-4`}>
              Company Info
            </h3>

            <p className="mb-1 text-sm">
              Fermar - Filipino Jeepney Parts Manufacturer
            </p>
            <p className="text-xs italic ml-1 mb-1">
              "Crafting durable stainless steel and metal parts for Pinoy
              jeepneys."
            </p>
            <p className="text-sm mb-1">
              14. Ma. Clara, Tugatog, Malabon City, Philippines
            </p>
            <p className="text-sm mb-1">+63 912-345-6789</p>
          </div>

          {/* Separator */}
          <Separator className="lg:hidden" />

          {/* Quick Links */}
          <div className="px-5 lg:px-0 my-8 lg:my-0 ">
            <h3 className={`${oswald.className} text-2xl font-medium mb-4`}>
              Quick Links
            </h3>

            <div className="flex flex-col text-sm leading-6">
              <Link href={"/"} className="hover:underline">
                Home
              </Link>
              <Link href={"/"} className="hover:underline">
                Shop
              </Link>
              <Link href={"/"} className="hover:underline">
                About Us
              </Link>
              <Link href={"/"} className="hover:underline">
                FAQs
              </Link>
              <Link href={"/"} className="hover:underline">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Separator */}
          <Separator className="lg:hidden" />

          {/* Customer Support */}
          <div className="px-5 lg:px-0 my-8 lg:my-0 ">
            <h3 className={`${oswald.className} text-2xl font-medium mb-4`}>
              Customer Support
            </h3>

            <div className="flex flex-col text-sm leading-6">
              <Link href={"/"} className="hover:underline">
                Order Tracking
              </Link>
              <Link href={"/"} className="hover:underline">
                Shipping & Delivery
              </Link>
              <Link href={"/"} className="hover:underline">
                Returns & Refunds
              </Link>
              <Link href={"/"} className="hover:underline">
                Terms & Conditions
              </Link>
              <Link href={"/"} className="hover:underline">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Separator */}
          <Separator className="lg:hidden" />

          {/* Socials */}
          <div className="px-5 lg:px-0 my-8 lg:my-0 ">
            <h3 className={`${oswald.className} text-2xl font-medium mb-4`}>
              Follow Us
            </h3>

            <div className="flex flex-col ">
              <p className="text-xs italic mb-2">
                Stay updated with our latest products and promos!
              </p>

              <div className="flex flex-col gap-1 text-sm">
                <Link href={"/"} className="flex gap-2">
                  <Facebook size={24} />
                  <span className="hover:underline">Facebook</span>
                </Link>
                <Link href={"/"} className="flex gap-2">
                  <Instagram />
                  <span className="hover:underline">Instagram</span>
                </Link>
                <Link href={"/"} className="flex gap-2">
                  <Twitter />
                  <span className="hover:underline">Twitter/X</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <Separator className="lg:hidden" />

        {/* Bottom details */}
        <div className="px-5 py-5 ">
          <p className="text-xs lg:text-center">
            © 2025 Fermar. All Rights Reserved.
          </p>

          <div className="lg:flex gap-5 justify-center  text-xs leading-5">
            <div className="flex gap-5">
              <Link href={"/"} className="hover:underline">
                Privacy policy
              </Link>
              <Link href={"/"} className="hover:underline">
                Terms of Service
              </Link>
              <Link href={"/"} className="hover:underline">
                Shopping Policy
              </Link>
            </div>
            <Link href={"/"}>support@fermar.com</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
