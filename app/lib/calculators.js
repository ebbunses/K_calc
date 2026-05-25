import { Wallet, Briefcase, Landmark, PiggyBank } from "lucide-react";

export const calculators = [
  {
    slug: "salary",
    title: "연봉 실수령액",
    subtitle: "Net Salary",
    description:
      "세전 연봉에서 4대 보험과 소득세를 차감해 매달 실제로 통장에 들어오는 금액을 계산합니다.",
    href: "/salary",
    Icon: Wallet,
  },
  {
    slug: "severance",
    title: "퇴직금",
    subtitle: "Severance Pay",
    description:
      "평균 월급여와 재직 기간으로 근로기준법 기준의 법정 퇴직금을 산출합니다.",
    href: "/severance",
    Icon: Briefcase,
  },
  {
    slug: "loan",
    title: "대출 이자",
    subtitle: "Loan Interest",
    description:
      "원리금균등 방식으로 매월 상환액과 총 이자, 누적 상환액을 한눈에 보여드립니다.",
    href: "/loan",
    Icon: Landmark,
  },
  {
    slug: "savings",
    title: "적금 만기",
    subtitle: "Savings Maturity",
    description:
      "월 납입액과 이율, 기간을 입력하면 만기에 받을 원금과 세후 이자를 계산합니다.",
    href: "/savings",
    Icon: PiggyBank,
  },
];
