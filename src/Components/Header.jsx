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
        const [scroll,setScroll] = useState(false)
        const navigate =  useNavigate();
        useEffect(() => {
            AOS.init({initClassName: true})

            // const elements = document.querySelectorAll('.rightWrapperImg img');

            //   const triggerAnimation = () => {
            //     elements.forEach((element) => {
            //       element.style.animation = 'none';
            //       void element.offsetHeight; // Trigger reflow
            //       element.style.animation = 'movingRight 2s forwards';
            //     });
            //   };
            //   const intervalId = setInterval(triggerAnimation, 30000);
            //   return () => clearInterval(intervalId);
        },[])
        
    //     const [activeIndex, setActiveIndex] = useState(1);
    //   <a onClick={() => handleMenuClick(1)} className={ activeIndex === 1 ? 'active nav-link ' : 'non-active nav-link'}>
    //     const handleMenuClick = (id) => {
    //       setActiveIndex(id);
    //     };

        const changeBackground = () => {
            if(window.scrollY >= 150){
                setScroll(true);
            }else{
                setScroll(false);
            }
            console.log(setScroll)
        };
        window.addEventListener('scroll',changeBackground);
    
    
      return (
        <div className="">
        <section className="menuSection">
                <Navbar />
                <div className="  coverback">
            <div className="row">
                <div className="leftWrapper col-xl-6 col-lg-6 col-md-10">
                <div className="container">
                <div className='leftWrapperText'>
                <h1  data-aos="fade-in-up" data-aos-delay="400">GRC solutions for Your Organization</h1>
                <p data-aos="fade-in-up" data-aos-delay="900">Fortify your organization's governace, risk management,and compliance
                    effort with our-all-inclusive <strong>GRC</strong> solutions, designed to streamline processes,  enhance security, 
                    and ensure adherence to regulatory standards across every face of your business
                </p>
                </div>
                         <button onClick={() => navigate('/request-demo')} className='btn submit'>REQUEST A DEMO </button>
                </div>
                </div>
                <div className="rightWrapper col-xl-6 col-lg-6  d-none d-lg-block" data-aos="fade-in-right" data-aos-duration="2500">
                <div className="rightWrapperImg">
                    <img src={Grc2} alt="" />
                    <img src={Grc2} alt="" />
                    <img className='bottomImg' src={Grc2} alt="" />
                    <img className='middleImg' src={Grc1} alt="" />
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
