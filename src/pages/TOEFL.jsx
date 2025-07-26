import React, { useEffect } from "react";
import toeflImage from "../assets/toefl-banner.jpg";
import { Link } from "react-router-dom";

function TOEFL() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container toefl-container">
      <h1>TOEFL Online Coaching</h1>

      <div className="toefl-intro">
        <img src={toeflImage} alt="TOEFL Coaching" className="toefl-img" />
        <p>
          <strong>The Sanvi’s Academy</strong> offers expert-led online coaching
          for the
          <strong> TOEFL (Test of English as a Foreign Language)</strong>. Our
          structured training equips you to excel in the 4 sections —{" "}
          <strong>Reading, Listening, Speaking, and Writing</strong>. Suitable
          for those aiming to study or work in the USA, Canada, or other
          English-speaking countries.
        </p>
      </div>

      <div className="toefl-details">
        <h2>📘TOEFL</h2>
        <ul>
          <li>
            <strong>Total Score:</strong> 0–120 (each section scored out of 30)
          </li>
          <li>
            <strong>Test Type:</strong> iBT (Internet-Based Test)
          </li>
          <li>
            <strong>Duration:</strong> Approximately 2 hours
          </li>
          <li>
            <strong>Test Sections:</strong>
            <ul>
              <li>Reading – 35 minutes</li>
              <li>Listening – 36 minutes</li>
              <li>Speaking – 16 minutes (4 tasks)</li>
              <li>Writing – 29 minutes (2 tasks)</li>
            </ul>
          </li>
        </ul>

        <h2>🎯 Why Choose Our TOEFL Coaching?</h2>
        <ul>
          <li>Live online classes with certified TOEFL experts</li>
          <li>Updated materials with ETS-aligned strategies</li>
          <li>Time management techniques for each section</li>
          <li>Mock tests & real exam simulations</li>
          <li>Flexible schedules (weekday/weekend)</li>
          <li>
            Access to recorded sessions for revision and self-paced learning
          </li>
          <li>
            Writing task evaluation with corrections, suggestions, and scoring
          </li>
        </ul>

        <h2>🌍 TOEFL is Accepted In</h2>
        <div className="country-grid">
          {[
            {
              url: "https://www.ets.org/toefl/test-takers.html",
              flag: "us",
              name: "USA",
            },
            { url: "https://www.educanada.ca/", flag: "ca", name: "Canada" },
            {
              url: "https://www.studyinaustralia.gov.au/",
              flag: "au",
              name: "Australia",
            },
            {
              url: "https://www.studywithnewzealand.govt.nz/",
              flag: "nz",
              name: "New Zealand",
            },
            {
              url: "https://study-uk.britishcouncil.org/",
              flag: "gb",
              name: "United Kingdom",
            },
            {
              url: "https://www.study-in-germany.de/",
              flag: "de",
              name: "Germany",
            },
          ].map((country, idx) => (
            <a
              key={idx}
              href={country.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  src={`https://flagcdn.com/w320/${country.flag}.png`}
                  alt={`${country.name} Flag`}
                />
                <p>{country.name}</p>
              </div>
            </a>
          ))}
        </div>

        <h2>💰 TOEFL Course Pricing</h2>
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
              <td data-label="Course">TOEFL</td>
              <td data-label="No. of Classes">30</td>
              <td data-label="Mock Tests">4</td>
              <td data-label="Benefits">Study Material, Class Recording</td>
              <td data-label="Fees">8000 INR</td>
              <td data-label="discount"> 10 - 15%</td>
            </tr>
          </tbody>
        </table>

        <p style={{ marginTop: "20px" }}>
          <strong>Ready to boost your TOEFL score?</strong> Get started with our
          expert trainers now!
          <Link to="/contact"> Contact us</Link> for demo sessions and guidance.
        </p>

        <div className="course-navigation">
          <Link to="/ielts" className="nav-btn">
            ⟵ Previous
          </Link>
          <Link to="/pte" className="nav-btn">
            Next ⟶
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TOEFL;
