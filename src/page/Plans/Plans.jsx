import React from 'react'
import Navbar from '../../Components/Navbar'
import PlansBody from '../../Components/PlansBody/PlansBody'
import Footer from '../../Components/Footer'
import CoverPlans from '../../Components/PlansBody/CoverPlans'
import '../../assets/scss/plans.scss'

const Plans = () => {
  return (
    <div className='pricing'>
        <Navbar />
        <CoverPlans />
        <PlansBody />
        <Footer />
    </div>
  )
}

export default Plans
