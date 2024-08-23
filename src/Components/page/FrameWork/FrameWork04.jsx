import React from 'react'
import Footer from '../../Footer'
import '../../../assets/scss/FrameWork/framework_01.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import FrameWork_04_Body from '../../FrameWorkBody/FrameWork_04_Body'
import TOpbar from '../../Topbar';
import CoverFrame_04 from '../../FrameWorkBody/CoverFramework/CoverFrame_04';

const FrameWork04 = () => {
  return (
    <div className='framework'>
      {/* <Navbar /> */}
      <TOpbar />
      <CoverFrame_04 />
      <FrameWork_04_Body />
      <Footer />
    </div>
  )
}

export default FrameWork04
