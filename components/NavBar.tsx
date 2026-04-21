import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NavBar () {
  const t = useTranslations("header");

  return (
    <nav className='flex justify-between items-center gap-5'>
      <Link
        href='/'
        className="text-xl relative text-white transition-colors before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
      >
        {t("nav.home")}
      </Link>
      <Link
        href='/'
        className="text-xl relative text-white transition-colors before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
      >
        {t("nav.catalog")}
      </Link>
      <Link
        href='/'
        className="text-xl relative text-white transition-colors before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
      >
        {t("nav.about-us")}
      </Link>
    </nav>
  );
}
