export type PrismaModel<T> = {
  deleteMany: () => Promise<{ count: number }>;
  create: (args: { data: T }) => Promise<unknown>;
};
