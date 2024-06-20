import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../AdminProfile/AdminProfile.css'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
function AdminProfile() {
  const [admin, setAdmin] = useState({})
  const [admins, setAdmins] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('JwtToken')
    if (!token) {
      navigate('/admin/login')
    }
    const decodedToken = decodeToken(token);
    setAdmin(decodedToken)

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

  const decodeToken = (token) => {
    const [header, payload, signature] = token.split('.');
    const decodedPayload = JSON.parse(atob(payload));
    return decodedPayload;
  };



  const handleDeleteClick = (adminId) => {
    const confirmed = window.confirm('Are you sure you want to delete this admin?');
    if (confirmed) {
      DeleteAdmin(adminId);
    }
  };

  const DeleteAdmin = async (adminId) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/admin/panel/admin/${adminId}`)
      console.log(response)
      alert(response.data.message)
    } catch (err) {
      alert(err)
    }
  }
  const handleLogout = () => {
    localStorage.removeItem('JwtToken')
    navigate('/admin/login')
  }
  return (
    <>
      <section className="admin-profile-section">
        <div className="profile-header-div row">
          <div className='col-md-8'>
            <h2>Hello {admin?.name} ....</h2>
            <p>Email : {admin?.email}</p>
            <button className="logout-admin-btn" onClick={handleLogout}>Log Out</button>
          </div>

          <div className='admin-add-icon-container col-md-4'>
            <Link to='/admin/register' className='link-tag'>
              <FontAwesomeIcon icon={faPlus} className="admin-add-icon" />&nbsp;
              Add Admin
            </Link>
          </div>

        </div>
        <div className="all-admins">
          <h2>All Admins</h2>
          <table className='admin-table'>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Remove</th>
            </tr>

            {
              admins?.map((admin) => {
                return <tr key={admin._id}>
                  <td>{admin.name}</td>
                  <td>{admin.email}</td>
                  <td><FontAwesomeIcon icon={faTrash} onClick={() => handleDeleteClick(admin._id)} className='option-icon' /></td>

                </tr>
              })
            }
          </table>

        </div>
      </section>
    </>
  )
}

export default AdminProfile
