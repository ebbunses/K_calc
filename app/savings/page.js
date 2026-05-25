import SavingsCalculator from "./SavingsCalculator";
import FaqSection from "../components/FaqSection";
import RelatedGuides from "../components/RelatedGuides";

export const metadata = {
  title: "적금·정기예금 계산기 — 단리·복리·비과세 지원",
  description:
    "적금과 정기예금을 한 화면에서 계산. 단리/월복리 선택, 비과세/일반과세 토글, 이자소득세 15.4% 자동 차감. 무료 적금 만기 계산기.",
  keywords: [
    "적금 계산기",
    "적금 만기 계산기",
    "정기예금 계산기",
    "복리 계산기",
    "월복리 적금",
    "비과세 적금",
    "이자소득세",
    "K Calc",
  ],
  alternates: { canonical: "/savings" },
  openGraph: {
    type: "website",
    url: "/savings",
    title: "적금·정기예금 계산기 — K Calc",
    description:
      "단리/복리, 적금/정기예금, 일반과세/비과세 모든 조합 계산.",
  },
};

const FAQ_ITEMS = [
  {
    q: "적금과 정기예금, 무엇이 다른가요?",
    a: (
      <>
        <p>
          <strong className="text-ink">적금</strong>은 매월 일정 금액을
          납입하는 상품이고, <strong className="text-ink">정기예금</strong>은
          한 번에 큰 금액을 예치하고 만기까지 거치하는 상품입니다. 광고에
          표시되는 이자율이 같더라도 실제 받는 이자는 다릅니다.
        </p>
        <p>
          예: 같은 연 3.5% 상품이라도 정기예금 1,200만원을 1년 예치하면
          이자가 약 42만원이지만, 적금으로 매월 100만원씩 1년 납입하면(총
          1,200만원) 단리 기준 이자는 약 23만원입니다. 적금은 첫 달
          납입금만 12개월치 이자가 붙고 마지막 달 납입금은 1개월치만 붙기
          때문입니다.
        </p>
      </>
    ),
    text:
      "적금은 매월 일정 금액을 납입하고, 정기예금은 한 번에 큰 금액을 예치합니다. 같은 이자율이라도 받는 이자는 다릅니다. 정기예금 1,200만원을 1년 예치하면 이자 약 42만원, 적금으로 매월 100만원씩 1년이면 단리 기준 약 23만원입니다.",
  },
  {
    q: "단리와 월복리의 차이는 얼마인가요?",
    a: (
      <p>
        납입 기간이 짧으면 차이가 거의 없지만, 기간이 길어질수록 복리가
        유리해집니다. 예: 월 50만원, 3.5%, 24개월 적금의 경우 단리는 세전
        이자가 약 437,500원이고 월복리는 약 447,442원으로 약 9,900원의
        차이가 발생합니다. 5년·10년 등 장기로 갈수록 차이가 커집니다.
        한국 시중은행 적금은 대부분 단리·만기 일시지급이며, 복리는 일부
        저축은행·증권사 상품에서 제공됩니다.
      </p>
    ),
    text:
      "납입 기간이 짧으면 차이가 거의 없지만 길어질수록 복리가 유리합니다. 월 50만원, 3.5%, 24개월 적금 기준 단리 세전 이자 약 437,500원, 월복리 약 447,442원으로 약 1만원 차이입니다. 한국 시중은행 적금은 대부분 단리입니다.",
  },
  {
    q: "이자소득세 15.4%는 누구에게나 적용되나요?",
    a: (
      <>
        <p>
          일반 적금·예금은 이자소득세 14% + 지방소득세 1.4%, 합계 15.4%가
          원천징수됩니다. 다음의 경우 비과세 또는 세금우대가 적용됩니다.
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>청년도약계좌 (만 19~34세, 일정 소득 기준 충족)</li>
          <li>ISA(개인종합자산관리계좌) 일반형은 200만원, 서민형은 400만원까지 비과세</li>
          <li>농협·새마을금고·신협 등 상호금융의 조합원 예탁금 (1인당 3,000만원까지)</li>
          <li>비과세 종합저축 (만 65세 이상, 장애인 등)</li>
        </ul>
      </>
    ),
    text:
      "일반 적금·예금은 이자소득세 15.4%(소득세 14%+지방세 1.4%)가 원천징수됩니다. 청년도약계좌, ISA, 농협·새마을금고·신협 조합원 예탁금(3천만원까지), 비과세 종합저축(만 65세 이상 등)은 비과세 또는 세금우대가 적용됩니다.",
  },
  {
    q: "광고 이자율과 실제 받는 이자가 왜 다른가요?",
    a: (
      <p>
        적금 상품의 표시 금리는 연 단위 단리 기준입니다. 매월 일정 금액을
        납입하는 적금은 첫 달 납입금만 전체 기간 이자가 붙고, 마지막 달
        납입금은 1개월치 이자만 붙기 때문에, 실효 수익률은 표시 금리의
        절반 정도가 됩니다. 정확한 계산은{" "}
        <code className="font-mono text-sm">월납입 × r/12 × n(n+1)/2</code>{" "}
        공식을 사용합니다(r = 연이자율, n = 납입 개월 수).
      </p>
    ),
    text:
      "적금 표시 금리는 연 단위 단리입니다. 매월 납입하는 적금은 첫 달 납입금만 전체 기간 이자가 붙고 마지막 달은 1개월치만 붙어 실효 수익률은 표시 금리의 절반 수준입니다.",
  },
  {
    q: "5,000만원까지 예금자보호가 된다고 들었는데, 같은 은행 여러 상품도 합쳐서 5,000만원인가요?",
    a: (
      <p>
        예. 예금자보호한도는 <strong className="text-ink">금융기관 1곳당
        원금·이자 합계 5,000만원</strong>입니다. 같은 은행의 적금·정기예금·
        보통예금 등 여러 상품을 합산해 적용합니다. 1억원을 예치할 계획이라면
        은행을 두 곳 이상으로 나누는 것이 안전합니다. 2024년 기준이며 향후
        보호한도가 1억원으로 상향될 가능성도 논의되고 있습니다.
      </p>
    ),
    text:
      "예금자보호한도는 금융기관 1곳당 원금·이자 합계 5,000만원입니다. 같은 은행의 적금·정기예금·보통예금 등을 합산해 적용합니다. 1억원 예치 시 은행을 두 곳 이상으로 나누는 것이 안전합니다.",
  },
  {
    q: "만기 전에 해지하면 어떻게 되나요?",
    a: (
      <p>
        중도 해지 시 약정 금리가 아닌 중도해지 이율이 적용됩니다.
        보통 약정 금리의 30~70% 수준으로, 만기 전에 해지하면 이자가
        대폭 줄어듭니다. 시중은행 적금의 경우 6개월 미만 해지 시
        거의 이자가 없다고 보면 됩니다. 본 계산기는 만기까지 정상
        납입한 경우를 가정합니다.
      </p>
    ),
    text:
      "중도 해지 시 약정 금리가 아닌 중도해지 이율이 적용되며, 보통 약정 금리의 30~70% 수준입니다. 6개월 미만 해지 시 거의 이자가 없습니다.",
  },
  {
    q: "예금 1억을 3%에 1년 맡기면 세후 얼마 받나요?",
    a: (
      <p>
        세전 이자는 1억 × 3% × 1년 = 300만원, 이자소득세 15.4%는 46.2만원,
        세후 이자는 약 253.8만원입니다. 만기 수령액은 1억 253.8만원이
        됩니다. 위 계산기에서 정기예금 모드를 선택하고 100,000,000원,
        3%, 12개월을 입력하면 동일한 결과를 확인할 수 있습니다.
      </p>
    ),
    text:
      "세전 이자 300만원에서 이자소득세 46.2만원을 차감하면 세후 이자 약 253.8만원, 만기 수령액은 약 1억 253.8만원입니다. 위 계산기에서 정기예금 모드, 1억원, 3%, 12개월로 확인 가능합니다.",
  },
];

export default function SavingsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8">
      <section className="pt-12 md:pt-16 pb-8 md:pb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
          Savings & Time Deposit Calculator
        </p>
        <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-ink">
          적금·정기예금 계산기
        </h1>
        <p className="mt-5 max-w-2xl text-base md:text-lg text-ink-soft leading-relaxed">
          매월 납입하는 <strong className="text-ink">적금</strong>과 한 번에
          예치하는 <strong className="text-ink">정기예금</strong>을 한
          화면에서 계산합니다. 단리/월복리, 일반과세/비과세를 자유롭게
          선택해 만기 수령액과 세후 이자를 즉시 확인하세요.
        </p>
      </section>

      <SavingsCalculator />

      <div className="ad-slot my-16" aria-hidden="true" />

      <section className="max-w-3xl mb-12">
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-6">
          적금·예금 이자, 어떻게 계산되나요?
        </h2>
        <div className="space-y-5 text-ink-soft leading-relaxed">
          <p>
            <strong className="text-ink">적금</strong>은 매월 일정액을 납입하기
            때문에, 첫 달 납입금만 전체 기간 이자가 붙고 마지막 달
            납입금은 한 달치 이자만 붙습니다. 그래서 광고에 표시된 "연
            3.5%"라는 이자율 전부를 받는 게 아닙니다. 단리 적금의 세전 이자
            공식은{" "}
            <code className="font-mono text-sm">
              월납입 × 연이자율 × n(n+1) ÷ 24
            </code>
            로, n은 납입 개월 수입니다.
          </p>
          <p>
            <strong className="text-ink">정기예금</strong>은 일시에 큰 금액을
            예치하므로, 원금 전체에 표시된 이자율이 그대로 적용됩니다. 단리
            상품의 세전 이자는 <code className="font-mono text-sm">원금 ×
            이자율 × 기간</code>으로 계산합니다.
          </p>
          <p>
            <strong className="text-ink">월복리</strong>는 매월 발생한 이자가
            원금에 더해져 다음 달 이자 계산의 기준이 되는 방식입니다.
            기간이 길수록 단리보다 유리해지며, 5년·10년 장기 상품에서는
            상당한 차이가 발생합니다. 단, 한국 시중은행 적금 대부분은
            단리·만기 일시지급 방식입니다.
          </p>
          <p>
            이자에는 <strong className="text-ink">이자소득세 14% + 지방소득세
            1.4%, 합계 15.4%</strong>가 원천징수됩니다. 비과세 상품
            (청년도약계좌, ISA, 농협·새마을금고 조합원 예탁금 등)은
            세금이 부과되지 않거나 일부만 부과됩니다.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mb-12">
        <h2 className="font-display text-2xl md:text-3xl text-ink mb-5">
          상품 선택 가이드
        </h2>
        <div className="space-y-4 text-ink-soft leading-relaxed">
          <p>
            <strong className="text-ink">목돈을 만들고 싶다 → 적금</strong>{" "}
            매월 저축 습관을 들이며 시드머니를 형성하는 데 적합합니다.
            청년이라면 비과세 혜택이 있는 청년도약계좌를 우선 검토하세요.
          </p>
          <p>
            <strong className="text-ink">이미 목돈이 있다 → 정기예금</strong>{" "}
            여윳돈이 있다면 정기예금이 적금보다 받는 이자가 훨씬 큽니다.
            5,000만원 단위로 여러 은행에 분산해 예금자보호한도를 활용하세요.
          </p>
          <p>
            <strong className="text-ink">세금 부담을 줄이고 싶다 → 비과세
            상품</strong> ISA, 청년도약계좌, 조합원 예탁금 등을 적극
            활용합니다. ISA는 일반형 200만원, 서민형 400만원까지 비과세,
            이후 9.9% 분리과세입니다.
          </p>
        </div>
      </section>

      <FaqSection items={FAQ_ITEMS} />

      <div className="my-16" />

      <RelatedGuides category="savings" />

      <section className="max-w-3xl mt-8 pb-16 md:pb-24 text-sm text-ink-muted leading-relaxed">
        <p>
          본 계산기는 일반적인 상품 구조를 기준으로 한 추정치입니다. 우대금리
          조건(자동이체, 카드 사용 실적 등), 만기 후 거치 이자율, 중도해지
          이율 등 세부 조건은 금융기관마다 다릅니다. 정확한 수령액은 가입
          금융기관 또는 금융감독원 금융상품통합비교공시(finlife.fss.or.kr)에서
          확인하세요.
        </p>
      </section>
    </div>
  );
}
