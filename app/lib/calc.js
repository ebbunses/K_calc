// 한국 세법·4대 보험 기준 계산 모듈

// ── 연봉 실수령액 ──────────────────────────────────────────────

const PENSION_MONTHLY_CAP = 5_900_000; // 국민연금 기준소득월액 상한
const PERSONAL_DEDUCTION = 1_500_000;  // 1인당 인적공제
const MEAL_NONTAX_MONTHLY = 200_000;   // 비과세 식대 월 한도 (2023~)

export function earnedIncomeDeduction(salary) {
  if (salary <= 5_000_000) return salary * 0.7;
  if (salary <= 15_000_000) return 3_500_000 + (salary - 5_000_000) * 0.4;
  if (salary <= 45_000_000) return 7_500_000 + (salary - 15_000_000) * 0.15;
  if (salary <= 100_000_000) return 12_000_000 + (salary - 45_000_000) * 0.05;
  return 14_750_000 + (salary - 100_000_000) * 0.02;
}

export function progressiveIncomeTax(taxBase) {
  if (taxBase <= 0) return 0;
  if (taxBase <= 14_000_000) return taxBase * 0.06;
  if (taxBase <= 50_000_000) return 840_000 + (taxBase - 14_000_000) * 0.15;
  if (taxBase <= 88_000_000) return 6_240_000 + (taxBase - 50_000_000) * 0.24;
  if (taxBase <= 150_000_000) return 15_360_000 + (taxBase - 88_000_000) * 0.35;
  if (taxBase <= 300_000_000) return 37_060_000 + (taxBase - 150_000_000) * 0.38;
  if (taxBase <= 500_000_000) return 94_060_000 + (taxBase - 300_000_000) * 0.40;
  if (taxBase <= 1_000_000_000) return 174_060_000 + (taxBase - 500_000_000) * 0.42;
  return 384_060_000 + (taxBase - 1_000_000_000) * 0.45;
}

// 자녀 세액공제 (현행 기준, 8세 이상 자녀에 적용)
function childTaxCredit(childCount) {
  const n = Math.max(0, childCount | 0);
  if (n === 0) return 0;
  if (n === 1) return 250_000;
  if (n === 2) return 550_000;
  return 550_000 + (n - 2) * 400_000;
}

// options: { dependents, children, mealNontax }
//   dependents: 본인 제외 부양가족 수 (배우자 포함)
//   children:   8세 이상 자녀 수 (세액공제용)
//   mealNontax: 비과세 식대 적용 여부 (월 20만 원)
export function calcNetSalary(annualSalary, options = {}) {
  const { dependents = 0, children = 0, mealNontax = false } = options;

  const annual = Math.max(0, annualSalary || 0);
  const monthly = annual / 12;

  const mealAnnual = mealNontax ? MEAL_NONTAX_MONTHLY * 12 : 0;
  const taxableAnnual = Math.max(0, annual - mealAnnual);
  const taxableMonthly = taxableAnnual / 12;

  const pensionBase = Math.min(taxableMonthly, PENSION_MONTHLY_CAP);
  const pension = pensionBase * 0.045;
  const health = taxableMonthly * 0.03545;
  const longTermCare = health * 0.1295;
  const employment = taxableMonthly * 0.009;
  const insuranceMonthly = pension + health + longTermCare + employment;

  const personCount = 1 + Math.max(0, dependents | 0);
  const personalDeduction = PERSONAL_DEDUCTION * personCount;

  const earnedDeduction = earnedIncomeDeduction(taxableAnnual);
  const taxBase = Math.max(
    0,
    taxableAnnual - earnedDeduction - personalDeduction
  );
  const grossTax = progressiveIncomeTax(taxBase);
  const earnedCredit = grossTax * 0.15;
  const childCredit = childTaxCredit(children);
  const incomeTaxAnnual = Math.max(0, grossTax - earnedCredit - childCredit);
  const localTaxAnnual = incomeTaxAnnual * 0.1;
  const monthlyIncomeTax = incomeTaxAnnual / 12;
  const monthlyLocalTax = localTaxAnnual / 12;

  const totalDeductionsMonthly =
    insuranceMonthly + monthlyIncomeTax + monthlyLocalTax;
  const netMonthly = monthly - totalDeductionsMonthly;

  return {
    annualSalary: annual,
    monthly,
    mealMonthly: mealNontax ? MEAL_NONTAX_MONTHLY : 0,
    taxableAnnual,
    taxableMonthly,
    dependents: Math.max(0, dependents | 0),
    children: Math.max(0, children | 0),
    pension,
    health,
    longTermCare,
    employment,
    insuranceMonthly,
    earnedDeduction,
    personalDeduction,
    personCount,
    taxBase,
    grossTax,
    earnedCredit,
    childCredit,
    incomeTaxAnnual,
    localTaxAnnual,
    monthlyIncomeTax,
    monthlyLocalTax,
    totalDeductionsMonthly,
    netMonthly,
    netAnnual: netMonthly * 12,
    deductionRate: monthly > 0 ? totalDeductionsMonthly / monthly : 0,
  };
}

// ── 대출 이자 ─────────────────────────────────────────────────

function emptyLoanResult(method, methodLabel, P, n, annualRatePct) {
  return {
    method,
    methodLabel,
    principal: P,
    months: n,
    annualRatePct: annualRatePct || 0,
    firstPayment: 0,
    lastPayment: 0,
    avgPayment: 0,
    totalPayment: 0,
    totalInterest: 0,
    schedule: [],
  };
}

export function calcLoanEqualPayment(principal, annualRatePct, years) {
  const P = Math.max(0, principal || 0);
  const n = Math.max(0, Math.round((years || 0) * 12));
  const r = (annualRatePct || 0) / 100 / 12;

  if (P === 0 || n === 0) {
    return emptyLoanResult("equal-payment", "원리금균등", P, n, annualRatePct);
  }

  const monthly =
    r === 0
      ? P / n
      : (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

  let balance = P;
  const schedule = [];
  for (let m = 1; m <= n; m++) {
    const interest = balance * r;
    let principalPart = monthly - interest;
    if (m === n) principalPart = balance;
    balance = Math.max(0, balance - principalPart);
    schedule.push({
      month: m,
      payment: principalPart + interest,
      principal: principalPart,
      interest,
      balance,
    });
  }

  const totalPayment = schedule.reduce((s, x) => s + x.payment, 0);
  const totalInterest = totalPayment - P;
  return {
    method: "equal-payment",
    methodLabel: "원리금균등",
    principal: P,
    months: n,
    annualRatePct: annualRatePct || 0,
    firstPayment: schedule[0].payment,
    lastPayment: schedule[n - 1].payment,
    avgPayment: totalPayment / n,
    totalPayment,
    totalInterest,
    schedule,
  };
}

export function calcLoanEqualPrincipal(principal, annualRatePct, years) {
  const P = Math.max(0, principal || 0);
  const n = Math.max(0, Math.round((years || 0) * 12));
  const r = (annualRatePct || 0) / 100 / 12;

  if (P === 0 || n === 0) {
    return emptyLoanResult("equal-principal", "원금균등", P, n, annualRatePct);
  }

  const principalPerMonth = P / n;
  let balance = P;
  const schedule = [];
  for (let m = 1; m <= n; m++) {
    const interest = balance * r;
    let principalPart = principalPerMonth;
    if (m === n) principalPart = balance;
    balance = Math.max(0, balance - principalPart);
    schedule.push({
      month: m,
      payment: principalPart + interest,
      principal: principalPart,
      interest,
      balance,
    });
  }

  const totalPayment = schedule.reduce((s, x) => s + x.payment, 0);
  const totalInterest = totalPayment - P;
  return {
    method: "equal-principal",
    methodLabel: "원금균등",
    principal: P,
    months: n,
    annualRatePct: annualRatePct || 0,
    firstPayment: schedule[0].payment,
    lastPayment: schedule[n - 1].payment,
    avgPayment: totalPayment / n,
    totalPayment,
    totalInterest,
    schedule,
  };
}

export function calcLoanBullet(principal, annualRatePct, years) {
  const P = Math.max(0, principal || 0);
  const n = Math.max(0, Math.round((years || 0) * 12));
  const r = (annualRatePct || 0) / 100 / 12;

  if (P === 0 || n === 0) {
    return emptyLoanResult("bullet", "만기일시", P, n, annualRatePct);
  }

  const monthlyInterest = P * r;
  const schedule = [];
  for (let m = 1; m <= n; m++) {
    const isLast = m === n;
    const principalPart = isLast ? P : 0;
    schedule.push({
      month: m,
      payment: monthlyInterest + principalPart,
      principal: principalPart,
      interest: monthlyInterest,
      balance: isLast ? 0 : P,
    });
  }

  const totalInterest = monthlyInterest * n;
  const totalPayment = P + totalInterest;
  return {
    method: "bullet",
    methodLabel: "만기일시",
    principal: P,
    months: n,
    annualRatePct: annualRatePct || 0,
    firstPayment: monthlyInterest,
    lastPayment: monthlyInterest + P,
    avgPayment: totalPayment / n,
    totalPayment,
    totalInterest,
    schedule,
  };
}

export function calcLoanAll(principal, annualRatePct, years) {
  return {
    equalPayment: calcLoanEqualPayment(principal, annualRatePct, years),
    equalPrincipal: calcLoanEqualPrincipal(principal, annualRatePct, years),
    bullet: calcLoanBullet(principal, annualRatePct, years),
  };
}

export function calcLoan(principal, annualRatePct, years) {
  const r = calcLoanEqualPayment(principal, annualRatePct, years);
  return {
    principal: r.principal,
    months: r.months,
    monthlyPayment: r.firstPayment,
    totalPayment: r.totalPayment,
    totalInterest: r.totalInterest,
    annualRatePct: r.annualRatePct,
  };
}

// ── 적금/예금 만기 계산 ────────────────────────────────────────

const TAX_RATE_GENERAL = 0.154;

function savingsTaxRate(taxType) {
  return taxType === "tax-free" ? 0 : TAX_RATE_GENERAL;
}

function calcInstallment(monthlyDeposit, annualRatePct, months, compound) {
  const m = Math.max(0, monthlyDeposit || 0);
  const n = Math.max(0, Math.round(months || 0));
  const rMonthly = (annualRatePct || 0) / 100 / 12;

  const principal = m * n;
  let grossInterest = 0;
  const schedule = [];

  if (compound === "monthly") {
    let balance = 0;
    for (let i = 1; i <= n; i++) {
      balance += m;
      const interest = balance * rMonthly;
      balance += interest;
      grossInterest += interest;
      schedule.push({
        month: i,
        deposit: m,
        cumulativeDeposit: m * i,
        interest,
        balance,
      });
    }
  } else {
    for (let i = 1; i <= n; i++) {
      const monthsRemaining = n - i + 1;
      const interestThisDeposit = m * rMonthly * monthsRemaining;
      grossInterest += interestThisDeposit;
      schedule.push({
        month: i,
        deposit: m,
        cumulativeDeposit: m * i,
        interest: interestThisDeposit,
        balance: m * i,
      });
    }
  }

  return { principal, grossInterest, schedule };
}

function calcDeposit(initialDeposit, annualRatePct, months, compound) {
  const P = Math.max(0, initialDeposit || 0);
  const n = Math.max(0, Math.round(months || 0));
  const rMonthly = (annualRatePct || 0) / 100 / 12;

  const principal = P;
  let grossInterest = 0;
  const schedule = [];

  if (compound === "monthly") {
    let balance = P;
    for (let i = 1; i <= n; i++) {
      const interest = balance * rMonthly;
      balance += interest;
      grossInterest += interest;
      schedule.push({
        month: i,
        deposit: i === 1 ? P : 0,
        cumulativeDeposit: P,
        interest,
        balance,
      });
    }
  } else {
    const monthlyInterest = P * rMonthly;
    for (let i = 1; i <= n; i++) {
      grossInterest += monthlyInterest;
      schedule.push({
        month: i,
        deposit: i === 1 ? P : 0,
        cumulativeDeposit: P,
        interest: monthlyInterest,
        balance: P,
      });
    }
  }

  return { principal, grossInterest, schedule };
}

export function calcSavings(monthlyDeposit, annualRatePct, months, options = {}) {
  const {
    product = "installment",
    compound = "simple",
    taxType = "general",
  } = options;

  const core =
    product === "deposit"
      ? calcDeposit(monthlyDeposit, annualRatePct, months, compound)
      : calcInstallment(monthlyDeposit, annualRatePct, months, compound);

  const taxRate = savingsTaxRate(taxType);
  const tax = core.grossInterest * taxRate;
  const netInterest = core.grossInterest - tax;
  const maturity = core.principal + netInterest;

  return {
    monthlyDeposit: Math.max(0, monthlyDeposit || 0),
    months: Math.max(0, Math.round(months || 0)),
    annualRatePct: annualRatePct || 0,
    product,
    compound,
    taxType,
    taxRate,
    principal: core.principal,
    grossInterest: core.grossInterest,
    tax,
    netInterest,
    maturity,
    schedule: core.schedule,
  };
}

// ── 퇴직금 + 퇴직소득세 ───────────────────────────────────────

function serviceYearDeduction(serviceYears) {
  const y = Math.max(1, Math.ceil(serviceYears));
  if (y <= 5) return 1_000_000 * y;
  if (y <= 10) return 5_000_000 + 2_000_000 * (y - 5);
  if (y <= 20) return 15_000_000 + 2_500_000 * (y - 10);
  return 40_000_000 + 3_000_000 * (y - 20);
}

function convertedDeduction(converted) {
  if (converted <= 8_000_000) return converted;
  if (converted <= 70_000_000) return 8_000_000 + (converted - 8_000_000) * 0.6;
  if (converted <= 100_000_000)
    return 8_000_000 + 62_000_000 * 0.6 + (converted - 70_000_000) * 0.55;
  if (converted <= 300_000_000)
    return 8_000_000 + 62_000_000 * 0.6 + 30_000_000 * 0.55 +
           (converted - 100_000_000) * 0.45;
  return 8_000_000 + 62_000_000 * 0.6 + 30_000_000 * 0.55 +
         200_000_000 * 0.45 + (converted - 300_000_000) * 0.35;
}

function calcSeveranceTax(severance, serviceYears) {
  if (severance <= 0) {
    return { tax: 0, localTax: 0, base: 0, converted: 0,
             serviceDeduction: 0, convDeduction: 0, serviceYearsEff: 0 };
  }
  const yEff = Math.max(1, Math.ceil(serviceYears));
  const serviceDeduction = serviceYearDeduction(yEff);
  const afterServiceDeduction = Math.max(0, severance - serviceDeduction);
  const converted = (afterServiceDeduction / yEff) * 12;
  const convDeduction = convertedDeduction(converted);
  const taxableConverted = Math.max(0, converted - convDeduction);
  const taxOnConverted = progressiveIncomeTax(taxableConverted);
  const tax = (taxOnConverted / 12) * yEff;
  const localTax = tax * 0.1;
  return {
    tax,
    localTax,
    base: taxableConverted,
    converted,
    serviceDeduction,
    convDeduction,
    serviceYearsEff: yEff,
  };
}

export function calcSeverance(avgMonthlySalary, years, extraMonths) {
  const avg = Math.max(0, avgMonthlySalary || 0);
  const totalMonths = Math.max(0, (years || 0) * 12 + (extraMonths || 0));
  const serviceYears = totalMonths / 12;
  const severance = avg * serviceYears;
  const eligible = totalMonths >= 12;

  const taxInfo = eligible
    ? calcSeveranceTax(severance, serviceYears)
    : {
        tax: 0, localTax: 0, base: 0, converted: 0,
        serviceDeduction: 0, convDeduction: 0, serviceYearsEff: 0,
      };
  const totalTax = taxInfo.tax + taxInfo.localTax;
  const netSeverance = eligible ? severance - totalTax : 0;

  return {
    avgMonthlySalary: avg,
    totalMonths,
    years: serviceYears,
    severance,
    eligible,
    tax: taxInfo.tax,
    localTax: taxInfo.localTax,
    totalTax,
    netSeverance,
    taxBase: taxInfo.base,
    converted: taxInfo.converted,
    serviceDeduction: taxInfo.serviceDeduction,
    convDeduction: taxInfo.convDeduction,
    effectiveTaxRate: severance > 0 ? totalTax / severance : 0,
  };
}
