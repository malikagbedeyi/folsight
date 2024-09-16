import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import '../../assets/scss/AuditRoom.scss'
import ComplianceBody from '../../Components/Product Body/ComplianceBody'

const Compliance = () => {
  return (
    <div>
        <Navbar />
        <ComplianceBody />
      <Footer />
    </div>
  )
}
export default Compliance
