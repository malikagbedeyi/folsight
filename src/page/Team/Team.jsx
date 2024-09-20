import React from 'react'
import Navbar from '../../Components/Navbar'
import CoverTeam from '../../Components/teamBody/CoverTeam'
import TeamBody from '../../Components/teamBody/TeamBody'
import Footer from '../../Components/Footer'
import '../../assets/scss/team.scss'
import TOpbar from '../../Components/Topbar'

const Team = () => {
  return (
    <div className='team'>
      {/* <Navbar /> */}
      <TOpbar />
      <CoverTeam />
      <TeamBody />
      <Footer />
    </div>
  )
}

export default Team
