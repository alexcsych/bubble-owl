import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";
import { auth } from "@/lib/auth";

const handleI18nRouting = createMiddleware(routing);

export default async function proxy (request: NextRequest) {
  const response = handleI18nRouting(request);

  if (response.ok) {
    const [, locale, ...rest] = new URL(
      response.headers.get("x-middleware-rewrite") || request.url,
    ).pathname.split("/");
    const pathname = "/" + rest.join("/");

    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (session && (pathname === "/login" || pathname === "/signup")) {
      return NextResponse.redirect(new URL(`/${locale}`, request.url));
    }
  }

  return response;
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
