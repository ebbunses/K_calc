import { formatKRW } from "../lib/format";

export default function ResultCard({
  label,
  amount,
  unit = "원",
  primarySub,
  secondarySub,
}) {
  return (
    <div className="bg-accent-light border border-accent-soft rounded-2xl p-7 md:p-10">
      <p className="text-xs uppercase tracking-[0.2em] text-accent-bright">
        {label}
      </p>
      <div className="mt-3 flex items-baseline gap-2 flex-wrap">
        <span className="font-mono tabular text-5xl md:text-7xl leading-none text-ink">
          {formatKRW(amount)}
        </span>
        <span className="text-xl md:text-2xl text-ink-soft">{unit}</span>
      </div>
      {(primarySub || secondarySub) && (
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
          {primarySub && <span>{primarySub}</span>}
          {secondarySub && (
            <span className="text-ink-muted">{secondarySub}</span>
          )}
        </div>
      )}
    </div>
  );
}
