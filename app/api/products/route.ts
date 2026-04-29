import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { PRODUCTS_PER_PAGE } from "@/constants/api";

export const revalidate = 3600;

export async function GET (request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const status = searchParams.get("status")?.split(",").filter(Boolean) || [];
  const flavor = searchParams.get("flavor")?.split(",").filter(Boolean) || [];
  const dietary = searchParams.get("dietary")?.split(",").filter(Boolean) || [];
  const page = Number(searchParams.get("page")) || 1;
  const limit = PRODUCTS_PER_PAGE;
  const where = {
    category: { slug: category || undefined },
    AND: [
      status.length > 0 ? { tags: { some: { slug: { in: status } } } } : {},
      flavor.length > 0 ? { tags: { some: { slug: { in: flavor } } } } : {},
      dietary.length > 0 ? { tags: { some: { slug: { in: dietary } } } } : {},
    ],
  };

  const items = await prisma.item.findMany({
    where,
    include: { tags: true },
    take: limit,
    skip: (page - 1) * limit,
  });

  const totalItems = await prisma.item.count({
    where,
  });

  const totalPages = Math.ceil(totalItems / PRODUCTS_PER_PAGE);

  return NextResponse.json({
    items: items,
    totalPages: totalPages,
  });
}
