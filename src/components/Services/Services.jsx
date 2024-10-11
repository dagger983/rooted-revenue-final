import React, { useEffect } from "react";
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
