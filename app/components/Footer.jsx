import Link from "next/link";
import { calculators } from "../lib/calculators";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border-base bg-paper">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-12 grid gap-10 md:grid-cols-3">
        <div className="space-y-3">
          <div className="font-display text-2xl text-ink">K Calc</div>
          <p className="text-sm text-ink-soft leading-relaxed max-w-xs">
            한국 세법과 4대 보험 기준에 맞춘 종합 계산기. 빠르고, 정확하고,
            광고에 가려지지 않는 결과를 지향합니다.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-ink-muted mb-3">
            Calculators
          </div>
          <ul className="space-y-2 text-sm">
            {calculators.map((c) => (
              <li key={c.slug}>
                <Link
                  href={c.href}
                  className="text-ink-soft hover:text-accent transition-colors"
                >
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-ink-muted mb-3">
            Information
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="text-ink-soft hover:text-accent transition-colors">
                사이트 소개
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-ink-soft hover:text-accent transition-colors">
                문의
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-ink-soft hover:text-accent transition-colors">
                개인정보처리방침
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-ink-soft hover:text-accent transition-colors">
                이용약관
              </Link>
            </li>
          </ul>
          <p className="mt-5 text-xs text-ink-muted leading-relaxed">
            본 사이트의 계산 결과는 참고용이며, 개인 상황에 따라 실제
            금액과 차이가 있을 수 있습니다.
          </p>
        </div>
      </div>
      <div className="border-t border-border-soft">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-5 flex flex-wrap items-center justify-between gap-3 text-xs text-ink-muted">
          <span>© {year} K Calc. All rights reserved.</span>
          <span className="font-mono">v0.1.0</span>
        </div>
      </div>
    </footer>
  );
}
