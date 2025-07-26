import React from "react";
import { Link } from "react-router-dom"; // ✅ React Router link
import heroImage from "../assets/hero-image.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Welcome to <span className="highlight">The Sanvi’s Academy</span>
          </h1>
          <h2>Ace Your Exams & Learn Languages</h2>
          <p>
            Get top scores in globally recognized exams like IELTS, TOEFL, PTE,
            GRE, GMAT, SAT, Duolingo & more. Our experienced tutors conduct
            regular live classes to guide you towards success.
          </p>
          <Link to="/contact" className="cta-button">
            {" "}
            {/* ✅ Link for internal navigation */}
            Get Started
          </Link>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Online Coaching" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
