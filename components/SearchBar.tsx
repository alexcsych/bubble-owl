import { Search } from "lucide-react";
import { useTranslations } from "next-intl";

export default function SearchBar () {
  const t = useTranslations("header");

  return (
    <div className='max-w-100 w-full h-7.5 text-base bg-white rounded-[5px] flex justify-between items-center gap-2.5'>
      <div className='pl-2.5 flex items-center justify-center'>
        <Search size={20} className='text-black' />
      </div>
      <input
        id='ItemName'
        type='text'
        placeholder='Поиск любимого напитка...'
        className='h-full w-full text-black outline-none bg-transparent placeholder:text-[#949494]  flex items-center'
      />
      <div className='px-2.5 h-full bg-brand-green rounded-[5px] text-black flex items-center'>
        {t("btn-search")}
      </div>
    </div>
  );
}
