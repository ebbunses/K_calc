export const KRW = new Intl.NumberFormat("ko-KR");

export function formatKRW(n) {
  if (!Number.isFinite(n)) return "0";
  return KRW.format(Math.round(n));
}

export function formatKRWUnit(n) {
  return `${formatKRW(n)}원`;
}

export function formatMan(n) {
  if (!Number.isFinite(n) || n === 0) return "0원";
  const abs = Math.abs(Math.round(n));
  const eok = Math.floor(abs / 100_000_000);
  const man = Math.floor((abs % 100_000_000) / 10_000);
  const won = abs % 10_000;
  const parts = [];
  if (eok > 0) parts.push(`${KRW.format(eok)}억`);
  if (man > 0) parts.push(`${KRW.format(man)}만`);
  if (won > 0 || parts.length === 0) parts.push(`${KRW.format(won)}`);
  return `${n < 0 ? "-" : ""}${parts.join(" ")}원`;
}

export function formatPercent(ratio, digits = 1) {
  if (!Number.isFinite(ratio)) return "0%";
  return `${(ratio * 100).toFixed(digits)}%`;
}

export function parseDigits(s) {
  if (typeof s !== "string") return 0;
  const cleaned = s.replace(/[^\d]/g, "");
  if (!cleaned) return 0;
  return Number(cleaned);
}
