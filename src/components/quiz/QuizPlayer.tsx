"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { getQuiz, tr } from "@/data/quizzes";

export function QuizPlayer({ quizId }: { quizId: string }) {
  const quiz = getQuiz(quizId)!;
  const t = useTranslations("QuizPlay");
  const locale = useLocale();
  const router = useRouter();

  const [answers, setAnswers] = useState<string[]>([]);
  const [calculating, setCalculating] = useState(false);

  const index = answers.length;
  const total = quiz.questions.length;
  const question = quiz.questions[Math.min(index, total - 1)];

  function choose(type: string) {
    const next = [...answers, type];
    setAnswers(next);
    if (next.length < total) return;

    // Count answers per type; ties go to the type listed first in the quiz.
    const scores = quiz.results.map((r) => next.filter((a) => a === r.id).length);
    const winner = quiz.results[scores.indexOf(Math.max(...scores))];

    setCalculating(true);
    setTimeout(() => {
      router.push({
        pathname: `/quizzes/${quiz.id}/result/${winner.id}`,
        query: { s: scores.join("."), me: "1" },
      });
    }, 1200);
  }

  if (calculating) {
    return (
      <section className="mx-auto flex max-w-xl flex-col items-center px-4 py-32 text-center">
        <span className="animate-bounce text-6xl" aria-hidden>
          {quiz.emoji}
        </span>
        <p className="mt-6 text-lg font-medium text-gray-700">{t("calculating")}</p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-xl px-4 py-12 sm:py-16">
      <div className="flex items-center justify-between text-sm">
        <button
          type="button"
          onClick={() => setAnswers(answers.slice(0, -1))}
          disabled={index === 0}
          className="rounded-full px-3 py-1 font-medium text-gray-600 transition-colors hover:bg-gray-100 disabled:invisible"
        >
          ← {t("back")}
        </button>
        <span className="font-semibold text-primary-600">{t("progress", { current: index + 1, total })}</span>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${quiz.gradient} transition-all duration-500`}
          style={{ width: `${(index / total) * 100}%` }}
        />
      </div>

      <div key={index} className="animate-[fadeUp_.35s_ease-out]">
        <p className="mt-10 text-sm font-medium text-gray-500">
          {quiz.emoji} {tr(quiz.title, locale)}
        </p>
        <h1 className="mt-2 text-2xl font-bold leading-snug text-gray-900 sm:text-3xl">
          {tr(question.text, locale)}
        </h1>
        <ul className="mt-8 space-y-3">
          {question.options.map((o) => (
            <li key={o.type}>
              <button
                type="button"
                onClick={() => choose(o.type)}
                className="w-full rounded-2xl border-2 border-gray-200 bg-white px-5 py-4 text-left text-base font-medium text-gray-800 transition-all hover:border-primary-400 hover:bg-primary-50 active:scale-[0.99]"
              >
                {tr(o.text, locale)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
