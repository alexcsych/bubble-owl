import { useTranslations } from "next-intl";
import Loader from "@/components/Loader";
import ItemList from "@/components/ItemList";
import { ItemWithTags } from "@/types/prisma";

interface ProductsListProps {
  items: ItemWithTags[];
  isLoading: boolean;
}

export default function ProductsList ({ items, isLoading }: ProductsListProps) {
  const t = useTranslations("filters");

  return isLoading ? (
    <Loader />
  ) : items?.length !== 0 ? (
    <ItemList items={items} />
  ) : (
    <div className='w-full flex flex-col items-center justify-center gap-5'>
      <p className='text-xl md:text-2xl lg:text-3xl text-primary font-bold'>
        {t("nothing-found")}
      </p>
      <span className='text-sm lg:text-base'>
        {t("nothing-found-description")}
      </span>
    </div>
  );
}
