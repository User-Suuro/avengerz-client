"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/shadcn/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/shadcn/ui/sheet";
import { NavLink } from "@/components/pages/root/nav/navbar-link";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-48">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-8 p-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/reviews">Reviews</NavLink>
          <NavLink href="/appointments">Appointments</NavLink>
        </div>
      </SheetContent>
    </Sheet>
  );
}
