import React, { useEffect, useState } from 'react'
import '../Packages/Packages.css'
import Dimage from '../../assets/package.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faLocationDot, faSun, faMoon, faStar } from '@fortawesome/free-solid-svg-icons'
import { useLocation, Link } from 'react-router-dom'
import axios from 'axios'
function Packages() {

    const [packages, setPackages] = useState([])
    const location = useLocation();
    const isMainPage = location.pathname === '/'
    console.log(isMainPage)

    useEffect(() => {
        axios.get('http://localhost:8000/api/package').then((response) => {
            setPackages(response.data)
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

                    <h2 className='package-title'>Here is Our <font className="highlights"> Popular Packages </font>to Explore </h2>
                </div>
                <div className="packages">
                    <div className="row">
                        {
                            packages.map((pack, index) => {
                                return <div className="col-md-3 package-col">
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
                        <div className="col-md-3 package-col">
                            <div className='package'>
                                <div className="image-container">
                                    <img src={Dimage} alt="package image" className='package-image' />
                                </div>
                                <div className='package-content'>
                                    <h5>Package Name</h5>
                                    <p><FontAwesomeIcon icon={faLocationDot} className='icon' /> Location Country , Region</p>
                                    <p><FontAwesomeIcon icon={faSun} className='icon' /> Days: 5 &nbsp;&nbsp;&nbsp;
                                        <FontAwesomeIcon icon={faMoon} className='icon' /> Night:5</p>
                                    <p className="rating-stars">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </p>
                                    <div>
                                        <p>Starts From <br /><b>220 AED</b> </p>
                                        <button className='package-explore-btn'>Explore <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />  </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 package-col">
                            <div className='package'>
                                <div className="image-container">
                                    <img src={Dimage} alt="package image" className='package-image' />
                                </div>
                                <div className='package-content'>
                                    <h5>Package Name</h5>
                                    <p><FontAwesomeIcon icon={faLocationDot} className='icon' /> Location Country , Region</p>
                                    <p><FontAwesomeIcon icon={faSun} className='icon' /> Days: 5 &nbsp;&nbsp;&nbsp;
                                        <FontAwesomeIcon icon={faMoon} className='icon' /> Night:5</p>
                                    <p className="rating-stars">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </p>
                                    <div>
                                        <p>Starts From <br /><b>220 AED</b> </p>
                                        <button className='package-explore-btn'>Explore <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />  </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 package-col">
                            <div className='package'>
                                <div className="image-container">
                                    <img src={Dimage} alt="package image" className='package-image' />
                                </div>
                                <div className='package-content'>
                                    <h5>Package Name</h5>
                                    <p><FontAwesomeIcon icon={faLocationDot} className='icon' /> Location Country , Region</p>
                                    <p><FontAwesomeIcon icon={faSun} className='icon' /> Days: 5 &nbsp;&nbsp;&nbsp;
                                        <FontAwesomeIcon icon={faMoon} className='icon' /> Night:5</p>
                                    <p className="rating-stars">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </p>
                                    <div>
                                        <p>Starts From <br /><b>220 AED</b> </p>
                                        <button className='package-explore-btn'>Explore <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />  </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 package-col">
                            <div className='package'>
                                <div className="image-container">
                                    <img src={Dimage} alt="package image" className='package-image' />
                                </div>
                                <div className='package-content'>
                                    <h5>Package Name</h5>
                                    <p><FontAwesomeIcon icon={faLocationDot} className='icon' /> Location Country , Region</p>
                                    <p><FontAwesomeIcon icon={faSun} className='icon' /> Days: 5 &nbsp;&nbsp;&nbsp;
                                        <FontAwesomeIcon icon={faMoon} className='icon' /> Night:5</p>
                                    <p className="rating-stars">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </p>
                                    <div>
                                        <p>Starts From <br /><b>220 AED</b> </p>
                                        <button className='package-explore-btn'>Explore <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />  </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 package-col">
                            <div className='package'>
                                <div className="image-container">
                                    <img src={Dimage} alt="package image" className='package-image' />
                                </div>
                                <div className='package-content'>
                                    <h5>Package Name</h5>
                                    <p><FontAwesomeIcon icon={faLocationDot} className='icon' /> Location Country , Region</p>
                                    <p><FontAwesomeIcon icon={faSun} className='icon' /> Days: 5 &nbsp;&nbsp;&nbsp;
                                        <FontAwesomeIcon icon={faMoon} className='icon' /> Night:5</p>
                                    <p className="rating-stars">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </p>
                                    <div>
                                        <p>Starts From <br /><b>220 AED</b> </p>
                                        <button className='package-explore-btn'>Explore <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />  </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Packages
