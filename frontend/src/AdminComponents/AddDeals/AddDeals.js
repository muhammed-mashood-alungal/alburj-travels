import React, { useState } from 'react'
import '../AddDeals/AddDeals.css'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash, faArrowUpFromBracket, faPen } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
function AddDeals() {
  const [topDeals, setTopDeals] = useState([])
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState('')
  const [image, setImage] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    const token = localStorage.getItem('JwtToken')
    if (!token) {
      navigate('/admin/login')
    }
    axios.get('http://localhost:8000/api/topDeals').then((deals) => {
      console.log(deals)
      setTopDeals(deals.data)
      console.log(deals)
    })
  }, [])

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const clearImages = () => {
    setImage(null)
  }

  const renderImage = () => {
    const imageSrc = URL.createObjectURL(image)

    return <img src={imageSrc} alt="deal Image" className='selected-img' />
  }
  const showDealDetails = (dealId) => {
    navigate(`/admin/show/deal/${dealId}`)
  }
  const editDeal = (dealId) => {
    navigate(`/admin/edit/deal/${dealId}`)
  }

  const deleteDeal = async (dealId) => {
    const confirmed = window.confirm('Are you sure you want to delete this Deal?');
    if (confirmed) {
      try {
        const response = await axios.delete(`http://localhost:8000/api/topDeals/${dealId}`)
        alert(response.data)
      } catch (err) {
        alert(err)
      }
    }
  }


  const onSubmit = async (data) => {

    try {
      const formData = new FormData()
      formData.append('image', image);
      const dealData = {
        from: data.from,
        to: data.to,
        baggage: data.baggage,
        airline: data.airline,
        price: data.price,
        description: data.description
      }
      for (const key in dealData) {
        if (dealData.hasOwnProperty(key)) {
          formData.append(key, dealData[key]);
        }
      }

      axios.post('http://localhost:8000/api/topDeals', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((res => {
        alert('Added Successfully')
      })).catch(err => {
        alert('Error Occured')

      })
      navigate('/admin/add-deals');
    } catch (error) {
      setErrMsg(error.response?.data.message);
    }
  };

  return (
    <>
      <section className="admin-deal-section">
        <div className="add-deals">
          <h2>Add Deals</h2>
          <form action="" onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
            <div className="row">
              <div className="col-md-6 col-sm-12">

                {errMsg && <p className="package-err-msg">{errMsg}</p>}
                <input type="text" className="deal-input" placeholder="From" {...register('from', { required: true })} />
                {errors.from && <p className="deal-error-msg">Please enter the origin</p>}

                <input type="text" className="deal-input" placeholder="To" {...register('to', { required: true })} />
                {errors.to && <p className="deal-error-msg">Please enter the destination</p>}

                <div className="flex">
                  <div>
                    <input type="text" className="deal-input halved-input" placeholder="Price" {...register('price', { required: true })} />
                    {errors.price && <p className="deal-error-msg">Please enter the price</p>}
                  </div>
                  <div>
                    <input type="text" className="deal-input halved-input" placeholder="Baggage" {...register('baggage', { required: true })} />
                    {errors.baggage && <p className="deal-error-msg">Please enter the price</p>}
                  </div>
                </div>

                <input type="text" className="deal-input duration-input" placeholder="Airline" {...register('airline', { required: true })} />
                {errors.airline && <p className="deal-error-msg">Please enter airline</p>}

                <textarea name="description" className="deal-input description-input" placeholder="Description" {...register('description', { required: true })}></textarea>
                {errors.description && <p className="deal-error-msg">Please enter description</p>}

                <div className="flex">
                  <label htmlFor="fileInput" className="custom-file-selector-button">
                    <FontAwesomeIcon icon={faPlus} className="plus-icon" />
                    <span>Select Image</span>
                    <input
                      id="fileInput"
                      type="file"
                      accept="image/.jpg"
                      onChange={handleImageChange}
                    />

                  </label>{
                    image ? <div onClick={clearImages} className='dlt-image'>
                      <FontAwesomeIcon icon={faTrash} className='trash-icon' />
                      <p>Delete</p>
                    </div>
                      : ''
                  }
                </div>
                {
                  image ? <div className=" ">
                    {renderImage()}</div> : ''
                }
                <button className='add-btn'>Add Deal</button>
              </div>
            </div>
          </form>
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
            {
              topDeals?.map((deal, index) => {
                return <tr key={index}>
                  <td>{index}</td>
                  <td>{deal.from}</td>
                  <td>{deal.to}</td>
                  <td>{deal.price}</td>
                  <td>
                    <FontAwesomeIcon icon={faArrowUpFromBracket} onClick={() => showDealDetails(deal._id)} className='option-icon' />
                    <FontAwesomeIcon icon={faPen} onClick={() => editDeal(deal._id)} className='option-icon' />
                    <FontAwesomeIcon icon={faTrash} onClick={() => deleteDeal(deal._id)} className='option-icon' />
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

export default AddDeals
