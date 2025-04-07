"use client";

// packages
import { usePathname } from "next/navigation";
import Link from "next/link";

// shadcn
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function formatSegment(segment: string) {
  return segment.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}

export function DynamicBreadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const isLast = index === segments.length - 1;
    const label = formatSegment(segment);

    return (
      <BreadcrumbItem key={href}>
        {isLast ? (
          <BreadcrumbPage>{label}</BreadcrumbPage>
        ) : (
          <BreadcrumbLink asChild>
            <Link href={href}>{label}</Link>
          </BreadcrumbLink>
        )}
      </BreadcrumbItem>
    );
  });

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.flatMap((item, index) => [
          item,
          index !== breadcrumbs.length - 1 && (
            <BreadcrumbSeparator key={`sep-${index}`} />
          ),
        ])}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
