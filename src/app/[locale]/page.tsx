import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { QuizCard } from "@/components/QuizCard";
import { quizzes } from "@/data/quizzes";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeContent />;
}

function HomeContent() {
  const t = useTranslations("HomePage");
  const typeCount = quizzes.reduce((n, q) => n + q.results.length, 0);

  const steps = [
    { icon: "👆", title: t("step1Title"), desc: t("step1Desc") },
    { icon: "💬", title: t("step2Title"), desc: t("step2Desc") },
    { icon: "✨", title: t("step3Title"), desc: t("step3Desc") },
  ];

  const stats: [number, string][] = [
    [quizzes.length, t("statQuizzes")],
    [typeCount, t("statTypes")],
    [2, t("statMinutes")],
  ];

  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-[80%] rounded-full bg-violet-300/40 blur-3xl" />
          <div className="absolute top-10 left-1/2 h-80 w-80 translate-x-[10%] rounded-full bg-fuchsia-300/40 blur-3xl" />
          <div className="absolute top-52 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-200/50 blur-3xl" />
        </div>
        <div className="mx-auto flex max-w-3xl flex-col items-center px-4 pt-20 pb-16 text-center sm:pt-28">
          <span className="rounded-full border border-primary-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-primary-700">
            {t("badge")}
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">{t("subtitle")}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/quizzes/${quizzes[0].id}`}
              className="rounded-full bg-primary-600 px-8 py-3.5 text-lg font-semibold text-white shadow-lg shadow-primary-600/25 transition-colors hover:bg-primary-700"
            >
              {t("cta")}
            </Link>
            <Link
              href="/quizzes"
              className="rounded-full border border-gray-300 bg-white px-8 py-3.5 text-lg font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              {t("secondary")}
            </Link>
          </div>
          <dl className="mt-12 grid w-full max-w-lg grid-cols-3 gap-4">
            {stats.map(([n, label]) => (
              <div key={label} className="rounded-2xl bg-white/70 p-3 ring-1 ring-gray-200">
                <dt className="sr-only">{label}</dt>
                <dd className="text-2xl font-bold text-gray-900">
                  {n}
                  <span className="block text-xs font-medium text-gray-500 sm:inline sm:text-sm">{label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900">{t("popular")}</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quizzes.map((q) => (
            <QuizCard key={q.id} quiz={q} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pt-8 pb-20">
        <h2 className="text-2xl font-bold text-gray-900">{t("howTitle")}</h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-3xl bg-gray-50 p-6 ring-1 ring-gray-200">
              <div className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden>
                  {s.icon}
                </span>
                <span className="text-sm font-semibold text-primary-600">STEP {i + 1}</span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-gray-900">{s.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
