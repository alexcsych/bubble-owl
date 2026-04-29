"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Tag } from "@/prisma/generated/client";
import { Button } from "@/components/ui/button";
import { Utensils, Zap, Leaf } from "lucide-react";
import FilterDropdown from "@/components/FilterDropdown";

interface FilterData {
  statuses: Tag[];
  flavors: Tag[];
  dietary: Tag[];
}

interface FilterBarProps {
  activeStatus: string;
  activeFlavor: string;
  activeDietary: string;
  filtersData: FilterData;
}

export default function FilterBar ({
  activeStatus,
  activeFlavor,
  activeDietary,
  filtersData,
}: FilterBarProps) {
  const t = useTranslations("filters");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const currentValues = params.get(key)?.split(",") || [];

    if (value === "all") {
      params.delete(key);
    } else {
      let newValues;
      if (currentValues.includes(value)) {
        newValues = currentValues.filter(v => v !== value);
      } else {
        newValues = [...currentValues, value];
      }

      if (newValues.length > 0) {
        params.set(key, newValues.join(","));
      } else {
        params.delete(key);
      }
    }

    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const isAnyFilterActive = activeStatus || activeFlavor || activeDietary;

  return (
    <div className='flex flex-wrap items-center gap-3'>
      <FilterDropdown
        label={t("status")}
        value={activeStatus}
        items={filtersData.statuses}
        onValueChange={val => updateFilter("status", val)}
        icon={Zap}
        allLabel={t("all")}
      />
      <FilterDropdown
        label={t("flavor")}
        value={activeFlavor}
        items={filtersData.flavors}
        onValueChange={val => updateFilter("flavor", val)}
        icon={Utensils}
        allLabel={t("all")}
      />
      <FilterDropdown
        label={t("dietary")}
        value={activeDietary}
        items={filtersData.dietary}
        onValueChange={val => updateFilter("dietary", val)}
        icon={Leaf}
        allLabel={t("all")}
      />
      {isAnyFilterActive && (
        <Button
          variant='ghost'
          size='sm'
          onClick={() => router.push(pathname)}
          className='h-9'
        >
          {t("reset")}
        </Button>
      )}
    </div>
  );
}
