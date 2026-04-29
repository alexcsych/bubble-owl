"use client";

import { usePathname, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Separator } from "./ui/separator";
import { useTranslations } from "next-intl";

interface PaginationSectionProps {
  loadedPagesCount: number;
  startPage: number;
  totalPages: number;
}

export default function PaginationSection ({
  loadedPagesCount,
  startPage,
  totalPages,
}: PaginationSectionProps) {
  const t = useTranslations("pagination");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const endPage = startPage + loadedPagesCount - 1;

  const createPageHref = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const isPageActive = (pageNum: number) => {
    return pageNum >= startPage && pageNum <= endPage;
  };

  const getPages = () => {
    const pages: (number | "ellipsis")[] = [];

    if (totalPages <= 9) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 2) {
        pages.push(1, 2, 3, 4, 5, 6, 7, "ellipsis", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(
          1,
          "ellipsis",
          totalPages - 6,
          totalPages - 5,
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        );
      } else {
        pages.push(
          1,
          "ellipsis",
          currentPage - 2,
          currentPage - 1,
          currentPage,
          currentPage + 1,
          currentPage + 2,
          "ellipsis",
          totalPages,
        );
      }
    }
    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <>
      <Separator className='opacity-50' />
      <Pagination>
        <PaginationContent className='gap-2.5'>
          <PaginationItem>
            <PaginationPrevious
              href={currentPage > 1 ? createPageHref(currentPage - 1) : "#"}
              text={t("previous")}
              aria-label={t("aria-previous")}
              className={
                currentPage === 1
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              }
            />
          </PaginationItem>
          {getPages().map((page, index) => (
            <PaginationItem key={index}>
              {page === "ellipsis" ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  href={createPageHref(page)}
                  isActive={isPageActive(page)}
                >
                  {page}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href={endPage < totalPages ? createPageHref(endPage + 1) : "#"}
              text={t("next")}
              aria-label={t("aria-next")}
              className={
                endPage === totalPages
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
