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

const S3_URL = process.env.NEXT_PUBLIC_S3_URL;

const BUBBLE_TEAS = [
  {
    id: 1,
    src: `${S3_URL}/bubble-tea/bubble-tea-1.webp`,
    alt: "Classic Milk Tea",
  },
  {
    id: 2,
    src: `${S3_URL}/bubble-tea/bubble-tea-2.webp`,
    alt: "Matcha Latte",
  },
  {
    id: 3,
    src: `${S3_URL}/bubble-tea/bubble-tea-3.webp`,
    alt: "Taro Bubble Tea",
  },
  {
    id: 4,
    src: `${S3_URL}/bubble-tea/bubble-tea-4.webp`,
    alt: "Fruit Green Tea",
  },
  {
    id: 5,
    src: `${S3_URL}/bubble-tea/bubble-tea-5.webp`,
    alt: "Brown Sugar Boba",
  },
  {
    id: 6,
    src: `${S3_URL}/bubble-tea/bubble-tea-6.webp`,
    alt: "Strawberry Slush",
  },
];

export default function CustomCarousel () {
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
      className='max-w-363 mx-auto mt-10'
    >
      <CarouselContent>
        {BUBBLE_TEAS.map(item => (
          <CarouselItem key={item.id} className='basis-1/2 rounded-md'>
            <div className='aspect-3/2 rounded-md bg-muted relative'>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes='(max-width: 768px) 50vw, 33vw'
                className='object-cover rounded-md'
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        variant='outline'
        size='lg'
        className="active:translate-y-0! [--tw-translate-y:0px]! active:scale-100! transition-none [&_svg:not([class*='size-'])]:size-8"
      />
      <CarouselNext
        variant='outline'
        size='lg'
        className="active:translate-y-0! [--tw-translate-y:0px]! active:scale-100! transition-none [&_svg:not([class*='size-'])]:size-8"
      />
    </Carousel>
  );
}
