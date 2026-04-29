import React from "react";
import { cn } from "@/lib/utils";
import ItemCard from "@/components/ItemCard";
import { ItemWithTags } from "@/types/prisma";

interface ItemListProps {
  items: ItemWithTags[];
}

export default function ItemList ({
  items,
  className,
  ...props
}: React.ComponentProps<"div"> & ItemListProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-3 gap-5",
        className,
      )}
      {...props}
    >
      {items.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
