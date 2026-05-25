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
            직접 돈을 관리하기 시작하면서 가장 답답했던 건, 정작 필요한 정보를
            찾는 데 시간이 너무 오래 걸린다는 점이었습니다. 연봉 협상 한 번
            준비하려고 해도 4대 보험 요율·비과세 식대·소득세 누진구간을 여기저기
            검색해서 짜맞춰야 했고, 퇴직금이나 적금을 비교할 때마다 같은 과정을
            반복했습니다. 정작 검색해서 들어간 사이트들은 광고에 본문이 가려져
            있거나, 옛 세법에 멈춰 있거나, 그도 아니면 너무 원론적인 설명만
            늘어놓고 “결국 내 경우엔 얼마 받는데?” 같은 실용적 질문에 답하지
            못했습니다.
          </p>
          <p className="mt-3">
            K Calc는 그 답답함을 정리하려고 만들었습니다. 살면서 한 번쯤 마주치는
            돈 문제 — 연봉 실수령, 대출 한도, 퇴직금 절세, 적금 비교 — 를 한
            곳에서 정확하게 계산하고, 필요한 배경 지식은 머니 팁 글로 같이
            엮었습니다. “나라면 알고 싶었을 정보”를 기준으로 채워가는
            사이드 프로젝트입니다.
          </p>
          <p className="mt-3">
            세 가지 원칙을 지킵니다.
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
            K Calc는 개인이 운영하는 사이드 프로젝트입니다. 본업이 따로
            있고, 본인의 가계와 주변 지인들의 돈 문제를 정리하다 보니 같은
            도구가 다른 사람에게도 쓸 만하겠다 싶어 사이트로 공개했습니다.
            세무사·금융 전문 자격이 있는 것은 아니므로, 모든 콘텐츠는
            국세청·금융감독원·고용노동부 등 공식 자료를 토대로 작성하고,
            정책 개정이 있을 때마다 “마지막 검토” 날짜를 갱신합니다.
          </p>
          <p className="mt-3">
            광고 수익은 서버 운영과 도메인 유지비, 추가 계산기 개발에
            사용됩니다. 개선 의견, 오류 신고, 추가 계산기 요청은 언제든{" "}
            <Link href="/contact" className="text-accent underline">
              문의 페이지
            </Link>
            로 주세요. 잘못된 수치나 시점이 바뀐 정책을 알려주시면 가장
            먼저 반영합니다.
          </p>
        </section>
      </div>
    </article>
  );
}
