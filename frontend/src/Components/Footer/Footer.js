import React, { useEffect, useState } from 'react';
import '../Footer/Footer.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Footer = () => {
    const [companyInfo, setCompanyInfo] = useState({})
    useEffect(() => {
        const fetchCompanyDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/admin/company`);
                setCompanyInfo(response.data)
            } catch (error) {
                alert('Error fetching deal details:', error);
            }
        };
        fetchCompanyDetails();

    }, [])
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h1 className="logo-text"><span>{companyInfo.name}</span> </h1>
                    <p>
                        Welcome to our travel agency! We offer the best deals and travel packages
                        to make your trips unforgettable. Explore the world with us.
                    </p>
                    <div className="contact">
                        <span> &nbsp; {companyInfo.phone}</span>
                        <span> &nbsp; {companyInfo.email}</span>
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

