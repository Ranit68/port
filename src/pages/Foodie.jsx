import React from "react";
import "./ProjectPage.css";

export default function Foodie() {
  return (
    <div className="project-page">
      <h1>Foodify</h1>
      <p className="project-intro">
        Foodify is a modern food delivery Android application inspired by Zomato. It allows users to explore nearby restaurants, browse menus, filter dishes by categories and dietary preferences (Veg/Non-Veg), and add items to their cart for checkout. The app also integrates Google Maps for location detection and selection, ensuring a smooth and real-world food-ordering experience.
      </p>

        <div className="screenshots">
    <img src="/images/zomato1.png" alt="E-Commerce App Screenshot 1" />
    <img src="/images/zomato2.png" alt="E-Commerce App Screenshot 2" />
    <img src="/images/zomato3.png" alt="E-Commerce App Screenshot 3" />
    <img src="/images/zomato4.png" alt="E-Commerce App Screenshot 4" />
    <img src="/images/zomato5.png" alt="E-Commerce App Screenshot 5" />
  </div>

   <div className="video-demo">
        <h2>🎬 App Demo</h2>
        <video controls className="project-video">
          <source src="/videos/zomato-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

  <div className="details">
    <h3>🚀 Key Features</h3>
    <ul>
      <li>User authentication with sign-up and login</li>
      <li>🏙️ Restaurant Listing: Fetch and display restaurants dynamically from an API.</li>
      <li>🍴 Menu Display: Organized menu with categories like Biryani, Pizza, Desserts, and more.</li>
      <li>🔍 Smart Filters: Search by restaurant or dish name, filter by Veg/Non-Veg, and category chips.</li>
      <li>🛒 Cart Management: Add multiple items with quantity selection and real-time price updates.</li>
      <li>📍 Location Detection: Auto-detect user’s current location and allow manual selection using Google Maps.</li>
      <li>💳 Checkout Screen: Simple checkout flow with name, contact, and address input.</li>
      <li>🖼️ Glide Integration: Smooth image loading and caching for restaurants and dishes.</li>
      <li>🔥 Firebase Storage: Secure backend for user and order data.</li>
    </ul>

    <h3>🧰 Tech Stack</h3>
    <ul>
      <li>Language: Java</li>
      <li>Framework: Android SDK</li>
      <li>Firebase Authentication</li>
      <li>Database: Firebase Realtime Database</li>
      <li>API Integration: Retrofit (for restaurant data fetching)</li>
      <li>Image Loading: Glide</li>
      <li>UI Design: XML (ConstraintLayout, RecyclerView, CardView, etc.)</li>
    </ul>

<div className="button-group">
  <a
    href="https://drive.google.com/file/d/1GlD4a3Ld23bldv8Yyy3lu_UtT-BIJIjk/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="download-btn"
  >
    View APK
  </a>

  <a
    href="https://github.com/Ranit68/Foodify/tree/main"
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
