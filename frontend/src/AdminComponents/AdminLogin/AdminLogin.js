import React, { useEffect, useState } from 'react'
import '../AdminLogin/AdminLogin.css'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'

function AdminLogin() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errMsg, setErrMsg] = useState('')
  const [adminData, setAdminData] = useState({})

  useEffect(() => {
    const token = localStorage.getItem('JwtToken')
    console.log(token)
    if (token) {
      navigate('/admin/')
    }
  }, [])

  const onSubmit = async (data) => {

    try {
      const admin = await axios.post('http://localhost:8000/api/admin/login', data);
      if (admin.data) {
        const token = admin.data.token
        localStorage.setItem('JwtToken', token, { expires: 60 * 60 * 1000 })
        navigate('/admin/');
      }
    } catch (error) {
      setErrMsg(error.response?.data.message);
    }
  };

  return (
    <>
      <section className="container">
        <div className="login-box">
          <h2>Admin Login</h2>
          {
            errMsg ? <p className='err-msg'>{errMsg}</p> : ''
          }
          <div className="mannual-login">
            <form action="" onSubmit={handleSubmit(onSubmit)}>

              <input type="email" className="login-input" placeholder='Your Email address' value={adminData.email}
                {...register('email', {
                  required: { value: true, message: 'Please fill the  Email Field' },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Please enter a valid email address'
                  }
                })} onChange={(e) => setAdminData({ ...adminData, email: e.target.value })} />
              <p className="err-msg">{errors?.email?.message}</p>

              <input type="password" className="login-input" placeholder='Enter Password' value={adminData.password}
                {...register('password', { required: { value: true, message: 'Please Enter a Password' } })}
                onChange={(e) => setAdminData({ ...adminData, password: e.target.value })} />
              <p className="err-msg">{errors?.password?.message}</p>
              <button className="login-btn">Login</button>

            </form>
          </div>


        </div>
      </section>
    </>
  )
}

export default AdminLogin
