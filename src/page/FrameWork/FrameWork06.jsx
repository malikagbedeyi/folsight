import React from 'react'
import Footer from '../../Components/Footer'
import '../../assets/scss/FrameWork/framework_01.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../Components/Navbar';
import FrameWorkForm from './FrameWorkForm';
import TOpbar from '../../Components/Topbar';
import CoverFrame_06 from '../../Components/FrameWorkBody/CoverFramework/CoverFrame_06';
import FrameWork_06_Body from '../../Components/FrameWorkBody/FrameWork_06_Body';

const FrameWork06 = () => {
  return (
    <div className='framework'>
      {/* <Navbar /> */}
      <TOpbar />
      <CoverFrame_06 />
      {/* <FrameWorkForm /> */}
      <FrameWork_06_Body />
      <Footer />
    </div>
  )
}

export default FrameWork06
