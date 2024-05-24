import React from 'react'
import '../Reviews/Reviews.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
function Reviews() {
  return (
    <>
      <section className="container  users-review-section">
        <div className='review-header'>
            <h2>This What our <font className='highlights'>Customers Says</font> About Us</h2>
        </div>
          <div className=" reviews">
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

            <div className="">
                <div className="review">
                    <div className="review-details">
                    <h5>User Name</h5>
                      <h6>25 Aug 2020</h6>
                    </div>
                     <div className='review-content'>
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
                     <div className='review-content'>
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
                     <div className='review-content'>
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
                     <div className='review-content'>
                        <p>lorem is is a dummy data website .there we get a lot of dummt text which that we can use for out development process</p>
                     </div>
                </div>
            </div>
          </div>
      
              <div className="review-add-btn-div">
                <Link to='/review'>
               <button className='add-review-btn'>Add Your Review  <FontAwesomeIcon icon={faPlus} className='review-plus-icon' />  </button>
               </Link>
              </div>
        
      </section>
    </>
  )
}

export default Reviews
