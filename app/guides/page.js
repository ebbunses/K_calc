import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock } from "lucide-react";
import { publishedGuides, guideCategories } from "../lib/guides";

export const metadata = {
  title: "머니 팁 — 연봉·퇴직금·대출·적금 실전 정보",
  description:
    "연봉 협상, 퇴직금 절세, 대출 한도, 적금 비교까지. 한국 직장인이 자주 마주치는 돈 문제를 실제 사례와 계산식으로 풀어드립니다.",
  keywords: [
    "연봉 협상",
    "퇴직금 IRP",
    "DSR 계산",
    "청년도약계좌",
    "ISA",
    "비과세",
    "머니 팁",
    "K Calc",
  ],
  alternates: { canonical: "/guides" },
  openGraph: {
    type: "website",
    url: "/guides",
    title: "머니 팁 — K Calc",
    description:
      "연봉·퇴직금·대출·적금에 대한 실전 머니 팁 모음. 계산기와 함께 보면 더 정확합니다.",
  },
};

export default function GuidesIndexPage() {
  const visible = publishedGuides();
  const grouped = Object.entries(guideCategories).map(([key, cat]) => ({
    key,
    ...cat,
    items: visible.filter((g) => g.category === key),
  }));

  return (
    <div className="mx-auto max-w-5xl px-5 md:px-8">
      <section className="pt-12 md:pt-16 pb-8 md:pb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
          Money Tips
        </p>
        <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-ink">
          돈 문제, 한 번 더<br />
          <span className="text-accent">정확하게.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base md:text-lg text-ink-soft leading-relaxed">
          계산기 옆에 두고 같이 읽으면 좋은 글들을 모았습니다. 연봉 협상,
          퇴직금 IRP 이전, 대출 한도 계산, 청년도약계좌·ISA 활용까지 — 한국
          직장인이 자주 마주치는 돈 문제를 실제 사례와 함께 풀어드립니다.
        </p>
      </section>

      {grouped.map(({ key, label, href, items }) => (
        <section key={key} className="mb-14 md:mb-16">
          <div className="flex items-baseline justify-between mb-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">
              {label}
            </h2>
            <Link
              href={href}
              className="text-sm text-ink-muted hover:text-accent transition-colors inline-flex items-center gap-1"
            >
              계산기 열기
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid gap-4 md:gap-5 sm:grid-cols-2">
            {items.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="group relative bg-paper border border-border-base rounded-2xl p-6 hover:border-accent hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-light text-accent flex items-center justify-center">
                    <BookOpen size={18} strokeWidth={1.75} />
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-ink-muted group-hover:text-accent transition-colors"
                  />
                </div>
                <h3 className="font-display text-xl text-ink leading-snug mb-2 group-hover:text-accent transition-colors">
                  {g.title}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed mb-4">
                  {g.description}
                </p>
                <div className="flex items-center gap-3 text-xs text-ink-muted">
                  <span className="inline-flex items-center gap-1">
                    <Clock size={12} />
                    {g.readMinutes}분
                  </span>
                  <span>·</span>
                  <time dateTime={g.publishedAt}>
                    {g.publishedAt.replace(/-/g, ".")}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <div className="ad-slot mb-16" aria-hidden="true" />

      <section className="max-w-3xl pb-16 md:pb-24 text-sm text-ink-muted leading-relaxed">
        <p>
          본 글들은 일반적인 사례를 기준으로 한 안내이며, 개인의 소득·
          재직 기간·가족 상황·은행 상품에 따라 결과가 달라질 수 있습니다.
          정확한 금액과 절차는 국세청·금융감독원·거래 금융기관 등 공식 기관을
          통해 확인하시기 바랍니다.
        </p>
      </section>
    </div>
  );
}
