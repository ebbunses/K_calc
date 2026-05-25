import Link from "next/link";
import GuideLayout from "../../components/GuideLayout";
import { getGuide } from "../../lib/guides";

const guide = getGuide("salary-negotiation-checkpoints");

export const metadata = {
  title: `${guide.title} — K Calc 머니 팁`,
  description: guide.description,
  keywords: [
    "연봉 협상",
    "이직 연봉",
    "세전 세후",
    "성과급 협상",
    "사이닝 보너스",
    "연봉 인상률",
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
        연봉 협상에서 가장 흔한 실수는{" "}
        <strong className="text-ink">‘제시 금액 그대로 비교하는 것’</strong>
        입니다. 같은 7,000만원이라도 회사마다 실수령액·복지·성과급 구조가
        달라서 실제 손에 쥐는 돈이 수백만 원 차이가 날 수 있습니다. 협상 전후로
        반드시 확인해야 할 다섯 가지를 정리했습니다.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        ① 세전 vs 세후 — ‘진짜 비교 단위’를 맞추세요
      </h2>
      <p>
        제안서에 적힌 연봉은 거의 항상 세전 금액입니다. 4대 보험과 소득세가
        빠지면 보통 연봉의 78~88% 정도가 실수령액으로 남습니다. 7,000만원 제안과
        7,500만원 제안이 있다면 단순히 500만원 차이가 아니라, 실수령액 차이는
        약 400만원 안팎입니다.
      </p>
      <p>
        부양가족·자녀 수가 다르면 같은 연봉도 실수령액이 달라집니다. 협상 전에{" "}
        <Link href="/salary" className="text-accent underline">
          연봉 실수령액 계산기
        </Link>
        로 본인 가족 구성에 맞춘 실수령액을 먼저 계산해두세요. 그래야 ‘기존
        대비 얼마나 더 받는지’를 정확히 가늠할 수 있습니다.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        ② 식대·복지비가 ‘연봉에 포함’인지 ‘별도’인지
      </h2>
      <p>
        같은 6,000만원이어도 의미가 다릅니다.
      </p>
      <div className="bg-paper border border-border-base rounded-xl p-5 my-4 not-prose">
        <table className="w-full text-sm">
          <thead className="text-ink-muted">
            <tr className="border-b border-border-soft">
              <th className="text-left py-2 font-medium">구분</th>
              <th className="text-right py-2 font-medium">A 회사</th>
              <th className="text-right py-2 font-medium">B 회사</th>
            </tr>
          </thead>
          <tbody className="text-ink">
            <tr className="border-b border-border-soft/60">
              <td className="py-2">기본 연봉</td>
              <td className="text-right py-2">6,000만원</td>
              <td className="text-right py-2">5,760만원</td>
            </tr>
            <tr className="border-b border-border-soft/60">
              <td className="py-2">식대(비과세)</td>
              <td className="text-right py-2 text-ink-muted">포함</td>
              <td className="text-right py-2">+ 월 20만원</td>
            </tr>
            <tr className="border-b border-border-soft/60">
              <td className="py-2">복지카드</td>
              <td className="text-right py-2 text-ink-muted">없음</td>
              <td className="text-right py-2">+ 연 100만원</td>
            </tr>
            <tr>
              <td className="py-2 text-ink">실수령 차이</td>
              <td className="text-right py-2 text-ink-muted">기준</td>
              <td className="text-right py-2 text-accent">약 +180만원</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        식대는 월 20만원까지 비과세이므로 4대 보험·소득세에서 모두 빠집니다.
        같은 사이즈의 회사라도 협상안에서 ‘식대 별도’인 곳을 고르면 절세 효과가
        매월 4~5만원, 연 50~60만원 수준이 됩니다.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        ③ 성과급(인센티브) — 기본급의 몇 %인가
      </h2>
      <p>
        한국 대기업·외국계는 ‘성과급 별도’ 구조가 많습니다. 계약서에는 보통
        다음과 같이 명시됩니다.
      </p>
      <ul className="list-disc list-inside space-y-1.5 ml-1">
        <li>‘기본 연봉 + 성과급 타깃 0~30%’ → 회사 실적과 개인 평가에 따라 변동</li>
        <li>‘월 기본급 × 13~16개월’ → 약속된 만큼은 보장(상여금 형식)</li>
        <li>‘RSU/Stock’ → 외국계·대형 IT 위주, 베스팅 기간 확인 필수</li>
      </ul>
      <p>
        ‘타깃 30%’라고 해도 실적이 나쁘면 0이 될 수 있습니다. 협상 시 최근
        3년간 평균 지급률을 직접 물어보세요. 답변을 회피한다면 보장된 금액이
        아니라고 보는 것이 안전합니다.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        ④ 사이닝 보너스 — 단발성인지 ‘유보 조항’ 있는지
      </h2>
      <p>
        이직 시 일시금으로 지급되는 사이닝 보너스는 매력적이지만 함정이 있습니다.
        대부분의 계약에 ‘1년 이내 자발적 퇴사 시 전액 반환’ 조항이 들어갑니다.
        업종에 따라 2년·3년 환원 의무가 붙기도 합니다.
      </p>
      <p>
        또한 사이닝 보너스는 ‘근로소득’으로 분류되어 일반 종합소득세율(6~45%
        누진)이 적용됩니다. 1,000만원 사이닝 보너스를 받아도 세금을 빼고 실제
        손에 쥐는 금액은 750만~830만원 수준입니다. 단발성 이익으로 보고 연봉
        자체를 더 올리는 협상이 장기적으로 더 유리할 수 있습니다.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        ⑤ 정기 인상률·승진 조건 — 1년 뒤를 보세요
      </h2>
      <p>
        한국 회사는 연봉 협상보다 매년 정기 인상률이 보수적인 경우가 많습니다.
        7,000만원으로 시작했어도 연 평균 인상률이 3%라면, 5년 뒤에는 약
        8,115만원에 그칩니다. 반면 5%면 같은 기간에 8,936만원으로 약 800만원
        차이가 납니다.
      </p>
      <p>다음을 미리 확인하세요.</p>
      <ul className="list-disc list-inside space-y-1.5 ml-1">
        <li>정기 베이스 인상률(작년·재작년 평균)</li>
        <li>승진 시점의 별도 인상폭(있는 회사 vs 없는 회사)</li>
        <li>경력 인정 — 동종업계 경력이 몇 호봉으로 반영되는지</li>
        <li>레벨/직급 구조 — 같은 직급의 상·하한 연봉(밴드)</li>
      </ul>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        협상 직전 마지막 체크리스트
      </h2>
      <ul className="list-disc list-inside space-y-1.5 ml-1">
        <li>본인의 현재 실수령액을 1원 단위로 알고 있는가</li>
        <li>제안 연봉의 세후 금액을 계산해봤는가</li>
        <li>식대·복지·통신비 등 비과세·부가 항목이 포함인지 별도인지 확인했는가</li>
        <li>성과급의 최근 3년 평균 지급률을 물어봤는가</li>
        <li>사이닝 보너스에 환원 조항이 있는가 (있다면 몇 년)</li>
        <li>정기 인상률과 승진 인상폭을 들었는가</li>
      </ul>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        요약
      </h2>
      <p>
        연봉 협상은 ‘제시 금액’을 비교하는 게 아니라 ‘실수령액 + 보장된 부가
        항목 + 1년 뒤 인상폭’을 비교하는 작업입니다. 본인의 기준선을 정확히 알고
        있어야 협상이 가능합니다 —{" "}
        <Link href="/salary" className="text-accent underline">
          연봉 실수령액 계산기
        </Link>
        에 부양가족·식대 조건을 넣어 본인의 정확한 실수령액부터 확인해보세요.
      </p>
    </GuideLayout>
  );
}
