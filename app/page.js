import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { calculators } from "./lib/calculators";

export const metadata = {
  title: "K Calc — 한국형 종합 계산기",
  description:
    "연봉 실수령액, 퇴직금, 대출 이자, 적금 만기까지. 2025년 한국 세법과 4대 보험 기준으로 정확하게 계산하는 무료 종합 계산기.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8">
      <section className="pt-16 md:pt-24 pb-10 md:pb-16">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-5">
            Korean Calculators · 2025
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-ink">
            계산은 정확하게,
            <br />
            <span className="text-accent">결과는 한눈에.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ink-soft leading-relaxed">
            연봉 실수령액부터 퇴직금, 대출 이자, 적금 만기까지. 한국 세법과 4대
            보험 기준에 맞춰 빠르고 깔끔하게 계산해드립니다.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {calculators.map(({ slug, title, subtitle, description, href, Icon }) => (
            <Link
              key={slug}
              href={href}
              className="group relative bg-paper border border-border-base rounded-2xl p-7 md:p-8 hover:border-accent hover:-translate-y-0.5 transition-all duration-200 shadow-[0_1px_0_rgba(26,36,33,0.02)]"
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl bg-accent-light text-accent flex items-center justify-center group-hover:bg-accent-soft transition-colors">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-ink-muted group-hover:text-accent transition-colors"
                />
              </div>
              <div className="mt-6">
                <p className="text-[11px] uppercase tracking-[0.18em] text-ink-muted mb-1.5">
                  {subtitle}
                </p>
                <h2 className="font-display text-3xl text-ink mb-3">{title}</h2>
                <p className="text-sm text-ink-soft leading-relaxed">
                  {description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="ad-slot mb-20" aria-hidden="true" />

      <section className="pb-16 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-4">
          왜 K Calc 인가요?
        </h2>
        <div className="space-y-4 text-ink-soft leading-relaxed">
          <p>
            국내 계산기 사이트는 대부분 광고로 가려져 있고, 계산 근거가
            불투명합니다. K Calc는 한국 세법과 4대 보험 요율을 정확히
            반영하고, 결과 옆에 계산식을 함께 보여드립니다. 비과세 식대·
            자녀 세액공제·복리·퇴직소득세까지 디테일을 챙겼습니다.
          </p>
          <p>
            모바일에서도 큰 숫자로 결과를 확인할 수 있도록 디자인했습니다.
            입력값은 브라우저에 저장되지 않으며, 서버로 전송되지 않습니다.
          </p>
        </div>
      </section>

      <section className="pb-24 max-w-3xl">
        <h2 className="font-display text-2xl md:text-3xl text-ink mb-5">
          어떤 계산기를 골라야 할까요?
        </h2>
        <div className="space-y-4 text-ink-soft leading-relaxed">
          <p>
            <Link href="/salary" className="text-accent underline">연봉 실수령액 계산기</Link>는
            세전 연봉으로 내 통장에 실제로 들어오는 월급을 알고 싶을 때
            사용합니다. 이직 협상이나 새 직장 선택 시 가장 많이 찾는
            계산기입니다.
          </p>
          <p>
            <Link href="/loan" className="text-accent underline">대출 이자 계산기</Link>는
            주택담보대출, 신용대출, 자동차 할부의 월 상환액과 총 이자를
            계산합니다. 원리금균등·원금균등·만기일시 3가지 방식을 한 번에
            비교할 수 있어 가장 유리한 방식을 빠르게 찾을 수 있습니다.
          </p>
          <p>
            <Link href="/savings" className="text-accent underline">적금·정기예금 계산기</Link>로
            매월 납입하는 적금과 한 번에 예치하는 정기예금을 한 화면에서
            비교합니다. 단리/월복리, 일반과세/비과세 모든 조합을 지원하므로
            청년도약계좌·ISA 같은 비과세 상품 시뮬레이션에도 활용 가능합니다.
          </p>
          <p>
            <Link href="/severance" className="text-accent underline">퇴직금 계산기</Link>는
            법정 퇴직금뿐 아니라 퇴직소득세까지 자동으로 산출해 실제 손에
            쥐는 세후 금액을 보여줍니다. IRP 이전 절세 효과도 같이 참고할
            수 있습니다.
          </p>
        </div>
      </section>
    </div>
  );
}
