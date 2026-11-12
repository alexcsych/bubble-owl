import React from "react";
import { DialogClose } from "./ui/dialog";
import { Button } from "./ui/button";
import { ItemWithTagsAndQuantity } from "@/types/prisma";
import { useRouter } from "@/i18n/navigation";
import { useCartStore } from "@/store/useCartStore";
import { useTranslations } from "next-intl";
import { usePathname, useSearchParams } from "next/navigation";
import { AUTH_ROUTES } from "@/constants/auth";
import { usePostHog } from "posthog-js/react";

interface CheckoutBtnProps {
  items: ItemWithTagsAndQuantity[] | undefined;
  isLoading: boolean;
  isPending: boolean;
  isAnonym: boolean;
}

export default function CheckoutBtn ({
  items,
  isLoading,
  isPending,
  isAnonym,
}: CheckoutBtnProps) {
  const t = useTranslations("cart-drawer");
  const router = useRouter();
  const clearCart = useCartStore(state => state.clearCart);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const posthog = usePostHog();
  const currentParams = searchParams.toString();
  const isAuthPage = AUTH_ROUTES.some(route => pathname.includes(route));
  let loginHref = `/login`;

  if (!isAuthPage) {
    const fullPath = currentParams
      ? `${pathname}?${currentParams}`
      : `${pathname}`;

    const encodedPath = encodeURIComponent(fullPath);
    loginHref += `?callbackURL=${encodedPath}`;
  } else {
    const existingCallback = searchParams.get("callbackURL");
    if (existingCallback) {
      loginHref += `?callbackURL=${encodeURIComponent(existingCallback)}`;
    }
  }

  const totalPrice =
    items?.reduce((acc, item) => {
      const isSale =
        item.salePrice && item.tags?.some(tag => tag.slug === "sale");
      const price = isSale ? item.salePrice : item.price;

      return acc + (price * item.quantity);
    }, 0) || 0;

  const handleCheckout = async () => {
    if (isAnonym) {
      posthog.capture('checkout_redirect_to_login', {
        cart_total_amount: totalPrice / 100,
        cart_items_count: items?.length || 0
      });

      router.push(loginHref);
      return;
    }

    posthog.capture('checkout_started', {
      cart_total_amount: totalPrice / 100,
      cart_items_count: items?.length || 0,
      item_ids: items?.map(item => item.id)
    });

    await clearCart();
  };

  return (
    !!items &&
    items.length !== 0 && (
      <DialogClose asChild>
        <Button
          variant='outline'
          className={`${isLoading || isPending ? "pointer-events-none" : ""}`}
          onClick={handleCheckout}
        >
          {`${t("checkout")} ${totalPrice / 100} $`}
        </Button>
      </DialogClose>
    )
  );
}
