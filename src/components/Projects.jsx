import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

const projects = [
  {
    title: "E-Commerce App",
    description: "A complete Android e-commerce app built with Java and Firebase.",
    imageUrl: "https://via.placeholder.com/250",
    route: "/projects/ecommerce",
  },
  {
    title: "EaseBook",
    description: "A hotel and trip package booking app by flutter",
    imageUrl: "https://via.placeholder.com/250",
    route: "/projects/easebook",
  },
  {
    title: "Foodify – A Zomato Clone Android App",
    description: "Foodify – A Zomato Clone Android App built with Java and Firebase, featuring restaurant listings, menu browsing, cart management, and order placement.",
    imageUrl: "https://via.placeholder.com/250",
    route: "/projects/foodie",
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="projects" className={`projects-section ${isVisible ? "fade-in" : ""}`}>
      <div className="projects-container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.imageUrl} alt={project.title} className="project-image" />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <button
                onClick={() => {
                  if (project.route !== "#") navigate(project.route);
                }}
                className="btn-view"
              >
                View Project
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
