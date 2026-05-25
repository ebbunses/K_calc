"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { calculators } from "../lib/calculators";

const navItems = [
  ...calculators.map((c) => ({ href: c.href, label: c.title })),
  { href: "/guides", label: "머니 팁" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // 경로 바뀌면 메뉴 닫기
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // 메뉴 열렸을 때 body 스크롤 잠금
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="w-full border-b border-border-base bg-bg/85 backdrop-blur supports-[backdrop-filter]:bg-bg/70 sticky top-0 z-30">
      <div className="mx-auto max-w-6xl px-5 md:px-8 h-16 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-baseline gap-2 group">
          <span className="font-display text-2xl text-ink">K Calc</span>
          <span className="text-[11px] tracking-widest uppercase text-ink-muted hidden sm:inline">
            Korean Calculators
          </span>
        </Link>

        {/* 데스크톱 네비 */}
        <nav className="hidden md:flex items-center gap-2 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-2.5 py-1.5 rounded-md text-ink-soft hover:text-accent hover:bg-accent-light transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 모바일 햄버거 버튼 */}
        <button
          type="button"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 rounded-md text-ink hover:bg-accent-light transition-colors"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* 모바일 드롭다운 */}
      {open && (
        <div className="md:hidden border-t border-border-base bg-bg">
          <nav className="mx-auto max-w-6xl px-5 py-2 flex flex-col">
            {navItems.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-3 rounded-md text-base transition-colors ${
                    active
                      ? "text-accent bg-accent-light"
                      : "text-ink-soft hover:text-accent hover:bg-accent-light"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
