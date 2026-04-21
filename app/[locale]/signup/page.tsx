import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import SignUpForm from "@/components/SignUpForm";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function SignUp ({ params }: Props) {
  const { locale } = use(params);

  setRequestLocale(locale);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <Header />
      <SignUpForm />
      <div></div>
    </main>
  );
}
