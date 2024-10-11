import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie"; // Import js-cookie
import "./PCNavbar.css";

const PCNavbar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [username, setUsername] = useState(""); // State to hold the username

  useEffect(() => {
    // Get the current path from the window location
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
    
    // Get the user data from cookies
    const userData = Cookies.get("user");
    if (userData) {
      setUsername(userData); // Set username from user data
    }
  }, []);

  return (
    <>
      <div className="pcnavbar">
        <div>
          <img src="/rrf-logo1.webp" alt="" />
          <img src="/rrf-logo2.webp" alt="" />
        </div>
        <div className="pcnavbar2">
          <Link to="/" onClick={() => setActiveLink("/")}>
            <p
              style={{
                color: activeLink === "/" ? "#020399" : "rgb(85, 85, 85)",
              }}
            >
              Home
            </p>
          </Link>
          <Link to="/about" onClick={() => setActiveLink("/about")}>
            <p
              style={{
                color: activeLink === "/about" ? "#020399" : "rgb(85, 85, 85)",
              }}
            >
              About
            </p>
          </Link>
          <Link to="/services" onClick={() => setActiveLink("/services")}>
            <p
              style={{
                color: activeLink === "/services" ? "#020399" : "rgb(85, 85, 85)",
              }}
            >
              Services
            </p>
          </Link>
          <Link to="/emi-calci" onClick={() => setActiveLink("/emi-calci")}>
            <p
              style={{
                color: activeLink === "/emi-calci" ? "#020399" : "rgb(85, 85, 85)",
              }}
            >
              EMI Calculator
            </p>
          </Link>
          <Link to="/careers" onClick={() => setActiveLink("/careers")}>
            <p
              style={{
                color: activeLink === "/careers" ? "#020399" : "rgb(85, 85, 85)",
              }}
            >
              Careers
            </p>
          </Link>
          <Link to="/contact-us" onClick={() => setActiveLink("/contact-us")}>
            <p
              style={{
                color: activeLink === "/contact-us" ? "#020399" : "rgb(85, 85, 85)",
              }}
            >
              Contact Us
            </p>
          </Link>

          <div>
            {username ? (
              <span>Welcome, {username}!</span> // Show username if available
            ) : (
              <Link to="/login">
                <button>Login</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PCNavbar;
