import React, { useEffect, useState } from "react";
import "./Contact.css"; 

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className={`contact-section ${isVisible ? 'fade-in' : ''}`}>
      <div className="contact-container">
        <div className="contact-left">
          <h2>Contact Me</h2>
          <p className="contact-intro">
            Let's connect! Feel free to reach out via email or social media, or drop a message below.
          </p>
          <div className="contact-details">
            <p><span className="icon">📧</span> Email: <a href="mailto:sayon@example.com">sayon@example.com</a></p>
            <p><span className="icon">💼</span> LinkedIn: <a href="https://www.linkedin.com/in/sayan-das-a3a4a72a1" target="_blank" rel="noopener noreferrer">linkedin.com/in/sayon</a></p>
            <p><span className="icon">🐙</span> GitHub: <a href="https://github.com/Ranit68" target="_blank" rel="noopener noreferrer">https://github.com/Ranit68</a></p>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}