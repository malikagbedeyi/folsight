import React, { useEffect } from 'react'
import img1 from '../../assets/Images/01Home.png'
import img2 from '../../assets/Images/auditi01.png'
import img3 from '../../assets/Images/p-mockup.png'
import img4 from '../../assets/Images/gea-01.png'
import img5 from '../../assets/Images/gea-02.png'
import img6 from '../../assets/Images/gea-03.png'
import img7 from '../../assets/Images/grc-01.png'
import img8 from '../../assets/Images/grc-02.png'
import img9 from '../../assets/Images/about-01.png'
import img10 from "../../assets/Images/fea-4.png"
import img11 from "../../assets/Images/fea-41.png"
import img12 from "../../assets/Images/fea-3.png"
import img13 from "../../assets/Images/ImageBlog/01.jpg"
import img14 from "../../assets/Images/ImageBlog/03.jpg"
import img15 from "../../assets/Images/ImageBlog/04.jpg"
import { Link, useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import MainBody from '../MainBody'

const RiskCoreBody = () => {
    const navigate =  useNavigate();
    useEffect(() => {
        AOS.init({
            duration: 800, 
            easing: 'ease-in',
            once: true, 
          });
      }, []);
  return (
    <div className='auditRoom'>
    <div className="auditCover">
        <div className="row auditContainer">
            <div className="col-lg-6 auditParent" >
                <div className="auditChildLeft">
                    <h1>Risk core</h1>
                    <p>Folsight tool provides a comprehensive risk management solution designed to help businesses of all sizes assess, track, and mitigate risks across their operations. Whether you're facing operational, financial, or compliance-related risks, our platform equips you with the tools and insights necessary to ensure you stay in control.</p>
                    <button>Request Demo</button>
                </div>
            </div>
            <div className="col-lg-6 auditParent" >
                <div className="auditChildRight">
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
        <div className="row auditContainer-2">
        <div className="col-lg-6 auditParent" >
                <div className="auditChildRight">
                    <img src={img14} alt="" />
                </div>
            </div>
            <div className="col-lg-6 auditParent" >
                <div className="auditChildLeft">
                    <h1>Risk core</h1>
                    <p>Folsight tool provides a comprehensive risk management solution designed to help businesses of all sizes assess, track, and mitigate risks across their operations. Whether you're facing operational, financial, or compliance-related risks, our platform equips you with the tools and insights necessary to ensure you stay in control.</p>
                    <button>Request Demo</button>
                </div>
            </div>
        </div>
    </div>
    {/* <div className="partherShip">
    <MainBody />
    </div> */}
    <div className="auditMiddle">
        <div className="auditMiddleTittle">
            <h1>Automated Risk</h1>
            <p> Leverage RiskCore to streamline and enhance your risk management practices.</p>
        </div>
        <div className="row auditMiddleContainer">
            <div className="col-lg-4 col-md-6 auditMiddleParent">
                <div className="auditMiddleChild">
                <div className="auditMiddleChildTop">
                    <img src={img13} alt="" />
                </div>
                <div className="auditMiddleChildmiddle">
                    <div className="auditMiddleChildmiddleTOp">
                    <h1> Increased Efficiency</h1>
                    </div>
                    <div className="auditMiddleChildButtom">
                        <p> Automate risk assessment and reporting, save time and reduce manual errors, allowing you to focus on high-priority issues.</p>
                </div>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 auditMiddleParent">
                <div className="auditMiddleChild">
                <div className="auditMiddleChildTop">
                    <img src={img14} alt="" />
                </div>
                <div className="auditMiddleChildmiddle">
                    <div className="auditMiddleChildmiddleTOp">
                    <h1>Informed Decision-Making</h1>
                    </div>
                    <div className="auditMiddleChildButtom">
                        <p>Use detailed risk assessments to make more informed decisions about resource allocation, business strategies, and risk mitigation.</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 auditMiddleParent">
                <div className="auditMiddleChild">
                <div className="auditMiddleChildTop">
                    <img src={img15} alt="" />
                </div>
                <div className="auditMiddleChildmiddle">
                    <div className="auditMiddleChildmiddleTOp">
                    <h1>Regulatory Alignment</h1>
                    </div>
                    <div className="auditMiddleChildButtom">
                        <p> Ensure that your organization’s risk management processes comply with key industry regulations and standards, reducing the risk of fines or legal penalties.</p>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>

    <div className="auditNews">
            <div className="auditNewsTittle">
                <h1>Key Features of RiskCore</h1>
            </div>
            <div className="container-fluid">
            <div className=" auditNewsContainer">
                <div className="row auditKeyContainer">
                <div className="col-lg-6 auditKeyParent" >
                        <div className="auditKeyChild">
                            <div className="auditKeyChildText"> 
                        <h1>Automated Risk Assessment</h1>
                        <p> Automatically evaluate risks based on pre-configured criteria, such as severity, likelihood, and potential impact. The AI system assigns risk ratings, helping you prioritize risks that require immediate attention.</p>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-6 auditKeyParent">
                        <div className="auditKeyChild">
                        <img src={img10} style={{float:"right"}} alt=""  />
                        </div>
                        
                        </div>
                </div>
                <div className="row auditKeyContainer">
                    <div className="col-lg-6 auditKeyParent" data-aos="fade-right">
                        <div className="auditKeyChild" >
                               <img src={img11} style={{float:"left"}} alt="" />
                        </div>
                        
                     </div>
                     <div className="col-lg-6 auditKeyParent">
                        <div className="auditKeyChild">
                            <div className="auditKeyChildText"> 
                        <h1>Dynamic Risk Profiles</h1>
                        <p>AI continuously updates risk profiles based on changing circumstances, ensuring that your organization’s risk landscape is always current. This feature allows for agile risk management in fast-evolving environments.</p>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="row auditKeyContainer">
                    <div className="col-lg-6 auditKeyParent">
                        <div className="auditKeyChild">
                            <div className="auditKeyChildText"> 
                        <h1>Risk Mitigation Recommendations</h1>
                        <p >Leverage AI-generated recommendations for risk mitigation strategies. The system suggests tailored actions to reduce risks, helping your team to respond quickly and effectively.</p>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-6 auditKeyParent" data-aos="slide-left">
                        <div className="auditKeyChild">
                               <img src={img12} style={{float:"right"}} alt="" />
                        </div>
                        
                     </div>
                </div>
                <div className="row auditKeyContainer">
                    <div className="col-lg-6 auditKeyParent" data-aos="slide-right">
                        <div className="auditKeyChild">
                               <img src={img10} style={{float:"left"}} alt="" />
                        </div>
                        
                    </div>
                    <div className="col-lg-6 auditKeyParent">
                        <div className="auditKeyChild">
                            <div className="auditKeyChildText"> 
                    <h1>Scenario Modeling & What-If Analysis</h1>
                    <p>R Our platform allows you to simulate different risk scenarios using AI-powered what-if analysis. Understand the potential impact of various risk events and create strategies to address them before they occur.</p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="auditNews-2">
            <div className="auditNewsTittle">
                <h1>Key Features of RiskCore</h1>
            </div>
            <div className="container-fluid">
            <div className=" auditNewsContainer">
                <div className="row auditKeyContainer">
                    <div className="col-lg-6 auditKeyParent" >
                        <div className="auditKeyChild">
                            <div className="auditKeyChildText"> 
                        <h1> Automated Risk Assessment</h1>
                        <p> Automatically evaluate risks based on pre-configured criteria, such as severity, likelihood, and potential impact. The AI system assigns risk ratings, helping you prioritize risks that require immediate attention.</p>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-6 auditKeyParent" data-aos="fade-left">
                        <div className="auditKeyChild">
                        <img src={img10}  alt=""  />
                        </div>
                        
                        </div>
                </div>
                <div className="row auditKeyContainer">
                     <div className="col-lg-6 auditKeyParent">
                        <div className="auditKeyChild">
                            <div className="auditKeyChildText"> 
                        <h1>Dynamic Risk Profiles</h1>
                        <p> AI continuously updates risk profiles based on changing circumstances, ensuring that your organization’s risk landscape is always current. This feature allows for agile risk management in fast-evolving environments. </p>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-6 auditKeyParent" data-aos="fade-right">
                        <div className="auditKeyChild" >
                               <img src={img11}  alt="" />
                        </div>
                        
                     </div>
                </div>
                <div className="row auditKeyContainer">
                    <div className="col-lg-6 auditKeyParent">
                        <div className="auditKeyChild">
                            <div className="auditKeyChildText">
                        <h1>Risk Mitigation Recommendations</h1>
                        <p> Leverage AI-generated recommendations for risk mitigation strategies. The system suggests tailored actions to reduce risks, helping your team to respond quickly and effectively.</p>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-6 auditKeyParent" data-aos="slide-left">
                        <div className="auditKeyChild">
                               <img src={img12} alt="" />
                        </div>
                        
                     </div>
                </div>
                <div className="row auditKeyContainer">
                <div className="col-lg-6 auditKeyParent">
                        <div className="auditKeyChild">
                            <div className="auditKeyChildText">
                    <h1>Scenario Modeling & What-If Analysis</h1>
                    <p>  Our platform allows you to simulate different risk scenarios using AI-powered what-if analysis. Understand the potential impact of various risk events and create strategies to address them before they occur.</p>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-6 auditKeyParent" data-aos="slide-right">
                        <div className="auditKeyChild">
                               <img src={img10}  alt="" />
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="auditBenefit">
            <div className="auditBenefitTittle">
                <h1>Benefits of Using Riskcore</h1>
            </div>
            <div className="row auditBenefitCoontainer">
                <div className="col-lg-4 col-md-6 auditBenefitParent" >
                    <div className="auditBenefitChild">
                        <img src={img4} alt="" />
                        <div className="bodyText">
                        <h1>Increased Efficiency</h1>
                        <p>Reduce audit time and effort with automated workflows and centralized resources.</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 auditBenefitParent" >
                    <div className="auditBenefitChild">
                        <img src={img5} alt="" />
                        <div className="bodyText"> 
                             <h1>Improved Compliance</h1>
                        <p>Ensure adherence to regulatory standards with robust security and data management.</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 auditBenefitParent">
                    <div className="auditBenefitChild">
                        <img src={img6} alt="" />
                        <div className="bodyText"> 
                             <h1>Data-Driven Insights</h1>
                        <p> Leverage powerful analytics to identify risks, trends, and areas for improvement.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="auditImage" >
            <div className="imgcover">
            <img src={img3} alt=""  />
            </div>
        </div>
        <div className="auditBottom">
        <button onClick={() => navigate('/request-demo')} >Request a Demo</button>
        </div>

</div>
  )
}

export default RiskCoreBody