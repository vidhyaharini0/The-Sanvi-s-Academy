import React, { useEffect } from "react";
import founder1 from "../assets/founder1.jpg";
import founder2 from "../assets/founder2.jpg";

import { Link } from "react-router-dom";

function About() {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <div className="about-container">
        <h2 className="page-heading">About The Sanvi’s Academy</h2>
        <p>
          At The Sanvi’s Academy, we specialize in coaching for international
          exams such as IELTS, TOEFL, GRE, GMAT, PTE, French, and German. Our
          goal is to empower students to achieve their dream of studying abroad
          through expert guidance and dedicated support.
        </p>
        <p>
          Our academy is led by experienced mentors who are passionate about
          student success. With customized training modules, result-driven
          preparation, and modern classroom infrastructure, we ensure every
          student is well-prepared to achieve excellence.
        </p>
      </div>

      <div className="founder-section">
        <h3>Meet Our Founders</h3>
        <div className="founder-profiles">
          <div className="founder-card">
            <img
              src={founder1}
              alt="Mrs. V. Sangeetha"
              style={{ width: "200px", borderRadius: "12px" }}
            />
            <h4>Mrs. V. Sangeetha</h4>
        <p style={{ textAlign: 'justify' }}>
          A Serial Entrepreneur who founded Sanvi’s Academy. She has over 10
          years of Experience in Counselling and Administration, Gained in
          both India and Singapore. Sangeetha Specializes in Guiding students
          through Global Education Pathways, Offering tailored advice on
          Test Preparation, University Selection, Visa Processes, and Career
          Alignment. Her Empathetic Approach and Strategic Insights have
          helped Hundreds of Students Secure Placements in Top Universities
          Across the UK, Europe, USA, Japan, Singapore, and Australia. Under
          her leadership, Sanvi’s Academy has grown into a Trusted
          Institution known for its Integrity, Personalized Mentorship, and
          Consistent Success Rates. With a Passion for Empowering Youth
          through Education, Sangeetha Continues to Innovate in the
          Education Space, Building Strong Global Partnerships and Mentoring
          a Growing Team of Expert Faculty and Counsellors.
        </p>
          </div>
          <div className="founder-card">
            <img
              src={founder2}
              alt="Mr. R.V. Rajan"
              style={{ width: "200px", borderRadius: "12px" }}
            />
            <h4>Mr.Vijayarajan</h4>
        <p style={{ textAlign: 'justify' }}>
          Brings over 26 years of extensive Industry Rich Experience, having
          successfully executed a wide range of Domestic and International
          Projects Across Diverse Sectors. He Possesses Deep Insights Into
          Global Education Systems, Student Mobility Trends, and Emerging
          Career Landscapes. As a Highly Respected Career Counselor and
          Education Consultant, He has Mentored Thousands of Students,
          Helping them Identify the right Academic Pathways and Align their
          Goals with Evolving Global Opportunities. His Strategic Guidance
          Covers Everything From Course Selection, University Admissions,
          and Study-Abroad Counseling to Scholarship Planning and Career
          Roadmap Development. His Holistic Mentoring Approach Empowers
          Students To make Well-Informed, Confident Decisions about their
          Academic and Professional Futures. With a Passion for Education
          and a Commitment to Student Success, He Continues to Transform
          Aspirations into Achievements.
        </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;
