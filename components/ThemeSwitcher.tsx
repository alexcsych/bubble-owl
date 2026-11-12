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
import { usePostHog } from "posthog-js/react";

export default function ThemeSwitcher () {
  const { theme, setTheme } = useTheme();
  const t = useTranslations("theme-selector");
  const posthog = usePostHog();

  const handleThemeChange = (newTheme: string) => {
    posthog.capture('theme_changed', {
      new_theme: newTheme,
      previous_theme: theme || 'unknown'
    });

    setTheme(newTheme);
  };

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
        <DropdownMenuRadioGroup onValueChange={handleThemeChange} value={theme}>
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
