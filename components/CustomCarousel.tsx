"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useLocale } from "next-intl";
import { Locale } from "@/types/locale";
import { Carousel as CarouselType } from "@/prisma/generated/client";

const S3_URL = process.env.NEXT_PUBLIC_S3_URL;
interface CustomCarouselProps {
  data: CarouselType[];
}

export default function CustomCarousel ({ data }: CustomCarouselProps) {
  const locale = useLocale() as Locale;

  return (
    <Carousel
      opts={{
        loop: true,
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent>
        {data.map(item => (
          <CarouselItem key={item.id} className='sm:basis-1/2 rounded-md'>
            <div className='aspect-3/2 rounded-md bg-muted relative'>
              <Image
                src={`${S3_URL}/${item.image}`}
                alt={item[`alt_${locale}`] || item.alt_en}
                fill
                sizes='(max-width: 768px) 50vw, 33vw'
                className='object-cover rounded-md'
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        variant='ghost'
        size='lg'
        className="active:translate-y-0! [--tw-translate-y:0px]! active:scale-100! transition-none [&_svg:not([class*='size-'])]:size-8"
      />
      <CarouselNext
        variant='ghost'
        size='lg'
        className="active:translate-y-0! [--tw-translate-y:0px]! active:scale-100! transition-none [&_svg:not([class*='size-'])]:size-8"
      />
    </Carousel>
  );
}
