import React, { useEffect } from "react";
import { Helmet } from 'react-helmet';
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import LendingPartners from "./LendingPartners";
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const isMobile = window.innerWidth <= 768; // Example mobile breakpoint
  return (
    <>
      <div className="about"  data-aos={isMobile ? "fade-up" : "fade"}>
  
      <Helmet>
        
        <title>About Us</title>
        <meta name="google-site-verification" content="V3p-oNea40TIRRS0_1n05Q1oq9QuJ3_0iR6mBun7cpI" />
        <meta name="title" content="Rooted Revenue Financial Services - Empowering Your Business Growth" />
        <meta name="description" content="Expert financial solutions tailored to help your business thrive. Let us guide you in maximizing your revenue potential." />
        
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rootedrevenuefinance.com" />
        <meta property="og:title" content="Rooted Revenue Financial Services - Empowering Your Business Growth" />
        <meta property="og:description" content="Tailored financial strategies to elevate your business." />
        <meta property="og:image" content="https://rootedrevenuefinance.com/rrf-logo1.webp" />
        
     
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rootedrevenuefinance.com" />
        <meta property="twitter:title" content="Rooted Revenue Financial Services - Empowering Your Business Growth" />
        <meta property="twitter:description" content="Expert financial solutions tailored to help your business thrive." />
        <meta property="twitter:image" content="https://rootedrevenuefinance.com/rrf-logo1.webp" />

      
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="financial services, business growth, revenue optimization, financial consulting" />
        <meta name="author" content="Rooted Revenue Finance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="30 days" />
        <meta name="distribution" content="global" />

       
        <link rel="canonical" href="https://rootedrevenuefinance.com" />

     
        <link rel="icon" type="image/webp" href="https://rootedrevenuefinance.com/rrf-logo1.webp" />

       
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#317EFB" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Rooted Revenue Finance" />
        <meta name="application-name" content="Rooted Revenue Finance" />
      </Helmet>
        <h1>About Us</h1>
        <br />
        <p>Loans that bring your dream to life</p>
      </div>
      <div className="abt-2"  data-aos={isMobile ? "fade-up" : "fade"}>
        <div>
          <p>About Rooted Revenue Financial Service</p>
          <h2>
            Get to know about our <br /> company
          </h2>
          <p>
            We are backed by a team of expert professionals with over 3 years of{" "}
            <br />
            experience working with more than 10 financial institutions across{" "}
            <br />
            India. Our dedicated team of professional representatives and
            offices <br />
            located across the country help us create a vast yet well-connected{" "}
            <br />
            network spread across 4 states partnering with over 16 Banks/NBFCs.{" "}
            <br />
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
          <img src="/abt-2.png" />
        </div>
      </div>
      <div className="abt-3"  data-aos={isMobile ? "fade-up" : "fade"}>
        <div>
          <h2>Our Vision & Mission</h2>
          <p>
            At Rooted Revenue Financial Services, our mission is to empower
            those <br />
            who are underserved by connecting them with the right financial{" "}
            <br />
            solutions. Leveraging our extensive network of financial partners,
            we <br />
            offer a wide range of carefully tailored loan products to meet your{" "}
            <br />
            unique financial needs.
          </p>
          <br />
          <br />
          <p>
            {" "}
            ​ We strive to be your trusted partner, making your financial
            journey <br />
            smoother by offering convenient solutions that cater to your diverse{" "}
            <br />
            requirements
          </p>
        </div>
      </div>
      <section id="management"  data-aos={isMobile ? "fade-up" : "fade"}>
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
              RRFS in 2024. His career began as a credit manager, and over time,{" "}
              <br />
              he climbed the corporate ladder. With seven years of experience in{" "}
              <br />
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
      <div className="abt-4"  data-aos={isMobile ? "fade-up" : "fade"}>
        <LendingPartners/>
      </div>
    </>
  );
};

export default About;
