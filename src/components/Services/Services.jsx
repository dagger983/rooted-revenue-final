import React, { useEffect } from "react";
import { Helmet } from 'react-helmet';

import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const isMobile = window.innerWidth <= 768; // Example mobile breakpoint
  return (
    <>
      <div className="service-bg" data-aos={isMobile ? "fade-up" : "fade"}>
      <Helmet>
        /* Primary Meta Tags */
        <title>Services</title>
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
        <div data-aos={isMobile ? "fade-up" : "fade"}>
          <h2>Our Services</h2>
          <p>
            Meet all your financial requirements <br /> with our <br />
            wide range of loans
          </p>
        </div>
      </div>
      <div className="services" data-aos={isMobile ? "fade-up" : "fade"}>
        <div>
          <p>Our Services</p>
          <h2>Our Offerings</h2>
          <p style={{ fontWeight: "200" }}>
            Explore below our wide range of services that will fit all
            requirements and <br /> demands for a better lifestyle.
          </p>
        </div>
      </div>
      <div className="services2" data-aos={isMobile ? "fade-up" : "fade"}>
        <div className="service-details-main">
          <div className="services-details">
            <div>
              <img src="/pl.webp" alt="" />
            </div>
            <div className="services-details-div">
              <h2> Personal Loans</h2> <br />
              <p>
                Need funds for addressing <br /> your immediate financial <br />{" "}
                needs?
              </p>
              ​ <br />
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
          <div className="services-details" data-aos={isMobile ? "fade-up" : "fade"}>
            <div>
              <img src="/bl.webp" alt="" />
            </div>
            <div className="services-details-div">
              <h2>Business Loans</h2> <br />
              <p>
                Need funds for addressing <br /> your immediate financial <br />{" "}
                needs?
              </p>
              ​ <br />
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
          <div className="services-details" data-aos={isMobile ? "fade-up" : "fade"}>
            <div>
              <img src="/hl.webp" alt="" />
            </div>
            <div className="services-details-div">
              <h2>​Home Loans</h2> <br />
              <p>
                Are you looking for a means to <br /> purchase your dream home?
              </p>
              ​ <br />
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
        <div className="service-details-main">
          <div className="services-details" data-aos={isMobile ? "fade-up" : "fade"}>
            <div>
              <img src="/ins.jpg" alt="" />
            </div>
            <div className="services-details-div">
              <h2>Insurance Loans</h2> <br />
              <p>
                Are you looking for an attractive <br /> life, home, or car
                insurance policy?
              </p>
              ​ <br />
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
          <div className="services-details" data-aos={isMobile ? "fade-up" : "fade"}>
            <div>
              <img src="/ed.webp" alt="" />
            </div>
            <div className="services-details-div">
              <h2>Education Loans</h2> <br />
              <p>
                Looking for funds to chase <br /> your goal of higher education
                abroad?
              </p>
              ​ <br />
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
          <div className="services-details" data-aos={isMobile ? "fade-up" : "fade"}>
            <div>
              <img src="/car.webp" alt="" />
            </div>
            <div className="services-details-div">
              <h2>Car Loans</h2> <br />
              <p>
                Have your eyes set <br /> on a car or a vehicle?
              </p>
              ​ <br />
              <Link to="/service-details" >
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
        <div className="service-details-main">
          <div className="services-details" data-aos={isMobile ? "fade-up" : "fade"}>
            <div>
              <img src="/ccl.webp" alt="" />
            </div>
            <div className="services-details-div">
              <h2> Credit Card Loans</h2> <br />
              <p>
                Want to apply for a credit <br /> card but are confused given{" "}
                <br /> the choices available?
              </p>
              ​ <br />
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
          <div className="services-details" data-aos={isMobile ? "fade-up" : "fade"}>
            <div>
              <img src="/cl.webp" alt="" />
            </div>
            <div className="services-details-div">
              <h2>Corporate Loans</h2> <br />
              <p>Are you planning to expand your business to another sector?</p>
              ​ <br />
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
          <div className="services-details" data-aos={isMobile ? "fade-up" : "fade"}>
            <div>
              <img src="/gl.webp" alt="" />
            </div>
            <div className="services-details-div">
              <h2>Gold Loans</h2> <br />
              <p>
                Are you interested in <br /> obtaining a quick gold loan?
              </p>
              ​ <br />
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
      </div>
    </>
  );
};

export default Services;
