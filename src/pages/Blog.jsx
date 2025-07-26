import React, { useState } from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    link: "/blog/ielts-tips",
    title: "How to Score 8+ Bands in IELTS",
    desc: "Learn smart IELTS preparation tips with strategies for Listening, Reading, Writing, and Speaking. Discover time-tested tips from top scorers and certified trainers.",
  },
  {
    link: "/blog/study-abroad-2025",
    title: "Study Abroad in 2025: Trends & Tips",
    desc: "Understand emerging admission trends in the UK, Europe, and Japan. Get expert advice on profile building, university shortlisting, and deadlines.",
  },
  {
    link: "/blog/toefl-vs-duolingo",
    title: "IELTS vs. TOEFL vs. Duolingo vs. PTE",
    desc: "Choosing the right English test? We break down key differences in format, scoring, preparation time, and university acceptability.",
  },
  {
    link: "/blog/gre-vocabulary",
    title: "Master Your Vocabulary for GRE/SAT",
    desc: "Build a strong vocabulary bank with smart memorization techniques — essential for GRE verbal reasoning and SAT critical reading success.",
  },
  {
    link: "/blog/student-visa-interview",
    title: "Student Visa Interview Preparation",
    desc: "Nervous about your student visa interview? Learn how to present yourself confidently and avoid common pitfalls with our expert guidance.",
  },
  {
    link: "/blog/best-apps-2025",
    title: "Best Language Learning Apps for 2025",
    desc: "Explore the top language learning apps to boost fluency from your mobile — ideal for busy learners.",
  },
  {
    link: "/blog/speaking-mistakes",
    title: "Top Mistakes Students Make in Speaking Tests",
    desc: "Avoid common speaking test errors in IELTS, TOEFL, and PTE with practical tips to improve fluency, coherence, and confidence.",
  },
  {
    link: "/blog/europe-universities",
    title: "Exploring European Universities: A Guide",
    desc: "Explore tuition-free education in Germany to scholarships in Italy and France.",
  },
];

function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  // Get current page's posts
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="page-section blog-section">
      <h2 className="blog-title">Student Blogs & Study Tips</h2>
      <p className="blog-intro">
        Welcome to <strong>The Sanvi’s Academy</strong> Blog — your trusted
        companion for <strong>IELTS preparation</strong>,{" "}
        <strong>TOEFL strategies</strong>, <strong>GRE/SAT success tips</strong>
        , and <strong>study abroad guidance</strong>.
      </p>
      <p className="blog-intro">
        With insights from certified trainers, visa experts, and real student
        journeys, our blog is packed with actionable advice.
      </p>

      <div className="blog-articles">
        {currentPosts.map((post, idx) => (
          <Link to={post.link} className="blog-card" key={idx}>
            <h3>{post.title}</h3>
            <p>{post.desc}</p>
          </Link>
        ))}
      </div>

      <div
        className="pagination-controls"
        style={{ textAlign: "center", marginTop: "30px" }}
      >
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          style={buttonStyle}
        >
          ⟵ Previous
        </button>
        <span style={{ margin: "0 15px" }}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          style={buttonStyle}
        >
          Next ⟶
        </button>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "10px 20px",
  margin: "0 5px",
  backgroundColor: "#3b82f6",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "1rem",
};

export default Blog;
