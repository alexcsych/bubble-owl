import prisma from "@/lib/db";
import HomeSection from "./HomeSection";

export default async function MainSections () {
  const [popularItems, newItems, saleItems] = await Promise.all([
    prisma.item.findMany({
      where: { tags: { some: { name_en: "Popular" } } },
      take: 4,
      include: { tags: true },
    }),
    prisma.item.findMany({
      where: { tags: { some: { name_en: "New" } } },
      take: 4,
      include: { tags: true },
    }),
    prisma.item.findMany({
      where: { tags: { some: { name_en: "Sale" } } },
      take: 4,
      include: { tags: true },
    }),
  ]);

  return (
    <div className='flex flex-col gap-5'>
      <HomeSection
        title='popular'
        items={popularItems}
        href='/catalog'
        buttonText='show-more'
      />
      <HomeSection
        title='new'
        items={newItems}
        href='/catalog'
        buttonText='show-more'
      />
      <HomeSection
        title='on-sale'
        items={saleItems}
        href='/catalog'
        buttonText='show-more'
      />
    </div>
  );
}
