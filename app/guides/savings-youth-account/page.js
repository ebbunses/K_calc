import Link from "next/link";
import GuideLayout from "../../components/GuideLayout";
import { getGuide } from "../../lib/guides";

const guide = getGuide("savings-youth-account");

export const metadata = {
  title: `${guide.title} — K Calc 머니 팁`,
  description: guide.description,
  keywords: [
    "청년도약계좌",
    "청년도약계좌 자격",
    "청년도약계좌 수익",
    "정부 기여금",
    "청년 비과세 적금",
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
        청년도약계좌는{" "}
        <strong className="text-ink">
          ‘5년 후 약 5,000만원 만들기’를 목표로 정부가 보조하는 청년 전용
          적금
        </strong>
        입니다. 일반 적금과 달리 정부 기여금과 비과세 혜택이 동시에 들어가서
        실수익률이 훨씬 높습니다. 자격 조건과 5년 후 실제 받는 금액을 단계별로
        풀어드립니다.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        가입 자격 — 두 가지 조건 모두 충족해야
      </h2>
      <ul className="list-disc list-inside space-y-1.5 ml-1">
        <li>
          <strong className="text-ink">나이</strong> — 만 19~34세
          (병역이행자 최대 6년 추가 인정, 즉 사실상 만 40세까지 가능)
        </li>
        <li>
          <strong className="text-ink">개인 소득</strong> — 연 7,500만원 이하
          (근로·사업소득 합산)
        </li>
        <li>
          <strong className="text-ink">가구 소득</strong> — 중위소득 250% 이하
          (예: 1인 가구 약 5,800만원, 4인 가구 약 1억 4,500만원)
        </li>
        <li>
          <strong className="text-ink">금융소득 종합과세 대상자 제외</strong>
        </li>
      </ul>
      <p>
        자격은 가입 시점 기준으로 한 번만 확인합니다. 가입 후 소득이 늘어도 5년
        만기까지 유지 가능합니다. 단 매년 ‘유지 자격 점검’이 있어 정부 기여금이
        축소될 수는 있습니다.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        구조 — 3겹의 수익원
      </h2>
      <ol className="list-decimal list-inside space-y-1.5 ml-1">
        <li>
          <strong className="text-ink">본인 납입금</strong> — 월 최대 70만원
          (선택 가능, 최소 1,000원부터)
        </li>
        <li>
          <strong className="text-ink">정부 기여금</strong> — 소득 구간별 매월
          최대 3.3만원 (연 39.6만원)
        </li>
        <li>
          <strong className="text-ink">이자 + 비과세</strong> — 시중은행 기본
          이자 + 만기 시 이자소득세 면제 (보통 15.4% 절세 효과)
        </li>
      </ol>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        5년 후 실제 받는 금액 시뮬레이션
      </h2>
      <p>
        월 70만원, 5년 만기, 평균 이율 5%(기본 4.5% + 우대 0.5% 가정)로 계산한
        예시입니다. 정확한 우대 조건은 은행마다 다릅니다.
      </p>

      <div className="bg-paper border border-border-base rounded-xl p-5 my-4 not-prose">
        <p className="text-sm text-ink-muted mb-3">
          중간 소득 구간(연 4,800만원) 기준 시뮬레이션
        </p>
        <table className="w-full text-sm">
          <thead className="text-ink-muted">
            <tr className="border-b border-border-soft">
              <th className="text-left py-2 font-medium">항목</th>
              <th className="text-right py-2 font-medium">금액</th>
            </tr>
          </thead>
          <tbody className="text-ink">
            <tr className="border-b border-border-soft/60">
              <td className="py-2">본인 납입 (70만원 × 60개월)</td>
              <td className="text-right py-2">4,200만원</td>
            </tr>
            <tr className="border-b border-border-soft/60">
              <td className="py-2">정부 기여금 (월 약 2.4만원)</td>
              <td className="text-right py-2">약 144만원</td>
            </tr>
            <tr className="border-b border-border-soft/60">
              <td className="py-2">이자 (5%, 비과세)</td>
              <td className="text-right py-2">약 540만원</td>
            </tr>
            <tr>
              <td className="py-2 font-medium">총 수령액(개략)</td>
              <td className="text-right py-2 font-medium text-accent">
                약 4,884만원
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-ink-muted -mt-1">
        ※ 위 수치는 시뮬레이션 예시입니다. 정부 기여금은 소득 구간에 따라 더
        많거나 적을 수 있고, 이율은 가입 시점에 따라 변동합니다. 정확한 수치는{" "}
        <Link href="/savings" className="text-accent underline">
          적금 계산기
        </Link>
        에서 본인 납입액·이율·기간을 넣고 ‘비과세’ 옵션으로 계산해보세요.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        일반 적금 대비 — 얼마나 차이 나는가
      </h2>
      <p>
        동일하게 월 70만원, 5년 적립을 일반 과세 적금(이율 4%)에 넣으면 얼마가
        될까요?
      </p>
      <div className="bg-paper border border-border-base rounded-xl p-5 my-4 not-prose">
        <table className="w-full text-sm">
          <thead className="text-ink-muted">
            <tr className="border-b border-border-soft">
              <th className="text-left py-2 font-medium">상품</th>
              <th className="text-right py-2 font-medium">5년 후</th>
              <th className="text-right py-2 font-medium">차이</th>
            </tr>
          </thead>
          <tbody className="text-ink">
            <tr className="border-b border-border-soft/60">
              <td className="py-2">일반 적금 4% (과세)</td>
              <td className="text-right py-2">약 4,564만원</td>
              <td className="text-right py-2 text-ink-muted">기준</td>
            </tr>
            <tr>
              <td className="py-2">청년도약계좌</td>
              <td className="text-right py-2">약 4,884만원</td>
              <td className="text-right py-2 text-accent">+ 320만원</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        같은 70만원을 5년 동안 묶어두는 조건이라면, 청년도약계좌의 ‘320만원
        프리미엄’은 사실상 정부가 청년에게 주는 돈입니다.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        중도 해지 시 — 손해 폭이 큽니다
      </h2>
      <p>
        5년 만기 전 해지하면 정부 기여금과 비과세 혜택이 모두 사라집니다.
        본인의 자금 흐름을 고려해 ‘5년 동안 묶어둘 여유 자금’으로만 가입하세요.
        다음의 경우에는 ‘특별중도해지’가 인정되어 일부 혜택 유지됩니다.
      </p>
      <ul className="list-disc list-inside space-y-1.5 ml-1">
        <li>본인·배우자의 사망·해외 이주</li>
        <li>본인의 6개월 이상 요양 진단</li>
        <li>천재지변 등 고용노동부 고시 사유</li>
        <li>(2024년 이후) 결혼·출산·주택 구입 등 일부 사유에 따른 부분 인출 가능 정책 시행</li>
      </ul>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        가입 절차
      </h2>
      <ol className="list-decimal list-inside space-y-1.5 ml-1">
        <li>매월 ‘가입 신청 기간’ 확인 (보통 매월 1~15일경, 정부 공지 참고)</li>
        <li>11개 협약 시중은행 중 한 곳 선택 (KB·신한·우리·하나·NH·IBK·BNK·DGB·JB·광주·iM)</li>
        <li>해당 은행 앱에서 자격 자동 심사 → 통과 시 가입 진행</li>
        <li>월 납입액 설정 (1만원 단위, 1만~70만원)</li>
        <li>5년간 매월 자동이체 — 한 달 거르면 정부 기여금 그달치 손실</li>
      </ol>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        ISA·연금저축과 함께 쓰면 더 좋습니다
      </h2>
      <p>
        청년도약계좌는 안전한 ‘목돈 만들기’ 용도에 최적입니다. 같은 청년이라면
        다음 조합으로 효율을 극대화할 수 있습니다.
      </p>
      <ul className="list-disc list-inside space-y-1.5 ml-1">
        <li>청년도약계좌(월 70만) — 5년 후 목돈</li>
        <li>ISA(연 2,000만원 한도) — 단기 운용 자금, 200~400만원 비과세</li>
        <li>연금저축·IRP(연 700만원 한도) — 노후 자산, 세액공제 16.5%</li>
      </ul>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        요약
      </h2>
      <p>
        자격이 되는 청년이라면 청년도약계좌는 거의 확정 수익의 상품입니다. 같은
        70만원 적금 대비 약 320만원이 더 들어옵니다. 본인이 5년 묶을 수 있는
        금액이 얼마인지 먼저 정한 뒤,{" "}
        <Link href="/savings" className="text-accent underline">
          적금 계산기
        </Link>
        에 ‘적금/비과세’ 옵션으로 시뮬레이션해보세요. 일반 적금 옵션과 직접
        비교하면 차이가 확실히 보입니다.
      </p>
    </GuideLayout>
  );
}
