import React, { useEffect, useState } from 'react'
import '../Reviews/Reviews.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import axios from 'axios'
function Reviews({ isAdmin }) {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/api/user/reviews').then((reviewsArray) => {
      setReviews(reviewsArray.data)
    }).catch((err) => {
      alert(err)
    })
  })
  const deleteReview = (reviewId) => {
    axios.delete(`http://localhost:8000/api/user/reviews/${reviewId}`).then((response) => {
      alert('deleted Succesfully')
    }).catch((err) => {
      alert(err + 'Error While Deleting')
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
              <div className="review">
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
