import React, { useEffect, useState } from 'react'
import img1 from  '../../assets/Images//ImageBlog/03.jpg'
import img2 from  '../../assets/Images//ImageBlog/04.jpg'
import img3 from '../../assets/Images/ImageBlog/05.jpg'
import img4 from '../../assets/Images/rd-01.png'
import img5 from '../../assets/Images/rd-02.png'
import img6 from '../../assets/Images/rd-03.png'
import img7 from "../../assets/Images/ImageBlog/01.jpg"
import img8 from "../../assets/Images/ImageBlog/03.jpg"
import img9 from "../../assets/Images/ImageBlog/04.jpg"
import img10 from '../../assets/Images/gea-01.png'
import img11 from '../../assets/Images/gea-02.png'
import img12 from '../../assets/Images/gea-03.png'
import img13 from '../../assets/Images/fea-3.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
const AboutUsBody = () => {
  const [hover,sethover]=useState(1);
  const [active, setActive] = useState(null);

  const handleHover = (id) => {
      setActive(id);
      sethover(id)
  }
  useEffect(() => {
    AOS.init({initClassName: true})

  },[])
  return (
    <div className='about-usBody'>
      <div className="about-us-topContainer">
        <div className="container-fluid">
          <div className="row aboutUs-bodyContainer">
            <div className="col-lg-6 col-md-12 aboutUs-bodyParent">
              <div className="aboutUs-bodyChild">
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 aboutUs-bodyParent">
              <div className="bodyChildright">
                <h1>About Folsight</h1>
                <p>Folsight is a premier global Trust Management Platform on a mission to restore confidence in web-based companies by helping them enhance and showcase their security. We are reshaping the IT Audit and Governance, Risk, and Compliance (GRC) landscape with a focus on empowering businesses through robust IT governance and comprehensive risk management. Folsight aims to revolutionize the risk profession, close vulnerability gaps, and elevate audit, risk, and compliance teams to a proactive role.</p>
                <button>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-us-middleContainer">
          <div className="container">
          <div className="row aboutUs-middleBody">
          <div className="col-lg-4 col-md-6 aboutUs-middleParent">
              <div className="aboutUs-middleChild">
                <div className="icons">
                <i class=" fa-solid fa-circle"></i>
                </div>
                <h4>Who We Are</h4>
                <div className="icons-text">
                  <p>Folsight is a top-tier IT Audit and GRC platform designed to help organizations manage IT governance with innovative, data-driven solutions. We enable businesses to operate securely, reduce risks, and comply with regulatory standards.</p>
                {/* By providing innovative, data-driven solutions, we enable businesses to operate securely and compliantly, minimizing risks and ensuring adherence to regulatory standards. */}
              </div>
              </div>
              </div>
            <div className="col-lg-4 col-md-6 aboutUs-middleParent">
              <div className="aboutUs-middleChild">
                <div className="icons">
                <i className="fa-solid fa-users"></i>
                </div>
                <h4>Our Mission</h4>
                <div className="icons-text">
                  <p>Our mission is to provide organizations with the tools and insights they need to enhance IT governance and risk management. By offering a comprehensive suite of solutions, we aim to improve operational efficiency, elevate compliance, and foster proactive risk management.</p>
                {/* Internet safety has grown tremendously important, we realized how challenging it would be for companies with rapid expansion to dedicate the energy and time required to build a good security framework,we aim to enhance operational efficiency, elevate compliance standards, and foster a culture of proactive risk management. */}
             </div>
              </div>
              </div>
              <div className="col-lg-4 col-md-6 aboutUs-middleParent">
              <div className="aboutUs-middleChild activeChild">
                <div className="icons">
                <i class="fa-solid fa-lightbulb"></i>
                </div>
                <h4>Our Vision</h4>
                <div className="icons-text">
                  <p>We envision a future where businesses harness advanced technology to succeed securely, efficiently, and compliantly. With a focus on transparency and accountability, we aim to support organizations in achieving their strategic goals while adhering to regulations like SOC 2, HIPAA, and ISO 27001.</p>
                {/* By fostering an environment of transparency and accountability, we strive to build a world where organizations can focus on achieving their strategic goals. Our vision has been consistent since our inception with the goal of integrating security monitoring for regulations such as SOC 2, HIPAA, and ISO 27001. */}
              </div>
              </div>
              </div>
              </div>
              <button>Join Folsight today</button>
            </div>
          </div>
          <div className="about-usBottom-2">
            <div className="container">
            <div className="bottom-2-Tittle">
            <h1>Integrated GRC Management</h1>
                  </div>
                  <div className="row aboutUs-bottom-2-Container">
                    <div className="col-lg-4 aboutUs-bottom-2-Parent">
                    <div className="aboutUs-bottom-2-Childbox">
                      <img src={img10} alt="" />
                      <div className="bodyText">
                      <h3>Policy Management</h3>
                      <p>Develop, implement, and monitor policies across your organization with ease. Folsight provides a centralized platform for policy management, ensuring consistency and compliance.</p>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-4 aboutUs-bottom-2-Parent">
                    <div className="aboutUs-bottom-2-Childbox">
                      <img src={img11} alt="" />
                      <div className="bodyText">
                      <h3>Incident Management</h3>
                    <p> Respond to incidents quickly and effectively with Folsight’s incident management tools. Track and manage incidents in real-time, reducing downtime and minimizing the impact on your operations.</p>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-4 aboutUs-bottom-2-Parent">
                    <div className="aboutUs-bottom-2-Childbox">
                      <img src={img12} alt="" />
                      <div className="bodyText">
                      <h3>Vendor Risk Management</h3>
                    <p>Evaluate and manage risks associated with third-party vendors. Folsight’s vendor risk management tools provide insights into vendor performance and compliance, helping you make informed decisions.</p>
                    </div>
                    </div>
                    </div>
                  </div>
            </div>
          </div>
          <div className="about-usBottom">
            <div className="Container">
            <div className="bottomTittle">
                    <h1>IT Audit Framework</h1>
                  </div>
              <div className="row aboutUs-bottomContainer">
                <div className="col-lg-6 aboutUs-bottomParent">
                  <div className="aboutUs-bottomChildbox">
                    <div className="bottomChildbox">
                    <div className="number-box"><p>01</p></div>
                    <div className="textbox">
                      <h3>Automated Audits</h3>
                      <p>Automate your audit processes with Folsight’s robust audit engine. Our platform streamlines the entire audit lifecycle, from planning and execution to reporting and follow-up, ensuring a thorough and efficient audit process.</p>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col-lg-6 aboutUs-bottomParentright">
                  <div className="aboutUs-bottomChildright">
                    <div className="bottomImg">
                    </div>

                  </div>
                </div>
              </div>
              <div className="row aboutUs-bottomContainer">
              <div className="col-lg-6 aboutUs-bottomParentright">
                  <div className="aboutUs-bottomChildright">
                    <div className="bottomImg">
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 aboutUs-bottomParent">
                  <div className="aboutUs-bottomChildbox">
                    <div className="bottomChildbox">
                    <div className="number-box"><p>02</p></div>
                    <div className="textbox">
                      <h3>Risk Assessment & Management</h3>
                      <p>Conduct comprehensive risk assessments to identify vulnerabilities in your IT infrastructure. Our risk management tools help prioritizes risks, enabling you to implement effective mitigation strategies.</p>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="row aboutUs-bottomContainer">
                <div className="col-lg-6 aboutUs-bottomParent">
                  <div className="aboutUs-bottomChildbox">
                    <div className="bottomChildbox">
                    <div className="number-box"><p>03</p></div>
                    <div className="textbox">
                      <h3>Compliance Tracking</h3>
                      <p>Stay ahead of regulatory changes with real-time compliance monitoring. Folsight’s compliance tracking features ensure that your organization remains compliant with industry standards such as ISO, NIST, GDPR, and more.</p>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col-lg-6 aboutUs-bottomParentright">
                  <div className="aboutUs-bottomChildright">
                    <div className="bottomImg">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="aboutUs-footer">
            <div className="container">
              <div className="row aboutUs-footerContaienr">
                <div className="col-lg-4 aboutUs-footerParent">
                  <div className="aboutUs-footerChild">
                    <div className="leftfooterChild">
                      <img src={img4} alt="" />
                    </div>
                    <div onClick={()=>handleHover(1)} className={hover  === 1 ? "rightfooterChild" : 'rightfooterChild'}>
                      <h1> User-Centric Design</h1> </div>
                  </div>
                </div>
                <div className="col-lg-4 aboutUs-footerParent">
                  <div className="aboutUs-footerChild">
                    <div className="leftfooterChild">
                      <img src={img5} alt="" />
                    </div>
                    <div onClick={()=>handleHover(2)} className={hover  === 2 ? "rightfooterChild" : 'rightfooterChild'}>
                      <h1> Comprehensive Analytics</h1> </div>
                  </div>
                </div>
                <div className="col-lg-4 aboutUs-footerParent">
                  <div className="aboutUs-footerChild">
                    <div className="leftfooterChild">
                      <img src={img6} alt="" />
                    </div>
                    <div onClick={()=>handleHover(3)} className={hover  === 3 ? "rightfooterChild" : 'rightfooterChild'}>
                      <h1> Dedicated Customer Support</h1>  </div>
                  </div>
                </div>
                <div className="col-lg-4 aboutUs-footerParent">
                  <div className="aboutUs-footerChild">
                    <div className="leftfooterChild">
                      <img src={img4} alt="" />
                    </div>
                    <div onClick={()=>handleHover(4)} className={hover  === 4 ? "rightfooterChild" : 'rightfooterChild'}>
                      <h1> Scalable and Flexible</h1> </div>
                  </div>
                </div>
                <div className="col-lg-4 aboutUs-footerParent">
                  <div className="aboutUs-footerChild">
                    <div className="leftfooterChild">
                      <img src={img5} alt="" />
                    </div>
                    <div onClick={()=>handleHover(5)} className={hover  === 5 ? "rightfooterChild" : 'rightfooterChild'}>
                      <h1> What Sets Folsight Apart</h1> </div>
                  </div>
                </div>
              </div>
              <div className="row aboutUsfooterTextDisplay">
                <div className="col-lg-6 aboutUsfooterTextDisplayParent">
                  <div className="aboutUsTextDisplayChild">
                    <img src={img7} alt="" className={hover=== 1 ? 'imgDisplay':'none'} />
                    <img src={img9} alt="" className={hover=== 2 ? 'imgDisplay':'none'} />
                    <img src={img8} alt="" className={hover=== 3 ? 'imgDisplay':'none'} />
                    <img src={img7} alt="" className={hover=== 4 ? 'imgDisplay':'none'} />
                    <img src={img8} alt="" className={hover=== 5 ? 'imgDisplay':'none'} />               
                  </div>
                </div>
                <div className="col-lg-6 aboutUsfooterTextDisplayParent">
                  <div className="aboutUsTextDisplayChild">
                    <div className={hover=== 1 ? 'textdisplay':'none'}>
                      <h1> User-Centric Design  </h1>
                       <p >Folsight is designed with the user in mind. Our intuitive interface and user-friendly features make it easy for organizations to adopt and integrate our solutions into their existing workflows.</p>  
                    </div>
                  <div className="aboutUsTextDisplayChild">
                  <div className={hover=== 2 ? 'textdisplay':'none'}>
                    <h1>Comprehensive Analytics</h1>
                    <p >Leverage the power of data with Folsight’s comprehensive analytics tools. Our platform provides actionable insights that enable you to make informed decisions and drive strategic growth.</p>       
                    </div>
                                         
                  </div>
                  <div className="aboutUsTextDisplayChild">  
                  <div className={hover=== 3 ? 'textdisplay':'none'}>
                      <h1>Dedicated Customer Support</h1> 
                      <p >At Folsight, we prioritize our clients’ success. Our dedicated support team is available 24/7 to assist you with any questions or issues, ensuring a seamless and satisfactory experience.</p>  
                    </div>  
                                         
                  </div>
                  <div className="aboutUsTextDisplayChild">   
                  <div className={hover=== 4 ? 'textdisplay':'none'}>
                      <h1>Scalable and Flexible</h1>
                      <p >Whether you’re a small business or a large enterprise, Folsight’s solutions are scalable and flexible to meet the unique needs of your organization. Our platform grows with you, providing continuous support and functionality.</p>
                    </div>        
                                         
                  </div>
                  <div className="aboutUsTextDisplayChild">
                  <div className={hover=== 5 ? 'textdisplay':'none'}>
                      <h1> What Sets Folsight Apart</h1>
                      <p >Innovation-Driven Solutions: Our platform is built on cutting-edge technology, ensuring that we deliver the most advanced and effective solutions in the industry. We continuously innovate to stay ahead of the evolving needs of our clients.</p>
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

export default AboutUsBody


