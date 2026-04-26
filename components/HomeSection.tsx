import { ChevronDown } from "lucide-react";
import ItemList from "@/components/ItemList";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { ItemWithTags } from "@/types/prisma";

interface HomeSectionProps {
  title: string;
  items: ItemWithTags[];
  href: string;
  buttonText: string;
}

export default function HomeSection ({
  title,
  items,
  href,
  buttonText,
}: HomeSectionProps) {
  const t = useTranslations("main-page");
  const tCommon = useTranslations("common");

  return (
    <section className='flex flex-col gap-4'>
      <h2 className='text-lg text-primary font-bold'>{t(title)}</h2>
      <ItemList items={items} />
      <div className='w-full flex items-center gap-5'>
        <Separator className='flex-1 bg-primary' />
        <Button asChild variant='default'>
          <Link href={href}>
            {tCommon(buttonText)}
            <ChevronDown className='ml-2 size-4' />
          </Link>
        </Button>
        <Separator className='flex-1 bg-primary' />
      </div>
    </section>
  );
}
