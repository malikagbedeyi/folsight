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
        <div className="footerForm"  data-aos="zoom-out-right">
            <div className="footerFormText">
                <h1>Subscribe Our Newsletter to Get New Updates.</h1>
            </div>
            <div className="footerEmail">
                <input type="email" />
                <button><i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
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
                  <p>Winged moving moveth created for shall and a divide 
                          the their days male midst shall hath doesn't won't 
                          for. Midst life.Over a great night. Green upon years
                           rule ying</p>
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
              {/* <div className='footerRightChildTittle'>
                     <h3>Platforms</h3>
                      <ul>
                                  <li><a href="#">Ai</a></li>
                                  <li><a href="#">Api</a></li>
                                  <li><a href="#">Integration</a></li>
                            
                              </ul>
              </div> */}
              <div className='footerRightChildTittle'>
                         <h3>Frameworks</h3>
                      <ul>
                                  <li><a href="#/framework_01">IS027001</a></li>
                                  <li><a href="#/framework_02">HIPAA</a></li>
                                  <li><a href="#/framework_03">SOC2</a></li>
                                  <li><a href="#/framework_04">GDPR</a></li>
                                  <li><a href="#/framework_05">NIST</a></li>
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
                          <li className='iconCover'><a href=""><i class="fa-brands fa-facebook-f"></i>  </a> </li>
                          <li className='iconCover'><a href=""> <i class="fa-brands fa-linkedin-in"></i>  </a> </li>
                          <li className='iconCover'><a href=""> <i class="fa-brands fa-skype"></i> </a> </li>
                          <li className='iconCover'><a href=""> <i className=" fa-solid fa-x"></i> </a> </li>
                          
                      </ul>
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
