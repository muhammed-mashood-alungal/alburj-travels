import React, { useState }  from 'react'
import '../EachPackages/EachPackage.css'
import image from '../../assets/package.jpg'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
function EachPackage() {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
  return (
    <> 
       <section className='each-package-section container'>
        <div className="row">
           <div className="details-section col-md-8 col-sm-12">
             <h2>Place Name</h2>
             <div className="package-images">
                <div className="package-mian-img-div">
                 <img src={image} alt="" className="package-main-img" />
                </div>
                <div className="package-other-images">
                <img src={image} alt="" className="sub-img" />
                <img src={image} alt="" className="sub-img" />
                <img src={image} alt="" className="sub-img" />
                <img src={image} alt="" className="sub-img" />
                <img src={image} alt="" className="sub-img" />
                </div>
                
             </div>
             <div className="package-content-div">
               <h5><font className="highlights">Destination </font> : destination</h5>
               <h5><font className="highlights">Duration </font> :5-Days &nbsp; &nbsp; 5-Nights</h5>
               <h5><font className="highlights">Baggage</font> : Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h5>


                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, 
                nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
                Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut 
                aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis 
                imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue 
                eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.
               </p>

               
             </div>
           </div>
           <div className="booking-section col-md-4 col-sm-12">
              <div className="booking-div">
                 <h2>Book Now</h2>
                 <form action="">
                    <input type="text" placeholder='Enter Your Name here' className='booking-input'/>
                    <input type="text"  value='destination' className='booking-input'/>
                    <div className="">
                    <input type="text" placeholder='no. of Adults' className='booking-input candidate-count'/>
                    <input type="text" placeholder='no.of Childrens' className='booking-input candidate-count'/>
                    </div>
                    <p>Select a peroid That You are looking for</p>
                    <div className="date-picker-container">
                       <div className="react-datepicker-wrapper">
                       <DatePicker
                   selected={selectedDate}
                   onChange={handleDateChange}
                   dateFormat="MMMM d, yyyy"
                   placeholderText="available from"
                   className="custom-datepicker booking-input"
                  />
                  <DatePicker
                   selected={selectedDate}
                   onChange={handleDateChange}
                   dateFormat="MMMM d, yyyy"
                   placeholderText="avialable till"
                   className="custom-datepicker booking-input" 
                  />
                       </div>
                 
                   </div>
                    <input type="email" placeholder='Enter Your Email here' className='booking-input'/>
                    <input type="Number"  placeholder='Phone Number' className='booking-input'/><br />
                    <div className='flex'>
                    <input type="checkbox" className='checkbox' /><p>Continue as Guest User</p>
                    </div>
                    <button className="login-btn ">Login</button>
                    <button className="book-whatsapp-btn book-btn">Book Through WhatsApp</button>
                    <h6 >or</h6>
                    <button className="book-email-btn book-btn">Book Through Email</button>
                 </form>
              </div>
           </div>
           </div>
       </section>
    </>
  )
}

export default EachPackage
