import React, { useState } from 'react'
import '../Settings/Settings.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPen,faCheck} from '@fortawesome/free-solid-svg-icons'
function Settings() {
   
   const [EditEnabled,setEditEnabled]=useState(false)

    const [services,setServices]=useState([])
   const  [service,setService]=useState(null)

   const [activities,setActivities]=useState([])
   const  [activity,setActivity]=useState(null)

    const enableEdit=()=>{
      setEditEnabled(true)
    }
    const disableEdit =()=>{
      setEditEnabled(false)
    }

    const handleServiceName = (e)=>{
       setService(e.target.value)
    }

    const addService =()=>{
        setServices([...services,service])
        setService('')
    }

    const handleActivity = (e)=>{
        setActivity(e.target.value)
     }
 
     const addActivity =()=>{
        setActivities([...activities,activity])
        setActivity('')
     }

     const clearActivities =() =>{
        setActivities([])
     }

     const clearServices =() =>{
        setServices([])
     }
  return (
    <>
      <section className='settings-section'>
        <div className="company-data-div">
            <div className="settings-header">
              <h2>Settings</h2>
              {
                EditEnabled?<FontAwesomeIcon icon={faCheck} className='check-icon' onClick={disableEdit} />
                :
               <FontAwesomeIcon icon={faPen}  className='edit-icon' onClick={enableEdit} />
              }
             
            </div>
            <form action="">
             <div className="row">
                <div className="col-md-6">
                    <h6>Comapny Name</h6>
                </div>
                <div className="col-md-6">
                     <input type="text" className="cmpny-data-input" value={'hello'} disabled={!EditEnabled} />
                </div>
                <div className="col-md-6">
                    <h6>Industry</h6>
                </div>
                <div className="col-md-6">
                     <input type="text" className="cmpny-data-input" disabled={!EditEnabled}/>
                </div>
                <div className="col-md-6">
                    <h6>Address</h6>
                </div>
                <div className="col-md-6">
                    <textarea name="" id="" className='cmpny-data-input cmpny-description-input'  disabled={!EditEnabled}></textarea>
                </div>

                <div className="col-md-6">
                    <h6>Country</h6>
                </div>
                <div className="col-md-6">
                   <input type="text" className="cmpny-data-input"  disabled={!EditEnabled}/>
                </div>
                <div className="col-md-6">
                <h6>City</h6>
                </div>
                <div className="col-md-6">
                <input type="text" className="cmpny-data-input"  disabled={!EditEnabled}/>
                </div>
                <div className="col-md-6">
                <h6>Postal code</h6>
                </div>
                <div className="col-md-6">
                <input type="number" className="cmpny-data-input"  disabled={!EditEnabled}/>
                </div>
                
                <div className="col-md-6">
                <h6>Founded Date</h6>
                </div>
                <div className="col-md-6">
                <input type="date" className="cmpny-data-input"  disabled={!EditEnabled}/>
                </div> 
                 
                <div className="col-md-6">
                <h6>Employees</h6>
                </div>
                <div className="col-md-6">
                <input type="number" className="cmpny-data-input"  disabled={!EditEnabled}/>
                </div>


                <div className="col-md-6">
                <h6>Phone Number</h6>
                </div>
                <div className="col-md-6">
                <input type="number" className="cmpny-data-input"  disabled={!EditEnabled}/>
                </div>

                <div className="col-md-6">
                <h6>Admin Number</h6>
                </div>
                <div className="col-md-6">
                <input type="number" className="cmpny-data-input"  disabled={!EditEnabled}/>
                </div>

                <div className="col-md-6">
                <h6>WhatsApp Number</h6>
                </div>
                <div className="col-md-6">
                <input type="number" className="cmpny-data-input"  disabled={!EditEnabled}/>
                </div>

                <div className="col-md-6">
                <h6>Email</h6>
                </div>
                <div className="col-md-6">
                <input type="email" className="cmpny-data-input"  disabled={!EditEnabled}/>
                </div>
                
                <div className="col-md-6">
                <h6>instagram Link</h6>
                </div>
                <div className="col-md-6">
                <input type="number" className="cmpny-data-input"  disabled={!EditEnabled}/>
                </div>

                <div className="col-md-6">
                <h6>FaceBook Link</h6>
                </div>
                <div className="col-md-6">
                <input type="number" className="cmpny-data-input"  disabled={!EditEnabled}/>
                </div>
                <div className="flex">
                <div className="col-md-6">
                <h6>Services </h6>
                </div>
                <div className="col-md-6">
                <input type="text" className="cmpny-data-input "value={service}  onChange={handleServiceName}  disabled={!EditEnabled}/><br /><br />
                <buttton className="service-add-btn" onClick={addService} >Add</buttton>
                <buttton className="service-dlt-btn" onClick={clearServices} >Delete</buttton>
                <ul>
                 {services.map((option, index) => (
                 <li className='options' key={index}>{option}</li>
                   ))}
                 </ul>
                </div>
                </div>

                <div className="flex">
                <div className="col-md-6">
                <h6>Activities </h6>
                </div>
                <div className="col-md-6">
                <input type="text" className="cmpny-data-input " value={activity} onChange={handleActivity}  disabled={!EditEnabled}/><br /><br />
                <buttton className="service-add-btn" onClick={addActivity} >Add</buttton>
                <buttton className="service-dlt-btn" onClick={clearActivities} >Delete</buttton>
                <ul>
                 {activities.map((option, index) => (
                 <li className='options' key={index}>{option}</li>
                   ))}
                 </ul> 
                </div>
                </div>

             </div>

 
            </form>
        </div>
      </section>
    </>
  )
}

export default Settings
