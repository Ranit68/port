import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import profile from "../assets/profile1.jpg";
import "./Hero.css";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); 
  }, []);

  return (
    <section id="hero" className={`hero-section ${isVisible ? 'fade-in' : ''}`}>
      <div className="hero-container">
        <div className="hero-left">
          <h3 className="intro">Hello 👋</h3>
          <h1>
            I’m <span className="highlight">Sayan Das</span>
          </h1>
          <h2 className="typewriter-text">
            <Typewriter
              words={[
                "Web Developer 💻",
                "Android Developer 📱",
                "Creative Designer 🎨",
                "Tech Enthusiast 🚀",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </h2>

          <p className="hero-subtext">
            Passionate about crafting seamless digital experiences through
            elegant design and clean code.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              className="btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Resume
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="image-glow">
            <img src={profile} alt="Sayan Das" className="profile-img" />
            <div className="floating-ring"></div>
          </div>
        </div>
      </div>
    </section>
  );
}