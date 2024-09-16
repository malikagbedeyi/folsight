import React from 'react'
import Navbar from '../../Components/Navbar'
import AuditRoomBody from '../../Components/Product Body/AuditRoomBody'
import '../../assets/scss/AuditRoom.scss'
import Footer from '../../Components/Footer'
const AuditRoom = () => {
  return (
    <div>
      <Navbar />
      <AuditRoomBody />
      <Footer />
    </div>
  )
}

export default AuditRoom
