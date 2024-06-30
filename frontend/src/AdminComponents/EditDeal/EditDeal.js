import React, { useState, useEffect } from 'react'
import '../EditDeal/EditDeal.css'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useForm } from 'react-hook-form'

function EditDeal() {

  const [photo, setImage] = useState(null)
  const { dealId } = useParams();
  const [dealDetails, setDealdetails] = useState({})
  const [errMsg, setErrMsg] = useState('')
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState('')


  let url = require(`../../uploads/deals/${dealId}.jpg`)


  useEffect(() => {
    const token = localStorage.getItem('JwtToken')
    if (!token) {
      navigate('/admin/login')
    }

    const fetchDealDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/topDeals/${dealId}`);
        setDealdetails(response.data)
        setImageUrl(url)
        console.log(dealDetails);
      } catch (error) {
        console.error('Error fetching deal details:', error);
      }
    };
    fetchDealDetails();
  }, []);
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
    url = URL.createObjectURL(selectedImage)
    setImageUrl(url)
  };

  const clearImages = () => {
    setImage(null)
  }
  const renderImage = () => {
    return <img src={imageUrl} alt="deal Image" className='selected-img' />;
  }


  const handleEdit = async (data) => {
    try {
      const formData = new FormData()
      data.from = dealDetails.from
      data.to = dealDetails.to
      data.baggage = dealDetails.baggage
      data.airline = dealDetails.airline
      data.price = dealDetails.price
      data.description = dealDetails.description
      console.log('printing data ' + data)
      formData.append('image', photo);

      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          formData.append(key, data[key]);
        }
      }


      axios.put(`http://localhost:8000/api/topDeals/${dealId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((res => {
        alert(res.data.message)
        navigate('/admin/add-deals')
      })).catch(err => {
        alert('something Went Wrong , Try Again')
        navigate('/admin/add-deals')
      })
    } catch (error) {
      setErrMsg(error.response?.data.message);
    }
  };



  return (
    <>
      <section className="admin-deal-section">
        <div className="edit-deal">
          <h2>Edit Deal</h2>
          {
            <form onSubmit={handleSubmit(handleEdit)} encType='multipart/form-data'>
              <div className="row">
                <div className="col-md-6 col-sm-12">

                  <input type="text" className="deal-input" placeholder="From" value={dealDetails.from}
                    onChange={e => setDealdetails({ ...dealDetails, from: e.target.value })} />

                  <input type="text" className="deal-input" placeholder="To" value={dealDetails.to}
                    onChange={e => setDealdetails({ ...dealDetails, to: e.target.value })} />
                  {errors.to && <p className="deal-error-msg">Please enter the destination</p>}

                  <div className="flex">
                    <div>
                      <input type="text" className="deal-input halved-input" placeholder="Price" value={dealDetails.price}
                        onChange={e => setDealdetails({ ...dealDetails, price: e.target.value })} />
                      {errors.price && <p className="deal-error-msg">Please enter the price</p>}
                    </div>

                    <div>
                      <input type="text" className="deal-input halved-input" placeholder="Baggage"
                        value={dealDetails.baggage} name='baggage' onChange={e => setDealdetails({ ...dealDetails, baggage: e.target.value })} />
                      {errors.baggage && <p className="deal-error-msg">Please enter the price</p>}
                    </div>
                  </div>

                  <input type="text" className="deal-input duration-input" placeholder="Airline"
                    value={dealDetails.airline} name='airline'
                    onChange={e => setDealdetails({ ...dealDetails, airline: e.target.value })} />
                  {errors.airline && <p className="deal-error-msg">Please enter airline</p>}

                  <textarea name="description" className="deal-input description-input" placeholder="Description"
                    value={dealDetails.description}
                    onChange={e => setDealdetails({ ...dealDetails, description: e.target.value })}></textarea>
                  {errors.description && <p className="deal-error-msg">Please enter description</p>}

                  <div className="flex">
                    <label htmlFor="fileInput" className="custom-file-selector-button">
                      <FontAwesomeIcon icon={faPlus} className="plus-icon" />
                      <span>Select Image</span>
                      <input
                        id="fileInput"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </label>{
                      photo ? <div onClick={clearImages} className='dlt-image'>
                        <FontAwesomeIcon icon={faTrash} className='trash-icon' />
                        <p>Delete</p>
                      </div>
                        : ''
                    }
                  </div>
                  <div>
                    {renderImage()}
                  </div>



                  <button className='add-btn' type='submit'>Submit Edits</button>
                  <Link to='/admin/add-deals'>
                    <button className='cancel-btn'>Cancel</button>
                  </Link>
                </div>
              </div>
            </form>
          }
        </div>
      </section>


    </>
  )



}

export default EditDeal
