import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from '../assets/Images/logoWhite.png'
import logo from '../assets/Images/folsight.png'
import Grc1 from '../assets/Images/grc-01.png'
import Grc2 from '../assets/Images/grc-02.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
        const navigate =  useNavigate();
        useEffect(() => {
            AOS.init({
                duration: 800, // Customize the duration of the animation
                easing: 'ease-in-out', // Customize the easing of the animation
                once: true, // Whether animation should happen only once
              });
          }, []);
    
      return (
        <div >
        <section className="menuSection">
                <div className="coverback">
            <div className="row firstRow">
                <div className="leftWrapper col-xl-6 col-lg-6 col-md-10">
                <div className="container">
                <div className='leftWrapperText'>
                <h1  data-aos="fade-in-up" >GRC solutions for Your Organization</h1>
                <p data-aos="fade-in-down">Powering Continuous Compliance through Insight-Driven <strong>GRC</strong> Automation </p>
                </div>
                         <button onClick={() => navigate('/request-demo')} className='btn submit'>REQUEST A DEMO </button>
                </div>
                </div>
                <div className="rightWrapper col-xl-6 col-lg-6 d-block  d-lg-block" data-aos="fade-in-right" data-aos-duration="2500">
                {/* <div className="rightWrapperImg" data-aos="flip-left">
                    <img src={Grc2} alt="" data-aos="fade-up" /> 
                    <img src={Grc2} alt="" data-aos="fade-right" />
                    <img className="bottomImg" src={Grc2} alt="" data-aos="fade-down" />
                    <img className="middleImg" src={Grc1} alt="" data-aos="fade-left" />
                     </div> */}
                     <div className="rightWrapperVideo">
                    <video
                    playsInline
                    className="mui-1se970o-video"
                     controls
                    data-automation="VideoPlayer"
                    height="100%"
                    muted
                    autoPlay
                    width="100%"
                    poster="https://www.shutterstock.com/shutterstock/videos/3536067231/thumb/7.jpg?ip=x480"
                    preload="auto"
                    // aria-label="video-player"
                    // controlsList="nodownload"
                    >
  <source
    src="https://www.shutterstock.com/shutterstock/videos/3536067231/preview/stock-footage-zoom-out-top-down-view-diverse-team-of-business-professionals-with-laptops-entering-the-conference.webm"
    type="video/webm"
  />
  <source
    src="https://www.shutterstock.com/shutterstock/videos/3536067231/preview/stock-footage-zoom-out-top-down-view-diverse-team-of-business-professionals-with-laptops-entering-the-conference.mp4"
    type="video/mp4"
  />
  Your browser does not support the video tag.
</video>
                </div>
                </div>
            </div>
            <div className="row secondRow">
            <div className="rightWrapper col-xl-6 col-lg-6 d-block  d-lg-block" data-aos="fade-in-right" data-aos-duration="2500">
                {/* <div className="rightWrapperImg" data-aos="flip-left">
                    <img src={Grc2} alt="" data-aos="fade-up" />
                    <img src={Grc2} alt="" data-aos="fade-right" />
                    <img className="bottomImg" src={Grc2} alt="" data-aos="fade-down" />
                    <img className="middleImg" src={Grc1} alt="" data-aos="fade-left" />
                     </div> */}
                        <div className="rightWrapperVideo">
                    <video
                    playsInline
                    className="mui-1se970o-video"
                     controls
                    data-automation="VideoPlayer"
                    height="100%"
                    muted
                    autoPlay
                    width="100%"
                    poster="https://www.shutterstock.com/shutterstock/videos/3536067231/thumb/7.jpg?ip=x480"
                    preload="auto"
                    aria-label="video-player"
                    controlsList="nodownload"
                    >
  <source
    src="https://www.shutterstock.com/shutterstock/videos/3536067231/preview/stock-footage-zoom-out-top-down-view-diverse-team-of-business-professionals-with-laptops-entering-the-conference.webm"
    type="video/webm"
  />
  <source
    src="https://www.shutterstock.com/shutterstock/videos/3536067231/preview/stock-footage-zoom-out-top-down-view-diverse-team-of-business-professionals-with-laptops-entering-the-conference.mp4"
    type="video/mp4"
  />
  Your browser does not support the video tag.
</video>
                </div>
                </div>
                <div className="leftWrapper col-xl-6 col-lg-6 col-md-10">
                <div className="container">
                <div className='leftWrapperText'>
                <h1  data-aos="fade-in-up" >GRC solutions for Your Organization</h1>
                <p data-aos="fade-in-down">Scalable <strong>GRC</strong> solutions for organizations of all sizes that grow with you every step of the way, simplifying your security compliance and removing obstacles to help you achieve your goals. </p>
                </div>
                         <button onClick={() => navigate('/request-demo')} className='btn submit'>REQUEST A DEMO </button>
                </div>
                </div>
            </div>
        </div>       
            </section>
            
            <section>
            </section>
                </div>
      )
    }
        

export default Header
