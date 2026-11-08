import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="mx-auto max-w-5xl space-y-2 px-4 text-center text-sm text-gray-500">
        <p>{t("disclaimer")}</p>
        <p>&copy; {new Date().getFullYear()} KnowMyself</p>
      </div>
    </footer>
  );
}
