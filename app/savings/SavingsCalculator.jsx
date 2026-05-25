"use client";

import { useState, useMemo } from "react";
import AmountInput from "../components/AmountInput";
import ResultCard from "../components/ResultCard";
import BreakdownCard from "../components/BreakdownCard";
import RatioBar from "../components/RatioBar";
import { calcSavings } from "../lib/calc";
import { formatKRW, formatMan } from "../lib/format";

const INSTALLMENT_PRESETS = [
  { label: "10만", value: 100_000 },
  { label: "30만", value: 300_000 },
  { label: "50만", value: 500_000 },
  { label: "100만", value: 1_000_000 },
  { label: "200만", value: 2_000_000 },
];

const DEPOSIT_PRESETS = [
  { label: "100만", value: 1_000_000 },
  { label: "500만", value: 5_000_000 },
  { label: "1,000만", value: 10_000_000 },
  { label: "3,000만", value: 30_000_000 },
  { label: "5,000만", value: 50_000_000 },
  { label: "1억", value: 100_000_000 },
];

function SegmentedControl({ label, value, options, onChange }) {
  return (
    <div>
      {label && (
        <p className="block text-sm text-ink-soft mb-2 font-medium">
          {label}
        </p>
      )}
      <div className="grid grid-cols-2 gap-1 p-1 bg-border-soft rounded-xl">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`px-3 py-2 rounded-lg text-sm transition ${
              value === opt.value
                ? "bg-paper text-ink shadow-sm font-medium"
                : "text-ink-soft hover:text-ink"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function SavingsCalculator() {
  const [product, setProduct] = useState("installment"); // 적금 vs 정기예금
  const [compound, setCompound] = useState("simple");     // 단리 vs 월복리
  const [taxType, setTaxType] = useState("general");      // 과세 vs 비과세
  const [deposit, setDeposit] = useState(500_000);
  const [rate, setRate] = useState(3.5);
  const [months, setMonths] = useState(24);

  const r = useMemo(
    () => calcSavings(deposit, rate, months, { product, compound, taxType }),
    [deposit, rate, months, product, compound, taxType]
  );

  const isDeposit = product === "deposit";
  const presets = isDeposit ? DEPOSIT_PRESETS : INSTALLMENT_PRESETS;

  return (
    <div className="grid gap-6 md:grid-cols-5">
      <div className="md:col-span-2">
        <div className="bg-paper border border-border-base rounded-2xl p-6 md:p-7 sticky top-20 space-y-6">
          <SegmentedControl
            label="상품 종류"
            value={product}
            onChange={setProduct}
            options={[
              { value: "installment", label: "적금 (매월 납입)" },
              { value: "deposit", label: "정기예금 (일시예치)" },
            ]}
          />

          <AmountInput
            label={isDeposit ? "예치 금액" : "월 납입액"}
            value={deposit}
            onChange={setDeposit}
            unit="원"
            presets={presets}
            hint={
              deposit
                ? `약 ${formatMan(deposit)}`
                : isDeposit
                  ? "예: 10,000,000원"
                  : "예: 500,000원"
            }
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
                max="20"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value) || 0)}
                className="w-full bg-paper border border-border-base rounded-xl px-4 py-4 pr-14 text-2xl md:text-3xl font-mono tabular text-ink focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-soft transition"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-muted text-base">
                %
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {[2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 6.0].map((p) => (
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
            <label htmlFor="months" className="block text-sm text-ink-soft mb-2 font-medium">
              {isDeposit ? "예치 기간" : "납입 기간"}
            </label>
            <div className="relative">
              <input
                id="months"
                type="number"
                inputMode="numeric"
                step="1"
                min="1"
                max="600"
                value={months}
                onChange={(e) => setMonths(Number(e.target.value) || 0)}
                className="w-full bg-paper border border-border-base rounded-xl px-4 py-4 pr-16 text-2xl md:text-3xl font-mono tabular text-ink focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-soft transition"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-muted text-base">
                개월
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {[6, 12, 24, 36, 60].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setMonths(p)}
                  className={`px-3 py-1.5 rounded-full text-xs border transition ${
                    months === p
                      ? "bg-accent text-white border-accent"
                      : "bg-paper border-border-base text-ink-soft hover:border-accent hover:text-accent"
                  }`}
                >
                  {p}개월
                </button>
              ))}
            </div>
          </div>

          <SegmentedControl
            label="이자 계산 방식"
            value={compound}
            onChange={setCompound}
            options={[
              { value: "simple", label: "단리" },
              { value: "monthly", label: "월복리" },
            ]}
          />

          <SegmentedControl
            label="세금"
            value={taxType}
            onChange={setTaxType}
            options={[
              { value: "general", label: "일반과세 15.4%" },
              { value: "tax-free", label: "비과세" },
            ]}
          />

          <p className="text-xs text-ink-muted leading-relaxed">
            * 대부분의 한국 시중은행 적금은 <span className="text-ink-soft">단리·일반과세</span> 기준입니다.
            청년도약계좌·ISA·농협 조합원 등은 비과세 적용이 가능합니다.
          </p>
        </div>
      </div>

      <div className="md:col-span-3 space-y-6">
        <ResultCard
          label="만기 수령액"
          amount={r.maturity}
          primarySub={`원금 ${formatKRW(r.principal)}원`}
          secondarySub={`세후 이자 ${formatKRW(r.netInterest)}원`}
        />

        <RatioBar
          label="만기 수령액 구성"
          segments={[
            { label: "원금", value: r.principal, color: "var(--color-accent)" },
            { label: "세후 이자", value: r.netInterest, color: "var(--color-accent-bright)" },
            ...(r.tax > 0
              ? [{ label: "이자소득세", value: r.tax, color: "#B8C5BD" }]
              : []),
          ]}
        />

        <BreakdownCard
          title="이자 계산 내역"
          rows={[
            {
              label: isDeposit
                ? "원금 (일시예치)"
                : "원금 (월 납입 × 개월)",
              value: r.principal,
            },
            {
              label: "세전 이자",
              value: r.grossInterest,
              note: compound === "monthly" ? "월복리" : "단리",
            },
            {
              label: r.taxType === "tax-free" ? "비과세" : "이자소득세 15.4%",
              value: -r.tax,
            },
            { label: "세후 이자", value: r.netInterest },
          ]}
          total={{ label: "만기 수령액", value: r.maturity }}
        />
      </div>
    </div>
  );
}
