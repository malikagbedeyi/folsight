import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/scss/aboutUs.scss'
import Navbar from '../Navbar';
import Footer from '../Footer';
import AboutUsBody from '../Company Body/AboutUsBody';
const AboutUs = () => {
  return (
    <div className='about-us'>
      <Navbar />
      <AboutUsBody />
      <Footer />
    </div>
  )
}

export default AboutUs
