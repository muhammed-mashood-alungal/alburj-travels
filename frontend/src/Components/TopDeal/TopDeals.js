import React, { useState, useEffect } from 'react'
import image from '../../assets/topdeal.jpg'
import '../TopDeal/TopDeal.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlaneDeparture, faPlaneArrival, faSuitcaseRolling, faTag, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
function TopDeals() {
  const [allDeals, setAllDeals] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/api/topDeals').then((response) => {
      console.log(response.data)
      setAllDeals(Array.from(response.data))
    })
  }, [])

  const renderImage = (dealId) => {
    let image = require(`../../uploads/deals/${dealId}.jpg`)
    return <img src={image} alt="image" className='deal-image' />
  }
  return (
    <div className='top-deal-section container'>
      <div className='deal-title-div'>

        <h2 className='deal-title'> Here is Our <font className="highlights">Top Deals</font>  For You</h2>
      </div>

      <div className='deals'>
        <div className='row'>
          <div className="col-md-3">
            <div className='deal'>
              <div className="potrait-container">
                <img src={image} alt="image" className='deal-image' />
              </div>
              <div className="deal-content">
                <h5>Deal Name</h5>
                <p><FontAwesomeIcon icon={faPlaneDeparture} />&nbsp;Origin</p>
                <p><FontAwesomeIcon icon={faPlaneArrival} />&nbsp;Destination</p>
                <p><FontAwesomeIcon icon={faSuitcaseRolling} />&nbsp;25kg</p>
                <p><FontAwesomeIcon icon={faTag} /> From 100 AED</p>
                <button className='explore-btn'>Explore <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />  </button>
              </div>
            </div>

          </div>
          {
            allDeals.map((deal, index) => {
              return <div className="col-md-3">
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
                    <p><FontAwesomeIcon icon={faSuitcaseRolling} />&nbsp;{deal.baggage}</p>
                    <p><FontAwesomeIcon icon={faTag} /> From {deal.price} AED</p>
                    <Link to={`/deal/${deal._id}`}>
                      <button className='explore-btn'>Explore <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} /></button>
                    </Link>
                  </div>
                </div>

              </div>
            })
          }

          <div className="col-md-3">
            <div className='deal'>
              <div className="potrait-container">
                <img src={image} alt="image" className='deal-image' />
              </div>
              <div className="deal-content">
                <h6>Deal Name</h6>
                <p><FontAwesomeIcon icon={faPlaneDeparture} />&nbsp;Origin</p>
                <p><FontAwesomeIcon icon={faPlaneArrival} />&nbsp;Destination</p>
                <p><FontAwesomeIcon icon={faSuitcaseRolling} />&nbsp;25kg</p>
                <p><FontAwesomeIcon icon={faTag} /> From 100 AED</p>
                <button className='explore-btn'>Explore <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />  </button>
              </div>
            </div>

          </div>

          <div className="col-md-3">
            <div className='deal'>
              <div className="potrait-container">
                <img src={image} alt="image" className='deal-image' />
              </div>
              <div className="deal-content">
                <h6>Deal Name</h6>
                <p><FontAwesomeIcon icon={faPlaneDeparture} />&nbsp;Origin</p>
                <p><FontAwesomeIcon icon={faPlaneArrival} />&nbsp;Destination</p>
                <p><FontAwesomeIcon icon={faSuitcaseRolling} />&nbsp;25kg</p>
                <p><FontAwesomeIcon icon={faTag} /> From 100 AED</p>
                <button className='explore-btn'>Explore <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />  </button>
              </div>
            </div>

          </div>

          <div className="col-md-3">
            <div className='deal'>
              <div className="potrait-container">
                <img src={image} alt="image" className='deal-image' />
              </div>
              <div className="deal-content">
                <h6>Deal Name</h6>
                <p><FontAwesomeIcon icon={faPlaneDeparture} />&nbsp;Origin</p>
                <p><FontAwesomeIcon icon={faPlaneArrival} />&nbsp;Destination</p>
                <p><FontAwesomeIcon icon={faSuitcaseRolling} />&nbsp;25kg</p>
                <p><FontAwesomeIcon icon={faTag} /> From 100 AED</p>
                <button className='explore-btn'>Explore <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />  </button>
              </div>
            </div>

          </div>

          <div className="col-md-3">
            <div className='deal'>
              <div className="potrait-container">
                <img src={image} alt="image" className='deal-image' />
              </div>
              <div className="deal-content">
                <h6>Deal Name</h6>
                <p><FontAwesomeIcon icon={faPlaneDeparture} />&nbsp;Origin</p>
                <p><FontAwesomeIcon icon={faPlaneArrival} />&nbsp;Destination</p>
                <p><FontAwesomeIcon icon={faSuitcaseRolling} />&nbsp;25kg</p>
                <p><FontAwesomeIcon icon={faTag} /> From 100 AED</p>
                <button className='explore-btn'>Explore <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />  </button>
              </div>
            </div>

          </div>

          <div className="col-md-3">
            <div className='deal'>
              <div className="potrait-container">
                <img src={image} alt="image" className='deal-image' />
              </div>
              <div className="deal-content">
                <h6>Deal Name</h6>
                <p><FontAwesomeIcon icon={faPlaneDeparture} />&nbsp;Origin</p>
                <p><FontAwesomeIcon icon={faPlaneArrival} />&nbsp;Destination</p>
                <p><FontAwesomeIcon icon={faSuitcaseRolling} />&nbsp;25kg</p>
                <p><FontAwesomeIcon icon={faTag} /> From 100 AED</p>
                <button className='explore-btn'>Explore <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />  </button>
              </div>
            </div>

          </div>

          <div className="col-md-3">
            <div className='deal'>
              <div className="potrait-container">
                <img src={image} alt="image" className='deal-image' />
              </div>
              <div className="deal-content">
                <h6>Deal Name</h6>
                <p><FontAwesomeIcon icon={faPlaneDeparture} />&nbsp;Origin</p>
                <p><FontAwesomeIcon icon={faPlaneArrival} />&nbsp;Destination</p>
                <p><FontAwesomeIcon icon={faSuitcaseRolling} />&nbsp;25kg</p>
                <p><FontAwesomeIcon icon={faTag} /> From 100 AED</p>
                <button className='explore-btn'>Explore <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />  </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default TopDeals
