import React, { useEffect, useInsertionEffect, useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../AdminProfile/AdminProfile.css'
import axios from 'axios'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
function AdminProfile() {

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/admin/panel/admins');
        setAdmins(response.data);
        console.log(response.data)
      } catch (err) {
        console.error('Error fetching admins:', err);
      }
    };

    fetchAdmins();
  }, []);

  const [admins,setAdmins]=useState([])
 
  const handleDeleteClick = (adminId) => {
    const confirmed = window.confirm('Are you sure you want to delete this admin?');
    if (confirmed) {
      DeleteAdmin(adminId);
    }
  };

  const DeleteAdmin=async(adminId)=>{
    try{
      const response =await axios.delete(`http://localhost:8000/api/admin/panel/admin/${adminId}`)
      console.log(response)
       alert(response.data.message)
    }catch(err){
      alert(err)
    }
  }
 



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
            <Link to='/admin/register' className='link-tag'>
            <FontAwesomeIcon icon={faPlus}  className="admin-add-icon"/>&nbsp;
            Add Admin
            </Link>
            </div>
            
        </div>
        <div className="all-admins">
            <h2>All Admins</h2>
            <div className="row">
              <div className="col-md-6 ">
                
              {
                 (
                  admins?.map((admin)=>{
                    
                    return <div className="admin" key={admin._id}>
                    <h5>{admin.name}</h5>
                    <p>Email: {admin.email}</p>
                     <button className="dlt-admin-btn" onClick={()=>handleDeleteClick(admin._id)}>Remove</button>
                    </div>
    
                  })
                )
                  
              }
                

                
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
