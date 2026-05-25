import Link from "next/link";
import { BookOpen, ArrowUpRight, Clock } from "lucide-react";
import { guidesByCategory } from "../lib/guides";

export default function RelatedGuides({ category }) {
  const items = guidesByCategory(category);
  if (items.length === 0) return null;

  return (
    <section className="max-w-3xl mb-16">
      <div className="flex items-baseline justify-between mb-5">
        <h2 className="font-display text-2xl md:text-3xl text-ink">
          관련 머니 팁
        </h2>
        <Link
          href="/guides"
          className="text-sm text-ink-muted hover:text-accent transition-colors inline-flex items-center gap-1"
        >
          전체 보기
          <ArrowUpRight size={14} />
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((g) => (
          <Link
            key={g.slug}
            href={`/guides/${g.slug}`}
            className="group bg-paper border border-border-base rounded-2xl p-5 hover:border-accent hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-9 h-9 rounded-lg bg-accent-light text-accent flex items-center justify-center">
                <BookOpen size={16} strokeWidth={1.75} />
              </div>
              <ArrowUpRight
                size={15}
                className="text-ink-muted group-hover:text-accent transition-colors"
              />
            </div>
            <p className="font-display text-lg text-ink leading-snug mb-1.5 group-hover:text-accent transition-colors">
              {g.title}
            </p>
            <p className="text-xs text-ink-muted leading-relaxed mb-3">
              {g.description}
            </p>
            <span className="inline-flex items-center gap-1 text-[11px] text-ink-muted">
              <Clock size={11} />
              읽는 데 {g.readMinutes}분
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
