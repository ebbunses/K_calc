"use client";

import { useState } from "react";

// Formspree endpoint를 .env.local에 NEXT_PUBLIC_FORMSPREE_ENDPOINT로 설정하세요.
// 미설정 시 폼은 disabled 상태로 표시되고, 안내 메시지를 보여줍니다.
// Formspree 가입: https://formspree.io (무료 50건/월)
const ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!ENDPOINT) {
      setStatus("error");
      setErrMsg(
        "문의폼이 아직 활성화되지 않았습니다. 운영자에게 직접 연락이 필요한 경우 잠시 후 다시 시도해 주세요."
      );
      return;
    }

    setStatus("sending");
    setErrMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        const j = await res.json().catch(() => ({}));
        setStatus("error");
        setErrMsg(j?.error || "전송에 실패했습니다. 잠시 후 다시 시도해 주세요.");
      }
    } catch {
      setStatus("error");
      setErrMsg("네트워크 오류가 발생했습니다.");
    }
  };

  if (status === "sent") {
    return (
      <div className="bg-accent-light border border-accent-soft rounded-2xl p-8 text-center">
        <p className="text-ink font-medium">메시지가 전송되었습니다.</p>
        <p className="mt-2 text-sm text-ink-soft">
          빠른 시일 내에 확인하겠습니다. 감사합니다.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm text-accent underline"
        >
          새 문의 작성
        </button>
      </div>
    );
  }

  // 환경변수 미설정 시: 폼을 숨기고 안내만 표시
  if (!ENDPOINT) {
    return (
      <div className="bg-paper border border-border-base rounded-2xl p-8 md:p-10 text-center">
        <div className="w-12 h-12 mx-auto rounded-full bg-accent-soft flex items-center justify-center mb-4">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
            <path d="M12 8v4l3 2" strokeLinecap="round" />
            <circle cx="12" cy="12" r="9" />
          </svg>
        </div>
        <p className="text-ink font-medium text-lg">문의폼 준비 중입니다</p>
        <p className="mt-3 text-sm text-ink-soft leading-relaxed max-w-md mx-auto">
          현재 문의 접수 시스템을 준비하고 있습니다. 곧 활성화될 예정이니
          잠시만 기다려 주세요. 급한 문의는 추후 안내될 연락처로 부탁드립니다.
        </p>
        {process.env.NODE_ENV === "development" && (
          <p className="mt-6 pt-5 border-t border-border-soft text-[11px] text-ink-muted leading-relaxed">
            <span className="text-ink-soft">[DEV ONLY]</span> Formspree 가입 후{" "}
            <code className="px-1.5 py-0.5 bg-border-soft rounded">
              .env.local
            </code>
            에{" "}
            <code className="px-1.5 py-0.5 bg-border-soft rounded">
              NEXT_PUBLIC_FORMSPREE_ENDPOINT=...
            </code>
            추가
          </p>
        )}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-paper border border-border-base rounded-2xl p-6 md:p-7 space-y-5"
    >
      <div>
        <label htmlFor="name" className="block text-sm text-ink-soft mb-2 font-medium">
          이름 또는 닉네임
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={50}
          className="w-full bg-paper border border-border-base rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-soft transition"
          placeholder="예: 홍길동"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-ink-soft mb-2 font-medium">
          답장받을 이메일 <span className="text-ink-muted text-xs">(선택)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          maxLength={120}
          className="w-full bg-paper border border-border-base rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-soft transition"
          placeholder="답장이 필요하면 입력해 주세요"
        />
      </div>

      <div>
        <label htmlFor="topic" className="block text-sm text-ink-soft mb-2 font-medium">
          문의 분류
        </label>
        <select
          id="topic"
          name="topic"
          className="w-full bg-paper border border-border-base rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-soft transition"
          defaultValue="bug"
        >
          <option value="bug">오류 신고</option>
          <option value="suggestion">개선 의견</option>
          <option value="new-calc">새 계산기 요청</option>
          <option value="partnership">제휴·광고 문의</option>
          <option value="etc">기타</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-ink-soft mb-2 font-medium">
          내용
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={7}
          className="w-full bg-paper border border-border-base rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-soft transition resize-y"
          placeholder="자세히 알려주시면 더 빠르게 도울 수 있습니다."
        />
      </div>

      {/* honeypot - 봇 방지용 숨겨진 필드 */}
      <input
        type="text"
        name="_gotcha"
        className="hidden"
        tabIndex="-1"
        autoComplete="off"
      />

      {status === "error" && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          {errMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-accent text-white font-medium py-3.5 rounded-xl hover:bg-accent-bright transition disabled:opacity-60"
      >
        {status === "sending" ? "전송 중..." : "보내기"}
      </button>
    </form>
  );
}
