"use client";

import { authClient } from "@/lib/auth-client";
import { Link, useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import LogInBtn from "@/components/LogInBtn";

export default function AuthButton () {
  const t = useTranslations("header");
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  if (isPending) return <Skeleton className='size-8 rounded-full' />;

  if (!session) {
    return <LogInBtn />;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage
            src={session.user.image || undefined}
            alt={session.user.name}
            referrerPolicy='no-referrer'
          />
          <AvatarFallback>
            {session.user.name?.charAt(0).toUpperCase() || "U"}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel className='truncate'>
          {session.user.name}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href='/profile'>{t("profile")}</Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          className='text-destructive'
          onClick={() =>
            authClient.signOut({
              fetchOptions: {
                onSuccess: () => {
                  router.push("/login");
                },
              },
            })
          }
        >
          {t("logout")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
