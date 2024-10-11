import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Fill } from 'react-icons/ri'; // Import the menu icon
import './PCNavbar.css';

const MobMenu = () => {
  const [activeLink, setActiveLink] = useState('/');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Get the current path from the window location
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='mobNav-main'>
      <div className='mobNav'>
        <img src='/rrf-logo1.webp' alt='Logo 1' />
        <img src='/rrf-logo2.webp' alt='Logo 2' />
      </div>
      <div className='menu-icon' onClick={toggleSidebar}>
        <RiMenu3Fill />
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className='sidebar'>
          <Link to="/" onClick={() => { setActiveLink("/"); toggleSidebar(); }}>
            <p style={{ color: activeLink === "/" ? "#020399" : "rgb(85, 85, 85)" }}>
              Home
            </p>
          </Link>
          <Link to="/about" onClick={() => { setActiveLink("/about"); toggleSidebar(); }}>
            <p style={{ color: activeLink === "/about" ? "#020399" : "rgb(85, 85, 85)" }}>
              About
            </p>
          </Link>
          <Link to="/services" onClick={() => { setActiveLink("/services"); toggleSidebar(); }}>
            <p style={{ color: activeLink === "/services" ? "#020399" : "rgb(85, 85, 85)" }}>
              Services
            </p>
          </Link>
          <Link to="/emi-calci" onClick={() => { setActiveLink("/emi-calci"); toggleSidebar(); }}>
            <p style={{ color: activeLink === "/emi-calci" ? "#020399" : "rgb(85, 85, 85)" }}>
              EMI Calculator
            </p>
          </Link>
          <Link to="/careers" onClick={() => { setActiveLink("/careers"); toggleSidebar(); }}>
            <p style={{ color: activeLink === "/careers" ? "#020399" : "rgb(85, 85, 85)" }}>
              Careers
            </p>
          </Link>
          <Link to="/contact-us" onClick={() => { setActiveLink("/contact-us"); toggleSidebar(); }}>
            <p style={{ color: activeLink === "/contact-us" ? "#020399" : "rgb(85, 85, 85)" }}>
              Contact Us
            </p>
          </Link>
          <Link to="/login" onClick={() => { setActiveLink("/login"); toggleSidebar(); }}>
            <p style={{ color: activeLink === "/login" ? "#020399" : "rgb(85, 85, 85)" }}>
              Login
            </p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default MobMenu;
