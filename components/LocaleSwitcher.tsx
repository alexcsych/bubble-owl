"use client";

import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Locale } from "@/types/locale";

export default function LocaleSwitcher () {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("language-selector");

  const switchLocale = (newLocale: string) => {
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale, scroll: false });
      router.refresh();
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>
          <Languages className='size-4' />
          {t("language")}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-48'>
        <DropdownMenuLabel>{t("language-select")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup onValueChange={switchLocale} value={locale}>
          <DropdownMenuRadioItem value='en'>
            <span className='flex items-center gap-2'>
              <span>🇺🇸</span>
              <span>{t("languages.english")}</span>
            </span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='uk'>
            <span className='flex items-center gap-2'>
              <span>uk</span>
              <span>{t("languages.ukrainian")}</span>
            </span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='ru'>
            <span className='flex items-center gap-2'>
              <span>ru</span>
              <span>{t("languages.russian")}</span>
            </span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
