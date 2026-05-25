export const metadata = {
  title: "개인정보처리방침",
  description: "K Calc 개인정보처리방침. 수집·이용·보관·제3자 제공·쿠키 사용·이용자 권리 등을 안내합니다.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 md:px-8 py-12 md:py-16">
      <header className="mb-10">
        <h1 className="font-display text-4xl md:text-5xl text-ink">
          개인정보처리방침
        </h1>
        <p className="mt-3 text-sm text-ink-muted">
          시행일자: 2026년 5월 23일 · 운영자: K Calc 운영자
        </p>
      </header>

      <div className="prose-content space-y-8 text-ink-soft leading-relaxed">
        <section>
          <h2 className="text-xl text-ink font-medium mb-3">1. 개인정보의 수집 및 이용</h2>
          <p>
            K Calc(이하 &quot;본 사이트&quot;)는 회원가입·로그인 절차 없이 누구나
            이용할 수 있는 계산기 서비스를 제공합니다. 본 사이트는
            <strong className="text-ink"> 이용자의 이름, 연락처, 주소 등 개인을
            식별할 수 있는 어떠한 개인정보도 직접 수집·저장하지 않습니다.</strong>
          </p>
          <p className="mt-3">
            이용자가 계산기에 입력하는 금액·기간 등의 값은 브라우저 내에서만
            계산에 사용되며, 본 사이트의 서버로 전송되거나 저장되지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-ink font-medium mb-3">2. 쿠키 및 자동 수집 정보</h2>
          <p>
            본 사이트는 서비스 품질 향상과 광고 게재를 위해 다음과 같은
            자동 수집 정보를 사용할 수 있습니다.
          </p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li>접속 IP 주소, 브라우저 종류, 운영체제, 방문 일시, 방문 페이지</li>
            <li>광고 및 분석 도구(Google AdSense, Google Analytics 등)가
              설정하는 쿠키 및 유사 기술</li>
          </ul>
          <p className="mt-3">
            이용자는 브라우저 설정을 통해 쿠키 저장을 거부할 수 있으며,
            이 경우 일부 서비스 기능이 제한될 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-ink font-medium mb-3">
            3. 제3자 광고 사업자(Google AdSense)
          </h2>
          <p>
            본 사이트는 Google 등 제3자 광고 사업자가 제공하는 광고를
            게재합니다. 이들 사업자는 쿠키를 사용하여 이용자의 관심사에 기반한
            맞춤 광고를 제공할 수 있습니다.
          </p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li>
              Google이 광고 쿠키를 사용함으로써, Google과 Google의 파트너는
              이용자가 본 사이트나 다른 사이트에 방문한 정보를 바탕으로
              광고를 게재합니다.
            </li>
            <li>
              이용자는{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline"
              >
                Google 광고 설정
              </a>
              을 통해 맞춤 광고를 거부할 수 있습니다.
            </li>
            <li>
              제3자 공급업체의 쿠키 사용에 관한 추가 정보는{" "}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline"
              >
                Google 광고 정책
              </a>
              에서 확인할 수 있습니다.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl text-ink font-medium mb-3">4. 분석 도구</h2>
          <p>
            본 사이트는 서비스 개선을 위해 Google Analytics 등의 웹 분석 도구를
            사용할 수 있습니다. 이들 도구는 이용자를 개인적으로 식별하지 않는
            방식으로 트래픽 통계를 수집합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-ink font-medium mb-3">5. 개인정보의 제3자 제공</h2>
          <p>
            본 사이트는 이용자의 개인정보를 직접 수집하지 않으므로 제3자에게
            제공하지 않습니다. 단, 위에 안내된 광고 및 분석 사업자가 그들의
            서비스 약관에 따라 자동 수집한 정보는 해당 사업자의 정책에 따라
            처리됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-ink font-medium mb-3">6. 이용자의 권리</h2>
          <p>
            이용자는 언제든지 브라우저 설정에서 쿠키를 삭제하거나 차단할 수
            있으며, 광고 사업자의 옵트아웃 페이지를 통해 맞춤 광고 수신을
            거부할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-ink font-medium mb-3">7. 변경 사항</h2>
          <p>
            본 방침은 법령 또는 서비스 정책 변경에 따라 개정될 수 있으며,
            개정 시 본 페이지에 공지합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-ink font-medium mb-3">8. 문의</h2>
          <p>
            개인정보 처리와 관련된 문의는{" "}
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
