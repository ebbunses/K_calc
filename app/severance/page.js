import SeveranceCalculator from "./SeveranceCalculator";
import FaqSection from "../components/FaqSection";
import RelatedGuides from "../components/RelatedGuides";

export const metadata = {
  title: "퇴직금 계산기 — 퇴직소득세 포함 실수령액",
  description:
    "평균 월급여와 재직 기간으로 법정 퇴직금과 퇴직소득세, 세후 실수령액을 한 번에 계산. 근속연수공제·환산급여공제·차등세율 자동 반영.",
  keywords: [
    "퇴직금 계산기",
    "퇴직소득세 계산기",
    "법정 퇴직금",
    "근속연수공제",
    "환산급여공제",
    "DC형 DB형",
    "IRP",
    "K Calc",
  ],
  alternates: { canonical: "/severance" },
  openGraph: {
    type: "website",
    url: "/severance",
    title: "퇴직금 계산기 — 세후 실수령액까지 — K Calc",
    description:
      "법정 퇴직금과 퇴직소득세를 한 번에 계산.",
  },
};

const FAQ_ITEMS = [
  {
    q: "1년 미만 근무하면 퇴직금을 못 받나요?",
    a: (
      <p>
        근로기준법상 1년 이상 계속 근무한 근로자에게만 법정 퇴직금 지급
        의무가 있습니다. 1년 미만 근속자는 법적으로 받을 수 없지만, 회사
        내규로 별도 지급하는 경우는 있을 수 있습니다. 단, 1년 이상이라면
        주 15시간 미만 단시간 근로자, 계약직, 일용직도 모두 지급 대상입니다.
      </p>
    ),
    text:
      "근로기준법상 1년 이상 계속 근무한 근로자에게만 법정 퇴직금 지급 의무가 있습니다. 1년 미만 근속자는 법적으로 받을 수 없지만 회사 내규로 별도 지급할 수 있습니다. 1년 이상이면 단시간·계약직·일용직도 모두 지급 대상입니다.",
  },
  {
    q: "퇴직소득세가 일반 소득세보다 왜 적게 나오나요?",
    a: (
      <>
        <p>
          퇴직금은 오랜 근속의 결과로 한꺼번에 발생하는 소득이므로,
          종합소득세와 같은 누진세율을 그대로 적용하면 세부담이 과도해집니다.
          이를 완화하기 위해 한국 세법은 다음의 우대 구조를 둡니다.
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li><strong className="text-ink">근속연수공제</strong>: 근속 연수가 길수록 큰 금액을 공제</li>
          <li><strong className="text-ink">환산급여공제</strong>: 1년치 평균치로 환산한 후 다시 큰 공제 적용</li>
          <li><strong className="text-ink">연분연승법</strong>: 세율을 12개월로 나눠 적용 후 근속연수만큼 곱함</li>
        </ul>
        <p className="mt-2">
          이 3중 우대 덕분에 실효세율은 보통 1~5% 수준으로 매우 낮습니다.
          예: 월 400만원·5년 근속이면 실효세율 약 1.5%에 불과합니다.
        </p>
      </>
    ),
    text:
      "퇴직금은 오랜 근속의 결과로 한꺼번에 발생하는 소득이므로 종합소득세 누진세율을 그대로 적용하지 않습니다. 근속연수공제, 환산급여공제, 연분연승법(세율을 12개월로 나눠 적용 후 근속연수만큼 곱함)이라는 3중 우대로 실효세율이 보통 1~5% 수준입니다.",
  },
  {
    q: "DB형, DC형, IRP는 무엇이 다른가요?",
    a: (
      <>
        <p>
          <strong className="text-ink">DB형(확정급여형)</strong> — 회사가
          퇴직금을 관리하다가 퇴직 시 평균임금 × 근속연수로 지급합니다. 본
          계산기가 산출하는 법정 퇴직금이 곧 DB형 금액입니다.
        </p>
        <p>
          <strong className="text-ink">DC형(확정기여형)</strong> — 회사가
          매년 연간 임금의 1/12을 근로자 개인 계좌에 적립하고, 근로자가 직접
          운용합니다. 운용 결과에 따라 받는 금액이 달라집니다.
        </p>
        <p>
          <strong className="text-ink">IRP(개인형 퇴직연금)</strong> —
          퇴직금을 받는 그릇 역할을 하는 개인 계좌. 퇴직 시 IRP로 이체하면
          퇴직소득세 납부가 이연되어 55세 이후 연금으로 수령할 때 더 낮은
          세율(연금소득세)이 적용됩니다.
        </p>
      </>
    ),
    text:
      "DB형은 회사가 관리하다가 평균임금×근속연수로 지급, DC형은 회사가 매년 연간 임금 1/12을 개인 계좌에 적립하고 근로자가 운용, IRP는 퇴직금을 담는 개인 계좌로 이체 시 퇴직소득세가 이연되어 55세 이후 연금 수령 시 낮은 세율이 적용됩니다.",
  },
  {
    q: "평균임금에는 어떤 게 포함되나요?",
    a: (
      <p>
        평균임금은 퇴직 직전 3개월간 받은 임금 총액을 그 기간의 일수로
        나누어 산정합니다. 기본급, 정기 상여금(연간 지급액의 3/12), 연차
        수당(전년도 연차수당의 1/12) 등이 포함됩니다. 본 계산기는 사용자가
        직접 평균임금을 입력하는 방식이므로, 통상임금이 아닌 실제 평균임금
        값을 넣어야 정확합니다. 자세한 산정 기준은 노동부 상담센터(1350)나
        고용노동부 홈페이지에서 확인할 수 있습니다.
      </p>
    ),
    text:
      "평균임금은 퇴직 직전 3개월간 받은 임금 총액을 그 기간 일수로 나누어 산정합니다. 기본급, 정기 상여금의 3/12, 연차수당의 1/12 등이 포함됩니다. 통상임금이 아닌 실제 평균임금을 입력해야 정확합니다.",
  },
  {
    q: "IRP로 이체하면 세금이 얼마나 줄어드나요?",
    a: (
      <p>
        퇴직 시 IRP로 이체하면 퇴직소득세 납부가 이연됩니다. 55세 이후
        IRP에서 연금으로 받으면 퇴직소득세의 70% 수준이 적용되어 실질적으로
        세금이 약 30% 감면되는 효과가 있습니다. 일시금으로 인출하면 퇴직소득세
        100%가 부과되므로, 절세를 위해서는 연금 형태로 수령하는 것이
        유리합니다. 단, IRP는 만 55세까지 인출이 제한되니 자금 흐름을
        고려해 결정하세요.
      </p>
    ),
    text:
      "IRP로 이체하면 퇴직소득세 납부가 이연되며, 55세 이후 연금으로 받으면 퇴직소득세의 70%가 적용되어 약 30% 감면 효과가 있습니다. 일시금 인출 시 100% 부과되므로 연금 수령이 유리합니다.",
  },
  {
    q: "20년 근속·평균 700만원이면 퇴직금과 세금이 얼마인가요?",
    a: (
      <p>
        세전 퇴직금은 700만원 × 20년 = 1억 4,000만원입니다. 근속연수공제
        4,000만원과 환산급여공제 약 6,400만원이 적용되며, 산출 후 실효세율
        약 2.4%로 퇴직소득세는 약 341만원이 됩니다. 세후 실수령액은
        약 1억 3,659만원이 됩니다. 위 계산기에서 동일하게 입력해 보세요.
      </p>
    ),
    text:
      "세전 퇴직금은 700만원 × 20년 = 1억 4,000만원입니다. 근속연수공제 4,000만원, 환산급여공제 약 6,400만원이 적용되어 실효세율 약 2.4%, 퇴직소득세 약 341만원, 세후 실수령 약 1억 3,659만원입니다.",
  },
  {
    q: "회사가 퇴직금을 안 주면 어떻게 하나요?",
    a: (
      <p>
        퇴직금은 퇴직일로부터 14일 이내에 지급해야 합니다(근로기준법 제36조).
        14일이 지나도 미지급되면 고용노동부에 임금체불 진정을 제기할 수
        있습니다. 노동부 상담은 1350번 또는 가까운 지방고용노동관서에서
        가능하며, 체불금에는 연 20%의 지연이자가 가산됩니다(퇴직금 미지급의
        경우).
      </p>
    ),
    text:
      "퇴직금은 퇴직일로부터 14일 이내에 지급해야 하며(근로기준법 제36조), 미지급 시 고용노동부에 임금체불 진정을 제기할 수 있습니다. 노동부 상담 1350번, 체불금에 연 20% 지연이자가 가산됩니다.",
  },
];

export default function SeverancePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8">
      <section className="pt-12 md:pt-16 pb-8 md:pb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
          Severance Pay · After-Tax
        </p>
        <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-ink">
          퇴직금 계산기
        </h1>
        <p className="mt-5 max-w-2xl text-base md:text-lg text-ink-soft leading-relaxed">
          <strong className="text-ink">근로기준법 제34조</strong>에 따른 법정
          퇴직금을 산정하고, <strong className="text-ink">퇴직소득세</strong>를
          반영해 실제로 손에 쥐는 세후 금액까지 계산합니다. 근속연수공제·
          환산급여공제·차등세율이 자동 적용됩니다.
        </p>
      </section>

      <SeveranceCalculator />

      <div className="ad-slot my-16" aria-hidden="true" />

      <section className="max-w-3xl mb-12">
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-6">
          퇴직금은 어떻게 산정되나요?
        </h2>
        <div className="space-y-5 text-ink-soft leading-relaxed">
          <p>
            법정 퇴직금은{" "}
            <strong className="text-ink">계속 근로기간 1년에 대해 30일분
            이상의 평균임금</strong>을 지급하도록 근로기준법에 정해져
            있습니다. 계산식은{" "}
            <code className="font-mono text-sm">
              퇴직금 = 평균월급여 × (재직 개월 ÷ 12)
            </code>
            로, 사실상 1년치 평균임금을 받는 셈입니다. 1년 미만 근속자는
            법적 지급 대상이 아닙니다.
          </p>
          <p>
            <strong className="text-ink">평균임금</strong>은 보통 퇴직 직전
            3개월 동안 받은 임금 총액(상여금·연차수당 비례분 포함)을 그
            기간의 일수로 나눈 일급에 30을 곱해 환산합니다. 통상임금과는
            다르며, 정기 상여금이 있다면 평균임금이 통상임금보다 큽니다.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mb-12">
        <h2 className="font-display text-2xl md:text-3xl text-ink mb-5">
          퇴직소득세 산출 구조
        </h2>
        <div className="space-y-5 text-ink-soft leading-relaxed">
          <p>
            퇴직금에는 퇴직소득세가 부과되지만, 일반 소득세와 달리 3중
            우대 구조로 실효세율이 매우 낮습니다.
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong className="text-ink">근속연수공제</strong> — 근속 5년
              이내 1년당 100만원, 5~10년 200만원, 10~20년 250만원,
              20년 초과 300만원씩 공제됩니다.
            </li>
            <li>
              <strong className="text-ink">환산급여</strong> — 근속연수공제
              후 남은 금액을 근속연수로 나누고 12를 곱해 1년치로 환산합니다.
            </li>
            <li>
              <strong className="text-ink">환산급여공제</strong> — 800만원
              이하는 100%, 800만원~7,000만원 구간은 60%, 7,000만원~1억
              구간은 55%, 1억~3억 구간은 45%, 3억 초과 구간은 35%가
              공제됩니다.
            </li>
            <li>
              <strong className="text-ink">연분연승법</strong> — 과세표준에
              종합소득세 기본세율(6~45%)을 적용한 산출세액을 12로 나눈 뒤
              근속연수만큼 곱합니다.
            </li>
            <li>
              <strong className="text-ink">지방소득세</strong> — 산출된
              퇴직소득세의 10%가 추가 부과됩니다.
            </li>
          </ol>
          <p>
            이 구조 덕분에 5년 근속·평균월급 400만원의 경우 실효세율은
            약 1.5%에 불과합니다. 근속이 길수록·평균임금이 클수록 실효세율은
            올라가지만, 보통 5% 미만에 머무릅니다.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mb-12">
        <h2 className="font-display text-2xl md:text-3xl text-ink mb-5">
          DB·DC·IRP 한눈에 정리
        </h2>
        <div className="space-y-4 text-ink-soft leading-relaxed">
          <p>
            한국의 퇴직급여 제도는 크게 세 가지입니다. 본 계산기가 산출하는
            금액은 <strong className="text-ink">DB형(확정급여형)</strong>{" "}
            기준입니다. DC형은 매년 회사가 임금의 1/12을 개인 계좌에
            적립하고 근로자가 직접 운용하므로 운용 성과에 따라 실제 수령액이
            달라집니다.
          </p>
          <p>
            <strong className="text-ink">IRP(개인형 퇴직연금)</strong>는
            퇴직 시 받은 퇴직금을 담는 그릇 역할을 합니다. 만 55세 이후
            연금 형태로 수령하면 퇴직소득세의 70% 수준만 부과되어 실질적인
            절세 효과가 있습니다.
          </p>
        </div>
      </section>

      <FaqSection items={FAQ_ITEMS} />

      <div className="my-16" />

      <RelatedGuides category="severance" />

      <section className="max-w-3xl mt-8 pb-16 md:pb-24 text-sm text-ink-muted leading-relaxed">
        <p>
          본 계산기의 결과는 추정치이며, 실제 회사 또는 노동부에서 산정한
          금액과 일부 차이가 발생할 수 있습니다. 정확한 평균임금 산정과
          퇴직소득세 신고는 회사 인사담당자, 세무사, 또는 국세청 홈택스의
          퇴직소득 모의계산 메뉴를 통해 확인하시기 바랍니다.
        </p>
      </section>
    </div>
  );
}
