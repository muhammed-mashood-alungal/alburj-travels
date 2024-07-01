import React, { useEffect, useState } from 'react'
import '../Reviews/Reviews.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import axios from 'axios'
import Aos from 'aos'
function Reviews({ isAdmin }) {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/api/user/reviews').then((reviewsArray) => {
      setReviews(reviewsArray.data)
      console.log(reviewsArray.data)
    }).catch((err) => {
      console.log(err)
    })
    Aos.init({
      duration:500,
      once:true
    })
  },[])
  const deleteReview = (reviewId) => {
    axios.delete(`http://localhost:8000/api/user/reviews/${reviewId}`).then((response) => {
      alert('deleted Succesfully')
    }).catch((err) => {
      console.log(err)
      alert('Error While Deleting')
    })
  }
  return (
    <>
      <section className="container  users-review-section">
        <div className='review-header'>
          <h2>This What our <font className='highlights'>Customers Says</font> About Us</h2>
        </div>
        <div className=" reviews">
          {reviews?.map((review, index) => {
            return <div className=" ">
              <div className="review" data-aos="fade-up">
                <div className="review-details">
                  <h5>{review.name}</h5>
                </div>
                <div className='review-content '>
                  <p>{review.comment}</p>
                </div>
                {
                  isAdmin ? <div className='flex' onClick={() => { deleteReview(review._id) }}>
                    <FontAwesomeIcon icon={faTrash} className='review-plus-icon' />&nbsp; <h6>Delete</h6>
                  </div> : ''
                }

              </div>
            </div>
          })}


        </div>
        {
          !isAdmin && <div className="review-add-btn-div">
            <Link to='/review'>
              <button className='add-review-btn'>Add Your Review  <FontAwesomeIcon icon={faPlus} className='review-plus-icon' />  </button>
            </Link>
          </div>
        }


      </section>
    </>
  )
}

export default Reviews
