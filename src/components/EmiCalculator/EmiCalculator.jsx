import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./EmiCalci.css";
import PersonalLoanCalci from "../Home/PersonaLoanCalci";
import HomeLoan from "../Home/HomeLoan";
const EmiCalculator = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const isMobile = window.innerWidth <= 768; // Example mobile breakpoint

  return (
    <>
      <div className="emi-welcome" data-aos={isMobile ? "fade-up" : "fade"}>
        <div>
          <h1>Loan EMI Calculator</h1>
          <p>Funds for addressing your immediate financial needs?</p>
        </div>
      </div>
      <div className="pl-emi" data-aos={isMobile ? "fade-up" : "fade"}>
        <h2>Personal Loan Calculator </h2>
        <br />
        <p>
          Bringing you the best and easiest-to-use EMI calculating tool that can{" "}
          <br />
          help you make an informed decision on how much funding you need for{" "}
          <br />
          your personal need, how much your EMIs are likely to be, and other{" "}
          <br />
          details.
        </p>
      </div>
      <PersonalLoanCalci data-aos={isMobile ? "fade-up" : "fade"}/>
      <div className="pl-emi" data-aos={isMobile ? "fade-up" : "fade"}>
        <h2>Home Loan Calculator</h2>
        <br />
        <p>
          Calculating the EMI and its components can be a tiresome exercise. <br />
          With our home loan EMI calculator, get complex calculations in no <br />
          time.
        </p>
      </div>
      <HomeLoan data-aos={isMobile ? "fade-up" : "fade"}/>
    </>
  );
};

export default EmiCalculator;
