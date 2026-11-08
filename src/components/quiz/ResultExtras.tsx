"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

type Props = {
  quizId: string;
  gradient: string;
  types: { emoji: string; name: string }[];
};

/** Parts of the result page that depend on the visitor: score bars, sharing, retry. */
export function ResultExtras({ quizId, gradient, types }: Props) {
  const t = useTranslations("Result");
  const search = useSearchParams();
  const [copied, setCopied] = useState(false);

  const isMine = search.get("me") === "1";
  const scores = (search.get("s") ?? "").split(".").map(Number);
  const hasScores = scores.length === types.length && scores.every((n) => Number.isFinite(n));
  const total = hasScores ? scores.reduce((a, b) => a + b, 0) || 1 : 1;

  async function share() {
    // Share the clean URL so friends land on the "shared result" view.
    const url = window.location.href.split("?")[0];
    if (navigator.share) {
      try {
        await navigator.share({ title: document.title, url });
        return;
      } catch {
        // Cancelled or unsupported: fall back to copying.
      }
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      {isMine && hasScores && (
        <section className="mt-4 rounded-3xl bg-gray-50 p-6 ring-1 ring-gray-200">
          <h2 className="font-bold text-gray-900">📊 {t("breakdown")}</h2>
          <ul className="mt-4 space-y-3">
            {types.map((ty, i) => (
              <li key={ty.name}>
                <div className="flex justify-between text-sm text-gray-700">
                  <span>
                    {ty.emoji} {ty.name}
                  </span>
                  <span className="font-semibold">{Math.round((scores[i] / total) * 100)}%</span>
                </div>
                <div className="mt-1 h-2.5 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
                    style={{ width: `${(scores[i] / total) * 100}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {!isMine && (
        <p className="mt-6 rounded-2xl bg-primary-50 px-5 py-4 text-center text-sm font-medium text-primary-800">
          {t("sharedNote")}
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        {isMine ? (
          <>
            <button
              type="button"
              onClick={share}
              className="flex-1 rounded-full bg-primary-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-primary-600/25 transition-colors hover:bg-primary-700"
            >
              {copied ? `✅ ${t("copied")}` : `🔗 ${t("share")}`}
            </button>
            <Link
              href={`/quizzes/${quizId}`}
              className="flex-1 rounded-full border border-gray-300 bg-white px-6 py-3.5 text-center font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              ↺ {t("retry")}
            </Link>
          </>
        ) : (
          <Link
            href={`/quizzes/${quizId}`}
            className="flex-1 rounded-full bg-primary-600 px-6 py-3.5 text-center font-semibold text-white shadow-lg shadow-primary-600/25 transition-colors hover:bg-primary-700"
          >
            {t("takeQuiz")} →
          </Link>
        )}
      </div>
    </>
  );
}
