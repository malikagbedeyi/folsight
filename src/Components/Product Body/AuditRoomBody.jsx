import React from 'react'
import img1 from '../../assets/Images/01Home.png'
import img2 from '../../assets/Images/auditi01.png'
import img3 from '../../assets/Images/p-mockup.png'
import img4 from '../../assets/Images/gea-01.png'
import img5 from '../../assets/Images/gea-02.png'
import img6 from '../../assets/Images/gea-03.png'
import img7 from '../../assets/Images/grc-01.png'
import img8 from '../../assets/Images/grc-02.png'
import img9 from '../../assets/Images/about-01.png'

import MainBody from '../MainBody'
const AuditRoomBody = () => {
  return (
    <div className='auditRoom'>
        <div className="auditCover">
            <div className="row auditContainer">
                <div className="col-lg-6 auditParent">
                    <div className="auditChildLeft">
                        <h1>Audit Room</h1>
                        <p>AuditRoom is a secure, collaborative workspace within our GRC solution designed to simplify and enhance the audit process. It provides a centralized platform where auditors and stakeholders can Collaborate Efficiently,Maintain Security and Compliance,Enhance Transparency and Accountability</p>
                        <p>In today's fast-paced and highly regulated business environment, efficient audit management is critical for maintaining compliance and mitigating risks. AuditRoom is an innovative, secure, and centralized audit workspace within our GRC solution, designed to enhance every aspect of the audit process. It empowers organizations to manage both internal and external audits with confidence and precision, ensuring a smoother, more transparent experience for all involved.</p>
                    </div>
                </div>
                <div className="col-lg-6 auditParent">
                    <div className="auditChildRight">
                        <img src={img1} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="auditImgContainer">
            <img src={img2} alt="" />
        </div>
        <div className="partherShip">
        <MainBody />
        </div>
        <div className="auditMiddle">
            <div className="auditMiddleTittle">
                <h1>Streamline Your Audit Process</h1>
                <p>AuditRoom transforms your audit experience, providing a streamlined, organized, and compliant approach to managing audits within your organization.</p>
            </div>
            <div className="row auditMiddleContainer">
                <div className="col-lg-6 auditMiddleParent">
                    <div className="auditMiddleChild">
                        <h1>Collaborate Efficiently</h1>
                        <p>Share documents, communicate, and track audit progress in real-time, all within a single digital environment.</p>
                    </div>
                    <div className="auditMiddleChild">
                        <h1>Enhance Transparency and Accountability</h1>
                        <p>Keep a clear record of all actions, comments, and document changes to ensure full transparency throughout the audit process.</p>
                    </div>
                    <div className="auditMiddleChild">
                        <h1>CImprove Audit Readiness</h1>
                        <p>Access all necessary documents and evidence in one place, reducing preparation time and ensuring readiness for internal or external audits.</p>
                    </div>
                </div>
                <div className="col-lg-6 auditMiddleParentRight">
                    <img src={img3} alt="" />
                </div>
            </div>
        </div>
        <div className="auditNews">
                <div className="auditNewsTittle">
                    <h1>Key Features of AuditRoom</h1>
                </div>
                <div className="row auditNewsContainer">
                    <div className="col-lg-4 col-md-6 auditNewsParent">
                        <div className="auditNewsChild">
                            {/* <h1>Audit Planning</h1> */}
                            <p><span>Audit Planning:</span> Audit planning is simplified with easy collaboration and budgeting tools, allowing teams to plan audits, allocate budgets, and categorize requests into accepted or rejected lists. Folsight provides alerts two months before audits to ensure preparedness. It includes a lock feature, limiting changes to the audit plan to administrators, and offers user access management for assigning specific roles and permissions, ensuring security and control throughout the process.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 auditNewsParent">
                        <div className="auditNewsChild">
                            {/* <h1>Audit Engagement</h1> */}
                            <p> <span>Audit Engagement:</span> The Audit Engagement feature allows you to map engagements to planned audits, ensuring alignment with audit strategies. When creating an audit, you can link it to the audit plan and specify whether it's recurring. For recurring audits, you can roll forward and update relevant data seamlessly. Additionally, the system distinguishes between standard and required standards, with all requirements available on the GRC tool for easy reference and compliance tracking, making the audit process more efficient and organized.</p>    
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 auditNewsParent">
                        <div className="auditNewsChild">
                            {/* <h1>Secured Audit Plan</h1> */}
                            <p> <span>Secured Audit Plan:</span> Folsight includes the ability to lock the audit plan, restricting modifications so that only administrators with proper permissions can access and make changes. Permissions can be customized based on roles, such as read-only access for general users and full editing rights for administrators. This ensures that the integrity of the audit plan is maintained and prevents unauthorized alteration.</p>
                        </div>
                    </div>
                </div>
                <div className="row auditNewsContainerMiddle">
                    <div className="col-lg-6 auditNewsParentMiddle">
                        <div className="auditNewsChildMiddle">
                            <h1>Centralized Collaboration Hub</h1>
                            <p>Connect your entire audit team, including internal and external stakeholders, in one cohesive digital space. AuditRoom allows for seamless communication, document sharing, and collaboration, eliminating the inefficiencies of scattered emails and fragmented communication channels.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 auditNewsParentMiddle">
                        <div className="auditNewsChildMiddle">
                            <h1>Advanced Security Controls</h1>
                            <p>Protect sensitive data with robust security features, including multi-factor authentication, encryption, and role-based access controls. Ensure your organization meets regulatory requirements and safeguards information from unauthorized access or breaches.</p>
                        </div>
                    </div>
                </div>
                <div className="row auditNewsContainer">
                    <div className="col-lg-4 col-md-6 auditNewsParent">
                        <div className="auditNewsChild">
                            {/* <h1>Comprehensive Audit Tracking</h1> */}
                            <p> <span>Comprehensive Audit Tracking: </span>Gain full visibility into every step of the audit process with detailed tracking and reporting tools. Monitor audit progress, deadlines, task assignments, and changes in real-time, enabling better oversight and faster issue resolution.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 auditNewsParent">
                        <div className="auditNewsChild">
                            {/* <h1>Automated Workflows and Notifications</h1> */}
                            <p> <span>Automated Workflows and Notifications: </span>Streamline your audit process with automated workflows that guide auditors through each phase, from planning to execution and reporting. Automated notifications and reminders help keep everyone on track, ensuring deadlines are met and nothing is overlooked.</p>  
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 auditNewsParent">
                        <div className="auditNewsChild">
                            {/* <h1>Data-Driven Insights and Reporting</h1> */}
                            <p> <span>Data-Driven Insights and Reporting: </span>Leverage powerful analytics and reporting capabilities to gain valuable insights into audit findings, trends, and potential risks. Use these insights to make informed decisions, improve future audits, and strengthen your overall risk management strategy.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="auditBenefit">
                <div className="auditBenefitTittle">
                    <h1>Benefits of Using AuditRoom</h1>
                </div>
                <div className="row auditBenefitCoontainer">
                    <div className="col-lg-4 col-md-6 auditBenefitParent">
                        <div className="auditBenefitChild">
                            <img src={img4} alt="" />
                            <div className="bodyText">
                            <h1>Increased Efficiency</h1>
                            <p>Reduce audit time and effort with automated workflows and centralized resources.</p>
                            <a href="#">LEARN MORE</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 auditBenefitParent">
                        <div className="auditBenefitChild">
                            <img src={img5} alt="" />
                            <div className="bodyText"> 
                                 <h1>Improved Compliance</h1>
                            <p>Ensure adherence to regulatory standards with robust security and data management.</p>
                            <a href="#">LEARN MORE</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 auditBenefitParent">
                        <div className="auditBenefitChild">
                            <img src={img6} alt="" />
                            <div className="bodyText"> 
                                 <h1>Data-Driven Insights</h1>
                            <p> Leverage powerful analytics to identify risks, trends, and areas for improvement.</p>
                            <a href="#">LEARN MORE</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="auditImage">
                <div className="imgcover">
                <img src={img3} alt=""  />
                </div>
                <div className="imgtop">
                <img src={img7} alt="" />
                </div>
                <div className="imgdown">
                <img src={img7} alt=""  />
                </div>
            </div>
            <div className="auditBottom">
                <div className="row auditBottomContainer">
                    <div className="col-lg-9 auditBottomParent">
                        <div className="auditBottomChild">
                            <div className="auditBottomChildTittle">
                               <h1> Revolutionizing Your Audit Experience</h1>
                               <p> In today's fast-paced and highly regulated business environment, efficient audit management is critical for maintaining compliance and mitigating risks.</p>
                               <button>Learn More</button>
                            </div>
                            <div className="row auditBottomChildContainer">
                                <div className="col-lg-6 auditBottomChildParent">
                                    <div className="auditBottomChildtext">
                                        <div className="auditBottomChildtittle">
                                        <p><span>AuditRoom</span> is an innovative, secure, and centralized audit workspace within our GRC solution, designed to enhance every aspect of the audit process. It empowers organizations to manage both internal and external audits with confidence and precision, ensuring a smoother, more transparent experience for all involved. </p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-6 auditBottomChildParent" >
                                    <div className="auditBottomChildtext">
                                    <img src={img8} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 auditBottomParent">
                        <div className="auditBottomChildRight">
                            <img src={img9} alt="" />
                            <img src={img9} alt="" />

                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default AuditRoomBody
