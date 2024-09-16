import React from 'react'
import Navbar from '../../Components/Navbar'
import RiskCoreBody from '../../Components/Product Body/RiskCoreBody'
import Footer from '../../Components/Footer'
import '../../assets/scss/AuditRoom.scss'

const RiskCore = () => {
  return (
    <div>
        <Navbar />
        <RiskCoreBody />
      <Footer />
    </div>
  )
}

export default RiskCore
