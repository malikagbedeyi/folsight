import React, { useState } from 'react'
import logo from '../assets/Images/folsight.png'
import '../assets/scss/footer.scss'
const Footer = () => {
  return (
    // <div className='footer'>
    //   <div className="footerBody">
    //     <div className="footerBodyContainer row">
    //         <div className="footerBodyContainerParent col-lg-4">
    //             <div className="footerBodyContainerChild footer-top">
    //                 <div className="footerBodyContainerChildTop">
    //                     <img src={logo} alt="Folsight" />
    //                 </div>
    //                 <div className="footerBodyContainerChildButtom">
    //                     <ul>
    //                         <li><a href=""><i className="fa-brands fa-facebook " style={{color:"#1877F2"}}></i>  </a> </li>
    //                         <li><a href=""> <i className="fa-brands fa-instagram " style={{color:"#E4405F"}}></i> </a> </li>
    //                         <li><a href=""> <i className="fa-sharp fa-solid fa-x " style={{color:"#000"}}></i> </a> </li>
    //                         <li><a href=""> <i className="fa-brands fa-linkedin " style={{color:"#0A66C2"}}></i>  </a> </li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="footerRightParent col-lg-4">
    //           <div className="footerRightChild">
    //                 <div className='footerRightChildTittle'>
    //                     <h3>Product</h3>
    //                     <ul>
    //                                 <li><a href="#">Product 01</a></li>
    //                                 <li><a href="#">Product 02</a></li>
    //                                 <li><a href="#">Product 03</a></li>
    //                                 <li><a href="#">Product 04</a></li>
    //                             </ul>
    //             </div>

    //             <div className='footerRightChildTittle'>
    //                     <h3>Platform</h3>
    //                     <ul>
    //                             <li><a href="#">Product  01</a></li>
    //                             <li><a href="#">Platform 02</a></li>
    //                             <li><a href="#">Platform 03</a></li>
    //                             <li><a href="#">Platform 04</a></li>
    //                             </ul>
    //             </div>

    //             <div className='footerRightChildTittle'>
    //                    <h3>FrameWork</h3>
    //                     <ul>
    //                     <li><a href="#">IS027001</a></li>
    //                       <li><a href="#">HIPAA</a></li>
    //                      <li><a href="#">SOC2</a></li>
    //                      <li><a href="#">GDPR</a></li>
    //                       <li><a href="#">NIST</a></li>
    //                   </ul>
    //             </div>
    //           </div>
    //          </div>
    //          <div className="footerRightParent col-lg-4">
    //          <div className="footerRightChild">
    //          <div className="footerRightChildContact">
    //             <div className="footerContactWrapper">
    //             <div className="leftWrapper">
    //             <h3>Contact Us</h3>
    //             <ul>
    //             <li><a href="#">About US</a></li>
    //             <li><a href="#">Team</a></li>
    //             </ul>
    //             </div>
    //             <div className="rightWrapper">
    //             <h3>PARTNERS</h3>
    //             <ul>
    //             <li><a href="#">Become a Parther</a></li>
    //             <li><a href="#">Our Client</a></li>
    //             </ul>
    //             </div>
    //             </div>
    //             <div className="footerContact">
    //                 <input type="email"  placeholder='Email Address'/>
    //                 <button><i class="fa-solid fa-paper-plane"></i> </button>
    //             </div>
    //             </div>
    //          </div>
    //         </div>
    //         <div className=" footer-Button">
    //         <div className=" footer-Button-Child-Parent">
    //         <div className="footer-Button-ChildBody">
    //                 <p>Fortify your organization's governace, risk management,and 
    //                     compliance effort with our-all-inclusive GRC solutions,
    //                      designed to streamline processes, enhance security, and
    //                       ensure adherence to regulatory standards across every face
    //                        of your business</p>
    //                 </div>
    //         </div>
    //     </div>
    //     </div>

    //     <div className="copyright row">
    //         <div className="copyrightParent col-lg-6 col-md-6 col-sm-12">
    //             <div className="copyrightChild">
    //         <p>Copyright © 2024 Folsight. All rights reserved</p>
    //         </div>            
    //         </div>
    //         <div className="copyrightParentLink col-lg-6 col-md-6 col-sm-12">
    //             <div className="copyrightChildLink">
    //               <ul>
    //                      <li><a href="/about">About</a></li>
    //                      <li><a href="#">Tips &amp; Tricks</a></li>
    //                     <li><a href="#">Service</a></li>
    //                 </ul>                
    //             </div>
    //         </div>
    //     </div>
    //   </div>
    // </div>
    <div className='footer'>
    <div className="footerBody">
      <div className="footerBodyContainer row">
          <div className="footerBodyContainerParent col-lg-4">
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
                  <div className="footerBodyContainerChildButtom">
                      <ul>
                          <li><a href=""><i className="fa-brands fa-facebook"></i>  </a> </li>
                          <li><a href=""> <i className="fa-brands fa-linkedin"></i>  </a> </li>
                          <li><a href=""> <i className="fa-brands fa-skype"></i> </a> </li>
                          <li><a href=""> <i className="fa-sharp fa-solid fa-x"></i> </a> </li>
                          
                      </ul>
                  </div>
              </div>
          </div>
          <div className="footerRightParent col-lg-8">
              <div className="footerRightChild">
                  <div className='footerRightChildTittle'>
                      <h3>Products</h3>
                      <ul>
                                  <li><a href="#">Product 01</a></li>
                                  <li><a href="#">Product 02</a></li>
                                  <li><a href="#">Product 03</a></li>
                                  <li><a href="#">Product 04</a></li>
                              </ul>
              </div>

              <div className='footerRightChildTittle'>
                     <h3>Platforms</h3>
                      <ul>
                                  <li><a href="#">Platform 01</a></li>
                                  <li><a href="#">Platform 02</a></li>
                                  <li><a href="#">Platform 03</a></li>
                                  <li><a href="#">Platform 04</a></li>
                              </ul>
              </div>

              <div className='footerRightChildTittle'>
                         <h3>Frameworks</h3>
                      <ul>
                                  <li><a href="#">IS027001</a></li>
                                  <li><a href="#">HIPAA</a></li>
                                  <li><a href="#">SOC2</a></li>
                                  <li><a href="#">GDPR</a></li>
                                  <li><a href="#">NIST</a></li>
                              </ul>
              </div>

              <div className='footerRightChildTittle'>
              <h3>Pages</h3>
                      <ul>
                                  <li><a href="#">About Us</a></li>
                                  <li><a href="#">Contact Us</a></li>
                                  <li><a href="#">Team</a></li>
                                  <li><a href="#">Our Client</a></li>
                                  <li><a href="#">Become a Partner</a></li>
                              </ul>
              </div>
                     
              </div>

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
