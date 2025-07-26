import React from "react";
import { Link } from "react-router-dom";

function Courses() {
  const courseList = [
    { name: "IELTS", path: "/ielts" },
    { name: "TOEFL", path: "/toefl" },
    { name: "PTE", path: "/pte" },
    { name: "GRE / GMAT", path: "/gre" },
    { name: "SAT", path: "/sat" },
    { name: "Duolingo", path: "/duolingo" },
    { name: "French", path: "/french" },
    { name: "German", path: "/german" },
  ];

  return (
    <section className="courses">
      <h3>Our Online Coaching Covers</h3>
      <div className="course-list">
        {courseList.map((course, index) => (
          <Link to={course.path} className="course-item" key={index}>
            {course.name}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Courses;
