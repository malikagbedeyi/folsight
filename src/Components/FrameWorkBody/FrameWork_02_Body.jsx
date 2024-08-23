import React, { useEffect, useReducer, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import img6 from "../../assets/Images/gea-01.png"
import img7 from "../../assets/Images/gea-02.png"
import img8 from "../../assets/Images/gea-03.png"
import img9 from "../../assets/Images/fea-4.png"
import img10 from "../../assets/Images/fea-41.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
const FrameWork_02_Body = () => {
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
                        <h1>Risk Assessment</h1>
                        <p>Folsight automates risk assessments of third-party providers by evaluating their data management practices and generating risk scores. It allows for customizable questionnaires to assess vendors' security controls and compliance, prioritizing those needing stricter oversight.</p>
                        </div>
                        <div className="learnMoreProductContainerChildBody">
                            <ul>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p> Third-Party Risk Assessments (TPRM)</p>
                                </li>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p> Automated Risk Evaluation</p>
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
                        <div className="learnMoreProductContainerChildTop">
                        <h1 style={{fontSize:"1.9rem",marginBottom:"10px"}}>Ensure Compliance with Industry Standards</h1>
                        <p>Folsight distributes data security policies to third-party providers, tracks their acknowledgment, and automates compliance checks to ensure adherence to required data management procedures. </p>
                         </div>
                        <div className="learnMoreCategoryContainerChildBody">
                            <ul>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p> Comprehensive Audit Trails</p>
                                </li>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p>Data Management</p>
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
                        <h1>Safeguard Sensitive Information:</h1>
                        <p>Folsight enforces Role-Based Access Controls (RBAC) and Multi-Factor Authentication (MFA) for vendor access to client data, ensures strong encryption and secure communication protocols, and integrates with security systems for real-time threat detection and automated incident response.</p>
                        </div>
                        <div className="learnMoreProductContainerChildBody">
                            <ul>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p>Vendor Risk Profiling</p>
                                </li>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p>Access Control Management</p>
                                </li>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p>Data Encryption and Secure Communication</p>
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

export default FrameWork_02_Body
