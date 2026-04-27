import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import LogInForm from "@/components/LogInForm";
import CopyrightNotice from "@/components/CopyrightNotice";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function LogIn ({ params }: Props) {
  const { locale } = use(params);

  setRequestLocale(locale);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <Header />
      <LogInForm />
      <CopyrightNotice />
    </main>
  );
}
