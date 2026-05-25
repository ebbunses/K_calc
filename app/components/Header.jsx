import Link from "next/link";
import { calculators } from "../lib/calculators";

export default function Header() {
  return (
    <header className="w-full border-b border-border-base bg-bg/85 backdrop-blur supports-[backdrop-filter]:bg-bg/70 sticky top-0 z-30">
      <div className="mx-auto max-w-6xl px-5 md:px-8 h-16 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-baseline gap-2 group">
          <span className="font-display text-2xl text-ink">K Calc</span>
          <span className="text-[11px] tracking-widest uppercase text-ink-muted hidden sm:inline">
            Korean Calculators
          </span>
        </Link>
        <nav className="flex items-center gap-0.5 sm:gap-2 text-sm">
          {calculators.map((c) => (
            <Link
              key={c.slug}
              href={c.href}
              className="px-2 sm:px-2.5 py-1.5 rounded-md text-ink-soft hover:text-accent hover:bg-accent-light transition-colors"
            >
              {c.title}
            </Link>
          ))}
          <Link
            href="/guides"
            className="px-2 sm:px-2.5 py-1.5 rounded-md text-ink-soft hover:text-accent hover:bg-accent-light transition-colors"
          >
            머니 팁
          </Link>
        </nav>
      </div>
    </header>
  );
}
