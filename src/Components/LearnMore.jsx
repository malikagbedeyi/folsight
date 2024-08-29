import React, { useEffect, useReducer, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import img6 from "../assets/Images/gea-01.png"
import img7 from "../assets/Images/gea-02.png"
import img8 from "../assets/Images/gea-03.png"
import img9 from "../assets/Images/ImageBlog/01.jpg"
import img10 from "../assets/Images/ImageBlog/03.jpg"
import img11 from "../assets/Images/ImageBlog/04.jpg"
import img12 from "../assets/Images/Icons1/1.png"
import img13 from "../assets/Images/Icons1/2.png"
import img14 from "../assets/Images/Icons1/3.png"
import img15 from "../assets/Images/Icons1/4.png"
import img16 from "../assets/Images/IconsCover1/icon_01.png"
import img17 from "../assets/Images/IconsCover1/icon_02.png"
import img18 from "../assets/Images/IconsCover1/icon_03.png"
import img19 from "../assets/Images/IconsCover1/icon_04.png"
import 'aos/dist/aos.css';
const LearnMore = () => {
    const [hover,sethover]=useState(1);
    const [active, setActive] = useState(null);
    const [animate, setAnimate] = useState(false);

    const handleHover = (id) => {
        setActive(id);
        sethover(id)
    }
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setAnimate(true);
    //         setTimeout(() => {
    //             sethover((prevHover) => (prevHover === 4 ? 1 : prevHover + 1));
    //             setAnimate(false);
    //         }, 500); // Adjust for animation duration
    //     }, 5000); // 10-second interval

    //     return () => clearInterval(interval); // Cleanup on unmount
    // }, []);

    
    useEffect(() => {
        AOS.init({initClassName: true})
    },[])
  return (
    <div className="learnMore">
    <div className="Container">
     <div className="learnMoreTittle row">
     <div className="col-lg-12">
    <h1>Making Great Things Possible</h1>
    <p>Uphold ethical standards, ensure transparency, and foster accountability. Folsight safeguards your organization's reputation by embedding integrity in decision-making, monitoring compliance, and swiftly addressing potential breaches.</p>
    </div>
            </div>
        <div className="learnMoreContainer row">
            <div className=" col-lg-4 col-md-6">
            <div className="learnMoreContainerChild">
                <div className="topImg">
                    <img src={img6} alt="" />
                </div>
                {/* <div className="bodyText">
                    <h3>Policy Management</h3>
                    <p>Centralize policy creation, distribution, and tracking to ensure consistent enforcement across the organization, while automating updates in line with regulatory changes.</p>
                </div> */}
                  <div className="bodyText">
                    <h3>Project Management</h3>
                    <p>Behold living. Creeping gathered give sea third multiply midst winged tree bring wherein living itsmoving our him dry female his lights herb.</p>
                </div>
                <div className="buttonText">
                <a href="#">LEARN MORE  → </a>
                    </div>
                </div>
            </div>
              <div className=" col-lg-4 col-md-6">
              <div className="learnmoreActive learnMoreContainerChild">
              <div className="topImg">
                    <img src={img7}  alt="" />
                </div>
                {/* <div className="bodyText">
                    <h3>User Access Control</h3>
                    <p>Manage user roles and permissions with fine-grained controls, safeguard sensitive information through multi-factor authentication and encryption, and track and audit access to critical systems and data.</p>
                </div> */}
                 <div className="bodyText">
                    <h3>User Analytics</h3>
                    <p>Behold living. Creeping gathered give sea third multiply midst winged tree bring wherein living itsmoving our him dry female his lights herb.</p>
                </div>
                <div className="buttonText">
                    <a href="#">LEARN MORE  → </a>
                </div>
            </div>
            </div>
              <div className="col-lg-4 col-md-6">
                <div className="learnMoreContainerChild">
              <div className="topImg">
                    <img src={img8} alt="" />
                </div>
                {/* <div className="bodyText">
                    <h3>Integrated Reporting & Analytics</h3>
                    <p>Access real-time dashboards with key metrics and risk indicators, generate custom reports for stakeholders and regulators, and utilize predictive analytics to anticipate and mitigate future risks.</p>
                </div> */}
                 <div className="bodyText">
                    <h3>Cloud Service</h3>
                    <p>Behold living. Creeping gathered give sea third multiply midst winged tree bring wherein living itsmoving our him dry female his lights herb.</p>
                </div>
                <div className="buttonText">
                <a href="#">LEARN MORE  → </a>
                </div>
            </div>
        </div>
        </div>
    </div>
    <div className="Container">
    <div className="learnMoreCategoryContainer row">
<div className="learnMoreCategoryContainerParent col-lg-7">
    <div className="learnMoreCategoryContainerChild">
        <div className="learnMoreCategoryContainerChildTop">
        <h1>GRC Made Easy</h1>
        <p>Effortlessly manage your organization's governance, risk, and compliance needs with Folsight. Our platform simplifies complex processes, providing you with clear insights, automated workflows, and real-time reporting.</p>
        {/* <p>Stay ahead of regulatory changes, mitigate risks proactively, and ensure seamless compliance, all from a single, user-friendly interface.</p> */}
        </div>
        <div className="learnMoreCategoryContainerChildBody">
            <div className="CategoryContainerChildBodyWrapper">
                <div className="CategoryContainerChildBodytop">
                <div className="learn-more-parent-body">
                <div onClick={()=>handleHover(1)} className={ hover === 1 ? "learn-more-child-body learnMore-active" : "learn-more-child-body"}>
                <div className="learn-more-child-bodyTop">
                    <div className="learn-more-child-bodyTopWrapper">
                        <div className="learn-more-child-bodyLeftWrapper">
                            <img src={img13} alt="" />
                        </div>
                        <div className="learn-more-child-bodyrightWrapper">
                          <img src={img17} alt="" />  
                        </div>
                    </div>
                </div>
                <div className="learn-more-child-bodyMiddle">
                    <h1>Risk Management</h1>
                    </div>
                    <div className="learn-more-child-bodyBottom">
                        <p>Identify, assess, and prioritize risks across your organization.</p>
                    </div>
                    </div>
            </div>
            <div className="learn-more-parent-body">
                <div onClick={()=>handleHover(2)} className={ hover === 2 ? "learn-more-child-body learnMore-active" : "learn-more-child-body"}>
                <div className="learn-more-child-bodyTop">
                    <div className="learn-more-child-bodyTopWrapper">
                        <div className="learn-more-child-bodyLeftWrapper">
                            <img  src={img14} alt="" />
                        </div>
                        <div className="learn-more-child-bodyrightWrapper">
                        <img src={img18} alt="" />
                        </div>        
                         </div>
                         </div>
                <div className="learn-more-child-bodyMiddle">
                    <h1>Compliance</h1>
                    </div>
                    <div className="learn-more-child-bodyBottom">
                        <p>Meet industry-specific regulations and standards, such as GDPR, HIPAA, or SOX</p>
                        {/* with real-time insights and automation, helping your business stay resilient and compliant. */}
                    </div>
                    </div>
            </div>
                </div>
                <div className="CategoryContainerChildBodybottom">
                <div className="learn-more-parent-body">
                <div onClick={()=>handleHover(3)} className={hover  === 3 ? "learn-more-child-body learnMore-active" : "learn-more-child-body"}>
                <div className="learn-more-child-bodyTop">
                    <div className="learn-more-child-bodyTopWrapper">
                        <div className="learn-more-child-bodyLeftWrapper">
                             <img src={img12} alt="" />
                        </div>
                        <div className="learn-more-child-bodyrightWrapper">
                        <img src={img19} alt="" />
                        </div>         
                         </div>
                         </div>
                <div className="learn-more-child-bodyMiddle">
                    <h1>Controls</h1>
                    </div>
                    <div className="learn-more-child-bodyBottom">
                        <p> Manage and implement controls using a structured framework and automation capabilities.</p>
                        {/* with real-time insights and automation, helping your business stay resilient and compliant. */}
                    </div>
                    </div>
            </div>
            <div className="learn-more-parent-body">
                <div  onClick={()=>handleHover(4)} className={hover  === 4 ? "learn-more-child-body learnMore-active" : "learn-more-child-body"}>
                <div className="learn-more-child-bodyTop">
                    <div className="learn-more-child-bodyTopWrapper">
                        <div className="learn-more-child-bodyLeftWrapper">
                            <img src={img15} alt="" />
                        </div>
                        <div className="learn-more-child-bodyrightWrapper">
                        <img src={img16} alt="" />
                        </div>          
                             </div>
                             </div>
                <div className="learn-more-child-bodyMiddle">
                    <h1>Cloud Compatibility</h1>
                    </div>
                    <div className="learn-more-child-bodyBottom">
                        <p>Man fruit moving fourt moving multiply so years rule is not It after you also do seed grass that so which grass fowl him.</p>
                        {/* with real-time insights and automation, helping your business stay resilient and compliant. */}
                    </div>

            {/* <div className="triangle-edge"></div> */}
            </div>
            </div>
                </div>
            </div>
            </div>
    </div>
</div>

<div className="learnMoreCategoryContainerParent col-lg-5">
    <div className="learnMore-wrapper">
    <div className={`learnMore-wrapper-right ${hover === 1 ? (animate ? "fadeIn" : "") : "close"}`}>
            <div className="learnMore-wrapper-rightTop">
            <img src={img10} alt="" />
            </div>
            <h3>Risk Management</h3>
           <div className="scroll-right">
           <p>Folsight streamlines risk management by identifying, assessing, and prioritizing risks across your organization. The tool facilitates the implementation and tracking of mitigation strategies while providing continuous monitoring and real-time reporting.</p>
           <p >This ensures that risks are proactively managed, enabling timely adjustments and minimizing potential disruptions to organizational goals.</p>
           </div>
        </div>
        <div className={`learnMore-wrapper-right ${hover === 2 ? (animate ? "fadeIn" : "") : "close"}`}>
            <div className="learnMore-wrapper-rightTop">
            <img src={img9} alt="" />
            </div>
            <h3>Compliance</h3>
           <div className="scroll-right">
           <p>Folsight helps organizations meet industry-specific regulations and standards such as GDPR, HIPAA, or SOX by ensuring compliance through the development, distribution, and enforcement of comprehensive policies. It streamlines the policy management process, </p>
           <p >Making it easier to keep policies up to date and accessible across the organization. Additionally, the tool plays a critical role in audit management by facilitating the planning, execution, and oversight of both internal and external audits.</p>
           </div>
        </div>
        <div className={`learnMore-wrapper-right ${hover === 3 ? (animate ? "fadeIn" : "") : "close"}`}>
            <div className="learnMore-wrapper-rightTop">
            <img src={img10} alt="" />
            </div>
            <h3>Controls</h3>
           <div className="scroll-right">
           <p>Folsight assigns specific controls to responsible individuals or teams, ensuring clear ownership. It automates workflows to guide users through the implementation and execution of these controls. The tool also automates control testing, scheduling periodic checks like security assessments or audits, and continuously monitors control effectiveness, providing real-time alerts for any deviations or failures.</p>
           </div>
        </div>
        <div className={`learnMore-wrapper-right ${hover === 4 ? (animate ? "fadeIn" : "") : "close"}`}>
            <div className="learnMore-wrapper-rightTop">
            <img src={img11} alt="" />
            </div>
            <h3>Cloud Compatibility</h3>
           <div className="scroll-right">
            <p>Folsight enhances efficiency by automating repetitive tasks related to governance, risk, and compliance, reducing manual effort and errors. It integrates seamlessly with enterprise systems such as ERP, HR, and finance, streamlining workflows and ensuring consistent data flow across the organization. Additionally, the tool facilitates collaboration among departments and teams involved in GRC activities, promoting better communication, coordination, and alignment of goals. </p>
           </div>
        </div>
    </div>
</div>
</div>
     </div>
        </div>
  )
}

export default LearnMore
