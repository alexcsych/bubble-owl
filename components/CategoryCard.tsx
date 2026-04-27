import { S3_URL } from "@/constants/images";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Category } from "@/prisma/generated/client";
import { Locale } from "@/types/locale";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

type CategoryWithCount = Category & {
  _count: {
    items: number;
  };
};

interface CategoryCardProps {
  category: CategoryWithCount;
  isEven: boolean;
}

export default function CategoryCard ({
  category,
  isEven,
  className,
}: React.ComponentProps<"a"> & CategoryCardProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations("common");

  return (
    <Link
      href={`/catalog/${category.slug}`}
      className={cn(
        `flex flex-row sm:flex-col lg:flex-row bg-brand-purple/5 hover:bg-brand-purple/15 rounded-md shadow-sm/50 shadow-brand-purple overflow-hidden transition-colors duration-300 ease-in-out`,
        isEven ? "flex-row-reverse sm:flex-col" : "",
        className,
      )}
    >
      <div className='w-1/2 sm:w-full lg:w-1/2 aspect-square bg-muted relative'>
        <Image
          src={`${S3_URL}/${category.image}`}
          alt={category[`alt_${locale}`] || category.alt_en}
          fill
          sizes='(max-width: 768px) 50vw, 33vw'
          className='object-cover'
        />
      </div>
      <div className='w-1/2 sm:w-full lg:w-1/2 flex flex-col justify-center grow gap-2.5 p-5'>
        <h2 className='text-xl font-bold'>
          {category[`name_${locale}`] || category.name_en}
        </h2>
        <span className='text-sm'>
          {category._count.items} {t("products")}
        </span>
        <span className='text-lg'>
          {category[`desc_${locale}`] || category.desc_en}
        </span>
      </div>
    </Link>
  );
}
