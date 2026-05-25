// 머니 팁(블로그) 메타데이터 — 실제 본문은 app/guides/<slug>/page.js 에 있음
// 새 글을 추가할 때는 여기에 메타만 등록하면 목록/관련 글 카드에 자동 노출됨.
// 카테고리·글 순서는 계산기 메뉴 순서(연봉 → 퇴직금 → 대출 → 적금)와 동일.
//
// published: false 인 글은 메뉴/목록에 노출되지 않습니다. URL 직접 접근은 가능.
// AdSense 승인 후 published를 true로 바꾸면 자동 노출됩니다.

export const guideCategories = {
  salary: { label: "연봉", href: "/salary" },
  severance: { label: "퇴직금", href: "/severance" },
  loan: { label: "대출", href: "/loan" },
  savings: { label: "적금·예금", href: "/savings" },
};

export const guides = [
  {
    slug: "salary-nontax-items",
    category: "salary",
    title: "비과세 항목 최대화 — 식대·자가운전·출산보육수당",
    description:
      "한국 세법이 허용하는 대표적 비과세 항목 정리. 회사와 협의해서 적용 가능한 항목과 적용 한도, 절세 효과까지.",
    readMinutes: 5,
    publishedAt: "2025-10-12",
    lastReviewed: "2026-05",
    published: true,
  },
  {
    slug: "salary-negotiation-checkpoints",
    category: "salary",
    title: "연봉 협상에서 손해 보지 않는 5가지 체크포인트",
    description:
      "연봉 협상 전후로 반드시 확인해야 할 5가지. 세전·세후 차이, 식대 포함 여부, 성과급 구조까지.",
    readMinutes: 6,
    publishedAt: "2026-05-21",
    lastReviewed: "2026-05",
    published: false,
  },
  {
    slug: "severance-irp-vs-lumpsum",
    category: "severance",
    title: "퇴직금, IRP로 받을까 일시금으로 받을까",
    description:
      "퇴직금 IRP 이전과 일시금 수령의 세금 차이를 한 번에. 절세 효과가 얼마나 큰지, 누가 일시금이 유리한지까지.",
    readMinutes: 6,
    publishedAt: "2025-12-03",
    lastReviewed: "2026-05",
    published: true,
  },
  {
    slug: "severance-interim-settlement",
    category: "severance",
    title: "퇴직금 중간정산, 받으면 손해인 이유",
    description:
      "중간정산 가능 사유, 신청 절차, 그리고 받으면 손해가 발생하는 세금·연금 구조까지 정리했습니다.",
    readMinutes: 5,
    publishedAt: "2026-05-20",
    lastReviewed: "2026-05",
    published: false,
  },
  {
    slug: "loan-interest-rate-reduction",
    category: "loan",
    title: "금리인하요구권 — 누가, 언제, 어떻게 신청하나",
    description:
      "법적으로 보장된 금리인하요구권. 인정되는 사유, 거절 시 대응, 실제 인하 폭까지 사례 중심으로 설명합니다.",
    readMinutes: 5,
    publishedAt: "2026-02-18",
    lastReviewed: "2026-05",
    published: true,
  },
  {
    slug: "loan-dsr-explained",
    category: "loan",
    title: "DSR 40% 시대, 내 대출 한도 직접 계산하는 법",
    description:
      "DSR·DTI·LTV의 차이부터 본인의 한도를 추정하는 방법, 한도를 늘리는 현실적인 전략까지.",
    readMinutes: 7,
    publishedAt: "2026-05-22",
    lastReviewed: "2026-05",
    published: false,
  },
  {
    slug: "savings-isa-guide",
    category: "savings",
    title: "ISA 계좌 — 일반·서민·청년형 무엇이 유리할까",
    description:
      "ISA의 세 가지 유형 비교. 비과세 한도, 의무 기간, 가입 자격을 정리하고 본인 상황에 맞는 선택을 안내합니다.",
    readMinutes: 6,
    publishedAt: "2026-04-09",
    lastReviewed: "2026-05",
    published: true,
  },
  {
    slug: "savings-youth-account",
    category: "savings",
    title: "청년도약계좌 자격과 5년 수익 시뮬레이션",
    description:
      "월 70만원 납입 시 5년 후 받는 실제 금액. 정부 기여금·이자·비과세 효과를 단계별로 풀어 설명합니다.",
    readMinutes: 6,
    publishedAt: "2026-05-23",
    lastReviewed: "2026-05",
    published: false,
  },
];

// 외부 노출용은 published === true 만 반환합니다.
// 모든 글에 접근할 때(예: getGuide)는 전체 배열을 그대로 사용.

export function publishedGuides() {
  return guides.filter((g) => g.published);
}

export function guidesByCategory(category) {
  return publishedGuides().filter((g) => g.category === category);
}

export function getGuide(slug) {
  return guides.find((g) => g.slug === slug);
}
