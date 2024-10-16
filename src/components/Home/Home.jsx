import React, { useEffect } from "react";
import { Helmet } from 'react-helmet';
import "./Home.css";
import { FaArrowRightLong } from "react-icons/fa6";
import EmiCalci from "./EmiCalci";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const isMobile = window.innerWidth <= 768; // Example mobile breakpoint

  return (
    <>
      <section id="offerings" data-aos={isMobile ? "fade-up" : "fade"}>
        <div className="Offerings">
        <Helmet>
        /* Primary Meta Tags */
        <title>Home</title>
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
      
          <h3>What We're Offering</h3>
          <h2> Choose from a wide range of financial offerings </h2>
        </div>
        <div className="offerings-main">
          <div className="loan-offer" data-aos={isMobile ? "fade-up" : "fade"}>
            <img src="/Loan.webp" alt="" />
            <div className="loan-offer-main">
              <h2>Personal Loan</h2>
              <p>
                House LoanNeed funds for addressing <br />
                your immediate financial needs?
              </p>
              <Link to="/service-details">
                {" "}
                <button>
                  Know More &nbsp;{" "}
                  <FaArrowRightLong
                    style={{ position: "relative", top: "5px" }}
                  />
                </button>
              </Link>
            </div>
          </div>
          <div className="loan-offer" data-aos={isMobile ? "fade-up" : "fade"}>
            <img src="/business-loan.jpg" alt="" />
            <div className="loan-offer-main">
              <h2>Business Loan</h2>
              <p>
                ​Excited to turn your entrepreneurial <br />
                dream or business into a success?
              </p>
              <Link to="/service-details">
                {" "}
                <button>
                  Know More &nbsp;{" "}
                  <FaArrowRightLong
                    style={{ position: "relative", top: "5px" }}
                  />
                </button>
              </Link>
            </div>
          </div>
          <div className="loan-offer" data-aos={isMobile ? "fade-up" : "fade"}>
            <img src="/home-loan.jpg" alt="" />
            <div className="loan-offer-main">
              <h2>House Loan</h2>
              <p>
                Are you looking for a means to <br />
                purchase your dream home?
              </p>
              <Link to="/service-details">
                {" "}
                <button>
                  Know More &nbsp;{" "}
                  <FaArrowRightLong
                    style={{ position: "relative", top: "5px" }}
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="records" data-aos={isMobile ? "fade-up" : "fade"}>
        <div className="records">
          <div>
            <h2>4</h2>
            <button>Total States</button>
          </div>
          <div>
            <h2>16</h2>
            <button>Lending Partners</button>
          </div>
          <div>
            <h2>38+</h2>
            <button>Team Members</button>
          </div>
          <div>
            <h2>5 cr</h2>
            <button>Business Value</button>
          </div>
        </div>
      </section>
      <br />
      <br />
      <section id="OurBenefits" data-aos={isMobile ? "fade-up" : "fade"}>
        <div className="ourBenefits">
          <div>
            <p style={{ color: "#020399" }}>OUR BENEFITS</p>
            <br />
            <h2>Why choose us?</h2>
            <br /> <br />
            <p>
              Rooted Revenue Financial Service range of financial products has
              <br />
              continuously innovated to cater to your personal and business
              <br />
              needs. This includes - personal loans, business loans, home loans,
              <br />
              auto loans, gold loans, education loans, corporate loans, <br />
              insurance and. credit cards. With our simplified lending process,
              <br />
              we offer our customers a truly superior borrowing experience that
              <br />
              makes lending simple, quick, and hassle-free.
            </p>
            <br /> <br />
            <p>
              We extend our financial solutions to the most remote areas and
              <br />
              assist them in achieving their financial goals through our <br />
              financial partners. <br />
            </p>
            <br />
            <button>
              Know More &nbsp; &nbsp;
              <FaArrowRightLong style={{ position: "relative", top: "3px" }} />
            </button>
          </div>
          <div>
            <img className="ourBenefits-Img1" src="/whychoseus.png" alt="" />
            <img
              className="ourBenefits-Img2"
              src="/benefits-design.webp"
              alt=""
            />
          </div>
        </div>
      </section>
      <br />
      <br />
      <section id="customer" data-aos={isMobile ? "fade-up" : "fade"}>
        <div className="customerBg">
          <div className="customer-details">
            <h2>
              Thousands of customers <br />
              trust us
            </h2>
            <br />
            <br />
            <p className="customer-para">
              We have helped thousands of customers by not letting them
              compromise <br />
              on their bucket list.
            </p>
            <br />
          </div>
          <div className="customerBg-main">
            <div className="customerCare">
              <div>
                <img src="/hassle-free.webp" alt="" />
                <p>
                  Hassle-free <br /> process
                </p>
              </div>
              <div>
                <img src="/money-grow.png" alt="" />
                <p>Low Intrest</p>
              </div>
              <div>
                <img src="/people-star.webp" alt="" />
                <p>
                  Dedicated <br /> Experts
                </p>
              </div>
            </div>
            <div className="customerCare">
              <div>
                <img src="/partnership.webp" alt="" />
                <p>
                  90+ Lending <br /> Partners
                </p>
              </div>
              <div>
                <img src="/quick-icon.png" alt="" />
                <p>
                  Quick <br /> Verification
                </p>
              </div>
              <div>
                <img src="/time.webp" alt="" />
                <p>
                  Flexible <br /> Tenure
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <section id="emiCalci" data-aos={isMobile ? "fade-up" : "fade"}>
        <EmiCalci />
      </section>
      <br />
      <br />
      <section id="management" data-aos={isMobile ? "fade-up" : "fade"}>
        <div className="management-main">
          <h3>Management</h3>
          <div className="management">
            <div>
              <img src="/founder_of_rooted revenue.png" alt="" />
            </div>
            <div className="manage-details">
              <h2>Jayaprakash.K</h2>
              <br />
              <p>
                He is the founder of Rooted Revenue Financial Services. Through
                his <br />
                hard work, team support, dedication, and experience, he launched{" "}
                <br />
                RRFS in 2024. His career began as a credit manager, and over
                time, <br />
                he climbed the corporate ladder. With seven years of experience
                in <br />
                the retail loans and insurance sector, he ventured into <br />
                entrepreneurship. He started the company with a small team of
                three <br />
                members and now manages nearly 30 employees. His vision is to
                expand <br />
                Rooted Revenue Financial Services to all states in India
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
