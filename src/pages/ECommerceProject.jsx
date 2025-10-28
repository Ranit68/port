import React from "react";
import "./ProjectPage.css";

export default function ECommerceProject() {
  return (
    <div className="project-page">
      <h1>E-Commerce App</h1>
      <p className="project-intro">
        A complete Android e-commerce application built using Java and Firebase.
        It includes features like login/register, product search, cart, wishlist,
        checkout with UPI integration, and order history.
      </p>

        <div className="screenshots">
    <img src="/images/ecom12.jpg" alt="E-Commerce App Screenshot 1" />
    <img src="/images/ecom3.jpg" alt="E-Commerce App Screenshot 2" />
    <img src="/images/ecom4.jpg" alt="E-Commerce App Screenshot 3" />
    <img src="/images/ecom5.jpg" alt="E-Commerce App Screenshot 4" />
    <img src="/images/ecom2.jpg" alt="E-Commerce App Screenshot 5" />
    <img src="/images/ecom7.jpg" alt="E-Commerce App Screenshot 6" />
    <img src="/images/ecom8.jpg" alt="E-Commerce App Screenshot 7" />
  </div>

   <div className="video-demo">
        <h2>🎬 App Demo</h2>
        <video controls className="project-video">
          <source src="/videos/ecommerce-demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

  <div className="details">
    <h3>✨ Key Features</h3>
    <ul>
      <li>User authentication with sign-up and login</li>
      <li>Home screen with category-wise product listing</li>
      <li>View detailed product information with images and prices</li>
      <li>Add or remove products from Wishlist and Cart</li>
      <li>Secure Checkout with UPI and Cash-on-Delivery options</li>
      <li>Address management – add, edit, or delete addresses</li>
      <li>Auto-fill city and state based on entered Pincode</li>
      <li>Order history view for tracking past purchases</li>
      <li>Powerful product search functionality</li>
    </ul>

    <h3>🧰 Tech Stack</h3>
    <ul>
      <li>Java (Android Studio)</li>
      <li>XML for UI Design</li>
      <li>Firebase Authentication</li>
      <li>Firebase Realtime Database</li>
      <li>API integration for data fetch and UPI payment</li>
    </ul>

<div className="button-group">
  <a
    href="https://drive.google.com/file/d/1YkwOFZY43oF_RC_5FdStL2S5NhTngL-R/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="download-btn"
  >
    View APK
  </a>

  <a
    href="https://github.com/Ranit68/MyEcommerceApp"
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
