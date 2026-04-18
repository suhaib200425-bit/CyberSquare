import React from 'react'
import './FooterSection.css'
function FooterSection() {
    return (
        <footer className="footer">
            <div className="footer-container row">

                {/* Left Section */}
                <div className="footer-col brand-col">
                    <h2 className="footer-logo">🎓 LearnHub</h2>
                    <p className="footer-text">
                        Empowering learners worldwide with premium courses from top instructors.
                        Start your learning journey today.
                    </p>

                    <div className="social-icons">
                        <a href="#"><i class="bi bi-facebook"></i></a>
                        <a href="#"><i class="bi bi-twitter"></i></a>
                        <a href="#"><i class="bi bi-instagram"></i></a>
                        <a href="#"><i class="bi bi-youtube"></i></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/courses">Courses</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/r
                        egister">Sign Up</a></li>
                    </ul>
                </div>

                {/* Categories */}
                <div className="footer-col">
                    <h3>Categories</h3>
                    <ul>
                        <li><a href="#">Web Development</a></li>
                        <li><a href="#">Data Science</a></li>
                        <li><a href="#">Design</a></li>
                        <li><a href="#">Business</a></li>
                        <li><a href="#">Mobile Development</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="footer-col">
                    <h3>Contact Info</h3>
                    <ul className="contact-info">
                        <li>✉ support@learnhub.com</li>
                        <li>📞 +1 (555) 123-4567</li>
                        <li>📍 San Francisco, CA 94102</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 LearnHub. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default FooterSection