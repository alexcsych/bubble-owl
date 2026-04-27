import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import CategoryList from "@/components/CategoryList";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default function Catalog ({ params }: Props) {
  const { locale } = use(params);
  const t = useTranslations("catalog-page");
  const tNav = useTranslations("nav");

  setRequestLocale(locale);

  const breadcrumbs = [
    { name: tNav("home"), href: "/" },
    { name: tNav("catalog") },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${baseUrl}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Catalog",
        item: `${baseUrl}/${locale}/catalog`,
      },
    ],
  };

  return (
    <div className='flex min-h-screen flex-col items-center justify-between'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main className='container mx-auto flex flex-col gap-10 py-10 px-5'>
        <BreadcrumbNav steps={breadcrumbs} />
        <div className='flex flex-col gap-2.5'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl text-primary font-bold'>
            {t("title")}
          </h1>
          <p className='text-sm lg:text-base'>{t("description")}</p>
        </div>
        <CategoryList />
      </main>
      <Footer />
    </div>
  );
}
