import prisma from "@/lib/db";
import { Locale } from "@/types/locale";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import Header from "@/components/Header";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import CategoryContent from "@/components/CategoryContent";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import Loader from "@/components/Loader";

export async function generateStaticParams () {
  const categories = await prisma.category.findMany();
  return categories.map(category => ({ slug: category.slug }));
}

type Props = {
  params: Promise<{ locale: Locale; slug: string }>;
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default async function CategoryPage ({ params }: Props) {
  const { locale, slug } = await params;

  setRequestLocale(locale);
  const tNav = await getTranslations("nav");

  const items = await prisma.item.findMany({
    where: {
      category: { slug },
    },
    include: { tags: true },
  });

  const categoryData = await prisma.category.findFirst({
    where: { slug },
    include: {
      items: {
        select: {
          tags: true,
        },
      },
    },
  });

  if (!categoryData) {
    notFound();
  }

  const categoryName = categoryData[`name_${locale}`];

  const allTags = categoryData.items.flatMap(item => item.tags);

  const uniqueTags = Array.from(
    new Map(allTags.map(tag => [tag.id, tag])).values(),
  );

  const filtersData = {
    statuses: uniqueTags.filter(t => t.type === "status"),
    flavors: uniqueTags.filter(t => t.type === "flavor"),
    dietary: uniqueTags.filter(t => t.type === "dietary"),
  };

  const breadcrumbs = [
    { name: tNav("home"), href: "/" },
    { name: tNav("catalog"), href: "/catalog" },
    {
      name: categoryName,
    },
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
      {
        "@type": "ListItem",
        position: 3,
        name: categoryName,
        item: `${baseUrl}/${locale}/catalog/${slug}`,
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
      <div className='w-full'>
        <Header />
        <main className='container mx-auto flex flex-col gap-10 py-10 px-5'>
          <BreadcrumbNav steps={breadcrumbs} />
          <div className='flex flex-col gap-2.5'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl text-primary font-bold'>
              {categoryData[`name_${locale}`]}
            </h1>
            <p className='text-sm lg:text-base'>
              {categoryData[`desc_${locale}`]}
            </p>
          </div>
          <Suspense fallback={<Loader />}>
            <CategoryContent
              categorySlug={slug}
              initialItems={items}
              filtersData={filtersData}
            />
          </Suspense>
        </main>
      </div>
      <Footer />
    </div>
  );
}
