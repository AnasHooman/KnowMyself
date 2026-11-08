import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { QuizPlayer } from "@/components/quiz/QuizPlayer";
import { getQuiz, quizzes } from "@/data/quizzes";

type Props = {
  params: Promise<{ locale: string; id: string }>;
};

export function generateStaticParams() {
  return quizzes.map((q) => ({ id: q.id }));
}

export default async function QuizPage({ params }: Props) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const quiz = getQuiz(id);
  if (!quiz) notFound();

  return <QuizPlayer quizId={quiz.id} />;
}
