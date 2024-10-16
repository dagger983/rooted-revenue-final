import React, { useEffect } from "react";
import { Helmet } from 'react-helmet';

import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";
import ContactForm from "./ContactForm";
const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const isMobile = window.innerWidth <= 768; // Example mobile breakpoint

  return (
    <>
      <div className="conatctUs" data-aos={isMobile ? "fade-up" : "fade"}>
      <Helmet>
        /* Primary Meta Tags */
        <title>Contact Us</title>
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
          <h2>Contact Us</h2>
          <p>If you need anything, you can get in touch with us.</p>
        </div>
      </div>

      <div className="contactUs2" data-aos={isMobile ? "fade-up" : "fade"}>
        <h1>Rooted Revenue Financial Service</h1>
        <div className="contactUs2-main">
          <div>
            <img src="/abt-2.png" alt="" />
          </div>
          <div>
            <h2>Feel free to get <br /> in touch</h2>
            <p>
              Are you having queries regarding your loan processing? Worry not! <br />
              Fill in this form and someone from our team will call to assist <br />
              you with your doubts.
            </p>
          </div>
        </div>
      </div>
      <div className="contact" data-aos={isMobile ? "fade-up" : "fade"}>
        <ContactForm/>
      </div>
    </>
  );
};

export default Contact;
