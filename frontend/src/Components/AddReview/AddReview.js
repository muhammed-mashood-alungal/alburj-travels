import React, { useState } from 'react'
import '../AddReview/AddReview.css'
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function AddReview() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [reviewData, setReviewData] = useState({})
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:8000/api/user/reviews', data);
      if (response) {
        navigate('/')
      }
    } catch (error) {
      alert('Process failed. Try Again....')
    }
  };
  return (
    <>
      <section className='add-review-section container'>
        <form action="" onSubmit={handleSubmit(onSubmit)} >
          <div className="add-review-div">
            <h2>What do you have to say about Us?</h2>

            <input type="text" className='review-input' placeholder='Enter Your Name' value={reviewData.name}
              {...register('name', { required: { value: true, message: 'Please Enter a Name' } })}
              onChange={(e) => setReviewData({ ...reviewData, name: e.target.value })} />
            {errors?.name?.message && <p className="review-err-msg">{errors?.name?.message}</p>}


            <textarea name="" id="" className='review-comment-input' placeholder='Enter Your Comment About our Services...'
              value={reviewData.comment}
              {...register('comment', { required: { value: true, message: 'Please Enter YOur Comment' } })}
              onChange={(e) => setReviewData({ ...reviewData, comment: e.target.value })}></textarea>
            {errors?.comment?.message && <p className="review-err-msg">{errors?.comment?.message}</p>}

            <button className='add-review-btn'>Submit</button>

          </div>
        </form>
      </section>
    </>
  )
}

export default AddReview
