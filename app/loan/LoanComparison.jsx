"use client";

import { formatKRW } from "../lib/format";

// 3가지 방식을 가로로 비교하는 카드
// methods: [{ method, methodLabel, firstPayment, lastPayment, totalPayment, totalInterest }, ...]
export default function LoanComparison({ methods }) {
  if (!methods || methods.length === 0) return null;

  // 총 상환액이 가장 적은 방식 = 가장 유리
  const bestTotal = methods.reduce(
    (best, m) =>
      m.totalPayment > 0 && (best === null || m.totalPayment < best.totalPayment)
        ? m
        : best,
    null
  );

  return (
    <div className="bg-paper border border-border-base rounded-2xl p-6 md:p-7">
      <div className="flex items-baseline justify-between mb-5">
        <h3 className="text-sm font-medium text-ink-soft uppercase tracking-widest">
          상환 방식 비교
        </h3>
        <span className="text-xs text-ink-muted">
          총 상환액 기준 추천 표시
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {methods.map((m) => {
          const isBest = bestTotal && m.method === bestTotal.method;
          const varies = Math.abs(m.firstPayment - m.lastPayment) > 1;
          return (
            <div
              key={m.method}
              className={`relative rounded-xl border p-4 ${
                isBest
                  ? "border-accent bg-accent-light"
                  : "border-border-base bg-paper"
              }`}
            >
              {isBest && (
                <span className="absolute -top-2 right-3 bg-accent text-white text-[10px] font-medium px-2 py-0.5 rounded-full tracking-wide">
                  총 이자 가장 적음
                </span>
              )}
              <p className="text-xs text-ink-muted uppercase tracking-wider">
                {m.methodLabel}
              </p>

              <div className="mt-3">
                <p className="text-[11px] text-ink-muted mb-1">
                  {varies ? "첫 달 → 마지막 달" : "매월 상환액"}
                </p>
                {varies ? (
                  <p className="font-mono tabular text-base text-ink leading-tight">
                    {formatKRW(m.firstPayment)}원
                    <br />
                    <span className="text-ink-soft text-sm">
                      → {formatKRW(m.lastPayment)}원
                    </span>
                  </p>
                ) : (
                  <p className="font-mono tabular text-lg text-ink">
                    {formatKRW(m.firstPayment)}원
                  </p>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-border-soft space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-ink-soft">총 이자</span>
                  <span className="font-mono tabular text-ink">
                    {formatKRW(m.totalInterest)}원
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-soft">총 상환액</span>
                  <span className="font-mono tabular text-ink">
                    {formatKRW(m.totalPayment)}원
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-5 text-xs text-ink-muted leading-relaxed">
        * 일반적으로 <span className="text-ink-soft">원금균등</span>이
        총 이자가 가장 적지만 초반 부담이 큽니다.
        <span className="text-ink-soft"> 원리금균등</span>은 매월 부담이
        일정해 가계 계획을 세우기 좋습니다.
        <span className="text-ink-soft"> 만기일시</span>는 매월 부담은
        적지만 총 이자가 가장 많고 만기 자금 마련이 필요합니다.
      </p>
    </div>
  );
}
