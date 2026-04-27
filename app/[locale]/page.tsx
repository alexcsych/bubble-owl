import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import CustomCarouselWrapper from "@/components/CustomCarouselWrapper";
import MainSections from "@/components/MainSections";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function Home ({ params }: Props) {
  const { locale } = use(params);
  const t = useTranslations("main-page");

  setRequestLocale(locale);

  return (
    <div className='min-h-screen'>
      <Header />
      <main className='container mx-auto flex flex-col gap-10 py-10 px-5'>
        <div className='flex flex-col items-center justify-center gap-2.5'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl text-primary font-bold'>
            {t("title")}
          </h1>
          <p className='text-sm lg:text-base'>{t("description")}</p>
        </div>
        <CustomCarouselWrapper />
        <MainSections />
      </main>
      <Footer />
    </div>
  );
}
