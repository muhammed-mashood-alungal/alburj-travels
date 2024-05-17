import React from 'react'
import image from '../../assets/topdeal.jpg'
import '../Packages/Packages.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowRight,faLocationDot,faSun ,faMoon ,faStar} from '@fortawesome/free-solid-svg-icons'
function Packages() {
  return (
    <>
      <section className="container">
         <div className="package-title-div">
          <h2 className='package-title'>Here is Our <font className="highlights"> Popular Packages </font>to Explore </h2>
         </div>
         <div className="packages">
            <div className="row">
                <div className="col-md-3">
                     <div className='package'>
                        <div className="image-container">
                        <img src={image} alt="package image" className='package-image' />
                        </div>
                         <div className='package-content'>
                             <h5>Package Name</h5>
                             <p><FontAwesomeIcon icon={faLocationDot}  className='icon'/> Location Country , Region</p>
                             <p><FontAwesomeIcon icon={faSun}  className='icon'/> Days: 5 &nbsp;&nbsp;&nbsp;
                             <FontAwesomeIcon icon={faMoon}  className='icon'/> Night:5</p>
                             <p className="rating-stars">
                             <FontAwesomeIcon icon={faStar} />
                             <FontAwesomeIcon icon={faStar} />
                             <FontAwesomeIcon icon={faStar} />
                             <FontAwesomeIcon icon={faStar} />
                             <FontAwesomeIcon icon={faStar} />
                             </p>
                             <div>
                              <p>Starts From <br /><b>220 AED</b> </p>
                              <button className='package-explore-btn'>Explore <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />  </button>
                             </div>
                         </div>
                     </div>
                </div>
          
                <div className="col-md-3">
                     <div className='package'>
                        <div className="image-container">
                        <img src={image} alt="package image" className='package-image' />
                        </div>
                         <div className='package-content'>
                             <h5>Package Name</h5>
                             <p><FontAwesomeIcon icon={faLocationDot}  className='icon'/> Location Country , Region</p>
                             <p><FontAwesomeIcon icon={faSun}  className='icon'/> Days: 5 &nbsp;&nbsp;&nbsp;
                             <FontAwesomeIcon icon={faMoon}  className='icon'/> Night:5</p>
                             <p className="rating-stars">
                             <FontAwesomeIcon icon={faStar} />
                             <FontAwesomeIcon icon={faStar} />
                             <FontAwesomeIcon icon={faStar} />
                             <FontAwesomeIcon icon={faStar} />
                             <FontAwesomeIcon icon={faStar} />
                             </p>
                             <div>
                              <p>Starts From <br /><b>220 AED</b> </p>
                              <button className='package-explore-btn'>Explore <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />  </button>
                             </div>
                         </div>
                     </div>
                </div>

                <div className="col-md-3">
                     <div className='package'>
                        <div className="image-container">
                        <img src={image} alt="package image" className='package-image' />
                        </div>
                         <div className='package-content'>
                             <h5>Package Name</h5>
                             <p><FontAwesomeIcon icon={faLocationDot}  className='icon'/> Location Country , Region</p>
                             <p><FontAwesomeIcon icon={faSun}  className='icon'/> Days: 5 &nbsp;&nbsp;&nbsp;
                             <FontAwesomeIcon icon={faMoon}  className='icon'/> Night:5</p>
                             <p className="rating-stars">
                             <FontAwesomeIcon icon={faStar} />
                             <FontAwesomeIcon icon={faStar} />
                             <FontAwesomeIcon icon={faStar} />
                             <FontAwesomeIcon icon={faStar} />
                             <FontAwesomeIcon icon={faStar} />
                             </p>
                             <div>
                              <p>Starts From <br /><b>220 AED</b> </p>
                              <button className='package-explore-btn'>Explore <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />  </button>
                             </div>
                         </div>
                     </div>
                </div>

                <div className="col-md-3">
                     <div className='package'>
                        <div className="image-container">
                        <img src={image} alt="package image" className='package-image' />
                        </div>
                         <div className='package-content'>
                             <h5>Package Name</h5>
                             <p><FontAwesomeIcon icon={faLocationDot}  className='icon'/> Location Country , Region</p>
                             <p><FontAwesomeIcon icon={faSun}  className='icon'/> Days: 5 &nbsp;&nbsp;&nbsp;
                             <FontAwesomeIcon icon={faMoon}  className='icon'/> Night:5</p>
                             <p className="rating-stars">
                             <FontAwesomeIcon icon={faStar} />
                             <FontAwesomeIcon icon={faStar} />
                             <FontAwesomeIcon icon={faStar} />
                             <FontAwesomeIcon icon={faStar} />
                             <FontAwesomeIcon icon={faStar} />
                             </p>
                             <div>
                              <p>Starts From <br /><b>220 AED</b> </p>
                              <button className='package-explore-btn'>Explore <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />  </button>
                             </div>
                         </div>
                     </div>
                </div>

                <div className="col-md-3">
                     <div className='package'>
                        <div className="image-container">
                        <img src={image} alt="package image" className='package-image' />
                        </div>
                         <div className='package-content'>
                             <h5>Package Name</h5>
                             <p><FontAwesomeIcon icon={faLocationDot}  className='icon'/> Location Country , Region</p>
                             <p><FontAwesomeIcon icon={faSun}  className='icon'/> Days: 5 &nbsp;&nbsp;&nbsp;
                             <FontAwesomeIcon icon={faMoon}  className='icon'/> Night:5</p>
                             <p className="rating-stars">
                             <FontAwesomeIcon icon={faStar} />
                             <FontAwesomeIcon icon={faStar} />
                             <FontAwesomeIcon icon={faStar} />
                             <FontAwesomeIcon icon={faStar} />
                             <FontAwesomeIcon icon={faStar} />
                             </p>
                             <div>
                              <p>Starts From <br /><b>220 AED</b> </p>
                              <button className='package-explore-btn'>Explore <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />  </button>
                             </div>
                         </div>
                     </div>
                </div>

                <div className="col-md-3">
                     <div className='package'>
                        <div className="image-container">
                        <img src={image} alt="package image" className='package-image' />
                        </div>
                         <div className='package-content'>
                             <h5>Package Name</h5>
                             <p><FontAwesomeIcon icon={faLocationDot}  className='icon'/> Location Country , Region</p>
                             <p><FontAwesomeIcon icon={faSun}  className='icon'/> Days: 5 &nbsp;&nbsp;&nbsp;
                             <FontAwesomeIcon icon={faMoon}  className='icon'/> Night:5</p>
                             <p className="rating-stars">
                             <FontAwesomeIcon icon={faStar} />
                             <FontAwesomeIcon icon={faStar} />
                             <FontAwesomeIcon icon={faStar} />
                             <FontAwesomeIcon icon={faStar} />
                             <FontAwesomeIcon icon={faStar} />
                             </p>
                             <div>
                              <p>Starts From <br /><b>220 AED</b> </p>
                              <button className='package-explore-btn'>Explore <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />  </button>
                             </div>
                         </div>
                     </div>
                </div>
            </div>
           
         </div>
      </section>
    </>
  )
}

export default Packages
