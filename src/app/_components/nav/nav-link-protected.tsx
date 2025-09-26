"use client";

import { ReactNode } from "react";
import { SignInFirstModal } from "@/components/modal/sign-in-first";
import { User } from "@/server/auth";
import Link from "next/link";

interface ProtectedNavLinkProps {
  href: string;
  children: ReactNode;
  user?: User; // pass the user from server session
}

export function ProtectedNavLink({
  href,
  children,
  user,
}: ProtectedNavLinkProps) {
  if (user) {
    return <Link href={href}>{children}</Link>;
  }
  return <SignInFirstModal>{children}</SignInFirstModal>;
}
