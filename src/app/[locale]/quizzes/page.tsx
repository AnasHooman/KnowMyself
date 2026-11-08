import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { QuizCard } from "@/components/QuizCard";
import { quizzes } from "@/data/quizzes";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function QuizzesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <QuizzesContent />;
}

function QuizzesContent() {
  const t = useTranslations("QuizList");

  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{t("title")}</h1>
      <p className="mt-3 text-gray-600">{t("subtitle")}</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {quizzes.map((q) => (
          <QuizCard key={q.id} quiz={q} />
        ))}
      </div>
    </section>
  );
}
