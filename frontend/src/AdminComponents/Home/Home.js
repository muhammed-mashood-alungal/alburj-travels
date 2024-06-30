import React, { useEffect, useState } from 'react'
import '../Home/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faSuitcaseRolling, faPlaneUp, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import Reviews from '../../Components/Reviews/Reviews'
import axios from 'axios'

function Home() {
  const navigate = useNavigate()
  const [panelData, setPanelData] = useState({})
  useEffect(() => {
    const token = localStorage.getItem('JwtToken')
    if (!token) {
      navigate('/admin/login')
    }
    axios.get('http://localhost:8000/api/admin/panel').then((response) => {
      setPanelData(response.data)
      console.log(response.data, response)
    }).catch((error) => {
      console.log(error)
    })
  }, [])
  return (
    <>

      <div className="admin-home-section  ">
        <h2>Admin Panel</h2>
        <hr />
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="stats">
              <FontAwesomeIcon className='stats-icon' icon={faUsers} />
              <h5>Total Users</h5>
              <h3>{panelData.userCount}</h3>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="stats">
              <FontAwesomeIcon className='stats-icon' icon={faSuitcaseRolling} />
              <h5>Total Packages</h5>
              <h3>{panelData.packagesCount}</h3>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="stats">
              <FontAwesomeIcon className='stats-icon' icon={faPlaneUp} />
              <h5>Total Deals</h5>
              <h3>{panelData.dealsCount}</h3>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="stats">
              <FontAwesomeIcon className='stats-icon' icon={faUserTie} />
              <h5>Total Admins</h5>
              <h3>{panelData.adminCount}</h3>
            </div>
          </div>
        </div>

        <Reviews isAdmin={true} />
      </div>

    </>
  )
}

export default Home
