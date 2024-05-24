import React, { useEffect, useState } from 'react'
import '../EditPackage/EditPackage.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus,faTrash,faArrowUpFromBracket,faPen} from '@fortawesome/free-solid-svg-icons'
function EditPackage() {

 
  const [images, setImages] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // Function to handle when a new image is selected
  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages([...images, ...selectedImages]);
  };
 
  const clearImages=(e)=>{
    setImages([])
  }
  const renderImagePreviews = () => {
    return images.map((image, index) => (
      <div key={index}>
        <img 
          src={URL.createObjectURL(image)} 
          alt={`Uploaded ${index}`} 
          style={{ maxWidth: '100px', maxHeight: '100px', marginRight: '10px' }} 
          className='preview-img '
        />
      </div>
    ));
  };
  

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6', 'Option 7', 'Option 8'];

 

  const handleSelectOption = (e) => {
    const option = e.target.value;
    console.log(option);
    const isExist = selectedOptions.includes(option);
    console.log(isExist + selectedOptions);
    if (!isExist && option !== "") {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  const clearActivities=()=>{
    setSelectedOptions([])
  }
  return (
    <>
    <section className="admin-package-section">
    <div className="edit-package">
     <h2>Edit Package</h2>
     <div className="row">
     <div className="col-md-6 col-sm-12">
     <input type="text" className="package-input" placeholder='Package Name ' />
     <input type="text" className="package-input" placeholder='Destination'/>
     <p>Duration</p>
     <div className="flex">
     <input type="text" className="package-input duration-input" placeholder='Days' />
     <input type="text" className="package-input duration-input" placeholder='Nights'/>
     </div>
     <input type="text" className="package-input" placeholder='Price'/>
     <textarea name="description" id=""className='package-input description-input' placeholder='Description'></textarea>
     <button className='add-btn'>Submit Edits</button>
     <button className='cancel-btn'>Cancel</button>
     </div>

     <div className="col-md-6 col-sm-12">
     <div className="flex">
     <label htmlFor="fileInput" className="custom-file-selector-button">
     <FontAwesomeIcon icon={faPlus}  className="plus-icon"/>
     <span>Select Images</span>
     <input 
  id="fileInput"
  type="file" 
  accept="image/*" 
  multiple 
  onChange={handleImageChange}
/>
     </label>{
       images[0]?<div onClick={clearImages} className='dlt-images'>
                 <FontAwesomeIcon icon={faTrash} className='trash-icon' />
                 <p>Clear All </p>
                 </div>  
                 :''
     }
     </div>
     {
       images[0]?<div className="image-preview-div  ">
                {renderImagePreviews()}
                </div>:''
     }
     <select  onChange={handleSelectOption}>
        <option value="">Select Activities</option>
        {options.map((option, index) => (
          <option key={index} value={option} name={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="selected-options ">
        <ul>
          {selectedOptions.map((option, index) => (
            <li className='options' key={index}>{option}</li>
          ))}
        </ul>
      </div>
      {
       selectedOptions[0]?<div onClick={clearActivities} className='dlt-activities'>
                 <FontAwesomeIcon icon={faTrash} className='trash-icon' />
                 <p>Clear All </p>
                 </div>  
                 :''
     }
      
     </div>
    </div>
    </div>
      
    
    </section>

     
    </>
  )
}

export default EditPackage
