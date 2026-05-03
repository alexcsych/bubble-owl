"use client";

import useSWR, { mutate } from "swr";
import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CartItem from "@/components/CartItem";
import Loader from "@/components/Loader";
import CheckoutBtn from "@/components/CheckoutBtn";
import { useTranslations } from "next-intl";
import { useCartStore } from "@/store/useCartStore";
import { ItemWithTagsAndQuantity } from "@/types/prisma";
import { authClient } from "@/lib/auth-client";
import { Separator } from "./ui/separator";
import React from "react";

interface CartItem {
  itemId: number;
  quantity: number;
}

const syncFetcher = async ([url, localItems]: [string, CartItem[]]): Promise<
  ItemWithTagsAndQuantity[]
> => {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ localItems }),
  });
  return res.json();
};

export default function Cart () {
  const t = useTranslations("cart-drawer");
  const localItems = useCartStore(state => state.items);
  const setItems = useCartStore(state => state.setItems);
  const { data: session, isPending } = authClient.useSession();
  const shouldFetch = !isPending;

  const {
    data: items,
    isLoading,
    error,
  } = useSWR(
    shouldFetch ? ["/api/cart/fetchAndSyncCart", localItems] : null,
    syncFetcher,
    {
      revalidateOnFocus: false,
      keepPreviousData: true,
      revalidateIfStale: true,
      onSuccess: data => {
        if (session && data) {
          const simplifiedItems = data.map((item: ItemWithTagsAndQuantity) => ({
            itemId: item.id,
            quantity: item.quantity,
          }));
          setItems(simplifiedItems);
        }
      },
    },
  );

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{t("title")}</DialogTitle>
        <DialogDescription>{t("description")}</DialogDescription>
      </DialogHeader>
      <div className='flex flex-col gap-2.5 no-scrollbar max-h-[50vh] overflow-y-auto'>
        {(isLoading || isPending) && (
          <div className='absolute inset-0 z-10 flex items-center justify-center bg-background/30'>
            <Loader />
          </div>
        )}
        {error ? (
          <div className='flex flex-col items-center gap-2 py-4'>
            <p className='text-center text-destructive'>
              {t("failed-to-load-cart")}
            </p>
            <Button
              variant='outline'
              onClick={() => mutate(["/api/cart/fetchAndSync", localItems])}
              className='text-sm hover:text-primary'
            >
              {t("try-again")}
            </Button>
          </div>
        ) : !items || items.length === 0 ? (
          !isLoading && (
            <p className='text-center text-muted-foreground'>
              {t("cart-empty")}
            </p>
          )
        ) : (
          items.map((item: ItemWithTagsAndQuantity, index) => (
            <React.Fragment key={item.id}>
              <CartItem item={item} />
              {index < items.length - 1 && <Separator />}
            </React.Fragment>
          ))
        )}
      </div>
      <DialogFooter className='sm:justify-between gap-2.5'>
        <DialogClose asChild>
          <Button
            variant='outline'
            className={`${isLoading || isPending ? "pointer-events-none" : ""}`}
          >
            {t("continue-shopping")}
          </Button>
        </DialogClose>
        <CheckoutBtn
          items={items}
          isLoading={isLoading}
          isPending={isPending}
          isAnonym={!session}
        />
      </DialogFooter>
    </DialogContent>
  );
}
