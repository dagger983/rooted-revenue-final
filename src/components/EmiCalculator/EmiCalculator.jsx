import React, { useEffect } from "react";
import { Helmet } from 'react-helmet';
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
      <Helmet>
        /* Primary Meta Tags */
        <title>EMI Calculator</title>
        <meta name="google-site-verification" content="V3p-oNea40TIRRS0_1n05Q1oq9QuJ3_0iR6mBun7cpI" />
        <meta name="title" content="Rooted Revenue Financial Services - Empowering Your Business Growth" />
        <meta name="description" content="Expert financial solutions tailored to help your business thrive. Let us guide you in maximizing your revenue potential." />
        
        /* Open Graph / Facebook Meta Tags */
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rootedrevenuefinance.com" />
        <meta property="og:title" content="Rooted Revenue Financial Services - Empowering Your Business Growth" />
        <meta property="og:description" content="Tailored financial strategies to elevate your business." />
        <meta property="og:image" content="https://rootedrevenuefinance.com/rrf-logo1.webp" />
        
        /* Twitter Meta Tags */
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rootedrevenuefinance.com" />
        <meta property="twitter:title" content="Rooted Revenue Financial Services - Empowering Your Business Growth" />
        <meta property="twitter:description" content="Expert financial solutions tailored to help your business thrive." />
        <meta property="twitter:image" content="https://rootedrevenuefinance.com/rrf-logo1.webp" />

        /* SEO Meta Tags */
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="financial services, business growth, revenue optimization, financial consulting,Rooted Revenue Financial Services,Rooted Revenue Manapparai,Rooted Revenue Financial Consulting,Financial Services Manapparai,Rooted Revenue Expert Financial Solutions,Rooted Revenue Business Growth,
        Rooted Revenue Corporate Finance,Manapparai Revenue Optimization,Rooted Revenue Advisory Services,Rooted Revenue Financial Planning Manapparai, best personal loan in manapparai," />
        <meta name="author" content="Rooted Revenue Finance,Best Personal Loan in Trichy,Car Loan Providers Trichy,Home Loan Trichy Low Interest,Personal Loan for Salaried Employees Trichy,Trichy Personal Loan with Quick Approval,Home Loan Consultancy in Trichy,Low Interest Car Loans Trichy,Instant Loan Approval Trichy,Financial Loan Services Trichy,Trichy Home Loan Advisors" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="30 days" />
        <meta name="distribution" content="global" />

        /* Canonical Link */
        <link rel="canonical" href="https://rootedrevenuefinance.com" />

        /* Favicon */
        <link rel="icon" type="image/webp" href="https://rootedrevenuefinance.com/rrf-logo1.webp" />

        /* Additional Meta Tags */
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#317EFB" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Rooted Revenue Finance" />
        <meta name="application-name" content="Rooted Revenue Finance" />
      </Helmet>
      
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
