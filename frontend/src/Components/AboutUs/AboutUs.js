import React, { useEffect, useState } from 'react'
import '../AboutUs/AboutUs.css'
import axios from 'axios'
function AboutUs() {
  const [companyInfo, setCompanyInfo] = useState({})
  useEffect(() => {
    const fetchCompanyDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/admin/company`);
        setCompanyInfo(response.data)
      } catch (error) {
        alert('Error fetching deal details:', error);
      }
    };
    fetchCompanyDetails();
  }, [])
  return (
    <>
      <section className="about-bg-image-div">
        <div className="about-bg-image">
          <h1>About Us</h1>
        </div>
      </section>
      <section className='container about-content-section'>
        <p>&nbsp; &nbsp;
          {companyInfo.about}
        </p>
        <hr />
        <h2 className='highlights'>Terms And Conditions</h2>
        <p>{companyInfo.termsAndCondition}</p>
      </section>
    </>
  )
}

export default AboutUs
