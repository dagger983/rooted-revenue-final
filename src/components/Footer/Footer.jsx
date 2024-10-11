import React from "react";
import "./Footer.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <>
      <div className="footer-1">
        <h1>Get Quick Personal Loans</h1>
        <p>Get personal loans without hassle-free process</p>
        <button>Apply Now</button>
      </div>
      <div className="footer-2">
        <div className="footer-details">
          <img src="/RRF BLACK LOGO.png" alt="" />
          <div className="footer-details-main">
            <MdOutlineMailOutline
              style={{ position: "relative", top: "2px", marginRight: "5px" }}
            />
            <a
              href="mailto:jayaprakash@rootedrevenue.in"
              style={{ cursor: "pointer" }}
            >
              Jayaprakash@rootedrevenue.in
            </a>
          </div>

          <div className="footer-details-main">
            <IoCallOutline
              style={{ position: "relative", top: "2px", marginRight: "5px" }}
            />
            <a href="tel:+918807882393" style={{ cursor: "pointer" }}>
              +91 8807882393
            </a>
          </div>
        </div>
        {/* <div className="footer-details2">
          <h2>Explore</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>EMI Calculator</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div> */}
        <div className="footer-details3">
          <h2>Timing</h2>
          <p>
            Mon Fri: 10:00am - 6:00pm <br /> Saturday: 10:00am - 6:00pm <br />{" "}
            Sunday: Closed
          </p>
        </div>
        <div className="footer-details4">
          <h2>Follow Us</h2>
          <div className="footer-details4-main">
            <a href="https://www.facebook.com/profile.php?id=100005916753482">
            <div>
              <img src="/fb.png" alt="" />
            </div>
            </a>
            <a href="https://wa.me/918807882393">
            <div>
              <img src="/wp.webp" alt="" />
            </div>
            </a>
            {/* <div>
              <img src="/x.png" alt="" />
            </div> */}
          
            <a href="https://www.linkedin.com/in/jayaprakash-kannan-2b1946b5/">
            <div>
              <img src="/in.png" alt="" />
            </div>
            </a>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
