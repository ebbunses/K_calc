import Link from "next/link";
import GuideLayout from "../../components/GuideLayout";
import { getGuide } from "../../lib/guides";

const guide = getGuide("severance-irp-vs-lumpsum");

export const metadata = {
  title: `${guide.title} — K Calc 머니 팁`,
  description: guide.description,
  keywords: [
    "퇴직금 IRP",
    "IRP 일시금 차이",
    "퇴직소득세 절세",
    "퇴직금 세금",
    "퇴직연금 이전",
    "퇴직금 절세",
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
        퇴사가 확정되면 회사는 보통 두 가지 옵션을 묻습니다.{" "}
        <strong className="text-ink">
          “퇴직금을 통장으로 일시금 수령하시겠어요, 아니면 IRP 계좌로
          이체하시겠어요?”
        </strong>{" "}
        같은 금액이지만 어떤 선택을 하느냐에 따라 손에 쥐는 돈이 수십만 원,
        많게는 수백만 원까지 차이가 납니다. 이번 글에서는 두 옵션의 세금 구조
        차이와 본인에게 무엇이 더 유리한지 정리합니다.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        ① 일시금 수령 — 즉시 과세, 즉시 사용
      </h2>
      <p>
        일시금으로 받으면 회사가 퇴직소득세를 원천징수한 뒤 차액을 통장에 바로
        입금합니다. 받자마자 자유롭게 사용할 수 있다는 장점이 있지만, 그 시점에
        세금이 한꺼번에 부과됩니다.
      </p>
      <p>
        퇴직소득세는 우리가 흔히 아는 종합소득세와 별도로 계산됩니다.
        근속연수가 길수록 공제 폭이 커지는 구조이지만, 그래도 1억 원 가까운
        퇴직금이라면 수백만 원 단위의 세금이 빠집니다. 자세한 계산은{" "}
        <Link href="/severance" className="text-accent underline">
          퇴직금 계산기
        </Link>
        에서 직접 확인할 수 있습니다.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        ② IRP 이전 — 세금 ‘이연’ + 30% 감면
      </h2>
      <p>
        IRP(개인형 퇴직연금)는 본인 명의로 만드는 노후 대비 계좌입니다. 퇴직금을
        이 계좌로 옮기면 두 가지 혜택이 동시에 발생합니다.
      </p>
      <ul className="list-disc list-inside space-y-1.5 ml-1">
        <li>
          <strong className="text-ink">세금 이연</strong> — 인출 시점까지
          퇴직소득세 부과 시점이 미뤄집니다. 그 동안 운용해서 수익을 낼 수
          있습니다.
        </li>
        <li>
          <strong className="text-ink">연금 수령 시 30% 감면</strong> — 만 55세
          이후 연금 형태로 10년 이상 나눠서 받으면 원래 퇴직소득세의 약 30%가
          감면됩니다. 일시 인출도 가능하지만 이 혜택은 사라집니다.
        </li>
        <li>
          <strong className="text-ink">운용 수익 비과세 효과</strong> — 계좌
          내에서 발생한 ETF·예금 이자에 대해서도 인출 전까지 과세되지 않습니다.
        </li>
      </ul>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        실제 차이는 얼마나 날까
      </h2>
      <p>
        대략적인 감을 잡기 위한 예시입니다. 퇴직금 5,000만원, 근속 10년 가정.
      </p>
      <div className="bg-paper border border-border-base rounded-xl p-5 my-4 not-prose">
        <table className="w-full text-sm">
          <thead className="text-ink-muted">
            <tr className="border-b border-border-soft">
              <th className="text-left py-2 font-medium">구분</th>
              <th className="text-right py-2 font-medium">일시금</th>
              <th className="text-right py-2 font-medium">IRP 이전 후 연금</th>
            </tr>
          </thead>
          <tbody className="text-ink">
            <tr className="border-b border-border-soft/60">
              <td className="py-2">퇴직소득세(개략)</td>
              <td className="text-right py-2">약 165만원</td>
              <td className="text-right py-2">약 115만원</td>
            </tr>
            <tr className="border-b border-border-soft/60">
              <td className="py-2">감면 효과</td>
              <td className="text-right py-2 text-ink-muted">−</td>
              <td className="text-right py-2 text-accent">−약 50만원</td>
            </tr>
            <tr>
              <td className="py-2">즉시 수령액</td>
              <td className="text-right py-2">약 4,835만원</td>
              <td className="text-right py-2">전액 IRP 입금</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-ink-muted -mt-1">
        ※ 본 표는 이해를 돕기 위한 단순 예시입니다. 실제 금액은 근속연수,
        평균임금, 환산급여공제, 세액공제 등에 따라 달라집니다. 정확한 수치는
        퇴직금 계산기에서 확인하세요.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        IRP가 유리한 사람
      </h2>
      <ul className="list-disc list-inside space-y-1.5 ml-1">
        <li>퇴직 후 5~15년 내 다시 일할 계획이 없는 경우</li>
        <li>이미 안정적인 생활비 흐름이 있고, 퇴직금을 노후 자금으로 두고 싶은 경우</li>
        <li>퇴직금이 5,000만원 이상으로 절세 효과가 큰 경우</li>
        <li>IRP 내에서 ETF·채권 등 추가 운용을 고려하는 경우</li>
      </ul>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        일시금이 더 나은 경우
      </h2>
      <p>모든 경우에 IRP가 유리한 것은 아닙니다. 다음 상황에서는 일시금이 합리적인 선택일 수 있습니다.</p>
      <ul className="list-disc list-inside space-y-1.5 ml-1">
        <li>
          <strong className="text-ink">긴급 자금이 필요한 경우</strong> — 주택
          매수 잔금, 대출 상환, 의료비 등 곧 큰 지출이 예정되어 있다면 IRP에
          묶는 비용이 절세 혜택보다 클 수 있습니다.
        </li>
        <li>
          <strong className="text-ink">근속연수가 짧은 경우</strong> — 3년 이하
          근속이라면 이미 퇴직소득세 자체가 적어 IRP 감면의 절대 금액이 미미할
          수 있습니다.
        </li>
        <li>
          <strong className="text-ink">사업·창업 준비</strong> — 종잣돈이 즉시
          필요하고, 본인이 직접 운용했을 때 IRP의 세금 절감 효과 이상의 수익을
          기대할 수 있는 경우.
        </li>
      </ul>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        실무 절차 — 이렇게 진행됩니다
      </h2>
      <ol className="list-decimal list-inside space-y-1.5 ml-1">
        <li>은행·증권사에서 본인 명의 IRP 계좌 개설 (수수료·운용 옵션 비교 권장)</li>
        <li>퇴사 전 회사 인사팀에 IRP 계좌번호 제출 (퇴직소득 명세서 함께 수령)</li>
        <li>퇴직 후 영업일 기준 약 14일 내 IRP 계좌로 자동 입금</li>
        <li>IRP 계좌 내에서 예금·ETF·채권 등 운용 상품 선택</li>
        <li>만 55세 이후 연금 또는 일시 인출 결정</li>
      </ol>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        주의할 점
      </h2>
      <ul className="list-disc list-inside space-y-1.5 ml-1">
        <li>IRP는 만 55세 이전 중도 인출 시 감면 혜택이 사라지고 ‘기타소득세 16.5%’ 등 추가 세금이 부과됩니다.</li>
        <li>IRP 운용 수수료(연 0.2~0.5%)는 금융기관마다 다릅니다. 비교 후 개설하세요.</li>
        <li>IRP는 예금자보호 5,000만원 한도 적용 — 한 금융사에 집중하지 말고 분산하는 것이 안전합니다.</li>
        <li>퇴직 후 60일 이내에 의사를 명확히 하지 않으면 일부 회사는 자동으로 일시금 처리하기도 합니다. 퇴사 직전 인사팀에 반드시 확인하세요.</li>
      </ul>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        요약
      </h2>
      <p>
        퇴직금 규모가 크고, 당장 사용할 일이 없고, 노후 자산으로 둘 계획이라면{" "}
        <strong className="text-ink">IRP 이전이 거의 항상 유리</strong>합니다.
        반대로 단기 사용처가 명확하거나 근속연수가 짧다면 일시금 수령도 합리적
        선택입니다. 본인의 퇴직금이 어느 정도인지부터 확인하는 것이
        시작입니다 —{" "}
        <Link href="/severance" className="text-accent underline">
          퇴직금 계산기
        </Link>
        에서 세후 실수령액과 IRP 절세 효과를 같이 가늠해보세요.
      </p>
    </GuideLayout>
  );
}
