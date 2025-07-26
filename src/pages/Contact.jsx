import React, { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    course: "",
    education: "",
    country: "",
    startDate: "",
    endDate: "",
    address: "",
    phone: "",
    whatsapp: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMail = async () => {
    if (isSubmitting) return;
    
    // Validate all form fields are filled
    const { name, age, course, education, country, startDate, endDate, address, phone, whatsapp } = formData;
    
    if (!name || !age || !course || !education || !country || !startDate || !endDate || !address || !phone || !whatsapp) {
      setSubmitMessage("⚠️ Please fill all fields before clicking submit.");
      return;
    }
    
    setIsSubmitting(true);
    setSubmitMessage("");
    
    try {
      // For now, this is a placeholder - in a real implementation,
      // you would integrate with a backend service to send emails
      const {
        name,
        age,
        course,
        education,
        country,
        startDate,
        endDate,
        address,
        phone,
        whatsapp,
      } = formData;

      const emailData = {
        to: 'thesanvisacademy@gmail.com',
        subject: 'New Admission Enquiry',
        body: `📚 New Admission Enquiry\n\n👤 Name: ${name}\n🎂 Age: ${age}\n🎓 Course: ${course}\n📘 Education Level: ${education}\n🌍 Country Interested: ${country}\n🗓️ Start Date: ${startDate}\n🗓️ End Date: ${endDate}\n🏠 Address: ${address}\n📞 Phone No: ${phone}\n📱 WhatsApp No: ${whatsapp}`,
      };

      // Simulate form processing delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // This would typically send to your backend API
      console.log('Email data to send:', emailData);
      
      // Show success message
      setSubmitMessage("✅ Form submitted successfully! Email sent to thesanvisacademy@gmail.com");
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          age: "",
          course: "",
          education: "",
          country: "",
          startDate: "",
          endDate: "",
          address: "",
          phone: "",
          whatsapp: "",
        });
        setSubmitMessage("");
      }, 3000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitMessage("❌ Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="contact">
      <div className="contact-container">
        <h2 className="page-heading">📞 Contact Us</h2>
        <p>📱 Phone: +91 99664 28787</p>
        <p>
          📧 Email:{" "}
          <a href="mailto:thesanvisacademy@gmail.com">
            thesanvisacademy@gmail.com
          </a>
        </p>
        <p>
          💬 WhatsApp:{" "}
          <a href="https://wa.me/919966428787" target="_blank" rel="noreferrer">
            Click to Chat
          </a>
        </p>
        <p>
          🔗 LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/sanvi-infolink-system" target="_blank" rel="noreferrer">
            Visit Profile
          </a>
        </p>
        <p>
          📸 Instagram:{" "}
          <a href="https://www.instagram.com/thesanvisabroadxperts" target="_blank" rel="noreferrer">
            Visit Profile
          </a>
        </p>

        <p>
          📍 Location:{" "}
          <a
            href="https://www.google.com/maps/search/?api=1&query=A23,+Basement+Floor,+Gemini+Parsn+Commercial+Complex,+Nungambakkam,+Chennai,+India+-+600034"
            target="_blank"
            rel="noopener noreferrer"
          >
            A23, Basement Floor, Gemini Parsn Commercial Complex, Nungambakkam,
            Chennai, India – 600034
          </a>
        </p>

        <h3>📝 Send Your Details</h3>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="name"
            placeholder="👤 Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="🎂 Age"
            value={formData.age}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="📞 Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            pattern="[0-9]{10,15}"
            title="Please enter a valid phone number (10-15 digits)"
            required
          />
          <input
            type="tel"
            name="whatsapp"
            placeholder="💬 Your WhatsApp Number"
            value={formData.whatsapp}
            onChange={handleChange}
            pattern="[0-9]{10,15}"
            title="Please enter a valid WhatsApp number (10-15 digits)"
            required
          />

          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">🎓 -- Select Course --</option>
            <option value="IELTS">IELTS</option>
            <option value="TOEFL">TOEFL</option>
            <option value="PTE">PTE</option>
            <option value="GMAT">GMAT</option>
            <option value="GRE">GRE</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>

          <select
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          >
            <option value="">📘 -- Select Education Level --</option>
            <option value="10th">10th</option>
            <option value="12th">12th</option>
            <option value="Diploma">Diploma</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Graduate">Graduate</option>
            <option value="Postgraduate">Postgraduate</option>
          </select>

          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="">🌍 -- Select Preferred Country --</option>
            <option value="Europe">Europe</option>
            <option value="Italy">Italy</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Japan">Japan</option>
            <option value="Singapore">Singapore</option>
            <option value="UK">UK</option>
            <option value="USA">USA</option>
            <option value="Syria">Syria</option>
            <option value="Germany">Germany</option>
            <option value="China">China</option>
            <option value="Australia">Australia</option>
            <option value="Poland">Poland</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Others">Others</option>
          </select>

          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
          <textarea
            name="address"
            placeholder="🏠 Your Address"
            value={formData.address}
            onChange={handleChange}
            rows="3"
            required
          ></textarea>

          <button 
            type="submit" 
            onClick={sendMail}
            disabled={isSubmitting}
            style={{
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? "not-allowed" : "pointer"
            }}
          >
            {isSubmitting ? "⏳ Sending..." : "🚀 Send via Mail"}
          </button>
          
          {submitMessage && (
            <div
              style={{
                marginTop: "15px",
                padding: "12px",
                border: submitMessage.includes("✅") ? "2px solid #4CAF50" : "2px solid #f44336",
                backgroundColor: submitMessage.includes("✅") ? "#e8f5e8" : "#fdeaea",
                borderRadius: "8px",
                fontSize: "16px",
                color: submitMessage.includes("✅") ? "#2e7d32" : "#c62828",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                fontWeight: "500"
              }}
            >
              {submitMessage}
            </div>
          )}
          
          <div
            style={{
              marginTop: "15px",
              padding: "10px",
              border: "1px solid #ccc",
              backgroundColor: "#f9f9f9",
              borderRadius: "8px",
              fontSize: "14px",
              color: "#444",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
            }}
          >
            📩 The submitted information will be forwarded to:{" "}
            <strong>thesanvisacademy@gmail.com</strong>
          </div>
        </form>

      </div>
    </div>
  );
}

export default Contact;
