import { useEffect, useState } from "react";

import Header from "../components/Header/Header";
import investmentCalculatorStyles from "./InvestmentCalculator.module.scss";
import InvestmentsTable from "../components/InvestmentsTable/InvestmentsTable";
import { InvestmentDetails } from "../types/Investments";

const InvestmentCalculator = () => {
  const [investmentDetails, setInvestmentDetails] = useState<InvestmentDetails>(
    {
      initialInvestment: 0,
      annualInvestment: 0,
      expectedReturn: 0,
      duration: 0,
    }
  );

  useEffect(() => {
    const storedInvestmentDetails = localStorage.getItem("investmentDetails");
    if (storedInvestmentDetails) {
      setInvestmentDetails(JSON.parse(storedInvestmentDetails));
    }
  }, []);

  useEffect(() => {
    if (
      investmentDetails.initialInvestment !== 0 ||
      investmentDetails.annualInvestment !== 0 ||
      investmentDetails.expectedReturn !== 0 ||
      investmentDetails.duration !== 0
    ) {
      localStorage.setItem(
        "investmentDetails",
        JSON.stringify(investmentDetails)
      );
    }
  }, [investmentDetails]);

  return (
    <div className={investmentCalculatorStyles.investmentCalculator}>
      <Header
        investmentDetails={investmentDetails}
        setInvestmentDetails={setInvestmentDetails}
      />
      <InvestmentsTable investmentDetails={investmentDetails} />
    </div>
  );
};

export default InvestmentCalculator;
