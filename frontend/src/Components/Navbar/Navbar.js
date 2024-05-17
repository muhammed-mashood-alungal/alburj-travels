import React from 'react'
import '../Navbar/Navbar.css'
import  logo from '../../assets/alburj-logo.jpg'
import { useState, useEffect } from 'react'

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


  return (
    <div>
      <nav className={` ${navBackground ? 'navbar-scrolled' : ''}`}>
        <div id='title-div'>
        <img src={logo} alt="logo" className='logo' />
        <h3 >Al Burj Travels</h3>
        </div>
        <ul>
          <li>
          <a href="#">Home</a>
            </li>
          <li>
            <a href="#">Packages</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
             </li>
          <li><button className="login-btn">Login</button></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
