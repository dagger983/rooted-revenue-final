import React from "react";
import "./About.css";
import LendingPartners from "./LendingPartners";
const About = () => {
  return (
    <>
      <div className="about">
        <h1>About Us</h1>
        <br />
        <p>Loans that bring your dream to life</p>
      </div>
      <div className="abt-2">
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
      <div className="abt-3">
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
      <section id="management">
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
      <div className="abt-4">
        <LendingPartners/>
      </div>
    </>
  );
};

export default About;
