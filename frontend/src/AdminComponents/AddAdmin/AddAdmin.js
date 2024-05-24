import React from 'react'
import '../AddAdmin/AddAdmin.css'
import { Link } from 'react-router-dom'
function AddAdmin() {
  return (
    <>
       <section className="container">
        <div className="add-admin-box">
            <h2>Admin Login</h2>
            <div className="add-admin">
                <form action="">
                  
                    <input type="Name" className="login-input" placeholder='Admin Name' />
                    <input type="email" className="login-input" placeholder='Admin Email' />
                    <input type="password" className="login-input" placeholder='Enter New Password for Admin' />
                    <button className="add-admin-btn">Add Admin</button>
                
                </form>
            </div>
           
           
        </div>
      </section>
    </>
  )
}

export default AddAdmin
