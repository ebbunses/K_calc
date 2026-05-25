export const metadata = {
  title: "이용약관",
  description: "K Calc 이용약관. 서비스 이용 조건, 계산 결과의 한계, 면책 사항을 안내합니다.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 md:px-8 py-12 md:py-16">
      <header className="mb-10">
        <h1 className="font-display text-4xl md:text-5xl text-ink">이용약관</h1>
        <p className="mt-3 text-sm text-ink-muted">
          시행일자: 2026년 5월 23일 · 운영자: K Calc 운영자
        </p>
      </header>

      <div className="space-y-8 text-ink-soft leading-relaxed">
        <section>
          <h2 className="text-xl text-ink font-medium mb-3">제1조 (목적)</h2>
          <p>
            본 약관은 K Calc(이하 &quot;본 사이트&quot;)가 제공하는 모든
            계산기 서비스의 이용 조건과 절차, 이용자와 운영자의 권리·의무
            및 책임사항을 정함을 목적으로 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-ink font-medium mb-3">제2조 (서비스의 내용)</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>연봉 실수령액, 퇴직금, 대출 이자, 적금 만기 등 한국 세법 및 금융 상품과 관련된 계산 도구 제공</li>
            <li>계산 결과의 비교·해설 및 관련 정보 제공</li>
            <li>그 외 운영자가 정하는 부가 서비스</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl text-ink font-medium mb-3">제3조 (이용 조건)</h2>
          <p>
            본 사이트는 별도의 회원가입 없이 누구나 무료로 이용할 수 있습니다.
            다만, 이용자는 다음 행위를 해서는 안 됩니다.
          </p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li>본 사이트의 정상적인 운영을 방해하는 행위</li>
            <li>자동화된 수단(크롤러, 봇 등)을 이용한 비정상적 접근</li>
            <li>본 사이트의 콘텐츠를 무단으로 복제·배포·상업적 이용하는 행위</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl text-ink font-medium mb-3">제4조 (계산 결과의 한계)</h2>
          <p>
            본 사이트의 모든 계산 결과는{" "}
            <strong className="text-ink">참고용</strong>으로만 제공되며 다음과
            같은 한계를 가집니다.
          </p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li>
              한국 세법, 4대 보험 요율, 근로기준법 등 공시된 기준을 토대로
              하지만 개인의 구체적 상황(부양가족 구성, 비과세 항목, 회사
              내부 규정 등)을 모두 반영하지 못할 수 있습니다.
            </li>
            <li>
              은행·금융기관의 실제 대출 한도, 우대 금리, 보증료, 인지세,
              중도상환수수료 등은 반영되지 않습니다.
            </li>
            <li>
              세법 개정·요율 변경 등이 즉시 반영되지 않을 수 있습니다.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl text-ink font-medium mb-3">제5조 (면책)</h2>
          <p>
            운영자는 본 사이트의 계산 결과를 신뢰하여 발생한 어떠한 직·간접
            손해에 대해서도 책임을 지지 않습니다. 이용자는 중요한 의사결정
            전에 반드시 국세청, 국민연금공단, 건강보험공단, 거래 금융기관 등
            공식 기관에 정확한 금액을 문의해야 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-ink font-medium mb-3">제6조 (광고)</h2>
          <p>
            본 사이트는 운영 비용 충당을 위해 제3자(Google AdSense 등)
            광고를 게재할 수 있습니다. 광고의 내용은 광고 사업자에 의해
            결정되며, 운영자는 광고 내용에 대한 책임을 지지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-ink font-medium mb-3">제7조 (지적 재산권)</h2>
          <p>
            본 사이트의 디자인, 텍스트, 로고, 계산 로직 등 모든 콘텐츠의
            저작권은 운영자에게 귀속됩니다. 출처 표기 없는 무단 전재·복제·
            배포를 금지합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-ink font-medium mb-3">제8조 (약관의 변경)</h2>
          <p>
            본 약관은 관련 법령 및 서비스 변경에 따라 개정될 수 있으며,
            개정 시 본 페이지에 공지합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-ink font-medium mb-3">제9조 (문의)</h2>
          <p>
            본 약관에 관한 문의는{" "}
            <a href="/contact" className="text-accent underline">
              문의 페이지
            </a>
            를 통해 접수해 주시기 바랍니다.
          </p>
        </section>
      </div>
    </article>
  );
}
