import React from 'react'
import Navbar from '../../Navbar'
import AuditRoomBody from '../../Product Body/AuditRoomBody'
import Footer from '../../Footer'
import '../../../assets/scss/AuditRoom.scss'
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
