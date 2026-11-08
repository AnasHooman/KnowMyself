import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { QuizCard } from "@/components/QuizCard";
import { ResultExtras } from "@/components/quiz/ResultExtras";
import { getQuiz, quizzes, tr } from "@/data/quizzes";

type Props = {
  params: Promise<{ locale: string; id: string; type: string }>;
};

export function generateStaticParams() {
  return quizzes.flatMap((q) => q.results.map((r) => ({ id: q.id, type: r.id })));
}

export default async function ResultPage({ params }: Props) {
  const { locale, id, type } = await params;
  setRequestLocale(locale);

  const quiz = getQuiz(id);
  const result = quiz?.results.find((r) => r.id === type);
  if (!quiz || !result) notFound();

  const t = await getTranslations("Result");
  const match = quiz.results.find((r) => r.id === result.match)!;
  const others = quizzes.filter((q) => q.id !== quiz.id);

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:py-16">
      <section className={`overflow-hidden rounded-3xl bg-gradient-to-br ${quiz.gradient} p-1 shadow-xl`}>
        <div className="rounded-[1.3rem] bg-white/95 px-6 py-10 text-center sm:px-10">
          <p className="text-sm font-medium text-gray-500">{tr(quiz.title, locale)}</p>
          <p className="mt-4 text-sm font-semibold text-primary-600">{t("yourType")}</p>
          <div className="mt-3 text-7xl" aria-hidden>
            {result.emoji}
          </div>
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">{tr(result.name, locale)}</h1>
          <p className="mt-2 text-lg font-medium text-gray-600">{tr(result.tagline, locale)}</p>
          <p className="mt-6 text-left leading-relaxed text-gray-700 sm:text-center">
            {tr(result.description, locale)}
          </p>
        </div>
      </section>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <section className="rounded-3xl bg-gray-50 p-6 ring-1 ring-gray-200">
          <h2 className="font-bold text-gray-900">💪 {t("strengths")}</h2>
          <ul className="mt-3 space-y-2 text-gray-700">
            {result.strengths.map((s) => (
              <li key={s.en} className="flex gap-2">
                <span className="text-primary-500">•</span>
                {tr(s, locale)}
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-3xl bg-gray-50 p-6 ring-1 ring-gray-200">
          <h2 className="font-bold text-gray-900">💡 {t("tips")}</h2>
          <ul className="mt-3 space-y-2 text-gray-700">
            {result.tips.map((s) => (
              <li key={s.en} className="flex gap-2">
                <span className="text-primary-500">•</span>
                {tr(s, locale)}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <Link
        href={`/quizzes/${quiz.id}/result/${match.id}`}
        className="mt-4 flex items-center gap-4 rounded-3xl bg-gray-50 p-6 ring-1 ring-gray-200 transition-colors hover:bg-gray-100"
      >
        <span className="text-4xl" aria-hidden>
          {match.emoji}
        </span>
        <div>
          <p className="text-sm font-semibold text-primary-600">{t("bestMatch")}</p>
          <p className="font-bold text-gray-900">{tr(match.name, locale)}</p>
          <p className="text-sm text-gray-600">{tr(match.tagline, locale)}</p>
        </div>
      </Link>

      <Suspense fallback={null}>
        <ResultExtras
          quizId={quiz.id}
          gradient={quiz.gradient}
          types={quiz.results.map((r) => ({ emoji: r.emoji, name: tr(r.name, locale) }))}
        />
      </Suspense>

      <section className="mt-16">
        <h2 className="text-xl font-bold text-gray-900">{t("others")}</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          {others.map((q) => (
            <QuizCard key={q.id} quiz={q} />
          ))}
        </div>
      </section>
    </div>
  );
}
