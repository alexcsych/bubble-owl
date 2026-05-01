import { Item, Tag } from "@/prisma/generated/client";

export type PrismaModel<T> = {
  deleteMany: () => Promise<{ count: number }>;
  create: (args: { data: T }) => Promise<unknown>;
};

export type ItemWithTags = Item & {
  tags: Tag[];
};

export type ItemWithQuantity = Item & {
  quantity: number;
};

export type ItemWithTagsAndQuantity = Item & {
  tags: Tag[];
  quantity: number;
};
