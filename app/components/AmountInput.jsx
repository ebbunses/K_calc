"use client";

import { KRW, parseDigits } from "../lib/format";

export default function AmountInput({
  label,
  value,
  onChange,
  unit = "원",
  presets = [],
  hint,
  min = 0,
  max,
  id,
}) {
  const display = value ? KRW.format(value) : "";
  const inputId = id || `amount-${label}`;

  return (
    <div>
      <label
        htmlFor={inputId}
        className="block text-sm text-ink-soft mb-2 font-medium"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={inputId}
          type="text"
          inputMode="numeric"
          value={display}
          placeholder="0"
          onChange={(e) => {
            let n = parseDigits(e.target.value);
            if (typeof max === "number") n = Math.min(n, max);
            if (typeof min === "number") n = Math.max(n, min);
            onChange(n);
          }}
          className="w-full bg-paper border border-border-base rounded-xl px-4 py-4 pr-14 text-2xl md:text-3xl font-mono tabular text-ink placeholder:text-ink-muted focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-soft transition"
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-muted text-base">
          {unit}
        </span>
      </div>
      {hint && (
        <p className="mt-2 text-xs text-ink-muted">{hint}</p>
      )}
      {presets.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {presets.map((p) => (
            <button
              key={p.value}
              type="button"
              onClick={() => onChange(p.value)}
              className={`px-3 py-1.5 rounded-full text-xs border transition ${
                value === p.value
                  ? "bg-accent text-white border-accent"
                  : "bg-paper border-border-base text-ink-soft hover:border-accent hover:text-accent"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
