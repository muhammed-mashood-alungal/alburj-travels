import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../AddPackages/AddPackages.css'
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash, faArrowUpFromBracket, faPen } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

function AddPackages() {
  const navigate = useNavigate();
  const [options, setOptions] = useState([])
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [allPackages, setAllPackages] = useState([])
  const [packageDetails, setPackageDetails] = useState({})
  const [images, setImages] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [errMsg, setErrMsg] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('JwtToken')
    if (!token) {
      navigate('/admin/login')
    }
    axios.get('http://localhost:8000/api/package').then((packages) => {
      console.log(packages)
      setAllPackages(packages.data)
      console.log(allPackages)
    })
    axios.get('http://localhost:8000/api/admin/company/options').then(result => {
      console.log(result.data)
      setOptions(result.data)
    })
  }, [])



  const handleChange = (e) => {
    setPackageDetails({ ...packageDetails, [e.target.name]: e.target.value })
  }
  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages([...images, ...selectedImages]);
  };

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
    const isExist = selectedOptions.includes(option);
    if (!isExist && option !== "") {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  const clearActivities = () => {
    setSelectedOptions([])
  }

  const showPackageDetails = (packageId) => {
    navigate(`/admin/show/package/${packageId}`)
  }

  const editPackage = (packageId) => {
    navigate(`/admin/edit/package/${packageId}`)
  }

  const deletePackage = async (packageId) => {
    const confirmed = window.confirm('Are you sure you want to delete this Package?');
    if (confirmed) {
      try {
        const response = await axios.delete(`http://localhost:8000/api/package/${packageId}`)

        alert(response.data)
        navigate('/admin/add-packages')
      } catch (err) {
        alert(err)
      }
    }
  }

  const onSubmit = async (data) => {
    try {
      const formData = new FormData()
      images.forEach((image, index) => {
        formData.append('images', image);
      })
      const packageData = {
        name: data.name,
        destination: data.destination,
        days: data.days,
        nights: data.nights,
        price: data.price,
        description: data.description,
        activities: Array.from(selectedOptions)
      }
      for (const key in packageData) {
        if (packageData.hasOwnProperty(key)) {
          formData.append(key, packageData[key]);
        }
      }


      axios.post('http://localhost:8000/api/package', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((res => {
        alert('added Successfully')
      })).catch(err => {
       console.log('Error Occured')
      })
      navigate('/admin/add-packages');
    } catch (error) {
      setErrMsg(error.response?.data.message);
    }
  };


  return (
    <>
      <section className="admin-package-section">
        <div className="add-packages">
          <h2>Add Package</h2>
          <form action="" onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
            <div className="row">

              <div className="col-md-6 col-sm-12">
                {errMsg && <p className="package-err-msg">{errMsg}</p>}

                <input type="text" className="package-input" name='name'
                  placeholder='Package Name ' value={packageDetails.name} onChange={handleChange}
                  {...register('name', { required: { value: true, message: 'Please Enter Package Name' } })} />
                <p className="package-err-msg">{errors?.name?.message}</p>

                <input type="text" className="package-input" name='destination'
                  placeholder='Destination' value={packageDetails.destination} onChange={handleChange}
                  {...register('destination', { required: { value: true, message: 'Please Enter Destination' } })} />
                <p className="package-err-msg">{errors?.destination?.message}</p>

                <p>Duration</p>
                <div className="flex">
                  <div>
                    <input type="Number" className="package-input duration-input" name='days'
                      placeholder='Days' value={packageDetails.days} onChange={handleChange}
                      {...register('days', { required: { value: true, message: 'Please Enter Days' } })} />
                    <p className="package-err-msg">{errors?.days?.message}</p>
                  </div>

                  <div>
                    <input type="Number" className="package-input duration-input" name='nights'
                      placeholder='Nights' value={packageDetails.nights} onChange={handleChange}
                      {...register('nights', { required: { value: true, message: 'Please Enter Nights' } })} /> <br />
                    <p className="package-err-msg">{errors?.nights?.message}</p>
                  </div>
                </div>

                <input type="Number" className="package-input" name='price'
                  placeholder='Price' value={packageDetails.price} onChange={handleChange}
                  {...register('price', { required: { value: true, message: 'Please Enter The Price' } })} />
                <p className="package-err-msg">{errors?.price?.message}</p>

                <textarea name="description" className='package-input description-input'
                  placeholder='Description' value={packageDetails.description} onChange={handleChange}
                  {...register('description', { required: { value: true, message: 'Please Provide a Description' } })}></textarea>
                <p className="package-err-msg">{errors?.description?.message}</p>


              </div>

              <div className="col-md-6 col-sm-12">
                <div className="flex">
                  <label htmlFor="fileInput" className="custom-file-selector-button">
                    <FontAwesomeIcon icon={faPlus} className="plus-icon" />
                    <span>Select Images</span>
                    <input
                      id="fileInput"
                      type="file"
                      accept="image/.jpg"
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
                <select onChange={handleSelectOption}>
                  <option value="">Select Activities</option>
                  {options?.map((option, index) => (
                    <option key={index} value={option} name={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <div className="selected-options ">
                  <ul>
                    {selectedOptions?.map((option, index) => (
                      <li className='options' key={index}>{option}</li>
                    ))}
                  </ul>
                </div>
                {
                  selectedOptions[0] ? <div onClick={clearActivities} className='dlt-activities'>
                    <FontAwesomeIcon icon={faTrash} className='trash-icon' />
                    <p>Clear All </p>
                  </div>
                    : ''
                }

              </div>
              <button className='add-btn' type='submit'>Add Package</button>
            </div>
          </form>
        </div>


      </section>

      <section className='all-packages-section'>
        <h2>All Packages</h2>
        <div className="table-cotainer">
          <table className='packages-table'>
            <tr>
              <th>SI No</th>
              <th>Name</th>
              <th>Price</th>
              <th>Options</th>
            </tr>
            <hr />
            {

              allPackages?.map((pckg, index) => {
                return <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{pckg.name}</td>
                  <td>{pckg.price}</td>
                  <td>
                    <FontAwesomeIcon icon={faArrowUpFromBracket} onClick={() => showPackageDetails(pckg._id)} className='option-icon' />
                    <FontAwesomeIcon icon={faPen} onClick={() => editPackage(pckg._id)} className='option-icon' />
                    <FontAwesomeIcon icon={faTrash} onClick={() => deletePackage(pckg._id)} className='option-icon' />
                  </td>
                </tr>
              })
            }
          </table>
        </div>
      </section>

    </>
  )
}

export default AddPackages
