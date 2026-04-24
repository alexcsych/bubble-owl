import { PrismaClient } from "../prisma/generated/client";
import { carouselData } from "./data/carousel";
import { categoriesData } from "./data/categories";
import { ingredientsData } from "./data/ingredients";
import { itemsData } from "./data/items";
import { tagsData } from "./data/tags";

interface SeedStep {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  model: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
}

export default function getSeedConfig (prisma: PrismaClient): SeedStep[] {
  return [
    {
      name: "Carousel",
      model: prisma.carousel,
      data: carouselData,
    },
    {
      name: "Category",
      model: prisma.category,
      data: categoriesData,
    },
    {
      name: "Ingredient",
      model: prisma.ingredient,
      data: ingredientsData,
    },
    {
      name: "Tag",
      model: prisma.tag,
      data: tagsData,
    },
    {
      name: "Item",
      model: prisma.item,
      data: itemsData,
    },
  ];
}
