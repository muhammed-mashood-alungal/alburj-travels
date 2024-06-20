import React, { useState, useEffect } from 'react'
import '../EachDeals/EachDeals.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios'
import { useForm } from 'react-hook-form';

function EachDeals({ isAdmin }) {
  const { dealId } = useParams();
  const [startingDate, setStartingDate] = useState(null);
  const [lastDate, setLastDate] = useState(null);
  const [dealDetails, setDealDetails] = useState({})
  const [isGuestUser, setIsGuestUser] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [bookingData, setBookingData] = useState({})

  useEffect(() => {
    try {
      const fetchDealDetails = async () => {
        const response = await axios.get(`http://localhost:8000/api/topDeals/${dealId}`)
        console.log(response.data)
        setDealDetails(response.data)
        console.log(isAdmin)
      }
      fetchDealDetails()

    } catch (err) {
      console.log(err)
    }

  }, [])

  const handleStartDateChange = (date) => {
    setStartingDate(date);
  };
  const handleEndDateChange = (date) => {
    setLastDate(date);
  };
  const imageUrl = require(`../../uploads/deals/${dealId}.jpg`)

  const onSubmit = async (data) => {
    try {

      data.startingDate = startingDate
      data.lastDate = lastDate
      const response = await axios.post('http://localhost:8000/api/user/book/deal/whatsapp', data);
      window.open(response.data, '_blank')
    } catch (error) {
      alert('error returned' + error)
    }
  };
  return (
    <>
      <section className='each-deal-section container'>
        <div className="row">
          <div className="details-section col-md-8 col-sm-12">
            <Link to='/deals' className='link'>
              <h2>Top Deals </h2>
            </Link>

            <div className="deal-images">
              <div className="deal-mian-img-div">
                <img src={imageUrl} alt="" className="deal-main-img" />
              </div>


            </div>
            <div className="deal-content-div">
              <h5><font className="highlights">Origin </font> : {dealDetails?.from}</h5>
              <h5><font className="highlights">Destination </font> : {dealDetails?.to}</h5>
              <h5><font className="highlights">Airline </font> : {dealDetails?.airline}</h5>
              <h5><font className="highlights">Baggage </font> :{dealDetails?.baggage}</h5>
              <h5><font className="highlights">Price</font> :{dealDetails?.price} </h5>
              <p>{dealDetails?.description} </p>
            </div>
          </div>
          {
            !isAdmin && <div className="booking-section col-md-4 col-sm-12">
              <div className="booking-div">
                <h2>Book Now</h2>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                  <input type="text" placeholder='Enter Your Name here' className='booking-input' value={bookingData.name}
                    {...register('name', { required: { value: true, message: 'Please fill the  Name Field' }
                    })} onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })} />
                  <p className="err-msg">{errors?.name?.message}</p>

                  <p>From</p>
                  <input type="text" value={dealDetails?.from} className='booking-input'
                    {...register('from', { required: { value: true } })}
                  />

                  <p>To</p>
                  <input type="text" value={dealDetails?.to} className='booking-input'
                    {...register('to', { required: { value: true } })} />

                  <p>Airline</p>
                  <input type="text" value={dealDetails?.airline} className='booking-input'
                    {...register('airline', { required: { value: true } })} />

                  <div >
                    <input type="text" placeholder='no. of Adults' className='booking-input candidate-count'
                      {...register('adults', { required: { value: true } })} />

                    <input type="text" placeholder='no.of Childrens' className='booking-input candidate-count'
                      {...register('childrens', { required: { value: true } })} />
                  </div>
                  <p>Select a peroid That You are Available</p>
                  <div className="date-picker-container">
                    <div className="react-datepicker-wrapper">
                      <DatePicker
                        selected={startingDate}
                        onChange={handleStartDateChange}
                        dateFormat="MMMM d, yyyy"
                        placeholderText="available from"
                        className="custom-datepicker booking-input"
                      />
                      <DatePicker
                        selected={lastDate}
                        onChange={handleEndDateChange}
                        dateFormat="MMMM d, yyyy"
                        placeholderText="avialable till"
                        className="custom-datepicker booking-input"
                      />
                    </div>

                  </div>
                  <input type="email" placeholder='Enter Your Email here' className='booking-input' value={bookingData.email}
                    {...register('email', {
                      required: { value: true, message: 'Please Enter Your Email' }
                    })} onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })} />
                  <p className="err-msg">{errors?.email?.message}</p>

                  <br />

                  <div className='flex'>
                    <input type="checkbox" className='checkbox' onClick={() => { setIsGuestUser(!isGuestUser) }} /><p>Continue as Guest User</p>
                  </div>
                  {
                    !isGuestUser && <button className="login-btn ">Login</button>
                  }

                  <button className="book-whatsapp-btn book-btn" >Book Through WhatsApp</button>

                </form>
              </div>
            </div>
          }

        </div>
      </section>

    </>
  )
}

export default EachDeals
