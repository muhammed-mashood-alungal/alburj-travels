import React from 'react';
import '../Footer/Footer.css';
import { Link } from 'react-router-dom';
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
                    
                </div>

                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <br />
                    <ul>
                        <li>
                           <Link to='/'>Home</Link>
                        </li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/packages'>Packages</Link></li>
                        <li><Link to='/contact'>Contacts</Link></li>
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

