"use client";

// packages
import Link from "next/link";

// icons
import { MenuIcon, User, ShoppingCart } from "lucide-react";

// ShadCN
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Links
import { links } from "@/components/shared/link";

// fonts
import { oswald } from "@/components/shared/fonts";

export default function MobileNav() {
  return (
    <div className="sm:hidden flex items-center gap-2">
      <div className=" flex gap-2 items-center ">
        <Link href={"/"}>
          <User />
        </Link>
        <Link href={"/"}>
          <ShoppingCart />
        </Link>
      </div>

      <Sheet>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent
          className={`${oswald.className} bg-primary text-primary-foreground`}
        >
          <nav className="flex flex-col mt-11 ">
            {links.map((link) => {
              return (
                <Link
                  href={link.href}
                  key={link.name}
                  className="mb-3 px-5 font-light"
                >
                  <span>{link.name.toUpperCase()}</span>
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
