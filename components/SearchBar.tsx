"use client";

import { useTranslations } from "next-intl";
import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

export default function SearchBar () {
  const t = useTranslations("header");

  return (
    <InputGroup className='w-full max-w-sm bg-background'>
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
