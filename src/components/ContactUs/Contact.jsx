import React, { useEffect } from "react";
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
