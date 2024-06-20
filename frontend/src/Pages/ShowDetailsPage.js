import React from 'react'
import { Route, Routes,Link } from 'react-router-dom'
import EachDeals from '../Components/EachDeals/EachDeals'
import EachPackage from '../Components/EachPackages/EachPackage'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
function ShowDetailsPage() {
  
  return (
    <>
    <Link to='/admin'>
    <h5 style={{color:'black',margin:'20px'}}><FontAwesomeIcon icon={faArrowLeft} />Home</h5>
    </Link>
      <Routes>
        <Route path="/deal/:dealId" element={<EachDeals isAdmin={true} />} />
        <Route path="/package/:packageId" element={<EachPackage />} />
      </Routes>
    </>
  )
}

export default ShowDetailsPage