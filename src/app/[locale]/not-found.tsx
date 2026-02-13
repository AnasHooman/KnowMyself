import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("Common");

  return (
    <section className="flex flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="text-4xl font-bold text-gray-900">404</h1>
      <p className="mt-4 text-lg text-gray-600">{t("notFound")}</p>
      <p className="mt-2 text-gray-500">{t("notFoundDescription")}</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-primary-600 px-6 py-2 text-white transition-colors hover:bg-primary-700"
      >
        {t("backHome")}
      </Link>
    </section>
  );
}
