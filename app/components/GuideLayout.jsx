import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react";
import { guideCategories, guidesByCategory } from "../lib/guides";

export default function GuideLayout({ guide, children }) {
  const cat = guideCategories[guide.category];
  const related = guidesByCategory(guide.category).filter(
    (g) => g.slug !== guide.slug,
  );

  return (
    <div className="mx-auto max-w-3xl px-5 md:px-8">
      <nav className="pt-10 md:pt-14 pb-4 text-sm flex items-center gap-2 text-ink-muted">
        <Link
          href="/guides"
          className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
        >
          <ArrowLeft size={14} />
          머니 팁 목록
        </Link>
        <span className="text-ink-muted/60">/</span>
        <Link
          href={cat.href}
          className="hover:text-accent transition-colors"
        >
          {cat.label}
        </Link>
      </nav>

      <header className="pb-8 md:pb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
          {cat.label} 머니 팁
        </p>
        <h1 className="font-display text-3xl md:text-5xl leading-[1.15] text-ink">
          {guide.title}
        </h1>
        <p className="mt-4 text-base md:text-lg text-ink-soft leading-relaxed">
          {guide.description}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-ink-muted">
          <span className="inline-flex items-center gap-1.5">
            <Clock size={13} />
            읽는 데 약 {guide.readMinutes}분
          </span>
          <span>·</span>
          <time dateTime={guide.publishedAt}>
            게시: {guide.publishedAt.replace(/-/g, ".")}
          </time>
          {guide.lastReviewed && (
            <>
              <span>·</span>
              <span>마지막 검토: {guide.lastReviewed.replace(/-/g, ".")}</span>
            </>
          )}
        </div>
      </header>

      <article className="prose-guide space-y-5 text-ink-soft leading-relaxed text-[15.5px] md:text-base pb-12">
        {children}
      </article>

      <div className="ad-slot my-12" aria-hidden="true" />

      <section className="border-t border-border-soft pt-10 pb-6">
        <h2 className="font-display text-xl text-ink mb-4">
          {cat.label} 계산기로 직접 확인
        </h2>
        <Link
          href={cat.href}
          className="group inline-flex items-center justify-between gap-4 w-full bg-paper border border-border-base rounded-2xl px-5 py-4 hover:border-accent transition-colors"
        >
          <span className="text-ink">
            <span className="block text-xs uppercase tracking-[0.18em] text-ink-muted mb-1">
              Calculator
            </span>
            <span className="font-display text-lg">
              {cat.label} 계산기 열기
            </span>
          </span>
          <ArrowUpRight
            size={18}
            className="text-ink-muted group-hover:text-accent transition-colors"
          />
        </Link>
      </section>

      {related.length > 0 && (
        <section className="pt-6 pb-20">
          <h2 className="font-display text-xl text-ink mb-4">
            같은 카테고리의 다른 팁
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {related.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="group bg-paper border border-border-base rounded-2xl p-5 hover:border-accent transition-colors"
              >
                <p className="font-display text-base text-ink leading-snug mb-1.5 group-hover:text-accent transition-colors">
                  {g.title}
                </p>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {g.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
