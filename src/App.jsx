import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import ECommerceProject from "./pages/ECommerceProject";
import Foodie from "./pages/Foodie";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Portfolio Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route
          path="/projects/ecommerce"
          element={
            <>
              <ECommerceProject />
            </>
          }
        />
        <Route
        path="/projects/foodie"
        element={
          <>
          <Foodie />
          </>
        }
        />
      </Routes>
    </Router>
  );
}

export default App;
