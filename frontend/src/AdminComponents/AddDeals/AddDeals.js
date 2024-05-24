import React, { useState } from 'react'
import '../AddDeals/AddDeals.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus,faTrash,faArrowUpFromBracket,faPen} from '@fortawesome/free-solid-svg-icons'

function AddDeals() {
  const [image, setImage] = useState(null);
  // Function to handle when a new image is selected
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };
 
  const clearImages=()=>{
    setImage(null)
  }
 const renderImage=()=>{
    console.log(image)
    const imageSrc=URL.createObjectURL(image)
    console.log(imageSrc)
    return <img src={imageSrc} alt="deal Image" className='selected-img' />
 }
  


  return (
    <>
    <section className="admin-deal-section">
    <div className="add-deals">
     <h2>Add Deals</h2>
     <div className="row">
     <div className="col-md-6 col-sm-12">
     <input type="text" className="deal-input" placeholder='From' />
     <input type="text" className="deal-input" placeholder='To'/>
     <div className="flex">
     <input type="text" className="deal-input halved-input" placeholder='Price' />
     <input type="text" className="deal-input halved-input" placeholder='Baggage'/>
     </div>
     <input type="text" className="deal-input duration-input" placeholder='airline'/>
     <textarea name="description" id=""className='deal-input description-input' placeholder='Description'></textarea>

     <div className="flex">
     <label htmlFor="fileInput" className="custom-file-selector-button">
     <FontAwesomeIcon icon={faPlus}  className="plus-icon"/>
     <span>Select Image</span>
     <input 
        id="fileInput"
        type="file" 
        accept="image/*" 
        onChange={handleImageChange}
/>
     </label>{
       image?<div onClick={clearImages} className='dlt-image'>
                 <FontAwesomeIcon icon={faTrash} className='trash-icon' />
                 <p>Delete</p>
                 </div>  
                 :''
     }
     </div>
     {
       image?<div className=" ">
        {renderImage()}
        
                </div>:'' 
    }

    <button className='add-btn'>Add Deal</button>
     </div>

   
    </div>
    </div>
      
    
    </section>

    <section className='all-deals-section'>
      <h2>All Deals</h2>
      <div className="table-cotainer">
        <table className='deals-table'>
          <tr>
            <th>SI No</th>
            <th>From</th>
            <th>To</th>
            <th>Price</th>
            <th>Options</th>
          </tr>
   <hr />
          <tr>
            <td>1</td>
            <td>PAckage name</td>
            <td>PAckage name</td>
            <td>Price</td>
            <td>
            <FontAwesomeIcon icon={faArrowUpFromBracket}  className='option-icon'/>
            <FontAwesomeIcon icon={faPen}  className='option-icon'/>
            <FontAwesomeIcon icon={faTrash}  className='option-icon'/>
            </td>
            
          </tr>
        </table>
      </div>
    </section>
     
    </>
  )


  
}

export default AddDeals
