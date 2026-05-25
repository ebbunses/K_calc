import ContactForm from "./ContactForm";

export const metadata = {
  title: "문의",
  description: "K Calc 운영자에게 의견, 오류 신고, 추가 계산기 요청을 보내실 수 있습니다.",
};

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-2xl px-5 md:px-8 py-12 md:py-16">
      <header className="mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-accent-bright mb-3">
          Contact
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-ink">
          문의하기
        </h1>
        <p className="mt-4 text-ink-soft leading-relaxed">
          K Calc를 이용하면서 발견한 오류, 개선 의견, 추가하고 싶은 계산기가
          있다면 아래 폼으로 알려주세요. 모든 메시지는 운영자가 직접
          확인합니다.
        </p>
      </header>

      <ContactForm />

      <section className="mt-12 pt-8 border-t border-border-base text-sm text-ink-muted leading-relaxed">
        <h2 className="text-ink font-medium mb-2">자주 묻는 질문</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <span className="text-ink-soft">계산 결과가 회사에서 받은 금액과 다른데요?</span>
            <br />
            비과세 수당, 회사 내부 규정, 부양가족 등록 여부에 따라 차이가 발생할
            수 있습니다. 정확한 금액은 회사 또는 국세청에 확인해 주세요.
          </li>
          <li>
            <span className="text-ink-soft">제가 입력한 값이 저장되거나 전송되나요?</span>
            <br />
            아니요. 모든 계산은 브라우저 안에서만 일어나며 서버로 전송되지
            않습니다.
          </li>
          <li>
            <span className="text-ink-soft">광고 협업·제휴 문의도 이곳으로 보내면 되나요?</span>
            <br />
            네. 메시지 내용에 &quot;제휴&quot;라고 적어 보내주시면 우선 확인합니다.
          </li>
        </ul>
      </section>
    </article>
  );
}
