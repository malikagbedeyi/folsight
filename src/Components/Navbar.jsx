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
                              <img src={icon1} alt="" />
                              </div>
                                <p>
                                <a href="/">Product 01 </a>
                                <span>Performance that delivers.</span>
                                {/* Innovation that inspires. Performance that delivers */}
                                </p>
                              </li>
                             <li>
                             <div className="hoverImg">
                              <img src={icon2} alt="" />
                              </div>
                                <p>
                                <a href="/">Product 02 </a>
                                <span>Performance that delivers.</span>
                                </p>
                                 </li>
                             <li>
                                 <div className="hoverImg">
                              <img src={icon1} alt="" />
                              </div>
                                <p>
                                <a href="/">Product 03 </a>
                                <span>Performance that delivers.</span>
                                </p>
                                  </li>
                                  <li>
                                 <div className="hoverImg">
                              <img src={icon3} alt="" />
                              </div>
                                <p>
                                <a href="/">Product 04 </a>
                                <span>Performance that delivers</span>
                                </p>
                                  </li>
                       </ul>
                         </li>
                         <li className="dMiddleLine"></li>
                         <li className='dFlex'>
                         <ul>
                            <li> 
                              <div className="hoverImg">
                              <img src={icon7} alt="" />
                              </div>
                                <p>
                                <a href="/">Platform 01 </a>
                                <span>Designed for flexibility/Built empower.</span>
                                {/* Innovation that inspires. Performance that delivers */}
                                </p>
                              </li>
                             <li>
                             <div className="hoverImg">
                              <img src={icon8} alt="" />
                              </div>
                                <p>
                                <a href="/">Platform 02 </a>
                                <span>Designed for flexibility/Built empower.</span>
                                </p>
                                 </li>
                             <li>
                                 <div className="hoverImg">
                              <img src={icon7} alt="" />
                              </div>
                                <p>
                                <a href="/">Platform 03 </a>
                                <span>Designed for flexibility/Built empower.</span>
                                </p>
                                  </li>
                                  <li>
                                 <div className="hoverImg">
                              <img src={icon9} alt="" />
                              </div>
                                <p>
                                <a href="/">Platform 04 </a>
                                <span>Designed for flexibility/Built empower</span>
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
                              <img src={icon1} alt="" />
                              </div>
                                <p>
                                <a onClick={() => navigate('/framework_01')}>IS027001</a>
                                <span>Designed for flexibility/Built empower.</span>
                                {/* Innovation that inspires. Performance that delivers */}
                                </p>
                              </li>
                             <li>
                             <div className="hoverImg">
                              <img src={icon2} alt="" />
                              </div>
                                <p>
                                <a onClick={() => navigate('/framework_02')}>HIPAA </a>
                                <span>Designed for flexibility/Built empower.</span>
                                </p>
                                 </li>
                                 <li> 
                              <div className="hoverImg">
                              <img src={icon3} alt="" />
                              </div>
                                <p>
                                <a onClick={() => navigate('/framework_03')}>SOC2 </a>
                                <span>Designed for flexibility/Built empower.</span>
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
                              <img src={icon8} alt="" />
                              </div>
                                <p>
                                <a onClick={() => navigate('/framework_04')}>GDPR </a>
                                <span>Designed for flexibility/Built empower.</span>
                                </p>
                                 </li>
                                 <li> 
                              <div className="hoverImg">
                              <img src={icon7} alt="" />
                              </div>
                                <p>
                                <a onClick={() => navigate('/framework_05')}>NIST </a>
                                <span>Designed for flexibility/Built empower.</span>
                                {/* Innovation that inspires. Performance that delivers */}
                                </p>
                              </li>
                       </ul>
                        </li>
                    </ul>
                     <div className="triangle"></div>
                    </li>
                    <li className="nav-item"> <a className="nav-link" href="#">PLANS</a>
                    </li>
                    <li className="nav-item"> <a className="nav-link"  href="#">COMPANY</a> 
                         <ul className="submenu2">
                       <li className='dFlex'>
                       <ul>
                            <li> 
                              <div className="hoverImg">
                              <img src={icon1} alt="" />
                              </div>
                                <p>
                                <a href="#/about_us">About US</a>
                                <span>Performance that delivers.</span>
                                {/* Innovation that inspires. Performance that delivers */}
                                </p>
                              </li>
                              <li> 
                              <div className="hoverImg">
                              <img src={icon2} alt="" />
                              </div>
                                <p>
                                <a href="/">Team</a>
                                <span>Performance that delivers.</span>
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
                              <img src={icon7} alt="" />
                              </div>
                                <p>
                                <a href="/">Contact US</a>
                                <span>Designed for flexibility/Built empower.</span>
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
                <a onClick={() => navigate('/login')}>LOGIN</a>
               <button onClick={() => navigate('/register')}className='btn submit'> Sign UP </button>
               <button className="btn toggle navbar-toggler" type="button" onClick={() => setToggle(!toggle)} >
                          <i className="fa-solid svg fa-bars"></i>
                 </button>
                </div>
            </div>
            {/* <ul>
                    <li className=''><a className="nav-link" href="#">PRODUCTS</a>
                       <ul className="submenu" id={openMenu ? "open" : "close"}>
                            <li> <a href="/">Product 01 </a> <span className="i"></span> </li>
                             <li> <a href="#">Product 02</a> <span className="i"></span> </li>
                             <li> <a href="#">Product 03</a> <span className="i"></span>  </li>
                             <li> <a href="#">Product 04</a> <span className="i"></span> </li>
                        </ul>
                        <i className="fa-solid fa-plus" onClick={() => setOpenMeu(!openMenu)}></i>
                    </li>
    
                    <li className=''><a className="nav-link" href="#">PLATFORMS</a>
                    <ul className="submenu" id={openMenu ? "open" : "close"}>
                            <li> <a href="/">Platform 01 </a> <span className="i"></span> </li>
                             <li> <a href="#">Platform 02</a> <span className="i"></span> </li>
                             <li> <a href="#">Platform 03</a> <span className="i"></span>  </li>
                             <li> <a href="#">Platform 04</a> <span className="i"></span> </li>
                        </ul>
                    <i className="fa-solid fa-plus" onClick={() => setOpenMeu2(!openMenu2)}></i>
                    </li>
    
                    <li className='nav-item'> <a className="nav-link" href="#">FRAMEWORKS</a>
                    <ul className="submenu" id={openMenu ? "open" : "close"}>
                            <li> <a href="/">IS027001</a> <span className="i"></span> </li>
                             <li> <a href="#">HIPAA</a> <span className="i"></span> </li>
                             <li> <a href="#">SOC2</a> <span className="i"></span>  </li>
                             <li> <a href="#">GDPR</a> <span className="i"></span> </li>
                             <li> <a href="#">NIST</a> <span className="i"></span> </li>
                        </ul>
                        <i className="fa-solid fa-plus" onClick={() => setOpenMeu3(!openMenu3)}></i>
                    </li>
                    <li className='nav-item'> <a className="nav-link"  href="#">PLANS</a> 
                    </li>
                    <li className='nav-item'> <a className="nav-link" href="#">COMPANY</a>
                    <ul className="submenu" id={openMenu ? "open" : "close"}>
                            <li> <a href="/">About Us</a> <span className="i"></span> </li>
                             <li> <a href="#">Team</a> <span className="i"></span> </li>
                             <li> <a href="#">Contact us</a> <span className="i"></span>  </li>
                        </ul>
                          <i className="fa-solid fa-plus" onClick={() => setOpenMeu6(!openMenu6)}></i>
                    </li>
                </ul> */}
            <div className='mobileResponsive' id={toggle ? "open" : "close"}>
                <ul>
                    <li className=''><a className="nav-link" href="#">PRODUCT</a>
                       <ul className="submenu" id={openMenu ? "open" : "close"}>
                            <li> <a href="/">Product 01 </a> <span className="i"></span> </li>
                             <li> <a href="#">Product 02</a> <span className="i"></span> </li>
                             <li> <a href="#">Product 03</a> <span className="i"></span>  </li>
                             <li> <a href="#">Product 04</a> <span className="i"></span> </li>
                        </ul>
                        <i className={openMenu ? "fa-solid fa-minus": "fa-solid fa-plus"} onClick={() => setOpenMeu(!openMenu)}></i>
                    </li>
    
                    <li className=''><a className="nav-link" href="#">PLATFORM</a>
                    <ul className="submenu" id={openMenu2 ? "open" : "close"}>
                            <li> <a href="/">Platform 01 </a> <span className="i"></span> </li>
                             <li> <a href="#">Platform 02</a> <span className="i"></span> </li>
                             <li> <a href="#">Platform 03</a> <span className="i"></span>  </li>
                             <li> <a href="#">Platform 04</a> <span className="i"></span> </li>
                        </ul>
                        <i className={openMenu3 ? "fa-solid fa-minus": "fa-solid fa-plus"} onClick={() => setOpenMeu2(!openMenu2)}></i>
                    </li>
                    <li className=''><a className="nav-link" href="#">FRAMEWORKS</a>
                    <ul className="submenu" id={openMenu3 ? "open" : "close"}>
                    <li> <a href="/">IS027001</a> <span className="i"></span> </li>
                             <li> <a href="#">HIPAA</a> <span className="i"></span> </li>
                             <li> <a href="#">SOC2</a> <span className="i"></span>  </li>
                             <li> <a href="#">GDPR</a> <span className="i"></span> </li>
                             <li> <a href="#">NIST</a> <span className="i"></span> </li>
                        </ul>
                        <i className={openMenu3 ? "fa-solid fa-minus": "fa-solid fa-plus"} onClick={() => setOpenMeu3(!openMenu3)}></i>
                    </li>
                    <li className='nav-item'> <a className="nav-link"  href="#">PLANS</a> 
                    <i className="fa-solid fa-minus" onClick={() => setOpenMeu5(!openMenu4)}></i>
                    </li>
                    <li className='nav-item'> <a className="nav-link" href="#">COMPANY</a>
                    <ul className="submenu" id={openMenu5 ? "open" : "close"}>
                             <li> <a href="/">About Us</a> <span className="i"></span> </li>
                             <li> <a href="#">Team</a> <span className="i"></span> </li>
                             <li> <a href="#">Contact us</a> <span className="i"></span> </li>
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
