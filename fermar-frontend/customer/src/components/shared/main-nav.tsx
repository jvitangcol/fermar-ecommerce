import Link from "next/link";
import { links } from "@/components/shared/link";

export default function MainNav() {
  return (
    <div className="hidden sm:block">
      <nav className="flex items-center gap-8">
        {links.map((link) => {
          return (
            <Link href={link.href} key={link.name} className="">
              {link.name.toUpperCase()}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
