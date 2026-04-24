import prisma from "@/lib/db";
import { Carousel } from "@/prisma/generated/client";
import CustomCarousel from "@/components/CustomCarousel";

export default async function CustomCarouselWrapper () {
  const bubbleTeasFromDb: Carousel[] = await prisma.carousel.findMany();

  return <CustomCarousel data={bubbleTeasFromDb} />;
}
