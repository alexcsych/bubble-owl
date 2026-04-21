"use client";

import { useRouter } from "@/i18n/navigation";
import { User } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

export default function LogInBtn () {
  const router = useRouter();
  const t = useTranslations("header");

  return (
    <Button variant='outline' onClick={() => router.push("/login")}>
      <User className='h-4 w-4' />
      {t("login")}
    </Button>
  );
}
