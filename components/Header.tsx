import Link from "next/link";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import ThemeTogle from "@/components/ThemeTogle";

interface HeaderProps {
  t: (key: string) => string;
}

export default function Header () {
  return (
    <header className='bg-brand-purple shadow-sm p-2.5'>
      <div className='max-w-300 mx-auto flex justify-between items-center gap-5'>
        <Link
          href='/'
          className='text-white flex justify-between items-center gap-2.5'
        >
          <Image
            src='/owl-icon.png'
            width={30}
            height={30}
            alt='Owl icon logo'
          ></Image>
          <h1 className='text-xl font-bold text-white'>Bubble Owl</h1>
        </Link>
        <nav className='flex justify-between items-center gap-5'>
          <Link
            href='/'
            className="text-xl relative text-white transition-colors before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
          >
            {t("nav-home")}
          </Link>
          <Link
            href='/'
            className="text-xl relative text-white transition-colors before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
          >
            {t("nav-catalog")}
          </Link>
          <Link
            href='/'
            className="text-xl relative text-white transition-colors before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
          >
            {t("nav-about-us")}
          </Link>
        </nav>
        <SearchBar />
        <ThemeTogle />
        <button className='bg-[#D7CCC8] rounded-lg'>Log In</button>
      </div>
    </header>
  );
}
