import { Separator } from "./ui/separator";
import { Icons } from "@/components/ui/icons";
import { useTranslations } from "next-intl";
import ThemeSwitcher from "./ThemeSwitcher";
import LocaleSwitcher from "./LocaleSwitcher";
import { Mail, Phone } from "lucide-react";
import { MAIN_NAV, POLICIES } from "@/constants/navigation";
import Nav from "./Nav";
import FooterSection from "./FooterSection";
import CopyrightNotice from "./CopyrightNotice";

export default function Footer () {
  const t = useTranslations("footer");

  return (
    <footer className='w-full bg-brand-purple'>
      <div className='container mx-auto flex flex-col gap-2.5 py-2.5 px-5'>
        <div className='flex flex-wrap lg:flex-nowrap lg:justify-between gap-5'>
          <FooterSection title={t("navigation")}>
            <Nav
              items={MAIN_NAV}
              className='flex flex-wrap justify-start items-center gap-x-3.75 gap-y-2.5'
            />
          </FooterSection>
          <FooterSection title={t("policies")}>
            <Nav
              items={POLICIES}
              className='flex flex-wrap justify-start items-center gap-x-3.75 gap-y-2.5'
            />
          </FooterSection>
          <FooterSection title={t("contacts")}>
            <address className='flex flex-wrap items-center gap-x-3.75 gap-y-2.5 not-italic'>
              <a href='mailto:alexsejsi4@gmail.com' className='link-underline'>
                <Mail className='size-4' />
                alexsejsi4@gmail.com
              </a>
              <a href='tel:+380666110863' className='link-underline'>
                <Phone className='size-4' />
                +380 (66) 611 08 63
              </a>
            </address>
          </FooterSection>
          <FooterSection title={t("social")}>
            <div className='flex flex-wrap gap-x-3.75 gap-y-2.5'>
              <a href='https://t.me/alexcsich' className='link-underline'>
                <Icons.telegram className='size-4' />
                alexcsich
              </a>
              <a
                href='https://www.linkedin.com/in/oleksiisych/'
                className='link-underline'
              >
                <Icons.linkedin className='size-4' />
                oleksiisych
              </a>
            </div>
          </FooterSection>
          <FooterSection title={t("settings")}>
            <div className='flex items-center gap-x-3.75 gap-y-2.5'>
              <ThemeSwitcher />
              <LocaleSwitcher />
            </div>
          </FooterSection>
        </div>
        <Separator className='bg-white/20 mt-2' />
        <CopyrightNotice />
      </div>
    </footer>
  );
}
