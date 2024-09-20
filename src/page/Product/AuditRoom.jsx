import React from 'react'
import Navbar from '../../Components/Navbar'
import AuditRoomBody from '../../Components/Product Body/AuditRoomBody'
import '../../assets/scss/AuditRoom.scss'
import Footer from '../../Components/Footer'
import TOpbar from '../../Components/Topbar'
const AuditRoom = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <TOpbar />
      <AuditRoomBody />
      <Footer />
    </div>
  )
}

export default AuditRoom
