import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import satImage from "../assets/sat-banner.jpg";

function SAT() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll to top on page load

  return (
    <div className="sat-page">
      <div className="page-container">
        <h1>SAT Online Coaching</h1>

        <div className="sat-intro">
          <img src={satImage} alt="SAT Coaching" className="sat-img" />
          <p>
            <strong>The Sanvi’s Academy</strong> provides result-oriented online
            coaching for the <strong>SAT (Scholastic Assessment Test)</strong>,
            essential for undergraduate admissions in the US and other
            countries. We cover all test components with expert strategies and
            adaptive learning plans.
          </p>
        </div>

        <div className="sat-details">
          <h2>📘 SAT</h2>
          <ul>
            <li>
              <strong>Total Score:</strong> 400–1600
            </li>
            <li>
              <strong>Test Sections:</strong> Reading & Writing, Math
            </li>
            <li>
              <strong>Duration:</strong> ~2 hours 14 minutes (Digital SAT)
            </li>
            <li>
              <strong>Question Types:</strong> Multiple Choice & Grid-In
            </li>
            <li>
              <strong>Mode:</strong> Computer-Based Test
            </li>
          </ul>
          
          <h2>🎯 Why Choose Our SAT Coaching?</h2>
          <ul>
            <li>Concept-building for Reading, Writing, and Math</li>
            <li>Digital SAT practice with real-time analytics</li>
            <li>Mock exams with section-wise reports</li>
            <li>Access to a comprehensive SAT question bank</li>
            <li>24x7 access to recorded classes and doubt-clearing sessions</li>
            <li>Updated content aligned with the latest Digital SAT format</li>
            <li>
              Special focus on calculator and non-calculator math sections
            </li>
          </ul>

          <h2>🌍 SAT Accepted In</h2>
          <div className="country-grid">
            <a
              href="https://collegereadiness.collegeboard.org/sat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img src="https://flagcdn.com/w320/us.png" alt="USA Flag" />
                <p>United States</p>
              </div>
            </a>
            <a
              href="https://study-uk.britishcouncil.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img src="https://flagcdn.com/w320/gb.png" alt="UK Flag" />
                <p>United Kingdom</p>
              </div>
            </a>
            <a
              href="https://www.educanada.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img src="https://flagcdn.com/w320/ca.png" alt="Canada Flag" />
                <p>Canada</p>
              </div>
            </a>
            <a
              href="https://www.studyinsingapore.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  src="https://flagcdn.com/w320/sg.png"
                  alt="Singapore Flag"
                />
                <p>Singapore</p>
              </div>
            </a>
            <a
              href="https://studyinindia.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img src="https://flagcdn.com/w320/in.png" alt="India Flag" />
                <p>India (International Pathways)</p>
              </div>
            </a>
          </div>

          <h2>💰 SAT Course Pricing</h2>
          <table className="course-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>No. of Classes</th>
                <th>Mock Tests</th>
                <th>Benefits</th>
                <th>Fees</th>
                <th>Discount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Course" >SAT</td>
                <td data-label="No. of Classes">34</td>
                <td data-label="Mock Tests">7</td>
                <td data-label="Benefits">Study Material, Class Recording</td>
                <td data-label="Fees">22500 INR</td>
                <td data-label="discount">15 - 20%</td>
              </tr>
            </tbody>
          </table>
          
          <p style={{ marginTop: "20px" }}>
            <strong>Target a 1500+ SAT score with us!</strong> Book a free demo
            and get your personalized prep roadmap.{" "}
            <Link to="/contact">Contact us</Link> now to get started.
          </p>

          <div className="course-navigation">
            <Link to="/gre" className="nav-btn">
              ⟵ Previous
            </Link>
            <Link to="/duolingo" className="nav-btn">
              Next ⟶
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SAT;
