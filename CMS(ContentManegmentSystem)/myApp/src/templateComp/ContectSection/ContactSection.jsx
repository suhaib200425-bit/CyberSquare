import React from "react";
import "./ContactSection.css";

function ContactSection() {
  return (
    <div className="contact-section">
      <h2 className="contact-title">
        Get in touch, let us know <br />
        how we can help
      </h2>

      <div className="contact-card">
        <div className="map-container">
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3919.0779733983804!2d76.174488!3d10.80534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDQ4JzE5LjIiTiA3NsKwMTAnMjguMiJF!5e0!3m2!1sen!2sin!4v1778039962114!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
          
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19800.80140969103!2d-0.141588!3d51.503324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876052d1c5f9fcb%3A0x3a3c0f0e7d56da58!2sLondon%20Eye!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
          loading="lazy"
          allowFullScreen
        ></iframe>
        </div>

        <form className="contact-form">
          <div className="input-row">
            <div className="input-group">
              <label>Your Name</label>
              <input type="text" placeholder="Your name" />
            </div>

            <div className="input-group">
              <label>Email address</label>
              <input type="email" placeholder="Your email address" />
            </div>
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea placeholder="Write something..."></textarea>
          </div>

          <button type="submit" className="send-btn">
            Send Message
          </button>
        </form>
      </div>

      <div className="contact-info-wrapper">
        <div className="info-card">
          <div className="icon">✉</div>

          <div>
            <p>Email address</p>
            <h4>Halo@Lumora.Com</h4>
          </div>
        </div>

        <div className="info-card">
          <div className="icon">📞</div>

          <div>
            <p>Phone Number</p>
            <h4>+ 00 123 456 788</h4>
          </div>
        </div>

        <div className="info-card">
          <div className="icon">📍</div>

          <div>
            <p>Our Location</p>
            <h4>Central Java, Indonesia</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;