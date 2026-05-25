import Link from "next/link";
import GuideLayout from "../../components/GuideLayout";
import { getGuide } from "../../lib/guides";

const guide = getGuide("loan-dsr-explained");

export const metadata = {
  title: `${guide.title} — K Calc 머니 팁`,
  description: guide.description,
  keywords: [
    "DSR 계산",
    "DTI",
    "LTV",
    "대출 한도",
    "주택담보대출 한도",
    "스트레스 DSR",
    "K Calc",
  ],
  alternates: { canonical: `/guides/${guide.slug}` },
  openGraph: {
    type: "article",
    url: `/guides/${guide.slug}`,
    title: guide.title,
    description: guide.description,
    publishedTime: guide.publishedAt,
  },
};

export default function Page() {
  return (
    <GuideLayout guide={guide}>
      <p>
        “대출 한도가 6억이라는데 막상 은행에 가니까 3억밖에 안 된다고 한다.”
        이 차이는 거의 항상{" "}
        <strong className="text-ink">DSR(총부채원리금상환비율)</strong> 때문에
        생깁니다. DSR을 정확히 이해하면 본인의 대출 한도를 미리 추정할 수 있고,
        한도를 늘리는 전략도 보입니다. 이 글에서 DSR·DTI·LTV의 차이부터 본인
        한도 직접 계산법까지 정리합니다.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        DSR · DTI · LTV — 무엇이 다른가
      </h2>
      <div className="bg-paper border border-border-base rounded-xl p-5 my-4 not-prose">
        <table className="w-full text-sm">
          <thead className="text-ink-muted">
            <tr className="border-b border-border-soft">
              <th className="text-left py-2 font-medium">지표</th>
              <th className="text-left py-2 font-medium">의미</th>
              <th className="text-left py-2 font-medium">기준</th>
            </tr>
          </thead>
          <tbody className="text-ink">
            <tr className="border-b border-border-soft/60">
              <td className="py-2 font-medium">LTV</td>
              <td className="py-2">담보(집) 가치 대비 대출</td>
              <td className="py-2 text-ink-soft">집값의 50~70%</td>
            </tr>
            <tr className="border-b border-border-soft/60">
              <td className="py-2 font-medium">DTI</td>
              <td className="py-2">소득 대비 주택대출 ‘이자’ 비중</td>
              <td className="py-2 text-ink-soft">현재 거의 사용 X</td>
            </tr>
            <tr>
              <td className="py-2 font-medium">DSR</td>
              <td className="py-2">소득 대비 ‘모든 대출의 원리금’ 비중</td>
              <td className="py-2 text-ink-soft">40% (은행권 기준)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        2022년 이후 한국은 DSR을 중심으로 한도가 결정됩니다. LTV가 아무리 높아도
        DSR을 못 넘기면 그게 한도입니다.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        DSR 한도 — 핵심 공식
      </h2>
      <p>
        DSR은 ‘소득 대비 1년치 원리금 상환액 비중’입니다.
      </p>
      <div className="bg-border-soft/40 rounded-lg px-4 py-3 my-4 not-prose">
        <p className="font-mono text-sm text-ink">
          DSR = (모든 대출의 연 원리금 상환액) ÷ 연 소득 × 100
        </p>
      </div>
      <p>
        은행권 일반 한도는 DSR 40%, 비은행권(2금융권)은 50%입니다. 즉 연 소득
        6,000만원이면 모든 대출의 연 원리금 합계가{" "}
        <strong className="text-ink">2,400만원</strong>을 넘으면 안 됩니다.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        본인의 한도를 직접 계산하는 법 — 3단계
      </h2>
      <p>
        ‘내가 추가로 받을 수 있는 주택담보대출 한도’를 추정하는 방법입니다.
      </p>
      <p>
        <strong className="text-ink">1단계.</strong> 연 소득의 40%를 구합니다.
        세전 기준 연 소득 6,000만원이라면 2,400만원입니다. 이게 본인이 1년 동안
        ‘모든 대출 원리금’으로 지출 가능한 최대 금액입니다.
      </p>
      <p>
        <strong className="text-ink">2단계.</strong> 기존 대출의 연 원리금을
        뺍니다. 신용대출 5,000만원이 있다면 보통 ‘5년 만기 분할 상환’으로
        간주되어 연 약 1,100만원 정도가 ‘이미 쓴 한도’입니다.
      </p>
      <p>
        <strong className="text-ink">3단계.</strong> 남은 금액으로 가능한
        주택담보대출 한도를 역산합니다. 예: 2,400 − 1,100 = 1,300만원이면, 연
        1,300만원의 원리금으로 갚을 수 있는 30년 만기 4.5% 주택담보대출은 약{" "}
        <strong className="text-ink">2.1억원</strong> 수준입니다.
      </p>
      <p>
        이 마지막 단계의 역산은{" "}
        <Link href="/loan" className="text-accent underline">
          대출 이자 계산기
        </Link>
        에서 원금을 바꿔가며 월 상환액이 본인 한도 이내인지 확인하는 방식으로
        할 수 있습니다.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        주의 — 한도가 더 줄어드는 함정들
      </h2>
      <ul className="list-disc list-inside space-y-1.5 ml-1">
        <li>
          <strong className="text-ink">신용대출은 ‘5년 분할 상환’으로
          계산</strong> — 실제로는 만기일시여도 한도 계산 시에는 5년 분할
          간주됩니다.
        </li>
        <li>
          <strong className="text-ink">마이너스 통장</strong> — 사용 한도의
          90%를 빌린 것으로 간주해 한도를 깎습니다.
        </li>
        <li>
          <strong className="text-ink">자동차 할부·카드 리볼빙</strong> — 모두
          DSR에 포함됩니다.
        </li>
        <li>
          <strong className="text-ink">전세자금대출</strong> — 일부 한도 산입.
          최근 정책 변동이 잦으니 거래 은행에 직접 확인 권장.
        </li>
        <li>
          <strong className="text-ink">스트레스 DSR</strong> — 2024년부터
          주택담보대출은 시장 금리에 ‘스트레스 금리(약 0.4~1.5%p)’를 더한 가정
          금리로 한도를 재산정합니다. 실제 한도는 위 계산보다 더 적게 나옵니다.
        </li>
      </ul>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        한도를 늘리는 현실적인 전략
      </h2>
      <ol className="list-decimal list-inside space-y-1.5 ml-1">
        <li>
          <strong className="text-ink">기존 신용대출 상환</strong> — 한도 산정의
          가장 큰 변수. 작은 신용대출도 한도에 큰 영향을 줍니다.
        </li>
        <li>
          <strong className="text-ink">마이너스 통장 한도 축소·해지</strong> —
          사용 안 해도 한도 자체가 DSR에 잡힙니다.
        </li>
        <li>
          <strong className="text-ink">대출 기간 늘리기</strong> — 30년 → 40년
          전환으로 월 상환액이 약 10% 줄어 한도 회복 가능. 단 총 이자는 증가.
        </li>
        <li>
          <strong className="text-ink">소득 산정 기간 확대</strong> — 최근 1년
          대신 2년·3년 평균을 적용해주는 상품이 있는지 확인. 인센티브가 큰
          직군에 유리.
        </li>
        <li>
          <strong className="text-ink">부부 합산 소득 활용</strong> — 공동
          명의·소득 합산이 가능한 상품 선택.
        </li>
      </ol>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        DSR을 ‘맞추는 것’ vs ‘여유 두는 것’
      </h2>
      <p>
        DSR 40%까지 꽉 채워서 받을 수도 있지만, 실제 가계 운영은 그보다 여유가
        필요합니다. 통상 30~35% 수준에서 멈추는 것이 안전합니다. 금리 인상·
        실직 등 충격에 견디는 ‘완충 한도’를 1년치 원리금 정도는 남겨두세요.
        본인의 적정 월 상환액을{" "}
        <Link href="/loan" className="text-accent underline">
          대출 이자 계산기
        </Link>
        의 3가지 상환방식으로 비교하면서 가늠해보면 좋습니다.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        요약
      </h2>
      <p>
        DSR 40% × 연 소득에서 ‘기존 대출 연 원리금’을 빼고, 남은 금액으로 갚을
        수 있는 주담대 원금을 역산하면 본인 한도가 나옵니다. 신용대출·마이너스
        통장·자동차 할부가 모두 한도를 깎고 있다는 점을 잊지 마세요. 정확한
        한도와 자격은 거래 금융기관 또는 한국주택금융공사에서 최종 확인하세요.
      </p>
    </GuideLayout>
  );
}
