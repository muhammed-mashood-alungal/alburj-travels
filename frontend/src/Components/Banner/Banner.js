import React, { useEffect } from 'react'
import '../Banner/Banner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcaseRolling, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import Aos from 'aos'

function Banner() {
  useEffect(()=>{
    Aos.init({
      duration:500,
      once:true
    })
  },[])
  return (
    <section id='home-section'>
      <div className='banner'>
        <div className='background-image'>
          <div className='heading-div container'>
            <h1  data-aos="fade-up">Explore The Miracles of World With <br />Al Burj Travels</h1>
            <div>

              <button className='service-btn' data-aos="fade-right">
                <a href="#package-section">
                  <FontAwesomeIcon icon={faSuitcaseRolling} />Packages
                </a>
              </button>
              <button className='contact-btn' data-aos="fade-left">
                <a href="#contact-section" >
                  <FontAwesomeIcon icon={faAddressBook} />Contact
                </a></button>
            </div>
          </div>
          <div className='shadow-div'></div>
        </div>
      </div>
    </section>


  )
}

export default Banner
