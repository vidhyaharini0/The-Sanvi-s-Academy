import React, { useEffect } from "react";
import duolingoImage from "../assets/duolingo-banner.jpg";
import { Link } from "react-router-dom";

function Duolingo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="duolingo-container page-container">
      <h1>Duolingo English Test Online Coaching</h1>

      <div className="duolingo-intro">
        <img
          src={duolingoImage}
          alt="Duolingo Coaching"
          className="duolingo-img"
        />
        <p>
          <strong>The Sanvi’s Academy</strong> offers expert-led online coaching
          for the <strong>Duolingo English Test (DET)</strong>, a widely
          accepted English proficiency exam for global admissions. Our program
          is designed to help students master test strategies with AI-integrated
          practice and score improvement plans.
        </p>
      </div>

      <div className="duolingo-details">
        <h2>📘 Duolingo</h2>
        <ul>
          <li>
            <strong>Total Score:</strong> 10–160
          </li>
          <li>
            <strong>Test Sections:</strong> Literacy, Comprehension,
            Conversation, and Production
          </li>
          <li>
            <strong>Duration:</strong> ~1 hour
          </li>
          <li>
            <strong>Question Types:</strong> Reading, Writing, Speaking, and
            Listening
          </li>
          <li>
            <strong>Mode:</strong> Fully Online, Taken From Home
          </li>
          <li>
            <strong>Results:</strong> Delivered within 48 hours
          </li>
        </ul>

        <h2>🎯 Why Choose Our Duolingo Coaching?</h2>
        <ul>
          <li>Targeted practice for AI-evaluated speaking & writing</li>
          <li>Complete test simulation with instant scoring insights</li>
          <li>Section-wise improvement drills & feedback</li>
          <li>Access to recorded sessions & practice materials</li>
          <li>
            Latest tips and hacks for open response & fill-in-the-blanks
            questions
          </li>
          <li>Vocabulary-building activities with daily practice</li>
          <li>
            Fluency, intonation, and clarity training for speaking responses
          </li>
          <li>Practice with real exam-style question types and difficulty</li>
        </ul>
        
        <h2>🌍 DET Accepted In</h2>
        <div className="country-grid">
          <a
            href="https://educationusa.state.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img src="https://flagcdn.com/w320/us.png" alt="USA Flag" />
              <p>United States</p>
            </div>
          </a>
          <a
            href="https://www.gov.uk/student-visa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img src="https://flagcdn.com/w320/gb.png" alt="UK Flag" />
              <p>United Kingdom</p>
            </div>
          </a>
          <a
            href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img src="https://flagcdn.com/w320/ca.png" alt="Canada Flag" />
              <p>Canada</p>
            </div>
          </a>
          <a
            href="https://www.daad.de/en/study-and-research-in-germany/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img src="https://flagcdn.com/w320/de.png" alt="Germany Flag" />
              <p>Germany</p>
            </div>
          </a>
          <a
            href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-finder/study"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img src="https://flagcdn.com/w320/au.png" alt="Australia Flag" />
              <p>Australia</p>
            </div>
          </a>
        </div>

        <h2>💰 Course Plans & Pricing</h2>
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
              <td data-label="Course">Duolingo</td>
              <td data-label="No. of Classes">12</td>
              <td data-label="Mock Tests">2</td>
              <td data-label="Benefits">Study Material, Class Recording</td>
              <td data-label="Fees">8000 INR</td>
              <td data-label="discount">10 - 15%</td>
            </tr>
          </tbody>
        </table>

        <p style={{ marginTop: "20px" }}>
          <strong>Score 120+ on your DET with our expert guidance!</strong>{" "}
          Schedule your free trial today and boost your global admission
          chances.
          <Link to="/contact"> Contact us</Link> to begin your journey.
        </p>

        <div className="course-navigation">
          <Link to="/sat" className="nav-btn">
            ⟵ Previous
          </Link>
          <Link to="/french" className="nav-btn">
            Next ⟶
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Duolingo;
