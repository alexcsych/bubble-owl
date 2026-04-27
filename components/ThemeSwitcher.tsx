"use client";

import { Monitor, Moon, Palette, Sun } from "lucide-react";
import { useTheme } from "next-themes";
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
import { useTranslations } from "next-intl";

export default function ThemeSwitcher () {
  const { theme, setTheme } = useTheme();
  const t = useTranslations("theme-selector");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>
          <Palette className='size-4' />
          {t("theme")}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-48'>
        <DropdownMenuLabel>{t("theme-select")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup onValueChange={setTheme} value={theme}>
          <DropdownMenuRadioItem value='light'>
            <Sun />
            {t("themes.light")}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='dark'>
            <Moon />
            {t("themes.dark")}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='system'>
            <Monitor />
            {t("themes.system")}
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
