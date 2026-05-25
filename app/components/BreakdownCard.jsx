import { formatKRW } from "../lib/format";

export default function BreakdownCard({ title, rows, total }) {
  return (
    <div className="bg-paper border border-border-base rounded-2xl p-6 md:p-7">
      {title && (
        <h3 className="text-sm font-medium text-ink-soft mb-4 uppercase tracking-widest">
          {title}
        </h3>
      )}
      <ul className="divide-y divide-border-soft">
        {rows.map((r, i) => (
          <li
            key={r.label + i}
            className="py-3 flex items-baseline justify-between gap-4"
          >
            <div className="min-w-0">
              <span className="text-sm md:text-base text-ink">{r.label}</span>
              {r.note && (
                <span className="ml-2 text-xs text-ink-muted">{r.note}</span>
              )}
            </div>
            <span className="font-mono tabular text-sm md:text-base text-ink whitespace-nowrap">
              {typeof r.value === "number" ? formatKRW(r.value) : r.value}
              <span className="ml-1 text-ink-muted text-xs">
                {r.unit ?? "원"}
              </span>
            </span>
          </li>
        ))}
      </ul>
      {total && (
        <div className="mt-4 pt-4 border-t border-border-base flex items-baseline justify-between">
          <span className="text-sm font-medium text-ink">{total.label}</span>
          <span className="font-mono tabular text-lg md:text-xl text-accent">
            {typeof total.value === "number" ? formatKRW(total.value) : total.value}
            <span className="ml-1 text-ink-muted text-xs">
              {total.unit ?? "원"}
            </span>
          </span>
        </div>
      )}
    </div>
  );
}
