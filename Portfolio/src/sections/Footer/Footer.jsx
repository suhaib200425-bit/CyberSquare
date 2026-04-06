import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      
      {/* Left */}
      <div className="footer-left">
        © 2026 SUHAIB
      </div>

      {/* Center */}
      <div className="footer-center">
        <h5 className="mb-4">Sections</h5>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Services</a>
      </div>

      {/* Right */}
      <div className="footer-right">
        <h5 className="mb-4">Categorys</h5>
        <a href="#">Tech</a>
        <a href="#">Design</a>
        <a href="#">Blog</a>
      </div>

    </footer>
  );
}

export default Footer;