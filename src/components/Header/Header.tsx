import InvestCalculatorLogo from "../../assets/investment-calculator-logo.png";
import { InvestmentDetails } from "../../types/Investments";
import headerStyles from "./Header.module.scss";

interface HeaderProps {
  investmentDetails: InvestmentDetails;
  setInvestmentDetails: React.Dispatch<React.SetStateAction<InvestmentDetails>>;
}

const Header = ({ investmentDetails, setInvestmentDetails }: HeaderProps) => {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    investmentDetails;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof typeof investmentDetails
  ) => {
    const value = parseFloat(e.target.value);
    setInvestmentDetails((prevDetails) => ({
      ...prevDetails,
      [field]: isNaN(value) ? 0 : value,
    }));
  };

  return (
    <div className={headerStyles.header}>
      <img
        src={InvestCalculatorLogo}
        alt="Investment Calculator Logo"
        className={headerStyles.logo}
      />
      <div className={headerStyles.inputs}>
        <div className={headerStyles.inputContainer}>
          <label htmlFor="initial-investment" className={headerStyles.label}>
            Initial Investment
          </label>
          <input
            type="number"
            placeholder="Enter amount"
            id="initial-investment"
            className={headerStyles.inputBox}
            value={initialInvestment}
            onChange={(e) => handleInputChange(e, "initialInvestment")}
          />
        </div>
        <div className={headerStyles.inputContainer}>
          <label htmlFor="annual-investment" className={headerStyles.label}>
            Annual Investment
          </label>
          <input
            type="number"
            placeholder="Enter amount"
            id="annual-investment"
            className={headerStyles.inputBox}
            value={annualInvestment}
            onChange={(e) => handleInputChange(e, "annualInvestment")}
          />
        </div>
        <div className={headerStyles.inputContainer}>
          <label htmlFor="expected-return" className={headerStyles.label}>
            Expected Return
          </label>
          <input
            type="number"
            placeholder="Enter amount"
            id="expected-return"
            className={headerStyles.inputBox}
            value={expectedReturn}
            onChange={(e) => handleInputChange(e, "expectedReturn")}
          />
        </div>
        <div className={headerStyles.inputContainer}>
          <label htmlFor="duration" className={headerStyles.label}>
            Duration
          </label>
          <input
            type="number"
            placeholder="Duration in years"
            id="duration"
            className={headerStyles.inputBox}
            value={duration}
            onChange={(e) => handleInputChange(e, "duration")}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
