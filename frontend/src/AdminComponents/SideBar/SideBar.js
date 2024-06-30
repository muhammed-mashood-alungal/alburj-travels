import React, { useEffect, useState } from 'react'
import '../SideBar/SideBar.css'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faSuitcaseRolling, faPlaneUp, faGear } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
  const navigate = useNavigate()
  const [activeItem, setActiveItem] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('JwtToken')
    if (!token) {
      navigate('/admin/login')
    }
  })

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <>
      <div className="d-flex">
        <nav className="sidebar ">
          <ul className="list-unstyled">
            <li className={` ${activeItem === 'home' ? 'active' : ''}`} onClick={() => handleItemClick('home')} >
              <Link to='/admin' >
                <FontAwesomeIcon icon={faHouse} />&nbsp;
                <span className="d-none d-md-inline ">Home</span>
              </Link>
            </li>


            <li className={` ${activeItem === 'profile' ? 'active' : ''}`} onClick={() => handleItemClick('profile')}>
              <Link to='/admin/profile'>
                <FontAwesomeIcon icon={faUser} />&nbsp;
                <span className="d-none d-md-inline ">Profile</span>
              </Link>
            </li>

            <li className={` ${activeItem === 'packages' ? 'active' : ''}`} onClick={() => handleItemClick('packages')}>
              <Link to='/admin/add-packages'>
                <FontAwesomeIcon icon={faSuitcaseRolling} />&nbsp;
                <span className="d-none d-md-inline ">Packages</span>
              </Link>
            </li>

            <li className={` ${activeItem === 'deals' ? 'active' : ''}`} onClick={() => handleItemClick('deals')}>
              <Link to='/admin/add-deals'>
                <FontAwesomeIcon icon={faPlaneUp} />&nbsp;
                <span className="d-none d-md-inline ">Deals</span>
              </Link>
            </li>
            <li className={` ${activeItem === 'settings' ? 'active' : ''}`} onClick={() => handleItemClick('settings')}>
              <Link to='/admin/settings'>
                <FontAwesomeIcon icon={faGear} />&nbsp;
                <span className="d-none d-md-inline ">Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Sidebar
