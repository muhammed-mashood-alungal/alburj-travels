import React from 'react'
import '../Navbar/Navbar.css'
import logo from '../../assets/alburj-logo.jpg'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import ContactUs from '../ContactUs/ContactUs';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../../Contexts/authContext';

function Navbar() {
  const { isLoggedIn, logout, checkLoginStatus } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navBackground, setNavBackground] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };
  const location = useLocation();
  const isMainPage = location.pathname === '/'
  return (
    <div>
      <nav className={` ${navBackground ? 'navbar-scrolled' : ''}  ${isMainPage ? '' : 'inner-page-nav'} `} >
        <div id='title-div'>
          <img src={logo} alt="logo" className='logo' />
          <h3 >AL BURJ TRAVELS</h3>
        </div>
        <ul className={`navbar-items ${isMobileMenuOpen ? 'active' : ''}`}>
          <li>
            {isMainPage ? (
              <a className="navbar-item" href='#home-section'>Home</a>
            ) : (
              <Link to="/" className="navbar-item">Home</Link>
            )}
          </li>
          <li>
            {isMainPage ? (
              <a className="navbar-item" href='#package-section'>Packages</a>
            ) : (
              <Link to="/packages" className="navbar-item">Packages</Link>
            )}
          </li>
          <li>
            {isMainPage ? (
              <a className="navbar-item" href='#contact-section'>Contact</a>
            ) : (
              <Link to="/deals" className="navbar-item">Deals</Link>
            )}
          </li>
          <li>
            <Link to="/about" className="navbar-item">About</Link>
          </li>
          {!isLoggedIn &&
            <li>
              <Link to="/signup" className="navbar-item">Sign Up</Link>
            </li>
          }
          <li>
            {
              isLoggedIn ? <button className="nav-login-btn" onClick={logout}>Log Out</button> :
                <Link to="/login" >
                  <button className="nav-login-btn">Login</button>
                </Link>
            }

          </li>
        </ul>
        <button className="nav-menu-button" onClick={toggleMobileMenu}>
          {
            isMobileMenuOpen ? <FontAwesomeIcon icon={faCircleXmark} /> :
              <FontAwesomeIcon icon={faEllipsisVertical} />

          }

        </button>
      </nav>
    </div>
  )
}

export default Navbar
