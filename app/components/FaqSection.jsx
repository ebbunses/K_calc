// 펼치기 가능한 FAQ 섹션 + 구글 리치 결과용 FAQ JSON-LD
// items: [{ q: '질문', a: '답변(JSX 또는 문자열)' }, ...]
// jsonLdItems: JSON-LD용 평문 답변 배열 (HTML/JSX 제외)
// 둘이 분리된 이유: 본문에는 링크·강조 등을 쓰고 싶지만,
// JSON-LD는 순수 텍스트여야 하기 때문.

export default function FaqSection({ title = "자주 묻는 질문", items, jsonLdItems }) {
  if (!items || items.length === 0) return null;

  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (jsonLdItems || items).map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: typeof it.a === "string" ? it.a : it.text || "",
      },
    })),
  };

  return (
    <section className="max-w-3xl">
      <h2 className="font-display text-3xl md:text-4xl text-ink mb-6">
        {title}
      </h2>
      <div className="space-y-3">
        {items.map((it, i) => (
          <details
            key={i}
            className="group bg-paper border border-border-base rounded-xl overflow-hidden"
          >
            <summary className="cursor-pointer list-none flex items-start justify-between gap-4 px-5 py-4 hover:bg-border-soft/30 transition">
              <span className="text-ink font-medium pr-2">{it.q}</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className="flex-none mt-1 text-ink-muted group-open:rotate-180 transition-transform"
              >
                <path
                  d="M4.5 6.75l4.5 4.5 4.5-4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </summary>
            <div className="px-5 pb-5 -mt-1 text-ink-soft leading-relaxed text-[15px] space-y-3">
              {it.a}
            </div>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
    </section>
  );
}
