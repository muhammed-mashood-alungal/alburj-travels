import { Fragment } from 'react'
import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import TopDeal from '../Components/TopDeal/TopDeals'
import Banner from '../Components/Banner/Banner'
import Packages from '../Components/Packages/Packages'
import Services from '../Components/Services/Services'
import Reviews from '../Components/Reviews/Reviews'
import ContactUs from '../Components/ContactUs/ContactUs'
import Footer from '../Components/Footer/Footer'
function Home() {
  return (
    <Fragment>
     <Navbar/> 
     <Banner/>
     <TopDeal/>
     <Packages/>
     <Services/>
     <Reviews/>
     <ContactUs/>
     <Footer/>
   </Fragment>
  ) 
}

export default Home
