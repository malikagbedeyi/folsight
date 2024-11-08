import React from 'react'
import Footer from '../../Components/Footer'
import '../../assets/scss/FrameWork/framework_01.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import FrameWork_02_Body from '../../Components/FrameWorkBody/FrameWork_02_Body'
import CoverFrame_02 from '../../Components/FrameWorkBody/CoverFramework/CoverFrame_02';
import FrameWorkForm from './FrameWorkForm';
import Navbar from '../../Components/Navbar';
import TOpbar from '../../Components/Topbar';

const FrameWork02 = () => {
  return (
    <div className='framework'>
      {/* <Navbar /> */}
      <TOpbar />
      <CoverFrame_02 />
      {/* <FrameWorkForm /> */}
      <FrameWork_02_Body />
      <Footer />
    </div>
  )
}

export default FrameWork02
