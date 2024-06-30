import React, { useEffect, useState } from 'react'
import '../Settings/Settings.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faCheck } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Settings() {
     const [companyInfo, setCompanyInfo] = useState({})
     const [activities, setActivities] = useState([])
     const [EditEnabled, setEditEnabled] = useState(false)
     const [activity, setActivity] = useState(null)
     const navigate = useNavigate()
     useEffect(() => {
          const token = localStorage.getItem('JwtToken')
          if (!token) {
               navigate('/admin/login')
          }
          const fetchCompanyDetails = async () => {
               try {
                    const response = await axios.get(`http://localhost:8000/api/admin/company`);
                    setCompanyInfo(response.data)
                    setActivities(Array.from(response.data.activities))
               } catch (error) {
                    alert('Error Occured')
               }
          };
          fetchCompanyDetails();
     }, [])


     const enableEdit = () => {
          console.log('edit enabled')
          setEditEnabled(true)
     }

     const updateData = (companyData) => {
          try {

               console.log(companyData)
               axios.put('http://localhost:8000/api/admin/company', companyData).then((response) => {
                    alert('Data Updated Successfully')
               }).catch((err) => {
                    alert(err.data + 'Error')
               })
          } catch (err) {
               alert(err + 'Error Occured')
          }
     }
     const disableEdit = () => {
          companyInfo.activities = activities
          updateData(companyInfo)
          setEditEnabled(false)
     }
     const handleActivity = (e) => {
          setActivity(e.target.value)
     }

     const addActivity = () => {
          setActivities([...activities, activity])
          setActivity('')
     }

     const clearActivities = () => {
          setActivities([])
     }

     return (
          <>
               <section className='settings-section'>
                    <div className="company-data-div">
                         <div className="settings-header">
                              <h2>Settings</h2>
                              {
                                   EditEnabled ? <FontAwesomeIcon icon={faCheck} className='check-icon' onClick={disableEdit} />
                                        :
                                        <FontAwesomeIcon icon={faPen} className='edit-icon' onClick={enableEdit} />
                              }

                         </div>
                         <form action="">
                              <div className="row">
                                   <div className="col-md-6">
                                        <h6>Comapny Name</h6>
                                   </div>
                                   <div className="col-md-6">
                                        <input type="text" className="cmpny-data-input" disabled={!EditEnabled} value={companyInfo?.name}
                                             onChange={(e) => { setCompanyInfo({ ...companyInfo, name: e.target.value }) }} />
                                   </div>
                                   <div className="col-md-6">
                                        <h6>Industry</h6>
                                   </div>
                                   <div className="col-md-6">
                                        <input type="text" className="cmpny-data-input" disabled={!EditEnabled} value={companyInfo?.industry}
                                             onChange={(e) => { setCompanyInfo({ ...companyInfo, industry: e.target.value }) }} />
                                   </div>
                                   <div className="col-md-6">
                                        <h6>Address</h6>
                                   </div>
                                   <div className="col-md-6">
                                        <textarea name="" id="" className='cmpny-data-input cmpny-address-input' disabled={!EditEnabled} value={companyInfo.address}
                                             onChange={(e) => { setCompanyInfo({ ...companyInfo, address: e.target.value }) }}></textarea>
                                   </div>

                                   <div className="col-md-6">
                                        <h6>Country</h6>
                                   </div>
                                   <div className="col-md-6">
                                        <input type="text" className="cmpny-data-input" disabled={!EditEnabled} value={companyInfo?.country}
                                             onChange={(e) => { setCompanyInfo({ ...companyInfo, country: e.target.value }) }} />
                                   </div>
                                   <div className="col-md-6">
                                        <h6>City</h6>
                                   </div>
                                   <div className="col-md-6">
                                        <input type="text" className="cmpny-data-input" disabled={!EditEnabled} value={companyInfo?.city}
                                             onChange={(e) => { setCompanyInfo({ ...companyInfo, city: e.target.value }) }} />
                                   </div>
                                   <div className="col-md-6">
                                        <h6>Founded Date</h6>
                                   </div>
                                   <div className="col-md-6">
                                        <input type="date" className="cmpny-data-input" disabled={!EditEnabled} value={companyInfo?.foundedDate}
                                             onChange={(e) => { setCompanyInfo({ ...companyInfo, foundedDate: e.target.value }) }} />
                                   </div>

                                   <div className="col-md-6">
                                        <h6>Employees</h6>
                                   </div>
                                   <div className="col-md-6">
                                        <input type="Number" className="cmpny-data-input" disabled={!EditEnabled} value={companyInfo?.employees}
                                             onChange={(e) => { setCompanyInfo({ ...companyInfo, employees: e.target.value }) }} />
                                   </div>


                                   <div className="col-md-6">
                                        <h6>Phone Number</h6>
                                   </div>
                                   <div className="col-md-6">
                                        <input type="number" className="cmpny-data-input" disabled={!EditEnabled} value={companyInfo?.phone}
                                             onChange={(e) => { setCompanyInfo({ ...companyInfo, phone: e.target.value }) }} />
                                   </div>

                                   <div className="col-md-6">
                                        <h6>Admin Number</h6>
                                   </div>
                                   <div className="col-md-6">
                                        <input type="number" className="cmpny-data-input" disabled={!EditEnabled} value={companyInfo?.adminPhone}
                                             onChange={(e) => { setCompanyInfo({ ...companyInfo, adminPhone: e.target.value }) }} />
                                   </div>

                                   <div className="col-md-6">
                                        <h6>WhatsApp Number</h6>
                                   </div>
                                   <div className="col-md-6">
                                        <input type="number" className="cmpny-data-input" disabled={!EditEnabled} value={companyInfo?.whatsapp}
                                             onChange={(e) => { setCompanyInfo({ ...companyInfo, whatsapp: e.target.value }) }} />
                                   </div>

                                   <div className="col-md-6">
                                        <h6>Email</h6>
                                   </div>
                                   <div className="col-md-6">
                                        <input type="email" className="cmpny-data-input" disabled={!EditEnabled} value={companyInfo?.email}
                                             onChange={(e) => { setCompanyInfo({ ...companyInfo, email: e.target.value }) }} />
                                   </div>

                                   <div className="col-md-6">
                                        <h6>instagram Link</h6>
                                   </div>
                                   <div className="col-md-6">
                                        <input type="text" className="cmpny-data-input" disabled={!EditEnabled} value={companyInfo?.insta}
                                             onChange={(e) => { setCompanyInfo({ ...companyInfo, insta: e.target.value }) }} />
                                   </div>

                                   <div className="col-md-6">
                                        <h6>FaceBook Link</h6>
                                   </div>
                                   <div className="col-md-6">
                                        <input type="text" className="cmpny-data-input" disabled={!EditEnabled} value={companyInfo?.fb}
                                             onChange={(e) => { setCompanyInfo({ ...companyInfo, fb: e.target.value }) }} />
                                   </div>


                                   <div className="flex">
                                        <div className="col-md-6">
                                             <h6>Activities </h6>
                                        </div>
                                        <div className="col-md-6">
                                             <input type="text" className="cmpny-data-input " value={activity} onChange={handleActivity} disabled={!EditEnabled} /><br /><br />
                                             <buttton className="activity-add-btn" onClick={addActivity} >Add</buttton>
                                             <buttton className="activity-dlt-btn" onClick={clearActivities} >Delete</buttton>
                                             <ul>
                                                  {activities?.map((option, index) => (
                                                       <li className='options' key={index}>{option}</li>
                                                  ))}
                                             </ul>
                                        </div>
                                   </div>
                                   <div className="col-md-6">
                                        <h6>About </h6>
                                   </div>
                                   <div className="col-md-6">
                                        <textarea name="" id="" className='cmpny-data-input cmpny-about-input' disabled={!EditEnabled} value={companyInfo?.about}
                                             onChange={(e) => { setCompanyInfo({ ...companyInfo, about: e.target.value }) }}></textarea>
                                   </div>

                                   <div className="col-md-6">
                                        <h6>Terms And Condition</h6>
                                   </div>
                                   <div className="col-md-6">
                                        <textarea name="" id="" className='cmpny-data-input cmpny-TaC-input' disabled={!EditEnabled} value={companyInfo?.termsAndCondition}
                                             onChange={(e) => { setCompanyInfo({ ...companyInfo, termsAndCondition: e.target.value }) }}></textarea>
                                   </div>

                              </div>


                         </form>
                    </div>
               </section>
          </>
     )
}

export default Settings
