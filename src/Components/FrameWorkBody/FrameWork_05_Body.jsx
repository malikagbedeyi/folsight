import React, { useEffect, useReducer, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import img6 from "../../assets/Images/gea-01.png"
import img7 from "../../assets/Images/gea-02.png"
import img8 from "../../assets/Images/gea-03.png"
import img9 from "../../assets/Images/fea-4.png"
import img10 from "../../assets/Images/fea-41.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
const FrameWork_05_Body = () => {
  useEffect(() => {
    AOS.init({initClassName: true})
},[])
  return (
    <div className='frameworkBody'>
      <div className="container">
      <div className="learnMore">
    <div className="container">
      <div className="learnMoreTittle row">
       <div className="col-lg-12">
    <h1>Making Great Things Possible</h1>
    <p>Land from day very fill that midst stars one dominion. Itself was let that divided itself god don't subdue wherein let behold over he whose of sea moved called.</p>
    </div>

            </div>  
             <div className="learnMoreProductContainer row">
                <div className="learnMoreProductContainerParent col-lg-6">
                    <div className="learnMoreProductContainerFristChild" data-aos="fade-in-left" data-aos-delay="500" data-aos-duration="1500">
                        <img src={img9} style={{width:"100%"}} alt="" />
                    </div>
                </div>

                <div className="learnMoreProductContainerParent col-lg-6">
                    <div className="learnMoreProductContainerChild">
                        <div className="learnMoreProductContainerChildTop">
                        <h1>Safeguarding Fundamental Rights</h1>
                        <p>Folsight safeguards individuals' fundamental rights by implementing privacy measures and data protection practices, ensuring compliance with regulations to secure personal data.</p>
                        </div>
                        <div className="learnMoreProductContainerChildBody">
                            <ul>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p> 	Privacy</p>
                                </li>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p> Compliance</p>
                                </li>
                            </ul>
                        </div>
                        <div className="learnMoreProductContainerChildButtom" data-aos="fade-in-up" data-aos-delay="500" data-aos-duration="1500">
                            <button className=''>LEARN MORE</button>
                        </div>
                    </div>
                </div>
             </div>
             <div className="learnMoreCategoryContainer row">

                <div className="learnMoreCategoryContainerParent col-lg-6">
                    <div className="learnMoreCategoryContainerChild">
                        <div className="learnMoreCategoryContainerChildTop">
                        <h1>Privacy Measures</h1>
                        <p>Folsight upholds privacy and data security by enforcing encryption, access controls, and regular audits, ensuring individuals' personal information remains protected and compliant with regulations.</p>
                        </div>
                        <div className="learnMoreCategoryContainerChildBody">
                            <ul>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p>Encryption</p>
                                </li>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p>Access Control</p>
                                </li>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p>Protection</p>
                                </li>
                            </ul>
                        </div>
                        <div className="learnMoreCategoryContainerChildButtom" data-aos="fade-in-up" data-aos-delay="500" data-aos-duration="1500">
                            <button className=''>LEARN MORE</button>
                        </div>
                    </div>
                </div>

                <div className="learnMoreCategoryContainerParent col-lg-6">
                    <div className="learnMoreCategoryContainerFristChild" data-aos="fade-in-right" data-aos-delay="500" data-aos-duration="1500">
                        <img src={img10} style={{width:"100%"}} alt="" />
                    </div>
                </div>
             </div>
             <div className="learnMoreProductContainer row">
                <div className="learnMoreProductContainerParent col-lg-6">
                    <div className="learnMoreProductContainerFristChild" data-aos="fade-in-left" data-aos-delay="500" data-aos-duration="1500">
                        <img src={img9} style={{width:"100%"}} alt="" />
                    </div>
                </div>

                <div className="learnMoreProductContainerParent col-lg-6">
                    <div className="learnMoreProductContainerChild">
                        <div className="learnMoreProductContainerChildTop">
                        <h1>Adhering to Regulations</h1>
                        <p> Folsight ensures compliance with data protection regulations by enforcing access controls, monitoring data usage, and implementing security measures to prevent unauthorized access and misuse.</p>
                        </div>
                        <div className="learnMoreProductContainerChildBody">
                            <ul>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p>Data Protection</p>
                                </li>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p>	Regulatory Standards</p>
                                </li>
                            </ul>
                        </div>
                        <div className="learnMoreProductContainerChildButtom" data-aos="fade-in-up" data-aos-delay="500" data-aos-duration="1500">
                            <button className=''>LEARN MORE</button>
                        </div>
                    </div>
                </div>
             </div>
    </div>
        </div>
      </div>
    </div>
  )
}

export default FrameWork_05_Body
