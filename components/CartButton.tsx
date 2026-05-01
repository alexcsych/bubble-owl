"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Cart from "@/components/Cart";
import { ShoppingCart } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CartButton () {
  const t = useTranslations("cart-drawer");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>
          <ShoppingCart className='size-4' />
          {t("cart")}
        </Button>
      </DialogTrigger>
      <Cart />
    </Dialog>
  );
}
