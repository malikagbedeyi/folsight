import React, { useEffect, useState } from 'react'
import logo from '../assets/Images/folsight.png'
import img1 from "../assets/Images/shape2.png"
import img2 from "../assets/Images/shape3.png" 
import img3 from "../assets/Images/shape-sq.png"
import img4 from "../assets/Images/shape-c-2.png"
import '../assets/scss/footer.scss'
import 'aos/dist/aos.css';
import AOS from 'aos';
const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, 
            easing: 'ease-in',
            once: true, 
          });
      }, []);
  return (
    <div className='footer'>
        {/* <div className="footerForm"  data-aos="zoom-out-right">
            <div className="footerFormText">
                <h1>Subscribe Our Newsletter to Get New Updates.</h1>
            </div>
            <div className="footerEmail">
                <input type="email"
                placeholder='Enter your email' />
                <button><i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div> */}
        {/* <div className="animate-icons">
        <div class="shape-slider">
                <img class="shape shape-2  " src={img1} alt="" />
                <img class="shape shape-4 " src={img2} alt="" />
                <img class="shape shape-5 " src={img3} alt="" />
                <img class="shape shape-6 " src={img4}  alt="" />
            </div>
        </div> */}
    <div className="footerBody">
      <div className="footerBodyContainer row">
          <div className="footerBodyContainerParent col-lg-3">
              <div className="footerBodyContainerChild">
                  <div className="footerBodyContainerChildTop">
                      <img src={logo} alt="" />
                  </div>
                  <div className="footerBodyContainerChildBody">
                  <p>This emphasizes both advanced technology and the comprehensive nature of the services provided, projecting reliability and expertise in security</p>
                  </div>
              </div>
          </div>
          <div className="footerRightParent col-lg-6">
              <div className="footerRightChild">
                  <div className='footerRightChildTittle'>
                      <h3>Products</h3>
                      <ul>
                        <li><a href="#">Audit Room</a></li>
                          <li><a href="#">Compliance</a></li>
                          <li><a href="#">RiskCore</a></li>
                              </ul>
              </div>
              <div className='footerRightChildTittle-1'>
                         <h3>Frameworks</h3>
                         <ul>
                         <li><a href="#/framework_01">IS027001</a></li>
                         <li><a href="#/framework_02">HIPAA</a></li>
                         <li><a href="#/framework_03">SOC2</a></li>
                      </ul>
              </div>
              <div className='footerRightChildTittle-1'>
                <ul>
                          <li><a href="#/framework_04">GDPR</a></li>
                      <li><a href="#/framework_05">NIST</a></li>
                         <li><a href="#/framework_05">PCIDSS</a></li>
                      </ul>
              </div>
              <div className='footerRightChildTittle2'>
                <ul>
                <li><a href="#/framework_01">IS027001</a></li>
                         <li><a href="#/framework_02">HIPAA</a></li>
                         <li><a href="#/framework_03">SOC2</a></li>
                          <li><a href="#/framework_04">GDPR</a></li>
                      <li><a href="#/framework_05">NIST</a></li>
                         <li><a href="#/framework_05">PCIDSS</a></li>
                      </ul>
              </div>
              <div className='footerRightChildTittle'>
              <h3>Pages</h3>
                      <ul>
                                  <li><a href="#/about_us">About Us</a></li>
                                  <li><a href="#">Contact Us</a></li>
                                  <li><a href="#">Team</a></li>
                              </ul>
              </div>
                     
              </div>

              </div>
              <div className="footerBodyContainerChildButtom col-lg-3">
                      <ul>
                          <li className=''><a href=""><svg xmlns="http://www.w3.org/2000/svg" width='15'  viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>  </a> </li>
                          <li className=''><a href=""><svg className='iconCover' xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg> </a> </li>
                          <li className=''><a href=""><svg className='iconCover' xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 448 512"> <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg> </a> </li>
                          <li className='iconCover'><a href=""> <i className="fa-solid fa-x"></i> </a> </li>
                          
                      </ul>
                      {/* <li className='iconCover'><a href=""><i class=' bxl-facebook' ></i> </a> </li>
                          <li className='iconCover'><a href=""> <i class=' bxl-linkedin' ></i> </a> </li>
                          <li className='iconCover'><a href=""> <i class=' bxl-instagram'></i> </a> </li>
                          <li className='iconCover'><a href=""> <i className=" fa-solid fa-x"></i> </a> </li> */}
                  </div>
      </div>

      <div className="copyright row">
          <div className="copyrightParent col-lg-6 col-md-6 col-sm-12">
              <div className="copyrightChild">
          <p>Copyright © 2024 Folsight. All rights reserved</p>
          </div>            
          </div>
          <div className="copyrightParentLink col-lg-6 col-md-6 col-sm-12">
              <div className="copyrightChildLink">
                <ul>
                       <li><a href="/about">About</a></li>
                       <li><a href="#">Tips &amp; Tricks</a></li>
                      <li><a href="#">Service</a></li>
                  </ul>                
              </div>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Footer
