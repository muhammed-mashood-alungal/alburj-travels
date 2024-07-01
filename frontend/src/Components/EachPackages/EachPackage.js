import React, { useEffect, useState } from 'react'
import '../EachPackages/EachPackage.css'
//import image from '../../assets/package.jpg'
import DatePicker from 'react-datepicker';
import { useParams } from 'react-router-dom'
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { useAuth } from '../../Contexts/authContext';
import { useForm } from 'react-hook-form';
import Aos from 'aos'
function EachPackage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [bookingData, setBookingData] = useState({})
  const { isLoggedIn } = useAuth();
  const { packageId } = useParams();
  const [startingDate, setStartingDate] = useState(null);
  const [lastDate, setLastDate] = useState(null);
  const [packageData, setPackageData] = useState({})
  const [isGuestUser, setIsGuestUser] = useState(false)
  const [mainImageUrl, setMainImageUrl] = useState(null)
  const [subImages, setSubImages] = useState(null)

  useEffect(() => {
    try {
      const fetchPackageDetails = async () => {
        const response = await axios.get(`http://localhost:8000/api/package/${packageId}`)
        setPackageData(response.data)
        let url
        const imagesUrl = []
        for (let i = 0; i < 6; i++) {
          if (i === 0) {
            let mainUrl = require(`../../uploads/packages/${packageId}/${i}.jpg`)
            setMainImageUrl(mainUrl)
            continue;
          }
          url = require(`../../uploads/packages/${packageId}/${i}.jpg`)
          imagesUrl.push(url)
          setSubImages(imagesUrl)
        }
      }
      fetchPackageDetails()
    } catch (err) {
      alert(err)
    }

    Aos.init({
      duration:500,
      once:true
    }) 
  }, [])

  const handleStartDateChange = (date) => {
    setStartingDate(date);
  };
  const handleEndDateChange = (date) => {
    setLastDate(date);
  }



  const swapImages = (selectedImage) => {
    setMainImageUrl(selectedImage)
    setSubImages(prevArray => {
      const newArray = prevArray.filter(item => item !== selectedImage)
      return [...newArray, mainImageUrl]
    })

  }
  const onSubmit = async (data) => {
    try {
      data.startingDate = startingDate
      data.lastDate = lastDate
      const response = await axios.post('http://localhost:8000/api/user/book/package/whatsapp', data);
      window.open(response.data, '_blank')
    } catch (error) {
      alert('error returned' + error)
    }
  };
  return (
    <>
      <section className='each-package-section container'>
        <div className="row">
          <div className="details-section col-md-8 col-sm-12">
            <h2 data-aos="fade-right">{packageData?.name}</h2>
            <div className="package-images">
              <div className="package-mian-img-div" data-aos="fade-right">
                <img src={mainImageUrl} alt="" className="package-main-img" />
              </div>
              <div className="package-other-images">
                {
                  subImages?.map((image, index) => {
                    return <img src={image} alt="" data-aos="fade-down" className="sub-img" key={index} onClick={() => { swapImages(image) }} />
                  })
                }
              </div>

            </div>
            <div className="package-content-div" data-aos="fade-down">
              <h5><font className="highlights">Destination </font> : {packageData?.destination}</h5>
              <h5><font className="highlights">Duration </font> :{packageData?.days}-Days &nbsp; &nbsp; {packageData?.nights}-Nights</h5>
              <h5><font className="highlights">Price</font> : {packageData?.price} </h5>


              <p>{packageData?.description}
              </p>


            </div>
          </div>
          <div className="booking-section col-md-4 col-sm-12">
            <div className="booking-div" data-aos="fade-left">
              <h2>Book Now</h2>
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder='Enter Your Name here' className='booking-input' value={bookingData.name}
                  {...register('name', {
                    required: { value: true, message: 'Please fill the  Name Field' }
                  })} onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })} />
                <p className="err-msg">{errors?.name?.message}</p>

                <input type="text" className='booking-input' value={packageData.name}
                  {...register('packageName', { required: { value: true } })} />

                <div className="">
                  <input type="text" placeholder='no. of Adults' className='booking-input candidate-count' value={bookingData.adults}
                    {...register('adults', { required: { value: true, message: 'Please Enter Number of Adults' }
                    })} onChange={(e) => setBookingData({ ...bookingData, adults: e.target.value })} />
                  <p className="err-msg">{errors?.adults?.message}</p>

                  <input type="text" placeholder='no.of Childrens' className='booking-input candidate-count' value={bookingData.children}
                    {...register('children', {required: { value: true, message: 'Please Enter Number of Children' }
                    })} onChange={(e) => setBookingData({ ...bookingData, children: e.target.value })} />
                  <p className="err-msg">{errors?.children?.message}</p>
                </div>
                <p>Select a peroid That You are looking for</p>
                <div className="date-picker-container">
                  <div className="react-datepicker-wrapper">
                    <DatePicker
                      selected={startingDate}
                      onChange={handleStartDateChange}
                      dateFormat="MMMM d, yyyy"
                      placeholderText="available from"
                      className="custom-datepicker booking-input"

                    />
                    <p className="err-msg">{errors?.startingDate?.message}</p>
                    <DatePicker
                      selected={lastDate}
                      onChange={handleEndDateChange}
                      dateFormat="MMMM d, yyyy"
                      placeholderText="avialable till"
                      className="custom-datepicker booking-input"

                    />
                    <p className="err-msg">{errors?.lastDate?.message}</p>
                  </div>

                </div>
                <input type="email" placeholder='Enter Your Email here' className='booking-input' value={bookingData.email}
                  {...register('email', {required: { value: true, message: 'Please Enter Your Email' }
                  })} onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })} />
                <p className="err-msg">{errors?.email?.message}</p>

                <br />

                {
                  !isLoggedIn ? (
                    <div>

                      <div className='flex'><input type="checkbox" className='checkbox'
                        onClick={() => { setIsGuestUser(!isGuestUser) }} /><p>Continue as Guest User</p>
                      </div>
                      {!isGuestUser && <button className="login-btn ">Login</button>}
                      
                    </div>

                  ) : ('')
                }

                <button className="book-whatsapp-btn book-btn">Book Through WhatsApp</button>

              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EachPackage
