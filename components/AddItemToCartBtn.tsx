"use client";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ShoppingCart, Check } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Cart from "@/components/Cart";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("cart-drawer");
  const items = useCartStore(state => state.items);
  const increaseOrAddItem = useCartStore(state => state.increaseOrAddItem);

  const isInCart = items.some(i => i.itemId === itemId);

  const handleAddClick = async (e: React.MouseEvent) => {
    if (!isInCart) {
      e.preventDefault();
      e.stopPropagation();
      await increaseOrAddItem(itemId);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={isInCart ? "default" : "outline"}
          className={cn("gap-2", className)}
          onClick={handleAddClick}
        >
          {isInCart ? (
            <>
              {t("in-cart")}
              <Check className={cn("size-4", iconClassName)} />
            </>
          ) : (
            <>
              {text}
              <ShoppingCart className={cn("size-4", iconClassName)} />
            </>
          )}
        </Button>
      </DialogTrigger>
      <Cart />
    </Dialog>
  );
}
