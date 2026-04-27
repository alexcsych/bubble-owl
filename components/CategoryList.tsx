import prisma from "@/lib/db";
import CategoryCard from "@/components/CategoryCard";

export default async function CategoryList () {
  const categories = await prisma.category.findMany({
    include: {
      _count: {
        select: { items: true },
      },
    },
  });

  return (
    <div className={"grid grid-cols-1 sm:grid-cols-2 gap-5 w-full"}>
      {categories.map((category, index) => (
        <CategoryCard
          key={category.id}
          category={category}
          isEven={(index + 1) % 2 === 0}
        />
      ))}
    </div>
  );
}
