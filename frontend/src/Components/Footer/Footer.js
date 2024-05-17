import React from 'react';
import '../Footer/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h1 className="logo-text"><span>Al Burj Travels</span> </h1>
                    <p>
                        Welcome to our travel agency! We offer the best deals and travel packages
                        to make your trips unforgettable. Explore the world with us.
                    </p>
                    <div className="contact">
                        <span> &nbsp; +1 234 567 890</span>
                        <span> &nbsp; info@travelagency.com</span>
                    </div>
                    <div className="socials">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>

                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <br />
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

               
            </div>

            <div className="footer-bottom">
                &copy; travelagency.com | Designed by YourName
            </div>
        </footer>
    );
}

export default Footer;

