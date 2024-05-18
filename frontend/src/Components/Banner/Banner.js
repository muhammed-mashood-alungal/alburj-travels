import React from 'react'
import '../Banner/Banner.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlaneCircleCheck , faAddressBook} from '@fortawesome/free-solid-svg-icons'

function Banner() {
  return (
    <section id='home-section'>
 <div className='banner'>
       <div className='background-image'>
    <div className='heading-div'>
      <h1>Explore The Miracles of World  With <br /> our Agency</h1>
      <div>
      <button className='service-btn'> 
      <FontAwesomeIcon icon={faPlaneCircleCheck} />&nbsp;Services</button>
      <button className='contact-btn'>
      <FontAwesomeIcon icon={faAddressBook} />&nbsp;Contact</button>
      </div>
      </div>
   <div className='shadow-div'></div>
    </div>
    </div>
    </section>
   
   
  )
}

export default Banner
