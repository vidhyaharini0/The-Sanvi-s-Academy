import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import frenchBanner from "../assets/french-banner.jpg";
import frenchInfra from "../assets/french-infra.jpg";

function French() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="french-container">
      <h1>French Language Coaching</h1>

      <div className="french-intro">
        <img
          src={frenchBanner}
          alt="French Coaching Banner"
          className="french-img"
        />
        <p>
          <strong>The Sanvi’s Academy</strong> offers structured coaching for
          <strong> French (DELF / DALF / TEF / TCF)</strong> preparation,
          suitable for students, professionals, and immigration aspirants. Our
          program is CEFR-aligned (A1 to B2 levels), led by experienced language
          instructors.
        </p>
      </div>

      <div className="french-details">
        <h2>📘 Course Overview</h2>
        <ul>
          <li>
            <strong>Levels:</strong> A1, A2, B1, B2
          </li>
          <li>
            <strong>Duration:</strong> 2–4 months per level
          </li>
          <li>
            <strong>Tests:</strong> DELF, DALF, TEF, TCF
          </li>
          <li>
            <strong>Skills:</strong> Listening, Speaking, Reading, Writing
          </li>
          <li>
            <strong>Mode:</strong> Online + On-demand practice
          </li>
        </ul>

        <h2>🎯 Why Learn French with Us?</h2>
        <ul>
          <li>Certified native and bilingual trainers</li>
          <li>Mock tests with CEFR-based evaluation</li>
          <li>Spoken & written French immersion training</li>
          <li>Flexible batches (weekday/weekend)</li>
          <li>Job and study-abroad French readiness</li>
          <li>Structured curriculum aligned with CEFR (A1 to B2 levels)</li>
          <li>Spoken & written French immersion with real-world scenarios</li>
          <li>Mock tests and personalized feedback on all modules</li>
        </ul>

        <h2>💰 French Course Pricing</h2>

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
              <td data-label="Course">French</td>
              <td data-label="No. of Classes">45</td>
              <td data-label="Mock Tests">3</td>
              <td data-label="Benefits">Study Material, Class Recording</td>
              <td data-label="Fees">15000 INR</td>
              <td data-label="discount">15 - 20%</td>
            </tr>
          </tbody>
        </table>

        <p style={{ marginTop: "20px" }}>
          <strong>
            Become fluent in French and unlock global opportunities!
          </strong>{" "}
          Book your <strong>free demo</strong> today and receive your
          personalized learning roadmap.
          <Link to="/contact">Contact Us</Link> to begin.
        </p>

        <div className="course-navigation">
          <Link to="/duolingo" className="nav-btn">
            ⟵ Previous
          </Link>
          <Link to="/german" className="nav-btn">
            Next ⟶
          </Link>
        </div>
      </div>
    </div>
  );
}

export default French;
