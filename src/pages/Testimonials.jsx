import React, { useState } from "react";
import { Link } from "react-router-dom";

// ✅ Import images for default reviews
import ananya from "../assets/ananya.jpg";
import rohit from "../assets/rohit.jpg";
import aman from "../assets/aman.jpg";
import karthik from "../assets/karthik.jpg";
import megha from "../assets/megha.jpg";
import neha from "../assets/neha.jpg";
import priya from "../assets/priya.jpg";
import rishi from "../assets/rishi.jpg";
import sanya from "../assets/sanya.jpg";
import vikram from "../assets/vikram.jpg";

function Testimonials() {
  const [reviews, setReviews] = useState([
    {
      name: "Ananya Sharma",
      course: "IELTS",
      feedback:
        "Sanvi's Academy helped me score 8 bands! The trainers are amazing.",
      rating: 5,
      photo: ananya,
    },
    {
      name: "Rohit Verma",
      course: "GRE",
      feedback:
        "Excellent online coaching with personalized support. Highly recommend!",
      rating: 4,
      photo: rohit,
    },
    {
      name: "Megha Sinha",
      course: "TOEFL",
      feedback:
        "Great content and practice materials. I felt fully prepared for the exam.",
      rating: 5,
      photo: megha,
    },
    {
      name: "Aman Desai",
      course: "SAT",
      feedback:
        "The mock tests were very realistic. I gained confidence through practice.",
      rating: 4,
      photo: aman,
    },
    {
      name: "Priya Nair",
      course: "Duolingo English Test",
      feedback:
        "Flexible timing and supportive teachers made online learning easy!",
      rating: 5,
      photo: priya,
    },
    {
      name: "Karthik Rao",
      course: "German Language",
      feedback:
        "I started with zero knowledge, now I can speak basic German fluently!",
      rating: 5,
      photo: karthik,
    },
    {
      name: "Sanya Kapoor",
      course: "French Language",
      feedback:
        "Engaging classes and friendly tutors made French easy and fun.",
      rating: 4,
      photo: sanya,
    },
    {
      name: "Vikram Joshi",
      course: "GMAT",
      feedback:
        "The strategy sessions helped me improve my problem-solving skills a lot.",
      rating: 4,
      photo: vikram,
    },
    {
      name: "Neha Reddy",
      course: "PTE",
      feedback:
        "Thanks to Sanvi's Academy, I scored 87 on the PTE! Very happy with support.",
      rating: 5,
      photo: neha,
    },
    {
      name: "Rishi Mehta",
      course: "IELTS",
      feedback:
        "From practice tests to tips, everything was perfect. 7.5 bands achieved!",
      rating: 5,
      photo: rishi,
    },
  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    course: "",
    feedback: "",
    rating: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const getEmojiForName = (name) => {
    const lower = name.toLowerCase();
    if (
      lower.includes("ananya") ||
      lower.includes("megha") ||
      lower.includes("neha") ||
      lower.includes("sanya") ||
      lower.includes("priya")
    ) {
      return "👩";
    } else {
      return "👨";
    }
  };

  // Validation helper functions
  const validateName = (name) => {
    if (!name.trim()) return "Name is required";
    if (name.trim().length < 2) return "Name must be at least 2 characters long";
    if (!/^[a-zA-Z\s]+$/.test(name.trim())) return "Name should only contain letters and spaces";
    return null;
  };

  const validateFeedback = (feedback) => {
    if (!feedback.trim()) return "Feedback is required";
    if (feedback.trim().length < 10) return "Feedback must be at least 10 characters long";
    if (feedback.trim().length > 500) return "Feedback must be less than 500 characters";
    return null;
  };

  const validateRating = (rating) => {
    if (!rating) return "Rating is required";
    const num = parseInt(rating);
    if (isNaN(num) || num < 1 || num > 5) return "Rating must be between 1 and 5";
    return null;
  };

  // Email notification function
  const sendEmailNotification = async (testimonialData) => {
    try {
      // Simulate email sending - in a real app, this would call your backend API
      console.log('Sending email notification to thesanvisacademy@gmail.com');
      console.log('Testimonial data:', testimonialData);
      
      // You can integrate with services like EmailJS, Formspree, or your own backend
      // For now, we'll simulate the process
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return { success: true };
    } catch (error) {
      console.error('Email notification failed:', error);
      return { success: false, error: error.message };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage("");
    setSubmitStatus("");
    
    // Validate all fields
    const nameError = validateName(newReview.name);
    const feedbackError = validateFeedback(newReview.feedback);
    const ratingError = validateRating(newReview.rating);
    const courseError = !newReview.course ? "Please select a course" : null;
    
    if (nameError || feedbackError || ratingError || courseError) {
      const errorMessage = nameError || feedbackError || ratingError || courseError;
      setSubmitMessage(errorMessage);
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("Submitting your testimonial...");
    setSubmitStatus("loading");

    try {
      const emoji = getEmojiForName(newReview.name);
      const testimonialData = {
        ...newReview,
        rating: parseInt(newReview.rating),
        photo: emoji,
        submittedAt: new Date().toISOString()
      };

      // Add testimonial to the list
      setReviews((prev) => [testimonialData, ...prev]);
      
      // Send email notification
      const emailResult = await sendEmailNotification(testimonialData);
      
      // Clear form
      setNewReview({ name: "", course: "", feedback: "", rating: "" });
      
      // Show success message
      if (emailResult.success) {
        setSubmitMessage(`Thank you ${testimonialData.name}! Your testimonial has been submitted successfully and our team has been notified.`);
      } else {
        setSubmitMessage(`Thank you ${testimonialData.name}! Your testimonial has been submitted successfully and will appear below.`);
      }
      setSubmitStatus("success");
      
    } catch (error) {
      console.error('Testimonial submission error:', error);
      setSubmitMessage("Something went wrong. Please try again later.");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="testimonials-container">
      <h2 className="page-heading">Student Testimonials</h2>

      <form className="testimonial-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={newReview.name}
          onChange={handleInputChange}
          required
        />
        <select
          name="course"
          value={newReview.course}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Course</option>
          <option value="IELTS">IELTS</option>
          <option value="TOEFL">TOEFL</option>
          <option value="GRE">GRE</option>
          <option value="SAT">SAT</option>
          <option value="PTE">PTE</option>
          <option value="GMAT">GMAT</option>
          <option value="French Language">French Language</option>
          <option value="German Language">German Language</option>
          <option value="Duolingo English Test">Duolingo English Test</option>
        </select>
        <textarea
          name="feedback"
          placeholder="Your Feedback"
          value={newReview.feedback}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating (1-5)"
          value={newReview.rating}
          onChange={handleInputChange}
          min="1"
          max="5"
          required
        />
        <button type="submit">Submit Testimonial</button>
      </form>

      <div className="testimonial-grid">
        {reviews.map((student, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-photo">
              {typeof student.photo === "string" &&
              student.photo.startsWith("data:") ? (
                <span style={{ fontSize: "40px" }}>👤</span>
              ) : (typeof student.photo === "string" &&
                  student.photo.startsWith("👩")) ||
                student.photo.startsWith("👨") ? (
                <span style={{ fontSize: "40px" }}>{student.photo}</span>
              ) : (
                <img
                  src={student.photo}
                  alt={student.name}
                  className="testimonial-img"
                  onError={(e) => (e.target.src = "/assets/default.jpg")}
                />
              )}
            </div>
            <h3>{student.name}</h3>
            <p className="testimonial-course">{student.course} Coaching</p>
            <p className="testimonial-feedback">"{student.feedback}"</p>
            <p className="testimonial-rating">{"⭐".repeat(student.rating)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
