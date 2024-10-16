import React, { useEffect } from "react";
import { Helmet } from 'react-helmet';
import AOS from "aos";
import "aos/dist/aos.css";
import "./Carreers.css";
import { MdKeyboardArrowRight } from "react-icons/md";
const Carreers = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const isMobile = window.innerWidth <= 768; // Example mobile breakpoint
  return (
    <>
      <div className="careers-welcome" data-aos={isMobile ? "fade-up" : "fade"}>
      <Helmet>
        /* Primary Meta Tags */
        <title>Careers</title>
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
          <h1>Careers</h1>
          <p>
            Join us for your career growth as well as various opportunities to
            help our nation grow.
          </p>
        </div>
      </div>
      <div className="careers" data-aos={isMobile ? "fade-up" : "fade"}>
        <p>What We're Offering</p>
        <h2>Checkout Digi Loans new job opportunities</h2>
      </div>
      <div className="career-details-main">
        <div className="career-design"></div>
        <div className="careers-details">
          <div>
            <h2>Sales Manager (Personal loan)</h2>
            <p>
              Responsible for personal loan growth for the designated
              area/branch/channels
            </p>
          </div>
          <div>
            <button>
              Apply Know{" "}
              <MdKeyboardArrowRight
                style={{ position: "relative", top: "2px" }}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="career-details-main" data-aos={isMobile ? "fade-up" : "fade"}>
        <div className="career-design"></div>
        <div className="careers-details">
          <div>
            <h2>Sales manager (Home loan)</h2>
            <p>
              Maintain the relationship with all sourcing partners including
              connectors and banks.
            </p>
          </div>
          <div>
            <button>
              Apply Know{" "}
              <MdKeyboardArrowRight
                style={{ position: "relative", top: "2px" }}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="career-details-main" data-aos={isMobile ? "fade-up" : "fade"}>
        <div className="career-design"></div>
        <div className="careers-details">
          <div>
            <h2>Sales manager (Car loan)</h2>
            <p>
              Maintain strong relationships with existing and new customers for
              br repeat business or referrals.
            </p>
          </div>
          <div>
            <button>
              Apply Know{" "}
              <MdKeyboardArrowRight
                style={{ position: "relative", top: "2px" }}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="abt-2" data-aos={isMobile ? "fade-up" : "fade"}>
        <div>
          <p>About Rooted Revenue Financial Service</p>
          <h2>
            Get to know about our <br /> company
          </h2>
          <p>
            We are backed by a team of expert professionals with over 13 years <br />
            of experience working with more than 91 financial institutions <br />
            across India. Our dedicated team of professional representatives and <br />
            offices located across the country help us create a vast yet <br />
            well-connected network spread across 29 states partnering with over <br />
            91 Banks/NBFCs
          </p>
          <br />
          <br />
          <p>
            Over 50% of the Indian population belongs to the social segment —
            the <br />
            “Average middle class.” It primarily consists of those struggling to{" "}
            <br />
            meet their usual financial demands such as education costs, health{" "}
            <br />
            expenses, and so on
          </p>
        </div>
        <div>
          <img src="/contact-us.webp" className="careersImg"/>
        </div>
      </div>
    </>
  );
};

export default Carreers;
