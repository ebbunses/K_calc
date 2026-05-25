import Link from "next/link";
import GuideLayout from "../../components/GuideLayout";
import { getGuide } from "../../lib/guides";

const guide = getGuide("loan-interest-rate-reduction");

export const metadata = {
  title: `${guide.title} — K Calc 머니 팁`,
  description: guide.description,
  keywords: [
    "금리인하요구권",
    "대출 금리 인하",
    "신용등급 상승",
    "대출 갈아타기",
    "은행 금리 협상",
    "주담대 금리",
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
        대출 받은 후 본인의 신용 상태가 좋아졌다면, 은행에 ‘금리를 낮춰달라’고
        법적으로 요구할 수 있습니다. 이게{" "}
        <strong className="text-ink">금리인하요구권</strong>입니다. 잘 알려져
        있지 않아 신청률이 낮지만, 인정 시 평균 0.3~1.0%p의 금리 인하가
        가능합니다. 1억원 대출에서 0.5%p만 내려도 연 50만원, 30년이면 1,500만원
        절감입니다.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        ‘권리’이지만 자동으로 적용되진 않습니다
      </h2>
      <p>
        금리인하요구권은 은행법·여신금융업법에 명시된 차주의 법적 권리입니다.
        다만 본인이{" "}
        <strong className="text-ink">‘신청’해야 비로소 검토</strong>됩니다. 가만히
        있으면 은행이 먼저 알려주지 않습니다.
      </p>
      <p>
        대상은 거의 모든 신용대출과 일부 주택담보대출입니다. 예금담보·전세자금
        등 일부 정책상품은 제외됩니다.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        인정되는 사유 — 다음 중 하나라도
      </h2>
      <ul className="list-disc list-inside space-y-1.5 ml-1">
        <li>
          <strong className="text-ink">소득 증가</strong> — 이직·승진·연봉
          인상으로 세전 소득이 명확히 늘어난 경우. 보통 10% 이상 인상을 권장.
        </li>
        <li>
          <strong className="text-ink">직장 변경(긍정적)</strong> — 무직 →
          취업, 중소기업 → 대기업, 비정규직 → 정규직 등.
        </li>
        <li>
          <strong className="text-ink">신용점수 상승</strong> — NICE/KCB 점수가
          대출 시점 대비 30~50점 이상 상승한 경우.
        </li>
        <li>
          <strong className="text-ink">자산 증가</strong> — 부동산 취득, 금융
          자산 증가, 부채 감소 등 ‘재무 상태 개선’.
        </li>
        <li>
          <strong className="text-ink">전문자격 취득</strong> — 의료·법조·회계
          등 직군별 가점 자격.
        </li>
        <li>
          <strong className="text-ink">주거래 은행 지위 확대</strong> — 급여
          이체·카드 사용 실적이 늘어난 경우.
        </li>
      </ul>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        신청 방법 — 3분이면 충분
      </h2>
      <ol className="list-decimal list-inside space-y-1.5 ml-1">
        <li>
          거래 은행 앱 → ‘대출’ 또는 ‘마이메뉴’ → ‘금리인하요구권 신청’ 메뉴
          (대부분 비대면 접수)
        </li>
        <li>
          대상 대출 선택 후 변동 사유 체크박스 선택 (소득 증가/신용점수 상승 등)
        </li>
        <li>증빙 서류 업로드 (재직증명서·근로소득원천징수영수증·신용점수 캡처 등)</li>
        <li>제출 후 영업일 기준 10일 이내 회신 도착</li>
        <li>인정 시 즉시 또는 다음 달부터 인하 금리 적용</li>
      </ol>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        실제 인하 폭은 얼마나
      </h2>
      <p>금융감독원 공시 기준 최근 평균치입니다.</p>
      <div className="bg-paper border border-border-base rounded-xl p-5 my-4 not-prose">
        <table className="w-full text-sm">
          <thead className="text-ink-muted">
            <tr className="border-b border-border-soft">
              <th className="text-left py-2 font-medium">구분</th>
              <th className="text-right py-2 font-medium">수용률</th>
              <th className="text-right py-2 font-medium">평균 인하 폭</th>
            </tr>
          </thead>
          <tbody className="text-ink">
            <tr className="border-b border-border-soft/60">
              <td className="py-2">은행권 신용대출</td>
              <td className="text-right py-2">약 30~40%</td>
              <td className="text-right py-2">0.3~0.5%p</td>
            </tr>
            <tr className="border-b border-border-soft/60">
              <td className="py-2">은행권 주택담보대출</td>
              <td className="text-right py-2">약 20~30%</td>
              <td className="text-right py-2">0.1~0.3%p</td>
            </tr>
            <tr>
              <td className="py-2">2금융권</td>
              <td className="text-right py-2">약 40~60%</td>
              <td className="text-right py-2">0.5~1.0%p</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-ink-muted -mt-1">
        ※ 통계는 분기별 공시에 따라 변동합니다. 본인의 인정 여부는 은행마다
        달라질 수 있습니다.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        거절당했다면 — 대응법
      </h2>
      <p>
        은행이 거절하면 사유를 서면 또는 앱 메시지로 받습니다. 일반적인 거절
        사유와 대응 전략입니다.
      </p>
      <ul className="list-disc list-inside space-y-1.5 ml-1">
        <li>
          <strong className="text-ink">‘변동 미미’ 거절</strong> — 소득 증가가
          10% 미만 등. 시간을 두고 재신청 가능(보통 3~6개월 후).
        </li>
        <li>
          <strong className="text-ink">‘이미 우대금리 최대 적용’</strong> — 본인
          금리에 우대 항목이 모두 적용된 경우. 이때는 추가 인하 어렵습니다.
        </li>
        <li>
          <strong className="text-ink">증빙 부족</strong> — 자료 추가 제출로 재
          심사 가능.
        </li>
        <li>
          <strong className="text-ink">대출 상품 자체가 대상 외</strong> —
          정책자금·집단대출은 제외. 이 경우 다른 은행으로 갈아타기를 검토.
        </li>
      </ul>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        금리인하 요구 vs 대환대출(갈아타기)
      </h2>
      <p>
        금리인하요구권이 거절되거나 폭이 작다면{" "}
        <strong className="text-ink">대환대출(갈아타기)</strong>를 검토해야
        합니다. 2023년부터 금융위가 운영하는 ‘대출 갈아타기’ 플랫폼을 통해 앱
        하나로 다른 은행 조건과 비교가 가능합니다.
      </p>
      <p>비교 시 체크 포인트:</p>
      <ul className="list-disc list-inside space-y-1.5 ml-1">
        <li>중도상환수수료 (3년 미만이면 0.5~1.4%)</li>
        <li>인지세·근저당 설정비용</li>
        <li>총비용효과(현재 잔금 × 인하 폭 × 잔여 기간)와 부대비용 비교</li>
      </ul>
      <p>
        본인의 잔금 기준으로 ‘얼마 절약되는지’를{" "}
        <Link href="/loan" className="text-accent underline">
          대출 이자 계산기
        </Link>
        에 새 금리를 넣어 직접 비교해보세요. 보통 잔여 5년 이상이면 갈아타기
        효과가 명확합니다.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        신청 타이밍 — 이런 변동이 있을 때
      </h2>
      <ul className="list-disc list-inside space-y-1.5 ml-1">
        <li>연봉 인상 협상 직후 — 새 근로계약서·인상된 원천징수영수증 발급 가능 시</li>
        <li>이직 후 1개월 — 새 직장 재직증명서·1개월치 급여명세서</li>
        <li>승진 직후 — 인사 발령 통지서</li>
        <li>매년 1월 — 전년도 원천징수영수증으로 소득 증가 입증</li>
        <li>대출 갈아탄 직후 — 새 은행의 금리·우대 조건 재확인</li>
      </ul>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">
        요약
      </h2>
      <p>
        금리인하요구권은 법으로 보장된 권리지만, 본인이 ‘신청’해야 발동합니다.
        소득 증가·신용점수 상승·이직 등의 사유로 1년에 1~2번 신청하는 습관을
        들이면, 30년 만기 주담대 기준 수백만 원~수천만 원을 절약할 수 있습니다.
        거절돼도 손해는 없으니 부담 없이 도전해보세요.
      </p>
    </GuideLayout>
  );
}
