import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import '../AddAdmin/AddAdmin.css'
import { useNavigate } from 'react-router-dom';

function AddAdmin() {
  const [errMsg, setErrMsg] = useState('')
  const [adminData, setAdminData] = useState({})

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('JwtToken')
    if (!token) {
      navigate('/admin/login')
    }
  })


  const { register, handleSubmit, formState: { errors } } = useForm();


  
  const handleChange = (e) => {
    setAdminData({ ...adminData, [e.target.name]: e.target.value })
  }


  const onSubmit = async (data) => {

    try {
      const admin = await axios.post('http://localhost:8000/api/admin/register', data);
      if (admin.data) {
        const token = admin.data.token
        localStorage.setItem('JwtToken', token)
        navigate('/admin/');
      }
    } catch (error) {
      setErrMsg(error.response?.data.message);
    }
  };
  return (
    <>
      <section className="container">
        <div className="add-admin-box">
          <h2>Register Admin</h2>
          {
            errMsg ? <p className='err-msg'>{errMsg}</p> : ''
          }

          <div className="add-admin">
            <form action="" onSubmit={handleSubmit(onSubmit)}>

              <input type="text"
                className="login-input"
                placeholder='Admin Name'
                onChange={handleChange}
                name='name' value={adminData.name}
                {...register('name', { required: { value: true, message: 'Please Enter a Name' } })} />
              <p className="err-msg">{errors?.name?.message}</p>

              <input type="email"
                className="login-input"
                placeholder='Admin Email'
                onChange={handleChange}
                name='email' value={adminData.email}
                {...register('email', {
                  required: { value: true, message: 'Please fill the  Email Field' },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Please enter a valid email address'
                  }
                })} />
              <p className="err-msg">{errors?.email?.message}</p>

              <input type="password"
                className="login-input"
                placeholder='Enter New Password for Admin'
                onChange={handleChange}
                name='password' value={adminData.password}
                {...register('password', { required: { value: true, message: 'Please Enter a Password' } })} />
              <p className="err-msg">{errors?.password?.message}</p>
              <button className="add-admin-btn" type='submit' onClick={onSubmit} >Add Admin</button>

            </form>
          </div>
        </div>
      </section>
    </>
  )
}


export default AddAdmin
