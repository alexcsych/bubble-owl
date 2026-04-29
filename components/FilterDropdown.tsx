"use client";

import { Tag } from "@/prisma/generated/client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, LucideIcon } from "lucide-react";
import { useLocale } from "next-intl";

interface FilterDropdownProps {
  label: string;
  value: string;
  items: Tag[];
  onValueChange: (value: string) => void;
  icon: LucideIcon;
  allLabel: string;
}

export default function FilterDropdown ({
  label,
  value,
  items,
  onValueChange,
  icon: Icon,
  allLabel,
}: FilterDropdownProps) {
  const locale = useLocale();
  const activeSlugs = value ? value.split(",") : [];
  const activeLabels = items
    .filter(i => activeSlugs.includes(i.slug))
    .map(i => i[`name_${locale}` as keyof Tag])
    .join(", ");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='sm' className='h-9 gap-2'>
          <Icon className='size-4 opacity-70' />
          <span className='text-sm truncate max-w-37.5'>
            {activeLabels || label}
          </span>
          <ChevronDown className='size-4 opacity-50' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuCheckboxItem
          checked={activeSlugs.length === 0}
          onSelect={e => {
            e.preventDefault();
            onValueChange("all");
          }}
        >
          {allLabel}
        </DropdownMenuCheckboxItem>

        <DropdownMenuSeparator />

        {items.map(tag => (
          <DropdownMenuCheckboxItem
            key={tag.id}
            checked={activeSlugs.includes(tag.slug)}
            onSelect={e => {
              e.preventDefault();
              onValueChange(tag.slug);
            }}
          >
            {tag[`name_${locale}` as keyof Tag] as string}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
