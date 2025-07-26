import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.location.reload();
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo-section" onClick={handleHomeClick}>
        <img
          src="/images/The Sanvi's logo.png"
          alt="Sanvi Logo"
          className="globe-img"
        />
        <img
          src="/images/Academy.png"
          alt="The Sanvi's Academy"
          className="logo-text-img"
        />
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="/" onClick={handleHomeClick}>Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/testimonials">Testimonials</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
