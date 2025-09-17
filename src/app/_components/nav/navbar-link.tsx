"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn("text-sm font-medium transition-colors hover:text-primary")}
    >
      {children}
    </Link>
  );
}
