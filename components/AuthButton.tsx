"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Link, useRouter } from "@/i18n/navigation";
import { CircleUserRound } from "lucide-react";
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

export default function AuthButton () {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const t = useTranslations("header");

  if (isPending) return <Skeleton className='size-8 rounded-full' />;

  if (!session) {
    return (
      <Button asChild variant='outline'>
        <Link href='/login'>
          <CircleUserRound className='size-4' />
          {t("login")}
        </Link>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src={session.user.image || undefined} />
          <AvatarFallback>{session.user.name[0]}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel>{session.user.name}</DropdownMenuLabel>
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
