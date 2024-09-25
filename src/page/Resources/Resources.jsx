import React from 'react'
import TOpbar from '../../Components/Topbar'
import Footer from '../../Components/Footer'
import CoverResources from '../../Components/ResourcesBody/CoverResources'
import ResourcesBody from '../../Components/ResourcesBody/ResourcesBody'
import '../../assets/scss/resources.scss'
import FrameWork_01_Body from '../../Components/FrameWorkBody/FrameWork_01_Body'
const Resources = () => {
  return (
    <div className='resources'>
      <TOpbar />
      <CoverResources />
      <ResourcesBody />
      {/* <FrameWork_01_Body /> */}
      <Footer />
    </div>
  )
}

export default Resources
