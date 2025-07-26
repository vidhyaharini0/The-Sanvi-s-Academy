import React from "react";
import { Link } from "react-router-dom";
import germanBanner from "../assets/german-banner.jpg";
import germanInfra from "../assets/german-infra.jpg";

function German() {
  return (
    <div className="german-container">
      <div className="page-container">
        <h1>German Language Coaching</h1>

        <div className="german-intro">
          <img
            src={germanBanner}
            alt="German Coaching Banner"
            className="german-img"
          />
          <p>
            <strong>The Sanvi’s Academy</strong> provides comprehensive coaching
            for <strong>German Language (Goethe / TestDaF / TELC)</strong>{" "}
            certifications. Courses align with the{" "}
            <strong>CEFR framework</strong> (A1 to B2 levels) and prepare
            students for exams, study, work, or immigration purposes.
          </p>
        </div>

        <div className="german-details">
          <h2>📘 Course Overview</h2>
          <ul>
            <li>
              <strong>Levels:</strong> A1 to B2 (CEFR standard)
            </li>
            <li>
              <strong>Exams:</strong> Goethe, TestDaF, TELC
            </li>
            <li>
              <strong>Skills:</strong> Hören, Lesen, Schreiben, Sprechen
              (Listening, Reading, Writing, Speaking)
            </li>
            <li>
              <strong>Mode:</strong> Online + Interactive Sessions
            </li>
            <li>
              <strong>Duration:</strong> 2–4 months per level
            </li>
          </ul>

          <h2>🎯 Why Choose Our German Classes?</h2>
          <ul>
            <li>Certified Goethe & TestDaF trainers</li>
            <li>Level-wise speaking + grammar correction sessions</li>
            <li>Exam-focused mock test series</li>
            <li>Guidance for job/study visa documentation</li>
            <li>
              Structured A1 to B2 level courses aligned with CEFR standards
            </li>
            <li>
              Level-wise grammar correction + real-life conversation sessions
            </li>
            <li>Weekend, evening, and fast-track batch options</li>
            <li>Interactive classroom tools and digital learning materials</li>
            <li>German culture & etiquette immersion through role-plays</li>
          </ul>

          <h2>💰 Course Pricing</h2>

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
                <td data-label="Course">German</td>
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
              Join our German coaching today and open doors to education and
              career in Europe!
            </strong>{" "}
            Book your <strong>free demo</strong> or{" "}
            <Link to="/contact">Contact Us</Link> to begin your language
            journey.
          </p>

          <div className="course-navigation">
            <Link to="/french" className="nav-btn">
              ⟵ Previous
            </Link>
            <Link to="/about" className="nav-btn">
              Next ⟶
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default German;
