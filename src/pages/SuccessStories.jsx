import React, { useEffect } from "react";
import { Link } from "react-router-dom";


function SuccessStories() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog-detail">
      <h1>🌟 Real Success Stories from Sanvi Students</h1>

      <p>
        Dreams don’t work unless you do — and our students proved it! Here's how
        real Sanvi learners conquered challenges, scored high in competitive
        exams, and secured admissions to top universities across the globe.
      </p>

      <h2>🎯 Ananya Sharma – IELTS Band 8.0 (UK)</h2>
      <p>
        A final-year B.Com student from Delhi, Ananya struggled with speaking
        fluency. Through personalized mock tests and fluency drills at Sanvi's
        Academy, she gained confidence and scored an impressive 8.0 Band. Today,
        she is pursuing a Master’s in Marketing at the University of Leeds.
      </p>

      <h2>🚀 Rohit Verma – GRE 320+ (USA)</h2>
      <p>
        Rohit, a working software engineer, used our late-night GRE bootcamp and
        study planner designed for professionals. With targeted vocabulary
        training, quant drills, and one-on-one sessions, he achieved 322 in GRE
        and now studies at Arizona State University in MS CS.
      </p>

      <h2>📘 Mitali Joshi – SAT 1420 (Canada)</h2>
      <p>
        Mitali dreamt of studying in Canada but faced difficulty in SAT reading
        comprehension. With Sanvi’s weekly verbal coaching and guided writing
        practice, she jumped from 1200 to 1420. She's now enrolled in the
        University of British Columbia's Business program.
      </p>

      <h2>💬 What Made Their Journey Special?</h2>
      <ul>
        <li> Personalized study plans and doubt-solving sessions</li>
        <li> Real-time mock tests with feedback</li>
        <li> Mentorship from certified trainers and counselors</li>
        <li> Mental wellness sessions during high-stress times</li>
      </ul>

      <h2>📍 From Small Towns to Global Classrooms</h2>
      <p>
        Whether you're from a metro or a small town, your dream is valid. Our
        alumni come from places like Bhopal, Surat, Kochi, and Lucknow — and now
        study in London, Boston, Tokyo, and Berlin. 🌍
      </p>

      <h2>💡 Student Advice for Future Aspirants</h2>
      <blockquote>
        “Start early, stay consistent, and always ask questions — Sanvi’s
        Academy was not just a coaching center, it was my second home.” <br />{" "}
        <em>– Ananya Sharma</em>
      </blockquote>

      <blockquote>
        “It’s okay to feel lost initially. Just keep showing up daily. The
        results will follow.” <br /> <em>– Rohit Verma</em>
      </blockquote>

      <h2>🙌 Your Story Could Be Next</h2>
      <p>
        At <strong>The Sanvi’s Academy</strong>, we believe in your potential.
        Whether you're preparing for IELTS, TOEFL, GRE, SAT, or planning your
        Study Abroad dream — we’re here to guide, mentor, and empower you every
        step of the way.
      </p>

      <p>
        Ready to create your success story? 🌟 Contact us today and start your
        journey towards global education excellence.
      </p>
      <div className="blog-navigation">
        <Link to="/blog/europe-universities" className="btn-nav">
          👈 Previous
        </Link>
        <Link to="/faq" className="btn-nav">
          Next 👉
        </Link>
      </div>
    </div>
  );
}

export default SuccessStories;
