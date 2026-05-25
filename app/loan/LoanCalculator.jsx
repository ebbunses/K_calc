"use client";

import { useState, useMemo } from "react";
import AmountInput from "../components/AmountInput";
import ResultCard from "../components/ResultCard";
import BreakdownCard from "../components/BreakdownCard";
import RatioBar from "../components/RatioBar";
import LoanComparison from "./LoanComparison";
import AmortizationTable from "./AmortizationTable";
import { calcLoanAll } from "../lib/calc";
import { formatKRW, formatMan } from "../lib/format";

const METHOD_OPTIONS = [
  { key: "equalPayment", label: "원리금균등", hint: "매월 동일 금액" },
  { key: "equalPrincipal", label: "원금균등", hint: "원금 동일, 이자 감소" },
  { key: "bullet", label: "만기일시", hint: "이자만 내다 만기 일시상환" },
];

const PRINCIPAL_PRESETS = [
  { label: "5,000만", value: 50_000_000 },
  { label: "1억", value: 100_000_000 },
  { label: "2억", value: 200_000_000 },
  { label: "3억", value: 300_000_000 },
  { label: "5억", value: 500_000_000 },
];

export default function LoanCalculator() {
  const [principal, setPrincipal] = useState(100_000_000);
  const [rate, setRate] = useState(4.5);
  const [years, setYears] = useState(30);
  const [activeMethod, setActiveMethod] = useState("equalPayment");

  const all = useMemo(
    () => calcLoanAll(principal, rate, years),
    [principal, rate, years]
  );
  const methods = [all.equalPayment, all.equalPrincipal, all.bullet];
  const current = all[activeMethod];

  return (
    <div className="grid gap-6 md:grid-cols-5">
      <div className="md:col-span-2">
        <div className="bg-paper border border-border-base rounded-2xl p-6 md:p-7 sticky top-20 space-y-6">
          <AmountInput
            label="대출 원금"
            value={principal}
            onChange={setPrincipal}
            unit="원"
            presets={PRINCIPAL_PRESETS}
            hint={principal ? `약 ${formatMan(principal)}` : "예: 100,000,000원"}
          />

          <div>
            <label htmlFor="rate" className="block text-sm text-ink-soft mb-2 font-medium">
              연 이자율
            </label>
            <div className="relative">
              <input
                id="rate"
                type="number"
                inputMode="decimal"
                step="0.01"
                min="0"
                max="30"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value) || 0)}
                className="w-full bg-paper border border-border-base rounded-xl px-4 py-4 pr-14 text-2xl md:text-3xl font-mono tabular text-ink focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-soft transition"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-muted text-base">
                %
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {[3.0, 3.5, 4.0, 4.5, 5.0, 6.0, 7.0].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setRate(p)}
                  className={`px-3 py-1.5 rounded-full text-xs border transition ${
                    rate === p
                      ? "bg-accent text-white border-accent"
                      : "bg-paper border-border-base text-ink-soft hover:border-accent hover:text-accent"
                  }`}
                >
                  {p.toFixed(1)}%
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="years" className="block text-sm text-ink-soft mb-2 font-medium">
              상환 기간
            </label>
            <div className="relative">
              <input
                id="years"
                type="number"
                inputMode="numeric"
                step="1"
                min="1"
                max="50"
                value={years}
                onChange={(e) => setYears(Number(e.target.value) || 0)}
                className="w-full bg-paper border border-border-base rounded-xl px-4 py-4 pr-14 text-2xl md:text-3xl font-mono tabular text-ink focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-soft transition"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-muted text-base">
                년
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {[5, 10, 15, 20, 30, 40].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setYears(p)}
                  className={`px-3 py-1.5 rounded-full text-xs border transition ${
                    years === p
                      ? "bg-accent text-white border-accent"
                      : "bg-paper border-border-base text-ink-soft hover:border-accent hover:text-accent"
                  }`}
                >
                  {p}년
                </button>
              ))}
            </div>
          </div>

          <p className="text-xs text-ink-muted leading-relaxed">
            * 중도상환수수료, 인지세, 보증료 등은 반영되지 않습니다.
            실제 대출 시 은행 안내를 따르세요.
          </p>
        </div>
      </div>

      <div className="md:col-span-3 space-y-6">
        {/* 3가지 방식 한눈에 비교 */}
        <LoanComparison methods={methods} />

        {/* 방식 선택 탭 - 상세 결과 */}
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {METHOD_OPTIONS.map((opt) => (
              <button
                key={opt.key}
                type="button"
                onClick={() => setActiveMethod(opt.key)}
                className={`px-4 py-2 rounded-full text-sm border transition ${
                  activeMethod === opt.key
                    ? "bg-accent text-white border-accent"
                    : "bg-paper border-border-base text-ink-soft hover:border-accent hover:text-accent"
                }`}
              >
                {opt.label}
                <span
                  className={`ml-2 text-xs ${
                    activeMethod === opt.key
                      ? "text-white/70"
                      : "text-ink-muted"
                  }`}
                >
                  {opt.hint}
                </span>
              </button>
            ))}
          </div>

          <ResultCard
            label={`${current.methodLabel} · ${
              Math.abs(current.firstPayment - current.lastPayment) > 1
                ? "첫 달 상환액"
                : "월 상환액"
            }`}
            amount={current.firstPayment}
            primarySub={`${current.months}개월 상환`}
            secondarySub={
              Math.abs(current.firstPayment - current.lastPayment) > 1
                ? `마지막 달 ${formatKRW(current.lastPayment)}원`
                : `총 상환액 ${formatKRW(current.totalPayment)}원`
            }
          />
        </div>

        <RatioBar
          label="총 상환액 구성"
          segments={[
            {
              label: "원금",
              value: current.principal,
              color: "var(--color-accent)",
            },
            {
              label: "이자",
              value: current.totalInterest,
              color: "#B8C5BD",
            },
          ]}
        />

        <BreakdownCard
          title={`${current.methodLabel} 상환 요약`}
          rows={[
            { label: "원금", value: current.principal },
            { label: "총 이자", value: current.totalInterest },
            { label: "총 상환액", value: current.totalPayment },
            {
              label: "평균 월 상환액",
              value: current.avgPayment,
            },
            {
              label: "원금 대비 이자 비율",
              value:
                current.principal > 0
                  ? `${((current.totalInterest / current.principal) * 100).toFixed(1)}%`
                  : "0%",
              unit: "",
            },
          ]}
        />

        {/* 월별 상환표 - 펼치기 */}
        <AmortizationTable result={current} />
      </div>
    </div>
  );
}
