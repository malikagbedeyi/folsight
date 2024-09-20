import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/scss/aboutUs.scss'
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import AboutUsBody from '../../Components/Company Body/AboutUsBody';
import TOpbar from '../../Components/Topbar';
const AboutUs = () => {
  return (
    <div className='about-us'>
      {/* <Navbar /> */}
      <TOpbar />
      <AboutUsBody />
      <Footer />
    </div>
  )
}

export default AboutUs
