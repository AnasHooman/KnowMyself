import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";

export function Header() {
  const t = useTranslations("Navigation");

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-3 px-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary-600">
          <span aria-hidden>🪞</span>
          KnowMyself
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/quizzes"
            className="rounded-full px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            {t("quizzes")}
          </Link>
          <LocaleSwitcher />
        </nav>
      </div>
    </header>
  );
}
