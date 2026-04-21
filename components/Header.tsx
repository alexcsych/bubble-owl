import Link from "next/link";
import Image from "next/image";
import NavBar from "./NavBar";
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
        <NavBar />
        <SearchBar />
        <ThemeTogle />
        <button className='bg-[#D7CCC8] rounded-lg'>Log In</button>
      </div>
    </header>
  );
}
