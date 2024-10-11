import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./Emi.css";
ChartJS.register(ArcElement, Tooltip, Legend);

const HomeLoan = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [tenure, setTenure] = useState(2); // Set default tenure to years
  const [interestRate, setInterestRate] = useState(6);

  const formatNumber = (num) =>
    num.toLocaleString("en-IN", { style: "currency", currency: "INR" });

  // Function to calculate EMI in months based on tenure in years
  const calculateEMI = (principal, rate, timeInYears) => {
    const time = timeInYears * 12; // Convert years to months
    const monthlyRate = rate / (12 * 100);
    return (
      (principal * monthlyRate * Math.pow(1 + monthlyRate, time)) /
      (Math.pow(1 + monthlyRate, time) - 1)
    );
  };

  const monthlyEMI = calculateEMI(loanAmount, interestRate, tenure).toFixed(2);
  const totalPayable = (monthlyEMI * tenure * 12).toFixed(2); // Convert tenure back to months for total payable
  const totalInterest = (totalPayable - loanAmount).toFixed(2);

  const chartData = {
    labels: ["Principal Amount", "Interest Amount"],
    datasets: [
      {
        data: [loanAmount, totalInterest],
        backgroundColor: ["#020399", "#000000"],
      },
    ],
  };

  const chartOptions = {
    rotation: -90,
    circumference: 180,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `₹${formatNumber(tooltipItem.raw)}`,
        },
      },
    },
  };

  const resetInputs = () => {
    setLoanAmount(100000);
    setTenure(2); // Reset to years
    setInterestRate(6);
  };

  return (
    <>
      <div className="emi-container">
        <div className="emi-input">
          <div className="emi-input-section">
            <label className="emi-label" htmlFor="loanAmount">
              Loan Amount
            </label>
            <input
              id="loanAmount"
              type="range"
              min="100000"
              max="20000000"
              step="10000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="emi-input-range"
            />
            <input
              type="number"
              min="100000"
              max="20000000"
              step="10000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="emi-input-number"
            />
            <p>{formatNumber(loanAmount)}</p>
          </div>

          <div className="emi-input-section">
            <label className="emi-label" htmlFor="tenure">
              Tenure (Years)
            </label>
            <input
              id="tenure"
              type="range"
              min="2"
              max="40"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="emi-input-range"
            />
            <input
              type="number"
              min="2"
              max="40"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="emi-input-number"
            />
            <p>{tenure} Years</p>
          </div>

          <div className="emi-input-section">
            <label className="emi-label" htmlFor="interestRate">
              Interest Rate (%)
            </label>
            <input
              id="interestRate"
              type="range"
              min="6"
              max="12"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="emi-input-range"
            />
            <input
              type="number"
              min="6"
              max="12"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="emi-input-number"
            />
            <p>{interestRate}%</p>
            <br />
            <br />
            <p className="note">Note: Terms & Conditions apply as per banks policy.</p>
          </div>
        </div>
        <div>
          <div className="emi-details">
            <h3>Monthly EMI : ₹ {formatNumber(monthlyEMI)}</h3> <br />
            <p>Total Interest : ₹ {formatNumber(totalInterest)}</p> <br />
            <hr />
            <br />
            <p>Total Amount Payable : ₹ {formatNumber(totalPayable)}</p> <br />
            <button onClick={resetInputs} className="reset-button">
              Reset
            </button>
          </div>
          <div className="emi-chart-container">
            <Doughnut data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLoan;
