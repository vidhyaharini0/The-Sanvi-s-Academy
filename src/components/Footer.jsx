import React from "react";
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <img className="logo-text" src="/images/Academy.png"></img>
          <p>Empowering Success Globally.</p>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <a href="mailto:thesanvisacademy@gmail.com">
              thesanvisacademy@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <FaLinkedin className="icon" />
            <a
              href="http://www.linkedin.com/in/sanvi-infolink-system"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <span>
              A23, Basement Floor, Gemini Parsn Commercial Complex,
              <br />
              Nungambakkam, Chennai, India - 600034
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">🏠 Home</Link>
          <Link to="/about">📘 About Us</Link>
          <Link to="/testimonials">💬 Testimonials</Link>
          <Link to="/blog">📝 Blog</Link>
          <Link to="/faq">📝 FAQ</Link>
          <Link to="/contact">📩 Contact</Link>
        </div>

        {/* Google Map */}
        <div className="footer-map">
          <h4>Our Location</h4>
          <iframe
            title="Sanvi's Academy Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.368305117405!2d80.24372807481953!3d13.058274987276235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266d7fcb3273f%3A0xdf21022e6cb1c40f!2sGemini%20Parsn%20Commercial%20Complex%2C%20Nungambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600034!5e0!3m2!1sen!2sin!4v1721290123456"
            width="100%"
            height="200"
            style={{ border: 0, borderRadius: "12px", marginTop: "10px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} <strong>The Sanvi's Academy</strong>.
        All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
