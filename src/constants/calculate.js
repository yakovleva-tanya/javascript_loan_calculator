// Do the calculations
const calculate = (
  price = 0,
  downpayment = 0,
  months = 0,
  years = 0,
  interestRate = 0
) => {
  let monthlyInterestRate = calculateMonthlyInterestRate (interestRate);
  let duration = calculateTotalDuration (months, years);
  let startingPrincipal = calculatePrincipal (price, downpayment);
  let monthlyPayment = calculateMonthlyPayment (
    startingPrincipal,
    duration,
    monthlyInterestRate
  );
  let totalInterest = calculateTotalInterest (
    monthlyPayment,
    duration,
    startingPrincipal
  );
  let amortizationSchedule = calculateAmortizationSchedule (
    startingPrincipal,
    duration,
    monthlyInterestRate,
    monthlyPayment
  );

  const result = {
    monthly_payment: round (monthlyPayment),
    total_interest: round (totalInterest),
    amortization_schedule: amortizationSchedule,
  };
  return result;
};
export default calculate;

/////////////////////////////////////////////////////
//  Math functions
/////////////////////////////////////////////////////

const calculatePrincipal = (price, downpayment) => price - downpayment;

const calculateTotalDuration = (months, years) => years * 12 + months;

const calculateMonthlyPayment = (principal, duration, monthlyInterestRate) => {
  return (
    principal *
    (1 + monthlyInterestRate) ** duration *
    monthlyInterestRate /
    ((1 + monthlyInterestRate) ** duration - 1)
  );
};

const calculateTotalInterest = (monthlyPayment, duration, principal) =>
  monthlyPayment * duration - principal;

const calculateMonthlyInterestRate = interestRate => interestRate / 12 / 100;

const calculateAmortizationSchedule = (
  startingPrincipal,
  duration,
  monthlyInterestRate,
  monthlyPayment
) => {
  let balance = startingPrincipal;
  let totalInterest = 0;
  let amortizationSchedule = [];
  for (let i = 0; i < duration; i++) {
    let periodInterest = balance * monthlyInterestRate;
    let periodPrincipal = monthlyPayment - periodInterest;
    balance -= periodPrincipal;
    totalInterest += periodInterest;
    amortizationSchedule[i] = {
      period_principal: round (periodPrincipal),
      period_interest: round (periodInterest),
      total_interest: round (totalInterest),
      balance: round (balance),
    };
  }
  return amortizationSchedule;
};

const round = number => Math.round (number * 100) / 100;
