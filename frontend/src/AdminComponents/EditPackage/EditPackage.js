import React, { useEffect, useState } from 'react'
import '../EditPackage/EditPackage.css'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash, faArrowUpFromBracket, faPen } from '@fortawesome/free-solid-svg-icons'
import { useParams, useNavigate, Link } from 'react-router-dom'


function EditPackage() {
  const [packageDetails, setPackageDetails] = useState({})
  const [options, setOptions] = useState([])
  const { handleSubmit } = useForm();
  const { packageId } = useParams();
  const [images, setImages] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedImagesUrl, setSelectedImagesUrl] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('JwtToken')
    if (!token) {
      navigate('/admin/login')
    }
    const fetchPackageDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/package/${packageId}`);
        setPackageDetails(response.data)
        let url
        const imagesUrl = []
        for (let i = 0; i < 6; i++) {

          url = require(`../../uploads/packages/${packageId}/${i}.jpg`)
          imagesUrl.push(url)
        }
        setSelectedImagesUrl(imagesUrl)


      } catch (error) {
        alert('Error Occured')
      }
    };
    const fetchActivities = () => {
      setSelectedOptions(packageDetails.activities)
    }


    fetchPackageDetails();
    axios.get('http://localhost:8000/api/admin/company/options').then(result => {
      setOptions(result.data)
    })
  }, []);

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages([...images, ...selectedImages]);
  };

  const show = () => {
    console.log(packageDetails)
    setSelectedOptions(packageDetails.activities)
  }

  const clearImages = (e) => {
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





  const handleSelectOption = (e) => {

    const option = e.target.value;
    console.log(option);
    const isExist = selectedOptions.includes(option);
    console.log(isExist + selectedOptions);
    if (!isExist && option !== "") {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  const clearActivities = () => {
    setSelectedOptions([])
  }

  const handleEdit = async (data) => {

    try {
      const formData = new FormData()
      images.forEach((image, index) => {
        formData.append('images', image);
      })
      console.log('ssubmitting')
      console.log(data)
      data.name = packageDetails.name
      data.destination = packageDetails.destination
      data.price = packageDetails.price
      data.days = packageDetails.days
      data.nights = packageDetails.nights
      data.description = packageDetails.description
      data.activities = selectedOptions
      console.log('printing data ' + data)


      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          formData.append(key, data[key]);
        }
      }

      for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }
      axios.put(`http://localhost:8000/api/package/${packageId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((res => {
        console.log(res.data)

        navigate('/admin/add-packages')
      })).catch(err => {
        console.log(err)
        alert('something Went Wrong , Try Again')
        navigate('/admin/add-packages')
      })
    } catch (error) {
      alert(error.response?.data.message);
    }
  };

  const renderPreviousImages = () => {
    return selectedImagesUrl.map((url, index) => (
      <div key={index}>
        <img
          name='images'
          src={url}
          alt={`Uploaded ${index}`}
          style={{ maxWidth: '100px', maxHeight: '100px', marginRight: '10px' }}
          className='preview-img '
        />
      </div>
    ));
  }

  return (
    <>
      <section className="admin-package-section">
        <div className="edit-package">
          <h2>Edit Package</h2>

          <button onClick={show}>sdfas</button>
          <form action="" onSubmit={handleSubmit(handleEdit)} encType='multipart/form-data'>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <input type="text" className="package-input" placeholder='Package Name ' value={packageDetails.name}
                  onChange={e => setPackageDetails({ ...packageDetails, name: e.target.value })} />
                <input type="text" className="package-input" placeholder='Destination' value={packageDetails.destination}
                  onChange={e => setPackageDetails({ ...packageDetails, destination: e.target.value })} />
                <p>Duration</p>
                <div className="flex">
                  <input type="text" className="package-input duration-input" placeholder='Days' value={packageDetails?.days}
                    onChange={e => setPackageDetails({ ...packageDetails, days: e.target.value })} />
                  <input type="text" className="package-input duration-input" placeholder='Nights' value={packageDetails?.nights}
                    onChange={e => setPackageDetails({ ...packageDetails, nights: e.target.value })} />
                </div>
                <input type="text" className="package-input" placeholder='Price' value={packageDetails.price}
                  onChange={e => setPackageDetails({ ...packageDetails, price: e.target.value })} />
                <textarea name="description" id="" className='package-input description-input' placeholder='Description' value={packageDetails.description}
                  onChange={e => setPackageDetails({ ...packageDetails, description: e.target.value })}></textarea>

              </div>

              <div className="col-md-6 col-sm-12">
                {
                  selectedImagesUrl[0] ? <div className="image-preview-div  ">
                    {renderPreviousImages()}
                  </div> : ''
                }
                <div className="flex">
                  <label htmlFor="fileInput" className="custom-file-selector-button">
                    <FontAwesomeIcon icon={faPlus} className="plus-icon" />
                    <span>Select Images</span>
                    <input
                      id="fileInput"
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageChange}
                    />
                  </label>{
                    images[0] ? <div onClick={clearImages} className='dlt-images'>
                      <FontAwesomeIcon icon={faTrash} className='trash-icon' />
                      <p>Clear All </p>
                    </div>
                      : ''
                  }
                </div>
                {
                  images[0] ? <div className="image-preview-div  ">
                    {renderImagePreviews()}
                  </div> : ''
                }
                <div className="selected-options ">
                  <ul>
                    {packageDetails?.activities?.map((option, index) => (
                      <li className='options' key={index}>{option}</li>
                    ))}
                  </ul>
                </div>
                <select onChange={handleSelectOption}>
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

                  selectedOptions ? <div onClick={clearActivities} className='dlt-activities'>
                    <FontAwesomeIcon icon={faTrash} className='trash-icon' />
                    <p>Clear All </p>
                  </div>
                    : ''
                }
              </div>
              <div className="flex">
                <button className='add-btn' type='submit'>Submit Edits</button>
                <Link to='/admin/add-packages'>
                  <button className='cancel-btn'>Cancel</button>
                </Link>
              </div>

            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default EditPackage
