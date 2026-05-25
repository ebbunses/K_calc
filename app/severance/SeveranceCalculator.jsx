"use client";

import { useState, useMemo } from "react";
import AmountInput from "../components/AmountInput";
import ResultCard from "../components/ResultCard";
import BreakdownCard from "../components/BreakdownCard";
import RatioBar from "../components/RatioBar";
import { calcSeverance } from "../lib/calc";
import { formatKRW, formatMan, formatPercent } from "../lib/format";

const SALARY_PRESETS = [
  { label: "250만", value: 2_500_000 },
  { label: "300만", value: 3_000_000 },
  { label: "400만", value: 4_000_000 },
  { label: "500만", value: 5_000_000 },
  { label: "700만", value: 7_000_000 },
];

export default function SeveranceCalculator() {
  const [avg, setAvg] = useState(4_000_000);
  const [years, setYears] = useState(5);
  const [extraMonths, setExtraMonths] = useState(0);

  const r = useMemo(
    () => calcSeverance(avg, years, extraMonths),
    [avg, years, extraMonths],
  );

  return (
    <div className="grid gap-6 md:grid-cols-5">
      <div className="md:col-span-2">
        <div className="bg-paper border border-border-base rounded-2xl p-6 md:p-7 sticky top-20 space-y-6">
          <AmountInput
            label="평균 월급여"
            value={avg}
            onChange={setAvg}
            unit="원"
            presets={SALARY_PRESETS}
            hint={
              avg
                ? `약 ${formatMan(avg)} (퇴직 직전 3개월 평균)`
                : "퇴직 직전 3개월 평균"
            }
          />

          <div>
            <label
              htmlFor="years"
              className="block text-sm text-ink-soft mb-2 font-medium"
            >
              재직 기간 (년)
            </label>
            <div className="relative">
              <input
                id="years"
                type="number"
                inputMode="numeric"
                step="1"
                min="0"
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
              {[1, 3, 5, 10, 15, 20].map((p) => (
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

          <div>
            <label
              htmlFor="extra"
              className="block text-sm text-ink-soft mb-2 font-medium"
            >
              추가 개월
            </label>
            <div className="relative">
              <input
                id="extra"
                type="number"
                inputMode="numeric"
                step="1"
                min="0"
                max="11"
                value={extraMonths}
                onChange={(e) => setExtraMonths(Number(e.target.value) || 0)}
                className="w-full bg-paper border border-border-base rounded-xl px-4 py-4 pr-16 text-2xl md:text-3xl font-mono tabular text-ink focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-soft transition"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-muted text-base">
                개월
              </span>
            </div>
          </div>

          <p className="text-xs text-ink-muted leading-relaxed">
            * 1년 미만 근속자는 퇴직금 지급 대상이 아닙니다 (근로기준법 제34조).
            평균임금에는 정기 상여금·연차수당 일부가 포함될 수 있어 실제 회사
            계산과 차이가 날 수 있습니다.
          </p>
        </div>
      </div>

      <div className="md:col-span-3 space-y-6">
        {!r.eligible ? (
          <div className="bg-paper border border-border-base rounded-2xl p-8 text-center">
            <p className="text-ink-soft">
              <span className="text-ink font-medium">
                1년 미만 근속
              </span>은 법정 퇴직금 지급 대상이 아닙니다.
            </p>
            <p className="mt-2 text-sm text-ink-muted">
              재직 기간을 12개월 이상으로 입력해 주세요.
            </p>
          </div>
        ) : (
          <>
            <ResultCard
              label="세후 실수령 퇴직금"
              amount={r.netSeverance}
              primarySub={`세전 ${formatKRW(r.severance)}원`}
              secondarySub={`실효 세율 ${formatPercent(r.effectiveTaxRate)}`}
            />

            <RatioBar
              label="세전 퇴직금 구성"
              segments={[
                {
                  label: "세후 수령",
                  value: r.netSeverance,
                  color: "var(--color-accent)",
                },
                {
                  label: "퇴직소득세",
                  value: r.tax,
                  color: "var(--color-accent-bright)",
                },
                {
                  label: "지방소득세",
                  value: r.localTax,
                  color: "#B8C5BD",
                },
              ]}
            />

            <BreakdownCard
              title="퇴직금 계산"
              rows={[
                { label: "평균 월급여", value: r.avgMonthlySalary },
                { label: "총 재직 개월", value: r.totalMonths, unit: "개월" },
                {
                  label: "재직 연수",
                  value: r.years.toFixed(2),
                  unit: "년",
                },
                {
                  label: "퇴직금 = 평균월급 × 개월/12",
                  value: r.severance,
                },
              ]}
              total={{ label: "세전 퇴직금", value: r.severance }}
            />

            <BreakdownCard
              title="퇴직소득세 산출"
              rows={[
                {
                  label: "근속연수공제",
                  value: -r.serviceDeduction,
                  note: "근속에 따라 차감",
                },
                {
                  label: "환산급여",
                  value: r.converted,
                  note: "(퇴직금-근속공제)÷연수×12",
                },
                {
                  label: "환산급여공제",
                  value: -r.convDeduction,
                },
                { label: "과세표준", value: r.taxBase },
                {
                  label: "퇴직소득세",
                  value: r.tax,
                  note: "기본세율 × 연수/12",
                },
                {
                  label: "지방소득세",
                  value: r.localTax,
                  note: "퇴직소득세 × 10%",
                },
              ]}
              total={{ label: "총 세금", value: r.totalTax }}
            />
          </>
        )}
      </div>
    </div>
  );
}
