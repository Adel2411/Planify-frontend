import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("accessToken"); // Retrieve the JWT from cookies
  const { pathname } = req.nextUrl;

  // Define public and protected routes
  const publicRoutes = ["/", "/login", "/register"];
  const protectedRoutes = ["/dashboard/"];

  // If the user is authenticated and visits public routes, redirect to dashboard
  if (token && publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard/businesses", req.url));
  }

  // If the user is not authenticated and visits protected routes, redirect to login
  if (
    !token &&
    (protectedRoutes.includes(pathname) || pathname.startsWith("/dashboard/"))
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

// Apply middleware to routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
