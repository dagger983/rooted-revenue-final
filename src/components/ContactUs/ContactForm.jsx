import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
      <h2>Contact</h2> <br />
        <p><FaMapMarkerAlt className="icon" /> 500 Terry Francine St., San Francisco, CA 94158</p> <br />
        <p><FaPhone className="icon" /> 123-456-7890</p> <br />
        <p><FaEnvelope className="icon" /> info@mysite.com</p> <br />
        <div className="social-icons">
          <FaFacebook className="social-icon" /> <br /> 
          <FaTwitter className="social-icon" /> <br />
          <FaLinkedin className="social-icon" /> <br />
          <FaInstagram className="social-icon" /> <br />
        </div>
      </div>
<br />
      <div className="contact-form">
       
        <form>
          <div className="form-group">
            <input className="input-field" type="text" placeholder="First Name" name="firstName" />
            <input className="input-field" type="text" placeholder="Last Name" name="lastName" />
          </div> <br />
          <div className="form-group">
            <input className="input-field" type="email" placeholder="Email *" name="email" required />
          </div> <br />
          <div className="form-group">
            <textarea className="input-field" placeholder="Message" name="message"></textarea>
          </div>
          <button className="submit-button" type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
