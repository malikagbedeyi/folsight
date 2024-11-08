import React from 'react'
import Footer from '../../Components/Footer'
import '../../assets/scss/FrameWork/framework_01.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import FrameWork_03_Body from '../../Components/FrameWorkBody/FrameWork_03_Body'
import CoverFrame_03 from '../../Components/FrameWorkBody/CoverFramework/CoverFrame_03';
import FrameWorkForm from './FrameWorkForm';
import Navbar from '../../Components/Navbar';
import TOpbar from '../../Components/Topbar';

const FrameWork03 = () => {
  return (
    <div className='framework'>
      {/* <Navbar /> */}
      <TOpbar />
      <CoverFrame_03 />
      {/* <FrameWorkForm /> */}
      <FrameWork_03_Body />
      <Footer />
    </div>
  )
}

export default FrameWork03
