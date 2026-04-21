import { Link } from "@/i18n/navigation";
import Image from "next/image";
import NavBar from "./NavBar";
import SearchBar from "@/components/SearchBar";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import LocaleSwitcher from "./LocaleSwitcher";
import LogInBtn from "./LogInBtn";

export default function Header () {
  return (
    <header className='w-full bg-brand-purple shadow-sm p-2.5'>
      <div className='max-w-300 mx-auto flex justify-between items-center gap-5'>
        <Link
          href='/'
          // className='text-white flex justify-between items-center gap-2.5'
        >
          <Image
            src='/owl-icon.png'
            width={30}
            height={30}
            alt='Owl icon logo'
          ></Image>
          {/* <h1 className='text-xl font-bold text-white'>Bubble Owl</h1> */}
        </Link>
        <NavBar />
        <SearchBar />
        <div className='flex justify-between items-center gap-5'>
          <ThemeSwitcher />
          <LocaleSwitcher />
          <LogInBtn />
        </div>
      </div>
    </header>
  );
}
