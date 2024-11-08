import React from 'react'
import Footer from '../../Components/Footer'
import '../../assets/scss/FrameWork/framework_01.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import FrameWork_05_Body from '../../Components/FrameWorkBody/FrameWork_05_Body'
import CoverFrame_05 from '../../Components/FrameWorkBody/CoverFramework/CoverFrame_05';
import Navbar from '../../Components/Navbar';
import FrameWorkForm from './FrameWorkForm';
import TOpbar from '../../Components/Topbar';

const FrameWork05 = () => {
  return (
    <div className='framework'>
      {/* <Navbar /> */}
      <TOpbar />
      <CoverFrame_05 />
      {/* <FrameWorkForm /> */}
      <FrameWork_05_Body />
      <Footer />
    </div>
  )
}

export default FrameWork05
