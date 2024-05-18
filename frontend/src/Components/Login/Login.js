import React from 'react'
import '../Login/Login.css'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <>
       <section className="container">
        <div className="login-box">
            <h2>Welcome back...</h2>
            
            <div className="mannual-login">
                <form action="">
                  
                    <input type="email" className="login-input" placeholder='Your Email here' />
                    <input type="password" className="login-input" placeholder='Create a Password' />
                    <button className="login-btn">Login</button>
                    <button className="google-login-button" >
                     <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="Google Logo" className="google-logo" />
                     Continue with Google
                   </button>
                   <Link to="/signup" className="signup-link">Create an Acoount?</Link>
                </form>
            </div>
           
           
        </div>
      </section>
    </>
  )
}

export default Login
