"use client";

import { useState, useMemo } from "react";
import { formatKRW } from "../lib/format";

// 월별 상환 스케줄 - 기본은 접혀있고, 클릭 시 펼침
// 360개월 전부를 한 번에 띄우면 무거우므로 12개월씩 페이지네이션
const PAGE_SIZE = 12;

export default function AmortizationTable({ result }) {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);

  const schedule = result?.schedule ?? [];
  const totalPages = Math.ceil(schedule.length / PAGE_SIZE);
  const slice = useMemo(
    () => schedule.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE),
    [schedule, page]
  );

  if (schedule.length === 0) return null;

  return (
    <div className="bg-paper border border-border-base rounded-2xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-6 py-4 hover:bg-border-soft/30 transition"
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-ink">
          {result.methodLabel} · 월별 상환표
          <span className="ml-2 text-xs text-ink-muted">
            ({schedule.length}회차)
          </span>
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className={`text-ink-soft transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div className="border-t border-border-base">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-border-soft/40">
                <tr className="text-xs text-ink-soft uppercase tracking-wider">
                  <th className="text-left px-4 py-2 font-medium">회차</th>
                  <th className="text-right px-4 py-2 font-medium">상환금</th>
                  <th className="text-right px-4 py-2 font-medium">원금</th>
                  <th className="text-right px-4 py-2 font-medium">이자</th>
                  <th className="text-right px-4 py-2 font-medium">잔금</th>
                </tr>
              </thead>
              <tbody>
                {slice.map((row) => (
                  <tr
                    key={row.month}
                    className="border-t border-border-soft hover:bg-border-soft/20"
                  >
                    <td className="px-4 py-2 text-ink-soft">{row.month}</td>
                    <td className="px-4 py-2 text-right font-mono tabular text-ink">
                      {formatKRW(row.payment)}
                    </td>
                    <td className="px-4 py-2 text-right font-mono tabular text-ink-soft">
                      {formatKRW(row.principal)}
                    </td>
                    <td className="px-4 py-2 text-right font-mono tabular text-ink-soft">
                      {formatKRW(row.interest)}
                    </td>
                    <td className="px-4 py-2 text-right font-mono tabular text-ink-muted">
                      {formatKRW(row.balance)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-between px-6 py-3 border-t border-border-base text-xs">
              <button
                type="button"
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                className="px-3 py-1.5 rounded-md border border-border-base text-ink-soft disabled:opacity-40 hover:border-accent hover:text-accent transition"
              >
                ← 이전
              </button>
              <span className="text-ink-muted font-mono tabular">
                {page * PAGE_SIZE + 1}–
                {Math.min((page + 1) * PAGE_SIZE, schedule.length)} /{" "}
                {schedule.length}
              </span>
              <button
                type="button"
                onClick={() =>
                  setPage((p) => Math.min(totalPages - 1, p + 1))
                }
                disabled={page >= totalPages - 1}
                className="px-3 py-1.5 rounded-md border border-border-base text-ink-soft disabled:opacity-40 hover:border-accent hover:text-accent transition"
              >
                다음 →
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
