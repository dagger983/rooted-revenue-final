import React from "react";
import "./Carreers.css";
import { MdKeyboardArrowRight } from "react-icons/md";
const Carreers = () => {
  return (
    <>
      <div className="careers-welcome">
        <div>
          <h1>Careers</h1>
          <p>
            Join us for your career growth as well as various opportunities to
            help our nation grow.
          </p>
        </div>
      </div>
      <div className="careers">
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
      <div className="career-details-main">
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
      <div className="career-details-main">
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
      <div className="abt-2">
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
