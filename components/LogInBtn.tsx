"use client";

import { Button } from "@/components/ui/button";
import { CircleUserRound } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { AUTH_ROUTES } from "@/constants/auth";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function LogInBtn () {
  const t = useTranslations("header");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentParams = searchParams.toString();
  const isAuthPage = AUTH_ROUTES.some(route => pathname.includes(route));
  let loginHref = `/login`;

  if (!isAuthPage) {
    const fullPath = currentParams
      ? `${pathname}?${currentParams}`
      : `${pathname}`;

    const encodedPath = encodeURIComponent(fullPath);
    loginHref += `?callbackURL=${encodedPath}`;
  } else {
    const existingCallback = searchParams.get("callbackURL");
    if (existingCallback) {
      loginHref += `?callbackURL=${encodeURIComponent(existingCallback)}`;
    }
  }

  return (
    <Button asChild variant='outline'>
      <Link href={loginHref}>
        <CircleUserRound className='size-4' />
        {t("login")}
      </Link>
    </Button>
  );
}
