"use client";

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { MobileMenu } from "./mobile-menu";
import favicon from "@/assets/favicon.ico";
import { UserDropdown } from "./user-dropdown";
import { ProtectedNavLink } from "./nav-link-protected";
import { Button } from "@/components/shadcn/ui/button";
import { UserIcon } from "lucide-react";
import { authClient } from "@/server/utils/auth-client";

export default function Navbar() {
  // use client auth hook to get the user
  const session = authClient.useSession();
  const user = session.data?.user;

  return (
    <header className="fixed w-full border-b bg-background">
      <div className="mx-4 flex items-center h-16 justify-between px-4">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img src={favicon.src} alt="Avengerz" className="h-12 w-12" />
          </Link>
        </div>

        {/* Middle: Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium transition-colors h-full">
          <Link href="/">Home</Link>
          <ProtectedNavLink href="/reviews" user={user}>
            Reviews
          </ProtectedNavLink>
          <ProtectedNavLink href="/appointments" user={user}>
            Appointments
          </ProtectedNavLink>
        </nav>

        {/* Right: Theme Toggle + Mobile Menu */}
        <div className="flex items-center gap-2">
          <ModeToggle />
          {user ? (
            <UserDropdown user={user} />
          ) : (
            // If no user, show login button (or SignInFirstModal)
            <Link href="/sign-in" className="text-sm font-medium ">
              <Button>
                <UserIcon />
                <span>Log in</span>
              </Button>
            </Link>
          )}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
