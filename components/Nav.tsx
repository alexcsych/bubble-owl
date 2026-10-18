import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  href: string;
}

interface NavProps extends React.ComponentProps<"nav"> {
  items: NavItem[];
}

export default function Nav ({ items, className, ...props }: NavProps) {
  const t = useTranslations("nav");

  return (
    <nav
      className={cn("flex justify-between items-center gap-5", className)}
      {...props}
    >
      {items.map(item => (
        <Link key={item.name} href={item.href} className='link-underline'>
          {t.has(item.name) ? t(item.name) : item.name}
        </Link>
      ))}
    </nav>
  );
}
