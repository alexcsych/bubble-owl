import { useTranslations } from "next-intl";

export default function CopyrightNotice () {
  const t = useTranslations("footer");

  return (
    <span className='text-center text-sm text-white opacity-80'>
      © {new Date().getFullYear()} BubbleOwl. {t("copyright")}
    </span>
  );
}
