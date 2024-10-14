import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, message } = formData;

    // Construct the WhatsApp message
    const whatsappMessage = `Hello, my name is ${firstName} ${lastName}. You can reach me at ${email}. My message is: ${message}`;

    // Encode the message to use it in the URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp API URL with the pre-filled message
    const whatsappURL = `https://wa.me/918807882393?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact</h2>
        <br />
        <p><FaMapMarkerAlt className="icon" />6A PERIYASAMY STREET, KOVILPATTY ROAD, MANAPARAI 621306</p>
        <br />
        <a href="tel:+91 8807882393"><p><FaPhone className="icon" /> +91 8807882393</p></a>
        <br />
        <a href="mailto:jayaprakash@rootedrevenue.in"><p><FaEnvelope className="icon" /> jayaprakash@rootedrevenue.in</p></a>
        <br />
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=100005916753482" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://wa.me/918807882393" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/jayaprakash-kannan-2b1946b5/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
         
        </div>
      </div>
      <br />
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              className="input-field"
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              className="input-field"
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              className="input-field"
              type="email"
              placeholder="Email *"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <textarea
              className="input-field"
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button className="submit-button" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
