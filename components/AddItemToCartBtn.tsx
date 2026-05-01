"use client";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";

interface AddItemToCartBtnProps {
  itemId: number;
  text: string;
  iconClassName?: string;
}

export default function AddItemToCartBtn ({
  itemId,
  text,
  className,
  iconClassName,
}: React.ComponentProps<"div"> & AddItemToCartBtnProps) {
  const increaseOrAddItem = useCartStore(state => state.increaseOrAddItem);

  const handleAddClick = async () => {
    await increaseOrAddItem(itemId);
  };

  return (
    <Button variant='outline' className={className} onClick={handleAddClick}>
      {text}
      <ShoppingCart className={cn("size-4", iconClassName)} />
    </Button>
  );
}
