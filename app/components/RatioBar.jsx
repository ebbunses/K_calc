import { formatPercent } from "../lib/format";

export default function RatioBar({ segments, label }) {
  const total = segments.reduce((s, x) => s + Math.max(0, x.value), 0);
  const safeTotal = total > 0 ? total : 1;

  return (
    <div className="bg-paper border border-border-base rounded-2xl p-6 md:p-7">
      {label && (
        <p className="text-sm font-medium text-ink-soft mb-4 uppercase tracking-widest">
          {label}
        </p>
      )}
      <div className="flex h-3 w-full overflow-hidden rounded-full bg-border-soft">
        {segments.map((s, i) => {
          const w = (Math.max(0, s.value) / safeTotal) * 100;
          if (w <= 0) return null;
          return (
            <div
              key={s.label + i}
              style={{ width: `${w}%`, background: s.color }}
              title={`${s.label} ${formatPercent(s.value / safeTotal)}`}
            />
          );
        })}
      </div>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {segments.map((s, i) => (
          <li
            key={s.label + i}
            className="flex items-center justify-between gap-3 text-sm"
          >
            <span className="flex items-center gap-2 text-ink-soft">
              <span
                className="inline-block w-2.5 h-2.5 rounded-sm"
                style={{ background: s.color }}
              />
              {s.label}
            </span>
            <span className="font-mono tabular text-ink">
              {formatPercent(s.value / safeTotal)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
