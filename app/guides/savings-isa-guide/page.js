import Link from "next/link";
import GuideLayout from "../../components/GuideLayout";
import { getGuide } from "../../lib/guides";

const guide = getGuide("savings-isa-guide");

export const metadata = {
  title: `${guide.title} — K Calc 머니 팁`,
  description: guide.description,
  keywords: [
    "ISA",
    "ISA 일반형",
    "ISA 서민형",
    "ISA 청년형",
    "ISA 비과세 한도",
    "절세 계좌",
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
        ISA(개인종합자산관리계좌)는 ‘한 계좌에서 예금·펀드·ETF·주식’을 묶어
        운용하면서{" "}
        <strong className="text-ink">
          이자·배당·매매차익에 발생하는 세금을 줄여주는
        </strong>{" "}
        절세 계좌입니다. 일반형·서민형·청년형 세 가지 유형이 있는데 비과세 한도와
        가입 자격이 다릅니다. 본인 상황에 맞는 선택을 정리해드립니다.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        세 가지 유형 — 핵심 비교
      </h2>
      <div className="bg-paper border border-border-base rounded-xl p-5 my-4 not-prose">
        <table className="w-full text-sm">
          <thead className="text-ink-muted">
            <tr className="border-b border-border-soft">
              <th className="text-left py-2 font-medium">유형</th>
              <th className="text-right py-2 font-medium">비과세 한도</th>
              <th className="text-right py-2 font-medium">가입 자격</th>
              <th className="text-right py-2 font-medium">의무 기간</th>
            </tr>
          </thead>
          <tbody className="text-ink">
            <tr className="border-b border-border-soft/60">
              <td className="py-2">일반형</td>
              <td className="text-right py-2">200만원</td>
              <td className="text-right py-2 text-ink-soft">만 19세 이상</td>
              <td className="text-right py-2">3년</td>
            </tr>
            <tr className="border-b border-border-soft/60">
              <td className="py-2">서민형</td>
              <td className="text-right py-2">400만원</td>
              <td className="text-right py-2 text-ink-soft">
                근로 5,000만/사업 3,800만 이하
              </td>
              <td className="text-right py-2">3년</td>
            </tr>
            <tr>
              <td className="py-2">청년형</td>
              <td className="text-right py-2">400만원</td>
              <td className="text-right py-2 text-ink-soft">
                만 19~34세 + 소득 요건
              </td>
              <td className="text-right py-2">3년</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        세 가지 모두{" "}
        <strong className="text-ink">납입 한도는 연 2,000만원(누적
        1억원)</strong>으로 동일합니다. 차이는 ‘얼마까지 세금이 안 붙는지(비과세
        한도)’와 가입 자격입니다.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        비과세 구조 — 어떻게 작동하나
      </h2>
      <p>
        ISA에서 발생한 모든 소득(이자·배당·매매차익)은 ‘비과세 한도’까지는 세금이
        없습니다. 한도를 넘는 부분은 9.9%의 분리과세가 적용됩니다 (일반
        이자소득세 15.4%보다 5.5%p 낮음).
      </p>
      <p>
        예: 일반형 ISA에서 3년간 250만원 수익이 났다면, 200만원까지 비과세 →
        50만원만 9.9% 과세 (약 5만원 세금). 일반 예금이었다면 250만원 × 15.4% =
        38만 5천원의 세금이 빠졌을 텐데, ISA는 5만원이면 끝납니다. 33만 5천원
        절약입니다.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        어떤 유형이 본인에게 맞을까
      </h2>
      <p>가입 자격이 되면 무조건 우선순위는 다음과 같습니다.</p>
      <ol className="list-decimal list-inside space-y-1.5 ml-1">
        <li>
          <strong className="text-ink">청년형</strong> — 만 19~34세이고 근로
          5,000만원 이하·사업 3,800만원 이하라면 이걸 선택. 한도 400만원 +
          나이가 어릴수록 운용 기간 길어 효과 누적.
        </li>
        <li>
          <strong className="text-ink">서민형</strong> — 청년 자격이 안 되지만
          소득 요건이 맞으면 서민형. 한도가 일반형의 2배.
        </li>
        <li>
          <strong className="text-ink">일반형</strong> — 위 둘 다 안 되면
          일반형. 한도 200만원이지만 아예 가입하지 않는 것보다는 절세 효과 큼.
        </li>
      </ol>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        ISA 안에 무엇을 담을까 — 운용 전략
      </h2>
      <p>
        ISA 계좌 안에서는 예금·국내 ETF·해외 ETF·국내주식·펀드 등 거의 모든
        금융상품을 담을 수 있습니다 (단, 해외주식 직접 매수는 일부 증권사 ISA에
        한해 가능).
      </p>
      <ul className="list-disc list-inside space-y-1.5 ml-1">
        <li>
          <strong className="text-ink">안전형(예금·MMF)</strong> — 단기에 큰
          이자 비과세 효과는 적지만 원금 안전.
        </li>
        <li>
          <strong className="text-ink">중장기 ETF</strong> — 미국 S&P500·코스피
          ETF 등 3년 보유 시 매매차익 비과세가 크게 작동.
        </li>
        <li>
          <strong className="text-ink">배당주·고배당 ETF</strong> — 일반 계좌
          대비 배당소득세(15.4%) 절감이 매년 누적.
        </li>
      </ul>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        의무 보유 기간 — 3년 이전 해지 시
      </h2>
      <p>
        세 유형 모두 의무 보유 기간이 3년입니다. 만기 전에 해지하면 비과세 혜택이
        취소되고, 그동안 발생한 소득에 일반 세율(15.4%)이 ‘사후 추징’됩니다.
        부분 인출은 ‘납입 원금까지’ 자유롭게 가능하므로 비상금 용도로도 활용
        가능합니다.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        만기 후 — 연금저축으로 옮기면 추가 절세
      </h2>
      <p>
        ISA 만기 시 자금을 일반 계좌로 받지 않고{" "}
        <strong className="text-ink">연금저축·IRP로 이전</strong>하면, 이전
        금액의 10%(최대 300만원)까지 연말정산에서 추가로 세액공제 받을 수
        있습니다. ‘ISA 3년 → 연금저축 이전’ 패턴은 한국에서 가장 흔하게 권장되는
        절세 사이클입니다.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        ISA 가입 시 체크리스트
      </h2>
      <ol className="list-decimal list-inside space-y-1.5 ml-1">
        <li>본인이 어떤 유형 자격에 해당하는지 확인 (홈택스 ‘소득금액증명원’)</li>
        <li>
          ISA는 1인 1계좌 — 은행형/증권형 중 운용 방향(예금 중심 vs 투자 중심)에
          맞춰 선택
        </li>
        <li>가입 즉시 연 2,000만원을 다 넣을 필요 없음 — 본인 자금 흐름에 맞춰 분할 납입</li>
        <li>3년 묶일 자금만 ISA에 — 그 외는 일반 예금/적금 등으로 분산</li>
        <li>만기 시점에 연금저축 이전 검토 — 추가 절세 가능</li>
      </ol>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        간단 시뮬레이션 — 정기예금만 넣은 경우
      </h2>
      <p>
        ISA 청년형에 연 2,000만원씩 3년 납입(총 6,000만원), 평균 이율 3.8%
        정기예금만 운용했다고 가정하면 3년 후 이자는 약 690만원입니다.
      </p>
      <ul className="list-disc list-inside space-y-1.5 ml-1">
        <li>일반 예금: 690만원 × 15.4% = 약 106만원 세금</li>
        <li>ISA 청년형: 400만원까지 비과세 + 나머지 290만원 × 9.9% = 약 29만원 세금</li>
        <li>
          <strong className="text-ink">절감 효과: 약 77만원</strong>
        </li>
      </ul>
      <p>
        본인의 납입 계획에 맞춰 일반 적금/예금과의 차이를{" "}
        <Link href="/savings" className="text-accent underline">
          적금 계산기
        </Link>
        에서 ‘비과세’와 ‘일반과세’ 옵션을 바꿔가며 직접 확인해보세요.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        요약
      </h2>
      <p>
        ISA는 한국 직장인이라면 거의 모두에게 의미 있는 절세 계좌입니다. 자격이
        되면 청년형 → 서민형 → 일반형 순으로 우선순위를 두고, 3년 묶을 수 있는
        자금만 넣으세요. 만기 후 연금저축 이전까지 활용하면 같은 자금으로 두
        번의 절세가 가능합니다.
      </p>
    </GuideLayout>
  );
}
