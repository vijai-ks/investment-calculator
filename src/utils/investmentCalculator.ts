import { InvestedData, InvestmentDetails } from "../types/Investments";

export const investmentCalculator = (investmentDetails: InvestmentDetails) => {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    investmentDetails;

  const investedData: InvestedData[] = [];

  for (let i = 0; i < duration; i++) {
    const interest =
      (initialInvestment + annualInvestment) * (expectedReturn / 100);
    const investmentValue = initialInvestment + annualInvestment + interest;
    const totalInterest = interest * (i + 1);
    const investedCapital = initialInvestment + annualInvestment * (i + 1);

    investedData.push({
      year: i + 1,
      investmentValue,
      interest,
      totalInterest,
      investedCapital,
    });
  }

  return investedData;
};
