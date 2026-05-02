import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { ItemWithTagsAndQuantity } from "@/types/prisma";
import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";
import { S3_URL } from "@/constants/images";
import { Locale } from "@/types/locale";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface CartItemProps {
  item: ItemWithTagsAndQuantity;
}

export default function CartItem ({ item }: CartItemProps) {
  const t = useTranslations("cart-drawer");
  const locale = useLocale() as Locale;
  const increaseOrAddItem = useCartStore(state => state.increaseOrAddItem);
  const decreaseOrRemoveItem = useCartStore(
    state => state.decreaseOrRemoveItem,
  );
  const removeItem = useCartStore(state => state.removeItem);

  const handleIncreaseClick = async () => {
    await increaseOrAddItem(item.id);
  };

  const handleDecreaseOrRemoveClick = async () => {
    await decreaseOrRemoveItem(item.id);
  };

  const handleRemoveClick = async () => {
    await removeItem(item.id);
  };

  return (
    <div
      key={item.id}
      className='flex justify-between items-center gap-2.5 w-full'
    >
      <div className='flex items-center gap-2.5 min-w-0 flex-1'>
        <div className='size-10 shrink-0 rounded-md bg-muted relative overflow-hidden'>
          <Image
            src={`${S3_URL}/${item.image}`}
            alt={item[`alt_${locale}`] || item.alt_en}
            fill
            sizes='(max-width: 768px) 50vw, 33vw'
            className='object-cover'
          />
        </div>
        <div className='flex flex-col min-w-0'>
          <p className='font-bold truncate'>
            {item[`name_${locale}`] || item.name_en}
          </p>
          <p className='flex gap-2.5 text-sm text-muted-foreground'>
            {t("price-label")}{" "}
            {item.salePrice &&
            item.tags?.some(tag => tag.name_en === "Sale") ? (
              <>
                <span className='text-destructive'>
                  {(item.salePrice * item.quantity) / 100} $
                </span>
                <span className='text-muted-foreground line-through text-xs'>
                  {(item.price * item.quantity) / 100} $
                </span>
              </>
            ) : (
              <span className='text-primary'>
                {(item.price * item.quantity) / 100} $
              </span>
            )}
          </p>
        </div>
      </div>
      <div className='flex items-center justify-center gap-2.5'>
        <Button
          variant='outline'
          className='rounded-full size-8'
          onClick={handleDecreaseOrRemoveClick}
        >
          -
        </Button>
        <div className='w-8 flex justify-center font-medium text-brand-purple'>
          x {item.quantity}
        </div>
        <Button
          variant='outline'
          className={cn(
            "rounded-full size-8",
            item.quantity >= 99 ? "pointer-events-none opacity-50" : "",
          )}
          onClick={handleIncreaseClick}
        >
          +
        </Button>
        <Button
          variant='ghost'
          className='rounded-full size-8 hover:text-destructive'
          onClick={handleRemoveClick}
        >
          <Trash2 className='size-4' />
        </Button>
      </div>
    </div>
  );
}
