import React, { useEffect, useState } from 'react'
import '../Login/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { useAuth } from '../../Contexts/authContext';
function Login() {
  const { isLoggedIn, setIsLoggedIn } = useAuth()
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errMsg, setErrMsg] = useState('')
  const [userData, setUserData] = useState({})
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/')
    }
  }, [isLoggedIn])
  const authWithGoogle = () => {
    window.location.href = 'http://localhost:8000/api/auth/google'

  }
  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:8000/api/auth/login', data, { withCredentials: true })
      setIsLoggedIn(true)
      navigate('/');

    } catch (error) {
      setIsLoggedIn(false)
      setErrMsg(error.message);
    }
  };
  return (
    <>
      <section className="container">
        <div className="login-box">
          <h2>Welcome back...</h2>
          {
            errMsg ? <p className='err-msg'>{errMsg}</p> : ''
          }
          <div className="mannual-login">
            <form action="" onSubmit={handleSubmit(onSubmit)}>

              <input type="email" className="login-input" placeholder='Your Email here' value={userData.email}
                {...register('email', {
                  required: { value: true, message: 'Please fill the  Email Field' },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Please enter a valid email address'
                  }
                })} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
              <p className="err-msg">{errors?.email?.message}</p>


              <input type="password" className="login-input" placeholder='Create a Password' value={userData.password}
                {...register('password', { required: { value: true, message: 'Please Enter a Password' } })}
                onChange={(e) => setUserData({ ...userData, password: e.target.value })} />


              <button className="login-btn" type='submit'>Login</button>


              <button className="google-login-button" type='button' onClick={authWithGoogle}>
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
