import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/navbar.scss'
import logo from '../assets/Images/folsight.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useNavigate } from 'react-router-dom';
import icon1 from '../assets/Images/p1.png'
import icon2 from '../assets/Images/p2.png'
import icon3 from '../assets/Images/p3.png'
import icon4 from '../assets/Images/light.png'
import icon5 from '../assets/Images/gea-02.png'
import icon6 from '../assets/Images/gea-03.png'
import icon7 from '../assets/Images/rd-01.png'
import icon8 from '../assets/Images/rd-02.png'
import icon9 from '../assets/Images/rd-03.png'
import icon10 from '../assets/Images/Icons1-2/5.png'
import icon11 from '../assets/Images/Icons1-2/6.png'
import icon12 from '../assets/Images/Icons1-2/7.png'
import icon13 from '../assets/Images/Icons1-2/8.png'
import icon14 from '../assets/Images/Icons1-2/9.png'
import icon15 from '../assets/Images/Products Icons/AI.png'
import icon16 from '../assets/Images/Products Icons/AuditRoom.png'
import icon17 from '../assets/Images/Products Icons/Compl.ai.png'
import icon18 from '../assets/Images/Products Icons/Integration.png'
import icon19 from '../assets/Images/Products Icons/RiskCore.png'
import icon20 from '../assets/Images/Products Icons/API.png'
import icon21 from '../assets/Images/Company/AboutUs.png'
import icon22 from '../assets/Images/Company/ContactUs.png'
import icon23 from '../assets/Images/Company/Team.png'
// import icon1 from '../assets/Images/p1.png'
// import icon1 from '../assets/Images/p1.png'
// import icon1 from '../assets/Images/p1.png'

const Navbar = () => {
        const [scroll,setScroll] = useState(false)
        const [input,setInput] = useState("")
        const [toggle, setToggle] = useState(false);
        const [openMenu, setOpenMeu] = useState(false)
        const [openMenu2, setOpenMeu2] = useState(false)
        const [openMenu3, setOpenMeu3] = useState(false)
        const [openMenu4, setOpenMeu4] = useState(false)
        const [openMenu5, setOpenMeu5] = useState(false)
        const [openMenu6, setOpenMeu6] = useState(false)
        const navigate =  useNavigate()

        useEffect(() => {
            AOS.init({initClassName: true})
        },[])
    
        const changeBackground = () => {
            if(window.scrollY >= 150){
                setScroll(true);
            }else{
                setScroll(false);
            }
            console.log(setScroll)
        };
        window.addEventListener('scroll',changeBackground);
    
    
      return (
        <div className="navbar">
        <section className="menuSection">
            <div className=" ">
            <header className= {scroll ? 'scrollChange':'navbarChange'}
             // data-aos="fade-in-down" data-aos-delay="300" data-aos-duratio="2000"
              >
        <div className="Container">

            <div className="logo">
            <a onClick={() => navigate('/')}>  <img src={logo} alt="" /></a>
            </div>
            <div className='topbarMenu'>
                <ul className='topbarMenu-ul'>
                    <li className='nav-item' > 
                    <a className='nav-link active' href="#">PRODUCTS</a>
                     <ul className="submenu">
                       <li className='dFlex'>
                       <ul>
                             <li>
                                 <div className="hoverImg">
                              <img src={icon16} alt="" />
                              </div>
                                <p>
                                <a href="#/audit_room">AUDITROOM </a>
                                <span>Tool for comprehensive website audits.</span>
                                {/*  and performance analysis */}
                                </p>
                                  </li>
                                  <li>
                                 <div className="hoverImg">
                              <img src={icon17} alt="" />
                              </div>
                                <p>
                                <a href="#/compliance">COMPL.AI</a>
                                <span>AI-powered tool for compliance management.</span>
                                {/* management and automation. */}
                                </p>
                                  </li>
                                  <li>
                                 <div className="hoverImg">
                              <img src={icon19} alt="" />
                              </div>
                                <p>
                                <a href="#/risk_core">RISKCORE</a>
                                <span>Platform for managing and mitigating.</span>
                                {/* business risks */}
                                </p>
                                  </li>
                       </ul>
                         </li>
                         <li className="dMiddleLine"></li>
                         <li className='dFlex'>
                         <ul>
                         <li> 
                              <div className="hoverImg">
                              <img src={icon15} alt="" />
                              </div>
                                <p>
                                <a href="/">AI </a>
                                <span>A framework for developing, deploying.</span>
                                {/* , and managing AI models and applications */}
                                </p>
                              </li>
                             <li>
                             <div className="hoverImg">
                              <img src={icon20} alt="" />
                              </div>
                                <p>
                                <a href="/">API </a>
                                <span>A system for building, managing software. </span>
                                {/*  systems for seamless data flow */}
                                </p>
                                 </li>
                                 <li>
                                 <div className="hoverImg">
                              <img src={icon18} alt="" />
                              </div>
                                <p>
                                <a href="/">INTEGRATION</a>
                                <span>Connects and unifies different software </span>
                                {/*  systems for seamless data flow */}
                                </p>
                                  </li>

                       </ul>
                        </li>
                    </ul>
                    <div className="triangle"></div>
                    </li>
                    <li className="nav-item" ><a className="nav-link" href="#">FRAMEWORKS</a>
                    <ul className="submenu">
                       <li className='dFlex'>
                       <ul>
                            <li> 
                              <div className="hoverImg">
                              <img src={icon10} alt="" />
                              </div>
                                <p>
                                <a href='#/framework_01'>IS027001</a>
                                <span>Framework for managing information security.</span>
                                {/* Innovation that inspires. Performance that delivers */}
                                </p>
                              </li>
                             <li>
                             <div className="hoverImg">
                              <img src={icon11} alt="" />
                              </div>
                                <p>
                                <a href='#/framework_02'>HIPAA </a>
                                <span>Regulation for protecting health information privacy.</span>
                                </p>
                                 </li>
                                 <li> 
                              <div className="hoverImg">
                              <img src={icon14} alt="" />
                              </div>
                                <p>
                                <a href='#/framework_03'>SOC2 </a>
                                <span>Ensures data security and privacy controls.</span>
                                {/* Innovation that inspires. Performance that delivers */}
                                </p>
                              </li>
                       </ul>
                         </li>
                         <li className="dMiddleLine"></li>
                         <li className='dFlex'>
                         <ul>
                             <li>
                             <div className="hoverImg">
                              <img src={icon12} alt="" />
                              </div>
                                <p>
                                <a href='#/framework_04'>GDPR </a>
                                <span>EU regulation for data privacy protection.</span>
                                </p>
                                 </li>
                                 <li> 
                              <div className="hoverImg">
                              <img src={icon13} alt="" />
                              </div>
                                <p>
                                <a href='#/framework_05'>NIST </a>
                                <span>Framework for cybersecurity standards.</span>
                                {/* Innovation that inspires. Performance that delivers */}
                                </p>
                              </li>
                       </ul>
                        </li>
                    </ul>
                     <div className="triangle"></div>
                    </li>
                    <li className="nav-item"> <a className="nav-link" href="#/plans">PLANS</a>
                    </li>
                    <li className="nav-item"> <a className="nav-link"  href="#">COMPANY</a> 
                         <ul className="submenu2">
                       <li className='dFlex'>
                       <ul>
                            <li> 
                              <div className="hoverImg">
                              <img src={icon21} alt="" />
                              </div>
                                <p>
                                <a href="#/about_us">About US</a>
                                <span>Company overview and mission</span>
                                {/* Innovation that inspires. Performance that delivers */}
                                </p>
                              </li>
                              <li> 
                              <div className="hoverImg">
                              <img src={icon23} alt="" />
                              </div>
                                <p>
                                <a href="#/team">Team</a>
                                <span>  Group of individuals working together.(Meet Us).</span>
                                {/* Innovation that inspires. Performance that delivers */}
                                </p>
                              </li>
                       </ul>
                         </li>
                         <li className="dMiddleLine"></li>
                         <li className='dFlex'>
                         <ul>
                            <li> 
                              <div className="hoverImg">
                              <img src={icon22} alt="" />
                              </div>
                                <p>
                                <a href="#/contact_us">Contact US</a>
                                <span>Reach out for inquiries or support.</span>
                                {/* Innovation that inspires. Performance that delivers */}
                                </p>
                              </li>
                       </ul>
                        </li>
                    </ul>
                    <div className="triangle"></div>
                    </li>
                </ul>
                </div>
                <div className="loginButton">
                <a href='#/login'>LOGIN</a>
               <a href='#/register' className='btn submit'>Sign UP </a>
               <button className="btn toggle navbar-toggler" type="button" onClick={() => setToggle(!toggle)} >
                   <i className="fa-solid svg fa-bars"></i>
                 </button>
                </div>
            </div>
            <div className='mobileResponsive' id={toggle ? "open" : "close"}>
                <ul>
                    <li className=''><a className="nav-link" href="#">PRODUCT</a>
                       <ul className="submenu" id={openMenu ? "open" : "close"}>
                            <li> <a href="#/audit_room">AUDITROOM </a> <span className="i"></span> </li>
                             <li> <a href="#/compliance">COMPL.AI </a> <span className="i"></span> </li>
                             <li> <a href="#/risk_core">RISKCORE</a> <span className="i"></span>  </li>
                        </ul>
                        <i className={openMenu ? "fa-solid fa-minus": "fa-solid fa-plus"} onClick={() => setOpenMeu(!openMenu)}></i>
                    </li>
                    <li className=''><a className="nav-link" href="#">PLATFORM</a>
                    <ul className="submenu" id={openMenu2 ? "open" : "close"}>
                            <li> <a href="#">AI </a> <span className="i"></span> </li>
                             <li> <a href="#">API</a> <span className="i"></span> </li>
                             <li> <a href="#">INTEGRATION</a> <span className="i"></span>  </li>
                        </ul>
                        <i className={openMenu3 ? "fa-solid fa-minus": "fa-solid fa-plus"} onClick={() => setOpenMeu2(!openMenu2)}></i>
                    </li>
                    <li className=''><a className="nav-link" href="#">FRAMEWORKS</a>
                    <ul className="submenu" id={openMenu3 ? "open" : "close"}>
                    <li> <a href='#/framework_01'>IS027001</a> <span className="i"></span> </li>
                             <li> <a href="#/framework_02">HIPAA</a> <span className="i"></span> </li>
                             <li> <a href="#/framework_03">SOC2</a> <span className="i"></span>  </li>
                             <li> <a href="#/framework_04">GDPR</a> <span className="i"></span> </li>
                             <li> <a href="#/framework_05">NIST</a> <span className="i"></span> </li>
                        </ul>
                        <i className={openMenu3 ? "fa-solid fa-minus": "fa-solid fa-plus"} onClick={() => setOpenMeu3(!openMenu3)}></i>
                    </li>
                    <li className='nav-item'> <a className="nav-link"  href="#/plans">PLANS</a> 
                    <i className="fa-solid fa-minus" onClick={() => setOpenMeu5(!openMenu4)}></i>
                    </li>
                    <li className='nav-item'> <a className="nav-link" href="#">COMPANY</a>
                    <ul className="submenu" id={openMenu5 ? "open" : "close"}>
                             <li> <a href="#/about_us">About Us</a> <span className="i"></span> </li>
                             <li> <a href="#/team">Team</a> <span className="i"></span> </li>
                             <li> <a href="#/contact_us">Contact us</a> <span className="i"></span> </li>
                        </ul>
                        <i className={openMenu5 ? "fa-solid fa-minus": "fa-solid fa-plus"} onClick={() => setOpenMeu5(!openMenu5)}></i>
                    </li>
                </ul>
                </div>
            </header> 
            </div>
            </section>
            <div className="headerCover"></div>
            </div>
  )
}

export default Navbar
