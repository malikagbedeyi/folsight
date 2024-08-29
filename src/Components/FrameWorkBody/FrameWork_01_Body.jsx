import React, { useEffect, useReducer, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import img6 from "../../assets/Images/gea-01.png"
import img7 from "../../assets/Images/gea-02.png"
import img8 from "../../assets/Images/gea-03.png"
import img9 from "../../assets/Images/fea-4.png"
import img10 from "../../assets/Images/fea-41.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
const FrameWork_01_Body = () => {
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
 {/*********************** ISO 27001 ***********************/}
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
                        <h1>Establish and Implement Policies</h1>
                        <p>Folsight offers templates for creating ISMS policies and procedures that align with industry standards like ISO/IEC 27001. It allows customization of these templates to suit the organization’s specific needs and risk profile, ensuring policies are relevant and effective. Additionally, Folsight stores all ISMS policies in a centralized repository, making them easily accessible to employees across the organization.
                        </p>
                        </div>
                        <div className="learnMoreProductContainerChildBody">
                            <ul>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p> Policy Creation and Management</p>
                                </li>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p> Integration with Other Systems</p>
                                </li>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p> Task Management</p>
                                </li>
                            </ul>
                        </div>
                        <div className="learnMoreProductContainerChildButtom" data-aos="fade-in-up" data-aos-delay="500" data-aos-duration="1500">
                            <button className=''>LEARN MORE</button>
                        </div>
                    </div>
                </div>
             </div>
             <div className="learnMoreProductContainer row">
                <div className="learnMoreProductContainerParent col-lg-6">
                    <div className="learnMoreProductContainerChild">
                        <div className="learnMoreProductContainerChildTop">
                        <h1>Compliance Audits and review</h1>
                        <p>Folsight schedules regular internal audits of the ISMS to ensure all policies and procedures are being followed and remain effective. It also runs automated compliance checks against regulatory requirements and industry standards, identifying areas where the ISMS may need adjustments.</p>
                        </div>
                        <div className="learnMoreProductContainerChildBody">
                            <ul>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p> Scheduled Audits</p>
                                </li>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p>Compliance Checks</p>
                                </li>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p>Compliance Audits</p>
                                </li>
                            </ul>
                        </div>
                        <div className="learnMoreProductContainerChildButtom" data-aos="fade-in-up" data-aos-delay="500" data-aos-duration="1500">
                            <button className=''>LEARN MORE</button>
                        </div>
                    </div>
                </div>

                <div className="learnMoreProductContainerParent col-lg-6">
                    <div className="learnMoreProductContainerFristChild" data-aos="fade-in-right" data-aos-delay="500" data-aos-duration="1500">
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
                        <h1>Continuous Improvements</h1>
                        <p>Folsight produces detailed reports on ISMS effectiveness, covering vulnerabilities, incident response times, and compliance status, while gathering feedback from monitoring activities and audits to support continuous improvement and policy updates.</p>
                        </div>
                        <div className="learnMoreProductContainerChildBody">
                            <ul>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p>Feedback Mechanism</p>
                                </li>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p>Policy Updates</p>
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

export default FrameWork_01_Body
