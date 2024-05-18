import React from 'react'
import '../Navbar/Navbar.css'
import  logo from '../../assets/alburj-logo.jpg'
import { useState, useEffect  } from 'react'
import { Link ,useLocation} from 'react-router-dom';
import ContactUs from '../ContactUs/ContactUs';

function Navbar() {

  const [navBackground, setNavBackground] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setNavBackground(true);
        } else {
            setNavBackground(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const location = useLocation();
    const isMainPage= location.pathname === '/'
  return (
    <div>
      <nav className={` ${navBackground ? 'navbar-scrolled' : ''}  ${isMainPage?'':'inner-page-nav'} `} >
        <div id='title-div'>
        <img src={logo} alt="logo" className='logo' />
        <h3 >Al Burj Travels</h3>
        </div>
        <ul>
          <li>
          {isMainPage ? (
             <a  className="navbar-item" href='#home-section'>Home</a>
          ) : (
            <Link to="/" className="navbar-item">Home</Link>
          )}
            </li>
          <li>
          {isMainPage ? (
             <a  className="navbar-item" href='#package-section'>Packages</a>
          ) : (
            <Link to="/packages" className="navbar-item">Packages</Link>
          )}  
          </li>
          <li>
          {isMainPage ? (
             <a  className="navbar-item" href='#contact-section'>Contact</a>
          ) : (
            <Link to="/Contact" className="navbar-item">Contact</Link>
          )}  
          </li>
          <li>
          <Link to="/signup" className="navbar-item">Sign Up</Link>
             </li>
          <li>
          <Link to="/login" >
          <button className="nav-login-btn">Login</button>
          </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
