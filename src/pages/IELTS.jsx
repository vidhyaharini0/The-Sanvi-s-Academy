import React, { useEffect } from "react";
import ieltsImage from "../assets/ielts-banner.jpg";
import { Link } from "react-router-dom";

function IELTS() {
  return (
    <div className="page-container">
      <h1>IELTS Online Coaching</h1>

      <div className="ielts-intro">
        <img src={ieltsImage} alt="IELTS Coaching" className="ielts-img" />
        <p>
          Join <strong>The Sanvi’s Academy</strong> and get trained by certified
          experts for the
          <strong>
            {" "}
            IELTS (International English Language Testing System)
          </strong>
          . Our coaching program is designed to help you achieve your target
          band score with personalized guidance, strategic practice, and
          full-length mock tests. We prepare students for both the{" "}
          <strong>Academic</strong> and
          <strong> General Training</strong> modules.
        </p>
      </div>

      <div className="ielts-details">
        <h2>📘 IELTS</h2>
        <ul>
          <li>
            <strong>Total Band Score:</strong> Scored on a 0–9 scale
          </li>
          <li>
            <strong>Test Types:</strong> Academic and General Training
          </li>
          <li>
            <strong>Total Duration:</strong> ~2 hours 45 minutes
          </li>
          <li>
            <strong>Test Sections:</strong>
            <ul>
              <li>Listening – 30 minutes</li>
              <li>Reading – 60 minutes</li>
              <li>Writing – 60 minutes</li>
              <li>Speaking – 11 to 14 minutes</li>
            </ul>
          </li>
        </ul>

        <h2>🎯 Why Choose Our IELTS Coaching?</h2>
        <ul>
          <li>Daily live online classes with expert trainers</li>
          <li>Complete study material in PDF format</li>
          <li>Band-specific strategies and time management tips</li>
          <li>Regular mock tests with performance feedback</li>
          <li>Detailed writing task evaluations</li>
          <li>Flexible batch timings (evening)</li>
          <li>Detailed feedback and correction on Writing Task 1 & 2</li>
        </ul>
        <h2>🌍 IELTS is Accepted In</h2>
        <div className="country-grid">
          {/* UK */}
          <div className="country-item">
            <a
              href="https://www.gov.uk/student-visa"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://flagcdn.com/w80/gb.png"
                alt="UK"
                className="country-flag"
              />
            </a>
            <p>United Kingdom</p>
          </div>

          {/* Australia */}
          <div className="country-item">
            <a
              href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://flagcdn.com/w80/au.png"
                alt="Australia"
                className="country-flag"
              />
            </a>
            <p>Australia</p>
          </div>

          {/* Canada */}
          <div className="country-item">
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://flagcdn.com/w80/ca.png"
                alt="Canada"
                className="country-flag"
              />
            </a>
            <p>Canada</p>
          </div>

          {/* New Zealand */}
          <div className="country-item">
            <a
              href="https://www.immigration.govt.nz/new-zealand-visas/options/study"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://flagcdn.com/w80/nz.png"
                alt="New Zealand"
                className="country-flag"
              />
            </a>
            <p>New Zealand</p>
          </div>

          {/* Ireland */}
          <div className="country-item">
            <a
              href="https://www.educationinireland.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://flagcdn.com/w80/ie.png"
                alt="Ireland"
                className="country-flag"
              />
            </a>
            <p>Ireland</p>
          </div>

          {/* Germany */}
          <div className="country-item">
            <a
              href="https://www.daad.de/en/study-and-research-in-germany/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://flagcdn.com/w80/de.png"
                alt="Germany"
                className="country-flag"
              />
            </a>
            <p>Germany</p>
          </div>
        </div>

        <h2>💰 IELTS Course Pricing</h2>
        <table className="course-table">
          <thead>
            <tr>
              <th data-label="Course">Course</th>
              <th data-label="No. of Classes">No. of Classes</th>
              <th data-label="Mock Tests">Mock Tests</th>
              <th data-label="Benefits">Benefits</th>
              <th data-label="Fees">Fees</th>
              <th data-label="discount">Discount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>IELTS</td>
              <td>25</td>
              <td>2</td>
              <td>Study Material, Class Recording</td>
              <td>8000 INR</td>
              <td>10 - 15%</td>
            </tr>
          </tbody>
        </table>

        <p style={{ marginTop: "20px" }}>
          <strong>Enroll now</strong> to start your IELTS journey!{" "}
          <Link to="/contact"> Contact us</Link> for demo sessions and details.
        </p>

        <div className="course-pagination">
          <div className="course-navigation">
            <Link to="/" className="nav-btn">
              ⟵ Previous
            </Link>
            <Link to="/toefl" className="nav-btn">
              Next ⟶
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IELTS;
