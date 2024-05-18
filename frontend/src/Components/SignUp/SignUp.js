import React from 'react'
import '../SignUp/SignUp.css'
import { Link } from 'react-router-dom'
function SignUp() {
  return (
    <>
       <section className="container">
        <div className="signup-box">
            <h2>Sign Up </h2>
            
            <div className="mannual-signup">
                <form action="">
                    <input type="text" className="signup-input" placeholder='Your Name here' />
                    <input type="email" className="signup-input" placeholder='Your Email here' />
                    <input type="password" className="signup-input" placeholder='Create a Password' />
                    <button className="signup-btn">Sign Up</button>
                    <button className="google-signin-button" >
                     <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="Google Logo" className="google-logo" />
                     Continue with Google
                   </button>
                   <Link to="/login" className="login-link">Already Have an Account?</Link>
                </form>
            </div>
           
           
        </div>
      </section>
    </>
  )
}

export default SignUp
