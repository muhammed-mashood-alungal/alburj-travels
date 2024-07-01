import React, { useEffect, useState } from 'react'
import '../Packages/Packages.css'
import Dimage from '../../assets/package.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faLocationDot, faSun, faMoon, faStar } from '@fortawesome/free-solid-svg-icons'
import { useLocation, Link } from 'react-router-dom'
import axios from 'axios'
import Aos from 'aos'
function Packages() {

    const [packages, setPackages] = useState([])
    const location = useLocation();  
    const isMainPage = location.pathname === '/'
    console.log(isMainPage)

    useEffect(() => {
        axios.get('http://localhost:8000/api/package').then((response) => {
            setPackages(response.data)
        })
        Aos.init({
            duration:500,
            once:true
          })
    }, [])

    const renderImage = (packageId) => {
        let image = require(`../../uploads/packages/${packageId}/0.jpg`)
        return <img src={image} alt="package image" className='package-image' />
    }
    return (
        <>
            <section className={`container package-section ${isMainPage ? '' : 'inner-page'}`} id='package-section'>
                <div className="package-title-div">
    <h2 className='package-title' data-aos="fade-right">Here is Our <font className="highlights"> Popular Packages </font>to Explore </h2>
                </div>
                <div className="packages">
                    <div className="row rows">
                        {
                            packages.map((pack, index) => {
                                return <div className="col-md-3 col-sm-6 package-col" data-aos="fade-up">
                                    <div className='package' key={index}>
                                        <div className="image-container">
                                            {
                                                renderImage(pack._id)
                                            }

                                        </div>
                                        <div className='package-content'>
                                            <h5>{pack.name}</h5>
                                            <p><FontAwesomeIcon icon={faLocationDot} className='icon' />{pack.destination}</p>
                                            <p><FontAwesomeIcon icon={faSun} className='icon' /> Days: {pack.days} &nbsp;&nbsp;&nbsp;
                                                <FontAwesomeIcon icon={faMoon} className='icon' /> Night:{pack.nights}</p>
                                            <div>
                                                <p>Starts From <br /><b>{pack.price} AED</b> </p>
                                                <Link to={`/package/${pack._id}`}>
                                                    <button className='package-explore-btn' >Explore <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} /></button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>

                </div>
            </section>
        </>
    )
}

export default Packages
