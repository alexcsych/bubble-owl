import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import CustomThemeProvider from "@/components/CustomThemeProvider";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const comfortaa = Comfortaa({
  subsets: ["latin", "cyrillic"],
  variable: "--font-comfortaa",
  display: "swap",
});

export function generateStaticParams () {
  return routing.locales.map(locale => ({ locale }));
}

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Bubble Owl",
  description:
    "Bubble Owl is where tea traditions meet modern trends. We believe every drink should be unique, so we've gathered the finest ingredients for you—from classic black tapioca to exotic fruit juice boba. Our owl knows the secret to the perfect balance of sweetness and freshness. Drop by and discover your new favorite flavor!",
};

export default async function LocaleLayout ({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${comfortaa.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col'>
        <NextIntlClientProvider>
          <CustomThemeProvider>{children}</CustomThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
