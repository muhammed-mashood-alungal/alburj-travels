import React from 'react'
import '../Banner/Banner.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSuitcaseRolling , faAddressBook} from '@fortawesome/free-solid-svg-icons'

function Banner() {
  return (
    <section id='home-section'>
 <div className='banner'>
       <div className='background-image'>
    <div className='heading-div'>
      <h1>Explore The Miracles of World  With <br /> our Agency</h1>
      <div>
        
      <button className='service-btn'> 
      <a href="#package-section">
      <FontAwesomeIcon icon={faSuitcaseRolling} />&nbsp;Packages
      </a>
      </button>
      <button className='contact-btn'>
        <a href="#contact-section" >
      <FontAwesomeIcon icon={faAddressBook} />&nbsp;Contact
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
