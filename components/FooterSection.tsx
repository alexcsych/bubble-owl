import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function FooterSection ({
  title,
  children,
  className,
}: FooterSectionProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2.5 w-[calc(50%-10px)] lg:w-auto",
        className,
      )}
    >
      <p className='text-lg text-white'>{title}</p>
      <Separator className='bg-white' />
      {children}
    </div>
  );
}
