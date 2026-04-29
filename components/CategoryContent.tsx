"use client";

import useSWRInfinite from "swr/infinite";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import FilterBar from "@/components/FilterBar";
import ProductsList from "@/components/ProductsList";
import { ItemWithTags } from "@/types/prisma";
import { Tag } from "@/prisma/generated/client";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import PaginationSection from "@/components/PaginationSection";
import { PRODUCTS_PER_PAGE } from "@/constants/api";

interface ProductsResponse {
  items: ItemWithTags[];
  totalPages: number;
}

const getKey = (
  pageIndex: number,
  previousPageData: ProductsResponse | null,
  categorySlug: string,
  status: string,
  flavor: string,
  dietary: string,
  initialPage: number,
): string | null => {
  if (previousPageData && !previousPageData.items.length) return null;

  const actualPage = initialPage + pageIndex;

  return `/api/products?category=${categorySlug}&page=${actualPage}&status=${status}&flavor=${flavor}&dietary=${dietary}`;
};

const fetcher = (url: string) => fetch(url).then(res => res.json());

interface FilterData {
  statuses: Tag[];
  flavors: Tag[];
  dietary: Tag[];
}

interface CategoryContentProps {
  categorySlug: string;
  filtersData: FilterData;
  initialItems: ItemWithTags[];
}

export default function CategoryContent ({
  categorySlug,
  filtersData,
  initialItems,
}: CategoryContentProps) {
  const tCommon = useTranslations("common");
  const searchParams = useSearchParams();

  const currentPageInUrl = Number(searchParams.get("page")) || 1;
  const status = searchParams.get("status") || "";
  const flavor = searchParams.get("flavor") || "";
  const dietary = searchParams.get("dietary") || "";

  const { data, size, setSize, isLoading } = useSWRInfinite<ProductsResponse>(
    (index, prev) =>
      getKey(
        index,
        prev,
        categorySlug,
        status,
        flavor,
        dietary,
        currentPageInUrl,
      ),
    fetcher,
    {
      fallbackData: [{ items: initialItems, totalPages: 1 }],
      revalidateFirstPage: false,
    },
  );

  const allProducts = data ? data.flatMap(page => page.items) : [];
  const totalPages = data?.[0]?.totalPages || 1;
  const isReachingEnd =
    data &&
    (data[data.length - 1]?.items.length < PRODUCTS_PER_PAGE ||
      size + currentPageInUrl - 1 >= totalPages);

  return (
    <div className='flex flex-col gap-5'>
      <FilterBar
        activeStatus={status}
        activeFlavor={flavor}
        activeDietary={dietary}
        filtersData={filtersData}
      />
      <ProductsList items={allProducts} isLoading={isLoading} />
      {!isReachingEnd && (
        <div className='w-full flex items-center gap-5'>
          <Separator className='flex-1 bg-primary' />
          <Button
            variant='default'
            onClick={() => setSize(size + 1)}
            disabled={isLoading}
          >
            {tCommon("show-more")}
          </Button>
          <Separator className='flex-1 bg-primary' />
        </div>
      )}
      <PaginationSection
        loadedPagesCount={size}
        startPage={currentPageInUrl}
        totalPages={totalPages}
      />
    </div>
  );
}
