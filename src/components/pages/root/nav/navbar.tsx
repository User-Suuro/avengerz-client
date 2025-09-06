"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/pages/root/personalization/mode-toggle";
import { NavLink } from "@/components/pages/root/nav/navbar-link";
import { MobileMenu } from "@/components/pages/root/nav/mobile-menu";
import favicon from "@/assets/favicon.ico"; // Import from assets

export default function Navbar() {
  return (
    <header className="fixed w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src={favicon.src} // if placed in public/assets
              alt="Avengerz"
              className="h-8 w-8"
            />
          </Link>
        </div>

        {/* Middle: Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/reviews">Reviews</NavLink>
          <NavLink href="/appointments">Appointments</NavLink>
        </nav>

        {/* Right: Theme Toggle + Mobile Menu */}
        <div className="flex items-center gap-2">
          <ModeToggle />
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
