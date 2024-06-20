import React from 'react'
import '../Services/Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
function Services() {
  return (
    <>
      <section className="service-section" id='service-section'>
        <div className="container">
          <div className="services-header">
            <h2>We offer professional <u>Services</u> as well</h2>
          </div>
          <div className="row services">
            <div className="service col-md-4">
              <div className='service-icon-div'>
                <h2><FontAwesomeIcon icon={faGlobe} className='globe-icon' /></h2>
              </div>
              <div className="service-content">
                <h4>Exclusive Trip</h4>
                <p>
                  Arrange various types of tour for our customers with adventure
                </p>
              </div>

            </div>

            <div className="service col-md-4">
              <div className='service-icon-div'>
                <FontAwesomeIcon icon={faGlobe} className='globe-icon' />
              </div>
              <div className="service-content">
                <h4>Professional guide</h4>
                <p>
                  Our Professional guides are always ready to guide you professionally
                </p>
              </div>

            </div>

            <div className="service col-md-4">
              <div className='service-icon-div'>
                <FontAwesomeIcon icon={faGlobe} className='globe-icon' />
              </div>
              <div className="service-content">
                <h4>Exclusive Trip</h4>
                <p>
                  Arrange various types of tour for our customers with adventure
                </p>
              </div>

            </div>



          </div>
        </div>

      </section>
    </>
  )
}

export default Services
