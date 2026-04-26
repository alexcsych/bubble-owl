import { Item, Tag } from "@/prisma/generated/client";

export type PrismaModel<T> = {
  deleteMany: () => Promise<{ count: number }>;
  create: (args: { data: T }) => Promise<unknown>;
};

export type ItemWithTags = Item & {
  tags: Tag[];
};
