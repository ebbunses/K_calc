import Link from "next/link";
import GuideLayout from "../../components/GuideLayout";
import { getGuide } from "../../lib/guides";

const guide = getGuide("salary-nontax-items");

export const metadata = {
  title: `${guide.title} — K Calc 머니 팁`,
  description: guide.description,
  keywords: [
    "비과세 식대",
    "자가운전보조금",
    "출산보육수당",
    "비과세 항목",
    "근로소득 비과세",
    "연봉 절세",
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
        같은 연봉 6,000만원이어도 비과세 항목을 잘 활용하면 매월 실수령액이
        10만원 이상 차이 날 수 있습니다. 한국 세법이 인정하는 대표 비과세
        항목과 적용 한도, 그리고 회사와 어떻게 협의하면 좋은지 정리했습니다.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        비과세 = ‘세금이 안 붙는 항목’
      </h2>
      <p>
        세법은 ‘이건 임금이지만 사회 정책상 세금을 매기지 않는다’고 정해놓은
        항목들이 있습니다. 회사가 이 항목으로 지급하면 동일한 총액이라도{" "}
        <strong className="text-ink">
          소득세도, 4대 보험료도 빠지지 않습니다.
        </strong>{" "}
        즉 회사도 보험료 절감, 직원도 실수령 증가라는 ‘둘 다 이득’ 구조라
        회사 입장에서도 거절할 이유가 적습니다.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        ① 식대 — 월 20만원 (가장 보편적)
      </h2>
      <p>
        2023년부터 식대 비과세 한도가 월 10만원 → 월 20만원으로 상향되었습니다.
        대부분의 회사가 이미 식대 항목을 도입하고 있고, 도입하지 않았다면 인사팀에
        ‘식대 항목 신설’을 건의할 수 있습니다.
      </p>
      <ul className="list-disc list-inside space-y-1.5 ml-1">
        <li>적용 한도: 월 20만원(연 240만원)</li>
        <li>조건: 회사가 별도 식사 제공(구내식당·식권)을 ‘하지 않는’ 경우</li>
        <li>절세 효과: 연봉 5,000만원 직장인 기준 매월 약 4~5만원 실수령 증가</li>
      </ul>
      <p>
        식사 제공과 식대를 모두 받는 경우, 식대가 과세 처리될 수 있습니다.
        급여명세서에서 ‘식대’ 항목이 ‘비과세’ 칸에 들어가 있는지 확인하세요.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        ② 자가운전보조금 — 월 20만원
      </h2>
      <p>
        본인 명의 차량을 업무에 사용하는 직원에게 지급되는 보조금은 월 20만원까지
        비과세됩니다. 영업직·외근직이 많은 회사에서 활발히 활용되며, 사무직도
        조건만 맞으면 지급 가능합니다.
      </p>
      <ul className="list-disc list-inside space-y-1.5 ml-1">
        <li>본인 또는 배우자 공동명의 차량이어야 함</li>
        <li>실제 업무용 사용 입증이 필요(주행기록부 등)</li>
        <li>법인차량 사용 시·렌터카 사용 시 적용 불가</li>
        <li>대중교통 사용자에게 지급되는 ‘교통비’는 ‘과세’ 처리됨 (혼동 주의)</li>
      </ul>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        ③ 출산·보육수당 — 월 20만원
      </h2>
      <p>
        본인 또는 배우자가 6세 이하 자녀를 양육 중이면 회사가 지급하는
        보육수당이 월 20만원까지 비과세입니다. 자녀 1명당 한도이며, 부모가 같은
        회사에서 일하면 한 명만 받을 수 있습니다.
      </p>
      <p>
        2024년부터 ‘기업이 자녀에게 지급하는 출산지원금’은 별도로 전액 비과세가
        가능해졌습니다(2회 한도). 출산 예정·신생아 부모는 인사팀에 별도 정책이
        있는지 확인해보세요.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        ④ 그 외 — 직군·상황별 비과세
      </h2>
      <ul className="list-disc list-inside space-y-1.5 ml-1">
        <li>
          <strong className="text-ink">육아휴직급여·산전후휴가급여</strong> —
          고용보험에서 지급, 전액 비과세
        </li>
        <li>
          <strong className="text-ink">연구개발비</strong> — 연구원 자격
          인정자에게 월 20만원까지 비과세
        </li>
        <li>
          <strong className="text-ink">벽지·해외 근무 수당</strong> — 특수 지역
          근무자, 월 20~100만원까지
        </li>
        <li>
          <strong className="text-ink">학자금·교육비</strong> — 회사가 직무 관련
          교육에 지원하는 경우 비과세
        </li>
        <li>
          <strong className="text-ink">사택 제공</strong> — 회사 사택을 시가보다
          저렴하게 임대받을 때 그 차액 비과세
        </li>
      </ul>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        절세 효과 — 같은 6,000만원이라도
      </h2>
      <div className="bg-paper border border-border-base rounded-xl p-5 my-4 not-prose">
        <table className="w-full text-sm">
          <thead className="text-ink-muted">
            <tr className="border-b border-border-soft">
              <th className="text-left py-2 font-medium">시나리오</th>
              <th className="text-right py-2 font-medium">연 비과세</th>
              <th className="text-right py-2 font-medium">월 실수령 증가</th>
            </tr>
          </thead>
          <tbody className="text-ink">
            <tr className="border-b border-border-soft/60">
              <td className="py-2">식대만 적용</td>
              <td className="text-right py-2">240만원</td>
              <td className="text-right py-2 text-accent">약 +4.5만원</td>
            </tr>
            <tr className="border-b border-border-soft/60">
              <td className="py-2">식대 + 자가운전</td>
              <td className="text-right py-2">480만원</td>
              <td className="text-right py-2 text-accent">약 +9만원</td>
            </tr>
            <tr>
              <td className="py-2">식대 + 자가운전 + 출산보육</td>
              <td className="text-right py-2">720만원</td>
              <td className="text-right py-2 text-accent">약 +13.5만원</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-ink-muted -mt-1">
        ※ 연봉 6,000만원, 1인 가구 기준 단순 추정. 실제 차이는 본인의 4대 보험
        구간·소득세 구간에 따라 ±20% 변동할 수 있습니다.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        주의 — 잘못 활용하면 가산세
      </h2>
      <ul className="list-disc list-inside space-y-1.5 ml-1">
        <li>
          비과세 처리는 ‘실제로 그 용도로 지급된 경우’에만 인정됩니다. 식대를
          받지만 회사가 점심을 제공하면 과세 처리해야 합니다.
        </li>
        <li>
          자가운전보조금은 차량 미보유자에게 지급하면 추후 가산세 위험이
          있습니다.
        </li>
        <li>
          국세청은 5년치 거슬러 조사 가능합니다. 회사 인사팀이 정확히 처리하는지
          가끔 급여명세서로 확인하세요.
        </li>
      </ul>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        실무 — 회사와 협의하는 방법
      </h2>
      <ol className="list-decimal list-inside space-y-1.5 ml-1">
        <li>현재 급여명세서에서 ‘비과세’로 분류된 항목을 모두 확인</li>
        <li>‘식대 항목이 없거나 한도 미만’이면 인사팀에 한도 상향 요청</li>
        <li>본인 차량 업무 사용자라면 자가운전보조금 신설/적용 요청</li>
        <li>6세 이하 자녀가 있다면 출산·보육수당 신청 (배우자와 중복 불가)</li>
        <li>모두 적용 후 다음 달 급여명세서로 비과세 합계가 늘었는지 확인</li>
      </ol>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        요약
      </h2>
      <p>
        비과세 항목은 ‘회사도 직원도 모두 이득’인 구조라 협의가 잘 됩니다.
        식대·자가운전·출산보육만 챙겨도 연간 60만~160만원 정도의 실수령액 증가가
        가능합니다. 적용 전후 본인의 실수령액이 얼마나 달라지는지{" "}
        <Link href="/salary" className="text-accent underline">
          연봉 실수령액 계산기
        </Link>
        의 ‘비과세 식대 적용’ 토글로 직접 비교해보세요.
      </p>
    </GuideLayout>
  );
}
