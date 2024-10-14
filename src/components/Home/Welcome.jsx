import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import Slider from "react-slick";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Welcome = () => {
  const settings = {
    dots: false, 
    infinite: true, 
    speed: 500,
    fade: true, 
    autoplay: true, 
    autoplaySpeed: 2000
  };

  const slides = [
    {
      title: "Rooted Revenue Financial Service-Simple & Secure payments",
      subtitle: "Connecting Your Loan Needs",
      quickCashImg: "/quick_cash.webp",
      prePaymentImg: "no pre payment fee.webp",
      quickCashText: "Quick Payment Process",
      prePaymentText: "No Pre Payment Fee",
    },
    {
      title: "Rooted Revenue Financial Service-Simple & Secure payments",
      subtitle: "Connecting Your Loan Needs",
      quickCashImg: "/quick_cash.webp",
      prePaymentImg: "no pre payment fee.webp",
      quickCashText: "Quick Payment Process",
      prePaymentText: "No Pre Payment Fee",
    },
    {
      title: "Rooted Revenue Financial Service-Simple & Secure payments",
      subtitle: "Connecting Your Loan Needs",
      quickCashImg: "/quick_cash.webp",
      prePaymentImg: "no pre payment fee.webp",
      quickCashText: "Quick Payment Process",
      prePaymentText: "No Pre Payment Fee",
    }
  ];

  return (
    <div className="welcome">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className={`welcome-image${index + 1}`} key={index}>
            <div className="welcome-content">
              <h2>{slide.title}</h2>
              <h3>{slide.subtitle}</h3>
              <Link to="/contact-us">
              <button>
               Apply For a Loan  &nbsp;
                <FaArrowRightLong style={{ position: "relative", top: "5px" }} />
              </button>
              </Link>
              <div className="welcome-content2">
                <div>
                  <img src={slide.quickCashImg} alt="Quick Cash" />
                  <p>Quick <br /> Payment <br /> Process</p>
                </div>
                <div>
                  <img src={slide.prePaymentImg} alt="No Pre Payment Fee" />
                  <p>No Pre <br /> Payment <br /> Fee</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Welcome;
