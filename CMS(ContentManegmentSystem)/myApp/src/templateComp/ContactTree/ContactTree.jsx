// ContactSection.jsx

import React from "react";
import "./ContactTree.css";

function ContactTree() {
  return (
    <div className="contactSection">
      <div className="contactContainer">

        {/* LEFT SIDE */}
        <div className="contactLeft">

          <h1>Get In Touch</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed sit amet accumsan eros, sit amet auctor nunc.
            Nullam ac purus.
          </p>

          <div className="contactInfo">

            <div className="contactItem">
              <div className="contactIcon">
                <i class="fa-solid fa-location-arrow"></i>
              </div>
              <div>
                <h3>Address</h3>
                <span>London Eye, London, UK</span>
              </div>
            </div>

            <div className="contactItem">
              <div className="contactIcon">
                <i class="fa-solid fa-phone"></i>
              </div>
              <div>
                <h3>Phone Number</h3>
                <span>+123-456-7890</span>
              </div>
            </div>

            <div className="contactItem">
              <div className="contactIcon">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div>
                <h3>E-Mail</h3>
                <span>mailto@subx.com</span>
              </div>
            </div>

          </div>

          <hr />

          <div className="followSection">
            <h3>Follow Us:</h3>

            <div className="socialIcons">
              <div className="socialIcon"><i class="fa-brands fa-facebook-f"></i></div>
              <div className="socialIcon"><i class="fa-brands fa-twitter"></i></div>
              <div className="socialIcon"><i class="fa-brands fa-x-twitter"></i></div>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="contactRight">

          <h1>Send a Message</h1>

          <form className="contactForm">

            <input type="text" placeholder="Name" />

            <input type="email" placeholder="E-mail address" />

            <textarea placeholder="Message"></textarea>

            <p className="privacyText">
              By submitting you agree to the processing of your
              personal data by Subx as described in the Privacy Statement.
            </p>

            <button type="submit">Submit</button>

          </form>

        </div>

      </div>

      {/* MAP */}
      <div className="mapSection">

        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19800.80140969103!2d-0.141588!3d51.503324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876052d1c5f9fcb%3A0x3a3c0f0e7d56da58!2sLondon%20Eye!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
          loading="lazy"
          allowFullScreen
        ></iframe>

      </div>
    </div>
  );
}

export default ContactTree;