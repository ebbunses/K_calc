import LoanCalculator from "./LoanCalculator";
import FaqSection from "../components/FaqSection";
import RelatedGuides from "../components/RelatedGuides";

export const metadata = {
  title: "대출 이자 계산기 — 원리금균등·원금균등·만기일시 비교",
  description:
    "원금, 이자율, 기간만 입력하면 원리금균등·원금균등·만기일시 3가지 상환 방식을 한 번에 비교합니다. 월별 상환 스케줄까지 무료로 확인.",
  keywords: [
    "대출 이자 계산기",
    "원리금균등 계산기",
    "원금균등 계산기",
    "만기일시 계산기",
    "주택담보대출 계산",
    "DSR 계산",
    "월 상환액 계산",
    "K Calc",
  ],
  alternates: { canonical: "/loan" },
  openGraph: {
    type: "website",
    url: "/loan",
    title: "대출 이자 계산기 — 3가지 상환 방식 비교 — K Calc",
    description:
      "원리금균등·원금균등·만기일시를 한 번에 비교하고, 월별 상환표까지 확인.",
  },
};

const FAQ_ITEMS = [
  {
    q: "원리금균등과 원금균등, 뭐가 더 유리한가요?",
    a: (
      <>
        <p>
          <strong className="text-ink">총 이자만 보면 원금균등이 유리</strong>합니다.
          잔금이 빠르게 줄어드는 만큼 이자도 적게 붙기 때문입니다.
          다만 초반 월 상환액은 원금균등이 원리금균등보다 30~40% 정도 더
          큽니다.
        </p>
        <p>
          매월 부담을 일정하게 가져가고 싶으면 원리금균등, 초반 부담을
          감내할 수 있고 총 이자를 줄이고 싶으면 원금균등을 선택합니다.
          맞벌이·소득이 안정적이고 여유 자금이 있다면 원금균등을 권장합니다.
        </p>
      </>
    ),
    text:
      "총 이자만 보면 원금균등이 유리합니다. 잔금이 빠르게 줄어드는 만큼 이자도 적게 붙습니다. 다만 초반 월 상환액은 원금균등이 원리금균등보다 30~40% 정도 더 큽니다. 매월 부담을 일정하게 가져가고 싶으면 원리금균등, 초반 부담을 감내할 수 있고 총 이자를 줄이고 싶으면 원금균등을 선택합니다.",
  },
  {
    q: "만기일시는 언제 사용하나요?",
    a: (
      <p>
        주로 단기 자금 운용용 신용대출이나 마이너스 통장, 사업자
        운영자금에 사용됩니다. 매월 이자만 내다가 만기에 원금을 일시
        상환하는 구조라 매월 부담이 가장 적은 대신 총 이자가 가장
        많습니다. 일반적인 주택담보대출에는 거의 사용되지 않습니다.
      </p>
    ),
    text:
      "주로 단기 자금 운용용 신용대출이나 마이너스 통장, 사업자 운영자금에 사용됩니다. 매월 이자만 내다가 만기에 원금을 일시 상환하는 구조라 매월 부담이 가장 적은 대신 총 이자가 가장 많습니다. 일반적인 주택담보대출에는 거의 사용되지 않습니다.",
  },
  {
    q: "이 계산기에 변동금리도 적용되나요?",
    a: (
      <p>
        <strong className="text-ink">아니요.</strong> 본 계산기는 약정 금리가
        만기까지 그대로 유지되는 <strong className="text-ink">고정금리</strong>를
        가정합니다. 5년 변동, 6개월 변동 등 변동금리 대출은 금리가 바뀔
        때마다 남은 잔금을 기준으로 월 상환액이 재산정되기 때문에, 시점별
        가정을 두고 따로 계산해야 합니다.
      </p>
    ),
    text:
      "아니요. 본 계산기는 약정 금리가 만기까지 그대로 유지되는 고정금리를 가정합니다. 변동금리 대출은 금리가 바뀔 때마다 잔금을 기준으로 월 상환액이 재산정되어 다르게 계산됩니다.",
  },
  {
    q: "DSR, DTI, LTV는 어떻게 확인하나요?",
    a: (
      <>
        <p>
          DSR(총부채원리금상환비율), DTI(총부채상환비율), LTV(담보인정비율)는
          대출 한도와 자격을 판단하는 기준으로, 본 계산기로 산출되는
          월 상환액을 토대로 가늠해 볼 수 있습니다.
        </p>
        <p>
          예: 연 소득이 6,000만원이고 DSR 40%가 한도라면,
          연 원리금 상환액이 2,400만원을 넘으면 안 됩니다. 본 계산기로
          나온 월 상환액 × 12가 이 한도 안에 들어와야 합니다. 정확한
          한도와 가용 자격은 거래 금융기관 또는 한국주택금융공사에서
          확인하세요.
        </p>
      </>
    ),
    text:
      "DSR, DTI, LTV는 대출 한도와 자격 판단 기준으로, 본 계산기로 산출되는 월 상환액을 토대로 가늠할 수 있습니다. 예: 연 소득 6,000만원에 DSR 40% 한도면 연 원리금 상환액이 2,400만원을 넘으면 안 됩니다.",
  },
  {
    q: "중도상환수수료는 어떻게 계산되나요?",
    a: (
      <p>
        본 계산기는 중도상환수수료를 포함하지 않습니다. 일반적으로
        대출 후 3년 이내에 일부 또는 전액을 상환하면 잔여 원금의 0.5~1.4%
        수준의 수수료가 부과됩니다(3년 이후 면제). 정확한 수수료율과
        면제 조건은 약정서나 거래 은행에서 확인하세요.
      </p>
    ),
    text:
      "본 계산기는 중도상환수수료를 포함하지 않습니다. 일반적으로 대출 후 3년 이내에 상환하면 잔여 원금의 0.5~1.4% 수준의 수수료가 부과되고 3년 이후 면제됩니다.",
  },
  {
    q: "1억을 4.5%로 30년 빌리면 총 이자가 얼마나 되나요?",
    a: (
      <p>
        원리금균등 방식 기준 매월 약 506,685원을 30년간 상환하며, 총
        이자는 약 8,240만원이 됩니다. 원금균등 방식이라면 첫 달 약
        652,778원에서 시작해 점차 줄어들어 총 이자는 약 6,769만원으로
        원리금균등보다 약 1,471만원 절감됩니다. 위 계산기에서 원금
        100,000,000원, 4.5%, 30년을 입력하면 동일한 결과를 확인할 수
        있습니다.
      </p>
    ),
    text:
      "원리금균등 기준 매월 약 506,685원, 30년간 총 이자 약 8,240만원입니다. 원금균등이면 첫 달 652,778원에서 점차 줄어 총 이자 약 6,769만원으로 약 1,471만원 절감됩니다.",
  },
  {
    q: "주택담보대출 한도는 얼마까지 가능한가요?",
    a: (
      <p>
        한도는 LTV, DSR, 본인 소득, 부채 현황, 담보 평가액에 따라
        달라집니다. 현행 기준 일반적으로 무주택 실수요자는 LTV 70%까지,
        규제지역에서는 50~60% 정도가 적용됩니다. DSR 40% 이내 조건과
        병행해야 하므로 본 계산기로 월 상환액을 시뮬레이션한 뒤 거래
        은행에서 한도 조회를 받아보는 것이 정확합니다.
      </p>
    ),
    text:
      "한도는 LTV, DSR, 본인 소득, 부채, 담보 평가액에 따라 달라집니다. 현행 기준 무주택 실수요자는 LTV 70%, 규제지역에서는 50~60% 수준이며, DSR 40% 이내 병행 조건이 있습니다.",
  },
];

export default function LoanPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8">
      <section className="pt-12 md:pt-16 pb-8 md:pb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
          Loan Calculator · 3 Repayment Methods
        </p>
        <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-ink">
          대출 이자 계산기
        </h1>
        <p className="mt-5 max-w-2xl text-base md:text-lg text-ink-soft leading-relaxed">
          원금·이자율·상환 기간을 입력하면{" "}
          <strong className="text-ink">원리금균등·원금균등·만기일시</strong>{" "}
          3가지 상환 방식을 한 번에 비교합니다. 월별 상환 스케줄도 펼쳐
          확인할 수 있어, 어떤 방식이 본인에게 유리한지 한눈에 판단할 수
          있습니다.
        </p>
      </section>

      <LoanCalculator />

      <div className="ad-slot my-16" aria-hidden="true" />

      <section className="max-w-3xl mb-12">
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-6">
          3가지 상환 방식의 차이
        </h2>
        <div className="space-y-5 text-ink-soft leading-relaxed">
          <p>
            한국 시중은행이 제공하는 대출 상환 방식은 크게 세 가지입니다.
            각 방식은 매월 부담하는 금액과 총 이자가 다르므로, 본인의
            소득 흐름과 대출 목적에 맞게 선택해야 합니다.
          </p>
          <p>
            <strong className="text-ink">① 원리금균등(가장 흔함)</strong> —
            매월 같은 금액(원금+이자)을 상환합니다. 초기에는 잔금이 많아
            이자 비중이 크고, 시간이 갈수록 원금 비중이 커집니다. 매달 같은
            금액이 빠지기 때문에 가계 계획을 세우기 쉽고, 주택담보대출의
            기본 옵션으로 가장 널리 사용됩니다.
          </p>
          <p>
            <strong className="text-ink">② 원금균등</strong> — 매월 갚는 원금은
            동일하고, 이자는 잔금이 줄어드는 만큼 점점 감소합니다. 첫 달
            부담이 가장 크지만 총 이자는 세 방식 중 가장 적어, 안정적인
            소득이 있고 초반 부담을 감내할 수 있다면 가장 유리한 방식입니다.
          </p>
          <p>
            <strong className="text-ink">③ 만기일시</strong> — 매월 이자만
            납부하다가 만기에 원금을 한 번에 갚는 방식입니다. 매월 부담이
            가장 작은 대신 총 이자가 가장 많고, 만기 시점에 원금 전액을
            마련해야 한다는 부담이 있습니다. 신용대출·마이너스통장·사업자
            대출에서 주로 사용됩니다.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mb-16">
        <h2 className="font-display text-2xl md:text-3xl text-ink mb-5">
          계산 공식
        </h2>
        <div className="space-y-4 text-ink-soft leading-relaxed">
          <div>
            <p className="text-ink font-medium mb-1.5">원리금균등</p>
            <p className="font-mono text-sm bg-border-soft/40 rounded-lg px-4 py-3">
              월 상환액 = P × r × (1+r)^n ÷ ((1+r)^n − 1)
            </p>
          </div>
          <div>
            <p className="text-ink font-medium mb-1.5">원금균등</p>
            <p className="font-mono text-sm bg-border-soft/40 rounded-lg px-4 py-3">
              월 상환액 = (P ÷ n) + (잔금 × r)
            </p>
          </div>
          <div>
            <p className="text-ink font-medium mb-1.5">만기일시</p>
            <p className="font-mono text-sm bg-border-soft/40 rounded-lg px-4 py-3">
              월 이자 = P × r &nbsp;|&nbsp; 마지막 달 = P × r + P
            </p>
          </div>
          <p className="text-sm text-ink-muted mt-3">
            P = 원금, r = 월이자율(연이자율 ÷ 12 ÷ 100), n = 총 상환 개월 수
          </p>
        </div>
      </section>

      <FaqSection items={FAQ_ITEMS} />

      <div className="my-16" />

      <RelatedGuides category="loan" />

      <section className="max-w-3xl mt-8 pb-16 md:pb-24 text-sm text-ink-muted leading-relaxed">
        <p>
          본 계산기의 결과는 참고용입니다. 실제 대출 시에는 보증료, 인지세,
          근저당설정비 등 부대비용과 우대금리·중도상환수수료가 적용되어
          금액이 달라질 수 있습니다. 정확한 금액과 한도는 거래 금융기관
          또는 한국주택금융공사 등 공식 기관에서 확인하시기 바랍니다.
        </p>
      </section>
    </div>
  );
}
