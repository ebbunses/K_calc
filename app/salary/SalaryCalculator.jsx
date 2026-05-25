"use client";

import { useState, useMemo } from "react";
import AmountInput from "../components/AmountInput";
import ResultCard from "../components/ResultCard";
import BreakdownCard from "../components/BreakdownCard";
import RatioBar from "../components/RatioBar";
import { calcNetSalary } from "../lib/calc";
import { formatKRW, formatMan, formatPercent } from "../lib/format";

const PRESETS = [
  { label: "3,000만", value: 30_000_000 },
  { label: "4,000만", value: 40_000_000 },
  { label: "5,000만", value: 50_000_000 },
  { label: "7,000만", value: 70_000_000 },
  { label: "1억", value: 100_000_000 },
  { label: "1.5억", value: 150_000_000 },
];

// 작은 숫자 stepper (부양가족·자녀)
function StepperInput({ label, value, onChange, max = 10, hint }) {
  return (
    <div>
      <label className="block text-sm text-ink-soft mb-2 font-medium">
        {label}
      </label>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(0, value - 1))}
          className="w-10 h-10 rounded-full border border-border-base text-ink-soft hover:border-accent hover:text-accent transition"
          aria-label="감소"
        >
          −
        </button>
        <span className="font-mono tabular text-2xl text-ink w-10 text-center">
          {value}
        </span>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          className="w-10 h-10 rounded-full border border-border-base text-ink-soft hover:border-accent hover:text-accent transition"
          aria-label="증가"
        >
          +
        </button>
        {hint && (
          <span className="text-xs text-ink-muted ml-2">{hint}</span>
        )}
      </div>
    </div>
  );
}

export default function SalaryCalculator() {
  const [annual, setAnnual] = useState(50_000_000);
  const [dependents, setDependents] = useState(0);
  const [children, setChildren] = useState(0);
  const [mealNontax, setMealNontax] = useState(true);

  const r = useMemo(
    () => calcNetSalary(annual, { dependents, children, mealNontax }),
    [annual, dependents, children, mealNontax]
  );

  return (
    <div className="grid gap-6 md:grid-cols-5">
      <div className="md:col-span-2">
        <div className="bg-paper border border-border-base rounded-2xl p-6 md:p-7 sticky top-20 space-y-6">
          <AmountInput
            label="세전 연봉"
            value={annual}
            onChange={setAnnual}
            unit="원"
            presets={PRESETS}
            hint={annual ? `약 ${formatMan(annual)}` : "예: 50,000,000원"}
          />

          <StepperInput
            label="부양가족 수 (본인 제외)"
            value={dependents}
            onChange={setDependents}
            hint="배우자 포함"
          />

          <StepperInput
            label="자녀 수 (8세 이상)"
            value={children}
            onChange={setChildren}
            hint="자녀 세액공제용"
          />

          <label className="flex items-center justify-between gap-3 cursor-pointer">
            <div>
              <p className="text-sm text-ink font-medium">비과세 식대 적용</p>
              <p className="text-xs text-ink-muted mt-0.5">
                월 20만원 비과세 (대부분의 직장인 해당)
              </p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={mealNontax}
              onClick={() => setMealNontax((v) => !v)}
              className={`relative w-12 h-7 rounded-full transition ${
                mealNontax ? "bg-accent" : "bg-border-base"
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white transition-transform ${
                  mealNontax ? "translate-x-5" : ""
                }`}
              />
            </button>
          </label>

          <p className="text-xs text-ink-muted leading-relaxed">
            * 2024년 세법·4대보험 요율 기준. 실제 회사에서 적용하는 비과세
            항목(자가운전보조금, 연구개발비 등)이 있으면 실수령액은 더 높을 수
            있습니다.
          </p>
        </div>
      </div>

      <div className="md:col-span-3 space-y-6">
        <ResultCard
          label="월 실수령액"
          amount={r.netMonthly}
          primarySub={`연 실수령 ${formatKRW(r.netAnnual)}원`}
          secondarySub={`공제율 ${formatPercent(r.deductionRate)}`}
        />

        <RatioBar
          label="월급 구성"
          segments={[
            {
              label: "실수령",
              value: r.netMonthly,
              color: "var(--color-accent)",
            },
            {
              label: "4대 보험",
              value: r.insuranceMonthly,
              color: "var(--color-accent-bright)",
            },
            {
              label: "소득세 + 지방세",
              value: r.monthlyIncomeTax + r.monthlyLocalTax,
              color: "#B8C5BD",
            },
          ]}
        />

        <BreakdownCard
          title="4대 보험 (월)"
          rows={[
            {
              label: "국민연금",
              value: r.pension,
              note: "과세 보수월액 × 4.5%",
            },
            { label: "건강보험", value: r.health, note: "과세 보수월액 × 3.545%" },
            {
              label: "장기요양보험",
              value: r.longTermCare,
              note: "건강보험료 × 12.95%",
            },
            { label: "고용보험", value: r.employment, note: "과세 보수월액 × 0.9%" },
          ]}
          total={{ label: "4대 보험 합계", value: r.insuranceMonthly }}
        />

        <BreakdownCard
          title="세금 (월)"
          rows={[
            {
              label: "소득세",
              value: r.monthlyIncomeTax,
              note: "근로·자녀 세액공제 후",
            },
            {
              label: "지방소득세",
              value: r.monthlyLocalTax,
              note: "소득세 × 10%",
            },
          ]}
          total={{
            label: "세금 합계",
            value: r.monthlyIncomeTax + r.monthlyLocalTax,
          }}
        />

        <BreakdownCard
          title="과세 산출 내역 (연)"
          rows={[
            ...(r.mealMonthly > 0
              ? [
                  {
                    label: "비과세 식대",
                    value: -r.mealMonthly * 12,
                    note: "월 20만원 × 12",
                  },
                ]
              : []),
            { label: "과세 대상 연봉", value: r.taxableAnnual },
            { label: "근로소득공제", value: -r.earnedDeduction },
            {
              label: `인적공제 (${r.personCount}명)`,
              value: -r.personalDeduction,
              note: "1인 150만원",
            },
            { label: "과세표준", value: r.taxBase },
            { label: "산출세액", value: r.grossTax },
            {
              label: "근로소득 세액공제",
              value: -r.earnedCredit,
              note: "산출세액 × 15% 근사",
            },
            ...(r.childCredit > 0
              ? [
                  {
                    label: `자녀 세액공제 (${r.children}명)`,
                    value: -r.childCredit,
                  },
                ]
              : []),
            { label: "결정세액", value: r.incomeTaxAnnual },
          ]}
        />
      </div>
    </div>
  );
}
