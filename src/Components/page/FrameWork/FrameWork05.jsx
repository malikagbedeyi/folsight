import React from 'react'
import Footer from '../../Footer'
import '../../../assets/scss/FrameWork/framework_01.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import FrameWork_05_Body from '../../FrameWorkBody/FrameWork_05_Body'
import TOpbar from '../../Topbar';
import CoverFrame_05 from '../../FrameWorkBody/CoverFramework/CoverFrame_05';

const FrameWork05 = () => {
  return (
    <div className='framework'>
      {/* <Navbar /> */}
      <TOpbar />
      <CoverFrame_05 />
      <FrameWork_05_Body />
      <Footer />
    </div>
  )
}

export default FrameWork05
