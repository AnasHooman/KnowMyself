import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

interface QuizCardProps {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
}

export function QuizCard({ id, title, description, thumbnailUrl }: QuizCardProps) {
  const t = useTranslations("QuizCard");

  return (
    <Link
      href={`/quizzes/${id}`}
      className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={thumbnailUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-gray-600">{description}</p>
        <span className="mt-3 inline-block rounded-full bg-primary-600 px-4 py-1.5 text-sm font-medium text-white transition-colors group-hover:bg-primary-700">
          {t("start")}
        </span>
      </div>
    </Link>
  );
}
