import React from 'react'
import '../AddReview/AddReview.css'
function AddReview() {
  return (
    <>
      <section className='add-review-section container'>
        <div className="add-review-div">
          <h2>What do you have to say about Us?</h2>
          <form action="">
            <input type="text" className='review-input' placeholder='Enter Your Name'/>
            <textarea name="" id="" className='review-comment-input'placeholder='Enter Your Comment About our Services...'></textarea><br />
             <button className='add-review-btn'>Submit</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default AddReview
