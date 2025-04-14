// package
import Link from "next/link";

// components
import MainNav from "@/components/shared/main-nav";
import MobileNav from "@/components/shared/mobile-nav";

// icons
import { User, ShoppingCart } from "lucide-react";

// fonts
import { oswald } from "@/components/shared/fonts";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 h-16 w-full px-5 z-50 bg-primary text-primary-foreground">
      <div className="flex items-center justify-between my-3 xl:container mx-auto ">
        <Link href={"/"}>
          <span className={`${oswald.className} text-3xl font-bold`}>
            Fermar
          </span>
        </Link>

        <MainNav />
        <MobileNav />

        <div className="hidden sm:block">
          <div className="flex items-center gap-2">
            <Link href={"/"}>
              <User />
            </Link>
            <Link href={"/"}>
              <ShoppingCart />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
