import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const response = NextResponse.next();

export function middleware(req: NextRequest) {
  response.headers.set("x-middleware-processed", "true");
  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
