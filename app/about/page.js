import Link from "next/link";
import { calculators } from "../lib/calculators";

export const metadata = {
  title: "사이트 소개",
  description:
    "K Calc는 한국 세법과 4대 보험 기준에 맞춰 정확한 계산 결과를 제공하는 종합 계산기 사이트입니다. 연봉·퇴직금·대출·적금까지 한 곳에서.",
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 md:px-8 py-12 md:py-16">
      <header className="mb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-accent-bright mb-3">
          About
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-ink leading-tight">
          한국 세법에 맞춘
          <br />
          종합 계산기, K Calc
        </h1>
      </header>

      <div className="space-y-10 text-ink-soft leading-relaxed">
        <section>
          <h2 className="text-xl text-ink font-medium mb-3">사이트를 만든 이유</h2>
          <p>
            인터넷에는 이미 많은 한국형 계산기들이 있지만, 광고가 본문을
            가리거나, 옛 세법 기준에서 멈춰 있거나, 비과세 식대·자녀
            세액공제 같은 실제 변수들을 반영하지 못하는 경우가 많습니다.
          </p>
          <p className="mt-3">
            K Calc는 다음 세 가지 원칙으로 만들어졌습니다.
          </p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li>광고가 결과를 가리지 않을 것</li>
            <li>한국에서 실제로 쓰이는 세법·요율을 반영할 것</li>
            <li>계산식과 산출 근거를 숨기지 않을 것</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl text-ink font-medium mb-3">제공하는 계산기</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {calculators.map((c) => (
              <li key={c.slug}>
                <Link
                  href={c.href}
                  className="block border border-border-base rounded-xl p-4 bg-paper hover:border-accent hover:bg-accent-light transition"
                >
                  <p className="text-ink font-medium">{c.title}</p>
                  {c.description && (
                    <p className="mt-1 text-xs text-ink-muted">
                      {c.description}
                    </p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl text-ink font-medium mb-3">계산 기준</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>국민연금: 기준소득월액 상한 적용 후 요율 4.5%</li>
            <li>건강보험: 보수월액 × 3.545%, 장기요양 12.95%</li>
            <li>고용보험: 보수월액 × 0.9%</li>
            <li>소득세: 종합소득세 기본세율 누진구조(6~45%) + 근로소득세액공제</li>
            <li>퇴직소득세: 근속연수공제·환산급여공제·차등세율 반영</li>
            <li>이자소득세: 일반과세 15.4% (소득세 14% + 지방소득세 1.4%)</li>
          </ul>
          <p className="mt-3 text-sm text-ink-muted">
            세법 개정 시 가능한 한 신속하게 반영합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-ink font-medium mb-3">한계와 면책</h2>
          <p>
            모든 계산 결과는 참고용입니다. 회사 내부 규정, 비과세 수당,
            거래 금융기관의 우대 금리, 중도상환수수료 등 개인 상황에 따라
            실제 금액과 차이가 발생할 수 있습니다. 자세한 면책 사항은{" "}
            <Link href="/terms" className="text-accent underline">
              이용약관
            </Link>
            을 참고해 주세요.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-ink font-medium mb-3">운영자</h2>
          <p>
            K Calc는 개인이 운영하는 사이드 프로젝트입니다. 광고 수익은
            서버 운영과 도메인 유지비, 추가 계산기 개발에 사용됩니다.
            개선 의견, 오류 신고, 추가 계산기 요청은 언제든{" "}
            <Link href="/contact" className="text-accent underline">
              문의 페이지
            </Link>
            로 주세요.
          </p>
        </section>
      </div>
    </article>
  );
}
