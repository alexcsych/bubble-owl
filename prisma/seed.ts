import prisma from "@/lib/db";
import { PrismaModel } from "@/types/prisma";
import { carouselData } from "@/prisma/data/carousel";
import { categoriesData } from "@/prisma/data/categories";
import { ingredientsData } from "@/prisma/data/ingredients";
import { itemsData } from "@/prisma/data/items";
import { tagsData } from "@/prisma/data/tags";

async function seedTable<T> (name: string, model: PrismaModel<T>, data: T[]) {
  console.log(`Seeding ${data.length} items into ${name}...`);
  for (const itemData of data) {
    await model.create({ data: itemData });
  }
}

try {
  console.log("Start seeding...");

  console.log("Cleaning database...");
  await prisma.item.deleteMany();
  await prisma.category.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.ingredient.deleteMany();
  await prisma.carousel.deleteMany();

  await seedTable("Carousel", prisma.carousel, carouselData);
  await seedTable("Category", prisma.category, categoriesData);
  await seedTable("Ingredient", prisma.ingredient, ingredientsData);
  await seedTable("Tag", prisma.tag, tagsData);
  await seedTable("Item", prisma.item, itemsData);

  console.log("Seeding finished.");
} catch (e) {
  console.error(e);
  process.exit(1);
} finally {
  await prisma.$disconnect();
}
