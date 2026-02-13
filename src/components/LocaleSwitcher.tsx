"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const localeLabels: Record<string, string> = {
  ko: "한국어",
  en: "EN",
  ja: "日本語",
  zh: "中文",
};

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onChange(nextLocale: string) {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div className="flex gap-1">
      {routing.locales.map((l) => (
        <button
          key={l}
          onClick={() => onChange(l)}
          className={`rounded px-2 py-1 text-sm transition-colors ${
            l === locale
              ? "bg-primary-600 text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          {localeLabels[l]}
        </button>
      ))}
    </div>
  );
}
