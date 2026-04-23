import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import CustomCarousel from "@/components/CustomCarousel";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function Home ({ params }: Props) {
  const { locale } = use(params);

  setRequestLocale(locale);

  return (
    <main className='min-h-screen'>
      <Header />
      <CustomCarousel />
      <div className='flex flex-col items-center justify-center mt-20'>
        <h2 className='text-4xl font-extrabold text-[#5D4037]'>
          Welcome to Bubble Owl
        </h2>
        <p className='mt-4 text-gray-600'>Вафли, Моти и лучший Bubble Tea</p>
      </div>
    </main>
  );
}
