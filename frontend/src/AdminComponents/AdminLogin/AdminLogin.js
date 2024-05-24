import React from 'react'
import '../AdminLogin/AdminLogin.css'
import { Link } from 'react-router-dom'
function AdminLogin() {
  return (
    <>
       <section className="container">
        <div className="login-box">
            <h2>Admin Login</h2>
            
            <div className="mannual-login">
                <form action="">
                  
                    <input type="email" className="login-input" placeholder='Your Email address' />
                    <input type="password" className="login-input" placeholder='Enter Password' />
                    <button className="login-btn">Login</button>
                
                </form>
            </div>
           
           
        </div>
      </section>
    </>
  )
}

export default AdminLogin
