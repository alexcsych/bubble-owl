import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import { Locale } from "@/types/locale";
import Image from "next/image";
import { ItemWithTags } from "@/types/prisma";
import { S3_URL } from "@/constants/images";
import AddItemToCartBtn from "./AddItemToCartBtn";

interface ItemProps {
  item: ItemWithTags;
}

export default function ItemCard ({
  item,
  className,
  ...props
}: React.ComponentProps<"div"> & ItemProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations("common");

  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row xl:flex-col 2xl:flex-row bg-primary/5 hover:bg-primary/10 rounded-md shadow-sm/50 shadow-brand-purple overflow-hidden transition-colors duration-300 ease-in-out",
        className,
      )}
      {...props}
    >
      <div className='w-full lg:w-1/2 xl:w-full 2xl:w-1/2 aspect-square bg-muted relative'>
        <Image
          src={`${S3_URL}/${item.image}`}
          alt={item[`alt_${locale}`] || item.alt_en}
          fill
          sizes='(max-width: 768px) 50vw, 33vw'
          className='object-cover'
        />
      </div>
      <div className='w-full lg:w-1/2 xl:w-full 2xl:w-1/2 flex flex-col grow justify-between gap-2.5 p-2.5'>
        <div className='flex flex-col gap-2.5'>
          <span className='text-base font-bold'>
            {item[`name_${locale}`] || item.name_en}
          </span>
          <span className='text-xs'>{item.weight}</span>
          <span className='text-sm'>
            {item[`shortDesc_${locale}`] || item.shortDesc_en}
          </span>
        </div>
        <div className='flex justify-between items-center gap-2.5'>
          <div className='flex gap-2.5'>
            {item.salePrice &&
            item.tags?.some(tag => tag.name_en === "Sale") ? (
              <>
                <span className='text-destructive'>
                  {item.salePrice / 100} $
                </span>
                <span className='text-muted-foreground line-through text-sm'>
                  {item.price / 100} $
                </span>
              </>
            ) : (
              <span className='text-primary'>{item.price / 100} $</span>
            )}
          </div>
          <AddItemToCartBtn itemId={item.id} text={t("add-to-cart")} />
        </div>
      </div>
    </div>
  );
}
