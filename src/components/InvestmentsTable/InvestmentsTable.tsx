import { InvestmentDetails } from "../../types/Investments";
import { investmentCalculator } from "../../utils/investmentCalculator";
import investmentsTableStyles from "./InvestmentsTable.module.scss";

interface InvestmentsTableProps {
  investmentDetails: InvestmentDetails;
}

const InvestmentsTable = ({ investmentDetails }: InvestmentsTableProps) => {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    investmentDetails;
  const investedData = investmentCalculator(investmentDetails);

  return (
    <div>
      {initialInvestment && annualInvestment && expectedReturn && duration ? (
        <table className={investmentsTableStyles.table}>
          <thead>
            <tr>
              <th>Year</th>
              <th>Invested Value</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {investedData.map((data, index) => (
              <tr key={index}>
                <td>{data.year}</td>
                <td>{data.investmentValue}</td>
                <td>{data.interest}</td>
                <td>{data.totalInterest}</td>
                <td>{data.investedCapital}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className={investmentsTableStyles.error}>
          <p>
            Investment details are incomplete. Please provide all required
            information.
          </p>
        </div>
      )}
    </div>
  );
};

export default InvestmentsTable;
