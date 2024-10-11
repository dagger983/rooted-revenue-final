import React from "react";
import "./Home.css";
import { FaArrowRightLong } from "react-icons/fa6";
import EmiCalci from "./EmiCalci";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section id="offerings">
        <div className="Offerings">
          <h3>What We're Offering</h3>
          <h2> Choose from a wide range of financial offerings </h2>
        </div>
        <div className="offerings-main">
          <div className="loan-offer">
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
          <div className="loan-offer">
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
          <div className="loan-offer">
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
      <section id="records">
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
      <section id="OurBenefits">
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
      <section id="customer">
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
      <section id="emiCalci">
        <EmiCalci />
      </section>
      <br />
      <br />
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
