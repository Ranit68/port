import React from "react";
import "./ProjectPage.css";

export default function EaseBook() {
  return (
    <div className="project-page">
      <h1>EaseBook</h1>
      <p className="project-intro">
        A modern Flutter-based hotel booking app where users can explore hotels by location, rating, or price, view room details, discover trip packages, and book stays — all stored locally using SharedPreferences.
      </p>

        <div className="screenshots">
    <img src="/images/hotel1.png" alt="E-Commerce App Screenshot 1" />
    <img src="/images/hotel2.png" alt="E-Commerce App Screenshot 2" />
    <img src="/images/hotel3.png" alt="E-Commerce App Screenshot 2" />
    <img src="/images/hotel4.png" alt="E-Commerce App Screenshot 3" />
    <img src="/images/hotel5.png" alt="E-Commerce App Screenshot 4" />
    <img src="/images/hotel6.png" alt="E-Commerce App Screenshot 5" />
    <img src="/images/hotel7.png" alt="E-Commerce App Screenshot 6" />
    <img src="/images/hotel8.png" alt="E-Commerce App Screenshot 7" />
    <img src="/images/hotel9.png" alt="E-Commerce App Screenshot 1" />
  </div>

   <div className="video-demo">
        <h2>🎬 App Demo</h2>
        <video controls className="project-video">
          <source src="/videos/hotel-demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

  <div className="details">
    <h3>✨ Key Features</h3>
    <ul>
      <li>🏠 Home & Discover Screens – Explore trending hotels, offers, and trip packages</li>
      <li>🔍 Smart Search – Find hotels by name, city, or price</li>
      <li>View detailed product information with images and prices</li>
      <li>🧳 Filter Options – Sort hotels by price, rating, or location</li>
      <li>🛏️ Detailed Room View – See room images, size, amenities, and cancellation policy</li>
      <li>💬 Reviews & Ratings – Users can view reviews before booking</li>
      <li>📦 Packages Section – Discover and book curated travel packages</li>
      <li>💾 Local Storage – Uses SharedPreferences for local data handling</li>
      <li>⚡ Clean & Modern UI – Smooth, responsive, and easy to navigate</li>
    </ul>

    <h3>🧰 Tech Stack</h3>
    <ul>
      <li>Flutter (Dart)</li>
      <li>Dart for UI Design</li>
      <li>SharedPreferences (Local storage)</li>
      <li>JSON Data Model (for hotels and rooms)</li>
    </ul>

<div className="button-group">
  <a
    href="https://drive.google.com/file/d/1PPAQivdGIOrGWmIuNK5PfaE1qGxDlvVR/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="download-btn"
  >
    View APK
  </a>

  <a
    href="https://github.com/Ranit68/EaseBook"
    target="_blank"
    rel="noopener noreferrer"
    className="github-btn"
  >
    View on GitHub
  </a>
</div>

  </div>
</div>
  );
}
