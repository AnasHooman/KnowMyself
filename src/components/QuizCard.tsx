import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { type Quiz, tr } from "@/data/quizzes";

export function QuizCard({ quiz }: { quiz: Quiz }) {
  const t = useTranslations("QuizCard");
  const tl = useTranslations("QuizList");
  const locale = useLocale();

  return (
    <Link
      href={`/quizzes/${quiz.id}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className={`flex aspect-[16/9] items-center justify-center bg-gradient-to-br ${quiz.gradient}`}>
        <span
          className="text-6xl drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
          aria-hidden
        >
          {quiz.emoji}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-gray-900">{tr(quiz.title, locale)}</h3>
        <p className="mt-1.5 line-clamp-2 flex-1 text-sm leading-relaxed text-gray-600">
          {tr(quiz.description, locale)}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-gray-500">
            {tl("questions", { count: quiz.questions.length })} · {tl("minutes", { count: quiz.minutes })}
          </span>
          <span className="rounded-full bg-primary-600 px-4 py-1.5 text-sm font-medium text-white transition-colors group-hover:bg-primary-700">
            {t("start")}
          </span>
        </div>
      </div>
    </Link>
  );
}
