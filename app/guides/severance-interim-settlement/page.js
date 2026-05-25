import Link from "next/link";
import GuideLayout from "../../components/GuideLayout";
import { getGuide } from "../../lib/guides";

const guide = getGuide("severance-interim-settlement");

export const metadata = {
  title: `${guide.title} — K Calc 머니 팁`,
  description: guide.description,
  keywords: [
    "퇴직금 중간정산",
    "중간정산 사유",
    "퇴직금 세금",
    "퇴직금 손해",
    "주택 구입 중간정산",
    "퇴직금 담보 대출",
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
        “집 살 돈이 모자라서 퇴직금 중간정산을 받고 싶은데, 가능할까요?” 자주
        오는 질문입니다. 결론부터 말하면{" "}
        <strong className="text-ink">
          가능은 하지만 받지 않는 것이 거의 항상 유리
        </strong>
        합니다. 이유는 세금 구조와 근속연수 ‘리셋’ 효과 두 가지에 있습니다.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        ① 그래도 가능한 사유 — 법정 5가지
      </h2>
      <p>
        근로자퇴직급여보장법 시행령은 중간정산을 ‘일정 사유’에 한해서만
        허용합니다. 회사가 임의로 정해줄 수는 없습니다.
      </p>
      <ul className="list-disc list-inside space-y-1.5 ml-1">
        <li>
          <strong className="text-ink">무주택자 본인 명의 주택 구입</strong> —
          잔금일 전후 일정 기간 내에 신청해야 합니다.
        </li>
        <li>
          <strong className="text-ink">전세금·임차보증금 부담</strong> —
          무주택자가 본인이 사는 주거지를 새로 임차할 때.
        </li>
        <li>
          <strong className="text-ink">본인·배우자·부양가족의 6개월 이상
          요양</strong> — 의료비 부담을 위한 사용.
        </li>
        <li>
          <strong className="text-ink">최근 5년 이내 본인 또는 가족의
          파산·개인회생</strong>
        </li>
        <li>
          <strong className="text-ink">천재지변·재난 등 고용노동부 고시
          사유</strong>
        </li>
      </ul>
      <p className="text-sm text-ink-muted">
        ※ 이 사유 외의 ‘여행 자금’, ‘투자 자금’, ‘자동차 구입’ 등은 중간정산
        대상이 아닙니다.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        ② 손해인 이유 ① — 근속연수가 ‘리셋’됩니다
      </h2>
      <p>
        한국의 퇴직금 제도는 마지막 3개월 평균임금에 근속연수를 곱하는 구조입니다.
        그런데 중간정산을 받으면 정산 시점 기준으로 퇴직금이 ‘정산 완료’ 처리되고,{" "}
        <strong className="text-ink">
          그 이후의 근속만 새로 누적
        </strong>
        됩니다.
      </p>
      <p>
        문제는 한국 직장인의 월급이 보통 근속과 함께 오른다는 점입니다. 정산
        시점의 낮은 평균임금으로 ‘과거 근속분’의 퇴직금이 확정되어 버리면, 같은
        회사에서 같은 기간을 일해도 받을 수 있는 총 퇴직금이 줄어듭니다.
      </p>

      <div className="bg-paper border border-border-base rounded-xl p-5 my-4 not-prose">
        <p className="text-sm text-ink-muted mb-3">
          예) 10년 근속 후 퇴사하는 직원
        </p>
        <table className="w-full text-sm">
          <thead className="text-ink-muted">
            <tr className="border-b border-border-soft">
              <th className="text-left py-2 font-medium">구분</th>
              <th className="text-right py-2 font-medium">정산 안 함</th>
              <th className="text-right py-2 font-medium">5년차 정산</th>
            </tr>
          </thead>
          <tbody className="text-ink">
            <tr className="border-b border-border-soft/60">
              <td className="py-2">5년차 평균임금</td>
              <td className="text-right py-2 text-ink-muted">−</td>
              <td className="text-right py-2">350만원</td>
            </tr>
            <tr className="border-b border-border-soft/60">
              <td className="py-2">10년차 평균임금</td>
              <td className="text-right py-2">450만원</td>
              <td className="text-right py-2">450만원</td>
            </tr>
            <tr className="border-b border-border-soft/60">
              <td className="py-2">총 퇴직금 합계(개략)</td>
              <td className="text-right py-2">약 4,500만원</td>
              <td className="text-right py-2">약 4,000만원</td>
            </tr>
            <tr>
              <td className="py-2 text-ink-muted">차이</td>
              <td className="text-right py-2 text-ink-muted">−</td>
              <td className="text-right py-2 text-red-500">약 −500만원</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        ③ 손해인 이유 ② — 세금이 두 번
      </h2>
      <p>
        퇴직소득세는 ‘근속연수 공제’가 핵심입니다. 근속이 길수록 공제가 커져
        세금이 적습니다. 그런데 중간정산을 받으면 정산받은 금액에 대해 그 시점의
        근속연수(예: 5년)로 계산된 세금이 부과됩니다. 이후 퇴사하면 남은 근속
        분(5년)에 대해 또 한 번 적은 근속연수로 세금이 매겨집니다.
      </p>
      <p>
        반면 정산을 받지 않고 10년을 채워서 퇴사하면, 전체 퇴직금에 대해 ‘10년
        근속 공제’가 한 번에 적용되어 세금이 훨씬 적게 나옵니다. 같은 회사에서
        같은 기간을 일했는데 세금만 더 낸 셈입니다.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        ④ 손해인 이유 ③ — 노후 자산이 줄어듭니다
      </h2>
      <p>
        중간정산받은 돈은 보통 IRP에 들어가지 않고 즉시 사용됩니다.
        퇴직소득세까지 떼고 받은 금액이 부동산 잔금이나 생활비로 사라지면, 노후
        자산으로서의 퇴직금 기능이 사실상 사라집니다. 결국 노후에는 다른 자금
        원천(국민연금, 개인 저축)에 의존해야 하므로 전체 노후 대비가
        뒤로 밀립니다.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        그래서, 대안은?
      </h2>
      <p>
        급전이 필요하다고 해서 무조건 중간정산만 답인 것은 아닙니다. 다음 옵션을
        먼저 검토하는 것이 좋습니다.
      </p>
      <ul className="list-disc list-inside space-y-1.5 ml-1">
        <li>
          <strong className="text-ink">퇴직금 담보 대출</strong> — DC형
          퇴직연금이나 일부 DB형에서는 적립금을 담보로 저금리 대출이
          가능합니다. 회사 인사팀 또는 운용 금융기관에 문의.
        </li>
        <li>
          <strong className="text-ink">주택담보대출 한도 재검토</strong> — DSR
          한도 안에서 가능한 추가 대출이 있는지{" "}
          <Link href="/loan" className="text-accent underline">
            대출 이자 계산기
          </Link>
          로 시뮬레이션해보세요. 보통 중간정산보다 종합 비용이 낮습니다.
        </li>
        <li>
          <strong className="text-ink">신용대출 단기 활용</strong> — 짧은
          기간이라면 신용대출이 세금·근속연수 손실보다 저렴할 수 있습니다.
        </li>
        <li>
          <strong className="text-ink">전세보증금 일부 회수</strong> — 가족
          내부적으로 자금 융통이 가능한 경우.
        </li>
      </ul>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        요약
      </h2>
      <p>
        퇴직금 중간정산은 법이 허용하는 사유에 한해 가능하지만, 받는 순간
        근속연수가 리셋되고 세금이 두 번 매겨지며 노후 자산이 줄어듭니다. 같은
        목적의 자금이라면 퇴직금 담보 대출이나 주택담보대출로 먼저 해결하는
        편이 거의 항상 더 유리합니다. 본인의 현재 퇴직금이 얼마인지부터 확인하고
        의사결정하세요 —{" "}
        <Link href="/severance" className="text-accent underline">
          퇴직금 계산기
        </Link>
        에서 평균임금과 근속연수만 입력하면 됩니다.
      </p>
    </GuideLayout>
  );
}
