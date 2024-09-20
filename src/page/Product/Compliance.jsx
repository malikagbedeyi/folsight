import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import '../../assets/scss/AuditRoom.scss'
import ComplianceBody from '../../Components/Product Body/ComplianceBody'
import TOpbar from '../../Components/Topbar'

const Compliance = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <TOpbar />
        <ComplianceBody />
      <Footer />
    </div>
  )
}
export default Compliance
