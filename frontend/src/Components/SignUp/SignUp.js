import React, { useEffect, useState } from 'react'
import '../SignUp/SignUp.css'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { useAuth } from '../../Contexts/authContext';

function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errMsg, setErrMsg] = useState('')
  const [userData, setUserData] = useState({})
  const { isLoggedIn, setIsLoggedIn } = useAuth()
  const navigate = useNavigate();
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
      const user = await axios.post('http://localhost:8000/api/auth/signup', data, { withCredentials: true });
      setIsLoggedIn(true)
      navigate('/');

    } catch (error) {
      setIsLoggedIn(false)
      setErrMsg(error.response?.data.message);
    }
  };
  return (
    <>
      <section className="container">
        <div className="signup-box">
          <h2>Sign Up </h2>
          {
            errMsg ? <p className='err-msg'>{errMsg}</p> : ''
          }
          <div className="mannual-signup">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <input type="text" className="signup-input" placeholder='Your Name here' value={userData.name}
                {...register('name', { required: { value: true, message: 'Please Enter a Name' } })}
                onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
              <p className="err-msg">{errors?.name?.message}</p>

              <input type="email" className="signup-input" placeholder='Your Email here' value={userData.email}
                {...register('email', {
                  required: { value: true, message: 'Please fill the  Email Field' },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Please enter a valid email address'
                  }
                })} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
              <p className="err-msg">{errors?.email?.message}</p>

              <input type="password" className="signup-input" placeholder='Create a Password' value={userData.password}
                {...register('password', { required: { value: true, message: 'Please Enter a Password' } })}
                onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
              <p className="err-msg">{errors?.password?.message}</p>

              <button className="signup-btn" type='submit'>Sign Up</button>

              <button className="google-signin-button" type='button' onClick={authWithGoogle} >
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
