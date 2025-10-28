import React, { useEffect, useState } from "react";
import "./About.css";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className={`about-section ${isVisible ? 'fade-in' : ''}`}>
      <div className="about-container">
        <div className="about-left">
          <h2>About Me</h2>
          <p className="about-intro">
            My name is <span className="highlight">Sayan Das</span>, and I'm a passionate Full-Stack Developer with expertise in creating modern, interactive web and mobile applications. I specialize in technologies like React, JavaScript, HTML, CSS, and Android development to build seamless digital experiences.
          </p>
          <p className="about-details">
            As an <span className="role">Android Developer 📱</span> and <span className="role">Web Developer 💻</span>, I focus on clean code, user-centric design, and innovative solutions. Whether it's crafting responsive websites or intuitive mobile apps, I thrive on turning ideas into reality.
          </p>
        </div>

        <div className="about-right">
          <h3>My Skills</h3>
          <ul className="skills-list">
            <li className="skill-item">React & JavaScript</li>
            <li className="skill-item">HTML & CSS</li>
            <li className="skill-item">Android Development</li>
            <li className="skill-item">UI/UX Design</li>
            <li className="skill-item">Problem Solving</li>
            <li className="skill-item">Java</li>
            <li className="skill-item">Spring-Boot</li>
            <li className="skill-item">MySql</li>
            <li className="skill-item">Firebase</li>
          </ul>
        </div>
      </div>
    </section>
  );
}