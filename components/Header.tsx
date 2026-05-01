import { Link } from "@/i18n/navigation";
import Image from "next/image";
import Nav from "@/components/Nav";
import SearchBar from "@/components/SearchBar";
import CartButton from "@/components/CartButton";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import AuthButton from "@/components/AuthButton";
import { MAIN_NAV } from "@/constants/navigation";
import { S3_URL } from "@/constants/images";

export default function Header () {
  return (
    <header className='w-full bg-brand-purple shadow-sm'>
      <div className='container mx-auto py-2.5 px-5 flex justify-between items-center gap-5'>
        <Link
          href='/'
          className='text-white flex justify-between items-center gap-2.5'
        >
          <Image
            src={`${S3_URL}/owl-icon.webp`}
            width={30}
            height={30}
            alt='Owl icon logo'
          ></Image>
          <span className='text-lg font-bold text-white'>Bubble Owl</span>
        </Link>
        <Nav items={MAIN_NAV} className='lg:flex lg:[&_a]:text-lg' />
        <SearchBar className='hidden xl:flex' />
        <div className='flex justify-between items-center gap-2.5'>
          <CartButton />
          <ThemeSwitcher />
          <LocaleSwitcher />
          <AuthButton />
        </div>
      </div>
    </header>
  );
}
