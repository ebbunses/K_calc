import { Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const ADSENSE_CLIENT = "ca-pub-1603575032759465";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://kcalc.kr"),
  title: {
    default: "K Calc — 한국형 종합 계산기",
    template: "%s | K Calc",
  },
  description:
    "연봉 실수령액, 퇴직금, 대출 이자, 적금 만기까지. 한국 세법과 4대 보험 기준에 맞춰 정확하게 계산해드리는 종합 계산기 K Calc.",
  keywords: [
    "연봉계산기",
    "실수령액 계산기",
    "퇴직금 계산기",
    "대출이자 계산기",
    "적금 계산기",
    "K Calc",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://kcalc.kr",
    siteName: "K Calc",
    title: "K Calc — 한국형 종합 계산기",
    description:
      "연봉 실수령액·퇴직금·대출이자·적금 만기를 한 번에. 2025 기준으로 정확하게 계산.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ko"
      className={`${instrumentSerif.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css"
        />
        <meta name="google-adsense-account" content={ADSENSE_CLIENT} />
        <meta
          name="naver-site-verification"
          content="a01599783dc687556301e61e041774d6ff864232"
        />
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
