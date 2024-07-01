import React, { useState, useEffect } from 'react'
import image from '../../assets/topdeal.jpg'
import '../TopDeal/TopDeal.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlaneDeparture, faPlaneArrival, faSuitcaseRolling, faTag, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import Aos from 'aos'
function TopDeals() {
  const [allDeals, setAllDeals] = useState([])
  useEffect(() => {

    axios.get('http://localhost:8000/api/topDeals').then((response) => {
      console.log(response.data)
      setAllDeals(Array.from(response.data))
    })
    Aos.init({
      duration:500,
      once:true
    })
  }, [])

  const renderImage = (dealId) => {
    let image = require(`../../uploads/deals/${dealId}.jpg`)
    return <img src={image} alt="image" className='deal-image' />
  }
  return (
    <div className='top-deal-section container'>
      <div className='deal-title-div'>
        <h2 className='deal-title' data-aos="fade-right"> Here is Our <font className="highlights">Top Deals</font>  For You</h2>
      </div>
      <div className='deals'>
        <div className='row'>
       
          {
            allDeals.map((deal, index) => {
              return <div className="col-md-3" data-aos="fade-up">
                <div className='deal'>
                  <div className="potrait-container">
                    {
                      renderImage(deal._id)
                    }
                    <img src={image} alt="image" className='deal-image' />
                  </div>
                  <div className="deal-content">
                    <h6>{deal.airline}</h6>
                    <p><FontAwesomeIcon icon={faPlaneDeparture} />&nbsp;{deal.from}</p>
                    <p><FontAwesomeIcon icon={faPlaneArrival} />&nbsp;{deal.to}</p>
                    <p><FontAwesomeIcon icon={faSuitcaseRolling} />&nbsp;{deal.baggage} Kg</p>
                    <p><FontAwesomeIcon icon={faTag} />{deal.price} AED</p>
                    <Link to={`/deal/${deal._id}`}>
                      <button className='explore-btn'>Explore <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} /></button>
                    </Link>
                  </div>
                </div>

              </div>
            })
          }

        </div>
      </div>
    </div>
  )
}

export default TopDeals
