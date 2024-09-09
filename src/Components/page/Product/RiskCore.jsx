import React from 'react'
import Navbar from '../../Navbar'
import RiskCoreBody from '../../Product Body/RiskCoreBody'
import Footer from '../../Footer'
import '../../../assets/scss/AuditRoom.scss'

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
