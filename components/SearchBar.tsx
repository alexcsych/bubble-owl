"use client";

import { useTranslations } from "next-intl";
import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";

export default function SearchBar ({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const t = useTranslations("header");

  return (
    <InputGroup
      className={cn("w-full max-w-sm bg-background", className)}
      {...props}
    >
      <InputGroupInput placeholder={t("search-placeholder")} />
      <InputGroupAddon align='inline-end'>
        <InputGroupButton size='sm' variant='default'>
          {t("btn-search")}
          <SearchIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}
