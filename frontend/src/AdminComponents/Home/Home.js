import React from 'react'
import '../Home/Home.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
            import { faUsers,faComments,faEnvelope,faSuitcaseRolling,faPlaneUp,faUserTie
              ,faTrash
            } from '@fortawesome/free-solid-svg-icons'
function Home() {
  return (
    <>
    
      <div className="admin-home-section  ">
        <h2>Admin Panel</h2>
        <hr />
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="stats">
            <FontAwesomeIcon className='stats-icon' icon={faUsers} />
            <h5>Total Users</h5>
            <h3>50+</h3>
            </div>
          </div>
          <div className="col-md-3  col-sm-6">
            <div className="stats">
            <FontAwesomeIcon className='stats-icon' icon={faComments} />
            
            <h5>Enquiries in Whatsapp</h5>
            <h3>50+</h3>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
          <div className="stats">
          <FontAwesomeIcon className='stats-icon' icon={faEnvelope} />
          <h5>Enquiries in Email</h5>
          <h3>50+</h3>
              </div>
          </div>
          <div className="col-md-3 col-sm-6">
          <div className="stats">
          <FontAwesomeIcon className='stats-icon' icon={faSuitcaseRolling} />
          <h5>Total Packages</h5>
          <h3>50+</h3>
              </div>
          </div>
          <div className="col-md-3 col-sm-6">
          <div className="stats">
          <FontAwesomeIcon className='stats-icon' icon={faPlaneUp} />
          <h5>Total Deals</h5>
          <h3>50+</h3>
              </div>
          </div>
          <div className="col-md-3 col-sm-6">
          <div className="stats">
          <FontAwesomeIcon className='stats-icon' icon={faUserTie} />
          <h5>Total Admins</h5>
          <h3>50+</h3>
              </div>
          </div>
        </div>

        <div className="review-section">
          <h3>Reviews </h3>
          <hr />
          <div className='reviews'>
          <div className=" ">
                <div className="review">
                    <div className="review-details">
                      <div className="flex user-trash-div">
                      <h5>User Name</h5>
                      <FontAwesomeIcon icon={faTrash} className='trash-icon' />
                      </div>
                      <h6>25 Aug 2020</h6>
                    </div>
                     <div className='review-content '>
                        <p>lorem is is a dummy data website .there we get a lot of dummt text which that we can use for out development process</p>
                     </div>
                </div>
            </div>

            <div className=" ">
                <div className="review">
                    <div className="review-details">
                    <h5>User Name</h5>
                      <h6>25 Aug 2020</h6>
                    </div>
                     <div className='review-content '>
                        <p>lorem is is a dummy data website .there we get a lot of dummt text which that we can use for out development process</p>
                     </div>
                </div>
            </div>

            <div className=" ">
                <div className="review">
                    <div className="review-details">
                    <h5>User Name</h5>
                      <h6>25 Aug 2020</h6>
                    </div>
                     <div className='review-content '>
                        <p>lorem is is a dummy data website .there we get a lot of dummt text which that we can use for out development process</p>
                     </div>
                </div>
            </div>

            <div className=" ">
                <div className="review">
                    <div className="review-details">
                    <h5>User Name</h5>
                      <h6>25 Aug 2020</h6>
                    </div>
                     <div className='review-content '>
                        <p>lorem is is a dummy data website .there we get a lot of dummt text which that we can use for out development process</p>
                     </div>
                </div>
            </div>

            <div className=" ">
                <div className="review">
                    <div className="review-details">
                    <h5>User Name</h5>
                      <h6>25 Aug 2020</h6>
                    </div>
                     <div className='review-content '>
                        <p>lorem is is a dummy data website .there we get a lot of dummt text which that we can use for out development process</p>
                     </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Home
