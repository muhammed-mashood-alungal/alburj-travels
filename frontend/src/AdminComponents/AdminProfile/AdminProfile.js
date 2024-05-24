import React from 'react'
import { Link } from 'react-router-dom'
import '../AdminProfile/AdminProfile.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
function AdminProfile() {
  return (
    <>
      <section className="admin-profile-section">
        <div className="profile-header-div">
            <div>
            <h2>Hello Admin ....</h2>
            <p>Email : muhmashood@gmail.com</p>
            <p>Phone : 8547593921 </p>
            </div>
            
            <div className='admin-add-icon-container'>
            <Link to='/admin/add-admin' className='link-tag'>
            <FontAwesomeIcon icon={faPlus}  className="admin-add-icon"/>&nbsp;
            Add Admin
            </Link>
            </div>
            
        </div>
        <div className="all-admins">
            <h2>All Admins</h2>
            <div className="row">
              <div className="col-md-6 ">
                
                <div className="admin">
                <h3>Admin name 1</h3>
                 <button className="dlt-admin-btn">Remove</button>
                </div>

                <div className="admin">
                <h3>Admin name 1</h3>
                 <button className="dlt-admin-btn">Remove</button>
                </div>

                <div className="admin">
                <h3>Admin name 1</h3>
                 <button className="dlt-admin-btn">Remove</button>
                </div>

                <div className="admin">
                <h3>Admin name 1</h3>
                 <button className="dlt-admin-btn">Remove</button>
                </div>
              </div>

             
            </div>
        </div>
      </section>
    </>
  )
}

export default AdminProfile
